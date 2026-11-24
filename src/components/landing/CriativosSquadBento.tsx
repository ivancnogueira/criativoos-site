import React, { useState } from "react";
import { Cpu, PackageCheck, Sparkles } from "lucide-react";
import {
  CRIATIVOS_15_ROSTER,
  type CriativoTier,
} from "../../data/criativosRoster";
import { LiveCriativoMascot } from "../mascots/LiveCriativoMascot";
import { BorderGlow } from "../fx/BorderGlow";

type FilterValue = "all" | CriativoTier;
type AvatarGalleryMode = "cyberpunk" | "mascotes";

const FILTERS: ReadonlyArray<{ id: FilterValue; label: string; count: string }> = [
  { id: "all", label: "Equipe Completa", count: "15" },
  { id: "base", label: "Criativos Base (Individual+)", count: "9" },
  { id: "bonus", label: "Especialistas Bônus (Agência 10+)", count: "3" },
  { id: "video", label: "Estúdio de Vídeo Reels (Ilimitado)", count: "3" },
];

export const CriativosSquadBento: React.FC = () => {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [visualMode, setVisualMode] = useState<AvatarGalleryMode>("cyberpunk");

  const filtered =
    filter === "all"
      ? CRIATIVOS_15_ROSTER
      : CRIATIVOS_15_ROSTER.filter((c) => c.tier === filter);

  return (
    <section
      id="equipe"
      className="border-t border-white/[0.06] bg-[#050608] py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              // 08 · OS 15 CRIATIVOS AUTÔNOMOS
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              15 Especialistas Únicos Que Passam a{" "}
              <span className="text-gradient-volt">Operar Seu Sistema</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Cada especialista tem seu próprio papel, ferramentas e skin
              exclusiva. Alterne entre a <strong>Galeria Avatares Cyberpunk</strong>{" "}
              e os <strong>Mascotes Vivos oO</strong> que acompanham seu cursor:
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 lg:col-span-5 lg:items-end">
            <div className="inline-flex rounded-full border border-white/15 bg-[#0B0E15] p-1 shadow-xl">
              <button
                type="button"
                onClick={() => setVisualMode("cyberpunk")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition ${
                  visualMode === "cyberpunk"
                    ? "bg-[#B9FC01] text-[#050608] shadow-[0_0_20px_rgba(185,252,1,0.3)]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Cpu className="h-3.5 w-3.5" />
                <span>Galeria Avatares Cyberpunk</span>
              </button>
              <button
                type="button"
                onClick={() => setVisualMode("mascotes")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition ${
                  visualMode === "mascotes"
                    ? "bg-[#B9FC01] text-[#050608] shadow-[0_0_20px_rgba(185,252,1,0.3)]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Mascotes Vivos oO</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filtros de Licença */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {FILTERS.map((f) => {
            const isActive = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold transition ${
                  isActive
                    ? "border-[#B9FC01] bg-[#B9FC01] text-[#050608]"
                    : "border-white/10 bg-[#0B0E15] text-slate-300 hover:border-white/30"
                }`}
              >
                <span>{f.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${
                    isActive
                      ? "bg-[#050608] text-[#B9FC01]"
                      : "bg-white/10 text-slate-200"
                  }`}
                >
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid Full-Width 5 Colunas em XL (3 fileiras perfeitas de 5) */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {filtered.map((spec) => (
            <BorderGlow
              key={spec.id}
              colors={[spec.color, "#B9FC01", "#38bdf8"]}
              backgroundColor="rgba(11, 14, 21, 0.9)"
              borderRadius={22}
              innerClassName="!p-5 justify-between h-full"
            >
              <div>
                {visualMode === "cyberpunk" ? (
                  <div className="relative flex h-48 items-end justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#050608] px-3 pt-4">
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-32 opacity-35 blur-2xl"
                      style={{
                        background: `radial-gradient(circle at 50% 82%, ${spec.color}, transparent 72%)`,
                      }}
                    />
                    <span
                      className={`absolute top-2.5 right-2.5 z-20 rounded-full px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase ${
                        spec.tier === "video"
                          ? "bg-rose-500/20 text-rose-300"
                          : spec.tier === "bonus"
                            ? "bg-purple-500/20 text-purple-300"
                            : "bg-[#B9FC01]/20 text-[#B9FC01]"
                      }`}
                    >
                      {spec.tierLabel}
                    </span>
                    <img
                      src={`/images/avatars/${spec.id}.png?v=3`}
                      alt={`Avatar Cyberpunk ${spec.nome}`}
                      loading="lazy"
                      decoding="async"
                      className="relative z-10 h-44 w-auto object-contain object-bottom transition-transform duration-300 hover:scale-105"
                      style={{
                        filter: `drop-shadow(0 0 16px ${spec.color}40)`,
                      }}
                    />
                    <div className="absolute bottom-2.5 left-2.5 z-20 rounded-xl border border-white/15 bg-[#050608]/90 p-1 backdrop-blur-md">
                      <LiveCriativoMascot
                        shape={spec.shape}
                        color={spec.color}
                        size={28}
                        working
                        label={spec.nome}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-between gap-3">
                    <LiveCriativoMascot
                      shape={spec.shape}
                      color={spec.color}
                      size={60}
                      working
                      label={spec.nome}
                    />
                    <span
                      className={`rounded-full px-2.5 py-1 font-mono text-[9px] font-bold uppercase ${
                        spec.tier === "video"
                          ? "bg-rose-500/15 text-rose-300"
                          : spec.tier === "bonus"
                            ? "bg-purple-500/15 text-purple-300"
                            : "bg-[#B9FC01]/15 text-[#B9FC01]"
                      }`}
                    >
                      {spec.tierLabel}
                    </span>
                  </div>
                )}

                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {spec.nome}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  {spec.papel}
                </p>
              </div>

              <div className="mt-4 flex items-start gap-2 border-t border-white/10 pt-3 text-[11px] font-semibold text-sky-300">
                <PackageCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B9FC01]" />
                <span>{spec.entregaExemplo}</span>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
};
