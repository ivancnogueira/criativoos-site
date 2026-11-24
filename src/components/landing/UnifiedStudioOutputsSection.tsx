import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CheckCircle2,
  ChevronsDown,
  Image as ImageIcon,
  Layers,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { LiveCriativoMascot } from "../mascots/LiveCriativoMascot";
import type { MascotShape } from "../../data/criativosRoster";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SatelliteSpec {
  title: string;
  desc: string;
  icon: React.FC<{ className?: string }>;
}

interface FormatSpec {
  key: string;
  tabLabel: string;
  badge: string;
  title: string;
  tagline: string;
  image: string;
  mascotName: string;
  mascotShape: MascotShape;
  mascotColor: string;
  satellites: [SatelliteSpec, SatelliteSpec, SatelliteSpec, SatelliteSpec];
}

const FORMATS: readonly FormatSpec[] = [
  {
    key: "carrossel",
    tabLabel: "Carrossel Narrativo",
    badge: "Campeão de Salvamentos",
    title: "Sequências de 4 a 10 Lâminas que Prendem a Atenção",
    tagline: "Continuidade visual e texto persuasivo slide a slide",
    image: "/images/criativo-ia-operacao-v1-dark.webp",
    mascotName: "Mestre de Carrosséis",
    mascotShape: "rounded_square",
    mascotColor: "#2dd4bf",
    satellites: [
      {
        title: "Narrativa Contínua",
        desc: "Harmonia de cores, luz e história do primeiro ao último slide",
        icon: Layers,
      },
      {
        title: "Mais Tempo de Tela",
        desc: "Estrutura pensada para fazer o seguidor arrastar até o final",
        icon: Zap,
      },
      {
        title: "Revisão no Celular",
        desc: "Você confere todas as lâminas antes de liberar a postagem",
        icon: ShieldCheck,
      },
      {
        title: "Enquadramento Perfeito",
        desc: "Margens calibradas sem cortar títulos ou elementos importantes",
        icon: Sparkles,
      },
    ],
  },
  {
    key: "feed",
    tabLabel: "Post com Seu Rosto",
    badge: "Autoridade Imediata",
    title: "Fotografia de Estúdio Usando Suas Próprias Fotos",
    tagline: "Seu rosto real com iluminação cinematográfica",
    image: "/images/01.webp",
    mascotName: "Especialista em Rosto Real",
    mascotShape: "blob",
    mascotColor: "#a855f7",
    satellites: [
      {
        title: "Luz de Estúdio",
        desc: "Acabamento digno de ensaio fotográfico profissional",
        icon: Sparkles,
      },
      {
        title: "Fidelidade ao Seu Rosto",
        desc: "Preserva seus traços reais sem aspecto artificial de plástico",
        icon: ShieldCheck,
      },
      {
        title: "Headline Magnética",
        desc: "Frases diretas na imagem que fazem o público parar de rolar",
        icon: Zap,
      },
      {
        title: "Legenda Pronta",
        desc: "Acompanha texto completo com chamada para ação",
        icon: CheckCircle2,
      },
    ],
  },
  {
    key: "stories",
    tabLabel: "Stories Prontos Para Links",
    badge: "Engajamento Diário",
    title: "Sequências de Stories com Espaço Para Caixinhas e Links",
    tagline: "Feitos sob medida para tela cheia no celular",
    image: "/images/criativo-ia-stories.webp",
    mascotName: "Designer de Stories",
    mascotShape: "cloud",
    mascotColor: "#eab308",
    satellites: [
      {
        title: "Topo Livre",
        desc: "Não esconde o texto atrás da sua foto de perfil do Instagram",
        icon: ShieldCheck,
      },
      {
        title: "Espaço para Stickers",
        desc: "Área planejada para enquetes, caixinhas e links de venda",
        icon: Zap,
      },
      {
        title: "Vertical Imersivo",
        desc: "Aproveita toda a tela do smartphone com leitura rápida",
        icon: Smartphone,
      },
      {
        title: "Gera Conversas no Direct",
        desc: "Roteiro pensado para estimular respostas dos seguidores",
        icon: Sparkles,
      },
    ],
  },
  {
    key: "anuncio",
    tabLabel: "Criativos de Anúncios",
    badge: "Foco em Conversão",
    title: "Criativos de Alta Conversão Para Suas Campanhas",
    tagline: "Variações prontas para atrair cliques qualificados",
    image: "/images/08.webp",
    mascotName: "Especialista em Anúncios",
    mascotShape: "triangle",
    mascotColor: "#f97316",
    satellites: [
      {
        title: "Contraste que Para o Dedo",
        desc: "Hierarquia visual projetada para destacar sua promessa",
        icon: Zap,
      },
      {
        title: "Testes Rápidos",
        desc: "Gere novos ângulos de anúncio em minutos quando quiser",
        icon: Layers,
      },
      {
        title: "Fiel à Sua Oferta",
        desc: "Conecta a dor do cliente direto ao benefício do produto",
        icon: CheckCircle2,
      },
      {
        title: "Pronto Para Tráfego",
        desc: "Proporção ideal para rodar no feed e nos posicionamentos",
        icon: Sparkles,
      },
    ],
  },
  {
    key: "editorial",
    tabLabel: "Reels & Calendário",
    badge: "Ritmo Consistente",
    title: "Roteiros Para Câmera ou Faceless + Estúdio de Reels",
    tagline: "Do gancho de 3 segundos ao vídeo vertical pronto",
    image: "/images/criativo-ia-operacao-v2-editorial.webp",
    mascotName: "Diretor de Vídeos Reels",
    mascotShape: "hex",
    mascotColor: "#ef4444",
    satellites: [
      {
        title: "Gancho nos 3s Iniciais",
        desc: "Estrutura de retenção para segurar atenção logo no começo",
        icon: Zap,
      },
      {
        title: "Legendas Estilo Karaokê",
        desc: "Sincronização dinâmica otimizada para Reels, TikTok e Shorts",
        icon: Sparkles,
      },
      {
        title: "Grade Visual Coesa",
        desc: "Enxergue a harmonia do seu feed antes de agendar a semana",
        icon: Layers,
      },
      {
        title: "Teleprompter Incluso",
        desc: "Opção pronta para quem grava falando direto para a câmera",
        icon: CheckCircle2,
      },
    ],
  },
];

