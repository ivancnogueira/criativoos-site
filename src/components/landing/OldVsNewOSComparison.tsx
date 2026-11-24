import React from "react";
import { Check, Layers, ShieldAlert, X } from "lucide-react";
import { BorderGlow } from "../fx/BorderGlow";

const OLD_STACK_COSTS = [
  {
    item: "Agência ou Social Media mensal",
    cost: "R$ 3.000/mês",
    note: "Prazos de 3 a 5 dias por lote, alterações lentas e pouca escala",
  },
  {
    item: "Designer + Editor avulso para Reels e Ads",
    cost: "R$ 1.500/mês",
    note: "Retrabalho constante de identidade visual, legendas e Safe Zones",
  },
  {
    item: "Assinaturas e créditos em dólar picotados",
    cost: "R$ 450+/mês",
    note: "Chat de IA + Canva + gerador de imagens + automações que quebram",
  },
];

const OLD_WAY_PAINS = [
  {
    bold: "Operação fragmentada em 10 abas abertas:",
    text: "Pedir copy em um chat, diagramar no navegador, subir no Drive, copiar leads da planilha e agendar tudo manualmente consome sua semana inteira.",
  },
  {
    bold: "Robôs na nuvem presos fora do seu computador:",
    text: "Plataformas online comuns não abrem suas pastas locais, não controlam seus programas de Desktop e cobram extra por cada integração.",
  },
  {
    bold: "Rostos sintéticos e trava de créditos no meio do mês:",
    text: "Ferramentas genéricas deformam sua fisionomia em cada imagem e bloqueiam sua produção assim que os créditos pagos acabam.",
  },
];

const NEW_WAY_PILLARS = [
  {
    bold: "Computer Use + Navegador Chromium Real no Seu PC:",
    text: "O CriativoOS vê a tela com segurança, abre aplicativos locais, organiza pastas de clientes, pesquisa concorrentes ao vivo e preenche rotinas automáticas.",
  },
  {
    bold: "253+ Apps Conectados em Workflows Visuais + Servidor VPS 24/7:",
    text: "Integre Notion, Google Drive, Gmail, CRM e planilhas em fluxos auditáveis no computador ou em VPS/Docker rodando de madrugada sem deixar o notebook ligado.",
  },
  {
    bold: "15 Criativos Autônomos Com Seu Rosto Real + Estúdio de Reels:",
    text: "Do gancho ao carrossel de 10 lâminas, posts, stories, anúncios e vídeos verticais editados, preservando suas fotos, logotipo e cores em workspace isolado por marca.",
  },
  {
    bold: "10 Modelos Gratuitos (OpenCode) + Controle Pelo WhatsApp:",
    text: "Comece sem pagar API extra usando 10 modelos grátis inclusos ou conecte seu ChatGPT, Claude, Gemini ou Grok. Mande áudio no WhatsApp e aprove com 1.",
  },
];

