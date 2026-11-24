import React from "react";
import { Lock, Server, ShieldCheck, Sparkles } from "lucide-react";
import { BorderGlow } from "../fx/BorderGlow";

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="border-t border-white/[0.06] bg-[#050608] pb-20 lg:pb-24">
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <BorderGlow
          backgroundColor="rgba(11, 16, 22, 0.92)"
          colors={["#B9FC01", "#10b981", "#38bdf8"]}
          borderRadius={28}
          innerClassName="!p-6 sm:!p-10"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="flex justify-center lg:col-span-3">
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-[#B9FC01]/[0.06] shadow-[0_0_50px_rgba(185,252,1,0.2)] sm:h-52 sm:w-52">
                <svg
                  viewBox="0 0 220 220"
                  className="h-full w-full animate-spin-slow"
                  aria-label="Selo de Garantia Blindada Risco Zero 7 Dias"
                >
                  <defs>
                    <path
                      id="guaranteeCirclePath"
                      d="M 110, 110 m -84, 0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0"
                    />
                  </defs>

                  <circle
                    cx="110"
                    cy="110"
                    r="102"
                    fill="none"
                    stroke="rgba(185, 252, 1, 0.45)"
                    strokeWidth="1.75"
                  />
                  <circle
                    cx="110"
                    cy="110"
                    r="66"
                    fill="rgba(5, 6, 8, 0.72)"
                    stroke="rgba(185, 252, 1, 0.3)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  <text
                    fill="#B9FC01"
                    fontSize="11.2"
                    fontWeight="700"
                    letterSpacing="2.3"
                    className="font-mono uppercase"
                  >
                    <textPath
                      href="#guaranteeCirclePath"
                      startOffset="0%"
                      textLength="514"
                      lengthAdjust="spacing"
                    >
                      GARANTIA BLINDADA · RISCO ZERO · 7 DIAS ·
                    </textPath>
                  </text>
                </svg>

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                  <ShieldCheck className="h-9 w-9 text-[#B9FC01]" />
                  <span className="mt-1 font-display text-3xl font-extrabold leading-none tracking-tight text-white">
                    7 DIAS
                  </span>
                  <span className="mt-1 font-mono text-[9px] font-bold uppercase tracking-widest text-[#B9FC01]">
                    Risco Zero
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-9">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
                Teste No Seu Próprio Computador Sem Risco
              </span>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-4xl">
                Garantia Blindada de 7 Dias Para Rodar e Comprovar
              </h3>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Baixe o <strong>CriativoOS</strong> no seu computador ou
                servidor na nuvem 24h, cadastre suas fotos e marca, teste as
                rotinas e gere seus primeiros carrosséis, stories e vídeos. Se
                achar que não é para o seu momento, peça reembolso em até 7 dias
                e devolvemos 100% do valor sem burocracia.
              </p>
              <div className="mt-6 flex flex-wrap gap-5 text-xs font-semibold text-slate-300">
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-4 w-4 text-[#B9FC01]" />
                  Cofre blindado só no seu computador, sob seu controle
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Server className="h-4 w-4 text-[#B9FC01]" />
                  Funciona no seu computador e em servidor na nuvem 24h
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-[#B9FC01]" />
                  Liberação imediata por e-mail logo após a compra
                </span>
              </div>
            </div>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
};
