import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowRight,
  Cpu,
  GitBranch,
  Globe,
  Monitor,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { WebGLCyberRobot3D } from "../mascots/WebGLCyberRobot3D";

/**
 * HERO 02: REACTOR CORE (FULL-WIDTH DESKTOP & TABLET, STACKED ONLY ON SMARTPHONE)
 * Inspirada diretamente em Aivance & Nexora (Referências 3 e 4):
 * - Largura 100% Full-Bleed (w-full max-w-none)
 * - Mantém estrutura horizontal de Desktop até telas Tablet (md: >= 768px)
 * - Empilha apenas em telas Smartphone (< 768px)
 */
export const HeroConcept2Reactor: React.FC<{
  customRobotImg?: string;
}> = ({ customRobotImg }) => {
  const rootRef = useRef<HTMLElement | null>(null);
  const robotRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-r2-reveal]", {
        y: 24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, el);

    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;

      if (robotRef.current) {
        gsap.to(robotRef.current, {
          x: nx * 16,
          y: ny * 10,
          duration: 0.5,
          ease: "power2.out",
        });
      }
      if (cardsRef.current) {
        gsap.to(cardsRef.current, {
          x: nx * -12,
          y: ny * -8,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[calc(100vh-56px)] w-full flex-col justify-between overflow-hidden bg-[#06070A] text-white"
    >
      {/* Brilho radial do reator à direita */}
      <div className="pointer-events-none absolute top-[38%] right-[14%] h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-[#B9FC01]/14 blur-[160px]" />
      <div className="pointer-events-none absolute top-[20%] left-[6%] h-[380px] w-[380px] rounded-full bg-[#0031CC]/14 blur-[140px]" />

      {/* Topbar Full-Width Sem Menu (LP focada em conversão) */}
      <header className="relative z-30 w-full border-b border-white/[0.06] px-4 py-4 sm:px-6 md:px-10 xl:px-16">
        <div className="flex w-full items-center justify-between gap-4">
          <img
            src="/logo-criativoos-dark.svg"
            alt="CriativoOS"
            className="h-7 w-auto shrink-0 md:h-8"
          />

          <a
            href="#planos"
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#B9FC01] px-5 py-2.5 text-xs font-extrabold text-[#06070A] shadow-[0_0_25px_rgba(185,252,1,0.4)] transition hover:scale-105"
          >
            Começar Agora <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* CORPO PRINCIPAL FULL-WIDTH: 2 COLUNAS DESDE TABLET (md:grid-cols-12), EMPILHA SÓ NO SMARTPHONE */}
      <div className="relative z-20 my-auto w-full px-4 py-6 sm:px-6 md:px-10 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 lg:gap-10">
          {/* COLUNA ESQUERDA (5 COLS EM TABLET E DESKTOP): DIRETA, LIMPA E MONUMENTAL */}
          <div className="space-y-5 md:col-span-5 lg:space-y-6">
            <div
              data-r2-reveal
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold text-zinc-200 lg:text-xs"
            >
              <span className="h-2 w-2 rounded-full bg-[#B9FC01] shadow-[0_0_10px_#B9FC01]" />
              <span>Sistema Operacional de IA no Seu Computador</span>
            </div>

            <h1
              data-r2-reveal
              className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-4xl lg:text-6xl xl:text-[4.6rem]"
            >
              Comande.
              <br />
              Automatize.
              <br />
              <span className="text-[#B9FC01]">Crie Tudo.</span>
            </h1>

            <p
              data-r2-reveal
              className="max-w-xl text-xs leading-relaxed text-zinc-400 sm:text-sm lg:text-base"
            >
              O <strong className="text-white">CriativoOS</strong> instala 15
              agentes especialistas na sua máquina para controlar programas do
              seu computador, navegar na web, conectar 253+ aplicativos, criar
              seus posts e vídeos com o seu rosto e operar 24 horas pelo seu
              WhatsApp.
            </p>

            <div
              data-r2-reveal
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <a
                href="#planos"
                className="inline-flex items-center gap-2 rounded-full bg-[#B9FC01] px-6 py-3 text-xs font-extrabold text-[#06070A] shadow-[0_0_35px_rgba(185,252,1,0.45)] transition hover:scale-105 lg:px-7 lg:py-3.5 lg:text-sm"
              >
                Instalar no Meu PC <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#por-dentro"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-xs font-bold text-white transition hover:border-[#B9FC01]/60 hover:bg-white/[0.07] lg:px-7 lg:py-3.5 lg:text-sm"
              >
                Explorar Funções{" "}
                <ArrowRight className="h-4 w-4 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* COLUNA DIREITA (7 COLS EM TABLET E DESKTOP): ROBÔ 3D NO PEDESTAL + 4 CARDS DE TELEMETRIA */}
          <div className="relative flex min-h-[360px] items-center justify-center md:col-span-7 md:min-h-[400px] lg:min-h-[460px]">
            {/* Anéis circulares sutis de radar atrás do robô */}
            <div className="pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-[#B9FC01]/15 lg:h-[400px] lg:w-[400px]" />
            <div className="pointer-events-none absolute h-[370px] w-[370px] rounded-full border border-white/[0.04] lg:h-[490px] lg:w-[490px]" />

            {/* ROBÔ 3D CENTRAL FLUTUANDO SOBRE O PEDESTAL */}
            <div
              ref={robotRef}
              data-r2-reveal
              className="relative z-10 flex flex-col items-center"
            >
              {customRobotImg ? (
                <img
                  src={customRobotImg}
                  alt="Robô 3D CriativoOS"
                  className="h-[320px] w-[320px] object-contain mix-blend-lighten md:h-[330px] md:w-[330px] lg:h-[430px] lg:w-[430px] xl:h-[490px] xl:w-[490px]"
                />
              ) : (
                <WebGLCyberRobot3D
                  preset="reactor-bot"
                  className="h-[320px] w-[320px] md:h-[330px] md:w-[330px] lg:h-[430px] lg:w-[430px] xl:h-[490px] xl:w-[490px]"
                />
              )}
            </div>

            {/* 4 CARDS HUD FLUTUANTES AO REDOR DO ROBÔ (DESDE TABLET md:, GRADE 2x2 NO SMARTPHONE) */}
            <div
              ref={cardsRef}
              className="pointer-events-none absolute inset-0 z-20 hidden md:block"
            >
              {/* 1. Card Superior Esquerdo: Fluxos & Automação (Gráfico de Linha) */}
              <div
                data-r2-reveal
                className="absolute top-1 left-0 w-36 rounded-2xl border border-white/10 bg-[#0D1017]/88 p-2.5 shadow-2xl backdrop-blur-xl lg:w-48 lg:p-4 xl:w-56"
              >
                <div className="flex items-center justify-between text-[11px] text-zinc-400 lg:text-xs">
                  <span className="font-semibold text-white">Fluxos Ativos</span>
                  <span className="font-mono text-[10px] font-bold text-[#B9FC01]">
                    +340%
                  </span>
                </div>
                <div className="mt-1 font-display text-xl font-extrabold text-white lg:text-2xl">
                  24/7
                </div>
                <svg
                  viewBox="0 0 120 32"
                  className="mt-1.5 h-7 w-full overflow-visible lg:h-8"
                >
                  <path
                    d="M 2 26 Q 22 18, 36 22 T 70 12 T 118 4"
                    fill="none"
                    stroke="#B9FC01"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* 2. Card Inferior Esquerdo: Operador de PC (Barras de Atividade) */}
              <div
                data-r2-reveal
                className="absolute bottom-2 left-0 w-36 rounded-2xl border border-white/10 bg-[#0D1017]/88 p-2.5 shadow-2xl backdrop-blur-xl lg:bottom-4 lg:w-48 lg:p-4 xl:w-56"
              >
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 lg:text-xs">
                  <Monitor className="h-3.5 w-3.5 text-[#B9FC01]" />
                  <span className="font-semibold text-white">
                    Operador de PC
                  </span>
                </div>
                <div className="mt-1 font-display text-sm font-extrabold text-white lg:text-xl">
                  Computer Use
                </div>
                <div className="mt-2 flex h-6 items-end gap-1.5 lg:h-8">
                  {[35, 55, 45, 75, 65, 90, 100].map((h, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-[#B9FC01]/30 to-[#B9FC01]"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* 3. Card Superior Direito: Grafo de 253+ Apps Conectados */}
              <div
                data-r2-reveal
                className="absolute top-1 right-0 w-36 rounded-2xl border border-white/10 bg-[#0D1017]/88 p-2.5 shadow-2xl backdrop-blur-xl lg:top-3 lg:w-48 lg:p-4 xl:w-56"
              >
                <div className="flex items-center justify-between text-[11px] text-zinc-400 lg:text-xs">
                  <span className="font-semibold text-white">Integrações</span>
                  <GitBranch className="h-3.5 w-3.5 text-[#B9FC01]" />
                </div>
                <div className="mt-1 font-display text-lg font-extrabold text-white lg:text-2xl">
                  253+ Apps
                </div>
                <div className="mt-2 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-2 py-1 font-mono text-[9px] text-[#B9FC01] lg:px-2.5 lg:py-1.5 lg:text-[10px]">
                  <span>PC</span>
                  <span>⇄</span>
                  <span>WEB</span>
                  <span>⇄</span>
                  <span>ZAP</span>
                </div>
              </div>

              {/* 4. Card Inferior Direito: 15 Agentes Especialistas (Anel Radial) */}
              <div
                data-r2-reveal
                className="absolute bottom-2 right-0 w-36 rounded-2xl border border-white/10 bg-[#0D1017]/88 p-2.5 shadow-2xl backdrop-blur-xl lg:bottom-4 lg:w-48 lg:p-4 xl:w-56"
              >
                <div className="text-[11px] font-semibold text-white lg:text-xs">
                  Equipe Autônoma
                </div>
                <div className="mt-1.5 flex items-center justify-between">
                  <div>
                    <div className="font-display text-lg font-extrabold text-[#B9FC01] lg:text-2xl">
                      15 / 15
                    </div>
                    <div className="text-[10px] text-zinc-400 lg:text-[11px]">
                      Criativos Prontos
                    </div>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#B9FC01] font-mono text-[9px] font-bold text-white shadow-[0_0_15px_rgba(185,252,1,0.4)] lg:h-12 lg:w-12 lg:text-[11px]">
                    100%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Em Smartphone (< 768px), exibe os 4 widgets em grade 2x2 limpa abaixo do robô */}
        <div className="mt-4 grid grid-cols-2 gap-2.5 md:hidden">
          <div className="rounded-xl border border-white/10 bg-[#0D1017]/90 p-3">
            <div className="text-[11px] text-zinc-400">Fluxos Ativos</div>
            <div className="font-display text-lg font-extrabold text-[#B9FC01]">
              24/7 (+340%)
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0D1017]/90 p-3">
            <div className="text-[11px] text-zinc-400">Operador de PC</div>
            <div className="font-display text-lg font-extrabold text-white">
              Computer Use
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0D1017]/90 p-3">
            <div className="text-[11px] text-zinc-400">Integrações</div>
            <div className="font-display text-lg font-extrabold text-white">
              253+ Apps
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0D1017]/90 p-3">
            <div className="text-[11px] text-zinc-400">Equipe Autônoma</div>
            <div className="font-display text-lg font-extrabold text-[#B9FC01]">
              15 / 15 Prontos
            </div>
          </div>
        </div>

        {/* FILEIRA INFERIOR FULL-WIDTH DE 5 CARDS: 5 COLUNAS DESDE TABLET (md:grid-cols-5), EMPILHA SÓ NO SMARTPHONE */}
        <div
          data-r2-reveal
          className="mt-6 grid grid-cols-1 gap-3.5 md:grid-cols-5 lg:mt-8 lg:gap-4"
        >
          {[
            {
              icon: Monitor,
              title: "Operador do Seu PC",
              desc: "Abre aplicativos, controla mouse e executa tarefas na máquina.",
              active: true,
            },
            {
              icon: Globe,
              title: "Navegador Autônomo",
              desc: "Pesquisa sites reais, analisa mercado e aprende com você.",
            },
            {
              icon: Sparkles,
              title: "Estúdio & Vídeos",
              desc: "Cria carrosséis, posts com seu rosto, anúncios e Reels.",
            },
            {
              icon: Cpu,
              title: "10 IAs Grátis ou Sua",
              desc: "Rode grátis no OpenCode ou use seu ChatGPT, Claude e Gemini.",
            },
            {
              icon: Smartphone,
              title: "Comando no WhatsApp",
              desc: "Peça por áudio ou texto do celular e aprove com 1 clique.",
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`group flex flex-col justify-between rounded-2xl border p-4 transition lg:p-5 ${
                  card.active
                    ? "border-[#B9FC01]/50 bg-gradient-to-b from-[#B9FC01]/15 to-[#0D1017]"
                    : "border-white/10 bg-[#0B0E14]/90 hover:border-[#B9FC01]/40"
                }`}
              >
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#B9FC01]/35 bg-[#B9FC01]/10 text-[#B9FC01] lg:h-10 lg:w-10">
                    <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
                  </div>
                  <h3 className="mt-3 font-display text-sm font-bold text-white lg:mt-4 lg:text-base">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-zinc-400 lg:text-xs">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-3 flex justify-end lg:mt-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition group-hover:border-[#B9FC01] group-hover:text-[#B9FC01] lg:h-7 lg:w-7">
                    <ArrowRight className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
