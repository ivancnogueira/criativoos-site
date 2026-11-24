import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Clock, Layers, ShieldAlert, X, Zap } from "lucide-react";
import { BorderGlow } from "../fx/BorderGlow";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OLD_STACK_COSTS = [
  {
    item: "Agência ou Social Media mensal",
    cost: "R$ 3.000/mês",
    note: "Prazos de 3 a 5 dias por lote, alterações lentas e pouca escala",
  },
  {
    item: "Designer + Editor avulso para Reels e Anúncios",
    cost: "R$ 1.500/mês",
    note: "Retrabalho constante de identidade visual, legendas e espaço livre para enquetes e links",
  },
  {
    item: "Assinaturas e créditos em dólar picotados",
    cost: "R$ 450+/mês",
    note: "Ferramentas mensais de IA + editor + gerador de imagens + automações que travam",
  },
];

const OLD_WAY_PAINS = [
  {
    bold: "Operação espalhada em 10 abas abertas:",
    text: "Pedir textos em um site, diagramar em outro, subir na nuvem, copiar contatos da planilha e agendar tudo na mão consome sua semana inteira.",
  },
  {
    bold: "Ferramentas online presas fora do seu computador:",
    text: "Plataformas comuns na internet não abrem suas pastas locais, não controlam os programas do seu computador e cobram extra por cada integração.",
  },
  {
    bold: "Rostos artificiais e trava de créditos no meio do mês:",
    text: "Programas genéricos mudam sua fisionomia em cada imagem e bloqueiam sua produção assim que os créditos pagos acabam.",
  },
];

const NEW_WAY_PILLARS = [
  {
    bold: "Operador de Computador + Navegador Inteligente no Seu PC:",
    text: "O CriativoOS vê a tela com segurança, abre seus programas locais, organiza pastas de clientes, pesquisa concorrentes ao vivo e preenche rotinas automáticas.",
  },
  {
    bold: "+253 Aplicativos Conectados + Servidor na Nuvem 24h:",
    text: "Conecte Google Drive, Notion, Gmail, planilhas e seus sistemas em rotinas visuais automáticas no seu computador ou rodando 24h na nuvem mesmo com o notebook desligado.",
  },
  {
    bold: "15 Criativos Autônomos Com Seu Rosto Real + Estúdio de Reels:",
    text: "Do gancho ao carrossel de 10 lâminas, posts, stories, anúncios e vídeos verticais editados, preservando suas fotos, logotipo e cores em pastas separadas por cliente.",
  },
  {
    bold: "10 Inteligências Artificiais Gratuitas + Controle Pelo WhatsApp:",
    text: "Comece sem custo extra por mensagem ou imagem usando 10 inteligências artificiais gratuitas já inclusas, ou conecte seu ChatGPT, Claude, Gemini ou Grok. Mande áudio no seu próprio WhatsApp e aprove respondendo 1.",
  },
];

