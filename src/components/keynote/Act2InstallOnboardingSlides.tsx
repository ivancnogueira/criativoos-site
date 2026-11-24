import React from "react";
import {
  CheckCircle2,
  Cpu,
  Download,
  Instagram,
  Laptop,
  MessageSquare,
  Upload,
} from "lucide-react";

interface Props {
  slideId: number;
}

export const Act2InstallOnboardingSlides: React.FC<Props> = ({ slideId }) => {
  if (slideId === 6) {
    return (
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
        {[
          {
            os: "Windows",
            file: "Instalador em 2 Cliques (.exe)",
            detail: "Instala como qualquer programa comum na sua área de trabalho e atualiza sozinho.",
          },
          {
            os: "Mac (Apple M1/M2/M3/M4 e Intel)",
            file: "Instalador Universal (.dmg)",
            detail: "Roda nativo com máxima velocidade em qualquer MacBook ou iMac.",
          },
          {
            os: "Linux e Servidores",
            file: "Versão Portátil (.AppImage)",
            detail: "Pronto para rodar no seu computador Linux ou deixar ligado 24 horas na nuvem.",
          },
        ].map((item) => (
          <div
            key={item.os}
            className="rounded-3xl border border-white/10 bg-[#141416] p-6 text-left"
          >
            <div className="flex items-center justify-between">
              <Laptop className="h-6 w-6 text-[#B9FC01]" />
              <Download className="h-4 w-4 text-zinc-500" />
            </div>
            <h4 className="mt-4 font-display text-lg font-bold text-white">
              {item.os}
            </h4>
            <div className="mt-1 font-mono text-xs text-[#B9FC01]">
              {item.file}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-zinc-400">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (slideId === 7) {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/15 bg-[#121215] p-7 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <img src="/symbol-oo-volt.svg" alt="oO" className="h-6 w-6" />
            <span className="font-display text-base font-bold text-white">
              Ative Sua Licença do CriativoOS
            </span>
          </div>
          <span className="rounded-full bg-[#B9FC01]/15 px-3 py-1 font-mono text-[11px] text-[#B9FC01]">
            Liberação Instantânea
          </span>
        </div>

        <div className="mt-5 space-y-3 text-left">
          <div className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-xs">
            <span className="block font-mono text-[10px] text-zinc-500">
              E-MAIL USADO NA COMPRA
            </span>
            <span className="text-zinc-200">seu-email@dominio.com</span>
          </div>
          <div className="rounded-xl border border-[#B9FC01]/50 bg-[#B9FC01]/5 px-4 py-3 text-xs">
            <span className="block font-mono text-[10px] text-[#B9FC01]">
              SUA CHAVE RECEBIDA POR E-MAIL
            </span>
            <span className="font-mono font-bold text-white">
              CRIA-AGIL-XXXX-XXXX-XXXX
            </span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px]">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-2.5">
            <div className="font-bold text-white">Individual</div>
            <div className="text-zinc-400">2 marcas · 9 Criativos</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-2.5">
            <div className="font-bold text-white">Agência 10</div>
            <div className="text-zinc-400">10 marcas · 12 Criativos</div>
          </div>
          <div className="rounded-xl border border-[#B9FC01]/60 bg-[#B9FC01]/10 p-2.5">
            <div className="font-bold text-[#B9FC01]">Agência Ilimitada</div>
            <div className="text-zinc-200">Ilimitado · Todos os 15</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          n: "Passo 1",
          icon: Cpu,
          t: "Escolha Sua IA",
          d: "Ative os 10 modelos gratuitos do OpenCode ou entre com seu ChatGPT, Claude, Gemini ou Grok.",
        },
        {
          n: "Passo 2",
          icon: Upload,
          t: "Fotos e Sua Marca",
          d: "Selecione sua pasta de fotos reais, seu logotipo e as cores da sua empresa.",
        },
        {
          n: "Passo 3",
          icon: Instagram,
          t: "Seu Instagram",
          d: "Conecte seu perfil comercial para agendar posts e acompanhar seus resultados.",
        },
        {
          n: "Passo 4",
          icon: MessageSquare,
          t: "Seu WhatsApp",
          d: "Leia o QR Code com o celular para pedir posts e aprovar publicações de onde estiver.",
        },
      ].map((step) => {
        const Icon = step.icon;
        return (
          <div
            key={step.n}
            className="rounded-3xl border border-white/10 bg-[#141416] p-5 text-left"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#B9FC01] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#0D0D0D]">
                {step.n}
              </span>
              <Icon className="h-5 w-5 text-[#B9FC01]" />
            </div>
            <h4 className="mt-4 font-display text-base font-bold text-white">
              {step.t}
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
              {step.d}
            </p>
            <div className="mt-3 flex items-center gap-1 font-mono text-[10px] text-[#B9FC01]">
              <CheckCircle2 className="h-3.5 w-3.5" /> Configurado em segundos
            </div>
          </div>
        );
      })}
    </div>
  );
};
