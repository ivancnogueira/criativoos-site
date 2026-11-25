import dotenv from "dotenv";
import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

try {
  if (typeof process.loadEnvFile === "function") {
    process.loadEnvFile();
  }
} catch {
  // .env pode não existir em produção quando variáveis vêm do painel
}

try {
  dotenv.config({ quiet: true });
} catch {
  // Variáveis de ambiente opcionais
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRIVATE_NOINDEX_PATHS = new Set([
  "/obrigado",
  "/suporte",
  "/suporte/admin",
  "/meu-roteiro",
  "/kit-whatsapp",
  "/apresentacao-migracao",
  "/apresentacao-black",
  "/apresentacao",
]);

function readTicketsFile(ticketsFilePath) {
  try {
    if (!fs.existsSync(ticketsFilePath)) return [];
    const raw = fs.readFileSync(ticketsFilePath, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeTicketsFile(ticketsFilePath, tickets) {
  const dir = path.dirname(ticketsFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(ticketsFilePath, JSON.stringify(tickets, null, 2), "utf8");
}

async function notifySupportTeam(ticket) {
  const supportEmail = process.env.SUPPORT_EMAIL || "suporte@criativoos.com.br";
  const subject = `[Ticket ${ticket.protocol}] ${ticket.category} - ${ticket.plan} (${ticket.os})`;
  const message = [
    `Protocolo: ${ticket.protocol}`,
    `Nome: ${ticket.name}`,
    `E-mail de compra: ${ticket.email}`,
    `WhatsApp: ${ticket.whatsapp || "Não informado"}`,
    `Plano: ${ticket.plan}`,
    `Sistema: ${ticket.os}`,
    `Categoria: ${ticket.category}`,
    `Data: ${ticket.createdAt}`,
    ``,
    `Descrição:`,
    ticket.description,
  ].join("\n");

  const tasks = [];

  if (process.env.SUPPORT_WEBHOOK_URL) {
    tasks.push(
      fetch(process.env.SUPPORT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...ticket, subject, text: message }),
      }).catch(() => null)
    );
  }

  tasks.push(
    fetch(`https://formsubmit.co/ajax/${encodeURIComponent(supportEmail)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: subject,
        _replyto: ticket.email,
        _template: "table",
        Protocolo: ticket.protocol,
        Nome: ticket.name,
        Email: ticket.email,
        WhatsApp: ticket.whatsapp || "Não informado",
        Plano: ticket.plan,
        Sistema: ticket.os,
        Categoria: ticket.category,
        Mensagem: ticket.description,
      }),
    }).catch(() => null)
  );

  await Promise.race([
    Promise.allSettled(tasks),
    new Promise((resolve) => setTimeout(resolve, 2500)),
  ]);
}

export function createSiteApp(options = {}) {
  const DIST_DIR = options.distDir || path.join(__dirname, "dist");
  const TICKETS_FILE =
    options.ticketsFile || path.join(__dirname, "data", "support-tickets.json");
  const ADMIN_KEY = process.env.SUPPORT_ADMIN_KEY || "criativoos2026";
  const app = express();

  app.disable("x-powered-by");
  app.use(express.json({ limit: "256kb" }));

  app.use((req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");

    const cleanPath = (req.path || "/").replace(/\/+$/, "") || "/";
    if (PRIVATE_NOINDEX_PATHS.has(cleanPath)) {
      res.setHeader("X-Robots-Tag", "noindex, nofollow");
    }
    next();
  });

  app.get("/api/health", (_req, res) => {
    res.status(200).json({
      status: "ok",
      service: "criativoos-site",
      release: "v1.0.3",
      timestamp: new Date().toISOString(),
    });
  });

  // Endpoints da Central de Suporte / Tickets
  app.post("/api/tickets", async (req, res) => {
    const body = req.body || {};
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const whatsapp = String(body.whatsapp || "").trim();
    const plan = String(body.plan || "Não informado").trim();
    const os = String(body.os || "Não informado").trim();
    const category = String(body.category || "Suporte Técnico").trim();
    const description = String(body.description || "").trim();

    if (!name || !email || !description) {
      return res
        .status(400)
        .json({ error: "Nome, e-mail e descrição são obrigatórios." });
    }

    const now = new Date();
    const ymd = now.toISOString().slice(0, 10).replace(/-/g, "");
    const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
    const ticket = {
      id: `tck_${Date.now()}_${rand}`,
      protocol: `TCK-${ymd}-${rand}`,
      name,
      email,
      whatsapp,
      plan,
      os,
      category,
      description,
      status: "aberto",
      createdAt: now.toISOString(),
    };

    const tickets = readTicketsFile(TICKETS_FILE);
    tickets.unshift(ticket);
    writeTicketsFile(TICKETS_FILE, tickets);

    const isTestTicket =
      req.headers["x-test-ticket"] === "1" ||
      process.env.CRIATIVOOS_DISABLE_EXTERNAL_NOTIFY === "1";

    if (!isTestTicket) {
      await notifySupportTeam(ticket);
    }

    return res.status(201).json({
      ok: true,
      notified: !isTestTicket,
      ticket,
    });
  });

  app.get("/api/tickets", (req, res) => {
    const reqKey = String(req.headers["x-admin-key"] || "");
    if (!reqKey || reqKey !== ADMIN_KEY) {
      return res.status(401).json({ error: "Chave administrativa inválida." });
    }
    const tickets = readTicketsFile(TICKETS_FILE);
    return res.status(200).json({ tickets });
  });

  app.patch("/api/tickets/:id", (req, res) => {
    const reqKey = String(req.headers["x-admin-key"] || "");
    if (!reqKey || reqKey !== ADMIN_KEY) {
      return res.status(401).json({ error: "Chave administrativa inválida." });
    }
    const nextStatus = String(req.body?.status || "");
    if (!["aberto", "em_analise", "resolvido"].includes(nextStatus)) {
      return res.status(400).json({ error: "Status inválido." });
    }
    const tickets = readTicketsFile(TICKETS_FILE);
    const idx = tickets.findIndex((t) => t.id === req.params.id);
    if (idx < 0) {
      return res.status(404).json({ error: "Chamado não encontrado." });
    }
    tickets[idx] = {
      ...tickets[idx],
      status: nextStatus,
      updatedAt: new Date().toISOString(),
    };
    writeTicketsFile(TICKETS_FILE, tickets);
    return res.status(200).json({ ok: true, ticket: tickets[idx] });
  });

  app.delete("/api/tickets/:id", (req, res) => {
    const reqKey = String(req.headers["x-admin-key"] || "");
    if (!reqKey || reqKey !== ADMIN_KEY) {
      return res.status(401).json({ error: "Chave administrativa inválida." });
    }
    const tickets = readTicketsFile(TICKETS_FILE);
    const next = tickets.filter((t) => t.id !== req.params.id);
    writeTicketsFile(TICKETS_FILE, next);
    return res.status(200).json({ ok: true });
  });

  if (fs.existsSync(DIST_DIR)) {
    app.use(
      express.static(DIST_DIR, {
        maxAge: "7d",
        etag: true,
        setHeaders: (res, filePath) => {
          const isHashedAsset = filePath.includes(`${path.sep}assets${path.sep}`);
          if (!isHashedAsset) {
            res.setHeader("Cache-Control", "no-cache");
          }
          if (filePath.endsWith(".txt")) {
            res.setHeader("Content-Type", "text/plain; charset=utf-8");
          } else if (filePath.endsWith(".xml")) {
            res.setHeader("Content-Type", "application/xml; charset=utf-8");
          } else if (filePath.endsWith(".webmanifest")) {
            res.setHeader("Content-Type", "application/manifest+json; charset=utf-8");
          }
        },
      })
    );
  }

  // Fallback SPA para todas as rotas comerciais do CriativoOS
  app.get("*", (_req, res) => {
    const indexPath = path.join(DIST_DIR, "index.html");
    if (fs.existsSync(indexPath)) {
      res.setHeader("Cache-Control", "no-cache");
      return res.sendFile(indexPath);
    }
    return res.status(404).json({ error: "dist_not_built" });
  });

  return app;
}
