import React from "react";
import {
  CheckCircle2,
  Cpu,
  Download,
  Instagram,
  Laptop,
  MessageSquare,
  MonitorPlay,
  Upload,
} from "lucide-react";

interface Props {
  slideId: number;
}

export const Act2InstallOnboardingSlides: React.FC<Props> = ({ slideId }) => {
  if (slideId === 6) {
    return (
      <div className="w-full space-y-6">
        <div className="mx-auto flex w-fit flex-wrap items-center justify-center gap-2.5 rounded-2xl border border-[#B9FC01]/50 bg-[#12180E] px-6 py-3.5 text-sm font-bold text-[#B9FC01] sm:text-base">
          <MonitorPlay className="h-5 w-5 shrink-0" />
          <span>
            PAUSA AO VIVO NA LIVE: instalando do zero em 1 minuto direto na tela
          </span>
        </div>

        <div className="grid w-full gap-5 md:grid-cols-3">
          {[
            {
              os: "Windows",
              file: "Instalador Padrão (.exe)",
              bullets: [
                "Dois cliques como qualquer programa comum",
                "Atualizações automáticas sem reinstalar",
              ],
            },
            {
              os: "Mac (M1/M2/M3/M4 e Intel)",
              file: "Instalador Universal (.dmg)",
              bullets: [
                "Velocidade nativa em MacBook e iMac",
                "Zero linha de comando ou tela preta",
              ],
            },
            {
              os: "Linux & Nuvem 24h",
              file: "Versão Portátil (.AppImage) + VPS",
              bullets: [
                "Roda direto no computador Linux",
                "Conecta servidor na nuvem para rodar 24h",
              ],
            },
          ].map((item) => (
            <div
              key={item.os}
              className="rounded-3xl border border-white/15 bg-[#12151D] p-7 text-left"
            >
              <div className="flex items-center justify-between">
                <Laptop className="h-7 w-7 text-[#B9FC01]" />
                <Download className="h-5 w-5 text-zinc-400" />
              </div>
              <h4 className="mt-4 font-display text-2xl font-extrabold text-white">
                {item.os}
              </h4>
              <div className="mt-1 font-mono text-sm font-semibold text-[#B9FC01]">
                {item.file}
              </div>
              <ul className="mt-4 space-y-2 text-base text-zinc-200">
                {item.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slideId === 7) {
    return (
      <div className="grid w-full items-center gap-6 text-left lg:grid-cols-12">
        <div className="rounded-3xl border border-white/15 bg-[#121318] p-7 shadow-2xl lg:col-span-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <img src="/symbol-oo-volt.svg" alt="oO" className="h-7 w-7" />
              <span className="font-display text-xl font-bold text-white">
                Ative Sua Licença CriativoOS
              </span>
            </div>
            <span className="rounded-full bg-[#B9FC01]/15 px-3.5 py-1 font-mono text-xs font-bold text-[#B9FC01]">
              Liberação na Hora
            </span>
          </div>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/50 px-5 py-4">
              <span className="block font-mono text-xs text-zinc-400">
                1. E-MAIL USADO NA COMPRA
              </span>
              <span className="mt-1 block text-lg font-semibold text-white">
                seu-email@dominio.com
              </span>
            </div>
            <div className="rounded-2xl border border-[#B9FC01]/50 bg-[#B9FC01]/5 px-5 py-4">
              <span className="block font-mono text-xs font-bold text-[#B9FC01]">
                2. CHAVE RECEBIDA POR E-MAIL
              </span>
              <span className="mt-1 block font-mono text-lg font-extrabold text-white">
                CRIA-AGIL-XXXX-XXXX-XXXX
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:col-span-6">
          {[
            {
              title: "Individual · 2 Marcas / 2 PCs",
              desc: "9 Criativos Base + Operador de PC + Navegador + 253 Apps",
              hero: false,
            },
            {
              title: "Agência 10 · 10 Clientes / 3 PCs",
              desc: "12 Criativos (Base + Rosto Real, Concorrentes e PDFs)",
              hero: false,
            },
            {
              title: "Agência Ilimitada · Clientes Sem Fim / 5 PCs",
              desc: "Todos os 15 Criativos completos incluindo Diretores de Vídeo Reels",
              hero: true,
            },
          ].map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl border p-5 ${
                p.hero
                  ? "border-[#B9FC01]/65 bg-[#13190E]"
                  : "border-white/15 bg-[#12151D]"
              }`}
            >
              <div
                className={`font-display text-xl font-extrabold ${
                  p.hero ? "text-[#B9FC01]" : "text-white"
                }`}
              >
                {p.title}
              </div>
              <div className="mt-1 text-base text-zinc-200">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          n: "01",
          icon: Cpu,
          t: "Escolha Sua IA",
          bullets: ["10 modelos gratuitos inclusos", "Ou conecte ChatGPT / Claude / Gemini"],
        },
        {
          n: "02",
          icon: Upload,
          t: "Fotos & Logo",
          bullets: ["Aponte sua pasta de fotos reais", "Trave cores e logotipo da marca"],
        },
        {
          n: "03",
          icon: Instagram,
          t: "Instagram & Apps",
          bullets: ["Conecte seu perfil comercial", "Ative Drive, Planilhas ou Notion"],
        },
        {
          n: "04",
          icon: MessageSquare,
          t: "Seu WhatsApp",
          bullets: ["Leia o QR Code no celular", "Peça e aprove tudo por mensagem"],
        },
      ].map((step) => {
        const Icon = step.icon;
        return (
          <div
            key={step.n}
            className="flex flex-col justify-between rounded-3xl border border-white/15 bg-[#12151D] p-6 text-left sm:p-7"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#B9FC01] px-3 py-1 font-mono text-xs font-extrabold text-[#0D0D0D]">
                  PASSO {step.n}
                </span>
                <Icon className="h-6 w-6 text-[#B9FC01]" />
              </div>
              <h4 className="mt-4 font-display text-2xl font-extrabold text-white">
                {step.t}
              </h4>
              <ul className="mt-3 space-y-2 text-base text-zinc-200">
                {step.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5 flex items-center gap-1.5 font-mono text-xs font-bold text-[#B9FC01]">
              <CheckCircle2 className="h-4 w-4" /> Pronto em segundos
            </div>
          </div>
        );
      })}
    </div>
  );
};
