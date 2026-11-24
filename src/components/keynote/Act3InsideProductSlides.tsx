import React, { useState } from "react";
import {
  BarChart3,
  Calendar,
  CheckCheck,
  Chrome,
  GitBranch,
  Layers,
  Moon,
  MousePointerClick,
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
            {lightMode ? <Moon className="h-3.5 w-3.5 text-[#B9FC01]" /> : <Sun className="h-3.5 w-3.5 text-blue-400" />}
            {lightMode ? "Voltar ao Dark Volt (#B9FC01)" : "Testar Light Mode Royal Cobalt (#0031CC)"}
          </button>
        </div>

        <div
          className={`grid gap-4 rounded-3xl border p-5 transition-colors md:grid-cols-12 ${
            lightMode
              ? "border-zinc-300 bg-[#F4F6FA] text-[#0D0D0D]"
              : "border-white/15 bg-[#0D0D0D] text-white"
          }`}
        >
          <div className="rounded-2xl border border-current/10 p-4 md:col-span-3 text-left">
            <img
              src={lightMode ? "/logo-criativoos-light.svg" : "/logo-criativoos-dark.svg"}
              alt="CriativoOS"
              className="h-5 w-auto"
            />
            <div className="mt-4 space-y-2 text-xs">
              <div className="font-mono text-[10px] opacity-60">SIDEBAR DE OPERAÇÃO</div>
              {["Conversas & Equipes", "Estúdio Social Media", "Fluxos em Grafo", "Loja 253+ Apps", "WhatsApp & Voz"].map(
                (item) => (
                  <div key={item} className="rounded-lg bg-current/5 px-2.5 py-1.5 font-medium">
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-current/10 p-4 md:col-span-6 text-left">
            <div className="mx-auto mb-4 w-fit rounded-full bg-[#09090B] px-4 py-1 font-mono text-[10px] text-[#B9FC01] ring-1 ring-white/10">
              ● Dynamic Island · 3 Criativos executando em paralelo
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="rounded-xl border border-current/10 bg-current/5 p-3">
                <strong className={lightMode ? "text-[#0031CC]" : "text-[#B9FC01]"}>
                  Bloco 1 · Raciocínio ao Vivo
                </strong>
                <p className="mt-1 opacity-80">
                  Lendo ficha PDF da marca + selecionando 4 fotos reais da pasta autorizada.
                </p>
              </div>
              <div className="rounded-xl border border-current/10 bg-current/5 p-3">
                <strong className={lightMode ? "text-[#0031CC]" : "text-[#B9FC01]"}>
                  Bloco 2 · Entrega Visual + Legenda
                </strong>
                <p className="mt-1 opacity-80">
                  Carrossel 1080×1350 gerado com margem segura 10% pronto para preview.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-current/10 p-4 md:col-span-3 text-left text-xs">
            <div className="font-mono text-[10px] opacity-60">INSPETOR LATERAL</div>
            <div className="mt-3 space-y-2">
              {[
                "Configurações do Criativo",
                "Pastas Autorizadas (3)",
                "Subconversas Ativas",
                "Memórias da Marca",
                "Modelos de Backup",
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

  if (slideId === 11) {
    const steps = [
      "1. Comando Único: 'Equipe, monte campanha completa da oferta de sexta usando minhas fotos reais.'",
      "2. Estrategista + Copywriter estruturam gancho, 7 lâminas de carrossel e legenda com CTA.",
      "3. Engenheiro de Consistência 360° lê a pasta /fotos-fundador e trava traços e identidade.",
      "4. Designer de Carrosséis gera as lâminas 4:5 e envia para Aprovação Humana no Cockpit e WhatsApp!",
    ];
    return (
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-[#141416] p-6 text-left">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="font-display text-lg font-bold text-white">
            Simulação Ao Vivo de Delegação entre Criativos
          </div>
          <button
            type="button"
            onClick={() => setRunDemoStep((prev) => (prev + 1) % steps.length)}
            className="volt-button inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs"
          >
            <Play className="h-3.5 w-3.5" />
            Avançar Execução ({runDemoStep + 1}/{steps.length})
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

  if (slideId === 12) {
    return (
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-[#141416] p-6">
        <div className="flex flex-wrap justify-center gap-2.5">
          {[
            { id: "calendario", label: "Calendário Drag & Drop", icon: Calendar },
            { id: "safezones", label: "Safe Zones 4:5 e 9:16", icon: Layers },
            { id: "metricas", label: "Métricas Meta v27.0", icon: BarChart3 },
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
            <div className="grid gap-3 sm:grid-cols-3 text-xs">
              {["Seg · Carrossel 4:5 (Aprovado)", "Qua · Reel Remotion (Agendado)", "Sex · Anúncio Oferta (Em Revisão)"].map(
                (card) => (
                  <div key={card} className="rounded-xl border border-[#B9FC01]/35 bg-[#14180F] p-3.5">
                    <div className="font-mono text-[10px] text-[#B9FC01]">META API v27.0</div>
                    <div className="mt-1 font-bold text-white">{card}</div>
                  </div>
                )
              )}
            </div>
          )}
          {studioTab === "safezones" && (
            <div className="grid gap-4 sm:grid-cols-2 text-xs">
              <div className="rounded-xl border border-white/10 bg-[#141416] p-4">
                <div className="font-mono text-[#B9FC01]">FEED & CARROSSEL · 4:5 (1080×1350)</div>
                <p className="mt-1.5 text-zinc-300">
                  Grade automática de respiro 10% + corte perfeito no preview de perfil 3:4.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#141416] p-4">
                <div className="font-mono text-[#B9FC01]">STORIES & REELS · 9:16 (1080×1920)</div>
                <p className="mt-1.5 text-zinc-300">
                  Zonas seguras protegidas contra ícone de perfil superior e legenda/CTA inferior.
                </p>
              </div>
            </div>
          )}
          {studioTab === "metricas" && (
            <div className="grid gap-3 sm:grid-cols-3 text-xs">
              <div className="rounded-xl border border-white/10 bg-[#141416] p-3.5">
                <div className="text-zinc-400">Salvamentos Médios</div>
                <div className="mt-1 font-display text-2xl font-bold text-[#B9FC01]">+42%</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#141416] p-3.5">
                <div className="text-zinc-400">Alcance Orgânico</div>
                <div className="mt-1 font-display text-2xl font-bold text-white">Real Meta API</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#141416] p-3.5">
                <div className="text-zinc-400">Loop Inteligente</div>
                <div className="mt-1 text-zinc-200">Analista alimenta o Estrategista</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (slideId === 13) {
    return (
      <div className="grid gap-5 md:grid-cols-3 text-left">
        <div className="rounded-3xl border border-white/10 bg-[#141416] p-6">
          <Chrome className="h-7 w-7 text-[#B9FC01]" />
          <h4 className="mt-4 font-display text-lg font-bold text-white">
            Chromium CDP + Takeover
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            Navegador real dentro do Cockpit. Os Criativos pesquisam páginas e você pode
            assumir o mouse com 1 clique ou ensinar tarefas na TeachBar.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#141416] p-6">
          <MousePointerClick className="h-7 w-7 text-[#B9FC01]" />
          <h4 className="mt-4 font-display text-lg font-bold text-white">
            Computer Use (cua-driver)
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            Automação visual de desktop permitindo operar interfaces externas quando não há
            API disponível, com histórico seguro.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#141416] p-6">
          <Layers className="h-7 w-7 text-[#B9FC01]" />
          <h4 className="mt-4 font-display text-lg font-bold text-white">
            Loja com 253+ Apps MCP
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            Conecte Notion, ClickUp, Drive, CRM, WordPress, WooCommerce e centenas de
            ferramentas via conectores MCP confinados.
          </p>
        </div>
      </div>
    );
  }

  if (slideId === 14) {
    return (
      <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2 text-left">
        <div className="rounded-3xl border border-white/10 bg-[#141416] p-6">
          <GitBranch className="h-6 w-6 text-[#B9FC01]" />
          <h4 className="mt-3 font-display text-xl font-bold text-white">
            Workflows Visuais em Grafo
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            Ligue nós visuais: Gatilho Semanal -&gt; Analista de BI -&gt; Estrategista -&gt;
            Carrossel -&gt; Envio no WhatsApp para Aprovação Humana.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#141416] p-6">
          <CheckCheck className="h-6 w-6 text-[#B9FC01]" />
          <h4 className="mt-3 font-display text-xl font-bold text-white">
            Rotinas Agendadas + Entregáveis PDF
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            Agende relatórios automáticos em PDF executivo e planilhas editoriais sem
            precisar lembrar de abrir nenhuma ferramenta.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-3 text-left">
      <div className="rounded-3xl border border-[#B9FC01]/40 bg-[#12160F] p-6">
        <div className="font-mono text-xs text-[#B9FC01]">WHATSAPP + SELF-CHAT</div>
        <h4 className="mt-2 font-display text-lg font-bold text-white">
          Responda [1] e Publique da Rua
        </h4>
        <p className="mt-2 text-xs text-zinc-300">
          Aprove carrosséis, peça ajustes com [2] ou dê ordens pelo seu próprio número
          sem abrir o notebook.
        </p>
      </div>
      <div className="rounded-3xl border border-white/10 bg-[#141416] p-6">
        <div className="font-mono text-xs text-zinc-400">DOCK FLUTUANTE DESKTOP</div>
        <h4 className="mt-2 font-display text-lg font-bold text-white">
          Sempre à Mão em 1 Clique
        </h4>
        <p className="mt-2 text-xs text-zinc-300">
          Recolhível na lateral da tela para consultar status, disparar tarefas rápidas e
          alternar servidores.
        </p>
      </div>
      <div className="rounded-3xl border border-white/10 bg-[#141416] p-6">
        <div className="flex items-center gap-2 font-mono text-xs text-[#B9FC01]">
          <Server className="h-4 w-4" /> CRIATIVO_CLAIM
        </div>
        <h4 className="mt-2 font-display text-lg font-bold text-white">
          Multi-Servidor Local &amp; VPS 24/7
        </h4>
        <p className="mt-2 text-xs text-zinc-300">
          Pareie quantas máquinas/VPS sua licença liberar mantendo memória e credenciais
          isoladas por marca.
        </p>
      </div>
    </div>
  );
};
