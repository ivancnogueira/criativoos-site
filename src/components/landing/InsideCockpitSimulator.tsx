import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  Film,
  MessageCircle,
  Monitor,
  Moon,
  Sparkles,
  Sun,
  Workflow,
} from "lucide-react";
import { LiveCriativoMascot } from "../mascots/LiveCriativoMascot";

gsap.registerPlugin(ScrollTrigger);

type StudioViewId = "conversa" | "computer-use" | "apps-browser" | "calendario-reels";

interface StudioViewSpec {
  id: StudioViewId;
  shortLabel: string;
  icon: React.FC<{ className?: string }>;
  statusText: string;
  headline: string;
  description: string;
  previewMode: "image" | "desktop" | "graph" | "reels";
  previewImage: string;
  highlights: string[];
}

const VIEWS: readonly StudioViewSpec[] = [
  {
    id: "conversa",
    shortLabel: "1. 15 Criativos & Chat",
    icon: MessageCircle,
    statusText: "Mestre de Carrosséis e Rosto Real gerando lâminas com suas fotos",
    headline: "Peça em português claro para seus 15 Criativos especializados",
    description:
      "Você digita ou manda áudio dizendo o que precisa. A equipe planeja as ideias, puxa suas fotos reais no seu computador e entrega carrosséis, posts, stories e anúncios com a identidade visual da sua marca.",
    previewMode: "image",
    previewImage: "/images/criativo-ia-operacao-v1-dark.webp",
    highlights: [
      "Usa as fotos reais do seu computador sem deformar seu rosto",
      "Aplica automaticamente o logotipo e a paleta da sua empresa",
      "10 inteligências artificiais gratuitas já inclusas ou conecte seu ChatGPT, Claude, Gemini ou Grok",
    ],
  },
  {
    id: "computer-use",
    shortLabel: "2. Operador PC & Nuvem",
    icon: Monitor,
    statusText: "Operador de Computador & Nuvem 24h ativos: organizando pastas e rotinas",
    headline: "Operação autônoma no computador e na nuvem 24h no mesmo lugar",
    description:
      "Muito além de um chat comum: o CriativoOS vê a tela com segurança, abre programas no Windows, Mac ou Linux, organiza pastas de clientes e também roda 24 horas na nuvem com conexão segura em 1 clique.",
    previewMode: "desktop",
    previewImage: "/images/01.webp",
    highlights: [
      "Controla aplicativos do computador com confirmação humana e histórico claro",
      "Gerencie computador local e servidor na nuvem 24h no mesmo painel",
      "Roda rotinas programadas diariamente mesmo com seu notebook fechado",
    ],
  },
  {
    id: "apps-browser",
    shortLabel: "3. Navegador & 253+ Apps",
    icon: Workflow,
    statusText: "Navegador Inteligente pesquisando concorrentes e sincronizando seus apps",
    headline: "Navegador Inteligente + 253+ aplicativos em rotinas visuais",
    description:
      "Conecte Google Drive, Notion, Gmail, planilhas, atendimento e mais em rotinas visuais automáticas. O Navegador Inteligente pesquisa sites reais, coleta ideias da concorrência e alimenta seus fluxos sem trabalho manual.",
    previewMode: "graph",
    previewImage: "/images/01.webp",
    highlights: [
      "Mais de 253 aplicativos conectados prontos para acionar por chat ou agenda",
      "Editor de rotinas visuais automáticas com pausas e histórico claro",
      "Radar automático que lê formatos em alta do seu mercado em segundos",
    ],
  },
  {
    id: "calendario-reels",
    shortLabel: "4. Calendário & Reels",
    icon: Film,
    statusText: "Estúdio de Vídeo finalizando Reels + publicações agendadas na semana",
    headline: "Calendário visual integrado e Estúdio de Reels em 1 painel",
    description:
      "Visualize seu mês inteiro antes de ir ao ar, inspecione prévias fiéis do feed e stories, acompanhe resultados reais e produza roteiros e vídeos verticais editados com legendas dinâmicas.",
    previewMode: "reels",
    previewImage: "/images/criativo-ia-stories.webp",
    highlights: [
      "Grade visual de feed e stories com aprovação humana em 1 clique no WhatsApp",
      "Roteiros gravando na câmera ou sem aparecer com edição vertical pronta",
      "Acompanhamento de alcance, salvamentos e resultados direto no painel",
    ],
  },
];

