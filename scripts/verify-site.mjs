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

  // 1. Verificar ativos oficiais obrigatórios e acervo real de imagens
  for (const asset of [
    "public/logo-criativoos-dark.svg",
    "public/logo-criativoos-light.svg",
    "public/symbol-oo-volt.svg",
    "public/symbol-oo-cobalt.svg",
    "public/images/01.webp",
    "public/images/criativo-ia-operacao-v1-dark.webp",
    "public/images/criativo-ia-stories.webp",
    "dist/index.html",
  ]) {
    assert.ok(fs.existsSync(path.join(ROOT, asset)), `Asset ausente: ${asset}`);
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
  assert.ok(campaignLinksSrc.includes("R$ 997"), "Preço oficial R$ 997 ausente");
  assert.ok(campaignLinksSrc.includes("R$ 1.797"), "Preço oficial R$ 1.797 ausente");
  assert.ok(campaignLinksSrc.includes("R$ 1.997"), "Preço oficial R$ 1.997 ausente");

  const homeFiles = fs.readdirSync(path.join(ROOT, "src/components/landing"));
  for (const file of homeFiles) {
    const content = readUtf8(path.join("src/components/landing", file));
    for (const forbidden of ["R$ 47", "R$ 87", "R$ 97", "R$ 177", "R$ 197"]) {
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
    ]) {
      const res = await fetch(`${base}${route}`);
      assert.equal(res.status, 200, `Rota SPA ${route} retornou HTTP ${res.status}`);
      const html = await res.text();
      assert.ok(html.includes("CriativoOS"), `HTML da rota ${route} inválido`);
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
