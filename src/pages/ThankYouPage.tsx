import React from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  ExternalLink,
  GraduationCap,
  KeyRound,
  Laptop,
  LifeBuoy,
  ShieldAlert,
  Terminal,
  Users,
} from "lucide-react";
import {
  CRIATIVOOS_RELEASE,
  SUPPORT_CENTER_URL,
  WHATSAPP_COMMUNITY_URL,
} from "../config/campaignLinks";

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

        {/* Banner principal */}
        <div className="mt-10 rounded-3xl border border-[#B9FC01]/45 bg-[#12160F] p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#B9FC01] px-3.5 py-1 font-mono text-xs font-bold text-[#07080C]">
            <CheckCircle2 className="h-4 w-4" />
            ACESSO LIBERADO · BEM-VINDO AO CRIATIVOOS
          </div>

          <h1 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-5xl">
            Sua licença está pronta para instalar e rodar!
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-300">
            Sua chave de acesso (<code className="text-[#B9FC01]">CRIA-*</code>) e o acesso à{" "}
            <strong>Área de Membros com as aulas passo a passo</strong> foram enviados para o seu
            e-mail de compra. Baixe abaixo o instalador do <strong>CriativoOS</strong> para o seu
            computador.
          </p>
        </div>

        {/* Passo 1: Download */}
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

        {/* Passo 2: Comunidade WhatsApp + Área de Membros */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-3xl border border-[#25D366]/45 bg-[#0C1812] p-6 sm:p-7">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/15 px-3 py-1 font-mono text-[11px] font-bold text-[#25D366]">
                <Users className="h-3.5 w-3.5" />
                PASSO OBRIGATÓRIO · COMUNIDADE VIP
              </div>
              <h3 className="mt-3 font-display text-xl font-bold text-white">
                2. Entre na Comunidade Oficial no WhatsApp
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                Receba avisos de novas versões, compartilhe seus resultados, veja dicas rápidas de uso
                e troque experiências com centenas de membros que já rodam o CriativoOS no dia a dia.
              </p>
            </div>
            <a
              href={WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-extrabold text-[#050608] transition hover:brightness-110"
            >
              <Users className="h-4 w-4" />
              Entrar no Grupo Oficial do WhatsApp
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111522] p-6 sm:p-7">
            <div className="flex items-center gap-2.5 text-[#B9FC01]">
              <GraduationCap className="h-5 w-5" />
              <h3 className="font-display text-lg font-bold text-white">
                3. Como Ativar &amp; Assistir às Aulas
              </h3>
            </div>
            <ol className="mt-4 list-decimal space-y-2.5 pl-5 text-sm text-slate-300">
              <li>
                Abra o programa instalado <strong>CriativoOS</strong> no seu computador.
              </li>
              <li>
                Digite o <strong>mesmo e-mail da compra</strong> e cole sua chave{" "}
                <code className="text-[#B9FC01]">CRIA-*</code> enviada no seu e-mail.
              </li>
              <li>
                Escolha usar as <strong>10 IAs gratuitas já inclusas</strong> ou conecte sua assinatura
                do ChatGPT, Claude, Gemini ou Grok.
              </li>
              <li>
                Confira o e-mail de boas-vindas com o acesso à{" "}
                <strong>Área de Membros</strong> contendo os tutoriais completos em vídeo.
              </li>
            </ol>
          </div>
        </div>

        {/* Guia Anti-Bloqueio de Instalação */}
        <div className="mt-8 rounded-3xl border border-amber-400/30 bg-[#15130C] p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-amber-300">
            <ShieldAlert className="h-5 w-5" />
            <h3 className="font-display text-lg font-bold text-white">
              Guia Rápido: Se o Windows ou Mac Mostrar Alerta ao Abrir o Instalador
            </h3>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
            Por ser um aplicativo novo instalado diretamente no seu computador, o Windows ou macOS pode
            pedir confirmação na primeira abertura. Isso leva 5 segundos:
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-3 text-xs leading-relaxed">
            <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
              <div className="font-mono font-bold text-[#B9FC01]">NO WINDOWS</div>
              <p className="mt-1.5 text-slate-300">
                Se aparecer a tela azul <em>"O Windows protegeu o computador"</em>, basta clicar em{" "}
                <strong>Mais informações</strong> e depois no botão{" "}
                <strong>Executar assim mesmo</strong>.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
              <div className="font-mono font-bold text-[#B9FC01]">NO MAC (MACOS)</div>
              <p className="mt-1.5 text-slate-300">
                Após arrastar para Aplicativos, segure a tecla Control (ou clique com botão direito)
                sobre o ícone do CriativoOS e clique em <strong>Abrir</strong> na primeira vez.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
              <div className="font-mono font-bold text-[#B9FC01]">CHAVE NO E-MAIL</div>
              <p className="mt-1.5 text-slate-300">
                Não achou o e-mail com a chave em 5 minutos? Pesquise por{" "}
                <strong>CriativoOS</strong> nas abas <strong>Promoções</strong> e{" "}
                <strong>Spam</strong> do e-mail usado na compra.
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé de suporte por ticket */}
        <div className="mt-8 flex flex-col justify-between gap-4 rounded-3xl border border-white/10 bg-[#111522] p-6 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#B9FC01]">
              <KeyRound className="h-5 w-5" />
              <h3 className="font-display text-lg font-bold text-white">
                Ainda ficou com dúvida na chave ou encontrou algum erro técnico?
              </h3>
            </div>
            <p className="mt-1.5 text-sm text-slate-400">
              Para dúvidas rápidas de uso, assista às aulas na Área de Membros ou pergunte na
              Comunidade. Se for erro técnico ou problema com sua licença, abra um chamado oficial.
            </p>
          </div>
          <a
            href={SUPPORT_CENTER_URL}
            className="volt-button inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm"
          >
            <LifeBuoy className="h-4 w-4" />
            Central de Suporte &amp; Tickets
          </a>
        </div>
      </div>
    </div>
  );
};
