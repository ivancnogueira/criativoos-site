import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CRIATIVOS_15_ROSTER } from "../../data/criativosRoster";
import { LiveCriativoMascot } from "./LiveCriativoMascot";

gsap.registerPlugin(ScrollTrigger);

interface CriativosChorusStageProps {
  compact?: boolean;
}

export const CriativosChorusStage: React.FC<CriativosChorusStageProps> = ({
  compact = false,
}) => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [selectedId, setSelectedId] = useState<string>("estrategista");

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;

    const ctx = gsap.context(() => {
      const nodes = el.querySelectorAll("[data-chorus-mascot]");
      gsap.fromTo(
        nodes,
        { opacity: 0, y: 26, scale: 0.72 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.72,
          stagger: { each: 0.045, from: "center" },
          ease: "back.out(1.6)",
        }
      );
    }, el);

    return () => ctx.revert();
  }, [compact]);

  const list = compact ? CRIATIVOS_15_ROSTER.slice(0, 9) : CRIATIVOS_15_ROSTER;
  const activeSpec =
    CRIATIVOS_15_ROSTER.find((c) => c.id === selectedId) ?? CRIATIVOS_15_ROSTER[0];

  return (
    <div ref={stageRef} className="w-full">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 py-2">
        {list.map((spec, idx) => {
          const isSelected = spec.id === selectedId;
          const distFromCenter = Math.abs(idx - Math.floor(list.length / 2));
          const baseSize = compact
            ? Math.max(40, 62 - distFromCenter * 4)
            : Math.max(42, 68 - distFromCenter * 3);

          return (
            <button
              key={spec.id}
              type="button"
              data-chorus-mascot
              onMouseEnter={() => setSelectedId(spec.id)}
              onClick={() => setSelectedId(spec.id)}
              title={`${spec.nome}: ${spec.papel}`}
              className={`group relative rounded-2xl p-1.5 transition-all duration-200 ${
                isSelected
                  ? "bg-white/[0.08] ring-1 ring-[#B9FC01]/70 scale-105"
                  : "hover:bg-white/[0.04]"
              }`}
            >
              <LiveCriativoMascot
                shape={spec.shape}
                color={spec.color}
                size={baseSize}
                label={spec.nome}
                working={isSelected}
              />
            </button>
          );
        })}
      </div>

      <div className="mx-auto mt-3 max-w-xl rounded-2xl border border-white/10 bg-[#141416]/90 px-4 py-3 text-center backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: activeSpec.color }}
          />
          <span className="font-mono uppercase tracking-wider text-[#B9FC01]">
            {activeSpec.tierLabel}
          </span>
          <span className="text-zinc-500">•</span>
          <span className="font-semibold text-white">{activeSpec.nome}</span>
        </div>
        <p className="mt-1 text-xs text-zinc-300">
          {activeSpec.papel} ({activeSpec.entregaExemplo})
        </p>
      </div>
    </div>
  );
};
