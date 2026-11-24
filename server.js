import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

if (typeof process.loadEnvFile === "function") {
  try {
    process.loadEnvFile();
  } catch {
    // Variáveis podem ser injetadas pelo ambiente / aaPanel / PM2
  }
} else {
  try {
    const dotenv = await import("dotenv");
    dotenv.default?.config?.();
  } catch {
    // dotenv opcional
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createSiteApp(options = {}) {
  const DIST_DIR = options.distDir || path.join(__dirname, "dist");
  const app = express();

  app.disable("x-powered-by");

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
        maxAge: "1d",
        etag: true,
        setHeaders: (res, filePath) => {
          if (filePath.endsWith(".html")) {
            res.setHeader("Cache-Control", "no-cache");
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

const isEntryPoint =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename);

if (isEntryPoint) {
  const args = process.argv.slice(2);
  const cliPort =
    args.find((arg) => /^\d+$/.test(arg)) ||
    (args.includes("--port") ? args[args.indexOf("--port") + 1] : null);
  const PORT = Number(process.env.PORT || cliPort || 3008);

  const app = createSiteApp();
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`\n======================================================`);
    console.log(`CRIATIVOOS | SITE OFICIAL & APRESENTAÇÕES NÍVEL ÔMEGA`);
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
    console.log(`Pronto para aaPanel / PM2 / Nginx (criativoos.com.br)`);
    console.log(`======================================================\n`);
  });
}
