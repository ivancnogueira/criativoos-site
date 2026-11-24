import React from "react";

const TECH_ECOSYSTEM = [
  { label: "OpenCode", detail: "10 Modelos Gratuitos" },
  { label: "OpenAI", detail: "ChatGPT Plus / Pro" },
  { label: "Anthropic", detail: "Claude 4 / Sonnet" },
  { label: "Google", detail: "Gemini Pro / Flash" },
  { label: "xAI", detail: "Grok Auth Nativo" },
  { label: "Meta API v27.0", detail: "Publicação & Métricas" },
  { label: "Remotion", detail: "Reels 1080p MP4" },
  { label: "WhatsApp QR", detail: "Aprovação + Self-Chat" },
  { label: "Chromium CDP", detail: "Navegador + Takeover" },
  { label: "253+ Apps MCP", detail: "Loja Unificada" },
];

export const TechBar: React.FC = () => {
  return (
    <section className="border-y border-white/[0.08] bg-[#111113] py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-400">
          Ecossistema Nativo Conectado sem Pedágio de Tokens
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-5">
          {TECH_ECOSYSTEM.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-center transition hover:border-[#B9FC01]/40"
            >
              <span className="font-display text-sm font-bold text-white">
                {item.label}
              </span>
              <span className="mt-0.5 text-[11px] text-zinc-400">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
