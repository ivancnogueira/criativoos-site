import React, { useState } from "react";
import {
  Camera,
  CheckCircle2,
  Coins,
  Instagram,
  KeyRound,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { BorderGlow } from "../fx/BorderGlow";

interface ProtectedAsset {
  title: string;
  subtitle: string;
  badge: string;
  icon: React.FC<{ className?: string }>;
}

const PROTECTED_ASSETS: readonly ProtectedAsset[] = [
  {
    title: "Suas Fotos Reais",
    subtitle: "Ficam guardadas só na sua pasta local",
    badge: "No seu disco",
    icon: Camera,
  },
  {
    title: "Suas Senhas",
    subtitle: "Trancadas dentro do cofre do computador",
    badge: "Cofre fechado",
    icon: KeyRound,
  },
  {
    title: "Conexão Instagram",
    subtitle: "Publica apenas após o seu 1 no celular",
    badge: "Trava ativa",
    icon: Instagram,
  },
  {
    title: "Contas de IA",
    subtitle: "Use 10 modelos grátis sem pagar extras",
    badge: "Zero surpresa",
    icon: Coins,
  },
];

/**
 * Dobra 3E: Cofre Blindado & Controle Total em Motion SVG + CSS
 * comunicando privacidade local, trava [1] Aprovar e zero surpresa em dólar.
 */
export const VaultSecuritySection: React.FC = () => {
  const [approvedDemo, setApprovedDemo] = useState<boolean>(false);

  return (
    <section
      id="cofre-seguranca"
      className="relative border-t border-white/[0.06] bg-[#07090D] py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Coluna Esquerda: 3 garantias diretas em linguagem cotidiana */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              <Lock className="h-3.5 w-3.5" />
              // 03E · COFRE BLINDADO &amp; CONTROLE TOTAL
            </span>

            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl xl:text-5xl">
              Cofre Blindado &amp; Controle Total:{" "}
              <span className="text-[#B9FC01]">Nada Sai Sem Sua Ordem</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Você não entrega suas fotos, senhas nem a chave do seu Instagram
              para plataformas de terceiros. Tudo permanece protegido na sua
              própria máquina com decisão final sempre nas suas mãos.
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex items-start gap-3.5 rounded-2xl border border-white/[0.08] bg-[#050608] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B9FC01]/15 text-[#B9FC01]">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">
                    Suas fotos e senhas ficam trancadas só no seu computador
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    Nenhum arquivo pessoal ou material de cliente fica solto na
                    internet ou exposto para estranhos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-white/[0.08] bg-[#050608] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B9FC01]/15 text-[#B9FC01]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">
                    Nada entra no seu Instagram sem você responder 1 antes
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    Cada imagem e legenda chega primeiro no seu WhatsApp. Só vai
                    ao ar quando você confirmar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-white/[0.08] bg-[#050608] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">
                    Sem cobrança surpresa de créditos em dólar
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    Produza seus materiais usando 10 inteligências artificiais
                    gratuitas já inclusas ou conecte a sua conta preferida.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Motion do Cofre / Escudo em Anéis Giratórios */}
          <div className="lg:col-span-7">
            <BorderGlow
              backgroundColor="rgba(9, 14, 18, 0.94)"
              glowColor="150 85 45"
              colors={["#31cf76", "#B9FC01", "#38bdf8"]}
              borderRadius={24}
              innerClassName="!p-5 sm:!p-7"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050608] p-5 sm:p-7">
                {/* Palco Central: Anéis giratórios SVG + Escudo central */}
                <div className="relative mx-auto flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
                  {/* Brilho radial atrás do escudo */}
                  <div className="pointer-events-none absolute inset-4 rounded-full bg-[#B9FC01]/10 blur-2xl" />

                  {/* Anel externo pontilhado girando no sentido horário */}
                  <svg
                    viewBox="0 0 240 240"
                    className="motion-safe:animate-[spin_30s_linear_infinite] motion-reduce:animate-none absolute inset-0 h-full w-full"
                    fill="none"
                  >
                    <circle
                      cx="120"
                      cy="120"
                      r="112"
                      stroke="rgba(185, 252, 1, 0.25)"
                      strokeWidth="1.5"
                      strokeDasharray="6 10"
                    />
                    <circle
                      cx="120"
                      cy="8"
                      r="4"
                      fill="#B9FC01"
                    />
                    <circle
                      cx="120"
                      cy="232"
                      r="3"
                      fill="#31cf76"
                    />
                  </svg>

                  {/* Anel intermediário girando em sentido contrário */}
                  <svg
                    viewBox="0 0 240 240"
                    className="motion-reduce:!animate-none absolute inset-5 h-[calc(100%-2.5rem)] w-[calc(100%-2.5rem)]"
                    style={{ animation: "spin 20s linear infinite reverse" }}
                    fill="none"
                  >
                    <circle
                      cx="120"
                      cy="120"
                      r="102"
                      stroke="rgba(56, 189, 248, 0.28)"
                      strokeWidth="2"
                      strokeDasharray="42 26 12 26"
                    />
                  </svg>

                  {/* Anel interno pulsante */}
                  <svg
                    viewBox="0 0 240 240"
                    className="motion-safe:animate-[spin_14s_linear_infinite] motion-reduce:animate-none absolute inset-11 h-[calc(100%-5.5rem)] w-[calc(100%-5.5rem)]"
                    fill="none"
                  >
                    <circle
                      cx="120"
                      cy="120"
                      r="96"
                      stroke="rgba(185, 252, 1, 0.55)"
                      strokeWidth="2"
                      strokeDasharray="80 35"
                    />
                  </svg>

                  {/* Núcleo central do Cofre / Escudo */}
                  <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-[#B9FC01] bg-[#0B1115] text-center shadow-[0_0_40px_rgba(185,252,1,0.28)]">
                    <ShieldCheck className="h-9 w-9 text-[#B9FC01]" />
                    <span className="mt-1 font-mono text-[10px] font-extrabold uppercase tracking-wider text-white">
                      Cofre Local
                    </span>
                    <span className="font-mono text-[9px] text-[#B9FC01]">
                      Blindado
                    </span>
                  </div>
                </div>

                {/* 4 Cartões Protegidos pelo Cofre */}
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {PROTECTED_ASSETS.map((asset) => {
                    const Icon = asset.icon;
                    return (
                      <div
                        key={asset.title}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0B0E15] p-3.5 transition-colors hover:border-[#B9FC01]/45"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B9FC01]/15 text-[#B9FC01]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="truncate font-display text-sm font-bold text-white">
                              {asset.title}
                            </h3>
                            <span className="shrink-0 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-300">
                              {asset.badge}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-slate-400">
                            {asset.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Selo ativo [1] Aprovar antes de postar */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#B9FC01]/50 bg-[#B9FC01]/10 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#B9FC01] font-mono text-sm font-extrabold text-[#050608]">
                      1
                    </span>
                    <div>
                      <div className="font-display text-sm font-extrabold text-white">
                        [1] Aprovar antes de postar
                      </div>
                      <p className="text-xs text-slate-300">
                        {approvedDemo
                          ? "Exemplo liberado! Só agora a publicação segue para o perfil."
                          : "Trava ativa: nenhuma publicação sai sem a sua resposta."}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setApprovedDemo((prev) => !prev)}
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 font-mono text-xs font-extrabold transition ${
                      approvedDemo
                        ? "border border-emerald-400/50 bg-emerald-500/20 text-emerald-300"
                        : "bg-[#B9FC01] text-[#050608] hover:brightness-110"
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    {approvedDemo ? "Voltar Trava" : "Testar Trava [1]"}
                  </button>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
};
