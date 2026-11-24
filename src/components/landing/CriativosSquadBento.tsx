import React, { useState } from "react";
import {
  ArrowLeftRight,
  Cpu,
  LayoutGrid,
  PackageCheck,
  Sparkles,
} from "lucide-react";
import {
  CRIATIVOS_15_ROSTER,
  type CriativoTier,
} from "../../data/criativosRoster";
import { LiveCriativoMascot } from "../mascots/LiveCriativoMascot";
import { BorderGlow } from "../fx/BorderGlow";

type FilterValue = "all" | CriativoTier;
type AvatarGalleryMode = "intercalado" | "cyberpunk" | "mascotes";

const FILTERS: ReadonlyArray<{ id: FilterValue; label: string; count: string }> = [
  { id: "all", label: "Equipe Completa", count: "15" },
  { id: "base", label: "Criativos Base (Individual+)", count: "9" },
  { id: "bonus", label: "Especialistas Bônus (Agência 10+)", count: "3" },
  { id: "video", label: "Estúdio de Vídeo Reels (Ilimitado)", count: "3" },
];

export const CriativosSquadBento: React.FC = () => {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [visualMode, setVisualMode] = useState<AvatarGalleryMode>("intercalado");
  const [swappedIds, setSwappedIds] = useState<Record<string, boolean>>({});

  const filtered =
    filter === "all"
      ? CRIATIVOS_15_ROSTER
      : CRIATIVOS_15_ROSTER.filter((c) => c.tier === filter);

  const handleGlobalModeChange = (nextMode: AvatarGalleryMode) => {
    setVisualMode(nextMode);
    setSwappedIds({});
  };

  const toggleCardSwap = (id: string) => {
    setSwappedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="equipe"
      className="border-t border-white/[0.06] bg-[#050608] py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              // 08 · OS 15 CRIATIVOS AUTÔNOMOS
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              15 Especialistas Únicos Que Passam a{" "}
              <span className="text-[#B9FC01]">Operar Seu Sistema</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Cada especialista cuida de uma parte do seu conteúdo e da sua
              rotina. Clique no cantinho de qualquer card para trocar o{" "}
              <strong className="text-white">Avatar Cyberpunk</strong> pelo{" "}
              <strong className="text-white">Mascote Vivo oO</strong> ou mude a
              galeria inteira:
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 lg:col-span-6 lg:items-end">
            <div className="inline-flex flex-wrap gap-1 rounded-2xl border border-white/15 bg-[#0B0E15] p-1 shadow-xl sm:rounded-full">
              <button
                type="button"
                onClick={() => handleGlobalModeChange("intercalado")}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold transition ${
                  visualMode === "intercalado"
                    ? "bg-[#B9FC01] text-[#050608] shadow-[0_0_20px_rgba(185,252,1,0.3)]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                <span>Intercalado</span>
              </button>
              <button
                type="button"
                onClick={() => handleGlobalModeChange("cyberpunk")}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold transition ${
                  visualMode === "cyberpunk"
                    ? "bg-[#B9FC01] text-[#050608] shadow-[0_0_20px_rgba(185,252,1,0.3)]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Cpu className="h-3.5 w-3.5" />
                <span>Todos Cyberpunk</span>
              </button>
              <button
                type="button"
                onClick={() => handleGlobalModeChange("mascotes")}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold transition ${
                  visualMode === "mascotes"
                    ? "bg-[#B9FC01] text-[#050608] shadow-[0_0_20px_rgba(185,252,1,0.3)]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Todos Mascotes oO</span>
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

        {/* Grid Full-Width 5 Colunas em XL (altura simétrica h-48 em todos os cards) */}
        <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {filtered.map((spec, idx) => {
            const baseIsCyberpunk =
              visualMode === "intercalado"
                ? idx % 2 === 0
                : visualMode === "cyberpunk";
            const isSwapped = Boolean(swappedIds[spec.id]);
            const showCyberpunkMain = isSwapped ? !baseIsCyberpunk : baseIsCyberpunk;

            return (
              <BorderGlow
                key={spec.id}
                className="h-full"
                colors={[spec.color, "#B9FC01", "#38bdf8"]}
                backgroundColor="rgba(11, 14, 21, 0.9)"
                borderRadius={22}
                innerClassName="!p-5 justify-between h-full"
              >
                <div>
                  {/* Caixa fixa h-48 garantindo alinhamento 100% simétrico no grid */}
                  <div className="group/stage relative flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#050608] px-3 pt-4">
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-32 opacity-35 blur-2xl transition-all duration-300"
                      style={{
                        background: `radial-gradient(circle at 50% ${
                          showCyberpunkMain ? "82%" : "55%"
                        }, ${spec.color}, transparent 72%)`,
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

                    {/* Avatar Cyberpunk Grande */}
                    <div
                      className={`absolute inset-x-0 bottom-0 flex justify-center transition-all duration-300 ${
                        showCyberpunkMain
                          ? "z-10 scale-100 opacity-100"
                          : "pointer-events-none z-0 scale-90 opacity-0"
                      }`}
                    >
                      <img
                        src={`/images/avatars/${spec.id}.png?v=3`}
                        alt={`Avatar Cyberpunk ${spec.nome}`}
                        loading="lazy"
                        decoding="async"
                        className="h-44 w-auto object-contain object-bottom transition-transform duration-300 group-hover/stage:scale-105"
                        style={{
                          filter: `drop-shadow(0 0 16px ${spec.color}40)`,
                        }}
                      />
                    </div>

                    {/* Mascote oO Grande Centralizado */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                        !showCyberpunkMain
                          ? "z-10 scale-100 opacity-100"
                          : "pointer-events-none z-0 scale-90 opacity-0"
                      }`}
                    >
                      <div
                        className="pointer-events-none absolute h-28 w-28 rounded-full opacity-35 blur-2xl"
                        style={{
                          background: `radial-gradient(circle, ${spec.color} 0%, transparent 72%)`,
                        }}
                      />
                      <LiveCriativoMascot
                        shape={spec.shape}
                        color={spec.color}
                        size={110}
                        trackCursor={false}
                        working={false}
                        label={spec.nome}
                      />
                    </div>

                    {/* Botão Clicável no Canto Inferior Esquerdo Para Troca Individual */}
                    <button
                      type="button"
                      onClick={() => toggleCardSwap(spec.id)}
                      aria-label={
                        showCyberpunkMain
                          ? `Mostrar mascote oO em destaque para ${spec.nome}`
                          : `Mostrar avatar cyberpunk em destaque para ${spec.nome}`
                      }
                      title="Clique para trocar entre Avatar e Mascote oO"
                      className="group/swap absolute bottom-2.5 left-2.5 z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-[#050608]/95 p-1 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#B9FC01]/70"
                    >
                      {showCyberpunkMain ? (
                        <LiveCriativoMascot
                          shape={spec.shape}
                          color={spec.color}
                          size={30}
                          trackCursor={false}
                          working={false}
                          animated={false}
                          lightweight
                          label={`Mini mascote ${spec.nome}`}
                        />
                      ) : (
                        <img
                          src={`/images/avatars/${spec.id}.png?v=3`}
                          alt={`Mini avatar ${spec.nome}`}
                          loading="lazy"
                          decoding="async"
                          className="h-11 w-11 rounded-full object-cover object-top"
                        />
                      )}
                      <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#050608] bg-[#B9FC01] text-[#050608] shadow transition-transform duration-300 group-hover/swap:rotate-180">
                        <ArrowLeftRight className="h-2.5 w-2.5 stroke-[2.5]" />
                      </span>
                    </button>
                  </div>

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
            );
          })}
        </div>
      </div>
    </section>
  );
};
