import React, { useState } from "react";
import {
  BarChart3,
  Calendar,
  Check,
  CheckCheck,
  GitBranch,
  Globe,
  Layers,
  Lock,
  Monitor,
  Moon,
  Play,
  Server,
  Sun,
} from "lucide-react";
import { CRIATIVOS_15_ROSTER } from "../../data/criativosRoster";
import { LiveCriativoMascot } from "../mascots/LiveCriativoMascot";
import { BorderGlow } from "../fx/BorderGlow";

interface Props {
  slideId: number;
}

export const Act3InsideProductSlides: React.FC<Props> = ({ slideId }) => {
  const [lightMode, setLightMode] = useState(false);
  const [studioTab, setStudioTab] = useState<"calendario" | "safezones" | "metricas">(
    "calendario"
  );
  const [runDemoStep, setRunDemoStep] = useState(0);

  if (slideId === 9) {
    return (
      <div className="w-full">
        <div className="mb-3 flex justify-end">
          <button
            type="button"
            onClick={() => setLightMode((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-5 py-2 text-sm font-bold text-white transition hover:border-[#B9FC01] active:scale-[0.97]"
          >
            {lightMode ? (
              <Moon className="h-4 w-4 text-[#B9FC01]" />
            ) : (
              <Sun className="h-4 w-4 text-blue-400" />
            )}
            {lightMode ? "Voltar ao Modo Escuro Volt" : "Testar Modo Claro Cobalt"}
          </button>
        </div>

        <div
          className={`grid gap-5 rounded-3xl border p-6 transition-colors md:grid-cols-12 ${
            lightMode
              ? "border-zinc-300 bg-[#F4F6FA] text-[#0D0D0D]"
              : "border-white/15 bg-[#0D0E13] text-white"
          }`}
        >
          <div className="rounded-2xl border border-current/15 p-5 text-left md:col-span-3">
            <img
              src={lightMode ? "/logo-criativoos-light.svg" : "/logo-criativoos-dark.svg"}
              alt="CriativoOS"
              className="h-6 w-auto"
            />
            <div className="mt-5 space-y-2.5 text-sm sm:text-base">
              <div className="font-mono text-xs font-bold opacity-60">MENU DO ESTÚDIO</div>
              {[
                "Equipe & Conversas",
                "Estúdio do Instagram",
                "Rotinas Automáticas",
                "Loja +253 Aplicativos",
                "WhatsApp & Nuvem 24h",
              ].map((item) => (
                <div key={item} className="rounded-xl bg-current/5 px-3 py-2 font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-current/15 p-5 text-left md:col-span-6">
            <div className="mx-auto mb-5 w-fit rounded-full bg-[#09090B] px-5 py-1.5 font-mono text-xs font-bold text-[#B9FC01] ring-1 ring-white/15">
              ● Barra ao Vivo · 3 especialistas trabalhando em paralelo
            </div>
            <div className="space-y-4 text-base">
              <div className="rounded-2xl border border-current/15 bg-current/5 p-4">
                <strong className={`text-lg ${lightMode ? "text-[#0031CC]" : "text-[#B9FC01]"}`}>
                  Etapa 1 · Pesquisa &amp; Planilha ao Vivo
                </strong>
                <ul className="mt-2 space-y-1 opacity-85">
                  <li>• Lendo ficha da marca e planilha da semana</li>
                  <li>• Selecionando 4 fotos reais da pasta autorizada</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-current/15 bg-current/5 p-4">
                <strong className={`text-lg ${lightMode ? "text-[#0031CC]" : "text-[#B9FC01]"}`}>
                  Etapa 2 · Entrega Pronta no Painel e Celular
                </strong>
                <ul className="mt-2 space-y-1 opacity-85">
                  <li>• Carrossel montado com logotipo e paleta</li>
                  <li>• Prévia enviada para aprovação com resposta 1</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-current/15 p-5 text-left text-sm sm:text-base md:col-span-3">
            <div className="font-mono text-xs font-bold opacity-60">PASTA DA MARCA</div>
            <div className="mt-4 space-y-2.5">
              {[
                "Fotos Reais & Logo",
                "Pastas Locais no PC",
                "Clientes 100% Isolados",
                "Memórias e Tom de Voz",
                "Cofre Local Protegido",
              ].map((t) => (
                <div key={t} className="rounded-xl border border-current/15 px-3 py-2 font-medium">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slideId === 10) {
    return (
      <div className="grid w-full gap-5 text-left md:grid-cols-3">
        {[
          {
            icon: Monitor,
            avatar: "/images/avatars/estrategista.png",
            title: "Operador Real de PC",
            bullets: [
              "Enxerga sua tela com segurança",
              "Abre pastas e preenche planilhas",
              "Opera programas locais sem erro",
            ],
            highlight: false,
          },
          {
            icon: Globe,
            avatar: "/images/avatars/inteligencia_competitiva.png",
            title: "Navegador Inteligente",
            bullets: [
              "Pesquisa concorrentes em alta",
              "Lê portais e baixa anexos",
              "Salva ideias direto na sua pasta",
            ],
            highlight: false,
          },
          {
            icon: Lock,
            avatar: "/images/avatars/consistencia_visual.png",
            title: "Pausa Segura & Cofre",
            bullets: [
              "Senhas ficam só no seu PC",
              "Pausa e chama você antes de senhas",
              "Zero ação crítica sem seu aval",
            ],
            highlight: true,
          },
        ].map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className={`relative overflow-hidden rounded-3xl border p-6 sm:p-7 ${
                card.highlight
                  ? "border-[#B9FC01]/50 bg-[#12180E]"
                  : "border-white/15 bg-[#12151D]"
              }`}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={card.avatar}
                    alt={card.title}
                    className="h-14 w-14 rounded-2xl border border-white/15 bg-black/40 object-cover object-top"
                  />
                  <h4 className="font-display text-2xl font-extrabold text-white">
                    {card.title}
                  </h4>
                </div>
                <Icon className="h-6 w-6 shrink-0 text-[#B9FC01]" />
              </div>

              <ul className="mt-5 space-y-3 text-base font-medium text-zinc-200 sm:text-lg">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#B9FC01]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }

  if (slideId === 11) {
    return (
      <div className="grid w-full gap-5 text-left md:grid-cols-3">
        <div className="rounded-3xl border border-white/15 bg-[#12151D] p-7">
          <div className="flex items-center justify-between">
            <span className="font-mono text-2xl font-extrabold text-[#B9FC01]">+253 APPS</span>
            <Layers className="h-7 w-7 text-[#B9FC01]" />
          </div>
          <h4 className="mt-3 font-display text-2xl font-extrabold text-white">
            Aplicativos Conectados
          </h4>
          <ul className="mt-4 space-y-2.5 text-base text-zinc-200 sm:text-lg">
            <li>• Google Drive, Planilhas e Gmail</li>
            <li>• Notion, Trello, ClickUp e CRM</li>
            <li>• Zero taxa extra por tarefa rodada</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/15 bg-[#12151D] p-7">
          <div className="flex items-center justify-between">
            <span className="font-mono text-2xl font-extrabold text-[#B9FC01]">AUTO PDF</span>
            <GitBranch className="h-7 w-7 text-[#B9FC01]" />
          </div>
          <h4 className="mt-3 font-display text-2xl font-extrabold text-white">
            Rotinas Semanais
          </h4>
          <ul className="mt-4 space-y-2.5 text-base text-zinc-200 sm:text-lg">
            <li>• Toda segunda às 8h sem lembrar</li>
            <li>• Analisa resultados da semana anterior</li>
            <li>• Gera PDF pronto para o seu cliente</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-[#B9FC01]/50 bg-[#12180E] p-7">
          <div className="flex items-center justify-between">
            <span className="font-mono text-2xl font-extrabold text-[#B9FC01]">24H / DIA</span>
            <Server className="h-7 w-7 text-[#B9FC01]" />
          </div>
          <h4 className="mt-3 font-display text-2xl font-extrabold text-white">
            PC + Nuvem 24 Horas
          </h4>
          <ul className="mt-4 space-y-2.5 text-base text-zinc-100 sm:text-lg">
            <li>• Use no notebook Windows, Mac ou Linux</li>
            <li>• Ou conecte seu servidor na nuvem</li>
            <li>• Trabalha até com o PC desligado</li>
          </ul>
        </div>
      </div>
    );
  }

  if (slideId === 12) {
    return (
      <div className="grid w-full gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
        {CRIATIVOS_15_ROSTER.map((spec) => (
          <div
            key={spec.id}
            className="flex items-center gap-3 rounded-2xl border border-white/15 bg-[#12151D] p-4 text-left transition hover:border-[#B9FC01]/50"
          >
            <LiveCriativoMascot
              shape={spec.shape}
              color={spec.color}
              size={46}
              label={spec.nome}
            />
            <div className="min-w-0">
              <div className="text-sm font-extrabold leading-tight text-white sm:text-base">
                {spec.nome}
              </div>
              <div className="mt-1 font-mono text-xs font-bold text-[#B9FC01]">
                {spec.tierLabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (slideId === 13) {
    const steps = [
      "1. Pedido Único: 'Monte a campanha da oferta de sexta com minhas fotos e atualize a planilha.'",
      "2. Estrategista + Copywriter pesquisam no navegador e escrevem os 7 slides e legenda.",
      "3. Guardião do Rosto Real busca suas fotos oficiais e trava traços, logotipo e paleta.",
      "4. Mestre de Carrosséis gera tudo pronto, salva no Drive e manda no WhatsApp para responder [1]!",
    ];
    return (
      <div className="grid w-full items-stretch gap-6 text-left lg:grid-cols-12">
        <div className="flex flex-col justify-between rounded-3xl border border-white/15 bg-[#12151D] p-6 sm:p-7 lg:col-span-7">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="font-display text-xl font-extrabold text-white sm:text-2xl">
              Passo a Passo Ao Vivo
            </div>
            <button
              type="button"
              onClick={() => setRunDemoStep((prev) => (prev + 1) % steps.length)}
              className="volt-button inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition active:scale-[0.97] sm:text-sm"
            >
              <Play className="h-4 w-4" />
              Avançar ({runDemoStep + 1}/{steps.length})
            </button>
          </div>

          <div className="mt-5 space-y-3">
            {steps.map((s, idx) => {
              const active = idx <= runDemoStep;
              return (
                <div
                  key={s}
                  className={`rounded-2xl border p-4 text-base font-medium leading-snug transition-all sm:text-lg ${
                    active
                      ? "border-[#B9FC01]/65 bg-[#151D0E] text-white"
                      : "border-white/5 bg-white/[0.02] text-zinc-500"
                  }`}
                >
                  {s}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#B9FC01]/35 bg-[#0D1017] p-4 lg:col-span-5">
          <img
            src="/images/criativo-ia-operacao-v1-dark.webp"
            alt="Exemplo de criação produzida pelo CriativoOS"
            className="h-64 w-full rounded-2xl object-cover sm:h-80"
          />
          <div className="mt-3 flex items-center justify-between px-2 font-mono text-xs font-bold text-[#B9FC01]">
            <span>SAÍDA REAL DO ESTÚDIO</span>
            <span className="text-zinc-300">Rosto Real + Marca Presos</span>
          </div>
        </div>
      </div>
    );
  }

  if (slideId === 14) {
    return (
      <div className="w-full rounded-3xl border border-white/15 bg-[#12151D] p-6 sm:p-8">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { id: "calendario", label: "Calendário Visual do Mês", icon: Calendar },
            { id: "safezones", label: "Espaço Livre nos Stories & Feed", icon: Layers },
            { id: "metricas", label: "Resultados Reais do Perfil", icon: BarChart3 },
          ].map((t) => {
            const Icon = t.icon;
            const active = studioTab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setStudioTab(t.id as typeof studioTab)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold transition active:scale-[0.97] ${
                  active ? "bg-[#B9FC01] text-[#0D0D0D]" : "bg-white/[0.07] text-zinc-200 hover:bg-white/[0.14]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-[#0B0C10] p-6 text-left">
          {studioTab === "calendario" && (
            <div className="grid gap-4 text-base sm:grid-cols-3">
              {[
                { day: "SEGUNDA", txt: "Carrossel 4:5 com seu rosto real", st: "Aprovado no WhatsApp" },
                { day: "QUARTA", txt: "Vídeo vertical Reels com legenda animada", st: "Agendado na grade" },
                { day: "SEXTA", txt: "Anúncio direto para sua oferta", st: "Aguardando seu [1]" },
              ].map((card) => (
                <div key={card.day} className="rounded-2xl border border-[#B9FC01]/35 bg-[#141A0F] p-5">
                  <div className="font-mono text-xs font-bold text-[#B9FC01]">{card.day}</div>
                  <div className="mt-2 font-display text-lg font-extrabold text-white">{card.txt}</div>
                  <div className="mt-2 text-sm text-zinc-300">{card.st}</div>
                </div>
              ))}
            </div>
          )}

          {studioTab === "safezones" && (
            <div className="grid items-center gap-5 text-base sm:grid-cols-12">
              <div className="space-y-4 sm:col-span-8">
                <div className="rounded-2xl border border-white/10 bg-[#14161E] p-5">
                  <div className="font-mono text-sm font-bold text-[#B9FC01]">
                    FEED &amp; CARROSSEL · GRADE PERFEITA
                  </div>
                  <p className="mt-1.5 text-zinc-200">
                    Enquadramento limpo que aparece inteiro na grade do seu perfil sem cortar títulos.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#14161E] p-5">
                  <div className="font-mono text-sm font-bold text-[#B9FC01]">
                    STORIES &amp; REELS · ÁREA LIVRE AUTOMÁTICA
                  </div>
                  <p className="mt-1.5 text-zinc-200">
                    Respeita o topo do perfil e deixa espaço limpo embaixo para enquetes, caixinhas e links.
                  </p>
                </div>
              </div>
              <div className="flex justify-center sm:col-span-4">
                <img
                  src="/images/criativo-ia-stories.webp"
                  alt="Exemplo de Stories com área livre"
                  className="h-60 w-auto rounded-2xl border border-[#B9FC01]/40 object-cover shadow-xl"
                />
              </div>
            </div>
          )}

          {studioTab === "metricas" && (
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#14161E] p-5">
                <div className="text-sm font-semibold text-zinc-400">Salvamentos Médios</div>
                <div className="mt-1 font-display text-4xl font-extrabold text-[#B9FC01]">+42%</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#14161E] p-5">
                <div className="text-sm font-semibold text-zinc-400">Leitura Direta</div>
                <div className="mt-1 font-display text-3xl font-extrabold text-white">Dados Oficiais</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#14161E] p-5">
                <div className="text-sm font-semibold text-zinc-400">Ciclo Inteligente</div>
                <div className="mt-1 text-base font-bold text-zinc-100">
                  Analista sugere as ideias vencedoras da próxima semana
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="grid w-full gap-5 text-left md:grid-cols-3">
      <BorderGlow
        backgroundColor="rgba(16, 23, 14, 0.92)"
        colors={["#B9FC01", "#31cf76", "#38bdf8"]}
        borderRadius={24}
        innerClassName="!p-7"
      >
        <div className="font-mono text-xs font-bold text-[#B9FC01]">NO SEU PRÓPRIO WHATSAPP</div>
        <h4 className="mt-3 font-display text-2xl font-extrabold text-white">
          Responda [1] da Rua
        </h4>
        <ul className="mt-4 space-y-2.5 text-base text-zinc-200 sm:text-lg">
          <li>• Peça tarefas ou posts por áudio</li>
          <li>• Receba a prévia no celular</li>
          <li>• Responda [1] para aprovar na hora</li>
        </ul>
      </BorderGlow>

      <div className="rounded-3xl border border-white/15 bg-[#12151D] p-7">
        <div className="font-mono text-xs font-bold text-zinc-400">BARRA RÁPIDA NA TELA</div>
        <h4 className="mt-3 font-display text-2xl font-extrabold text-white">
          Sempre à Mão em 1 Clique
        </h4>
        <ul className="mt-4 space-y-2.5 text-base text-zinc-200 sm:text-lg">
          <li>• Janela discreta no canto da tela</li>
          <li>• Acompanhe tarefas em andamento</li>
          <li>• Acione sua equipe sem trocar de aba</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-white/15 bg-[#12151D] p-7">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#B9FC01]">
          <CheckCheck className="h-4 w-4" /> CONTROLE HUMANO
        </div>
        <h4 className="mt-3 font-display text-2xl font-extrabold text-white">
          Nada Sem Seu Aval
        </h4>
        <ul className="mt-4 space-y-2.5 text-base text-zinc-200 sm:text-lg">
          <li>• Publicações esperam seu OK</li>
          <li>• Logins e senhas chamam você</li>
          <li>• 100% seguro no seu computador</li>
        </ul>
      </div>
    </div>
  );
};
