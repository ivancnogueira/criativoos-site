import React, { useState } from "react";
import { ChevronDown, LifeBuoy } from "lucide-react";
import { SUPPORT_CENTER_URL } from "../../config/campaignLinks";

const FAQ_ITEMS = [
  {
    q: "Preciso pagar alguma ferramenta de IA ou créditos por fora todo mês?",
    a: "Não. Logo ao abrir o CriativoOS você pode usar 10 inteligências artificiais gratuitas já inclusas, sem custo extra por mensagem ou imagem, ou conectar no cofre blindado do seu computador a conta do ChatGPT, Claude, Gemini ou Grok que já utiliza.",
  },
  {
    q: "Consigo rodar o CriativoOS na nuvem 24h ou só no meu notebook?",
    a: "Nos dois. Você instala no seu computador Windows, Mac ou Linux em 1 minuto com dois cliques e, quando quiser escala 24 horas por dia com o notebook desligado, também pode rodar em servidor na nuvem 24h conectado em 1 clique ao mesmo painel.",
  },
  {
    q: "Serve para agências e social medias que atendem vários clientes?",
    a: "Sim. Cada marca ou cliente possui pastas separadas e isoladas (fotos de rosto, logotipo, paleta, histórico e relatórios PDF sem misturar nada). No plano Agência Ilimitada você cadastra contas sem limite em até 5 máquinas com todos os 15 Criativos.",
  },
  {
    q: "Preciso saber programar ou abrir tela preta de código?",
    a: "De jeito nenhum. O CriativoOS vem com instalador gráfico padrão e painel visual por cliques e chat em português claro, além de comando direto no WhatsApp.",
  },
  {
    q: "Como funciona a segurança no Operador de Computador e no Navegador Inteligente?",
    a: "Suas senhas e acessos ficam no cofre blindado só no seu computador. Em ações importantes como logins que pedem código no celular, formulários sensíveis ou envio final no Instagram, o sistema pausa e chama você para autorizar antes.",
  },
  {
    q: "As artes realmente mantêm meu rosto real e não mudam a cada post?",
    a: "Sim. Você aponta a pasta com suas fotos reais ou do seu cliente uma única vez e o Especialista em Rosto Real preserva traços, identidade visual e enquadramento em feed, carrosséis e stories.",
  },
  {
    q: "O sistema publica sozinho no Instagram sem minha revisão?",
    a: "Nunca. Os Criativos enviam a prévia pronta no seu painel e no WhatsApp. A publicação na conexão oficial do Instagram só acontece depois que você responder 1 ou clicar em aprovar.",
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
              <span className="text-[#B9FC01]">Licença, Nuvem 24h &amp; Uso</span>
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
                Acesse nossa Central de Ajuda e Chamados para tirar dúvidas de
                instalação, chave de licença ou escolher o melhor plano para o
                seu cenário.
              </p>
              <a
                href={SUPPORT_CENTER_URL}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#B9FC01] px-5 py-3 font-display text-sm font-extrabold text-[#050608] transition hover:brightness-110"
              >
                <LifeBuoy className="h-4 w-4" />
                <span>Abrir Central de Suporte</span>
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
