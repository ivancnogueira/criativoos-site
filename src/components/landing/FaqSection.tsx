import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { SUPPORT_WHATSAPP_URL } from "../../config/campaignLinks";

const FAQ_ITEMS = [
  {
    q: "Preciso pagar alguma ferramenta de IA ou créditos por fora todo mês?",
    a: "Não. Logo ao abrir o CriativoOS você pode rodar gratuitamente os 10 modelos já incluídos no OpenCode sem custo adicional, ou conectar no cofre local a assinatura do ChatGPT, Claude, Gemini ou Grok que já utiliza.",
  },
  {
    q: "Consigo rodar o CriativoOS em um servidor VPS 24/7 ou só no meu notebook?",
    a: "Nos dois. Você instala no seu computador Windows, Mac ou Linux em 1 minuto com dois cliques e, quando quiser escala 24 horas por dia com o notebook desligado, também pode rodar em VPS Linux / Docker pareado ao mesmo painel Cockpit.",
  },
  {
    q: "Serve para agências e social medias que atendem vários clientes?",
    a: "Sim. Cada marca ou cliente possui workspace isolado (fotos de rosto, logotipo, paleta, histórico e relatórios PDF sem misturar nada). No plano Agência Ilimitada você cadastra contas sem limite em até 5 máquinas com todos os 15 Criativos.",
  },
  {
    q: "Preciso saber programar ou abrir tela preta de código?",
    a: "De jeito nenhum. O CriativoOS vem com instalador gráfico padrão e painel visual por cliques e chat em português claro, além de comando direto no WhatsApp.",
  },
  {
    q: "Como funciona a segurança no Computer Use e no Navegador autônomo?",
    a: "Suas senhas, chaves de API e tokens ficam no Cofre AES-256-GCM local. Em ações críticas como logins com verificação, formulários sensíveis, CRM ou envio final no Instagram, o sistema pausa e pede sua autorização humana explícita.",
  },
  {
    q: "As artes realmente mantêm meu rosto real e não mudam a cada post?",
    a: "Sim. Você aponta a pasta com suas fotos reais ou do seu cliente uma única vez e o Especialista em Rosto Real preserva traços, identidade visual e enquadramento em feed, carrosséis e stories.",
  },
  {
    q: "O sistema publica sozinho no Instagram sem minha revisão?",
    a: "Nunca. Os Criativos enviam a prévia pronta no seu painel e no WhatsApp. A publicação na conexão oficial da Meta só acontece depois que você responder 1 ou clicar em aprovar.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-t border-white/[0.06] bg-[#07090D] py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Coluna Esquerda */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              // 12 · TIRE SUAS DÚVIDAS
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-5xl">
              Perguntas Frequentes Sobre{" "}
              <span className="text-gradient-volt">Licença, VPS &amp; Uso</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Tudo o que você precisa validar antes de ativar o CriativoOS na
              sua máquina ou na operação da sua agência.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-[#0B0E15] p-6">
              <div className="font-display text-lg font-bold text-white">
                Ainda tem dúvida sobre seu cenário ou infraestrutura?
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                Fale direto com nosso time de atendimento e receba orientação
                honesta sobre o melhor plano para você ou para sua equipe.
              </p>
              <a
                href={SUPPORT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#B9FC01] px-5 py-3 font-display text-sm font-extrabold text-[#050608] transition hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Tirar Dúvida no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Accordion */}
          <div className="space-y-3.5 lg:col-span-7">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={item.q}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-[#B9FC01]/45 bg-[#0B1014]"
                      : "border-white/10 bg-[#0B0E15]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-bold text-white sm:text-lg">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#B9FC01] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/[0.07] px-6 py-4 text-sm leading-relaxed text-slate-300">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
