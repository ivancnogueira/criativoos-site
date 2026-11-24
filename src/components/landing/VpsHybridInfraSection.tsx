import React from "react";
import { ArrowRight, CheckCircle2, Cpu, Laptop, Server } from "lucide-react";
import { BorderGlow } from "../fx/BorderGlow";

const INFRA_NODES = [
  {
    tag: "CAMADA 01 · DESKTOP NATIVO",
    title: "Seu Computador (Windows, Mac e Linux)",
    icon: Laptop,
    color: "#38bdf8",
    desc: "Instale o aplicativo com 2 cliques para começar na hora. Ideal para quem cria perto das próprias pastas de fotos, usa Computer Use na tela do PC e quer controle visual imediato.",
    bullets: [
      "Instaladores oficiais .exe, .dmg e .AppImage",
      "Acesso direto às suas pastas locais de clientes e vídeos",
      "Atualização automática integrada no próprio aplicativo",
    ],
  },
  {
    tag: "CAMADA 02 · INFRAESTRUTURA 24/7",
    title: "Servidor VPS Linux & Container Docker",
    icon: Server,
    color: "#B9FC01",
    desc: "Quer deixar pesquisas de concorrentes, rotinas matinais, envio no WhatsApp e agendamentos rodando de madrugada mesmo com o notebook fechado? Suba seu núcleo em VPS própria ou Docker.",
    bullets: [
      "Operação ininterrupta 24 horas por dia, 7 dias por semana",
      "Recuperação segura contra quedas (fila persistente em disco)",
      "Pareamento criptografado com seu painel via token CRIATIVO_CLAIM",
    ],
    featured: true,
  },
  {
    tag: "CAMADA 03 · ESCALA MULTI-MÁQUINA",
    title: "Até 5 Computadores & Troca Instantânea",
    icon: Cpu,
    color: "#a855f7",
    desc: "Comande múltiplas máquinas locais e servidores VPS remotos dentro da mesma interface Cockpit. Troque de instância com 1 clique mantendo histórico, marca e automações sincronizados.",
    bullets: [
      "Unifica máquina do escritório, casa e servidor VPS em 1 tela",
      "Até 5 máquinas liberadas no plano Agência Ilimitada",
      "Pronto para times comerciais e equipes de social media",
    ],
  },
];

export const VpsHybridInfraSection: React.FC = () => {
  return (
    <section
      id="infra-vps"
      className="relative border-t border-white/[0.06] bg-[#050608] py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              // 04 · ARQUITETURA HÍBRIDA 24/7
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Rode No Seu Computador Hoje.{" "}
              <span className="text-gradient-volt">
                Escale 24/7 Em Servidor VPS / Docker.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              Você não fica refém de um único dispositivo. O CriativoOS funciona
              como programa comum no seu Desktop e se conecta perfeitamente ao
              seu próprio servidor VPS quando você quiser operação contínua.
            </p>
          </div>
        </div>

        {/* Diagrama de Arquitetura Full-Width */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {INFRA_NODES.map((node, idx) => {
            const Icon = node.icon;
            return (
              <BorderGlow
                key={node.tag}
                backgroundColor={
                  node.featured
                    ? "rgba(11, 20, 14, 0.9)"
                    : "rgba(11, 14, 21, 0.85)"
                }
                colors={[node.color, "#B9FC01", "#38bdf8"]}
                borderRadius={24}
                innerClassName="h-full justify-between !p-6 sm:!p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="font-mono text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: node.color }}
                    >
                      {node.tag}
                    </span>
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#050608]"
                      style={{ color: node.color }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">
                    {node.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {node.desc}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
                    {node.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-200 sm:text-sm"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: node.color }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-[#050608] px-3.5 py-2.5 font-mono text-[10px] text-slate-400">
                  <span>Nó 0{idx + 1} · Conectável no Cockpit</span>
                  <span
                    className="inline-flex items-center gap-1 font-bold"
                    style={{ color: node.color }}
                  >
                    Ativo
                    {idx < 2 && <ArrowRight className="h-3 w-3" />}
                  </span>
                </div>
              </BorderGlow>
            );
          })}
        </div>
      </div>
    </section>
  );
};
