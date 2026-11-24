# CriativoOS — Site Oficial (`criativoos.com.br`), Apresentações Nível Ômega & Kit de Campanha

Ecossistema comercial do **CriativoOS v1.0.3** desenvolvido em React 19 + Vite + Tailwind CSS + GSAP ScrollTrigger + Express.

## Rotas Disponíveis

- **`/`** — Landing Page Oficial Pública (`R$ 997 / R$ 1.797 / R$ 1.997` Anual), Hero 1B, coreografia GSAP com os 15 Mascotes Vivos `oO`, 5 motores completos (`3A..3E`), simulador do Cockpit, Bento Grid intercalada e simulador WhatsApp.
- **`/apresentacao-migracao`** — Apresentação Interativa **"Nível Ômega"** em **4 Atos / 20 Slides** (`R$ 47 / R$ 87 / R$ 97`).
- **`/apresentacao-black`** *(e `/apresentacao`)* — Apresentação Interativa **"Nível Ômega"** para Lançamento & Black Friday (`R$ 97 / R$ 177 / R$ 197`).
- **`/meu-roteiro`** — Teleprompter sincronizado com os 20 slides e 4 Atos.
- **`/kit-whatsapp`** — Central com as mensagens formatadas para WhatsApp e cópia em 1 clique.
- **`/obrigado`** — Página pós-compra oficial com instruções dos instaladores **`CriativoOS v1.0.3`**.
- **`/api/health`** — Endpoint JSON de healthcheck compatível com Express, Docker, Easypanel, Hostinger, aaPanel e Vercel.

## Desenvolvimento Local

```bash
cp .env.example .env
npm install
npm run dev
```

Para validar tipos TypeScript, gerar o build de produção e rodar a suíte de verificação:

```bash
npm run typecheck
npm run build
npm run verify
npm start
```

> **Importante:** Variáveis iniciadas com `VITE_*` (links de checkout e WhatsApp no `.env.example`) são embutidas no momento do `npm run build`. Sempre configure essas variáveis no painel de hospedagem antes de executar o build.

---

## Guias de Hospedagem Prontos

### 1. Vercel
O arquivo `vercel.json` e a função `api/health.js` já configuram framework Vite, fallback automático para todas as rotas SPA, cache imutável em `/assets/*` e `/api/health`:
1. Importe o repositório `criativoos-site` na Vercel.
2. Cadastre as variáveis `VITE_CHECKOUT_*` e `VITE_SUPPORT_WHATSAPP_URL` em **Settings -> Environment Variables**.
3. Clique em **Deploy** (Build Command: `npm run build`, Output Directory: `dist`).

### 2. Hostinger (Web Apps Node.js ou Hospedagem Web/Estática)
- **Via Hostinger Web Apps (Node.js):**
  1. Conecte o repositório GitHub selecionando Node 20+.
  2. Configure as variáveis `VITE_*` no painel antes do deploy (o Hostinger injeta `PORT` automaticamente).
  3. Build Command: `npm run build` | Start Command: `npm start` (`node server.js`).
- **Via Hospedagem Web Tradicional / Estática (Apache/LiteSpeed):**
  1. Execute `npm run build` localmente (ou via pipeline).
  2. O arquivo `public/.htaccess` já é copiado automaticamente para `dist/.htaccess` com rewrite SPA e cache.
  3. Envie o conteúdo inteiro da pasta `dist/` para `public_html/`.

### 3. Easypanel (Docker ou Nixpacks)
- **Opção recomendada (`Dockerfile`):**
  1. Crie um novo Service **App** apontando para este repositório GitHub.
  2. Em **Build**, escolha **Dockerfile** (`./Dockerfile`, porta interna `3008`).
  3. Se usar checkouts customizados no build, passe as variáveis `VITE_*` como **Build Args** no painel (ou configure no `.env` do build).
- **Opção Buildpack / Nixpacks:** o arquivo `nixpacks.toml` também já está pronto (`npm ci --include=dev`, `npm run build`, `npm start` na porta `PORT`).

### 4. aaPanel (Node Project / PM2 + Nginx Reverse Proxy)
1. Suba o código no diretório do site (ou clone via Git) e configure o `.env` a partir de `.env.example`.
2. Rode `./deploy.sh` (instala dependências de build, gera `dist/` e roda `npm run verify`).
3. Inicie pelo **PM2 Manager** usando `ecosystem.config.cjs` (porta padrão `3008`) ou pelo módulo **Node Project** apontando para `server.js` (`npm start`).
4. No **Website -> Reverse Proxy**, aponte o domínio `criativoos.com.br` para `http://127.0.0.1:3008`.
