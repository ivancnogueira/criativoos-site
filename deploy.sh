#!/bin/bash

# ==============================================================================
# Script de Deploy Automático — CriativoOS Site Oficial (aaPanel / VPS / Linux)
# Configure REPO_URL no ambiente se desejar atualizar via Git automaticamente.
# ==============================================================================

set -e

echo "======================================================="
echo "🚀 Iniciando deploy de criativoos-site (criativoos.com.br)"
echo "======================================================="

CURRENT_DIR=$(pwd)
git config --global --add safe.directory "$CURRENT_DIR" || true

if [ -n "${REPO_URL:-}" ]; then
  if [ ! -d ".git" ]; then
    git init -b main
    git remote add origin "$REPO_URL"
  fi
  echo "📦 Sincronizando código da branch main..."
  git fetch origin main
  git reset --hard origin/main
fi

echo "⚙️ Instalando dependências (incluindo dev para build Vite)..."
npm ci --include=dev || npm install --include=dev

echo "🏗️ Gerando build de produção (Vite)..."
export NODE_ENV=production
export NODE_OPTIONS="--no-warnings --max-old-space-size=4096"
npm run build

echo "🧪 Executando verificação pós-build..."
npm run verify

echo "======================================================="
echo "✅ Deploy concluído! Reinicie o processo Node/PM2 no aaPanel."
echo "======================================================="
