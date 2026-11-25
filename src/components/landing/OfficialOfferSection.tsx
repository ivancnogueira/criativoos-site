import React from "react";
import { ArrowRight, Check, Flame, Sparkles } from "lucide-react";
import { OFFICIAL_PUBLIC_PLANS } from "../../config/campaignLinks";
import { ElectricBorder } from "../fx/ElectricBorder";
import { BorderGlow } from "../fx/BorderGlow";
import { SpecularButton } from "../fx/SpecularButton";

export const OfficialOfferSection: React.FC = () => {
  return (
    <section
      id="planos"
      className="border-t border-white/[0.06] bg-[#050608] py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              <Flame className="h-3.5 w-3.5" />
              // 11B · LICENÇAS ANUAIS OFICIAIS
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-5xl">
              Escolha a Capacidade Ideal Para a{" "}
              <span className="text-[#B9FC01]">Sua Operação</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              Liberação imediata por e-mail, instalação em 1 minuto no Windows,
              Mac, Linux ou servidor na nuvem 24h, e 7 dias de garantia
              incondicional.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {OFFICIAL_PUBLIC_PLANS.map((plan) => {
            const isHero = Boolean(plan.highlighted);

            const cardContent = (
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      {plan.name.toUpperCase()}
                    </span>
                    {plan.badge && (
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase ${
                          isHero
                            ? "bg-[#B9FC01] text-[#07080C]"
                            : "bg-white/10 text-slate-200"
                        }`}
                      >
                        {isHero && <Sparkles className="h-3 w-3" />}
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">
                    {plan.name}
                  </h3>
                  <p className="mt-1.5 min-h-[42px] text-sm text-slate-300">
                    {plan.tagline}
                  </p>

                  {/* Bloco de Preço (Ancorado em 12x com à vista menor) */}
                  <div
                    className={`mt-6 rounded-2xl border p-5 ${
                      isHero
                        ? "border-[#B9FC01]/40 bg-[#B9FC01]/[0.07]"
                        : "border-white/10 bg-black/30"
                    }`}
                  >
                    <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#B9FC01]">
                      Investimento Anual
                    </div>
                    <div className="mt-1.5 flex items-baseline gap-1.5 font-display text-4xl font-extrabold text-white sm:text-[42px] sm:leading-none">
                      <span className="text-lg font-bold text-[#B9FC01] sm:text-xl">
                        12x de
                      </span>
                      <span>{plan.installmentValue}</span>
                    </div>
                    <div className="mt-2 text-xs font-semibold text-slate-300">
                      ou <span className="text-white">{plan.priceCash}</span> à vista/ano
                    </div>
                    <div className="mt-1 text-[11px] text-slate-400">
                      {plan.billingCycle}
                    </div>
                  </div>

                  {/* Resumo de Capacidade */}
                  <div className="mt-5 grid grid-cols-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-1.5 py-3 text-center text-[11px] leading-tight sm:p-3 sm:text-xs">
                    <div className="px-1">
                      <div className="font-bold text-white">
                        {plan.brandsLimit}
                      </div>
                      <div className="mt-0.5 text-[10px] text-slate-500 sm:text-[11px]">Perfis</div>
                    </div>
                    <div className="border-x border-white/[0.07] px-1.5">
                      <div className="font-bold text-white">{plan.pcsLimit}</div>
                      <div className="mt-0.5 text-[10px] text-slate-500 sm:text-[11px]">Máquinas</div>
                    </div>
                    <div className="px-1">
                      <div className="font-bold text-[#B9FC01]">
                        {plan.criativosCount}
                      </div>
                      <div className="mt-0.5 text-[10px] text-slate-500 sm:text-[11px]">Equipe</div>
                    </div>
                  </div>

                  {/* Benefícios */}
                  <ul className="mt-6 space-y-3.5">
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-200"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B9FC01]/20 text-[#B9FC01]">
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.orderBumpNote && (
                    <div className="mt-5 rounded-xl border border-amber-400/30 bg-amber-400/10 p-3 text-xs leading-relaxed text-amber-200">
                      {plan.orderBumpNote}
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <SpecularButton
                    href={plan.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={isHero ? "volt" : "glass"}
                    size="md"
                    className="w-full"
                  >
                    <span>Quero o Plano {plan.name}</span>
                    <ArrowRight className="h-4 w-4" />
                  </SpecularButton>
                </div>
              </div>
            );

            if (isHero) {
              return (
                <ElectricBorder
                  key={plan.id}
                  color="#B9FC01"
                  speed={1.05}
                  chaos={0.08}
                  borderRadius={28}
                  className="lg:-my-3"
                >
                  <div className="h-full rounded-[28px] bg-[#0E1410]/95 p-7 sm:p-8">
                    {cardContent}
                  </div>
                </ElectricBorder>
              );
            }

            return (
              <BorderGlow
                key={plan.id}
                backgroundColor="rgba(16, 20, 32, 0.78)"
                borderRadius={26}
                innerClassName="h-full !p-7 sm:!p-8"
              >
                {cardContent}
              </BorderGlow>
            );
          })}
        </div>
      </div>
    </section>
  );
};
