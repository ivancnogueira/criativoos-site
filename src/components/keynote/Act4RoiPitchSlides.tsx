import React from "react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Crown,
  QrCode,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import {
  getCampaignOfferPlans,
  OFFICIAL_PUBLIC_PLANS,
  WHATSAPP_COMMUNITY_URL,
} from "../../config/campaignLinks";
import type { KeynoteEdition } from "../../data/keynoteSlidesData";
import { OfferQrCode } from "./OfferQrCode";
import { BorderGlow } from "../fx/BorderGlow";

interface Props {
  slideId: number;
  edition: KeynoteEdition;
}

export const Act4RoiPitchSlides: React.FC<Props> = ({ slideId, edition }) => {
  const isMig = edition === "migration";
  const wavePlans = getCampaignOfferPlans(edition);
  const heroPlan = wavePlans[2];

  if (slideId === 16) {
    return (
      <div className="grid w-full gap-6 text-left md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-red-500/30 bg-[#161013] p-7 sm:p-9">
          <div className="font-mono text-xs font-bold text-red-400">CUSTO TRADICIONAL MENSAL</div>
          <div className="flex justify-between text-base text-zinc-200 sm:text-lg">
            <span>Agência ou Social Media mensal</span>
            <span className="font-mono font-bold text-white">R$ 3.000/mês</span>
          </div>
          <div className="flex justify-between text-base text-zinc-200 sm:text-lg">
            <span>Designer + Editor para Reels</span>
            <span className="font-mono font-bold text-white">R$ 1.500/mês</span>
          </div>
          <div className="flex justify-between text-base text-zinc-200 sm:text-lg">
            <span>Assinaturas em dólar e automações</span>
            <span className="font-mono font-bold text-white">R$ 450+/mês</span>
          </div>
          <div className="flex justify-between border-t border-white/10 pt-4 font-display text-xl font-extrabold text-white sm:text-2xl">
            <span>Total Fora do CriativoOS</span>
            <span className="font-mono text-red-400">R$ 59.400+/ano</span>
          </div>
        </div>

        <BorderGlow
          backgroundColor="rgba(16, 22, 14, 0.94)"
          colors={["#B9FC01", "#31cf76", "#38bdf8"]}
          borderRadius={24}
          innerClassName="flex h-full flex-col justify-between !p-7 sm:!p-9"
        >
          <div>
            <div className="font-mono text-xs font-bold text-[#B9FC01]">COM O CRIATIVOOS NO SEU PC</div>
            <h4 className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">
              Se paga na 1ª campanha ou no 1º cliente atendido
            </h4>
            <ul className="mt-4 space-y-2.5 text-base font-medium text-zinc-200 sm:text-lg">
              <li>• Operador de PC + Navegador + 253 Apps</li>
              <li>• 15 Criativos com seu rosto real + Vídeos Reels</li>
              <li>• 10 IAs gratuitas já inclusas sem gasto extra</li>
            </ul>
          </div>
          <div className="mt-6 rounded-2xl bg-black/45 px-5 py-3.5 font-mono text-sm font-bold text-[#B9FC01] sm:text-base">
            Economia real acima de 95% no ano.
          </div>
        </BorderGlow>
      </div>
    );
  }

  if (slideId === 17) {
    return (
      <div className="grid w-full gap-5 text-left md:grid-cols-3">
        {OFFICIAL_PUBLIC_PLANS.map((p) => (
          <div
            key={p.id}
            className={`flex flex-col justify-between rounded-3xl border p-7 ${
              p.highlighted
                ? "border-[#B9FC01]/55 bg-[#13190E]"
                : "border-white/15 bg-[#12151D]"
            }`}
          >
            <div>
              <div className="font-mono text-xs font-bold text-zinc-400">
                OFERTA PERPÉTUA · SITE PÚBLICO
              </div>
              <h4 className="mt-2 font-display text-2xl font-extrabold text-white">{p.name}</h4>
              <div className="mt-4 flex items-baseline gap-1.5 font-display">
                <span className="text-base font-bold text-[#B9FC01]">12x de</span>
                <span className="text-4xl font-extrabold text-white">{p.installmentValue}</span>
              </div>
              <div className="mt-1.5 text-sm font-semibold text-zinc-300">
                ou {p.priceCash} à vista/ano
              </div>
              <div className="mt-4 border-t border-white/10 pt-4 text-sm font-semibold text-zinc-200 sm:text-base">
                {p.brandsLimit} · {p.pcsLimit} · {p.criativosCount}
              </div>
            </div>
            {p.orderBumpNote && (
              <div className="mt-4 rounded-xl border border-amber-400/25 bg-amber-400/10 p-3 text-xs text-amber-200 sm:text-sm">
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
      <div className="w-full">
        <div className="mb-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#B9FC01] px-5 py-1.5 font-mono text-xs font-extrabold text-[#0D0D0D]">
            <Sparkles className="h-4 w-4" />
            {isMig
              ? "FASE 1 · PRÉ-LANÇAMENTO FUNDADORES · VITALÍCIO INCLUSO NO ILIMITADO"
              : "FASE 2 · LANÇAMENTO QUINTA BLACK · VITALÍCIO INCLUSO NO ILIMITADO"}
          </span>
        </div>

        <div className="grid w-full gap-5 text-left md:grid-cols-3">
          {wavePlans.map((plan) => {
            const isHero = Boolean(plan.highlighted);
            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-3xl border p-6 sm:p-7 ${
                  isHero
                    ? "border-[#B9FC01] bg-[#13180E] shadow-[0_0_55px_rgba(185,252,1,0.2)]"
                    : "border-white/15 bg-[#12151D]"
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-zinc-400">{plan.code}</span>
                    {plan.badge && (
                      <span
                        className={`rounded-full px-3 py-0.5 font-mono text-[11px] font-bold ${
                          isHero
                            ? "bg-[#B9FC01] text-[#0D0D0D]"
                            : "bg-white/10 text-zinc-200"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="mt-2 font-display text-2xl font-extrabold text-white">
                    {plan.name}
                  </h4>

                  <div className="mt-3 border-y border-white/10 py-3">
                    {plan.anchorPrice && (
                      <div className="font-mono text-xs text-zinc-500 line-through">
                        Oficial: {plan.anchorInstallments} ({plan.anchorPrice}/ano)
                      </div>
                    )}
                    <div className="mt-0.5 flex items-baseline gap-1.5 font-display">
                      <span className="text-lg font-extrabold text-[#B9FC01]">12x de</span>
                      <span className="text-4xl font-extrabold text-white sm:text-5xl">
                        {plan.installmentValue}
                      </span>
                    </div>
                    <div className="mt-1 text-sm font-semibold text-zinc-200">
                      ou <strong className="text-[#B9FC01]">{plan.priceCash} à vista</strong>
                      {plan.vitalicioIncluded ? " · SEM ANUIDADE" : " (anual)"}
                    </div>
                    <div className="mt-0.5 font-mono text-xs font-bold text-zinc-300">
                      {plan.billingCycle}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-zinc-200 sm:text-base">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#B9FC01]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.orderBumpNote && slideId === 19 && (
                    <div className="mt-4 rounded-xl border border-amber-400/35 bg-amber-400/10 p-3 text-xs font-medium text-amber-200 sm:text-sm">
                      {plan.orderBumpNote}
                    </div>
                  )}
                </div>

                <a
                  href={plan.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-extrabold transition active:scale-[0.97] ${
                    isHero
                      ? "volt-button"
                      : "border border-white/20 bg-white/[0.06] text-white hover:border-[#B9FC01] hover:bg-white/15"
                  }`}
                >
                  {isHero ? "GARANTIR ILIMITADO + VITALÍCIO" : `Escolher ${plan.name}`}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // NOVO SLIDE 20: REFORÇO DE PITCH EXCLUSIVO DO ILIMITADO + VITALÍCIO (DETALHANDO TUDO QUE LEVA)
  if (slideId === 20) {
    const deliverables = [
      {
        title: "Passaporte Vitalício Incluso (Zero Anuidade)",
        desc: "Pague uma única vez nessa janela e use para sempre sem nunca pagar renovação anual.",
        gold: true,
      },
      {
        title: "Marcas, Clientes & Servidores Ilimitados",
        desc: "Atenda 10, 50 ou 100+ empresas em pastas 100% isoladas sem taxa extra por cliente.",
      },
      {
        title: "Instalação em Até 5 Computadores ou VPS",
        desc: "Rode no seu notebook, na equipe e em servidor na nuvem 24h com a mesma chave.",
      },
      {
        title: "Todos os 15 Criativos Liberados",
        desc: "9 Base + 3 Bônus (Rosto Real, Concorrentes e PDFs) + 3 Diretores de Vídeos Reels.",
      },
      {
        title: "Operador de Computador + Navegador Inteligente",
        desc: "Controla pastas, planilhas e pesquisas na web com pausa segura antes de senhas.",
      },
      {
        title: "+253 Aplicativos Conectados & Rotinas Semanais",
        desc: "Drive, Planilhas, Notion, Gmail, WordPress e relatórios PDF automáticos.",
      },
      {
        title: "10 IAs Gratuitas Inclusas + Sua Conta Atual",
        desc: "Comece com custo zero por fora ou conecte seu ChatGPT, Claude, Gemini ou Grok.",
      },
      {
        title: "WhatsApp 24h + Área de Membros + Comunidade",
        desc: "Aulas gravadas passo a passo, grupo oficial VIP e comando direto pelo celular.",
      },
    ];

    return (
      <div className="grid w-full items-stretch gap-6 text-left lg:grid-cols-12">
        <BorderGlow
          backgroundColor="rgba(15, 20, 14, 0.94)"
          colors={["#B9FC01", "#FBBF24", "#38bdf8"]}
          borderRadius={26}
          className="lg:col-span-7"
          innerClassName="flex h-full flex-col justify-between !p-6 sm:!p-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#B9FC01]/15 px-3.5 py-1 font-mono text-xs font-extrabold uppercase text-[#B9FC01]">
              <Crown className="h-4 w-4" />
              CHECKLIST COMPLETO · TUDO QUE VAI PARA SUA CONTA HOJE
            </div>
            <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-4 ${
                    item.gold
                      ? "border-amber-400/55 bg-amber-400/10"
                      : "border-white/10 bg-black/35"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2
                      className={`mt-0.5 h-5 w-5 shrink-0 ${
                        item.gold ? "text-amber-300" : "text-[#B9FC01]"
                      }`}
                    />
                    <div>
                      <div
                        className={`font-display text-base font-extrabold leading-tight ${
                          item.gold ? "text-amber-200" : "text-white"
                        }`}
                      >
                        {item.title}
                      </div>
                      <p className="mt-1 text-xs leading-snug text-zinc-300 sm:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BorderGlow>

        <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-[#B9FC01] bg-[#12180E] p-6 shadow-[0_0_65px_rgba(185,252,1,0.22)] sm:p-8 lg:col-span-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(185,252,1,0.25),transparent_65%)]" />

          {/* Squad Cyberpunk 3D no topo do card hero */}
          <div className="relative z-10 flex h-44 items-end justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/45 pt-3 sm:h-48">
            <img
              src="/images/avatars/editor_video.png"
              alt="Diretor de Vídeos Reels"
              className="-mr-8 h-36 w-auto object-contain opacity-90 sm:h-40"
            />
            <img
              src="/images/hero-cyber-operator-v2.png"
              alt="CriativoOS Ilimitado Vitalício"
              className="relative z-10 h-44 w-auto object-contain sm:h-48"
            />
            <img
              src="/images/avatars/consistencia_visual.png"
              alt="Guardiã do Rosto Real"
              className="-ml-8 h-36 w-auto object-contain opacity-90 sm:h-40"
            />
          </div>

          <div className="relative z-10 mt-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs font-extrabold uppercase text-[#B9FC01]">
                AGÊNCIA ILIMITADA · VITALÍCIO
              </span>
              <span className="rounded-full bg-[#B9FC01] px-3 py-0.5 font-mono text-[11px] font-extrabold text-[#050608]">
                {isMig ? "+R$ 1,08/mês vs. Ag. 10" : "+R$ 2,05/mês vs. Ag. 10"}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap items-baseline gap-3">
              <span className="font-mono text-sm text-zinc-400 line-through">
                De 12x de R$ 107,91 (R$ 997/ano)
              </span>
            </div>

            <div className="mt-1 flex items-baseline gap-2 font-display">
              <span className="text-xl font-extrabold text-[#B9FC01] sm:text-2xl">12x de</span>
              <span className="text-5xl font-extrabold text-white sm:text-6xl">
                {heroPlan.installmentValue}
              </span>
            </div>
            <div className="mt-1.5 text-base font-bold text-zinc-100">
              ou <strong className="text-[#B9FC01]">{heroPlan.priceCash} à vista</strong> · Pagamento único sem anuidade
            </div>

            <a
              href={heroPlan.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="volt-button mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-extrabold transition active:scale-[0.97]"
            >
              GARANTIR ILIMITADO VITALÍCIO AGORA
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (slideId === 21) {
    return (
      <div className="w-full rounded-3xl border border-[#B9FC01]/50 bg-[#12160F] p-8 sm:p-10">
        <ShieldCheck className="mx-auto h-14 w-14 text-[#B9FC01]" />
        <h4 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
          7 Dias de Garantia Incondicional + Ativação Imediata v1.0.3
        </h4>

        <div className="mx-auto mt-6 grid max-w-5xl gap-4 text-left sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-base text-zinc-200">
            <strong className="block font-display text-lg text-[#B9FC01]">1. Instale Hoje</strong>
            Baixe em 1 minuto para Windows, Mac ou Linux e conecte sua marca.
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-base text-zinc-200">
            <strong className="block font-display text-lg text-[#B9FC01]">2. Aulas &amp; Grupo</strong>
            Assista aos tutoriais na Área de Membros e entre na Comunidade WhatsApp.
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-base text-zinc-200">
            <strong className="block font-display text-lg text-[#B9FC01]">3. Risco Zero</strong>
            Se não fizer sentido em até 7 dias, devolvemos 100% do seu dinheiro.
          </div>
        </div>

        <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={heroPlan.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="volt-button inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-extrabold transition active:scale-[0.97]"
          >
            Garantir Ilimitado VITALÍCIO (12x {heroPlan.installmentValue} ou {heroPlan.priceCash})
            <ArrowUpRight className="h-5 w-5" />
          </a>
          <a
            href={WHATSAPP_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-4 text-sm font-bold text-zinc-100 transition hover:border-[#B9FC01] hover:text-white active:scale-[0.97]"
          >
            <Users className="h-4 w-4 text-[#B9FC01]" />
            Comunidade Oficial
          </a>
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-6 text-sm text-zinc-300">
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

  // SLIDE 22: TELA FINAL FULL-WIDTH COM OS 3 QR CODES DAS OFERTAS
  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-1 gap-6 text-left lg:grid-cols-3">
        {wavePlans.map((plan) => {
          const isHero = Boolean(plan.highlighted);
          return (
            <div
              key={plan.id}
              className={`flex flex-col justify-between rounded-3xl border p-6 transition sm:p-7 ${
                isHero
                  ? "border-2 border-[#B9FC01] bg-[#13180E] shadow-[0_0_60px_rgba(185,252,1,0.24)]"
                  : "border-white/15 bg-[#12151D]"
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-zinc-400">
                    {plan.code}
                  </span>
                  {plan.badge && (
                    <span
                      className={`rounded-full px-3 py-0.5 font-mono text-[11px] font-extrabold uppercase ${
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
                    <h4 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                      {plan.name}
                    </h4>
                    <div className="mt-1 text-sm font-medium text-zinc-300">
                      {plan.brandsLimit} · {plan.pcsLimit} · {plan.criativosCount}
                    </div>
                  </div>

                  <div className="text-right">
                    {plan.anchorPrice && (
                      <div className="font-mono text-xs text-zinc-500 line-through">
                        {plan.anchorInstallments}
                      </div>
                    )}
                    <div className="flex items-baseline justify-end gap-1 font-display">
                      <span className="text-base font-extrabold text-[#B9FC01]">12x de</span>
                      <span className="text-3xl font-extrabold text-white sm:text-4xl">
                        {plan.installmentValue}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-zinc-200">
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
                  <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-zinc-200">
                    <QrCode className="h-4 w-4 text-[#B9FC01]" />
                    Aponte a câmera para o plano {plan.name}
                  </div>
                </div>

                {plan.orderBumpNote && (
                  <div className="mb-4 rounded-xl border border-amber-400/35 bg-amber-400/10 p-3 text-center text-xs font-medium text-amber-200">
                    {plan.orderBumpNote}
                  </div>
                )}
              </div>

              <a
                href={plan.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-extrabold transition active:scale-[0.97] ${
                  isHero
                    ? "volt-button"
                    : "border border-white/20 bg-white/[0.07] text-white hover:border-[#B9FC01] hover:bg-white/15"
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