export const InsideCockpitSimulator: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const windowRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<StudioViewId>("conversa");
  const [lightThemeDemo, setLightThemeDemo] = useState(false);

  const current = VIEWS.find((v) => v.id === activeId) ?? VIEWS[0];

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const winEl = windowRef.current;
    if (!sectionEl || !winEl) return;
    if (window.innerWidth <= 768) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        winEl,
        { scale: 0.88, opacity: 0.7, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 80%",
            end: "top 25%",
            scrub: 0.6,
          },
        }
      );
    }, sectionEl);

    return () => ctx.revert();
  }, []);

  const shellBg = lightThemeDemo
    ? "bg-[#F4F6FA] text-[#0D0D0D] border-slate-300"
    : "bg-[#090B10] text-white border-white/15";
  const accentText = lightThemeDemo ? "text-[#0031CC]" : "text-[#B9FC01]";

  return (
    <section
      id="por-dentro"
      ref={sectionRef}
      className="border-t border-white/[0.06] bg-[#07090D] py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              // 07 · COCKPIT POR DENTRO
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-5xl">
              Conheça o Seu{" "}
              <span className="text-[#B9FC01]">CriativoOS Por Dentro</span>
            </h2>
            <p className="mt-3 text-base text-slate-400 sm:text-lg">
              Um sistema visual, rápido e fácil no seu PC ou na nuvem 24h.
              Navegue pelas 4 centrais abaixo para ver como você comanda do
              seu computador aos Reels:
            </p>
          </div>

          <button
            type="button"
            onClick={() => setLightThemeDemo((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2.5 text-xs font-bold text-white transition hover:border-[#B9FC01]"
          >
            {lightThemeDemo ? (
              <>
                <Moon className="h-4 w-4 text-[#B9FC01]" />
                Ver Tema Escuro Volt
              </>
            ) : (
              <>
                <Sun className="h-4 w-4 text-sky-400" />
                Testar Tema Claro Cobalt
              </>
            )}
          </button>
        </div>

        {/* Botões das 4 áreas */}
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {VIEWS.map((view) => {
            const Icon = view.icon;
            const active = view.id === activeId;
            return (
              <button
                key={view.id}
                type="button"
                onClick={() => setActiveId(view.id)}
                className={`flex items-center justify-center gap-2.5 rounded-2xl border px-4 py-3.5 text-xs font-bold transition sm:text-sm ${
                  active
                    ? "border-[#B9FC01] bg-[#B9FC01] text-[#07080C] shadow-[0_0_25px_rgba(185,252,1,0.3)]"
                    : "border-white/10 bg-[#121623] text-slate-300 hover:border-white/25 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{view.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Janela Expansível GSAP do Cockpit */}
        <div
          ref={windowRef}
          className={`mt-6 overflow-hidden rounded-[2rem] border shadow-[0_30px_90px_rgba(0,0,0,0.75)] transition-colors duration-300 ${shellBg}`}
        >
          {/* Barra Superior com Dynamic Island */}
          <div
            className={`flex flex-wrap items-center justify-between gap-3 border-b px-6 py-4 ${
              lightThemeDemo
                ? "border-slate-200 bg-white"
                : "border-white/10 bg-[#111521]"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-500/70" />
                <span className="h-3 w-3 rounded-full bg-amber-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
              </div>
              <img
                src={
                  lightThemeDemo
                    ? "/logo-criativoos-light.svg"
                    : "/logo-criativoos-dark.svg"
                }
                alt="CriativoOS"
                className="h-5 w-auto"
              />
            </div>

            <div className="flex items-center gap-2.5 rounded-full bg-[#07090F] px-4 py-1.5 font-mono text-xs text-slate-200 ring-1 ring-white/10">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#B9FC01]" />
              <span>{current.statusText}</span>
            </div>

            <span className={`font-mono text-xs font-bold ${accentText}`}>
              {lightThemeDemo ? "Modo Claro Cobalt" : "Modo Escuro Volt"}
            </span>
          </div>

          {/* Conteúdo interno do Estúdio */}
          <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-current/15 px-3.5 py-1 font-mono text-xs font-bold">
                <Sparkles className={`h-3.5 w-3.5 ${accentText}`} />
                <span>{current.shortLabel}</span>
              </div>

              <h3 className="font-display text-2xl font-extrabold sm:text-4xl">
                {current.headline}
              </h3>

              <p
                className={`text-sm leading-relaxed sm:text-base ${
                  lightThemeDemo ? "text-slate-600" : "text-slate-300"
                }`}
              >
                {current.description}
              </p>

              <ul className="space-y-3 pt-2">
                {current.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        lightThemeDemo
                          ? "bg-[#0031CC] text-white"
                          : "bg-[#B9FC01] text-[#07080C]"
                      }`}
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Mini barra dos Criativos ativos */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                {[
                  { shape: "hex" as const, color: "#31cf76", label: "Operador PC" },
                  { shape: "blob" as const, color: "#38bdf8", label: "Navegador 253+" },
                  { shape: "rounded_square" as const, color: "#2dd4bf", label: "Carrossel" },
                  { shape: "blob" as const, color: "#a855f7", label: "Rosto Real" },
                ].map((m, idx) => (
                  <div
                    key={m.label}
                    className={`flex items-center gap-2 rounded-2xl border px-3 py-1.5 text-xs font-bold ${
                      lightThemeDemo
                        ? "border-slate-200 bg-white"
                        : "border-white/10 bg-white/[0.04]"
                    }`}
                  >
                    <LiveCriativoMascot
                      shape={m.shape}
                      color={m.color}
                      size={28}
                      working={idx === 2}
                    />
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview Dinâmico do Módulo Ativo no Cockpit */}
            <div className="flex justify-center lg:col-span-5">
              {current.previewMode === "desktop" ? (
                <div
                  className={`w-full max-w-md overflow-hidden rounded-3xl border p-5 shadow-2xl ${
                    lightThemeDemo
                      ? "border-slate-300 bg-white text-slate-800"
                      : "border-[#B9FC01]/35 bg-[#050608] text-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-current/10 pb-3 font-mono text-[11px]">
                    <span className={`font-bold ${accentText}`}>
                      // OPERADOR DE PC
                    </span>
                    <span className="rounded bg-[#B9FC01]/15 px-2 py-0.5 text-[10px] font-bold text-[#B9FC01]">
                      MOUSE ATIVO
                    </span>
                  </div>
                  <div className="mt-4 space-y-2.5 font-mono text-xs">
                    {[
                      {
                        step: "09:00",
                        cmd: "Abrir pasta C:/Marcas/Cliente/Fotos",
                        ok: "OK",
                      },
                      {
                        step: "09:01",
                        cmd: "Organizar criativos aprovados + PDF",
                        ok: "OK",
                      },
                      {
                        step: "09:02",
                        cmd: "Preencher planilha de vendas e salvar cópia",
                        ok: "EM EXECUÇÃO",
                      },
                      {
                        step: "09:04",
                        cmd: "Enviar resumo automático no WhatsApp",
                        ok: "AGENDADO",
                      },
                    ].map((row) => (
                      <div
                        key={row.step}
                        className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 ${
                          lightThemeDemo
                            ? "border-slate-200 bg-slate-50"
                            : "border-white/10 bg-white/[0.03]"
                        }`}
                      >
                        <div className="min-w-0">
                          <span className="mr-2 text-[10px] opacity-60">
                            {row.step}
                          </span>
                          <span className="truncate text-[11px] font-medium">
                            {row.cmd}
                          </span>
                        </div>
                        <span
                          className={`shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold ${
                            row.ok === "EM EXECUÇÃO"
                              ? "bg-[#B9FC01] text-[#050608]"
                              : "bg-white/10 text-emerald-400"
                          }`}
                        >
                          {row.ok}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-xl border border-current/10 bg-[#B9FC01]/10 px-3.5 py-2.5 font-mono text-[10px]">
                    <span className="font-bold">
                      Acompanhamento visual + histórico completo
                    </span>
                    <span className={`font-bold ${accentText}`}>100% LOCAL</span>
                  </div>
                </div>
              ) : current.previewMode === "graph" ? (
                <div
                  className={`w-full max-w-md overflow-hidden rounded-3xl border p-5 shadow-2xl ${
                    lightThemeDemo
                      ? "border-slate-300 bg-white text-slate-800"
                      : "border-sky-400/35 bg-[#050608] text-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-current/10 pb-3 font-mono text-[11px]">
                    <span className={`font-bold ${accentText}`}>
                      // ROTINA AUTOMÁTICA
                    </span>
                    <span className="rounded bg-sky-500/15 px-2 py-0.5 text-[10px] font-bold text-sky-400">
                      253+ APPS
                    </span>
                  </div>
                  <div className="mt-4 space-y-2.5">
                    {[
                      {
                        node: "1. Navegador Inteligente",
                        detail: "Monitorar 5 concorrentes + coletar ideias",
                        badge: "Web Ao Vivo",
                      },
                      {
                        node: "2. Notion + Google Drive + Planilhas",
                        detail: "Atualizar tabela, puxar fotos reais e contatos",
                        badge: "Integração Nativa",
                      },
                      {
                        node: "3. 15 Criativos Studio",
                        detail: "Gerar Carrossel 1080x1350 + Roteiro Reels",
                        badge: "Equipe 15 Criativos",
                      },
                      {
                        node: "4. WhatsApp + Conexão oficial do Instagram",
                        detail: "Enviar prévia para [1] Aprovar e publicar",
                        badge: "1 Clique",
                      },
                    ].map((n, idx) => (
                      <div key={n.node}>
                        <div
                          className={`flex items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 ${
                            lightThemeDemo
                              ? "border-slate-200 bg-slate-50"
                              : "border-white/10 bg-white/[0.04]"
                          }`}
                        >
                          <div className="min-w-0">
                            <div className="font-mono text-[11px] font-bold text-[#B9FC01]">
                              {n.node}
                            </div>
                            <div className="truncate text-[11px] opacity-80">
                              {n.detail}
                            </div>
                          </div>
                          <span className="shrink-0 rounded-full border border-white/10 bg-black/20 px-2 py-0.5 font-mono text-[9px] font-bold">
                            {n.badge}
                          </span>
                        </div>
                        {idx < 3 && (
                          <div className="mx-auto h-2 w-0.5 bg-[#B9FC01]/45" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : current.previewMode === "reels" ? (
                <div className="relative flex w-full max-w-md items-center justify-center gap-3">
                  <div className="overflow-hidden rounded-3xl border border-current/15 bg-black/30 p-2 shadow-2xl">
                    <img
                      src="/images/criativo-ia-stories.webp"
                      alt="Estúdio de Reels e Stories Verticais"
                      className="max-h-[340px] w-auto rounded-2xl object-cover"
                    />
                  </div>
                  <div className="hidden overflow-hidden rounded-3xl border border-current/15 bg-black/30 p-2 shadow-2xl sm:block">
                    <img
                      src="/images/criativo-ia-operacao-v2-editorial.webp"
                      alt="Calendário Visual CriativoOS"
                      className="max-h-[280px] w-auto rounded-2xl object-cover opacity-90"
                    />
                  </div>
                </div>
              ) : (
                <div className="overflow-hidden rounded-3xl border border-current/15 bg-black/30 p-2 shadow-2xl">
                  <img
                    src={current.previewImage}
                    alt={current.headline}
                    className="max-h-[360px] w-auto rounded-2xl object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
