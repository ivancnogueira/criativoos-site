import React, { useState } from "react";
import { ArrowRight, Calculator } from "lucide-react";
import { SpecularButton } from "../fx/SpecularButton";

export const RoiCalculatorSection: React.FC = () => {
  const [brandsCount, setBrandsCount] = useState(3);
  const [postsPerWeek, setPostsPerWeek] = useState(5);
  const [monthlyAgencySpend, setMonthlyAgencySpend] = useState(1500);

  const externalMonthlyCost = monthlyAgencySpend + brandsCount * 450;
  const externalAnnualCost = externalMonthlyCost * 12;
  const annualHoursSaved = Math.round(brandsCount * postsPerWeek * 1.5 * 52);

  return (
    <section className="border-t border-white/[0.06] bg-[#07090D] py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              // 11A · MATEMÁTICA SIMPLES DE ECONOMIA
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-5xl">
              Quanto Você Economiza Centralizando Operação e Criação{" "}
              <span className="text-[#B9FC01]">No Seu Computador?</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              Simule na calculadora abaixo o gasto anual evitado com agências,
              freelancers e plataformas fragmentadas ao migrar para sua licença:
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="space-y-7 rounded-3xl border border-white/10 bg-[#0B0E15] p-7 sm:p-9 lg:col-span-7">
            <div>
              <div className="flex justify-between text-sm font-bold text-white sm:text-base">
                <span>Quantos perfis ou marcas você cuida?</span>
                <span className="font-mono text-[#B9FC01]">
                  {brandsCount} {brandsCount === 1 ? "marca" : "marcas"}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                value={brandsCount}
                onChange={(e) => setBrandsCount(Number(e.target.value))}
                className="mt-3 h-2 w-full cursor-pointer accent-[#B9FC01]"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm font-bold text-white sm:text-base">
                <span>Posts, carrosséis e vídeos por semana:</span>
                <span className="font-mono text-[#B9FC01]">
                  {postsPerWeek} por semana
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={14}
                value={postsPerWeek}
                onChange={(e) => setPostsPerWeek(Number(e.target.value))}
                className="mt-3 h-2 w-full cursor-pointer accent-[#B9FC01]"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm font-bold text-white sm:text-base">
                <span>Quanto gastaria por mês com agência ou freelancer:</span>
                <span className="font-mono text-[#B9FC01]">
                  R$ {monthlyAgencySpend.toLocaleString("pt-BR")}/mês
                </span>
              </div>
              <input
                type="range"
                min={500}
                max={5000}
                step={100}
                value={monthlyAgencySpend}
                onChange={(e) => setMonthlyAgencySpend(Number(e.target.value))}
                className="mt-3 h-2 w-full cursor-pointer accent-[#B9FC01]"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-[#B9FC01]/45 bg-[#101812] p-7 shadow-[0_0_50px_rgba(185,252,1,0.1)] sm:p-9 lg:col-span-5">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
                <Calculator className="h-4 w-4" />
                Economia Estimada em 1 Ano
              </div>
              <div className="mt-4 text-sm text-slate-300">
                Gasto anual que você evita com terceiros:
              </div>
              <div className="mt-1 font-display text-4xl font-extrabold text-white sm:text-5xl">
                R$ {externalAnnualCost.toLocaleString("pt-BR")}
                <span className="text-base font-normal text-slate-400">/ano</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3.5">
                <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <div className="text-xs text-slate-400">Tempo poupado</div>
                  <div className="mt-1 font-display text-2xl font-bold text-[#B9FC01]">
                    +{annualHoursSaved}h
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <div className="text-xs text-slate-400">Plano ideal</div>
                  <div className="mt-1 font-display text-lg font-bold text-white">
                    {brandsCount <= 2 ? "Individual" : "Agência Ilimitada"}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <SpecularButton
                href="#planos"
                variant="volt"
                size="md"
                className="w-full"
              >
                <span>Ver Planos Disponíveis</span>
                <ArrowRight className="h-4 w-4" />
              </SpecularButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
