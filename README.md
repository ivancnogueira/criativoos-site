# CriativoOS — Site Oficial (`criativoos.com.br`), Apresentações Nível Ômega & Kit de Campanha

Ecossistema comercial do **CriativoOS v1.0.3** desenvolvido em React 19 + Vite + Tailwind CSS + GSAP ScrollTrigger + Express.

## Rotas Disponíveis

- **`/`** — Landing Page Oficial Pública (`R$ 997 / R$ 1.797 / R$ 1.997` Anual), Hero 1B, coreografia GSAP com os 15 Mascotes Vivos `oO`, 5 motores completos (`3A..3E`), simulador do Cockpit, Bento Grid intercalada e simulador WhatsApp.
- **`/apresentacao-migracao`** — Apresentação Interativa **"Nível Ômega"** em **4 Atos / 20 Slides** (`R$ 47 / R$ 87 / R$ 97`).
- **`/apresentacao-black`** *(e `/apresentacao`)* — Apresentação Interativa **"Nível Ômega"** para Lançamento & Black Friday (`R$ 97 / R$ 177 / R$ 197`).
- **`/meu-roteiro`** — Teleprompter sincronizado com os 20 slides e 4 Atos.
- **`/kit-whatsapp`** — Central com as mensagens formatadas para WhatsApp e cópia em 1 clique.
- **`/obrigado`** — Página pós-compra oficial com instruções dos instaladores **`CriativoOS v1.0.3`**.
- **`/changelog`** - Página pública oficial de notas de versão (`v1.0.0` até a release atual), com filtros, busca e âncoras por versão (`#v1-0-9`).
- **`/api/health`** — Endpoint JSON de healthcheck compatível com Express, Docker, Easypanel, Hostinger, aaPanel e Vercel.

## Contrato Obrigatório de Changelog por Release

Sempre que uma nova versão do CriativoOS for lançada (`npm run release:bump` ou nova tag `vX.Y.Z` no repositório principal), atualize `src/data/changelogData.ts` (inserindo a nova versão no topo com âncora `#vX-Y-Z` e sem travessões), atualize `<lastmod>` em `public/sitemap.xml`, execute `npm run typecheck; npm run build; npm run verify` e faça commit + push deste repositório.

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

### 2. Hostinger (Web Apps — **Selecione o preset `Vite`**)
> **Importante:** Como o projeto possui `server.js` para VPS/aaPanel/Docker, a Hostinger Web Apps pode autodetectar como `Express` por padrão — **não deixe em `Express`** porque esse preset não executa `npm run build` para gerar a pasta `dist/`.

- **Via Hostinger Web Apps (Recomendado):**
  1. Em **Configuração predefinida**, altere de `Express` para **`Vite`**.
  2. Confira **Diretório raiz:** `./`, **Comando de compilação:** `npm run build` e **Diretório de saída:** `dist`.
  3. **Variáveis de ambiente:** **não são obrigatórias** para o site subir no ar. Se ainda não cadastrar nada, o site publica normalmente com placeholders seguros (`#checkout-*`). Quando quiser ativar links reais de checkout e WhatsApp, adicione `VITE_CHECKOUT_*` e `VITE_SUPPORT_WHATSAPP_URL` antes de salvar e reimplantar.
  4. Clique em **Salvar e reimplantar**. O arquivo `public/.htaccess` é copiado automaticamente para `dist/.htaccess` garantindo todas as rotas SPA sem 404.
  *(Nota: `app.js` + `server.js` também foram ajustados sem `top-level await` para compatibilidade caso execute sob `lsnode.js` em modo Express após `npm run build`.)*
- **Via Hospedagem Web Tradicional / Estática (Apache/LiteSpeed):**
  1. Execute `npm run build` localmente.
  2. Envie todo o conteúdo de `dist/` (incluindo `.htaccess`) para `public_html/`.

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
