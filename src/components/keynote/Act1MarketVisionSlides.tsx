import React from "react";
import { AlertTriangle, Check, Cpu, Layers, ShieldCheck, X } from "lucide-react";
import { CriativosChorusStage } from "../mascots/CriativosChorusStage";
import type { KeynoteEdition } from "../../data/keynoteSlidesData";

interface Props {
  slideId: number;
  edition: KeynoteEdition;
}

export const Act1MarketVisionSlides: React.FC<Props> = ({ slideId, edition }) => {
  const isMig = edition === "migration";

  if (slideId === 1) {
    return (
      <div className="space-y-6">
        <CriativosChorusStage compact />
        <div className="mx-auto grid max-w-4xl gap-3 text-left sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="font-mono text-xs text-[#B9FC01]">01 · NO SEU COMPUTADOR</div>
            <div className="mt-1 text-sm font-bold text-white">
              Instale em 1 Minuto
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Funciona no Windows, Mac e Linux sem códigos nem complicações.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="font-mono text-xs text-[#B9FC01]">02 · EQUIPE COMPLETA</div>
            <div className="mt-1 text-sm font-bold text-white">
              Até 15 Criativos Especialistas
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Planejamento, copy, carrosséis, posts com seu rosto, stories e vídeos.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="font-mono text-xs text-[#B9FC01]">03 · NO SEU BOLSO</div>
            <div className="mt-1 text-sm font-bold text-white">
              Peça e Aprove no WhatsApp
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Você recebe a arte pronta no celular e responde 1 para publicar.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (slideId === 2) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-red-500/25 bg-[#151011] p-6 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-red-400">
            <AlertTriangle className="h-4 w-4" />
            O JEITO ANTIGO QUE TRAVA VOCÊ
          </div>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {[
              "Chat de IA comum: você precisa explicar quem é sua empresa todo dia.",
              "Imagens artificiais que não têm o seu rosto nem as cores da sua marca.",
              "Plataformas em dólar que bloqueiam sua criação quando os créditos acabam.",
              "Horas perdidas copiando texto, montando no Canva e postando na mão.",
            ].map((line) => (
              <li key={line} className="flex items-start gap-2.5">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-[#B9FC01]/35 bg-[#12160F] p-6 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#B9FC01]">
            <Check className="h-4 w-4" />
            COMO O CRIATIVOOS RESOLVE
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-200">
            Em vez de usar ferramentas espalhadas, você tem uma{" "}
            <strong>Equipe de 15 Criativos</strong> instalada no seu computador
            que já conhece suas fotos reais, trabalha em conjunto e entrega a
            campanha pronta para você aprovar.
          </p>
          <div className="mt-5 rounded-2xl border border-[#B9FC01]/25 bg-black/30 p-4 font-mono text-xs text-[#B9FC01]">
            Resultado: 30 dias de conteúdo profissional feitos em uma única tarde.
          </div>
        </div>
      </div>
    );
  }

  if (slideId === 3) {
    return (
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-[#141416] p-7">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="rounded-2xl border border-zinc-700/70 bg-black/40 p-5 text-left">
            <div className="font-mono text-[11px] uppercase text-zinc-500">
              {isMig ? "Ciclo Anterior Encerrado" : "Modelo Antigo"}
            </div>
            <div className="mt-2 font-display text-xl font-bold text-zinc-400 line-through">
              {isMig ? "Criativo AI Studio (Versão Antiga)" : "Ferramentas complicadas"}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-zinc-400">
              {isMig
                ? "Cumpriu seu papel histórico e não receberá mais novas atualizações ou novos recursos daqui para frente."
                : "Exigia configurações manuais demoradas e não tinha painel visual próprio nem calendário do Instagram."}
            </p>
          </div>

          <div className="rounded-2xl border border-[#B9FC01]/60 bg-[#151A0F] p-5 text-left">
            <div className="font-mono text-[11px] uppercase text-[#B9FC01]">
              Nova Geração Definitiva
            </div>
            <div className="mt-2 font-display text-2xl font-bold text-white">
              Novo CriativoOS
            </div>
            <p className="mt-3 text-xs leading-relaxed text-zinc-200">
              Programa completo com instalador em 2 cliques, painel visual
              intuitivo, 15 Criativos Especialistas, Estúdio de Vídeos para
              Reels e aprovação direta pelo WhatsApp.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (slideId === 4) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: Layers,
            t: "Suas Fotos Reais",
            d: "Os 15 Criativos usam suas fotos, seu logotipo e suas cores em todas as criações.",
          },
          {
            icon: Cpu,
            t: "Trabalho em Equipe",
            d: "O Estrategista planeja, o Copywriter escreve e os Designers entregam as artes.",
          },
          {
            icon: ShieldCheck,
            t: "100% Privado no Seu PC",
            d: "Seus arquivos e fotos ficam guardados com segurança na sua própria máquina.",
          },
          {
            icon: Check,
            t: "Várias Marcas e Clientes",
            d: "Gerencie seu perfil próprio ou dezenas de clientes com pastas separadas.",
          },
        ].map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.t}
              className="rounded-2xl border border-white/10 bg-[#141416] p-5 text-left"
            >
              <Icon className="h-6 w-6 text-[#B9FC01]" />
              <h4 className="mt-3 font-display text-base font-bold text-white">
                {card.t}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{card.d}</p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
      <div className="rounded-3xl border border-[#B9FC01]/45 bg-[#12160F] p-6 text-left">
        <span className="rounded-full bg-[#B9FC01] px-3 py-1 font-mono text-[11px] font-bold text-[#0D0D0D]">
          OPÇÃO 1 · SEM GASTO EXTRA
        </span>
        <h4 className="mt-4 font-display text-xl font-bold text-white">
          10 Modelos Gratuitos Já Incluídos
        </h4>
        <p className="mt-2 text-sm text-zinc-300">
          Já vem pronto no programa via OpenCode para você produzir sem precisar
          cadastrar cartão em nenhuma ferramenta externa.
        </p>
      </div>

      <div className="rounded-3xl border border-white/15 bg-[#141416] p-6 text-left">
        <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] font-bold text-white">
          OPÇÃO 2 · USE SUA CONTA ATUAL
        </span>
        <h4 className="mt-4 font-display text-xl font-bold text-white">
          ChatGPT, Claude, Gemini ou Grok
        </h4>
        <p className="mt-2 text-sm text-zinc-300">
          Já possui assinatura de alguma IA? Conecte com 1 clique e coloque sua
          conta para alimentar todos os seus 15 Criativos.
        </p>
      </div>
    </div>
  );
};
