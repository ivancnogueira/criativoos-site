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
  "/meu-roteiro",
  "/kit-whatsapp",
  "/apresentacao-migracao",
  "/apresentacao-black",
  "/apresentacao",
]);

export function createSiteApp(options = {}) {
  const DIST_DIR = options.distDir || path.join(__dirname, "dist");
  const app = express();

  app.disable("x-powered-by");
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
