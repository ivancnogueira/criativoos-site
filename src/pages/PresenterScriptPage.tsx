import React, { useEffect, useState } from "react";
import { ArrowLeft, MessageSquare, Pause, Play, RotateCcw } from "lucide-react";
import { KEYNOTE_ACTS, type KeynoteEdition } from "../data/keynoteSlidesData";
import { getPresenterScriptBlocks } from "../data/presenterScriptData";

export const PresenterScriptPage: React.FC = () => {
  const [edition, setEdition] = useState<KeynoteEdition>("migration");
  const [fontSizePx, setFontSizePx] = useState(22);
  const [autoScroll, setAutoScroll] = useState(false);
  const [elapsedSec, setElapsedSec] = useState(0);
  const [runningClock, setRunningClock] = useState(false);

  const blocks = getPresenterScriptBlocks(edition);

  useEffect(() => {
    document.title = "CriativoOS | Roteiro & Teleprompter do Apresentador";
  }, []);

  useEffect(() => {
    if (!runningClock) return;
    const id = window.setInterval(() => setElapsedSec((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, [runningClock]);

  useEffect(() => {
    if (!autoScroll) return;
    const id = window.setInterval(() => {
      window.scrollBy({ top: 1, behavior: "auto" });
    }, 45);
    return () => window.clearInterval(id);
  }, [autoScroll]);

  const mins = String(Math.floor(elapsedSec / 60)).padStart(2, "0");
  const secs = String(elapsedSec % 60).padStart(2, "0");

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Painel fixo de controle do apresentador */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0D0D0D]/95 px-4 py-3 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={edition === "migration" ? "/apresentacao-migracao" : "/apresentacao-black"}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Abrir Deck
            </a>
            <span className="font-display text-sm font-bold text-[#B9FC01]">
              Teleprompter 4 Atos
            </span>
          </div>

          {/* Toggle de Edição */}
          <div className="flex items-center rounded-full border border-white/15 bg-white/[0.04] p-1 text-xs">
            <button
              type="button"
              onClick={() => setEdition("migration")}
              className={`rounded-full px-3 py-1 font-semibold ${
                edition === "migration"
                  ? "bg-[#B9FC01] text-[#0D0D0D]"
                  : "text-zinc-300"
              }`}
            >
              Migração (12x R$ 5,09 a R$ 10,50)
            </button>
            <button
              type="button"
              onClick={() => setEdition("black")}
              className={`rounded-full px-3 py-1 font-semibold ${
                edition === "black"
                  ? "bg-[#B9FC01] text-[#0D0D0D]"
                  : "text-zinc-300"
              }`}
            >
              Black Friday (12x R$ 10,50 a R$ 21,32)
            </button>
          </div>

          {/* Controles */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[#B9FC01]">
              {mins}:{secs}
            </span>
            <button
              type="button"
              onClick={() => setRunningClock((r) => !r)}
              className="rounded-full border border-white/15 px-3 py-1 hover:bg-white/10"
            >
              {runningClock ? "Pausar Timer" : "Iniciar Timer"}
            </button>
            <button
              type="button"
              onClick={() => setElapsedSec(0)}
              title="Zerar timer"
              className="rounded-full border border-white/15 p-1.5 hover:bg-white/10"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setAutoScroll((s) => !s)}
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 font-semibold ${
                autoScroll ? "bg-[#B9FC01] text-[#0D0D0D]" : "border border-white/15"
              }`}
            >
              {autoScroll ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              Auto-Scroll
            </button>
            <button
              type="button"
              onClick={() => setFontSizePx((f) => Math.max(16, f - 2))}
              className="rounded-full border border-white/15 px-2.5 py-1"
            >
              A-
            </button>
            <button
              type="button"
              onClick={() => setFontSizePx((f) => Math.min(34, f + 2))}
              className="rounded-full border border-white/15 px-2.5 py-1"
            >
              A+
            </button>
            <a
              href="/kit-whatsapp"
              className="volt-button inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Kit WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Índice rápido dos Atos */}
      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-8">
        <div className="flex flex-wrap gap-2">
          {KEYNOTE_ACTS.map((act) => (
            <a
              key={act.act}
              href={`#ato-${act.act}`}
              className="rounded-full border border-white/10 bg-[#141416] px-4 py-1.5 font-mono text-xs text-zinc-300 hover:border-[#B9FC01]"
            >
              {act.label}
            </a>
          ))}
        </div>

        {/* Blocos dos 20 slides */}
        <div className="mt-8 space-y-6 pb-28">
          {blocks.map((block, idx) => {
            const showActBanner = idx === 0 || blocks[idx - 1].act !== block.act;
            const actMeta = KEYNOTE_ACTS.find((a) => a.act === block.act);

            return (
              <React.Fragment key={block.slideId}>
                {showActBanner && actMeta && (
                  <div
                    id={`ato-${actMeta.act}`}
                    className="scroll-mt-24 pt-6 font-mono text-xs uppercase tracking-[0.2em] text-[#B9FC01]"
                  >
                    ━━ {actMeta.label} ━━
                  </div>
                )}

                <article className="rounded-3xl border border-white/10 bg-[#141416] p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
                    <span className="font-mono text-xs font-bold text-[#B9FC01]">
                      SLIDE {String(block.slideId).padStart(2, "0")}/20 · {block.slideTitle}
                    </span>
                  </div>

                  <div className="mt-3 rounded-xl bg-amber-400/10 px-3.5 py-2 font-mono text-xs text-amber-200">
                    {block.stageDirection}
                  </div>

                  <p
                    className="mt-4 leading-relaxed text-zinc-100"
                    style={{ fontSize: `${fontSizePx}px` }}
                  >
                    {block.spokenText}
                  </p>
                </article>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
