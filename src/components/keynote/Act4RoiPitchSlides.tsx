import React from "react";
import { ArrowUpRight, Check, QrCode, ShieldCheck, Sparkles, Users } from "lucide-react";
import {
  getCampaignOfferPlans,
  OFFICIAL_PUBLIC_PLANS,
  WHATSAPP_COMMUNITY_URL,
} from "../../config/campaignLinks";
import type { KeynoteEdition } from "../../data/keynoteSlidesData";
import { OfferQrCode } from "./OfferQrCode";

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
        <div className="grid gap-4 text-left sm:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-white/10 bg-black/40 p-5 text-sm">
            <div className="font-mono text-xs text-red-400">CUSTO TRADICIONAL MENSAL</div>
            <div className="flex justify-between text-zinc-300">
              <span>Agência ou Social Media mensal</span>
              <span className="font-mono">R$ 3.000/mês</span>
            </div>
            <div className="flex justify-between text-zinc-300">
              <span>Designer + Editor para Reels</span>
              <span className="font-mono">R$ 1.500/mês</span>
            </div>
            <div className="flex justify-between text-zinc-300">
              <span>Assinaturas em dólar e automações</span>
              <span className="font-mono">R$ 450+/mês</span>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-3 font-bold text-white">
              <span>Total Anual Fora do CriativoOS</span>
              <span className="font-mono text-red-400">R$ 59.400+/ano</span>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[#B9FC01]/45 bg-[#12160F] p-5">
            <div>
              <div className="font-mono text-xs text-[#B9FC01]">COM O CRIATIVOOS NO SEU PC</div>
              <h4 className="mt-2 font-display text-2xl font-bold text-white">
                Se paga na primeira campanha ou no 1º cliente atendido
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                Operador de Computador, Navegador Inteligente, +253 apps conectados, 15 Criativos
                com seu rosto real e Estúdio de Vídeos para Reels usando 10 IAs gratuitas ou sua
                conta atual.
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
      <div className="mx-auto grid max-w-5xl gap-5 text-left md:grid-cols-3">
        {OFFICIAL_PUBLIC_PLANS.map((p) => (
          <div
            key={p.id}
            className="rounded-3xl border border-white/15 bg-[#141416] p-6"
          >
            <div className="font-mono text-xs text-zinc-400">OFERTA PERPÉTUA · SITE PÚBLICO</div>
            <h4 className="mt-2 font-display text-xl font-bold text-white">{p.name}</h4>
            <div className="mt-4 flex items-baseline gap-1.5 font-display">
              <span className="text-sm font-bold text-[#B9FC01]">12x de</span>
              <span className="text-3xl font-bold text-white">{p.installmentValue}</span>
            </div>
            <div className="mt-1 text-xs font-semibold text-zinc-300">
              ou {p.priceCash} à vista/ano
            </div>
            <div className="mt-4 border-t border-white/10 pt-3 text-xs text-zinc-300">
              {p.brandsLimit} · {p.pcsLimit} · {p.criativosCount}
            </div>
            {p.orderBumpNote && (
              <div className="mt-2 text-[11px] text-amber-200/90">
                {p.orderBumpNote}
              </div>
            )}
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
              ? "FASE 1 · PRÉ-LANÇAMENTO FUNDADORES (1ª IMERSÃO) · VITALÍCIO NO ILIMITADO"
              : "FASE 2 · LANÇAMENTO OFICIAL QUINTA BLACK · VITALÍCIO NO ILIMITADO"}
          </span>
        </div>

        <div className="grid gap-4 text-left md:grid-cols-3">
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
                        Oficial: {plan.anchorInstallments} ({plan.anchorPrice}/ano)
                      </div>
                    )}
                    <div className="mt-0.5 flex items-baseline gap-1.5 font-display">
                      <span className="text-base font-extrabold text-[#B9FC01] sm:text-lg">
                        12x de
                      </span>
                      <span className="text-3xl font-bold text-white sm:text-4xl">
                        {plan.installmentValue}
                      </span>
                    </div>
                    <div className="mt-1 text-xs font-semibold text-zinc-200">
                      ou <strong className="text-[#B9FC01]">{plan.priceCash} à vista</strong>
                      {plan.vitalicioIncluded ? " · SEM ANUIDADE" : " (anual)"}
                    </div>
                    <div className="mt-0.5 font-mono text-[10px] text-zinc-400">
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

  if (slideId === 20) {
    const heroPlan = wavePlans[2];
    return (
      <div className="mx-auto max-w-3xl rounded-3xl border border-[#B9FC01]/50 bg-[#12160F] p-8">
        <ShieldCheck className="mx-auto h-12 w-12 text-[#B9FC01]" />
        <h4 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
          7 Dias de Garantia Incondicional + Ativação Imediata v1.0.3
        </h4>
        <p className="mt-3 text-sm text-zinc-300">
          Instale hoje no seu Windows, Mac ou Linux, conecte sua marca e teste tudo por dentro com aulas
          gravadas na Área de Membros e acesso à Comunidade Oficial no WhatsApp. Se não fizer sentido,
          devolvemos 100% do valor dentro dos 7 dias.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={heroPlan.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="volt-button inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm"
          >
            Garantir Ilimitado VITALÍCIO (12x {heroPlan.installmentValue} ou {heroPlan.priceCash})
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3.5 text-xs font-semibold text-zinc-200 hover:border-[#B9FC01] hover:text-white"
          >
            <Users className="h-4 w-4 text-[#B9FC01]" />
            Comunidade Oficial
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
              Ou ir de {p.name} Anual (12x {p.installmentValue} ou {p.priceCash})
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-1 gap-5 text-left lg:grid-cols-3">
        {wavePlans.map((plan) => {
          const isHero = Boolean(plan.highlighted);
          return (
            <div
              key={plan.id}
              className={`flex flex-col justify-between rounded-3xl border p-6 transition ${
                isHero
                  ? "border-[#B9FC01] bg-[#13180E] shadow-[0_0_55px_rgba(185,252,1,0.2)]"
                  : "border-white/15 bg-[#141416]"
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold text-zinc-400">
                    {plan.code}
                  </span>
                  {plan.badge && (
                    <span
                      className={`rounded-full px-3 py-0.5 font-mono text-[10px] font-bold uppercase ${
                        isHero
                          ? "bg-[#B9FC01] text-[#0D0D0D]"
                          : "bg-white/10 text-zinc-200"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <h4 className="font-display text-2xl font-bold text-white">
                      {plan.name}
                    </h4>
                    <div className="mt-0.5 text-xs text-zinc-400">
                      {plan.brandsLimit} · {plan.pcsLimit} · {plan.criativosCount}
                    </div>
                  </div>

                  <div className="text-right">
                    {plan.anchorPrice && (
                      <div className="font-mono text-[11px] text-zinc-500 line-through">
                        {plan.anchorInstallments}
                      </div>
                    )}
                    <div className="flex items-baseline justify-end gap-1 font-display">
                      <span className="text-sm font-extrabold text-[#B9FC01]">12x de</span>
                      <span className="text-2xl font-extrabold text-white sm:text-3xl">
                        {plan.installmentValue}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-zinc-200">
                      ou <strong className="text-[#B9FC01]">{plan.priceCash} à vista</strong>
                      {plan.vitalicioIncluded ? " · VITALÍCIO" : " (anual)"}
                    </div>
                  </div>
                </div>

                <div className="my-5 flex flex-col items-center">
                  <OfferQrCode
                    url={plan.checkoutUrl}
                    label={plan.name}
                    highlighted={isHero}
                  />
                  <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                    <QrCode className="h-3.5 w-3.5 text-[#B9FC01]" />
                    Aponte a câmera para o plano {plan.name}
                  </div>
                </div>

                {plan.orderBumpNote && (
                  <div className="mb-4 rounded-xl border border-amber-400/30 bg-amber-400/10 p-2.5 text-center text-[11px] text-amber-200">
                    {plan.orderBumpNote}
                  </div>
                )}
              </div>

              <a
                href={plan.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs font-extrabold transition ${
                  isHero
                    ? "volt-button"
                    : "border border-white/15 bg-white/[0.06] text-white hover:border-[#B9FC01] hover:bg-white/15"
                }`}
              >
                {isHero
                  ? `GARANTIR ILIMITADO VITALÍCIO (12x ${plan.installmentValue})`
                  : `Abrir Checkout ${plan.name} (12x ${plan.installmentValue})`}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
