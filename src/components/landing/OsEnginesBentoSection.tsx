import React from "react";
import {
  Globe,
  Lock,
  Monitor,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";
import { BorderGlow } from "../fx/BorderGlow";

export const OsEnginesBentoSection: React.FC = () => {
  return (
    <section
      id="motores-os"
      className="relative border-t border-white/[0.06] bg-[#07090D] py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              // 03 · ARQUITETURA DO SISTEMA
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Os 4 Motores Que Separam Um{" "}
              <span className="text-gradient-volt">Sistema Operacional</span>{" "}
              De Um Gerador Comum
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              Engenharia real instalada no seu computador e pronta para VPS:
              enquanto ferramentas comuns respondem texto em uma aba, o
              CriativoOS executa trabalho ponta a ponta com supervisão humana.
            </p>
          </div>
        </div>

        {/* Bento Assimétrico 12 Colunas Full-Width */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Card 1: Computer Use (7 cols) */}
          <div className="lg:col-span-7">
            <BorderGlow
              backgroundColor="rgba(10, 14, 20, 0.88)"
              glowColor="76 98 50"
              colors={["#B9FC01", "#31cf76", "#38bdf8"]}
              borderRadius={24}
              innerClassName="h-full justify-between !p-6 sm:!p-8"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#B9FC01]/15 text-[#B9FC01]">
                      <Monitor className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#B9FC01]">
                        Motor 01 · Computer Use (CUA)
                      </span>
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                        Operador Real de Desktop, Mouse e Arquivos Locais
                      </h3>
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] font-bold text-emerald-300">
                    Windows · Mac · Linux
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  O CriativoOS enxerga a interface dos seus programas com
                  precisão, movimenta o mouse, preenche telas administrativas,
                  organiza pastas de fotos e renders no seu disco e solicita
                  sua confirmação antes de qualquer ação sensível.
                </p>
              </div>

              {/* Micro-UI de Telemetria CUA */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-[#050608] p-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-[#B9FC01]">
                    <Terminal className="h-3.5 w-3.5" />
                    CUA_DESKTOP_RUNNER
                  </span>
                  <span>TRAVA HUMANA ATIVA</span>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                    <div className="text-[10px] text-slate-400">Ação Desktop</div>
                    <div className="mt-0.5 font-bold text-white">
                      Abrir ERP &amp; Exportar CSV
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                    <div className="text-[10px] text-slate-400">Sistema de Pastas</div>
                    <div className="mt-0.5 font-bold text-white">
                      /Marcas/Cliente/Renders
                    </div>
                  </div>
                  <div className="rounded-xl border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-3 py-2">
                    <div className="text-[10px] text-[#B9FC01]">Status</div>
                    <div className="mt-0.5 font-bold text-[#B9FC01]">
                      Auditado em Log
                    </div>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </div>

          {/* Card 2: Browser CDP (5 cols) */}
          <div className="lg:col-span-5">
            <BorderGlow
              backgroundColor="rgba(10, 14, 22, 0.88)"
              glowColor="200 90 55"
              colors={["#38bdf8", "#0031CC", "#B9FC01"]}
              borderRadius={24}
              innerClassName="h-full justify-between !p-6 sm:!p-8"
            >
              <div>
                <div className="inline-flex items-center gap-2.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-400">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-400">
                      Motor 02 · Browser Chromium Real
                    </span>
                    <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                      Navegação Web Autônoma (CDP)
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Abre abas reais do Chromium para monitorar concorrentes, ler
                  referências em alta, baixar anexos e preencher portais web com
                  cofre de credenciais e pausa automática para você assumir em
                  etapas críticas.
                </p>
              </div>

              <div className="mt-6 space-y-2 rounded-2xl border border-white/10 bg-[#050608] p-4 font-mono text-[11px]">
                <div className="flex items-center justify-between text-sky-300">
                  <span>// SESSAO CHROMIUM ATIVA</span>
                  <span className="rounded bg-sky-500/15 px-2 py-0.5 text-[10px]">
                    MULTI-ABA
                  </span>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-slate-200">
                  1. Extrair Top 10 ganchos e formatos do nicho
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-slate-200">
                  2. Solicitar takeover humano se houver 2FA ou verificação
                </div>
              </div>
            </BorderGlow>
          </div>

          {/* Card 3: 253+ Apps & Workflows em Grafo (5 cols) */}
          <div className="lg:col-span-5">
            <BorderGlow
              backgroundColor="rgba(13, 12, 22, 0.88)"
              glowColor="265 85 60"
              colors={["#a855f7", "#38bdf8", "#B9FC01"]}
              borderRadius={24}
              innerClassName="h-full justify-between !p-6 sm:!p-8"
            >
              <div>
                <div className="inline-flex items-center gap-2.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-300">
                    <Workflow className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-purple-300">
                      Motor 03 · 253+ Apps &amp; Grafos
                    </span>
                    <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                      Workflows Visuais &amp; Rotinas
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Encadeie Notion, Google Drive, Gmail, Planilhas, CRM, Telegram
                  e Instagram em workflows visuais em grafo com agendamento por
                  horário, triggers e histórico auditável.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Google Drive",
                  "Notion",
                  "Gmail",
                  "HubSpot / CRM",
                  "Planilhas",
                  "Meta Graph v27",
                  "WhatsApp",
                  "+246 Apps MCP",
                ].map((app) => (
                  <span
                    key={app}
                    className="rounded-lg border border-white/10 bg-[#050608] px-2.5 py-1.5 font-mono text-[10px] font-semibold text-slate-200"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </BorderGlow>
          </div>

          {/* Card 4: Cofre Local AES-256-GCM & Zero Trava de Créditos (7 cols) */}
          <div className="lg:col-span-7">
            <BorderGlow
              backgroundColor="rgba(10, 18, 15, 0.88)"
              glowColor="150 85 45"
              colors={["#31cf76", "#B9FC01", "#38bdf8"]}
              borderRadius={24}
              innerClassName="h-full justify-between !p-6 sm:!p-8"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                      <Lock className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                        Motor 04 · Privacidade &amp; Cofre Local
                      </span>
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                        Seus Dados No Seu Controle com Cofre AES-256-GCM
                      </h3>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-3 py-1 font-mono text-[10px] font-bold text-[#B9FC01]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Zero Venda de Créditos
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Suas fotos de rosto, ativos de clientes, chaves de IA e tokens
                  do Instagram não ficam expostos em bancos de terceiros: tudo é
                  criptografado localmente em cofre AES-256-GCM com memória
                  persistente isolada por empresa ou cliente.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-[#050608] p-3.5">
                  <div className="font-mono text-[10px] uppercase text-emerald-300">
                    Criptografia
                  </div>
                  <div className="mt-1 font-display text-sm font-bold text-white">
                    Cofre AES-256-GCM
                  </div>
                  <div className="mt-0.5 text-[11px] text-slate-400">
                    Chaves isoladas fora do prompt
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#050608] p-3.5">
                  <div className="font-mono text-[10px] uppercase text-emerald-300">
                    Modelos de IA
                  </div>
                  <div className="mt-1 font-display text-sm font-bold text-white">
                    10 Grátis no OpenCode
                  </div>
                  <div className="mt-0.5 text-[11px] text-slate-400">
                    Ou use ChatGPT, Claude, Gemini e Grok
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#050608] p-3.5">
                  <div className="font-mono text-[10px] uppercase text-emerald-300">
                    Segurança Crítica
                  </div>
                  <div className="mt-1 font-display text-sm font-bold text-white">
                    Aprovação Obrigatória
                  </div>
                  <div className="mt-0.5 text-[11px] text-slate-400">
                    Meta API, logins, CRM e Desktop
                  </div>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
};
