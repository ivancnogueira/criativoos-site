import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowRight,
  Globe,
  Monitor,
  Play,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { LiveCriativoMascot } from "../mascots/LiveCriativoMascot";
import { CRIATIVOS_15_ROSTER, type MascotShape } from "../../data/criativosRoster";

interface OrbitSlot {
  idx: number;
  size: number;
  depthClass: string;
  posClass: string;
}

// 15 Mascotes Criativos com 3 planos de profundidade reais:
// - Primeiro plano (Grandes: 74px-84px, z-40, brilho forte)
// - Plano intermediário (Médios: 48px-58px)
// - Plano de fundo (Pequenos: 30px-36px, leve suavização/transparência para parecer mais longe)
const HERO_15_MASCOT_SLOTS: readonly OrbitSlot[] = [
  // LADO ESQUERDO (7 mascotes: alternando Grandes, Médios e Pequenos acima da caixa alta da headline)
  {
    idx: 0,
    size: 78,
    depthClass: "opacity-100 drop-shadow-[0_14px_26px_rgba(0,0,0,0.75)]",
    posClass: "top-[10%] left-[4%] lg:left-[5%] xl:left-[6%] [@media(max-height:760px)]:top-[6%] [@media(max-height:760px)]:scale-[0.82]",
  },
  {
    idx: 1,
    size: 52,
    depthClass: "opacity-95",
    posClass: "top-[20%] left-[14%] lg:left-[15%] xl:left-[16%] [@media(max-height:760px)]:top-[14%] [@media(max-height:760px)]:left-[14%]",
  },
  {
    idx: 2,
    size: 32,
    depthClass: "opacity-75 blur-[0.4px]",
    posClass: "top-[9%] left-[25%] lg:left-[26%] xl:left-[27%] [@media(max-height:760px)]:top-[8%]",
  },
  {
    idx: 3,
    size: 46,
    depthClass: "opacity-90",
    posClass: "top-[28%] left-[2%] lg:left-[3%] xl:left-[4%] [@media(max-height:760px)]:top-[18%] [@media(max-height:760px)]:left-[3%]",
  },
  {
    idx: 4,
    size: 74,
    depthClass: "opacity-100 drop-shadow-[0_14px_26px_rgba(0,0,0,0.75)]",
    posClass: "top-[18%] left-[28%] lg:left-[30%] xl:left-[32%] [@media(max-height:760px)]:top-[11%] [@media(max-height:760px)]:left-[29%] [@media(max-height:760px)]:scale-[0.85]",
  },
  {
    idx: 5,
    size: 36,
    depthClass: "opacity-80 blur-[0.3px]",
    posClass: "top-[29%] left-[19%] lg:left-[21%] xl:left-[22%] [@media(max-height:760px)]:top-[19%] [@media(max-height:760px)]:left-[21%]",
  },
  {
    idx: 6,
    size: 54,
    depthClass: "opacity-95",
    posClass: "top-[31%] left-[31%] lg:left-[33%] xl:left-[35%] [@media(max-height:760px)]:top-[20%] [@media(max-height:760px)]:left-[35%]",
  },

  // LADO DIREITO (8 mascotes: Grandes, Médios e Pequenos dando profundidade na direita inteira)
  {
    idx: 7,
    size: 34,
    depthClass: "opacity-75 blur-[0.4px]",
    posClass: "top-[10%] right-[22%] lg:right-[23%] xl:right-[24%]",
  },
  {
    idx: 8,
    size: 76,
    depthClass: "opacity-100 drop-shadow-[0_14px_26px_rgba(0,0,0,0.75)]",
    posClass: "top-[10%] right-[4%] lg:right-[6%] xl:right-[7%]",
  },
  {
    idx: 9,
    size: 56,
    depthClass: "opacity-95",
    posClass: "top-[24%] right-[13%] lg:right-[15%] xl:right-[17%]",
  },
  {
    idx: 10,
    size: 48,
    depthClass: "opacity-90",
    posClass: "top-[22%] right-[30%] lg:right-[32%] xl:right-[34%]",
  },
  {
    idx: 11,
    size: 82,
    depthClass: "opacity-100 drop-shadow-[0_16px_30px_rgba(0,0,0,0.8)]",
    posClass: "top-[37%] right-[21%] lg:right-[23%] xl:right-[26%]",
  },
  {
    idx: 12,
    size: 32,
    depthClass: "opacity-75 blur-[0.4px]",
    posClass: "top-[30%] right-[3%] lg:right-[4%] xl:right-[5%]",
  },
  {
    idx: 13,
    size: 54,
    depthClass: "opacity-95",
    posClass: "top-[44%] right-[11%] lg:right-[13%] xl:right-[14%]",
  },
  {
    idx: 14,
    size: 36,
    depthClass: "opacity-80 blur-[0.3px]",
    posClass: "top-[40%] right-[3%] lg:right-[4%] xl:right-[5%]",
  },
];

