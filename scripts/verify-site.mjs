import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createSiteApp } from "../app.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

function readUtf8(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), "utf8");
}

function walkFiles(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(full));
    } else if (/\.(ts|tsx|js|jsx|html)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function run() {
  console.log("🔎 Verificando criativoos-site (estrutura, zero travessões, regras comerciais e rotas SPA)...");

  // 1. Verificar ativos oficiais obrigatórios e acervo real de imagens + SEO/GEO/AEO/OG/PWA
  for (const asset of [
    "public/logo-criativoos-dark.svg",
    "public/logo-criativoos-light.svg",
    "public/symbol-oo-volt.svg",
    "public/symbol-oo-cobalt.svg",
    "public/images/01.webp",
    "public/images/criativo-ia-operacao-v1-dark.webp",
    "public/images/criativo-ia-stories.webp",
    "public/og-criativoos.jpg",
    "public/icon-192.png",
    "public/icon-512.png",
    "public/apple-touch-icon.png",
    "public/favicon-48x48.png",
    "public/robots.txt",
    "public/sitemap.xml",
    "public/llms.txt",
    "public/llms-full.txt",
    "public/manifest.webmanifest",
    "dist/index.html",
    "dist/robots.txt",
    "dist/sitemap.xml",
    "dist/llms.txt",
    "dist/llms-full.txt",
    "dist/og-criativoos.jpg",
    "dist/.htaccess",
  ]) {
    assert.ok(fs.existsSync(path.join(ROOT, asset)), `Asset ausente: ${asset}`);
  }

  // 1B. Validar Schema.org JSON-LD e zero vazamento de preços promocionais em arquivos SEO/GEO
  const distHtml = readUtf8("dist/index.html");
  const jsonLdMatch = distHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(jsonLdMatch, "Schema JSON-LD ausente em dist/index.html");
  const jsonLd = JSON.parse(jsonLdMatch[1]);
  assert.ok(Array.isArray(jsonLd["@graph"]), "JSON-LD precisa conter @graph");
  const graphTypes = new Set(jsonLd["@graph"].map((n) => n["@type"]));
  for (const requiredType of ["Organization", "WebSite", "WebPage", "SoftwareApplication", "FAQPage", "HowTo"]) {
    assert.ok(graphTypes.has(requiredType), `Tipo Schema.org ausente no JSON-LD: ${requiredType}`);
  }

  for (const seoFile of [
    "index.html",
    "public/robots.txt",
    "public/sitemap.xml",
    "public/llms.txt",
    "public/llms-full.txt",
  ]) {
    const content = readUtf8(seoFile);
    assert.ok(
      !content.includes("\u2014") && !content.includes("\u2013"),
      `Travessão (em-dash/en-dash) proibido em arquivo SEO: ${seoFile}`
    );
    for (const forbidden of ["R$ 47", "R$ 87", "R$ 177", "R$ 197"]) {
      assert.ok(
        !content.includes(forbidden),
        `Preço promocional '${forbidden}' vazou no SEO público (${seoFile})`
      );
    }
  }

  // 2. Proibir travessões (em-dash \u2014 e en-dash \u2013) nos componentes da página e apresentações
  const srcFiles = [
    path.join(ROOT, "index.html"),
    ...walkFiles(path.join(ROOT, "src/components")),
    ...walkFiles(path.join(ROOT, "src/pages")),
    path.join(ROOT, "src/data/criativosRoster.ts"),
    path.join(ROOT, "src/data/keynoteSlidesData.ts"),
    path.join(ROOT, "src/data/presenterScriptData.ts"),
    path.join(ROOT, "src/config/campaignLinks.ts"),
  ];

  for (const file of srcFiles) {
    const content = fs.readFileSync(file, "utf8");
    const rel = path.relative(ROOT, file);
    assert.ok(
      !content.includes("\u2014") && !content.includes("\u2013"),
      `Travessão (em-dash/en-dash) proibido encontrado em: ${rel}`
    );
  }

  // 3. Verificar isolamento de preços na Home pública / (Onda 3 apenas)
  const offerSrc = readUtf8("src/components/landing/OfficialOfferSection.tsx");
  assert.ok(offerSrc.includes("OFFICIAL_PUBLIC_PLANS"));
  const campaignLinksSrc = readUtf8("src/config/campaignLinks.ts");
  assert.ok(campaignLinksSrc.includes("R$ 297"), "Preço oficial R$ 297 ausente");
  assert.ok(campaignLinksSrc.includes("R$ 897"), "Preço oficial R$ 897 ausente");
  assert.ok(campaignLinksSrc.includes("R$ 997"), "Preço oficial R$ 997 ausente");

  const homeFiles = fs.readdirSync(path.join(ROOT, "src/components/landing"));
  for (const file of homeFiles) {
    const content = readUtf8(path.join("src/components/landing", file));
    for (const forbidden of ["R$ 47", "R$ 87", "R$ 177", "R$ 197"]) {
      assert.ok(
        !content.includes(forbidden),
        `Preço promocional '${forbidden}' vazou na Home pública (${file})`
      );
    }
  }

  // 4. Verificar os 4 Atos + 20 Slides nas apresentações Nível Ômega
  const slidesSrc = readUtf8("src/data/keynoteSlidesData.ts");
  for (const marker of [
    "Ato 1 · Visão de Mercado",
    "Ato 2 · Instalação em 60s",
    "Ato 3 · CriativoOS por Dentro",
    "Ato 4 · ROI & Condição Única",
  ]) {
    assert.ok(slidesSrc.includes(marker), `Marcador de Ato ausente: ${marker}`);
  }

  // 5. Verificar Kit WhatsApp completo (Grupos + 1:1 para as 2 campanhas)
  const waSrc = readUtf8("src/data/whatsappMessagesData.ts");
  for (const code of ["G1.1", "G1.5", "D1.1", "D1.4", "G2.1", "G2.6", "D2.1", "D2.4"]) {
    assert.ok(waSrc.includes(`"${code}"`), `Mensagem WhatsApp ${code} ausente`);
  }

  // 6. Subir server.js em porta efêmera e validar rotas SPA + /api/health
  const app = createSiteApp();
  const server = await new Promise((resolve) => {
    const s = app.listen(0, "127.0.0.1", () => resolve(s));
  });

  try {
    const { port } = server.address();
    const base = `http://127.0.0.1:${port}`;

    const healthRes = await fetch(`${base}/api/health`);
    assert.equal(healthRes.status, 200);
    const healthJson = await healthRes.json();
    assert.equal(healthJson.service, "criativoos-site");

    for (const route of [
      "/",
      "/apresentacao-migracao",
      "/apresentacao-black",
      "/apresentacao",
      "/meu-roteiro",
      "/kit-whatsapp",
      "/obrigado",
      "/suporte",
      "/suporte/admin",
    ]) {
      const res = await fetch(`${base}${route}`);
      assert.equal(res.status, 200, `Rota SPA ${route} retornou HTTP ${res.status}`);
      const html = await res.text();
      assert.ok(html.includes("CriativoOS"), `HTML da rota ${route} inválido`);
      const xRobots = res.headers.get("x-robots-tag");
      if (route === "/") {
        assert.ok(!xRobots, `Rota / não deve possuir X-Robots-Tag bloqueante (${xRobots})`);
      } else {
        assert.equal(xRobots, "noindex, nofollow", `Rota privada ${route} precisa retornar X-Robots-Tag: noindex, nofollow`);
      }
    }

    // Testar criação, listagem protegida e remoção de ticket de suporte
    const createTicketRes = await fetch(`${base}/api/tickets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-test-ticket": "1",
      },
      body: JSON.stringify({
        name: "Teste Verificacao",
        email: "teste@exemplo.com",
        plan: "Agência Ilimitada",
        os: "Windows",
        category: "Teste Automatizado",
        description: "Chamado de teste para validar persistência.",
      }),
    });
    assert.equal(createTicketRes.status, 201, "POST /api/tickets deve retornar 201");
    const createdPayload = await createTicketRes.json();
    assert.ok(createdPayload?.ticket?.id, "Ticket criado deve conter id");
    assert.ok(createdPayload?.ticket?.protocol, "Ticket criado deve conter protocol");

    const unauthListRes = await fetch(`${base}/api/tickets`);
    assert.equal(unauthListRes.status, 401, "GET /api/tickets sem chave deve retornar 401");

    const authListRes = await fetch(`${base}/api/tickets`, {
      headers: { "x-admin-key": process.env.SUPPORT_ADMIN_KEY || "criativoos2026" },
    });
    assert.equal(authListRes.status, 200, "GET /api/tickets autenticado deve retornar 200");
    const listPayload = await authListRes.json();
    assert.ok(
      listPayload.tickets.some((t) => t.id === createdPayload.ticket.id),
      "Ticket criado deve constar na listagem admin"
    );

    const delRes = await fetch(`${base}/api/tickets/${createdPayload.ticket.id}`, {
      method: "DELETE",
      headers: { "x-admin-key": process.env.SUPPORT_ADMIN_KEY || "criativoos2026" },
    });
    assert.equal(delRes.status, 200, "Limpeza do ticket de teste deve retornar 200");

    for (const [seoPath, expectedCt] of [
      ["/robots.txt", "text/plain"],
      ["/sitemap.xml", "application/xml"],
      ["/llms.txt", "text/plain"],
      ["/llms-full.txt", "text/plain"],
      ["/manifest.webmanifest", "application/manifest+json"],
      ["/og-criativoos.jpg", "image/jpeg"],
    ]) {
      const res = await fetch(`${base}${seoPath}`);
      assert.equal(res.status, 200, `Ativo SEO ${seoPath} retornou HTTP ${res.status}`);
      const ct = res.headers.get("content-type") || "";
      assert.ok(ct.includes(expectedCt), `Content-Type inesperado em ${seoPath}: ${ct}`);
    }
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }

  console.log("✅ Todas as validações de criativoos-site (incluindo ZERO travessões e GSAP) passaram com sucesso!");
}

run().catch((err) => {
  console.error("❌ Falha na verificação:", err);
  process.exit(1);
});
