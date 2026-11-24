import React, { useEffect, useState } from "react";
import {
  Check,
  CheckCircle2,
  FolderOpen,
  Monitor,
  MousePointerClick,
  Pause,
  Play,
  ShieldAlert,
  ShieldCheck,
  Table2,
} from "lucide-react";
import { BorderGlow } from "../fx/BorderGlow";

interface DesktopStep {
  id: number;
  label: string;
  statusText: string;
  cursorX: number;
  cursorY: number;
  clicking: boolean;
}

const DESKTOP_STEPS: readonly DesktopStep[] = [
  {
    id: 0,
    label: "1. Pasta Minhas Fotos",
    statusText: "Abrindo pasta Minhas Fotos no seu computador...",
    cursorX: 16,
    cursorY: 26,
    clicking: true,
  },
  {
    id: 1,
    label: "2. Planilha da Semana",
    statusText: "Preenchendo a planilha da semana com os novos temas...",
    cursorX: 66,
    cursorY: 42,
    clicking: false,
  },
  {
    id: 2,
    label: "3. Pedir Confirmação",
    statusText: "Aguardando sua autorização humana antes de salvar...",
    cursorX: 54,
    cursorY: 73,
    clicking: false,
  },
  {
    id: 3,
    label: "4. Salvo com Segurança",
    statusText: "Confirmado por você! Arquivos organizados na pasta certa.",
    cursorX: 54,
    cursorY: 73,
    clicking: true,
  },
];

const WEEK_ROWS = [
  { day: "Segunda", item: "Carrossel 5 erros comuns", done: true },
  { day: "Quarta", item: "Post com foto do estúdio", done: true },
  { day: "Sexta", item: "Sequência de Stories com enquete", done: true },
];

/**
 * Dobra 3A: Operador de Computador com Motion interativo simulando janelas,
 * cursor, pasta Minhas Fotos, planilha e confirmação humana explícita.
 */
