import React, { useState } from "react";
import {
  CheckCircle2,
  Layers,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { LiveCriativoMascot } from "../mascots/LiveCriativoMascot";
import type { MascotShape } from "../../data/criativosRoster";

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
    mascotName: "Designer de Carrosséis",
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
    mascotName: "Consistência Facial",
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
    tabLabel: "Stories Verticais",
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
        desc: "Área planejada para você colocar enquetes, caixinhas e links",
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
    badge: "Foco em Vendas",
    title: "Criativos de Alta Conversão Para Suas Campanhas",
    tagline: "Variações prontas para atrair cliques qualificados",
    image: "/images/08.webp",
    mascotName: "Especialista em Ads",
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
        desc: "Conecta a dor do cliente direto ao benefício do seu produto",
        icon: CheckCircle2,
      },
      {
        title: "Pronto Para Tráfego",
        desc: "Proporção ideal para rodar no feed e nos posicionamentos",
        icon: Sparkles,
      },
    ],
  },
];

export const FormatsShowcaseSection: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>("carrossel");
  const current =
    FORMATS.find((f) => f.key === activeKey) ?? FORMATS[0];

  return (
    <section
      id="formatos"
      className="border-t border-white/[0.06] bg-[#07090D] py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
            Domínio de Todos os Formatos
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-5xl">
            Veja o Que Sua Equipe Entrega Para{" "}
            <span className="text-gradient-volt">Cada Canal do Instagram</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Alterne entre os formatos abaixo para inspecionar o padrão de
            acabamento que o CriativoOS gera no seu computador:
          </p>
        </div>

        {/* Abas dos Formatos */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {FORMATS.map((fmt) => {
            const active = fmt.key === activeKey;
            return (
              <button
                key={fmt.key}
                type="button"
                onClick={() => setActiveKey(fmt.key)}
                className={`flex items-center gap-2.5 rounded-2xl border px-5 py-3 text-xs font-bold transition sm:text-sm ${
                  active
                    ? "border-[#B9FC01] bg-[#B9FC01] text-[#07080C] shadow-[0_0_30px_rgba(185,252,1,0.3)]"
                    : "border-white/10 bg-[#0B0E15] text-slate-300 hover:border-white/30 hover:text-white"
                }`}
              >
                <LiveCriativoMascot
                  shape={fmt.mascotShape}
                  color={fmt.mascotColor}
                  size={26}
                  trackCursor={false}
                />
                <span>{fmt.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Vitrine Central com Satélites Glassmorphism */}
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-12">
          {/* Satélites da Esquerda */}
          <div className="space-y-4 lg:col-span-4">
            {current.satellites.slice(0, 2).map((sat) => {
              const Icon = sat.icon;
              return (
                <div
                  key={sat.title}
                  className="rounded-3xl border border-white/10 bg-[#0B0E15]/90 p-6 shadow-xl backdrop-blur-lg transition hover:border-[#B9FC01]/40"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B9FC01]/15 text-[#B9FC01]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3.5 font-display text-lg font-bold text-white">
                    {sat.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    {sat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Criativo Real no Centro + Avatar Especialista */}
          <div className="flex flex-col items-center lg:col-span-4">
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-[#B9FC01]/45 bg-[#0D1018] p-2.5 shadow-[0_25px_75px_rgba(0,0,0,0.8),0_0_45px_rgba(185,252,1,0.14)]">
              <img
                src={current.image}
                alt={current.title}
                className="max-h-[430px] w-auto rounded-[1.5rem] object-cover"
              />

              {/* Selo do Criativo Especialista no canto da arte */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#080A10]/90 px-4 py-2.5 backdrop-blur-xl">
                <LiveCriativoMascot
                  shape={current.mascotShape}
                  color={current.mascotColor}
                  size={40}
                  working
                />
                <div className="min-w-0 text-left">
                  <div className="font-mono text-[10px] font-bold uppercase text-[#B9FC01]">
                    {current.mascotName}
                  </div>
                  <div className="truncate font-display text-xs font-bold text-white">
                    {current.tagline}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Satélites da Direita */}
          <div className="space-y-4 lg:col-span-4">
            {current.satellites.slice(2, 4).map((sat) => {
              const Icon = sat.icon;
              return (
                <div
                  key={sat.title}
                  className="rounded-3xl border border-white/10 bg-[#0B0E15]/90 p-6 shadow-xl backdrop-blur-lg transition hover:border-[#B9FC01]/40"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B9FC01]/15 text-[#B9FC01]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3.5 font-display text-lg font-bold text-white">
                    {sat.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    {sat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
