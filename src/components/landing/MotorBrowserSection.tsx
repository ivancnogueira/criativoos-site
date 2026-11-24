import React, { useEffect, useState } from "react";
import {
  CheckCircle2,
  Eye,
  Flame,
  Globe,
  KeyRound,
  Lock,
  Pause,
  Play,
  Search,
  ShieldAlert,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { BorderGlow } from "../fx/BorderGlow";

type BrowserTabKey = "concorrentes" | "tendencias" | "portal";

interface TabConfig {
  key: BrowserTabKey;
  title: string;
  address: string;
  status: string;
}

const BROWSER_TABS: readonly TabConfig[] = [
  {
    key: "concorrentes",
    title: "Aba 1 · Concorrentes",
    address: "mercado.web/perfis-em-alta",
    status: "Lendo posts que mais geram comentários e salvamentos",
  },
  {
    key: "tendencias",
    title: "Aba 2 · Temas em Alta",
    address: "tendencias.web/assuntos-da-semana",
    status: "Separando 3 ideias prontas para seus próximos posts",
  },
  {
    key: "portal",
    title: "Aba 3 · Portal da Conta",
    address: "conta-segura.web/acesso",
    status: "Pausa segura ativada: esperando você digitar sua senha",
  },
];

const TAB_ORDER: readonly BrowserTabKey[] = [
  "concorrentes",
  "tendencias",
  "portal",
];

/**
 * Dobra 3B: Navegador Inteligente com Motion de 3 abas pesquisando concorrentes
 * e pausa segura chamando o usuário quando algum site pede senha ou código no celular.
 */
export const MotorBrowserSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<BrowserTabKey>("concorrentes");
  const [userTypedPassword, setUserTypedPassword] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setActiveTab("portal");
      setPaused(true);
      return;
    }
    if (paused) return;

    const timer = window.setInterval(() => {
      setActiveTab((prev) => {
        const nextIdx = (TAB_ORDER.indexOf(prev) + 1) % TAB_ORDER.length;
        const nextTab = TAB_ORDER[nextIdx];
        if (nextTab === "concorrentes") {
          setUserTypedPassword(false);
        }
        return nextTab;
      });
    }, 3000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const currentTab =
    BROWSER_TABS.find((t) => t.key === activeTab) ?? BROWSER_TABS[0];

  return (
    <section
      id="motor-navegador"
      className="relative border-t border-white/[0.06] bg-[#050608] py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Coluna Esquerda: Explicação simples + âncora dos mascotes */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              <Globe className="h-3.5 w-3.5" />
              // 03B · NAVEGADOR INTELIGENTE
            </span>

            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl xl:text-5xl">
              Um Navegador que Pesquisa o Mercado e{" "}
              <span className="text-[#B9FC01]">Chama Você Quando Precisa</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              O CriativoOS abre abas reais na internet para acompanhar perfis de
              referência, descobrir quais assuntos estão dando resultado hoje e
              preencher sites por você. E se alguma página pedir senha ou código
              no celular, ele pausa com segurança e chama você.
            </p>

            <div className="mt-6 space-y-3.5">
              <div className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-[#07090D] p-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400">
                  <Search className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">
                    Estuda seus concorrentes ao vivo
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                    Analisa títulos, formatos de capa e perguntas que fazem o
                    público salvar e comentar nos perfis do seu setor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-[#07090D] p-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#B9FC01]/15 text-[#B9FC01]">
                  <Flame className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">
                    Traz temas quentes prontos para criar
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                    Transforma tendências reais da semana em sugestões prontas
                    para sua equipe transformar em carrosséis e vídeos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-[#07090D] p-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300">
                  <KeyRound className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">
                    Pausa segura quando pede senha
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                    Nunca tenta adivinhar códigos ou burlar acessos: para e abre
                    a tela para você digitar com total controle.
                  </p>
                </div>
              </div>
            </div>

            {/* Área reservada para pouso do mascote líder na coreografia GSAP */}
            <div
              data-mascot-anchor="motor-3b"
              className="mt-6 flex min-h-[84px] items-center justify-between gap-4 rounded-2xl border border-dashed border-sky-400/30 bg-[#07090D] px-4 py-3"
            >
              <div className="flex h-14 w-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <Eye className="h-5 w-5 text-sky-400/80" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-400">
                  Pesquisador em Tempo Real
                </div>
                <p className="mt-0.5 text-xs text-slate-400">
                  Lê várias abas de pesquisa e pausa imediatamente quando precisa
                  de você.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Motion do Navegador com 3 Abas */}
          <div className="lg:col-span-7">
            <BorderGlow
              backgroundColor="rgba(10, 14, 24, 0.92)"
              glowColor="200 90 55"
              colors={["#38bdf8", "#0031CC", "#B9FC01"]}
              borderRadius={24}
              innerClassName="!p-4 sm:!p-6"
            >
              {/* Topo do navegador com 3 abas reais */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {BROWSER_TABS.map((tab) => {
                    const isActive = tab.key === activeTab;
                    return (
                      <button
                        key={tab.key}
                        type="button"
                        onClick={() => {
                          setPaused(true);
                          setActiveTab(tab.key);
                        }}
                        className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition ${
                          isActive
                            ? "border-[#B9FC01]/60 bg-[#B9FC01]/15 text-white"
                            : "border-white/10 bg-[#050608] text-slate-400 hover:text-white"
                        }`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${
                            tab.key === "portal"
                              ? "bg-amber-400"
                              : isActive
                              ? "bg-[#B9FC01]"
                              : "bg-slate-600"
                          }`}
                        />
                        {tab.title}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => setPaused((p) => !p)}
                  className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] font-semibold text-slate-300 transition hover:border-[#B9FC01]/40 hover:text-white"
                  aria-label={paused ? "Continuar abas" : "Pausar abas"}
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

              {/* Barra de endereço */}
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-[#050608] px-3 py-2 font-mono text-xs text-slate-300">
                <Lock className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <span className="truncate">{currentTab.address}</span>
                <span className="ml-auto hidden shrink-0 rounded bg-sky-500/15 px-2 py-0.5 text-[10px] font-bold text-sky-300 sm:inline-block">
                  3 ABAS ABERTAS
                </span>
              </div>

              {/* Conteúdo dinâmico das 3 abas */}
              <div className="relative mt-4 min-h-[305px] rounded-2xl border border-white/10 bg-[#050608] p-4 sm:p-5">
                {activeTab === "concorrentes" && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#B9FC01]">
                          Analisando referências do seu mercado
                        </span>
                        <h3 className="font-display text-base font-bold text-white sm:text-lg">
                          O que está segurando atenção nos perfis concorrentes
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B9FC01]/40 bg-[#B9FC01]/10 px-2.5 py-1 font-mono text-[10px] font-bold text-[#B9FC01]">
                        <Sparkles className="h-3 w-3 animate-pulse" />
                        Lendo ao vivo
                      </span>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        {
                          handle: "@referencia.01",
                          format: "Carrossel 8 páginas",
                          insight: "Capa curta com pergunta direta",
                          gain: "+42% salvamentos",
                        },
                        {
                          handle: "@referencia.02",
                          format: "Vídeo Bastidores",
                          insight: "Legenda grande logo no início",
                          gain: "+31% comentários",
                        },
                        {
                          handle: "@referencia.03",
                          format: "Guia Prático",
                          insight: "Lista numerada passo a passo",
                          gain: "+27% compartilhamentos",
                        },
                      ].map((item) => (
                        <div
                          key={item.handle}
                          className="rounded-xl border border-white/10 bg-[#0B0E15] p-3.5"
                        >
                          <div className="font-mono text-[11px] font-bold text-sky-300">
                            {item.handle}
                          </div>
                          <div className="mt-1 text-xs font-bold text-white">
                            {item.format}
                          </div>
                          <p className="mt-1.5 text-[11px] leading-relaxed text-slate-400">
                            {item.insight}
                          </p>
                          <div className="mt-2.5 inline-block rounded-md bg-[#B9FC01]/15 px-2 py-0.5 font-mono text-[10px] font-bold text-[#B9FC01]">
                            {item.gain}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "tendencias" && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-400">
                          Ideias prontas para produzir agora
                        </span>
                        <h3 className="font-display text-base font-bold text-white sm:text-lg">
                          3 Temas em Alta Separados Para Sua Semana
                        </h3>
                      </div>
                      <span className="rounded-full border border-emerald-400/35 bg-emerald-500/15 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-300">
                        Pronto para criar
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {[
                        {
                          title: "1. Os 3 erros que fazem o cliente fechar a aba",
                          heat: "96% em alta",
                          width: "96%",
                        },
                        {
                          title: "2. Quanto tempo e dinheiro você perde fazendo tudo manual",
                          heat: "88% em alta",
                          width: "88%",
                        },
                        {
                          title: "3. Como organizar uma semana inteira de posts em minutos",
                          heat: "84% em alta",
                          width: "84%",
                        },
                      ].map((idea) => (
                        <div
                          key={idea.title}
                          className="rounded-xl border border-white/10 bg-[#0B0E15] p-3"
                        >
                          <div className="flex items-center justify-between gap-2 text-xs font-bold text-white">
                            <span>{idea.title}</span>
                            <span className="shrink-0 font-mono text-[10px] text-[#B9FC01]">
                              {idea.heat}
                            </span>
                          </div>
                          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-[#B9FC01]"
                              style={{ width: idea.width }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "portal" && (
                  <div className="grid gap-4 sm:grid-cols-12 sm:items-center">
                    <div className="rounded-xl border border-white/10 bg-[#0B0E15] p-4 sm:col-span-5">
                      <div className="flex items-center gap-2 text-xs font-bold text-white">
                        <Lock className="h-4 w-4 text-amber-400" />
                        Verificação da Conta
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="rounded-lg border border-white/10 bg-[#050608] px-3 py-2 font-mono text-[11px] text-slate-400">
                          conta@suaempresa.com.br
                        </div>
                        <div className="rounded-lg border border-amber-400/50 bg-[#050608] px-3 py-2 font-mono text-[11px] text-amber-300">
                          {userTypedPassword
                            ? "•••••••••••• (Confirmado)"
                            : "Digite sua senha ou código..."}
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-7">
                      {!userTypedPassword ? (
                        <div className="rounded-2xl border-2 border-amber-400/75 bg-amber-500/10 p-4 shadow-[0_0_30px_rgba(251,191,36,0.16)]">
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300">
                              <ShieldAlert className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
                                <Smartphone className="h-3.5 w-3.5" />
                                Pausa Segura Ativada
                              </div>
                              <p className="mt-1 text-sm font-bold leading-snug text-white">
                                Este site pediu sua senha ou código no celular.
                                Clique para você digitar.
                              </p>
                              <button
                                type="button"
                                onClick={() => {
                                  setPaused(true);
                                  setUserTypedPassword(true);
                                }}
                                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#B9FC01] px-4 py-2 text-xs font-extrabold text-[#050608] transition hover:brightness-110"
                              >
                                <KeyRound className="h-3.5 w-3.5" />
                                Clique para você digitar
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-2xl border border-emerald-400/50 bg-emerald-500/10 p-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-400" />
                            <div>
                              <div className="font-display text-sm font-bold text-white">
                                Acesso confirmado por você
                              </div>
                              <p className="mt-1 text-xs leading-relaxed text-emerald-200">
                                Senha digitada somente por você na tela. O
                                Navegador continuou o trabalho com segurança.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Barra inferior de status */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/10 bg-[#050608] px-3.5 py-2 font-mono text-[11px] text-slate-300">
                <span>{currentTab.status}</span>
                <span className="text-[#B9FC01]">Controle 100% seu</span>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
};