export const OldVsNewOSComparison: React.FC = () => {
  return (
    <section
      id="diferenciais"
      className="relative border-t border-white/[0.06] bg-[#050608] py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              // 02 · QUEBRA DE PARADIGMA
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Pare de Pagar{" "}
              <span className="text-red-400 line-through decoration-red-500/70">
                R$ 4.950+/mês
              </span>{" "}
              Em Uma Pilha Quebrada.{" "}
              <span className="text-gradient-volt">
                Instale Um Sistema Operacional Completo.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              Em vez de remendar agências lentas, freelancers avulsos e 10
              assinaturas em dólar todo mês, você centraliza execução Desktop,
              automações e 15 Criativos dentro da sua própria infraestrutura.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Coluna Esquerda: A Pilha Cara de 2024 */}
          <div className="lg:col-span-5">
            <BorderGlow
              backgroundColor="rgba(22, 10, 14, 0.78)"
              glowColor="0 85 60"
              colors={["#ef4444", "#f87171", "#dc2626"]}
              borderRadius={24}
              innerClassName="h-full justify-between !p-6 sm:!p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-500/20 text-red-400">
                      <ShieldAlert className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                        Pilha Fragmentada de 2024
                      </h3>
                      <p className="text-xs font-medium text-red-400">
                        Alto custo fixo mensal e gargalo operacional diário
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tabela de custos empilhados */}
                <div className="mt-5 space-y-2.5">
                  {OLD_STACK_COSTS.map((row) => (
                    <div
                      key={row.item}
                      className="rounded-xl border border-red-500/20 bg-black/35 px-4 py-3"
                    >
                      <div className="flex items-center justify-between gap-2 text-sm font-bold">
                        <span className="text-slate-100">{row.item}</span>
                        <span className="shrink-0 font-mono text-red-400">
                          {row.cost}
                        </span>
                      </div>
                      <div className="mt-0.5 text-xs text-slate-400">
                        {row.note}
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 space-y-4">
                  {OLD_WAY_PAINS.map((pain) => (
                    <li
                      key={pain.bold}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                    >
                      <X className="mt-1 h-4 w-4 shrink-0 text-red-400" />
                      <span>
                        <strong className="text-white">{pain.bold}</strong>{" "}
                        {pain.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 font-mono text-xs">
                <span className="text-slate-300">Custo anual acumulado</span>
                <span className="text-base font-extrabold text-red-400">
                  R$ 59.400+/ano
                </span>
              </div>
            </BorderGlow>
          </div>

          {/* Coluna Direita: Núcleo Unificado CriativoOS */}
          <div className="lg:col-span-7">
            <BorderGlow
              backgroundColor="rgba(10, 22, 14, 0.86)"
              glowColor="76 98 50"
              colors={["#B9FC01", "#31cf76", "#10b981"]}
              borderRadius={24}
              innerClassName="h-full justify-between !p-6 sm:!p-8"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#B9FC01] text-[#050608]">
                      <Layers className="h-6 w-6 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                        Núcleo Unificado CriativoOS
                      </h3>
                      <p className="text-xs font-semibold text-[#B9FC01]">
                        Software Desktop + Servidor VPS 24/7 + 253+ Apps + 15 Criativos
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-[#B9FC01]/40 bg-[#B9FC01]/15 px-3 py-1 font-mono text-[10px] font-bold uppercase text-[#B9FC01]">
                    Licença Anual Própria
                  </span>
                </div>

                <ul className="mt-6 space-y-5">
                  {NEW_WAY_PILLARS.map((item) => (
                    <li
                      key={item.bold}
                      className="flex items-start gap-3.5 text-sm leading-relaxed text-slate-200 sm:text-base"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B9FC01]/20 text-[#B9FC01]">
                        <Check className="h-4 w-4 stroke-[3]" />
                      </span>
                      <span>
                        <strong className="text-white">{item.bold}</strong>{" "}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#B9FC01]/25 bg-black/40 p-3.5">
                  <div className="font-mono text-[10px] uppercase text-[#B9FC01]">
                    Motores de Execução
                  </div>
                  <div className="mt-1 font-display text-lg font-bold text-white">
                    PC + Browser + VPS
                  </div>
                </div>
                <div className="rounded-2xl border border-[#B9FC01]/25 bg-black/40 p-3.5">
                  <div className="font-mono text-[10px] uppercase text-[#B9FC01]">
                    Integrações Nativas
                  </div>
                  <div className="mt-1 font-display text-lg font-bold text-white">
                    253+ Apps em Grafo
                  </div>
                </div>
                <div className="rounded-2xl border border-[#B9FC01]/25 bg-black/40 p-3.5">
                  <div className="font-mono text-[10px] uppercase text-[#B9FC01]">
                    Investimento Inicial
                  </div>
                  <div className="mt-1 font-display text-lg font-bold text-[#B9FC01]">
                    A partir de R$ 997/ano
                  </div>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
};
