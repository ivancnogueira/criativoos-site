import React, { useState } from "react";
import { CheckCheck, MessageCircle, Send, ShieldCheck, Smartphone } from "lucide-react";

interface ChatMessage {
  sender: "user" | "criativo";
  time: string;
  text: string;
  previewImage?: string;
}

const SCENARIOS: Record<
  "carrossel" | "aprovar" | "ajustar" | "selfchat",
  { label: string; messages: ChatMessage[] }
> = {
  carrossel: {
    label: "1. Pedir Post por Mensagem",
    messages: [
      {
        sender: "user",
        time: "09:12",
        text: "Equipe, cria um carrossel de 7 slides mostrando os 3 erros que travam as vendas no Instagram. Usa minhas fotos da pasta.",
      },
      {
        sender: "criativo",
        time: "09:13",
        text: "⚡ Prontinho! Sua equipe montou o carrossel completo com o seu rosto, sua identidade visual e a legenda persuasiva. Confira a capa abaixo:",
        previewImage: "/images/criativo-ia-operacao-v1-dark.webp",
      },
    ],
  },
  aprovar: {
    label: "2. Responder 1 Para Publicar",
    messages: [
      {
        sender: "user",
        time: "09:14",
        text: "1",
      },
      {
        sender: "criativo",
        time: "09:14",
        text: "✅ Aprovado! Seu carrossel já foi agendado automaticamente na conexão oficial do seu Instagram para hoje às 18h.",
      },
    ],
  },
  ajustar: {
    label: "3. Pedir Alteração na Hora",
    messages: [
      {
        sender: "user",
        time: "09:15",
        text: "2: deixa a chamada da capa mais curta e destaca a palavra Vendas em verde.",
      },
      {
        sender: "criativo",
        time: "09:16",
        text: "🎨 Capa atualizada em segundos mantendo sua foto original! Responda 1 quando quiser publicar.",
        previewImage: "/images/01.webp",
      },
    ],
  },
  selfchat: {
    label: "4. Ordens de OS & Relatórios",
    messages: [
      {
        sender: "user",
        time: "21:30",
        text: "Pesquisa os 3 principais posts de concorrentes hoje, atualiza a planilha do Drive e manda o resumo.",
      },
      {
        sender: "criativo",
        time: "21:31",
        text: "📊 Browser finalizou a pesquisa, planilha atualizada no seu PC e Google Drive! Post de destaque teve 38% mais alcance. Já deixei 3 sugestões prontas para amanhã cedo.",
      },
    ],
  },
};

export const WhatsAppApprovalSimulator: React.FC = () => {
  const [scenario, setScenario] = useState<keyof typeof SCENARIOS>("carrossel");
  const current = SCENARIOS[scenario];

  return (
    <section id="whatsapp" className="border-t border-white/[0.06] bg-[#07090D] py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
              // 09 · COMANDO 24/7 NO BOLSO
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-5xl">
              Comande Seu PC ou VPS e Aprove Posts Pelo{" "}
              <span className="text-gradient-volt">Seu WhatsApp</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Mesmo longe da mesa, mande um texto ou áudio no seu próprio
              WhatsApp: peça posts, dispare pesquisas no navegador, execute
              fluxos nos seus aplicativos ou responda apenas{" "}
              <strong className="text-[#B9FC01]">1</strong> para publicar no
              Instagram.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "WhatsApp Self-Chat",
                "Áudio / Voz",
                "Telegram",
                "Slack",
                "Discord",
              ].map((channel) => (
                <span
                  key={channel}
                  className="rounded-lg border border-white/10 bg-[#050608] px-3 py-1 font-mono text-[11px] font-semibold text-slate-300"
                >
                  {channel}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {(Object.keys(SCENARIOS) as Array<keyof typeof SCENARIOS>).map(
                (key) => {
                  const active = scenario === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setScenario(key)}
                      className={`rounded-2xl border px-4 py-3.5 text-left text-xs font-bold transition sm:text-sm ${
                        active
                          ? "border-[#B9FC01] bg-[#B9FC01] text-[#07080C] shadow-[0_0_24px_rgba(185,252,1,0.3)]"
                          : "border-white/10 bg-[#0B0E15] text-slate-300 hover:border-white/30"
                      }`}
                    >
                      {SCENARIOS[key].label}
                    </button>
                  );
                }
              )}
            </div>

            <div className="mt-6 flex items-center gap-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-slate-200 sm:text-sm">
              <ShieldCheck className="h-6 w-6 shrink-0 text-[#B9FC01]" />
              <span>
                <strong>Controle Total na Sua Mão:</strong> Nenhuma arte vai
                para o seu perfil sem o seu comando de aprovação.
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="mx-auto max-w-md overflow-hidden rounded-[2.4rem] border border-white/15 bg-[#0B141A] shadow-[0_25px_80px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between bg-[#1F2C34] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B9FC01] text-[#07080C]">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      Minha Equipe CriativoOS
                    </div>
                    <div className="text-[11px] font-semibold text-[#B9FC01]">
                      Online agora no seu WhatsApp
                    </div>
                  </div>
                </div>
                <MessageCircle className="h-5 w-5 text-slate-400" />
              </div>

              <div className="min-h-[360px] space-y-4 bg-[#0B141A] p-5">
                {current.messages.map((msg, i) => (
                  <div
                    key={`${scenario}-${i}`}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[86%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow sm:text-sm ${
                        msg.sender === "user"
                          ? "rounded-tr-none bg-[#005C4B] text-white"
                          : "rounded-tl-none bg-[#1F2C34] text-slate-100"
                      }`}
                    >
                      {msg.previewImage && (
                        <div className="mb-3 overflow-hidden rounded-xl border border-[#B9FC01]/40 bg-[#07080C]">
                          <img
                            src={msg.previewImage}
                            alt="Prévia do Criativo"
                            className="h-44 w-full object-cover"
                          />
                          <div className="flex gap-1.5 p-2 font-mono text-[10px]">
                            <span className="rounded bg-[#B9FC01] px-2 py-0.5 font-bold text-[#07080C]">
                              [1] Aprovar
                            </span>
                            <span className="rounded bg-white/10 px-2 py-0.5 text-slate-200">
                              [2] Ajustar
                            </span>
                            <span className="rounded bg-white/10 px-2 py-0.5 text-slate-200">
                              [3] Pausar
                            </span>
                          </div>
                        </div>
                      )}
                      <p>{msg.text}</p>
                      <div className="mt-1.5 flex items-center justify-end gap-1 text-[10px] text-slate-400">
                        <span>{msg.time}</span>
                        {msg.sender === "user" && (
                          <CheckCheck className="h-3.5 w-3.5 text-sky-400" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 bg-[#1F2C34] px-4 py-3">
                <div className="flex-1 rounded-full bg-[#2A3942] px-4 py-2 text-xs text-slate-400">
                  Responda 1 para aprovar ou peça um novo post...
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B9FC01] text-[#07080C]">
                  <Send className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
