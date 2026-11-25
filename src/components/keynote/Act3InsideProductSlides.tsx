import React, { useState } from "react";
import {
  BarChart3,
  Calendar,
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
      <div className="mx-auto max-w-5xl">
        <div className="mb-3 flex justify-end">
          <button
            type="button"
            onClick={() => setLightMode((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold text-white hover:border-white/35"
          >
            {lightMode ? (
              <Moon className="h-3.5 w-3.5 text-[#B9FC01]" />
            ) : (
              <Sun className="h-3.5 w-3.5 text-blue-400" />
            )}
            {lightMode
              ? "Voltar ao Modo Escuro Volt"
              : "Testar Modo Claro Cobalt"}
          </button>
        </div>

        <div
          className={`grid gap-4 rounded-3xl border p-5 transition-colors md:grid-cols-12 ${
            lightMode
              ? "border-zinc-300 bg-[#F4F6FA] text-[#0D0D0D]"
              : "border-white/15 bg-[#0D0D0D] text-white"
          }`}
        >
          <div className="rounded-2xl border border-current/10 p-4 text-left md:col-span-3">
            <img
              src={lightMode ? "/logo-criativoos-light.svg" : "/logo-criativoos-dark.svg"}
              alt="CriativoOS"
              className="h-5 w-auto"
            />
            <div className="mt-4 space-y-2 text-xs">
              <div className="font-mono text-[10px] opacity-60">MENU DO ESTÚDIO</div>
              {[
                "Equipe & Conversas",
                "Estúdio do Instagram",
                "Rotinas Automáticas",
                "Loja +253 Aplicativos",
                "WhatsApp & Nuvem 24h",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-current/5 px-2.5 py-1.5 font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-current/10 p-4 text-left md:col-span-6">
            <div className="mx-auto mb-4 w-fit rounded-full bg-[#09090B] px-4 py-1 font-mono text-[10px] text-[#B9FC01] ring-1 ring-white/10">
              ● Barra de Atividade ao Vivo · 3 especialistas trabalhando juntos
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="rounded-xl border border-current/10 bg-current/5 p-3">
                <strong className={lightMode ? "text-[#0031CC]" : "text-[#B9FC01]"}>
                  Etapa 1 · Operação e Pesquisa ao Vivo
                </strong>
                <p className="mt-1 opacity-80">
                  Lendo ficha da marca, conferindo planilha da semana e separando suas 4 fotos reais.
                </p>
              </div>
              <div className="rounded-xl border border-current/10 bg-current/5 p-3">
                <strong className={lightMode ? "text-[#0031CC]" : "text-[#B9FC01]"}>
                  Etapa 2 · Entrega Pronta no Painel e Celular
                </strong>
                <p className="mt-1 opacity-80">
                  Carrossel montado com suas cores, legenda persuasiva e prévia enviada para sua aprovação.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-current/10 p-4 text-left text-xs md:col-span-3">
            <div className="font-mono text-[10px] opacity-60">PASTA DA MARCA</div>
            <div className="mt-3 space-y-2">
              {[
                "Fotos Reais & Logotipo",
                "Pastas Autorizadas no PC",
                "Clientes 100% Separados",
                "Memórias e Tom de Voz",
                "Cofre Local Protegido",
              ].map((t) => (
                <div key={t} className="rounded-lg border border-current/10 px-2.5 py-1.5">
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
      <div className="grid gap-5 text-left md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-[#141416] p-6">
          <Monitor className="h-7 w-7 text-[#B9FC01]" />
          <h4 className="mt-4 font-display text-lg font-bold text-white">
            Operador Real de Computador
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            Enxerga sua tela com segurança, abre suas pastas locais, preenche planilhas, organiza
            arquivos de clientes e opera programas do seu Windows, Mac ou Linux sem erro manual.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#141416] p-6">
          <Globe className="h-7 w-7 text-[#B9FC01]" />
          <h4 className="mt-4 font-display text-lg font-bold text-white">
            Navegador Inteligente
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            Abre páginas de verdade para pesquisar concorrentes, mapear temas em alta e baixar
            referências e anexos direto para a sua pasta de trabalho.
          </p>
        </div>
        <div className="rounded-3xl border border-[#B9FC01]/35 bg-[#12160F] p-6">
          <Lock className="h-7 w-7 text-[#B9FC01]" />
          <h4 className="mt-4 font-display text-lg font-bold text-white">
            Pausa Segura e Cofre Local
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-zinc-300">
            Suas senhas nunca vão para bancos públicos. Quando um site pede código no celular ou
            confirmação importante, o sistema pausa na hora e chama você para autorizar.
          </p>
        </div>
      </div>
    );
  }

  if (slideId === 11) {
    return (
      <div className="mx-auto grid max-w-5xl gap-5 text-left md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-[#141416] p-6">
          <Layers className="h-6 w-6 text-[#B9FC01]" />
          <h4 className="mt-3 font-display text-xl font-bold text-white">
            +253 Aplicativos Conectados
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            Conecte Google Drive, Planilhas, Notion, Gmail, Trello, ClickUp, WordPress e seu CRM em
            um clique, sem pagar taxa extra por cada tarefa executada.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#141416] p-6">
          <GitBranch className="h-6 w-6 text-[#B9FC01]" />
          <h4 className="mt-3 font-display text-xl font-bold text-white">
            Rotinas Visuais &amp; PDFs Semanais
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            Agende fluxos automáticos: toda segunda às 8h o sistema analisa resultados, gera ideias no
            Drive e entrega o relatório em PDF pronto para o cliente.
          </p>
        </div>
        <div className="rounded-3xl border border-[#B9FC01]/35 bg-[#12160F] p-6">
          <Server className="h-6 w-6 text-[#B9FC01]" />
          <h4 className="mt-3 font-display text-xl font-bold text-white">
            Seu PC + Servidor na Nuvem 24h
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-zinc-300">
            Trabalhe no seu notebook no dia a dia ou conecte um servidor na nuvem para manter sua
            equipe criando e respondendo 24 horas com o computador desligado.
          </p>
        </div>
      </div>
    );
  }

  if (slideId === 12) {
    return (
      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {CRIATIVOS_15_ROSTER.map((spec) => (
          <div
            key={spec.id}
            className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#141416] p-3 text-left"
          >
            <LiveCriativoMascot
              shape={spec.shape}
              color={spec.color}
              size={38}
              label={spec.nome}
            />
            <div className="min-w-0">
              <div className="text-xs font-bold leading-snug text-white">
                {spec.nome}
              </div>
              <div className="mt-0.5 font-mono text-[10px] text-[#B9FC01]">
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
      "1. Pedido Simples: 'Equipe, monte a campanha da oferta de sexta usando minhas fotos reais e atualize a planilha.'",
      "2. Estrategista + Copywriter pesquisam o tema no Navegador Inteligente e escrevem os 7 slides e a legenda.",
      "3. Guardião do Rosto Real puxa sua pasta oficial /minhas-fotos para manter fisionomia, roupas, logo e cores idênticas.",
      "4. Mestre de Carrosséis gera todas as lâminas prontas, salva no Google Drive e manda no seu WhatsApp para você responder [1]!",
    ];
    return (
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-[#141416] p-6 text-left">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="font-display text-lg font-bold text-white">
            Simulação Passo a Passo do Pedido até a Entrega Final
          </div>
          <button
            type="button"
            onClick={() => setRunDemoStep((prev) => (prev + 1) % steps.length)}
            className="volt-button inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs"
          >
            <Play className="h-3.5 w-3.5" />
            Avançar Passo ({runDemoStep + 1}/{steps.length})
          </button>
        </div>

        <div className="mt-5 space-y-2.5">
          {steps.map((s, idx) => {
            const active = idx <= runDemoStep;
            return (
              <div
                key={s}
                className={`rounded-2xl border p-4 text-sm transition-all ${
                  active
                    ? "border-[#B9FC01]/60 bg-[#151B0F] text-white"
                    : "border-white/5 bg-white/[0.02] text-zinc-500"
                }`}
              >
                {s}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (slideId === 14) {
    return (
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-[#141416] p-6">
        <div className="flex flex-wrap justify-center gap-2.5">
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
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold ${
                  active ? "bg-[#B9FC01] text-[#0D0D0D]" : "bg-white/[0.06] text-zinc-300"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-[#0D0D0D] p-6 text-left">
          {studioTab === "calendario" && (
            <div className="grid gap-3 text-xs sm:grid-cols-3">
              {[
                "Segunda · Carrossel com seu rosto (Aprovado)",
                "Quarta · Vídeo vertical Reels com legenda animada (Agendado)",
                "Sexta · Anúncio da oferta (Aguardando sua revisão)",
              ].map((card) => (
                <div key={card} className="rounded-xl border border-[#B9FC01]/35 bg-[#14180F] p-3.5">
                  <div className="font-mono text-[10px] text-[#B9FC01]">CONEXÃO OFICIAL INSTAGRAM</div>
                  <div className="mt-1 font-bold text-white">{card}</div>
                </div>
              ))}
            </div>
          )}
          {studioTab === "safezones" && (
            <div className="grid gap-4 text-xs sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-[#141416] p-4">
                <div className="font-mono text-[#B9FC01]">FEED &amp; CARROSSEL · PRÉVIA REAL</div>
                <p className="mt-1.5 text-zinc-300">
                  Enquadramento limpo que aparece inteiro na grade do seu perfil sem cortar títulos nas
                  bordas.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#141416] p-4">
                <div className="font-mono text-[#B9FC01]">STORIES &amp; REELS · ESPAÇO LIVRE</div>
                <p className="mt-1.5 text-zinc-300">
                  Margem automática respeitando o nome do perfil no topo e deixando espaço livre para suas
                  enquetes, caixinhas e links embaixo.
                </p>
              </div>
            </div>
          )}
          {studioTab === "metricas" && (
            <div className="grid gap-3 text-xs sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-[#141416] p-3.5">
                <div className="text-zinc-400">Salvamentos Médios</div>
                <div className="mt-1 font-display text-2xl font-bold text-[#B9FC01]">+42%</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#141416] p-3.5">
                <div className="text-zinc-400">Leitura Direta</div>
                <div className="mt-1 font-display text-2xl font-bold text-white">Dados Oficiais</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#141416] p-3.5">
                <div className="text-zinc-400">Ciclo Inteligente</div>
                <div className="mt-1 text-zinc-200">Analista sugere as melhores ideias para próxima semana</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5 text-left md:grid-cols-3">
      <div className="rounded-3xl border border-[#B9FC01]/40 bg-[#12160F] p-6">
        <div className="font-mono text-xs text-[#B9FC01]">NO SEU PRÓPRIO WHATSAPP</div>
        <h4 className="mt-2 font-display text-lg font-bold text-white">
          Responda [1] e Aprove da Rua
        </h4>
        <p className="mt-2 text-xs text-zinc-300">
          Receba carrosséis, vídeos ou relatórios no celular, peça ajustes respondendo [2] ou dê ordens
          por áudio sem precisar abrir o notebook.
        </p>
      </div>
      <div className="rounded-3xl border border-white/10 bg-[#141416] p-6">
        <div className="font-mono text-xs text-zinc-400">BARRA RÁPIDA NA TELA</div>
        <h4 className="mt-2 font-display text-lg font-bold text-white">
          Sempre à Mão em 1 Clique
        </h4>
        <p className="mt-2 text-xs text-zinc-300">
          Deixe a janelinha discreta no canto da tela para acompanhar tarefas em andamento ou acionar sua
          equipe enquanto trabalha em outros programas.
        </p>
      </div>
      <div className="rounded-3xl border border-white/10 bg-[#141416] p-6">
        <div className="flex items-center gap-2 font-mono text-xs text-[#B9FC01]">
          <CheckCheck className="h-4 w-4" /> CONTROLE HUMANO
        </div>
        <h4 className="mt-2 font-display text-lg font-bold text-white">
          Nada Vai ao Ar Sem Seu Aval
        </h4>
        <p className="mt-2 text-xs text-zinc-300">
          Seja uma publicação no Instagram, um envio importante ou um login no navegador, você tem a
          palavra final antes de executar.
        </p>
      </div>
    </div>
  );
};