export const OldVsNewOSComparison: React.FC = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const gridEl = gridRef.current;
    if (!gridEl) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          const leftItems = gsap.utils.toArray<HTMLElement>(
            '[data-dobra2-card="left"] [data-dobra2-reveal]',
            gridEl
          );
          const rightItems = gsap.utils.toArray<HTMLElement>(
            '[data-dobra2-card="right"] [data-dobra2-reveal]',
            gridEl
          );
          if (leftItems.length === 0 && rightItems.length === 0) return;

          // Entrada sincronizada ao scroll: acompanha a chegada da fila de mascotes
          // nos 2 cards e garante 100% de opacidade antes de o bloco chegar ao meio da tela.
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: gridEl,
              start: "top 82%",
              end: "top 44%",
              scrub: 0.2,
              invalidateOnRefresh: true,
            },
          });

          if (leftItems.length > 0) {
            tl.fromTo(
              leftItems,
              { opacity: 0, y: 16 },
              {
                opacity: 1,
                y: 0,
                duration: 0.35,
                stagger: 0.08,
                ease: "power2.out",
              },
              0
            );
          }

          if (rightItems.length > 0) {
            tl.fromTo(
              rightItems,
              { opacity: 0, y: 16 },
              {
                opacity: 1,
                y: 0,
                duration: 0.35,
                stagger: 0.08,
                ease: "power2.out",
              },
              0
            );
          }
        }, gridEl);

        return () => ctx.revert();
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      id="diferenciais"
      className="relative border-t border-white/[0.06] bg-[#050608] py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              // 02 · QUEBRA DE PARADIGMA
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Pare de Pagar{" "}
              <span className="text-red-400 line-through decoration-red-500/70">
                R$ 4.950+/mês
              </span>{" "}
              Em Ferramentas Separadas.{" "}
              <span className="text-[#B9FC01]">
                Instale Uma Operação Completa.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              Em vez de remendar agências lentas, profissionais avulsos e 10
              assinaturas em dólar todo mês, você centraliza tarefas no seu
              computador, rotinas automáticas e 15 especialistas em um só lugar.
            </p>
          </div>
        </div>

        <div ref={gridRef} className="mt-16 grid items-stretch gap-6 lg:grid-cols-12">
          {/* Coluna Esquerda: Pilha Fragmentada / Jeito Antigo */}
          <div data-dobra2-card="left" className="flex h-full lg:col-span-5">
            <BorderGlow
              className="w-full h-full"
              backgroundColor="rgba(22, 10, 14, 0.78)"
              glowColor="0 85 60"
              colors={["#ef4444", "#f87171", "#dc2626"]}
              borderRadius={24}
              innerClassName="h-full justify-between !p-6 sm:!p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-500/20 text-red-400">
                      <ShieldAlert className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                        Pilha Fragmentada (Jeito Antigo)
                      </h3>
                      <p className="text-xs font-medium text-red-400">
                        Alto custo fixo mensal e gargalo operacional diário
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tabela de custos empilhados */}
                <div className="mt-5 space-y-2.5">
                  {OLD_STACK_COSTS.map((row) => (
                    <div
                      key={row.item}
                      data-dobra2-reveal
                      className="rounded-xl border border-red-500/20 bg-black/35 px-4 py-3"
                    >
                      <div className="flex items-center justify-between gap-2 text-sm font-bold">
                        <span className="text-slate-100">{row.item}</span>
                        <span className="shrink-0 font-mono text-red-400">
                          {row.cost}
                        </span>
                      </div>
                      <div className="mt-0.5 text-xs text-slate-400">
                        {row.note}
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 space-y-4">
                  {OLD_WAY_PAINS.map((pain) => (
                    <li
                      key={pain.bold}
                      data-dobra2-reveal
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                    >
                      <X className="mt-1 h-4 w-4 shrink-0 text-red-400" />
                      <span>
                        <strong className="text-white">{pain.bold}</strong>{" "}
                        {pain.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                data-dobra2-reveal
                className="mt-6 flex items-center justify-between rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 font-mono text-xs"
              >
                <span className="text-slate-300">Custo anual acumulado</span>
                <span className="text-base font-extrabold text-red-400">
                  R$ 59.400+/ano
                </span>
              </div>
            </BorderGlow>
          </div>

          {/* Coluna Direita: Com o CriativoOS */}
          <div data-dobra2-card="right" className="flex h-full lg:col-span-7">
            <BorderGlow
              className="w-full h-full"
              backgroundColor="rgba(10, 22, 14, 0.86)"
              glowColor="76 98 50"
              colors={["#B9FC01", "#31cf76", "#10b981"]}
              borderRadius={24}
              innerClassName="h-full justify-between !p-6 sm:!p-8"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#B9FC01] text-[#050608]">
                      <Layers className="h-6 w-6 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                        Com o CriativoOS
                      </h3>
                      <p className="text-xs font-semibold text-[#B9FC01]">
                        Operador de Computador + Nuvem 24h + 253+ Apps + 15 Criativos
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-[#B9FC01]/40 bg-[#B9FC01]/15 px-3 py-1 font-mono text-[10px] font-bold uppercase text-[#B9FC01]">
                    Licença Anual Própria
                  </span>
                </div>

                {/* Bloco comparativo de velocidade simétrico ao comparativo de custo */}
                <div
                  data-dobra2-reveal
                  className="mt-5 rounded-xl border border-[#B9FC01]/25 bg-black/40 p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
                    <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-wider text-[#B9FC01]">
                      <Zap className="h-3.5 w-3.5" />
                      De dias para minutos na sua rotina
                    </span>
                    <span className="font-mono text-slate-300">
                      1 hora no CriativoOS vs 1 semana no jeito antigo
                    </span>
                  </div>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    <div className="rounded-lg border border-red-500/20 bg-red-500/[0.06] px-3 py-2">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-red-300">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Jeito antigo
                        </span>
                        <span className="font-mono">5 a 7 dias</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-full rounded-full bg-red-400/75" />
                      </div>
                    </div>
                    <div className="rounded-lg border border-[#B9FC01]/30 bg-[#B9FC01]/10 px-3 py-2">
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#B9FC01]">
                        <span className="inline-flex items-center gap-1">
                          <Zap className="h-3 w-3" />
                          Com o CriativoOS
                        </span>
                        <span className="font-mono">1 hora (lote completo)</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-1/5 rounded-full bg-[#B9FC01]" />
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-4">
                  {NEW_WAY_PILLARS.map((item) => (
                    <li
                      key={item.bold}
                      data-dobra2-reveal
                      className="flex items-start gap-3.5 text-sm leading-relaxed text-slate-200"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B9FC01]/20 text-[#B9FC01]">
                        <Check className="h-4 w-4 stroke-[3]" />
                      </span>
                      <span>
                        <strong className="text-white">{item.bold}</strong>{" "}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div
                  data-dobra2-reveal
                  className="mt-6 grid gap-3 sm:grid-cols-3"
                >
                  <div className="rounded-2xl border border-[#B9FC01]/25 bg-black/40 p-3.5">
                    <div className="font-mono text-[10px] uppercase text-[#B9FC01]">
                      Onde Trabalha
                    </div>
                    <div className="mt-1 font-display text-lg font-bold text-white">
                      Seu PC + Nuvem 24h
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[#B9FC01]/25 bg-black/40 p-3.5">
                    <div className="font-mono text-[10px] uppercase text-[#B9FC01]">
                      Integrações Nativas
                    </div>
                    <div className="mt-1 font-display text-lg font-bold text-white">
                      +253 Aplicativos
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[#B9FC01]/25 bg-black/40 p-3.5">
                    <div className="font-mono text-[10px] uppercase text-[#B9FC01]">
                      Investimento Inicial
                    </div>
                    <div className="mt-1 font-display text-lg font-bold text-[#B9FC01]">
                      A partir de R$ 997/ano
                    </div>
                  </div>
                </div>

                <div
                  data-dobra2-reveal
                  className="mt-4 flex items-center justify-between rounded-2xl border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-3 font-mono text-xs"
                >
                  <span className="text-slate-200">Economia estimada por ano</span>
                  <span className="text-base font-extrabold text-[#B9FC01]">
                    Economize até R$ 58.000+/ano
                  </span>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
};
