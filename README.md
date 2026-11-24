# CriativoOS — Site Oficial (`criativoos.com.br`), Apresentações Nível Ômega & Kit de Campanha

Ecossistema comercial isolado do **CriativoOS v1.0.3** desenvolvido em React 19 + Vite + Tailwind CSS + GSAP ScrollTrigger + Express.

## Rotas Disponíveis

- **`/`** — Landing Page Oficial Pública com **Ancoragem Perpétua (`R$ 997 / R$ 1.797 / R$ 1.997` Anual)**, 15 Mascotes SVG Vivos com eye-tracking, tour completo pelo Cockpit e simulador WhatsApp.
- **`/apresentacao-migracao`** — Apresentação Interativa **"Nível Ômega"** em **4 Atos / 20 Slides** (Mercado -> Instalação 60s -> Tour por Dentro -> Pitch **`R$ 47 / R$ 87 / R$ 97`** + Vitalício Fundador no Ilimitado).
- **`/apresentacao-black`** *(e `/apresentacao`)* — Apresentação Interativa **"Nível Ômega"** em **4 Atos / 20 Slides** para Quinta à Noite & Black Friday (**`R$ 97 / R$ 177 / R$ 197`** + Vitalício no Ilimitado).
- **`/meu-roteiro`** — Teleprompter sincronizado com os 20 slides e 4 Atos, com cronômetro, auto-scroll e toggle `Migração` / `Black Friday`.
- **`/kit-whatsapp`** — Central interativa com as 19 mensagens formatadas nativamente para WhatsApp (Grupos VIP e Disparos 1:1) dos 2 lançamentos e cópia em 1 clique.
- **`/obrigado`** — Pós-compra oficial com download dos instaladores **`CriativoOS v1.0.3`** (`.exe`, `.dmg`, `.AppImage`) e guia de ativação `CRIA-*`.

## Desenvolvimento & Deploy (aaPanel / Node)

```bash
cp .env.example .env
npm install
npm run dev
```

Para build de produção, verificação e execução com Express:

```bash
npm run typecheck
npm run build
npm run verify
npm start
```
