import React from "react";
import { AlertTriangle, Check, Cpu, Globe, Layers, Smartphone, X, Zap } from "lucide-react";
import { CriativosChorusStage } from "../mascots/CriativosChorusStage";
import { BorderGlow } from "../fx/BorderGlow";
import type { KeynoteEdition } from "../../data/keynoteSlidesData";

interface Props {
  slideId: number;
  edition: KeynoteEdition;
}

export const Act1MarketVisionSlides: React.FC<Props> = ({ slideId, edition }) => {
  const isMig = edition === "migration";

  if (slideId === 1) {
    return (
      <div className="grid w-full items-center gap-6 text-left lg:grid-cols-12">
        {/* Esquerda: 3 Mega-Cards de Bullets + Mascotes */}
        <div className="space-y-4 lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/15 bg-[#12151C]/90 p-5 backdrop-blur-xl">
              <div className="font-mono text-xs font-bold text-[#B9FC01]">01 · PC &amp; NUVEM</div>
              <h3 className="mt-2 font-display text-lg font-extrabold text-white sm:text-xl">
                Opera Tudo Para Você
              </h3>
              <ul className="mt-2.5 space-y-1.5 text-sm leading-snug text-slate-200 sm:text-base">
                <li>• Abre pastas e planilhas</li>
                <li>• Conecta +253 aplicativos</li>
                <li>• Roda 24h na nuvem</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#B9FC01]/35 bg-[#131810]/90 p-5 backdrop-blur-xl">
              <div className="font-mono text-xs font-bold text-[#B9FC01]">02 · EQUIPE 15 IA</div>
              <h3 className="mt-2 font-display text-lg font-extrabold text-white sm:text-xl">
                Seu Rosto Real
              </h3>
              <ul className="mt-2.5 space-y-1.5 text-sm leading-snug text-slate-200 sm:text-base">
                <li>• Carrosséis, Feed e Stories</li>
                <li>• Anúncios e PDFs</li>
                <li>• Vídeos para Reels</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/15 bg-[#12151C]/90 p-5 backdrop-blur-xl">
              <div className="font-mono text-xs font-bold text-[#B9FC01]">03 · NO BOLSO</div>
              <h3 className="mt-2 font-display text-lg font-extrabold text-white sm:text-xl">
                100% no WhatsApp
              </h3>
              <ul className="mt-2.5 space-y-1.5 text-sm leading-snug text-slate-200 sm:text-base">
                <li>• Peça tarefas por áudio</li>
                <li>• Receba prévia no celular</li>
                <li>• Responda 1 e publique</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101218]/90 px-4 py-3">
            <CriativosChorusStage compact />
          </div>
        </div>

        {/* Direita: Palco Cyberpunk 3D Cinematográfico */}
        <div className="relative flex min-h-[340px] items-end justify-center overflow-hidden rounded-3xl border border-[#B9FC01]/35 bg-[#0B0E14] px-4 pt-6 sm:min-h-[390px] lg:col-span-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(185,252,1,0.28),transparent_65%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#090A0D] via-[#090A0D]/70 to-transparent z-20" />

          <img
            src="/images/avatars/estrategista.png"
            alt="Estrategista Editorial"
            className="relative z-10 -mr-12 h-56 w-auto object-contain opacity-85 sm:h-64"
          />
          <img
            src="/images/hero-cyber-operator-v2.png"
            alt="Operadora Cyber CriativoOS"
            className="relative z-20 h-72 w-auto object-contain drop-shadow-[0_0_32px_rgba(185,252,1,0.3)] sm:h-84"
          />
          <img
            src="/images/avatars/editor_video.png"
            alt="Editor de Vídeos Reels"
            className="relative z-10 -ml-12 h-56 w-auto object-contain opacity-85 sm:h-64"
          />
        </div>
      </div>
    );
  }

  if (slideId === 2) {
    return (
      <div className="grid w-full gap-6 text-left lg:grid-cols-2">
        <div className="rounded-3xl border border-red-500/35 bg-[#171012]/95 p-7 sm:p-9">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-3.5 py-1 font-mono text-xs font-bold text-red-400">
            <AlertTriangle className="h-4 w-4" />
            O CAOS DIÁRIO DO JEITO ANTIGO
          </div>
          <ul className="mt-6 space-y-4 text-base font-medium leading-snug text-slate-200 sm:text-lg xl:text-xl">
            {[
              "10 abas abertas: texto num site, Canva no outro, planilha na mão.",
              "Assinaturas em dólar que travam seus créditos no meio do mês.",
              "Fotos artificiais que mudam seu rosto e não passam autoridade.",
              "Agências ou freelancers cobrando R$ 3.000+/mês e demorando dias.",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <X className="mt-1 h-5 w-5 shrink-0 text-red-400" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <BorderGlow
          backgroundColor="rgba(16, 22, 14, 0.94)"
          colors={["#B9FC01", "#31cf76", "#38bdf8"]}
          borderRadius={24}
          innerClassName="flex h-full flex-col justify-between !p-7 sm:!p-9"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#B9FC01]/15 px-3.5 py-1 font-mono text-xs font-bold text-[#B9FC01]">
              <Check className="h-4 w-4" />
              A VIRADA COM O CRIATIVOOS
            </div>
            <ul className="mt-6 space-y-4 text-base font-medium leading-snug text-slate-100 sm:text-lg xl:text-xl">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[#B9FC01]" />
                <span>Um único sistema instalado direto no seu PC ou Nuvem 24h.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[#B9FC01]" />
                <span>Opera pastas, planilhas, navegador e +253 apps do trabalho.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[#B9FC01]" />
                <span>15 Criativos usam suas fotos reais e mandam tudo no WhatsApp.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#B9FC01]/35 bg-black/45 px-5 py-4">
            <div className="flex items-center gap-2 font-mono text-sm font-bold text-[#B9FC01] sm:text-base">
              <Zap className="h-5 w-5" />
              DE 5 A 7 DIAS PARA 1 HORA
            </div>
            <span className="text-sm font-semibold text-slate-300">
              Operação + Conteúdo no mesmo lugar
            </span>
          </div>
        </BorderGlow>
      </div>
    );
  }

  if (slideId === 3) {
    return (
      <div className="grid w-full items-center gap-6 text-left lg:grid-cols-12">
        <div className="grid gap-5 md:grid-cols-2 lg:col-span-8">
          <div className="rounded-3xl border border-zinc-700/70 bg-[#121318] p-7">
            <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs font-bold uppercase text-zinc-400">
              {isMig ? "Ciclo Encerrado" : "Modelo Antigo"}
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-zinc-400 line-through sm:text-3xl">
              {isMig ? "Criativo AI Studio (Legado)" : "Ferramentas soltas na web"}
            </h3>
            <ul className="mt-5 space-y-3 text-base text-zinc-400 sm:text-lg">
              <li>• {isMig ? "Sem novas atualizações daqui para frente" : "Presas fora do seu computador"}</li>
              <li>• {isMig ? "Dependia de configurações manuais" : "Cobrança por créditos em dólar"}</li>
              <li>• Sem painel visual completo nem Nuvem 24h</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#B9FC01]/60 bg-[#141A0F] p-7 shadow-[0_0_45px_rgba(185,252,1,0.12)]">
            <span className="rounded-full bg-[#B9FC01] px-3 py-1 font-mono text-xs font-bold uppercase text-[#050608]">
              Nova Geração Definitiva
            </span>
            <h3 className="mt-4 font-display text-2xl font-extrabold text-white sm:text-3xl">
              Novo CriativoOS
            </h3>
            <ul className="mt-5 space-y-3 text-base font-medium text-zinc-100 sm:text-lg">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 shrink-0 text-[#B9FC01]" />
                Instalador em 2 cliques (Win, Mac, Linux)
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 shrink-0 text-[#B9FC01]" />
                Operador de PC + Navegador + 253 Apps
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 shrink-0 text-[#B9FC01]" />
                15 Criativos + Estúdio Reels + WhatsApp
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex h-72 items-end justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#0D1017] pt-4 sm:h-80 lg:col-span-4">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(185,252,1,0.24),transparent_68%)]" />
          <img
            src="/images/hero-cyber-operator-v2.png"
            alt="CriativoOS Nova Geração"
            className="relative z-10 h-72 w-auto object-contain sm:h-80"
          />
        </div>
      </div>
    );
  }

  if (slideId === 4) {
    return (
      <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: Cpu,
            tag: "TRABALHO NO PC",
            t: "Opera Seu Computador",
            bullets: [
              "Abre pastas locais e organiza arquivos de clientes",
              "Preenche planilhas e opera programas com segurança",
            ],
          },
          {
            icon: Globe,
            tag: "PESQUISA REAL",
            t: "Navegador Inteligente",
            bullets: [
              "Analisa concorrentes e temas em alta ao vivo",
              "Pausa e chama você antes de qualquer senha",
            ],
          },
          {
            icon: Layers,
            tag: "PRODUÇÃO VISUAL",
            t: "15 Criativos + Reels",
            bullets: [
              "Preserva seu rosto real, logo e cores da marca",
              "Gera carrosséis, feed, stories, anúncios e vídeos",
            ],
          },
          {
            icon: Smartphone,
            tag: "AUTOMAÇÃO 24H",
            t: "+253 Apps & WhatsApp",
            bullets: [
              "Conecta Drive, Notion, Gmail e roda na nuvem 24h",
              "Você pede por áudio e aprova respondendo 1",
            ],
          },
        ].map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.t}
              className="flex flex-col justify-between rounded-3xl border border-white/15 bg-[#12151D] p-6 text-left sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#B9FC01]">{card.tag}</span>
                  <Icon className="h-7 w-7 text-[#B9FC01]" />
                </div>
                <h4 className="mt-4 font-display text-xl font-extrabold text-white sm:text-2xl">
                  {card.t}
                </h4>
                <ul className="mt-4 space-y-2.5 text-base leading-snug text-zinc-200">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#B9FC01]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid w-full gap-6 text-left md:grid-cols-2">
      <div className="rounded-3xl border border-[#B9FC01]/50 bg-[#12180E] p-7 sm:p-9">
        <span className="rounded-full bg-[#B9FC01] px-3.5 py-1 font-mono text-xs font-extrabold text-[#0D0D0D]">
          OPÇÃO 1 · CUSTO ZERO POR FORA
        </span>
        <h4 className="mt-5 font-display text-2xl font-extrabold text-white sm:text-3xl">
          10 Inteligências Artificiais Gratuitas Inclusas
        </h4>
        <ul className="mt-5 space-y-3 text-base font-medium text-zinc-200 sm:text-lg">
          <li className="flex items-start gap-2.5">
            <Check className="mt-1 h-5 w-5 shrink-0 text-[#B9FC01]" />
            Já vem pronto para criar textos, rotinas e imagens na hora
          </li>
          <li className="flex items-start gap-2.5">
            <Check className="mt-1 h-5 w-5 shrink-0 text-[#B9FC01]" />
            Zero necessidade de cadastrar cartão ou comprar créditos extras
          </li>
        </ul>
      </div>

      <div className="rounded-3xl border border-white/15 bg-[#12151C] p-7 sm:p-9">
        <span className="rounded-full bg-white/10 px-3.5 py-1 font-mono text-xs font-extrabold text-white">
          OPÇÃO 2 · CONECTE A SUA CONTA ATUAL
        </span>
        <h4 className="mt-5 font-display text-2xl font-extrabold text-white sm:text-3xl">
          ChatGPT, Claude, Gemini ou Grok
        </h4>
        <ul className="mt-5 space-y-3 text-base font-medium text-zinc-200 sm:text-lg">
          <li className="flex items-start gap-2.5">
            <Check className="mt-1 h-5 w-5 shrink-0 text-[#B9FC01]" />
            Conecte a assinatura que você já paga com proteção no cofre local
          </li>
          <li className="flex items-start gap-2.5">
            <Check className="mt-1 h-5 w-5 shrink-0 text-[#B9FC01]" />
            Alterne modelos a qualquer momento sem perder histórico da marca
          </li>
        </ul>
      </div>
    </div>
  );
};
