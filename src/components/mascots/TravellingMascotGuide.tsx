import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiveCriativoMascot } from "../mascots/LiveCriativoMascot";
import type { MascotShape } from "../../data/criativosRoster";

gsap.registerPlugin(ScrollTrigger);

interface SectionStop {
  sectionId: string;
  name: string;
  shape: MascotShape;
  color: string;
  side: "left" | "right";
  message: string;
  nextSectionId: string;
}

const STOPS: readonly SectionStop[] = [
  {
    sectionId: "hero",
    name: "Estrategista OS",
    shape: "hex",
    color: "#31cf76",
    side: "right",
    message: "Role a página! Eu navego com você mostrando da infraestrutura VPS aos 15 Criativos.",
    nextSectionId: "diferenciais",
  },
  {
    sectionId: "diferenciais",
    name: "Copywriter OS",
    shape: "blob",
    color: "#38bdf8",
    side: "left",
    message: "Veja quanto custa manter 10 abas picotadas contra rodar seu próprio Sistema Operacional.",
    nextSectionId: "motores-os",
  },
  {
    sectionId: "motores-os",
    name: "Operador Desktop",
    shape: "diamond",
    color: "#2dd4bf",
    side: "right",
    message: "Computer Use, Browser Chromium CDP, 253+ Apps e Cofre AES-256-GCM em ação!",
    nextSectionId: "infra-vps",
  },
  {
    sectionId: "infra-vps",
    name: "Arquiteto VPS",
    shape: "octo",
    color: "#B9FC01",
    side: "left",
    message: "Instale no PC em 1 minuto ou conecte seu Servidor VPS / Docker para rodar 24/7.",
    nextSectionId: "para-quem-e",
  },
  {
    sectionId: "para-quem-e",
    name: "Diretor de Agência",
    shape: "rounded_square",
    color: "#d6b98c",
    side: "right",
    message: "Workspaces isolados por cliente: 1 contrato de social media já paga o ano todo!",
    nextSectionId: "saidas-reais",
  },
  {
    sectionId: "saidas-reais",
    name: "Consistência Facial",
    shape: "blob",
    color: "#a855f7",
    side: "left",
    message: "Confira carrosséis, feed com rosto real, stories e anúncios gerados no estúdio.",
    nextSectionId: "por-dentro",
  },
  {
    sectionId: "por-dentro",
    name: "Arquiteto Cockpit",
    shape: "diamond",
    color: "#f27ba5",
    side: "right",
    message: "Explore por dentro: Chat, Computer Use & VPS, Grafos 253+ Apps e Estúdio Reels.",
    nextSectionId: "equipe",
  },
  {
    sectionId: "equipe",
    name: "Galeria Cyberpunk",
    shape: "hex",
    color: "#ef4444",
    side: "left",
    message: "São 15 Avatares Cyberpunk exclusivos! Alterne também para nossos Mascotes oO.",
    nextSectionId: "whatsapp",
  },
  {
    sectionId: "whatsapp",
    name: "Publicador 24/7",
    shape: "pill",
    color: "#31cf76",
    side: "right",
    message: "Comande PC ou VPS pelo WhatsApp e responda 1 para aprovar qualquer publicação.",
    nextSectionId: "como-funciona",
  },
  {
    sectionId: "como-funciona",
    name: "Assistente Setup",
    shape: "triangle",
    color: "#f97316",
    side: "left",
    message: "4 passos fáceis e 10 modelos grátis no OpenCode para não gastar extra com API!",
    nextSectionId: "planos",
  },
  {
    sectionId: "planos",
    name: "Líder da Equipe",
    shape: "octo",
    color: "#B9FC01",
    side: "right",
    message: "Escolha sua licença oficial com 7 dias de garantia e escala imediata!",
    nextSectionId: "faq",
  },
];

/**
 * Avatar vivo que navega fisicamente pela viewport acompanhando o scroll via GSAP ScrollTrigger.
 */
export const TravellingMascotGuide: React.FC = () => {
  const [activeStopIdx, setActiveStopIdx] = useState(0);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = Math.max(360, window.innerHeight * 0.65);
      setHasScrolledPastHero(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const triggers: ScrollTrigger[] = [];

    STOPS.forEach((stop, idx) => {
      const el = document.getElementById(stop.sectionId);
      if (!el) return;

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 55%",
        end: "bottom 45%",
        onEnter: () => setActiveStopIdx(idx),
        onEnterBack: () => setActiveStopIdx(idx),
      });
      triggers.push(st);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  const current = STOPS[activeStopIdx] ?? STOPS[0];
  const isLeft = current.side === "left";

  const handleJumpNext = () => {
    const target = document.getElementById(current.nextSectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!hasScrolledPastHero) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-5 z-50 hidden transition-all duration-700 ease-out md:flex items-center gap-3 ${
        isLeft ? "left-6 flex-row" : "right-6 flex-row-reverse"
      }`}
    >
      <button
        type="button"
        onClick={handleJumpNext}
        title="Clique para ir à próxima etapa com o Criativo"
        className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#B9FC01]/45 bg-[#0C0F17]/90 p-1.5 shadow-[0_12px_35px_rgba(0,0,0,0.7),0_0_25px_rgba(185,252,1,0.22)] backdrop-blur-xl transition-transform hover:scale-110"
      >
        <LiveCriativoMascot
          shape={current.shape}
          color={current.color}
          size={52}
          working
          label={current.name}
        />
      </button>

      <div
        onClick={handleJumpNext}
        className="max-w-[250px] cursor-pointer rounded-2xl border border-white/12 bg-[#0D1018]/95 px-4 py-2.5 text-left shadow-2xl backdrop-blur-xl transition hover:border-[#B9FC01]/50"
      >
        <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#B9FC01]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B9FC01]" />
          <span>{current.name} · Guia Ao Vivo</span>
        </div>
        <p className="mt-0.5 text-xs leading-snug text-slate-200">
          {current.message}
        </p>
      </div>
    </div>
  );
};
