import React from "react";
import { ArrowUpRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import {
  getCampaignOfferPlans,
  OFFICIAL_PUBLIC_PLANS,
} from "../../config/campaignLinks";
import type { KeynoteEdition } from "../../data/keynoteSlidesData";

interface Props {
  slideId: number;
  edition: KeynoteEdition;
}

export const Act4RoiPitchSlides: React.FC<Props> = ({ slideId, edition }) => {
  const isMig = edition === "migration";
  const wavePlans = getCampaignOfferPlans(edition);

  if (slideId === 16) {
    return (
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-[#141416] p-7">
        <div className="grid gap-4 sm:grid-cols-2 text-left">
          <div className="space-y-3 rounded-2xl border border-white/10 bg-black/40 p-5 text-sm">
            <div className="font-mono text-xs text-red-400">CUSTO TRADICIONAL MENSAL</div>
            <div className="flex justify-between text-zinc-300">
              <span>SaaS Social Media + IA + Vídeo</span>
              <span className="font-mono">R$ 850/mês</span>
            </div>
            <div className="flex justify-between text-zinc-300">
              <span>Freelancer Social / Design básico</span>
              <span className="font-mono">R$ 2.500/mês</span>
            </div>
            <div className="flex justify-between text-zinc-300">
              <span>Editor de Reels / Cortes</span>
              <span className="font-mono">R$ 1.800/mês</span>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-3 font-bold text-white">
              <span>Total Anual Fora do CriativoOS</span>
              <span className="font-mono text-red-400">R$ 61.800/ano</span>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[#B9FC01]/45 bg-[#12160F] p-5">
            <div>
              <div className="font-mono text-xs text-[#B9FC01]">NA ARQUITETURA CRIATIVOOS</div>
              <h4 className="mt-2 font-display text-2xl font-bold text-white">
                Se paga na 1ª campanha ou no 1º cliente atendido
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                15 Criativos especializados rodando no seu PC/VPS, usando modelos
                gratuitos OpenCode ou sua assinatura atual, com Estúdio Instagram e Vídeo
                Remotion inclusos.
              </p>
            </div>
            <div className="mt-4 rounded-xl bg-black/40 px-4 py-2.5 font-mono text-xs text-[#B9FC01]">
              Economia real acima de 95% ao longo de 12 meses.
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slideId === 17) {
    return (
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3 text-left">
        {OFFICIAL_PUBLIC_PLANS.map((p) => (
          <div
            key={p.id}
            className="rounded-3xl border border-white/15 bg-[#141416] p-6"
          >
            <div className="font-mono text-xs text-zinc-400">PÁGINA OFICIAL · SITE PÚBLICO</div>
            <h4 className="mt-2 font-display text-xl font-bold text-white">{p.name}</h4>
            <div className="mt-4 font-display text-3xl font-bold text-white">
              {p.priceCash}
              <span className="text-xs font-normal text-zinc-400">/ano</span>
            </div>
            <div className="text-xs text-zinc-400">{p.installmentsText}</div>
            <div className="mt-4 border-t border-white/10 pt-3 text-xs text-zinc-300">
              {p.brandsLimit} · {p.pcsLimit} · {p.criativosCount}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (slideId === 18 || slideId === 19) {
    return (
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#B9FC01] px-4 py-1 font-mono text-[11px] font-bold text-[#0D0D0D]">
            <Sparkles className="h-3.5 w-3.5" />
            {isMig
              ? "JANELA MIGRAÇÃO DA BASE (48H) · VITALÍCIO INCLUSO NO ILIMITADO"
              : "LOTE BLACK FRIDAY (QUINTA & SEXTA) · VITALÍCIO INCLUSO NO ILIMITADO"}
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3 text-left">
          {wavePlans.map((plan) => {
            const isHero = Boolean(plan.highlighted);
            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-3xl border p-5 ${
                  isHero
                    ? "border-[#B9FC01] bg-[#13180E] shadow-[0_0_50px_rgba(185,252,1,0.16)]"
                    : "border-white/15 bg-[#141416]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] text-zinc-400">{plan.code}</span>
                    {plan.badge && (
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold ${
                          isHero
                            ? "bg-[#B9FC01] text-[#0D0D0D]"
                            : "bg-white/10 text-zinc-300"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="mt-2 font-display text-xl font-bold text-white">
                    {plan.name}
                  </h4>

                  <div className="mt-2.5 border-y border-white/10 py-2.5">
                    {plan.anchorPrice && (
                      <div className="font-mono text-xs text-zinc-500 line-through">
                        Oficial: {plan.anchorPrice}/ano
                      </div>
                    )}
                    <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                      {plan.priceCash}
                    </div>
                    <div className="text-xs font-semibold text-[#B9FC01]">
                      {plan.installmentsText}
                    </div>
                    <div className="mt-0.5 font-mono text-[10px] text-zinc-300">
                      {plan.billingCycle}
                    </div>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-300">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B9FC01]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.orderBumpNote && slideId === 19 && (
                    <div className="mt-3 rounded-xl border border-amber-400/30 bg-amber-400/10 p-2.5 text-[11px] text-amber-200">
                      {plan.orderBumpNote}
                    </div>
                  )}
                </div>

                <a
                  href={plan.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-xs font-bold ${
                    isHero
                      ? "volt-button"
                      : "border border-white/15 bg-white/[0.06] text-white hover:bg-white/15"
                  }`}
                >
                  {isHero ? "GARANTIR ILIMITADO + VITALÍCIO" : `Escolher ${plan.name}`}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const heroPlan = wavePlans[2];
  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-[#B9FC01]/50 bg-[#12160F] p-8">
      <ShieldCheck className="mx-auto h-12 w-12 text-[#B9FC01]" />
      <h4 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
        7 Dias de Garantia Incondicional + Ativação Imediata v1.0.3
      </h4>
      <p className="mt-3 text-sm text-zinc-300">
        Instale hoje no seu Windows, Mac ou Linux, conecte sua marca e teste os 15
        Criativos. Se não fizer sentido, reembolso 100% integral dentro dos 7 dias.
      </p>

      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={heroPlan.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="volt-button inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm"
        >
          Garantir Agência Ilimitada VITALÍCIO ({heroPlan.priceCash})
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-zinc-400">
        {wavePlans.slice(0, 2).map((p) => (
          <a
            key={p.id}
            href={p.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#B9FC01]"
          >
            Ou ir de {p.name} Anual ({p.priceCash})
          </a>
        ))}
      </div>
    </div>
  );
};