const MOBILE_ORBIT_SLOTS: readonly OrbitSlot[] = [
  // Flanco Esquerdo Mobile (5 avatares em 3 tamanhos de profundidade ao redor da cabeça, ombro e braço)
  {
    idx: 0,
    size: 52,
    depthClass: "opacity-100 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]",
    posClass: "top-[10%] left-[3%]",
  },
  {
    idx: 2,
    size: 28,
    depthClass: "opacity-75 blur-[0.3px]",
    posClass: "top-[4%] left-[21%]",
  },
  {
    idx: 1,
    size: 40,
    depthClass: "opacity-95",
    posClass: "top-[32%] left-[5%]",
  },
  {
    idx: 4,
    size: 32,
    depthClass: "opacity-85",
    posClass: "top-[54%] left-[2%]",
  },
  {
    idx: 6,
    size: 46,
    depthClass: "opacity-100 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]",
    posClass: "top-[74%] left-[6%]",
  },

  // Flanco Direito Mobile (5 avatares em 3 tamanhos de profundidade ao redor da cabeça, ombro e braço)
  {
    idx: 8,
    size: 50,
    depthClass: "opacity-100 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]",
    posClass: "top-[8%] right-[3%]",
  },
  {
    idx: 7,
    size: 28,
    depthClass: "opacity-75 blur-[0.3px]",
    posClass: "top-[18%] right-[20%]",
  },
  {
    idx: 9,
    size: 42,
    depthClass: "opacity-95",
    posClass: "top-[35%] right-[4%]",
  },
  {
    idx: 11,
    size: 54,
    depthClass: "opacity-100 drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]",
    posClass: "top-[58%] right-[3%]",
  },
  {
    idx: 13,
    size: 34,
    depthClass: "opacity-85",
    posClass: "top-[78%] right-[8%]",
  },
];

/**
 * HERO OFICIAL DE PRODUÇÃO: CRIATIVOOS CYBER FRONTIER
 * - Tipografia CRIATIVOOS com medição automática via getBBox() + viewBox exato (nunca trunca nas bordas)
 * - Caixa da Headline mais alta verticalmente (min-h-[380px..425px], md:col-span-4) mantendo a largura elegante
 * - 15 Mascotes Criativos em 3 planos de profundidade (Grandes 74-82px, Médios 48-56px, Pequenos 30-36px)
 * - Operadora Cyberpunk sem orelhas entrando no Header (z-30) atrás dos cards e ancorada atrás do Dock (z-40)
 * - Zero scrollbar vertical em Desktop/Notebook/Tablet (md:h-[100dvh])
 */
