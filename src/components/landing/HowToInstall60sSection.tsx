import React, { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CheckCircle2,
  Cpu,
  Download,
  Palette,
  Smartphone,
} from "lucide-react";
import { LiveCriativoMascot } from "../mascots/LiveCriativoMascot";
import { BorderGlow } from "../fx/BorderGlow";
import type { MascotShape } from "../../data/criativosRoster";

gsap.registerPlugin(ScrollTrigger);

interface MilestoneStep {
  badge: string;
  tag: string;
  title: string;
  desc: string;
  deliverable: string;
  icon: React.FC<{ className?: string }>;
  mascotShape: MascotShape;
  mascotColor: string;
}

const STEPS: readonly MilestoneStep[] = [
  {
    badge: "PASSO 01",
    tag: "Instalação Simples",
    title: "Baixe e Instale em 1 Minuto no Seu Computador",
    desc: "Você recebe o instalador pronto para Windows, Mac ou Linux. Basta dar dois cliques como qualquer programa comum, sem precisar digitar nenhum comando técnico.",
    deliverable: "Aplicativo instalado e pronto para abrir",
    icon: Download,
    mascotShape: "pill",
    mascotColor: "#38bdf8",
  },
  {
    badge: "PASSO 02",
    tag: "Economia Total",
    title: "Escolha Usar Modelos Gratuitos ou Sua Própria IA",
    desc: "Logo na boas-vindas você escolhe: pode começar gratuitamente com 10 inteligências artificiais já inclusas ou conectar a conta do ChatGPT, Claude, Gemini ou Grok que você já usa.",
    deliverable: "Inteligência ativada sem custo extra por post",
    icon: Cpu,
    mascotShape: "hex",
    mascotColor: "#31cf76",
  },
  {
    badge: "PASSO 03",
    tag: "Marca, Fotos e Apps",
    title: "Suba Suas Fotos, Logo e Conecte Seus Apps",
    desc: "Arraste suas fotos reais, paleta da marca e conecte Google Drive, Notion, Gmail ou seu navegador com 1 clique. O sistema calibra seu visual e seus fluxos em segundos.",
    deliverable: "DNA visual e conectores calibrados",
    icon: Palette,
    mascotShape: "blob",
    mascotColor: "#a855f7",
  },
  {
    badge: "PASSO 04",
    tag: "Liberdade no Celular",
    title: "Peça Tarefas, Posts e Aprove Pelo WhatsApp",
    desc: "Leia o QR Code com o seu celular e pronto: você pode pedir rotinas no PC, carrosséis, stories ou vídeos por mensagem, receber a prévia pronta e responder 1 para publicar.",
    deliverable: "Seu OS operando 24 horas no seu bolso",
    icon: Smartphone,
    mascotShape: "octo",
    mascotColor: "#B9FC01",
  },
];

/**
 * Linha do tempo com curva Bézier sinuosa onde o Avatar Criativo navega fisicamente
 * sobre o traçado luminoso conforme o usuário rola a página (GSAP ScrollTrigger + getPointAtLength).
 */
