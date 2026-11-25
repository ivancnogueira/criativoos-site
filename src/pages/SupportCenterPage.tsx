import React, { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  LifeBuoy,
  Mail,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  SUPPORT_EMAIL,
  WHATSAPP_COMMUNITY_URL,
} from "../config/campaignLinks";

const QUICK_SOLUTIONS = [
  {
    q: "Não encontrei o e-mail com minha chave (CRIA-*) ou acesso às aulas",
    a: "Assim que o pagamento é aprovado, enviamos automaticamente sua chave de ativação e os links da Área de Membros para o e-mail preenchido no checkout. Verifique as abas Promoções, Atualizações ou Spam buscando por 'CriativoOS'. Se digitou algum e-mail errado na hora da compra, abra um ticket abaixo informando o e-mail certo.",
  },
  {
    q: "O Windows exibiu 'O Windows protegeu o computador' ou o Mac pediu permissão",
    a: "No Windows: clique em 'Mais informações' logo abaixo do aviso e depois em 'Executar assim mesmo'. No macOS: clique com o botão direito sobre o ícone do CriativoOS em Aplicativos e escolha 'Abrir' na primeira vez. Isso acontece apenas na primeira abertura.",
  },
  {
    q: "Como rodar sem pagar assinaturas ou créditos de IA por fora?",
    a: "Logo ao abrir o CriativoOS pela primeira vez, na etapa 'Escolha sua IA', selecione qualquer um dos 10 modelos gratuitos já incluídos no programa. Você não precisa cadastrar cartão em lugar nenhum para criar textos, imagens e automações.",
  },
  {
    q: "Onde assisto aos tutoriais de como configurar e onde fica a Comunidade?",
    a: "Todas as aulas gravadas passo a passo ficam na sua Área de Membros (cujo acesso chegou por e-mail). Para trocar ideias com outros membros e receber avisos de atualização, entre no Grupo Oficial do WhatsApp pelo botão verde ao lado.",
  },
];

interface TicketCreatedResult {
  id: string;
  protocol: string;
  notified: boolean;
}

