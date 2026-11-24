import React from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  ExternalLink,
  KeyRound,
  Laptop,
  MessageSquare,
  Terminal,
} from "lucide-react";
import { CRIATIVOOS_RELEASE, SUPPORT_WHATSAPP_URL } from "../config/campaignLinks";

const DOWNLOAD_OPTIONS = [
  {
    os: "Windows (64-bit)",
    file: "CriativoOS-Setup-1.0.3.exe",
    url: CRIATIVOOS_RELEASE.windowsUrl,
    badge: "Instalador Recomendado",
    icon: Laptop,
  },
  {
    os: "macOS Universal (M1/M2/M3/M4 & Intel)",
    file: "CriativoOS-1.0.3-universal.dmg",
    url: CRIATIVOOS_RELEASE.macDmgUrl,
    badge: "Apple Silicon + Intel",
    icon: Laptop,
  },
  {
    os: "Linux (x86_64 AppImage)",
    file: "CriativoOS-1.0.3-x86_64.AppImage",
    url: CRIATIVOOS_RELEASE.linuxAppImageUrl,
    badge: "Desktop Linux",
    icon: Terminal,
  },
];

export const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07080C] text-white">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <img
            src="/logo-criativoos-dark.svg"
            alt="CriativoOS"
            className="h-7 w-auto"
          />
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar ao site oficial
          </a>
        </div>

        <div className="mt-10 rounded-3xl border border-[#B9FC01]/45 bg-[#12160F] p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#B9FC01] px-3.5 py-1 font-mono text-xs font-bold text-[#07080C]">
            <CheckCircle2 className="h-4 w-4" />
            ACESSO LIBERADO · BEM-VINDO AO CRIATIVOOS
          </div>

          <h1 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-5xl">
            Sua equipe de Criativos está pronta para instalar!
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-300">
            Sua chave de acesso (<code className="text-[#B9FC01]">CRIA-*</code>)
            foi enviada para o seu e-mail de compra. Baixe abaixo o instalador
            do <strong>CriativoOS</strong> para o seu computador.
          </p>
        </div>

        <h2 className="mt-12 font-display text-2xl font-bold text-white">
          1. Baixe o Instalador Para o Seu Computador
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {DOWNLOAD_OPTIONS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.file}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111522] p-6 transition hover:border-[#B9FC01]/60 hover:bg-[#151A28]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-[#B9FC01]" />
                    <span className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[10px] text-slate-300">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {item.os}
                  </h3>
                  <p className="mt-1 break-all font-mono text-xs text-slate-400">
                    {item.file}
                  </p>
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#B9FC01]">
                  <Download className="h-4 w-4" />
                  Baixar Instalador
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
          <a
            href={CRIATIVOOS_RELEASE.macZipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#B9FC01]"
          >
            macOS .zip <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href={CRIATIVOOS_RELEASE.linuxTarGzUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#B9FC01]"
          >
            Linux .tar.gz <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href={CRIATIVOOS_RELEASE.releasePageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#B9FC01]"
          >
            Ver todos os arquivos de instalação <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#111522] p-6">
            <div className="flex items-center gap-2.5 text-[#B9FC01]">
              <KeyRound className="h-5 w-5" />
              <h3 className="font-display text-lg font-bold text-white">
                2. Como Ativar em 30 Segundos
              </h3>
            </div>
            <ol className="mt-4 list-decimal space-y-2.5 pl-5 text-sm text-slate-300">
              <li>Abra o programa instalado <strong>CriativoOS</strong>.</li>
              <li>
                Digite o <strong>mesmo e-mail da compra</strong> e cole sua
                chave <code className="text-[#B9FC01]">CRIA-*</code>.
              </li>
              <li>
                Escolha usar os <strong>10 modelos gratuitos</strong> ou conecte
                seu ChatGPT, Claude, Gemini ou Grok.
              </li>
              <li>
                Suba suas fotos, conecte seu Instagram e seu WhatsApp e comece a
                criar!
              </li>
            </ol>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111522] p-6">
            <div>
              <div className="flex items-center gap-2.5 text-[#B9FC01]">
                <MessageSquare className="h-5 w-5" />
                <h3 className="font-display text-lg font-bold text-white">
                  Precisa de Ajuda na Instalação?
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Se não encontrar o e-mail com sua chave em até 5 minutos
                (verifique também a aba Promoções ou Spam), chame nosso time de
                suporte no WhatsApp.
              </p>
            </div>
            <a
              href={SUPPORT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="volt-button mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm"
            >
              Chamar Suporte no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