export const HowToInstall60sSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const pathBgRef = useRef<SVGPathElement | null>(null);
  const pathActiveRef = useRef<SVGPathElement | null>(null);
  const surferRef = useRef<HTMLDivElement | null>(null);
  const nodePinsRef = useRef<Array<HTMLDivElement | null>>([]);

  const [activeStep, setActiveStep] = useState(0);
  const [pathData, setPathData] = useState("");

  const calculateCurvePath = useCallback(() => {
    const stageEl = stageRef.current;
    if (!stageEl) return "";
    const stageRect = stageEl.getBoundingClientRect();
    if (stageRect.width === 0 || stageRect.height === 0) return "";

    const points: Array<{ x: number; y: number }> = [];
    nodePinsRef.current.forEach((pinEl) => {
      if (pinEl) {
        const r = pinEl.getBoundingClientRect();
        points.push({
          x: r.left + r.width / 2 - stageRect.left,
          y: r.top + r.height / 2 - stageRect.top,
        });
      }
    });

    if (points.length < 2) return "";

    let d = `M ${points[0].x} ${Math.max(10, points[0].y - 40)} L ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const pCurr = points[i];
      const pNext = points[i + 1];
      const deltaY = pNext.y - pCurr.y;
      const isFromLeft = i % 2 === 0;
      const force = Math.min(140, Math.max(60, Math.abs(pNext.x - pCurr.x) * 0.45));

      const cp1X = isFromLeft ? pCurr.x + force : pCurr.x - force;
      const cp1Y = pCurr.y + deltaY * 0.35;
      const cp2X = isFromLeft ? pNext.x - force : pNext.x + force;
      const cp2Y = pNext.y - deltaY * 0.35;

      d += ` C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${pNext.x} ${pNext.y}`;
    }

    const last = points[points.length - 1];
    d += ` L ${last.x} ${last.y + 40}`;
    return d;
  }, []);

  useEffect(() => {
    const updatePath = () => {
      const d = calculateCurvePath();
      if (d) setPathData(d);
    };

    const t = window.setTimeout(updatePath, 150);
    window.addEventListener("resize", updatePath);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", updatePath);
    };
  }, [calculateCurvePath]);

  useEffect(() => {
    if (!pathData || !pathActiveRef.current || !stageRef.current) return;

    const pathEl = pathActiveRef.current;
    const surferEl = surferRef.current;
    const totalLen = pathEl.getTotalLength();

    pathEl.style.strokeDasharray = `${totalLen}`;
    pathEl.style.strokeDashoffset = `${totalLen}`;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: stageRef.current,
        start: "top 70%",
        end: "bottom 35%",
        scrub: 0.45,
        onUpdate: (self) => {
          const p = self.progress;
          pathEl.style.strokeDashoffset = `${totalLen * (1 - p)}`;

          const stepIdx = Math.min(
            STEPS.length - 1,
            Math.max(0, Math.floor(p * STEPS.length))
          );
          setActiveStep(stepIdx);

          if (surferEl) {
            const pt = pathEl.getPointAtLength(p * totalLen);
            surferEl.style.transform = `translate3d(${pt.x - 34}px, ${
              pt.y - 34
            }px, 0)`;
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [pathData]);

  const currentMascot = STEPS[activeStep] ?? STEPS[0];

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#050608] py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              // 10 · SETUP 60S + IA SEM MENSALIDADE
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-5xl">
              Do Download à Primeira Operação em{" "}
              <span className="text-[#B9FC01]">4 Passos Simples</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              Você instala sem digitar código, ativa com sua chave e já pode
              rodar com 10 modelos gratuitos incluídos antes mesmo de conectar
              qualquer assinatura paga.
            </p>
          </div>
        </div>

        {/* Palco com SVG da Curva Bézier + Avatar Surfando */}
        <div ref={stageRef} className="relative mt-16">
          {pathData && (
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block"
              aria-hidden="true"
            >
              <path
                ref={pathBgRef}
                d={pathData}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="3"
                strokeDasharray="6 8"
              />
              <path
                ref={pathActiveRef}
                d={pathData}
                fill="none"
                stroke="#B9FC01"
                strokeWidth="4"
                strokeLinecap="round"
                style={{
                  filter: "drop-shadow(0 0 12px rgba(185,252,1,0.65))",
                }}
              />
            </svg>
          )}

          {/* Avatar Vivo que desliza fisicamente sobre a curva Bézier (Desktop) */}
          {pathData && (
            <div
              ref={surferRef}
              className="pointer-events-none absolute top-0 left-0 z-30 hidden h-[68px] w-[68px] items-center justify-center rounded-2xl border-2 border-[#B9FC01] bg-[#0B0E17] shadow-[0_0_30px_rgba(185,252,1,0.55)] transition-colors duration-300 lg:flex"
            >
              <LiveCriativoMascot
                shape={currentMascot.mascotShape}
                color={currentMascot.mascotColor}
                size={52}
                working
                label={currentMascot.title}
              />
            </div>
          )}

          {/* Cards alternados da jornada */}
          <div className="relative z-10 space-y-12">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isReached = idx <= activeStep;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.badge}
                  className={`flex flex-col items-center gap-6 lg:flex-row ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="w-full lg:w-5/12">
                    <BorderGlow
                      glowColor={isReached ? "76 98 50" : "215 20 40"}
                      colors={
                        isReached
                          ? ["#B9FC01", "#31cf76", "#38bdf8"]
                          : ["#334155", "#475569", "#1e293b"]
                      }
                      backgroundColor="rgba(11, 14, 21, 0.88)"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-[#B9FC01]/15 px-3 py-1 font-mono text-xs font-bold text-[#B9FC01]">
                          {step.badge} · {step.tag}
                        </span>
                        <Icon className="h-5 w-5 text-[#B9FC01]" />
                      </div>

                      <h3 className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                        {step.desc}
                      </p>

                      <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-3.5 text-xs font-semibold text-emerald-400">
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                        <span>{step.deliverable}</span>
                      </div>
                    </BorderGlow>
                  </div>

                  {/* Pino de ancoragem por onde a curva Bézier e o Avatar passam */}
                  <div className="flex w-full justify-center lg:w-2/12">
                    <div
                      ref={(el) => {
                        nodePinsRef.current[idx] = el;
                      }}
                      className={`flex h-11 w-11 items-center justify-center rounded-full border-2 font-mono text-xs font-bold transition-all duration-300 ${
                        isReached
                          ? "border-[#B9FC01] bg-[#B9FC01] text-[#07080C] shadow-[0_0_24px_rgba(185,252,1,0.6)]"
                          : "border-white/20 bg-[#121624] text-slate-400"
                      }`}
                    >
                      0{idx + 1}
                    </div>
                  </div>

                  <div className="hidden lg:block lg:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bloco Sem Custo Extra Obrigatorio */}
        <div className="mt-14 rounded-3xl border border-[#B9FC01]/35 bg-[#0A130D] p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
                Zero Custo Obrigatório por Mensagem ou Créditos
              </span>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
                Comece Com 10 Inteligências Artificiais Gratuitas Inclusas ou Conecte a Sua
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                Ao contrário de plataformas que cobram assinatura em dólar e ainda
                vendem pacotes de créditos no meio do mês, o CriativoOS já traz 10
                inteligências artificiais gratuitas inclusas, sem custo extra por
                mensagem ou imagem, e permite conectar sua conta do ChatGPT,
                Claude, Gemini ou Grok no cofre blindado só no seu computador.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-5">
              {[
                "10 IAs Gratuitas",
                "Sem Custo Extra",
                "ChatGPT / OpenAI",
                "Claude / Anthropic",
                "Google Gemini",
                "xAI Grok + IA Local",
              ].map((m) => (
                <div
                  key={m}
                  className="rounded-2xl border border-white/10 bg-[#050608] px-3.5 py-3 text-center font-mono text-xs font-bold text-slate-100"
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
