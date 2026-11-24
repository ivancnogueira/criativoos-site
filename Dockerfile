# ==============================================================================
# Dockerfile Multi-Stage — CriativoOS Site Oficial
# Compatível com Easypanel, Coolify, Portainer, VPS Docker e Cloud Run
# ==============================================================================

FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --include=dev

COPY . .

# Variáveis de build opcionais do Vite (podem ser passadas via --build-arg no Easypanel)
ARG VITE_CHECKOUT_OFFICIAL_INDIVIDUAL=""
ARG VITE_CHECKOUT_OFFICIAL_AGENCIA10=""
ARG VITE_CHECKOUT_OFFICIAL_ILIMITADO=""
ARG VITE_CHECKOUT_MIGRACAO_INDIVIDUAL=""
ARG VITE_CHECKOUT_MIGRACAO_AGENCIA10=""
ARG VITE_CHECKOUT_MIGRACAO_ILIMITADO=""
ARG VITE_CHECKOUT_BF_INDIVIDUAL=""
ARG VITE_CHECKOUT_BF_AGENCIA10=""
ARG VITE_CHECKOUT_BF_ILIMITADO=""
ARG VITE_SUPPORT_WHATSAPP_URL=""

ENV NODE_ENV=production
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3008

COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=builder /app/dist ./dist
COPY app.js server.js ./

EXPOSE 3008

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:' + (process.env.PORT || 3008) + '/api/health').then((r) => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

CMD ["node", "server.js"]