export const HeroConcept1Frontier: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const posterSvgRef = useRef<SVGSVGElement | null>(null);
  const posterTextRef = useRef<SVGTextElement | null>(null);
  const orbitLayerRef = useRef<HTMLDivElement | null>(null);

  // Mede o bbox real do texto CRIATIVOOS após o carregamento da fonte Anton para encaixar 100% sem truncar
  useEffect(() => {
    let mounted = true;
    const fitPosterViewBox = () => {
      if (!mounted) return;
      const svg = posterSvgRef.current;
      const txt = posterTextRef.current;
      if (!svg || !txt) return;
      try {
        const bbox = txt.getBBox();
        if (bbox.width > 0 && bbox.height > 0) {
          const padX = 6;
          const padY = 4;
          svg.setAttribute(
            "viewBox",
            `${(bbox.x - padX).toFixed(1)} ${(bbox.y - padY).toFixed(1)} ${(
              bbox.width +
              padX * 2
            ).toFixed(1)} ${(bbox.height + padY * 2).toFixed(1)}`
          );
        }
      } catch {
        // Fallback seguro ao viewBox padrão
      }
    };

    fitPosterViewBox();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitPosterViewBox);
    }
    const timer = window.setTimeout(fitPosterViewBox, 250);
    return () => {
      mounted = false;
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    let floaterTween: gsap.core.Tween | null = null;
    const ctx = gsap.context(() => {
      gsap.from("[data-f1-reveal]", {
        y: 16,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
        clearProps: "transform",
      });

      floaterTween = gsap.to("[data-orbit-floater]", {
        y: -11,
        rotation: 4,
        duration: 1.9,
        ease: "sine.inOut",
        force3D: true,
        stagger: {
          each: 0.16,
          repeat: -1,
          yoyo: true,
        },
      });
    }, el);

    const onScrollToggleFloat = () => {
      if (!floaterTween) return;
      if (window.scrollY > 36) {
        if (!floaterTween.paused()) floaterTween.pause();
      } else {
        if (floaterTween.paused()) floaterTween.resume();
      }
    };

    const onMove = (e: PointerEvent) => {
      if (window.scrollY > 18) return;
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;

      if (orbitLayerRef.current) {
        gsap.to(orbitLayerRef.current, {
          x: nx * 12,
          y: ny * 7,
          duration: 0.5,
          ease: "power2.out",
          force3D: true,
        });
      }
    };

    window.addEventListener("scroll", onScrollToggleFloat, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollToggleFloat);
      window.removeEventListener("pointermove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#050608] text-white select-none md:h-[100dvh] md:max-h-[100dvh]"
    >
      {/* Grade cyber sutil + feixes radiais volt e cobalt */}
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(185,252,1,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(185,252,1,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="pointer-events-none absolute top-[28%] left-1/2 h-[580px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B9FC01]/16 blur-[165px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[340px] w-[980px] -translate-x-1/2 bg-[#0031CC]/18 blur-[150px]" />

      {/* Topbar Minimalista Sem Menu */}
      <header className="relative z-20 shrink-0 w-full border-b border-white/10 bg-[#050608]/80 px-4 py-2.5 backdrop-blur-md sm:px-6 md:px-10 xl:px-16 xl:py-3">
        <div className="flex w-full items-center justify-between gap-4">
          <img
            src="/logo-criativoos-dark.svg"
            alt="CriativoOS"
            className="h-6 w-auto shrink-0 md:h-7"
          />

          <div className="flex shrink-0 items-center gap-4">
            <span className="hidden items-center gap-2 whitespace-nowrap font-mono text-[11px] text-zinc-400 sm:inline-flex">
              <span className="h-2 w-2 animate-ping rounded-full bg-[#B9FC01]" />
              SYSTEM ONLINE
            </span>
            <a
              href="#planos"
              className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap bg-[#B9FC01] px-4 py-2 font-mono text-xs font-extrabold uppercase tracking-wider text-[#050608] shadow-[0_0_25px_rgba(185,252,1,0.45)] transition hover:bg-[#d2ff4d] md:px-5"
              style={{
                clipPath:
                  "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
              }}
            >
              ATIVAR OS <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* PALCO PRINCIPAL FULL-WIDTH DIMENSIONADO PARA ZERO SCROLLBAR */}
      <div className="relative flex min-h-0 w-full flex-1 flex-col justify-between px-4 pt-1.5 pb-3 sm:px-6 md:px-10 md:pb-3.5 xl:px-16 xl:pb-4">
        {/* Linha de coordenadas HUD nos flancos */}
        <div
          data-f1-reveal
          className="relative z-20 shrink-0 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.14em] text-[#B9FC01] md:text-[9px] lg:text-[10px] lg:tracking-[0.18em] xl:text-[11px]"
        >
          <span className="truncate">
            ▸ SISTEMA OPERACIONAL AUTÔNOMO NO SEU COMPUTADOR
          </span>
          <span className="hidden shrink-0 whitespace-nowrap text-zinc-400 md:inline">
            DESKTOP · NAVEGADOR · 253+ APPS · ESTÚDIO · WHATSAPP
          </span>
        </div>

        {/* CAMADA 1 (FUNDO Z-10 FULL-WIDTH): "CRIATIVOOS" COM WIDTH AUTOMÁTICA ENTRE AS MARGENS (md:w-auto), SEM TRUNCAR O "S" */}
        <div
          data-f1-reveal
          className="pointer-events-none relative z-10 w-full shrink-0 md:absolute md:inset-x-10 md:top-7 md:w-auto xl:inset-x-16 xl:top-7"
        >
          <svg
            ref={posterSvgRef}
            viewBox="0 0 1600 360"
            preserveAspectRatio="none"
            className="block h-[21vh] w-full md:h-[33vh] lg:h-[36vh] xl:h-[38vh]"
            aria-label="CriativoOS"
          >
            <defs>
              <linearGradient
                id="criativoos-poster-grad"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="48%" stopColor="#D9F99D" />
                <stop offset="100%" stopColor="#B9FC01" stopOpacity="0.18" />
              </linearGradient>
            </defs>
            <text
              ref={posterTextRef}
              x="0"
              y="320"
              fill="url(#criativoos-poster-grad)"
              style={{
                fontFamily: '"Anton", "Barlow Condensed", sans-serif',
                fontWeight: 400,
                fontSize: "390px",
                letterSpacing: "0.01em",
              }}
            >
              CRIATIVOOS
            </text>
          </svg>
        </div>

        {/* 15 MASCOTES CRIATIVOS EM 3 PLANOS DE PROFUNDIDADE (GRANDES, MÉDIOS E PEQUENOS) */}
        <div
          ref={orbitLayerRef}
          data-hero-orbit-layer
          className="pointer-events-none absolute inset-0 z-40 hidden md:block"
        >
          {HERO_15_MASCOT_SLOTS.map((slot) => {
            const spec = CRIATIVOS_15_ROSTER[slot.idx];
            if (!spec) return null;
            return (
              <div
                key={spec.id}
                data-orbit-floater
                data-hero-slot={slot.idx}
                data-hero-size={slot.size}
                className={`pointer-events-auto group absolute flex flex-col items-center ${slot.posClass} ${slot.depthClass}`}
              >
                <LiveCriativoMascot
                  shape={spec.shape as MascotShape}
                  color={spec.color}
                  size={slot.size}
                  label={spec.nome}
                  trackCursor={false}
                  working
                />
                <span className="mt-1 whitespace-nowrap rounded-full border border-[#B9FC01]/35 bg-[#06090C]/95 px-2 py-0.5 font-mono text-[9px] font-bold text-[#B9FC01] opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                  {spec.nome}
                </span>
              </div>
            );
          })}
        </div>

        {/* CAMADA SMARTPHONE (< 768px): PERSONAGEM SOBREPONDO "CRIATIVOOS" AO FUNDO + AVATARES EM VOLTA DELA + BASE ATRÁS DO CARD */}
        <div className="pointer-events-none relative z-30 -mt-[20vh] -mb-4 flex w-full flex-col items-center md:hidden">
          <div className="relative flex h-[420px] w-full items-end justify-center">
            {/* Avatares Criativos distribuídos em órbita ao redor da Operadora no Mobile */}
            {MOBILE_ORBIT_SLOTS.map((slot) => {
              const spec = CRIATIVOS_15_ROSTER[slot.idx];
              if (!spec) return null;
              return (
                <div
                  key={spec.id}
                  data-orbit-floater
                  className={`pointer-events-auto absolute z-40 ${slot.posClass} ${slot.depthClass}`}
                >
                  <LiveCriativoMascot
                    shape={spec.shape as MascotShape}
                    color={spec.color}
                    size={slot.size}
                    label={spec.nome}
                    working
                  />
                </div>
              );
            })}

            <img
              src="/images/hero-cyber-operator-v2.png"
              alt="Operadora Cyberpunk CriativoOS"
              className="relative z-30 h-[410px] w-auto object-contain object-bottom drop-shadow-[0_18px_45px_rgba(0,0,0,0.95)]"
            />
          </div>
        </div>

        {/* CAMADA 3 (Z-40 NA FRENTE DO CORPO DA PERSONAGEM): CAIXA DE HEADLINE MAIS ALTA (MD:COL-SPAN-4) + TELEMETRIA + DOCK */}
        <div className="relative z-40 mt-auto shrink-0 flex flex-col gap-2.5 lg:gap-3.5">
          <div className="grid grid-cols-1 items-end gap-3.5 md:grid-cols-12 md:gap-4">
            {/* CARD ESQUERDO COM LARGURA ORIGINAL (4 COLS) E ALTURA AUMENTADA */}
            <div
              data-f1-reveal
              className="flex flex-col justify-between rounded-2xl border border-white/15 bg-[#07090E]/95 p-5 shadow-[0_24px_65px_rgba(0,0,0,0.92)] backdrop-blur-sm md:col-span-4 md:min-h-[340px] lg:min-h-[385px] lg:p-6 xl:min-h-[420px] xl:p-7 [@media(max-height:760px)]:min-h-[250px] [@media(max-height:760px)]:p-3.5"
            >
              <div className="space-y-3 xl:space-y-4 [@media(max-height:760px)]:space-y-1.5">
                <div className="font-mono text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#B9FC01] xl:text-xs">
                  ● MUITO ALÉM DE UMA AGÊNCIA DE CONTEÚDO
                </div>
                <h1 className="font-display text-2xl font-black leading-[1.03] tracking-tight text-white md:text-[1.45rem] lg:text-[2rem] xl:text-[2.35rem] [@media(max-height:760px)]:text-[1.65rem]">
                  Seu Computador Operado Por{" "}
                  <span className="text-[#B9FC01]">
                    15 Criativos Autônomos.
                  </span>
                </h1>
                <p className="text-xs leading-relaxed text-zinc-200 lg:text-sm xl:text-[15px] [@media(max-height:760px)]:text-xs">
                  O <strong className="text-white">CriativoOS</strong> abre e
                  controla programas no seu PC, navega na internet sozinho,
                  conecta{" "}
                  <strong className="text-white">253+ aplicativos</strong>, cria
                  seus posts, carrosséis e vídeos com o seu rosto e obedece
                  ordens pelo <strong className="text-white">WhatsApp</strong>.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2.5 pt-2 lg:gap-3 [@media(max-height:760px)]:mt-2.5">
                <a
                  href="#planos"
                  className="inline-flex items-center gap-2 bg-[#B9FC01] px-5 py-2.5 font-mono text-xs font-black uppercase tracking-wider text-[#050608] shadow-[0_0_30px_rgba(185,252,1,0.45)] transition hover:bg-[#d2ff4d] lg:px-6 lg:py-3"
                  style={{
                    clipPath:
                      "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                  }}
                >
                  ASSUMIR O COMANDO <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#como-funciona"
                  className="inline-flex items-center gap-2 border border-white/20 bg-white/[0.04] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition hover:border-[#B9FC01] lg:px-5 lg:py-3"
                >
                  <Play className="h-3.5 w-3.5 text-[#B9FC01]" /> VER EM AÇÃO
                </a>
              </div>
            </div>

            {/* Vão Central Livre Amplo (4 cols para Operadora Cyberpunk brilhar com folga no centro) */}
            <div className="hidden md:col-span-4 md:block" />

            {/* CARD DIREITO (4 COLS) */}
            <div
              data-f1-reveal
              className="rounded-2xl border border-[#B9FC01]/35 bg-[#070A0B]/95 p-3.5 shadow-[0_24px_60px_rgba(0,0,0,0.88)] backdrop-blur-sm md:col-span-4 lg:p-4 xl:p-5"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5 font-mono text-[10px] text-[#B9FC01]">
                <span>// TELEMETRIA DO SISTEMA</span>
                <span>CPU &amp; REDE ATIVOS</span>
              </div>

              <div className="mt-2 space-y-1.5 font-mono text-[11px] xl:text-xs">
                <div className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-1.5">
                  <span className="text-zinc-300">Operador de Desktop</span>
                  <span className="font-bold text-[#B9FC01]">
                    MOUSE &amp; APPS
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-1.5">
                  <span className="text-zinc-300">Navegador &amp; Fluxos</span>
                  <span className="font-bold text-[#B9FC01]">
                    253+ CONECTORES
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-1.5">
                  <span className="text-zinc-300">
                    Estúdio Design &amp; Vídeo
                  </span>
                  <span className="font-bold text-[#B9FC01]">
                    15 CRIATIVOS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BARRA DOCK INFERIOR CHANFRADA FULL-WIDTH COMPACTA */}
          <div
            data-f1-reveal
            className="grid grid-cols-1 gap-2.5 rounded-2xl border border-[#B9FC01]/40 bg-[#060908]/95 p-3 shadow-[0_-15px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(185,252,1,0.08)] backdrop-blur-sm md:grid-cols-4 lg:gap-4 lg:p-3.5"
          >
            {[
              {
                icon: Monitor,
                metric: "OPERADOR DE PC",
                title: "Operador de Programas",
                desc: "Abre aplicativos, move o mouse e organiza arquivos no seu PC",
              },
              {
                icon: Globe,
                metric: "+253 APPS & WEB",
                title: "Navegador & Conectores",
                desc: "Pesquisa sites reais e integra Notion, Drive, CRM e mais",
              },
              {
                icon: Sparkles,
                metric: "15 CRIATIVOS",
                title: "Estúdio Visual & Reels",
                desc: "Carrosséis, posts com seu rosto, anúncios e vídeos editados",
              },
              {
                icon: Smartphone,
                metric: "24/7 NO BOLSO",
                title: "Controle via WhatsApp",
                desc: "Dê ordens por áudio ou texto do celular e aprove com 1 clique",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.metric}
                  className="flex items-start gap-2.5 border-white/10 md:border-r md:pr-3 last:border-none lg:gap-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#B9FC01]/40 bg-[#B9FC01]/10 text-[#B9FC01] lg:h-10 lg:w-10">
                    <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] font-extrabold text-[#B9FC01] lg:text-[11px]">
                      {item.metric}
                    </div>
                    <div className="font-display text-xs font-bold text-white lg:text-sm">
                      {item.title}
                    </div>
                    <div className="mt-0.5 text-[11px] leading-snug text-zinc-400">
                      {item.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CAMADA DA PERSONAGEM GIGANTE EM Z-30: TOPO DA CABEÇA NO HEADER, CINTURA ATRÁS DO DOCK */}
      <div className="pointer-events-none absolute inset-x-0 top-0 bottom-[14px] z-30 hidden items-end justify-center overflow-hidden md:flex xl:bottom-[18px]">
        <img
          src="/images/hero-cyber-operator-v2.png"
          alt="Operadora Cyberpunk CriativoOS"
          className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_22px_65px_rgba(0,0,0,0.95)]"
        />
      </div>
    </section>
  );
};
