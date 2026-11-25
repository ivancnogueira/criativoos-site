import React from "react";
import { AlertTriangle, Check, Cpu, Globe, Layers, ShieldCheck, Smartphone, X } from "lucide-react";
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
            <div className="font-mono text-xs text-[#B9FC01]">01 · NO SEU PC &amp; NUVEM</div>
            <div className="mt-1 text-sm font-bold text-white">
              Opera Seu Computador &amp; +253 Apps
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Abre pastas e planilhas, pesquisa na internet e roda rotinas automáticas no PC ou na nuvem 24h.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="font-mono text-xs text-[#B9FC01]">02 · EQUIPE CRIATIVA COMPLETA</div>
            <div className="mt-1 text-sm font-bold text-white">
              15 Especialistas Com Seu Rosto Real
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Carrosséis, posts de feed, stories com espaço livre, anúncios, PDFs e vídeos para Reels.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="font-mono text-xs text-[#B9FC01]">03 · NO SEU BOLSO</div>
            <div className="mt-1 text-sm font-bold text-white">
              Comande e Aprove no WhatsApp
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Peça tarefas ou posts pelo celular, receba pronto na tela e responda 1 para confirmar.
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
            A DOR DIÁRIA QUE CONSOME SEU TEMPO E DINHEIRO
          </div>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {[
              "Passar a semana trocando entre 10 abas para pedir texto, abrir o Canva, organizar pastas e atualizar planilhas na mão.",
              "Pagar várias assinaturas em dólar que travam sua criação assim que os créditos acabam no meio do mês.",
              "Gerar imagens artificiais sem o seu rosto, sem o seu logotipo e com visual que não passa confiança.",
              "Depender de freelancers ou agências lentas cobrando R$ 3.000+ por mês para entregar o básico dias depois.",
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
            A LIBERDADE COM O CRIATIVOOS
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-200">
            Em vez de ferramentas soltas fora do seu computador, você instala um{" "}
            <strong>Sistema Operacional Autônomo completo</strong> que controla suas tarefas no PC,
            conecta seus aplicativos do trabalho, pesquisa concorrentes na internet e usa{" "}
            <strong>15 Criativos</strong> que conhecem suas fotos reais para entregar tudo pronto no
            seu WhatsApp.
          </p>
          <div className="mt-5 rounded-2xl border border-[#B9FC01]/25 bg-black/30 p-4 font-mono text-xs text-[#B9FC01]">
            O que antes levava de 5 a 7 dias picotados passa a rodar em 1 hora no mesmo painel.
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
              {isMig ? "Ciclo Anterior Encerrado" : "Modelo Antigo Picotado"}
            </div>
            <div className="mt-2 font-display text-xl font-bold text-zinc-400 line-through">
              {isMig ? "Criativo AI Studio (Versão Antiga)" : "Ferramentas soltas e caras"}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-zinc-400">
              {isMig
                ? "Cumpriu seu papel na 1ª Imersão e não receberá mais novas atualizações nem os novos motores da plataforma daqui para frente."
                : "Exigia pagar várias assinaturas em dólar, não mexia nos arquivos do seu PC e não tinha calendário visual nem equipe conectada."}
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
              Aplicativo completo com instalador em 2 cliques para Windows, Mac e Linux (ou servidor
              24h na nuvem), Operador de PC, Navegador Inteligente, +253 apps, 15 Criativos e comando
              direto pelo WhatsApp.
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
            icon: Cpu,
            t: "Opera Seu PC e Apps",
            d: "Abre pastas e planilhas na sua máquina e conecta +253 aplicativos como Drive, Notion e Gmail em rotinas automáticas.",
          },
          {
            icon: Globe,
            t: "Pesquisa na Internet",
            d: "Navegador integrado analisa concorrentes e tendências e pausa automaticamente pedindo você antes de qualquer senha.",
          },
          {
            icon: Layers,
            t: "Conteúdo Com Seu Rosto",
            d: "Os 15 Criativos usam suas fotos reais, logotipo e paleta para gerar carrosséis, feed, stories, anúncios e vídeos Reels.",
          },
          {
            icon: Smartphone,
            t: "100% Seu e no WhatsApp",
            d: "Suas senhas e arquivos ficam protegidos no seu computador ou servidor 24h, e você comanda tudo pelo próprio WhatsApp.",
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
          10 Inteligências Artificiais Gratuitas Inclusas
        </h4>
        <p className="mt-2 text-sm text-zinc-300">
          Já vem pronto assim que você abre o programa para criar rotinas e conteúdos sem precisar
          cadastrar cartão de crédito nem comprar pacotes extras.
        </p>
      </div>

      <div className="rounded-3xl border border-white/15 bg-[#141416] p-6 text-left">
        <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] font-bold text-white">
          OPÇÃO 2 · USE A CONTA QUE JÁ ASSINA
        </span>
        <h4 className="mt-4 font-display text-xl font-bold text-white">
          ChatGPT, Claude, Gemini ou Grok
        </h4>
        <p className="mt-2 text-sm text-zinc-300">
          Já possui assinatura de alguma IA? Conecte com segurança no cofre do seu computador e
          coloque seus 15 especialistas e automações trabalhando no máximo.
        </p>
      </div>
    </div>
  );
};