const GALLERY_STRIP = [
  ...Array.from({ length: 9 }, (_, i) => ({
    id: `slide-${i}`,
    src: `/images/carrossel-slideshow/Camada ${i}.webp`,
    alt: `Exemplo real de carrossel CriativoOS ${i + 1}`,
  })),
  ...Array.from({ length: 9 }, (_, i) => ({
    id: `viral-${i}`,
    src: `/images/carrossel-viral/0${i + 1}.jpeg`,
    alt: `Exemplo real de post CriativoOS ${i + 1}`,
  })),
];

const DOUBLED_STRIP = [...GALLERY_STRIP, ...GALLERY_STRIP];

export const UnifiedStudioOutputsSection: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>("carrossel");
  const pinRef = useRef<HTMLDivElement | null>(null);
  const pinTriggerRef = useRef<ScrollTrigger | null>(null);
  const lastIdxRef = useRef<number>(0);

  const activeIdx = Math.max(
    0,
    FORMATS.findIndex((f) => f.key === activeKey)
  );
  const current = FORMATS[activeIdx] ?? FORMATS[0];

  useEffect(() => {
    const pinEl = pinRef.current;
    if (!pinEl) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const st = ScrollTrigger.create({
          trigger: pinEl,
          start: "top top",
          end: "+=1600",
          pin: true,
          scrub: 0.4,
          refreshPriority: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const nextIdx = Math.min(
              FORMATS.length - 1,
              Math.max(0, Math.floor(self.progress * FORMATS.length))
            );
            if (lastIdxRef.current !== nextIdx) {
              lastIdxRef.current = nextIdx;
              setActiveKey(FORMATS[nextIdx].key);
            }
          },
        });
        pinTriggerRef.current = st;

        return () => {
          pinTriggerRef.current = null;
          st.kill();
        };
      }
    );

    return () => {
      mm.revert();
    };
  }, []);

  const handleSelectFormat = (idx: number) => {
    const fmt = FORMATS[idx];
    if (!fmt) return;
    lastIdxRef.current = idx;
    setActiveKey(fmt.key);

    const st = pinTriggerRef.current;
    if (st) {
      const targetProgress = (idx + 0.5) / FORMATS.length;
      const targetScroll = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const handleSkipToNext = () => {
    const nextEl = document.getElementById("por-dentro");
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="saidas-reais"
      className="relative overflow-x-clip border-t border-white/[0.06] bg-[#050608]"
    >
      {/* (a) Palco Superior Compacto (<= 100dvh) com Pin GSAP no Desktop */}
      <div
        ref={pinRef}
        className="w-full px-4 py-8 sm:px-6 md:px-10 lg:py-10 xl:px-16"
      >
        <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              <ImageIcon className="h-3.5 w-3.5" />
              // 06 · PROVA VISUAL DO ESTÚDIO
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white sm:text-4xl xl:text-[2.65rem]">
              Saídas Reais Que{" "}
              <span className="text-[#B9FC01]">
                Saem Prontas Para Aprovar
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
              Alterne pelos 5 formatos principais abaixo e veja o padrão de
              acabamento gerado mantendo o seu rosto real, logotipo e
              identidade visual em cada entrega.
            </p>
          </div>
        </div>

        {/* Seletor Horizontal Full-Width dos Formatos */}
        <div className="mt-5 flex flex-wrap gap-2.5">
          {FORMATS.map((fmt, idx) => {
            const active = fmt.key === current.key;
            return (
              <button
                key={fmt.key}
                type="button"
                onClick={() => handleSelectFormat(idx)}
                className={`flex items-center gap-2 rounded-2xl border px-3.5 py-2 text-xs font-bold transition sm:px-4 sm:py-2.5 sm:text-sm ${
                  active
                    ? "border-[#B9FC01] bg-[#B9FC01] text-[#050608] shadow-[0_0_24px_rgba(185,252,1,0.3)]"
                    : "border-white/10 bg-[#0B0E15] text-slate-300 hover:border-white/30 hover:text-white"
                }`}
              >
                <LiveCriativoMascot
                  shape={fmt.mascotShape}
                  color={fmt.mascotColor}
                  size={24}
                  trackCursor={false}
                />
                <span>{fmt.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Vitrine Central Compacta */}
        <div className="mt-6 grid items-center gap-5 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-4">
            {current.satellites.slice(0, 2).map((sat) => {
              const Icon = sat.icon;
              return (
                <div
                  key={sat.title}
                  className="rounded-2xl border border-white/10 bg-[#0B0E15]/95 p-4 transition hover:border-[#B9FC01]/40 xl:p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B9FC01]/15 text-[#B9FC01]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-2.5 font-display text-base font-bold text-white xl:text-lg">
                    {sat.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:text-sm">
                    {sat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center lg:col-span-4">
            <div className="relative w-full max-w-[360px] overflow-hidden rounded-[2rem] border-2 border-[#B9FC01]/45 bg-[#0D1018] p-2 shadow-[0_22px_65px_rgba(0,0,0,0.8),0_0_40px_rgba(185,252,1,0.12)]">
              <img
                src={current.image}
                alt={current.title}
                className="mx-auto max-h-[340px] w-full rounded-[1.4rem] object-cover lg:max-h-[360px]"
              />
              <div className="absolute right-3.5 bottom-3.5 left-3.5 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#050608]/95 px-3.5 py-2 backdrop-blur-xl">
                <LiveCriativoMascot
                  shape={current.mascotShape}
                  color={current.mascotColor}
                  size={34}
                  working
                />
                <div className="min-w-0 text-left">
                  <div className="font-mono text-[10px] font-bold uppercase text-[#B9FC01]">
                    {current.mascotName} · {current.badge}
                  </div>
                  <div className="truncate font-display text-xs font-bold text-white">
                    {current.tagline}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-4">
            {current.satellites.slice(2, 4).map((sat) => {
              const Icon = sat.icon;
              return (
                <div
                  key={sat.title}
                  className="rounded-2xl border border-white/10 bg-[#0B0E15]/95 p-4 transition hover:border-[#B9FC01]/40 xl:p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B9FC01]/15 text-[#B9FC01]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-2.5 font-display text-base font-bold text-white xl:text-lg">
                    {sat.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:text-sm">
                    {sat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Barra de Etapa 1/5..5/5 + Botão Discreto Apenas Com Ícone Animado */}
        <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0B0E15]/90 px-4 py-2.5">
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
            <span className="shrink-0 font-mono text-xs font-extrabold text-[#B9FC01]">
              {activeIdx + 1}/{FORMATS.length}
            </span>

            <div className="flex flex-1 items-center gap-1.5 sm:max-w-xs">
              {FORMATS.map((fmt, idx) => {
                const isPastOrCurrent = idx <= activeIdx;
                return (
                  <button
                    key={fmt.key}
                    type="button"
                    onClick={() => handleSelectFormat(idx)}
                    aria-label={`Ver formato ${fmt.tabLabel}`}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      isPastOrCurrent
                        ? "bg-[#B9FC01] shadow-[0_0_10px_rgba(185,252,1,0.5)]"
                        : "bg-white/15 hover:bg-white/30"
                    }`}
                  />
                );
              })}
            </div>

            <span className="hidden truncate font-mono text-[11px] text-slate-300 sm:inline">
              {current.tabLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={handleSkipToNext}
            aria-label="Ir para a próxima dobra"
            title="Pular para a próxima dobra"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#B9FC01]/45 bg-[#B9FC01]/10 text-[#B9FC01] shadow-[0_0_18px_rgba(185,252,1,0.2)] transition hover:scale-105 hover:border-[#B9FC01] hover:bg-[#B9FC01]/20"
          >
            <ChevronsDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* (b) Faixa Full-Bleed Abaixo e Fora do Pin para Nunca Cortar o Palco */}
      <div className="overflow-hidden border-t border-white/[0.06] py-10 lg:py-12">
        <div className="marquee-track-left">
          {DOUBLED_STRIP.map((img, idx) => (
            <div
              key={`${img.id}-${idx}`}
              className="group relative h-[280px] w-[224px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0B0E15] shadow-2xl transition duration-300 hover:scale-[1.03] hover:border-[#B9FC01]/60 sm:h-[310px] sm:w-[248px]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
