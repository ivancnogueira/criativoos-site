import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  CalendarClock,
  CheckCircle2,
  FolderSync,
  MessageCircle,
  Search,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { BorderGlow } from "../fx/BorderGlow";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface WorkflowStepCard {
  number: string;
  title: string;
  desc: string;
  appBadge: string;
  icon: React.FC<{ className?: string }>;
}

const WORKFLOW_STEPS: readonly WorkflowStepCard[] = [
  {
    number: "01",
    title: "1. Pesquisar Assuntos em Alta",
    desc: "Busca os temas que o seu público mais está procurando e comentando nesta semana.",
    appBadge: "Navegador Inteligente",
    icon: Search,
  },
  {
    number: "02",
    title: "2. Salvar no Google Drive e Planilha",
    desc: "Guarda todas as ideias organizadas na sua pasta do Drive e atualiza a planilha de controle.",
    appBadge: "Google Drive + Planilhas",
    icon: FolderSync,
  },
  {
    number: "03",
    title: "3. Criar Carrossel e Legenda",
    desc: "Monta as imagens com sua identidade, suas fotos reais e escreve a legenda pronta.",
    appBadge: "Estúdio dos 15 Criativos",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "4. Enviar no WhatsApp Para Aprovar",
    desc: "Manda a prévia completa direto no seu celular esperando você responder 1 para postar.",
    appBadge: "Seu WhatsApp",
    icon: MessageCircle,
  },
];

/**
 * Dobra 3C: Rotinas Automáticas com Motion GSAP ScrollTrigger (refreshPriority: 5)
 * montando 4 blocos passo a passo ao rolar a página com feixes luminosos #B9FC01.
 */
export const MotorWorkflowsSection: React.FC = () => {
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-wf-card]", stage);
        const beams = gsap.utils.toArray<HTMLElement>("[data-wf-beam]", stage);
        const dots = gsap.utils.toArray<HTMLElement>("[data-wf-dot]", stage);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: "top 82%",
            end: "bottom 60%",
            scrub: 0.6,
            refreshPriority: 5,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, idx) => {
          tl.fromTo(
            card,
            { opacity: 0.18, y: 26, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.45,
              ease: "power2.out",
            },
            idx * 0.35
          );

          const beam = beams[idx];
          const dot = dots[idx];
          if (beam) {
            tl.fromTo(
              beam,
              { scaleY: 0, opacity: 0.2 },
              {
                scaleY: 1,
                opacity: 1,
                duration: 0.3,
                ease: "power1.out",
                transformOrigin: "top center",
              },
              idx * 0.35 + 0.18
            );
          }
          if (dot) {
            tl.fromTo(
              dot,
              { scale: 0, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.2,
                ease: "back.out(2)",
              },
              idx * 0.35 + 0.28
            );
          }
        });
      }, stageRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="motor-rotinas"
      className="relative border-t border-white/[0.06] bg-[#07090D] py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Coluna Esquerda: Explicação simples + âncora dos mascotes */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              <Workflow className="h-3.5 w-3.5" />
              // 03C · ROTINAS AUTOMÁTICAS
            </span>

            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl xl:text-5xl">
              Rotinas Visuais Que Conectam{" "}
              <span className="text-[#B9FC01]">Tudo Do Começo ao Fim</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Em vez de repetir as mesmas tarefas toda semana, você liga os
              blocos em ordem visual. No dia e horário marcados, o CriativoOS
              pesquisa, salva seus arquivos, cria os posts e envia no seu
              WhatsApp para você liberar com 1 toque.
            </p>

            <div className="mt-6 space-y-3.5">
              <div className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-[#050608]/80 p-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#B9FC01]/15 text-[#B9FC01]">
                  <CalendarClock className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">
                    Funciona no horário que você escolher
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                    Agende para rodar toda segunda-feira às 8h ou todos os dias
                    cedo enquanto você toma café.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-[#050608]/80 p-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#B9FC01]/15 text-[#B9FC01]">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">
                    Cada etapa mostra o que foi feito
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                    Você vê o caminho completo da tarefa e sabe sempre onde cada
                    arquivo foi guardado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-[#050608]/80 p-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">
                    Chega pronto para sua aprovação
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                    Nada sai do papel para o seu Instagram sem passar antes pelo
                    seu próprio WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Área reservada para pouso do terceiro mascote líder na coreografia GSAP */}
            <div
              data-mascot-anchor="motor-3c"
              className="mt-6 flex min-h-[84px] items-center justify-between gap-4 rounded-2xl border border-dashed border-[#B9FC01]/30 bg-[#050608]/75 px-4 py-3"
            >
              <div className="flex h-14 w-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <Workflow className="h-5 w-5 text-[#B9FC01]/75" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#B9FC01]">
                  Maestro das Rotinas
                </div>
                <p className="mt-0.5 text-xs text-slate-400">
                  Liga uma etapa na outra no ritmo da sua semana sem você
                  precisar clicar.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Fluxo de 4 Blocos Montados ao Vivo no Scroll GSAP */}
          <div className="lg:col-span-7" ref={stageRef}>
            <BorderGlow
              backgroundColor="rgba(12, 13, 22, 0.92)"
              glowColor="76 98 50"
              colors={["#B9FC01", "#a855f7", "#38bdf8"]}
              borderRadius={24}
              innerClassName="!p-5 sm:!p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#B9FC01]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                    Rotina Semanal · 4 Blocos Conectados
                  </span>
                </div>
                <span className="rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-3 py-0.5 font-mono text-[10px] font-bold text-[#B9FC01]">
                  Toda Segunda · 08:00
                </span>
              </div>

              {/* Lista sequencial dos 4 blocos conectados por feixes #B9FC01 */}
              <div className="mt-5 flex flex-col">
                {WORKFLOW_STEPS.map((step, idx) => {
                  const Icon = step.icon;
                  const isLast = idx === WORKFLOW_STEPS.length - 1;
                  return (
                    <React.Fragment key={step.number}>
                      <div
                        data-wf-card
                        className="relative rounded-2xl border border-white/15 bg-[#050608] p-4 shadow-lg transition-colors duration-300 hover:border-[#B9FC01]/55"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="flex items-start gap-3.5">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#B9FC01]/35 bg-[#B9FC01]/15 text-[#B9FC01]">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#B9FC01]">
                                  Etapa {step.number}
                                </span>
                                <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-slate-300">
                                  {step.appBadge}
                                </span>
                              </div>
                              <h3 className="mt-1 font-display text-base font-bold text-white sm:text-lg">
                                {step.title}
                              </h3>
                              <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:text-sm">
                                {step.desc}
                              </p>
                            </div>
                          </div>

                          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                            <CheckCircle2 className="h-3 w-3" />
                            Conectado
                          </span>
                        </div>
                      </div>

                      {!isLast && (
                        <div
                          aria-hidden="true"
                          className="relative mx-auto flex h-9 w-8 flex-col items-center justify-center"
                        >
                          <div
                            data-wf-beam
                            className="h-full w-1 rounded-full bg-[#B9FC01] shadow-[0_0_16px_rgba(185,252,1,0.85)]"
                          />
                          <div
                            data-wf-dot
                            className="absolute flex h-5 w-5 items-center justify-center rounded-full border border-[#050608] bg-[#B9FC01] text-[#050608] shadow-[0_0_14px_rgba(185,252,1,0.9)]"
                          >
                            <ArrowDown className="h-3 w-3 stroke-[3]" />
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
};