export const SupportCenterPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [plan, setPlan] = useState("Agência Ilimitada");
  const [os, setOs] = useState("Windows");
  const [category, setCategory] = useState("Relato de Bug / Erro Técnico");
  const [description, setDescription] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [createdTicket, setCreatedTicket] = useState<TicketCreatedResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim() || !email.trim() || !description.trim()) {
      setErrorMsg("Preencha seu nome, e-mail de compra e a descrição do ocorrido.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          whatsapp: whatsapp.trim(),
          plan,
          os,
          category,
          description: description.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Não foi possível registrar seu chamado.");
      }
      setCreatedTicket({
        id: data.ticket.id,
        protocol: data.ticket.protocol,
        notified: Boolean(data.notified),
      });
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Erro temporário ao enviar. Você também pode enviar direto para suporte@criativoos.com.br."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const mailtoFallbackHref = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
    createdTicket
      ? `[Chamado ${createdTicket.protocol}] ${category} - ${plan}`
      : `[Suporte CriativoOS] ${category}`
  )}&body=${encodeURIComponent(
    `Nome: ${name}\nE-mail de compra: ${email}\nWhatsApp: ${whatsapp || "Não informado"}\nPlano: ${plan}\nSistema: ${os}\nCategoria: ${category}\n${createdTicket ? `Protocolo: ${createdTicket.protocol}\n` : ""}\nDescrição:\n${description}`
  )}`;

  return (
    <div className="min-h-screen bg-[#07080C] text-white">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <a href="/">
              <img
                src="/logo-criativoos-dark.svg"
                alt="CriativoOS"
                className="h-7 w-auto"
              />
            </a>
            <span className="rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-3 py-0.5 font-mono text-[10px] font-bold uppercase text-[#B9FC01]">
              Central de Ajuda &amp; Tickets
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="/obrigado"
              className="text-slate-400 transition hover:text-white"
            >
              Downloads &amp; Guia
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Voltar ao site
            </a>
          </div>
        </div>

        {/* Hero / Comunidade */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Central de Suporte Oficial{" "}
              <span className="text-[#B9FC01]">CriativoOS</span>
            </h1>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300 sm:text-base">
              Antes de abrir um chamado, confira as 4 soluções rápidas abaixo (elas resolvem mais de
              80% dos casos na hora). Se precisar de suporte técnico para bugs, chave ou acesso,
              registre seu ticket com o protocolo enviado direto para{" "}
              <strong className="text-white">{SUPPORT_EMAIL}</strong>.
            </p>
          </div>

          <div className="rounded-2xl border border-[#25D366]/40 bg-[#0D1912] p-5 lg:col-span-4">
            <div className="font-mono text-[10px] font-bold uppercase text-[#25D366]">
              Aulas &amp; Dicas de Uso
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
              Dúvidas sobre como usar as ferramentas? Confira as aulas na Área de Membros e participe
              da Comunidade Oficial:
            </p>
            <a
              href={WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-extrabold text-[#050608] transition hover:brightness-110"
            >
              <Users className="h-3.5 w-3.5" />
              Entrar na Comunidade WhatsApp
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Etapa 1: Autoatendimento */}
        <section className="mt-10">
          <h2 className="flex items-center gap-2 font-display text-xl font-bold text-white">
            <LifeBuoy className="h-5 w-5 text-[#B9FC01]" />
            1. Soluções Instantâneas (Antes de Abrir Chamado)
          </h2>

          <div className="mt-4 space-y-2.5">
            {QUICK_SOLUTIONS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={item.q}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-[#B9FC01]/45 bg-[#101613]"
                      : "border-white/10 bg-[#111522]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-sm font-bold text-white sm:text-base">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#B9FC01] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/[0.07] px-5 py-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Etapa 2: Formulário de Ticket */}
        <section className="mt-12 rounded-3xl border border-white/10 bg-[#111522] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase text-[#B9FC01]">
                Atendimento Técnico Estruturado
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-white">
                2. Abrir Chamado (Ticket Oficial)
              </h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 text-xs text-slate-300">
              <Mail className="h-3.5 w-3.5 text-[#B9FC01]" />
              <span>{SUPPORT_EMAIL}</span>
            </div>
          </div>

          {createdTicket ? (
            <div className="mt-6 rounded-2xl border border-[#B9FC01]/50 bg-[#12190E] p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-[#B9FC01]">
                <CheckCircle2 className="h-6 w-6" />
                <span className="font-mono text-xs font-bold uppercase">
                  Chamado Registrado com Sucesso
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-white">
                Protocolo: <span className="text-[#B9FC01]">{createdTicket.protocol}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Seu chamado já entrou na nossa fila técnica de atendimento e enviamos a notificação
                para <strong>{SUPPORT_EMAIL}</strong>. Assim que analisarmos, responderemos direto no
                e-mail <strong>{email}</strong>
                {whatsapp ? ` ou no WhatsApp informado (${whatsapp})` : ""}.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={mailtoFallbackHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/45 bg-[#B9FC01]/10 px-5 py-2.5 text-xs font-bold text-[#B9FC01] hover:bg-[#B9FC01]/20"
                >
                  <Mail className="h-4 w-4" />
                  Enviar Cópia / Print por E-mail
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setCreatedTicket(null);
                    setDescription("");
                  }}
                  className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/10"
                >
                  Abrir Outro Chamado
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {errorMsg && (
                <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-xs text-red-200">
                  {errorMsg}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs">
                  <span className="font-semibold text-slate-300">Seu Nome Completo *</span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João Silva"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#07080C] px-4 py-3 text-sm text-white focus:border-[#B9FC01] focus:outline-none"
                  />
                </label>

                <label className="block text-xs">
                  <span className="font-semibold text-slate-300">E-mail Usado na Compra *</span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu-email@dominio.com"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#07080C] px-4 py-3 text-sm text-white focus:border-[#B9FC01] focus:outline-none"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <label className="block text-xs">
                  <span className="font-semibold text-slate-300">WhatsApp (Opcional)</span>
                  <input
                    type="text"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#07080C] px-3.5 py-3 text-sm text-white focus:border-[#B9FC01] focus:outline-none"
                  />
                </label>

                <label className="block text-xs">
                  <span className="font-semibold text-slate-300">Seu Plano *</span>
                  <select
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#07080C] px-3.5 py-3 text-sm text-white focus:border-[#B9FC01] focus:outline-none"
                  >
                    <option value="Individual">Individual</option>
                    <option value="Agência 10">Agência 10</option>
                    <option value="Agência Ilimitada">Agência Ilimitada</option>
                    <option value="Dúvida Pré-Compra">Dúvida Pré-Compra</option>
                  </select>
                </label>

                <label className="block text-xs">
                  <span className="font-semibold text-slate-300">Sistema *</span>
                  <select
                    value={os}
                    onChange={(e) => setOs(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#07080C] px-3.5 py-3 text-sm text-white focus:border-[#B9FC01] focus:outline-none"
                  >
                    <option value="Windows">Windows</option>
                    <option value="macOS">macOS (Mac)</option>
                    <option value="Linux">Linux</option>
                    <option value="Servidor VPS">Servidor na Nuvem (VPS)</option>
                  </select>
                </label>

                <label className="block text-xs">
                  <span className="font-semibold text-slate-300">Motivo do Chamado *</span>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#07080C] px-3.5 py-3 text-sm text-white focus:border-[#B9FC01] focus:outline-none"
                  >
                    <option value="Chave de Acesso / Ativação">Chave / Ativação</option>
                    <option value="Erro na Instalação">Erro na Instalação</option>
                    <option value="Relato de Bug / Erro Técnico">Relato de Bug / Erro</option>
                    <option value="Financeiro / Reembolso">Financeiro / Reembolso</option>
                  </select>
                </label>
              </div>

              <label className="block text-xs">
                <span className="font-semibold text-slate-300">
                  Descreva o que aconteceu (passo a passo e qualquer mensagem exibida na tela) *
                </span>
                <textarea
                  required
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ex: Baixei o instalador Windows v1.0.3, digitei minha chave e apareceu a mensagem..."
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#07080C] p-4 text-sm text-white focus:border-[#B9FC01] focus:outline-none"
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-[#B9FC01]" />
                  <span>Gera protocolo automático + notificação para {SUPPORT_EMAIL}</span>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="volt-button inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  {submitting ? "Registrando Chamado..." : "Enviar Chamado Oficial"}
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};
