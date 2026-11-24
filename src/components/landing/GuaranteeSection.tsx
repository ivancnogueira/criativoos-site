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
              <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 border-[#B9FC01] bg-[#B9FC01]/10 text-center shadow-[0_0_45px_rgba(185,252,1,0.22)]">
                <ShieldCheck className="h-12 w-12 text-[#B9FC01]" />
                <span className="mt-1 font-display text-3xl font-extrabold text-white">
                  7 DIAS
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#B9FC01]">
                  Garantia Risco Zero
                </span>
              </div>
            </div>

            <div className="lg:col-span-9">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
                Teste Na Sua Própria Máquina Sem Risco
              </span>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-4xl">
                Garantia Blindada de 7 Dias Para Rodar e Comprovar
              </h3>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Baixe o <strong>CriativoOS</strong> no seu computador ou VPS,
                cadastre suas fotos e marca, teste os fluxos e gere seus
                primeiros carrosséis, stories e vídeos. Se achar que não é para
                o seu momento, peça reembolso em até 7 dias e devolvemos 100% do
                valor sem burocracia.
              </p>
              <div className="mt-6 flex flex-wrap gap-5 text-xs font-semibold text-slate-300">
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-4 w-4 text-[#B9FC01]" />
                  Cofre AES-256-GCM e arquivos armazenados apenas na sua infraestrutura
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Server className="h-4 w-4 text-[#B9FC01]" />
                  Funciona em PC local e servidor VPS Linux / Docker
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
