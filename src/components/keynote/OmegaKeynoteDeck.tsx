import React, { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Maximize2,
  Minimize2,
} from "lucide-react";
import {
  getKeynoteSlides,
  KEYNOTE_ACTS,
  type KeynoteEdition,
} from "../../data/keynoteSlidesData";
import { Act1MarketVisionSlides } from "./Act1MarketVisionSlides";
import { Act2InstallOnboardingSlides } from "./Act2InstallOnboardingSlides";
import { Act3InsideProductSlides } from "./Act3InsideProductSlides";
import { Act4RoiPitchSlides } from "./Act4RoiPitchSlides";

interface OmegaKeynoteDeckProps {
  edition: KeynoteEdition;
}

export const OmegaKeynoteDeck: React.FC<OmegaKeynoteDeckProps> = ({ edition }) => {
  const slides = getKeynoteSlides(edition);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const deckRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const currentSlide = slides[currentIdx] ?? slides[0];
  const progressPct = ((currentIdx + 1) / slides.length) * 100;

  const goNext = useCallback(() => {
    setCurrentIdx((prev) => Math.min(slides.length - 1, prev + 1));
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setCurrentIdx((prev) => Math.max(0, prev - 1));
  }, []);

  const jumpToAct = (actNum: 1 | 2 | 3 | 4) => {
    const idx = slides.findIndex((s) => s.act === actNum);
    if (idx >= 0) setCurrentIdx(idx);
  };

  const toggleFullscreen = async () => {
    if (typeof document === "undefined") return;
    if (!document.fullscreenElement && deckRef.current) {
      await deckRef.current.requestFullscreen?.();
      setIsFullscreen(true);
    } else if (document.fullscreenElement) {
      await document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        void toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [currentSlide.id]);

  return (
    <div
      ref={deckRef}
      className="flex min-h-screen flex-col justify-between bg-[#0D0D0D] bg-linear-grid bg-volt-radial text-white"
    >
      {/* Topbar dos Atos */}
      <header className="border-b border-white/10 bg-[#0D0D0D]/85 px-4 py-3 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a href="/" aria-label="Voltar para criativoos.com.br">
              <img
                src="/logo-criativoos-dark.svg"
                alt="CriativoOS"
                className="h-6 w-auto"
              />
            </a>
            <span className="rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-[#B9FC01]">
              {edition === "migration" ? "Migração da Base" : "Black Friday"}
            </span>
          </div>

          {/* Navegador por Atos */}
          <div className="flex flex-wrap items-center gap-1.5">
            {KEYNOTE_ACTS.map((actItem) => {
              const active = currentSlide.act === actItem.act;
              return (
                <button
                  key={actItem.act}
                  type="button"
                  onClick={() => jumpToAct(actItem.act)}
                  className={`rounded-full px-3 py-1 font-mono text-[11px] font-semibold transition ${
                    active
                      ? "bg-[#B9FC01] text-[#0D0D0D]"
                      : "bg-white/[0.05] text-zinc-400 hover:text-white"
                  }`}
                >
                  {actItem.shortTitle}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/meu-roteiro"
              target="_blank"
              rel="noopener noreferrer"
              title="Abrir Roteiro do Apresentador"
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-zinc-300 hover:border-white/30"
            >
              <FileText className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Roteiro</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <button
              type="button"
              onClick={toggleFullscreen}
              title="Tela Cheia (F)"
              className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-zinc-300 hover:border-white/30"
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Palco do Slide Atual */}
      <main
        className={`mx-auto flex w-full flex-1 flex-col justify-center ${
          currentSlide.id === 21
            ? "max-w-none px-4 py-4 sm:px-8 xl:px-14"
            : "max-w-7xl px-4 py-5 sm:px-8 sm:py-6"
        }`}
      >
        <div ref={stageRef} className="text-center">
          <span className="inline-block rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#B9FC01]">
            {currentSlide.badge}
          </span>

          <h1 className="mx-auto mt-3 max-w-5xl font-display text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {currentSlide.title}
          </h1>
          <p className="mx-auto mt-2.5 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            {currentSlide.subtitle}
          </p>

          <div className="mt-6">
            {currentSlide.act === 1 && (
              <Act1MarketVisionSlides slideId={currentSlide.id} edition={edition} />
            )}
            {currentSlide.act === 2 && (
              <Act2InstallOnboardingSlides slideId={currentSlide.id} />
            )}
            {currentSlide.act === 3 && (
              <Act3InsideProductSlides slideId={currentSlide.id} />
            )}
            {currentSlide.act === 4 && (
              <Act4RoiPitchSlides slideId={currentSlide.id} edition={edition} />
            )}
          </div>
        </div>
      </main>

      {/* Rodapé de Navegação + Progresso */}
      <footer className="border-t border-white/10 bg-[#0D0D0D]/90 px-4 py-3 backdrop-blur-xl sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-2.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-[#B9FC01] transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goPrev}
              disabled={currentIdx === 0}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10 disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </button>

            <div className="text-center font-mono text-xs text-zinc-400">
              Slide{" "}
              <strong className="text-white">
                {String(currentIdx + 1).padStart(2, "0")}
              </strong>{" "}
              / {slides.length} · Use ← → ou Espaço
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={currentIdx === slides.length - 1}
              className="volt-button inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs disabled:opacity-30"
            >
              Próximo
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