export const MotorDesktopSection: React.FC = () => {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setStepIndex(2);
      setPaused(true);
      return;
    }
    if (paused) return;

    const timer = window.setInterval(() => {
      setStepIndex((prev) => (prev + 1) % DESKTOP_STEPS.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [paused]);

  const currentStep = DESKTOP_STEPS[stepIndex];
  const showPhotosWindow = stepIndex >= 0;
  const showSheetWindow = stepIndex >= 1;
  const showPromptBox = stepIndex === 2;
  const isConfirmed = stepIndex === 3;

  return (
    <section
      id="motor-computador"
      className="relative border-t border-white/[0.06] bg-[#07090D] py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Coluna Esquerda: Explicação simples + âncora dos mascotes */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              <Monitor className="h-3.5 w-3.5" />
              // 03A · OPERADOR DE COMPUTADOR
            </span>

            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl xl:text-5xl">
              Um Operador que Trabalha Direto na Tela do{" "}
              <span className="text-[#B9FC01]">Seu Computador</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Enquanto ferramentas comuns ficam presas respondendo texto em uma
              janela fechada, o CriativoOS enxerga a tela do seu PC, movimenta o
              mouse, abre suas pastas reais de fotos e preenche seus documentos
              sem você precisar copiar e colar nada.
            </p>

            <div className="mt-6 space-y-3.5">
              <div className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-[#050608]/80 p-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#B9FC01]/15 text-[#B9FC01]">
                  <FolderOpen className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">
                    Abre suas pastas reais no disco
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                    Entra na pasta Minhas Fotos, separa o logotipo da empresa e
                    organiza tudo na pasta certa de cada cliente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-[#050608]/80 p-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#B9FC01]/15 text-[#B9FC01]">
                  <Table2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">
                    Preenche planilhas e programas abertos
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                    Atualiza tabelas da semana, cadastra informações no sistema
                    da empresa e salva arquivos em Windows, Mac e Linux.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-[#050608]/80 p-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#B9FC01]/15 text-[#B9FC01]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">
                    Trava humana em ações importantes
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                    Antes de apagar, confirmar ou enviar qualquer item sensível,
                    ele para na hora e pede o seu clique de aprovação.
                  </p>
                </div>
              </div>
            </div>

            {/* Área reservada para pouso do mascote líder na coreografia GSAP */}
            <div
              data-mascot-anchor="motor-3a"
              className="mt-6 flex min-h-[84px] items-center justify-between gap-4 rounded-2xl border border-dashed border-[#B9FC01]/30 bg-[#050608]/75 px-4 py-3"
            >
              <div className="flex h-14 w-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <MousePointerClick className="h-5 w-5 text-[#B9FC01]/70" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#B9FC01]">
                  Supervisor da Tela Ativo
                </div>
                <p className="mt-0.5 text-xs text-slate-400">
                  Acompanha cliques, pastas e confirmações junto com você no
                  seu computador.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Motion Interativo do Desktop */}
          <div className="lg:col-span-7">
            <BorderGlow
              backgroundColor="rgba(10, 14, 22, 0.92)"
              glowColor="76 98 50"
              colors={["#B9FC01", "#31cf76", "#38bdf8"]}
              borderRadius={24}
              innerClassName="!p-4 sm:!p-6"
            >
              {/* Barra superior estilo janela do computador */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-slate-300">
                    Área de Trabalho · Windows, Mac e Linux
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#B9FC01]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#B9FC01]" />
                    TRAVA HUMANA ATIVA
                  </span>
                  <button
                    type="button"
                    onClick={() => setPaused((p) => !p)}
                    className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] font-semibold text-slate-300 transition hover:border-[#B9FC01]/40 hover:text-white"
                    aria-label={paused ? "Continuar animação" : "Pausar animação"}
                  >
                    {paused ? (
                      <>
                        <Play className="h-3 w-3 text-[#B9FC01]" />
                        Tocar
                      </>
                    ) : (
                      <>
                        <Pause className="h-3 w-3 text-[#B9FC01]" />
                        Pausar
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Palco animado simulando a tela real */}
              <div className="relative mt-4 h-[370px] overflow-hidden rounded-2xl border border-white/10 bg-[#050608] p-4 sm:h-[400px] sm:p-5">
                {/* Grade sutil de fundo da área de trabalho */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(185,252,1,0.16) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />

                {/* Ícones do Desktop na coluna esquerda */}
                <div className="relative z-10 flex flex-col gap-3 sm:w-32">
                  <button
                    type="button"
                    onClick={() => {
                      setPaused(true);
                      setStepIndex(0);
                    }}
                    className={`flex flex-col items-center rounded-xl border p-2.5 text-center transition-all duration-300 ${
                      stepIndex === 0
                        ? "border-[#B9FC01]/70 bg-[#B9FC01]/15 shadow-[0_0_20px_rgba(185,252,1,0.18)]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/25"
                    }`}
                  >
                    <FolderOpen className="h-7 w-7 text-[#B9FC01]" />
                    <span className="mt-1.5 text-[11px] font-semibold text-white">
                      Minhas Fotos
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setPaused(true);
                      setStepIndex(1);
                    }}
                    className={`hidden flex-col items-center rounded-xl border p-2.5 text-center transition-all duration-300 sm:flex ${
                      stepIndex === 1
                        ? "border-[#B9FC01]/70 bg-[#B9FC01]/15"
                        : "border-white/10 bg-white/[0.03] hover:border-white/25"
                    }`}
                  >
                    <Table2 className="h-7 w-7 text-emerald-400" />
                    <span className="mt-1.5 text-[11px] font-semibold text-white">
                      Planilha.xlsx
                    </span>
                  </button>
                </div>

                {/* Janela 1: Pasta Minhas Fotos */}
                <div
                  className={`absolute left-4 right-4 top-28 z-10 rounded-2xl border bg-[#0B0E15]/95 p-3.5 shadow-2xl transition-all duration-500 sm:left-40 sm:right-auto sm:top-5 sm:w-[270px] ${
                    showPhotosWindow
                      ? "translate-y-0 border-white/15 opacity-100"
                      : "translate-y-3 border-white/5 opacity-0"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-white">
                      <FolderOpen className="h-3.5 w-3.5 text-[#B9FC01]" />
                      Pasta: Minhas Fotos
                    </span>
                    <span className="font-mono text-[10px] text-[#B9FC01]">
                      3 escolhidas
                    </span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-3 gap-2">
                    {[
                      { name: "estudio-01", tone: "from-[#B9FC01]/25 to-emerald-500/20" },
                      { name: "rosto-capa", tone: "from-sky-500/25 to-indigo-500/20" },
                      { name: "logo-hd", tone: "from-amber-400/25 to-orange-500/20" },
                    ].map((photo) => (
                      <div
                        key={photo.name}
                        className="relative rounded-lg border border-[#B9FC01]/40 bg-white/[0.04] p-1.5"
                      >
                        <div
                          className={`h-10 rounded bg-gradient-to-br ${photo.tone}`}
                        />
                        <span className="mt-1 block truncate font-mono text-[9px] text-slate-300">
                          {photo.name}
                        </span>
                        <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#B9FC01] text-[#050608]">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Janela 2: Planilha da Semana */}
                <div
                  className={`absolute bottom-14 left-4 right-4 z-10 rounded-2xl border bg-[#0E131D]/95 p-3.5 shadow-2xl transition-all duration-500 sm:bottom-14 sm:left-auto sm:right-5 sm:top-20 sm:w-[300px] sm:bottom-auto ${
                    showSheetWindow
                      ? "translate-y-0 border-emerald-400/35 opacity-100"
                      : "pointer-events-none translate-y-4 border-white/5 opacity-0"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-white">
                      <Table2 className="h-3.5 w-3.5 text-emerald-400" />
                      Planilha da Semana
                    </span>
                    <span className="rounded bg-emerald-500/15 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-300">
                      Atualizando
                    </span>
                  </div>
                  <div className="mt-2.5 space-y-1.5">
                    {WEEK_ROWS.map((row, idx) => {
                      const rowVisible = stepIndex >= 1;
                      return (
                        <div
                          key={row.day}
                          className={`flex items-center justify-between rounded-lg border border-white/10 bg-[#050608] px-2.5 py-1.5 text-[11px] transition-all duration-300 ${
                            rowVisible ? "opacity-100" : "opacity-30"
                          }`}
                          style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                          <span className="font-mono font-bold text-[#B9FC01]">
                            {row.day}
                          </span>
                          <span className="mx-2 flex-1 truncate text-slate-300">
                            {row.item}
                          </span>
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Caixa de confirmação humana (Passo 3) */}
                <div
                  className={`absolute inset-x-4 bottom-12 z-20 mx-auto max-w-md rounded-2xl border-2 border-[#B9FC01] bg-[#0B1018]/98 p-4 shadow-[0_0_40px_rgba(185,252,1,0.28)] transition-all duration-300 sm:bottom-14 ${
                    showPromptBox
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-95 opacity-0"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#B9FC01]/20 text-[#B9FC01]">
                      <ShieldAlert className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-display text-sm font-extrabold text-white">
                        Posso confirmar essa ação?
                      </div>
                      <p className="mt-0.5 text-xs text-slate-300">
                        Copiar 3 fotos de Minhas Fotos e salvar a planilha
                        atualizada na pasta do cliente.
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setPaused(true);
                            setStepIndex(3);
                          }}
                          className="rounded-xl bg-[#B9FC01] px-3.5 py-1.5 text-xs font-extrabold text-[#050608] shadow-[0_0_18px_rgba(185,252,1,0.45)] transition hover:brightness-110"
                        >
                          Sim, continuar
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setPaused(true);
                            setStepIndex(0);
                          }}
                          className="rounded-xl border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:text-white"
                        >
                          Revisar antes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Selo de ação autorizada e concluída (Passo 4) */}
                <div
                  className={`absolute inset-x-4 bottom-12 z-20 mx-auto max-w-md rounded-2xl border border-emerald-400/50 bg-[#081512]/95 p-4 shadow-2xl transition-all duration-300 sm:bottom-14 ${
                    isConfirmed
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-95 opacity-0"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-white">
                        Autorizado por você e concluído
                      </div>
                      <p className="text-xs text-emerald-300">
                        3 fotos separadas e Planilha da Semana salva no
                        computador.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Barra de status inferior */}
                <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between border-t border-white/10 bg-[#080B11]/95 px-4 py-2 font-mono text-[11px]">
                  <span className="truncate text-slate-300">
                    {currentStep.statusText}
                  </span>
                  <span className="ml-2 shrink-0 text-[#B9FC01]">
                    Etapa {stepIndex + 1}/4
                  </span>
                </div>

                {/* Cursor SVG animado percorrendo o palco */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute z-30 transition-all duration-700 ease-out"
                  style={{
                    left: `${currentStep.cursorX}%`,
                    top: `${currentStep.cursorY}%`,
                  }}
                >
                  {currentStep.clicking && (
                    <span className="absolute -left-2 -top-2 h-8 w-8 animate-ping rounded-full bg-[#B9FC01]/35" />
                  )}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)]"
                  >
                    <path
                      d="M4 3L19 11.5L11.8 13.6L8.8 20.5L4 3Z"
                      fill="#B9FC01"
                      stroke="#050608"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Botões interativos de seleção rápida de cena */}
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {DESKTOP_STEPS.map((step) => {
                  const active = step.id === stepIndex;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => {
                        setPaused(true);
                        setStepIndex(step.id);
                      }}
                      className={`rounded-xl border px-3 py-2 text-left font-mono text-[11px] font-semibold transition ${
                        active
                          ? "border-[#B9FC01] bg-[#B9FC01]/15 text-[#B9FC01]"
                          : "border-white/10 bg-[#050608] text-slate-400 hover:border-white/25 hover:text-white"
                      }`}
                    >
                      {step.label}
                    </button>
                  );
                })}
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
};
