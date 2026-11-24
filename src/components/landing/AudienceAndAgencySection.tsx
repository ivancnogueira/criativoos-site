import React from "react";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  FileSpreadsheet,
  FolderLock,
  Layers,
  Sparkles,
  Users,
} from "lucide-react";
import { BorderGlow } from "../fx/BorderGlow";

const PROFILES = [
  {
    badge: "PERFIL 01 · INDIVIDUAL",
    title: "Criadores, Especialistas & Infoprodutores",
    image: "/images/perfis/perfil-criador.webp",
    imageAlt: "Criador e especialista produzindo conteúdo em estúdio escuro",
    icon: Sparkles,
    color: "#38bdf8",
    fit: "Plano Individual",
    summary:
      "Para médicos, advogados, consultores, infoprodutores e criadores que precisam postar todos os dias com autoridade sem depender de designer lento.",
    gains: [
      "Carrosséis, feed com rosto real e stories no padrão de estúdio",
      "Pesquisa automática de temas em alta antes de você gravar ou escrever",
      "Aprova as artes direto pelo WhatsApp entre um atendimento e outro",
    ],
  },
  {
    badge: "PERFIL 02 · EMPRESAS",
    title: "Negócios Locais & Operações Comerciais",
    image: "/images/perfis/perfil-empresa.webp",
    imageAlt: "Empreendedor em escritório moderno com painel operacional escuro",
    icon: Building2,
    color: "#a855f7",
    fit: "Individual ou Agência 10",
    summary:
      "Para empresas que querem unir produção criativa de vendas com rotinas automáticas no Google Drive, planilhas, atendimento e programas do computador.",
    gains: [
      "Operador de Computador operando sistemas internos e organizando arquivos",
      "+253 aplicativos conectados em rotinas visuais sem mensalidade extra",
      "Pode rodar no PC da equipe ou em servidor na nuvem 24h por dia",
    ],
  },
  {
    badge: "PERFIL 03 · ESCALA MÁXIMA",
    title: "Agências, Social Medias & Gestores de Tráfego",
    image: "/images/perfis/perfil-agencia.webp",
    imageAlt: "Diretor criativo gerenciando múltiplas marcas em telas escuras",
    icon: Briefcase,
    color: "#B9FC01",
    fit: "Agência 10 ou Ilimitada",
    summary:
      "Para profissionais e agências que atendem múltiplas contas e querem dobrar a carteira de clientes mantendo entrega premium e margem alta.",
    gains: [
      "Pastas separadas por cliente e identidades visuais 100% isoladas",
      "Relatórios PDF executivos gerados automaticamente toda semana",
      "Estúdio de Vídeo Reels e até 5 computadores na mesma licença",
    ],
    featured: true,
  },
];

const AGENCY_PILLARS = [
  {
    icon: FolderLock,
    title: "Pastas Separadas por Cliente",
    desc: "Fotos de rosto, logotipo, paleta, tom de voz e histórico de cada cliente ficam em compartimentos isolados que nunca se misturam.",
  },
  {
    icon: FileSpreadsheet,
    title: "Relatórios PDF & Vitrines",
    desc: "O Gerador de Apresentações compila lotes semanais e métricas em relatórios prontos para enviar no WhatsApp do seu cliente.",
  },
  {
    icon: Users,
    title: "Até 5 Computadores na Equipe",
    desc: "Instale no seu notebook, na máquina da equipe de atendimento ou em servidor na nuvem 24h compartilhado para produção contínua.",
  },
  {
    icon: Layers,
    title: "Marcas Ilimitadas Sem Taxa Extra",
    desc: "No plano Agência Ilimitada você atende 10, 30 ou 50+ clientes pagantes sem custo adicional por perfil cadastrado.",
  },
];

export const AudienceAndAgencySection: React.FC = () => {
  return (
    <section
      id="para-quem-e"
      className="relative border-t border-white/[0.06] bg-[#07090D] py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              // 05 · PARA QUEM É &amp; MODO AGÊNCIA
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Feito Para Quem Produz Sozinho e Para{" "}
              <span className="text-[#B9FC01]">
                Agências Que Escalam Carteira
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              Do especialista que quer recuperar 15 horas por semana até a
              agência que atende dezenas de empresas com equipe enxuta e margem
              previsível.
            </p>
          </div>
        </div>

        {/* 3 Perfis Compradores Full-Width */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PROFILES.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.badge}
                className={`group flex flex-col overflow-hidden rounded-3xl border transition ${
                  p.featured
                    ? "border-[#B9FC01]/45 bg-[#0A130D] shadow-[0_0_45px_rgba(185,252,1,0.08)]"
                    : "border-white/10 bg-[#0B0E15]"
                }`}
              >
                <div className="relative h-48 w-full overflow-hidden border-b border-white/10 sm:h-52">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t to-transparent ${
                      p.featured
                        ? "from-[#0A130D] via-[#0A130D]/55"
                        : "from-[#0B0E15] via-[#0B0E15]/55"
                    }`}
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="font-mono text-[10px] font-bold uppercase tracking-wider"
                        style={{ color: p.color }}
                      >
                        {p.badge}
                      </span>
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#050608]"
                        style={{ color: p.color }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {p.summary}
                    </p>

                    <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
                      {p.gains.map((g) => (
                        <li
                          key={g}
                          className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-200 sm:text-sm"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0"
                            style={{ color: p.color }}
                          />
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-[#050608] px-3.5 py-2.5 font-mono text-[11px]">
                    <span className="text-slate-400">Indicação ideal:</span>
                    <span className="font-bold" style={{ color: p.color }}>
                      {p.fit}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Destaque Full-Width: Modo Agência Multi-Cliente & Matemática */}
        <div className="mt-8">
          <BorderGlow
            backgroundColor="rgba(10, 16, 13, 0.92)"
            glowColor="76 98 50"
            colors={["#B9FC01", "#31cf76", "#38bdf8"]}
            borderRadius={26}
            innerClassName="!p-6 sm:!p-8 lg:!p-10"
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
                  Modo Agência Multi-Cliente Nativo
                </span>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
                  Atenda Múltiplas Empresas Sem Misturar Fotos, Cores ou Contratos
                </h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {AGENCY_PILLARS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-[#050608]/80 p-4"
                      >
                        <div className="flex items-center gap-2.5 font-display text-sm font-bold text-white">
                          <Icon className="h-4 w-4 shrink-0 text-[#B9FC01]" />
                          <span>{item.title}</span>
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Box Lateral de Conta Simples */}
              <div className="rounded-3xl border border-[#B9FC01]/40 bg-[#050608] p-6 shadow-[0_0_45px_rgba(185,252,1,0.12)] lg:col-span-4">
                <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#B9FC01]">
                  Conta Simples: Se Paga no 1º Mês
                </div>
                <div className="mt-3 font-display text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                  1 Único Cliente Paga o Ano Inteiro Logo No 1º Mês
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Com um contrato padrão de gestão de redes entre{" "}
                  <strong className="text-white">R$ 1.500 e R$ 2.500/mês</strong>,
                  você quita sua licença anual completa em semanas. Os outros 11
                  meses e todos os novos clientes entram como margem líquida no
                  seu caixa.
                </p>
                <a
                  href="#planos"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#B9FC01] px-4 py-3 font-display text-sm font-extrabold text-[#050608] transition hover:brightness-110"
                >
                  Comparar Planos Individual e Agência
                </a>
              </div>
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
};
