import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Lock,
  Mail,
  MessageCircle,
  RefreshCw,
  Search,
} from "lucide-react";

type TicketStatus = "aberto" | "em_analise" | "resolvido";

interface SupportTicket {
  id: string;
  protocol: string;
  name: string;
  email: string;
  whatsapp?: string;
  plan: string;
  os: string;
  category: string;
  description: string;
  status: TicketStatus;
  createdAt: string;
  updatedAt?: string;
}

export const SupportAdminPage: React.FC = () => {
  const [adminKey, setAdminKey] = useState<string>(() => {
    if (typeof window === "undefined") return "";
    return window.sessionStorage.getItem("criativoos_admin_key") || "";
  });
  const [inputKey, setInputKey] = useState("");
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [filterStatus, setFilterStatus] = useState<"todos" | TicketStatus>("todos");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchTickets = async (keyToUse: string) => {
    setLoading(true);
    setAuthError("");
    try {
      const res = await fetch("/api/tickets", {
        headers: { "x-admin-key": keyToUse },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Chave de acesso inválida.");
      }
      setTickets(Array.isArray(data.tickets) ? data.tickets : []);
      setAdminKey(keyToUse);
      window.sessionStorage.setItem("criativoos_admin_key", keyToUse);
    } catch (err) {
      setAuthError(err instanceof Error ? err.message : "Erro ao autenticar.");
      setAdminKey("");
      window.sessionStorage.removeItem("criativoos_admin_key");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (adminKey) {
      void fetchTickets(adminKey);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputKey.trim()) return;
    void fetchTickets(inputKey.trim());
  };

  const updateStatus = async (id: string, nextStatus: TicketStatus) => {
    try {
      const res = await fetch(`/api/tickets/${encodeURIComponent(id)}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify({ status: nextStatus }),
      });
      if (res.ok) {
        setTickets((prev) =>
          prev.map((t) =>
            t.id === id ? { ...t, status: nextStatus, updatedAt: new Date().toISOString() } : t
          )
        );
      }
    } catch {
      // ignora falha momentânea
    }
  };

  const filteredTickets = useMemo(() => {
    return tickets.filter((t) => {
      const matchesStatus = filterStatus === "todos" || t.status === filterStatus;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.email.toLowerCase().includes(q) ||
        t.protocol.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [tickets, filterStatus, searchQuery]);

  const counts = useMemo(
    () => ({
      abertos: tickets.filter((t) => t.status === "aberto").length,
      emAnalise: tickets.filter((t) => t.status === "em_analise").length,
      resolvidos: tickets.filter((t) => t.status === "resolvido").length,
    }),
    [tickets]
  );

  if (!adminKey) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#07080C] px-4 text-white">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111522] p-8"
        >
          <div className="flex items-center gap-2.5 text-[#B9FC01]">
            <Lock className="h-5 w-5" />
            <span className="font-mono text-xs font-bold uppercase">
              Acesso Restrito · Administração
            </span>
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold text-white">
            Painel de Chamados CriativoOS
          </h1>
          <p className="mt-1.5 text-xs text-slate-400">
            Digite a chave administrativa configurada no servidor (padrão inicial ou variável
            SUPPORT_ADMIN_KEY).
          </p>

          {authError && (
            <div className="mt-4 rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-200">
              {authError}
            </div>
          )}

          <input
            type="password"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            placeholder="Senha do Painel"
            className="mt-5 w-full rounded-xl border border-white/15 bg-[#07080C] px-4 py-3 text-sm text-white focus:border-[#B9FC01] focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="volt-button mt-4 w-full rounded-full py-3 text-sm"
          >
            {loading ? "Entrando..." : "Acessar Chamados"}
          </button>

          <a
            href="/suporte"
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar para Central de Suporte
          </a>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07080C] text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase text-[#B9FC01]">
              Gestão de Tickets · suporte@criativoos.com.br
            </span>
            <h1 className="mt-1 font-display text-2xl font-extrabold text-white">
              Painel Admin de Suporte
            </h1>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => void fetchTickets(adminKey)}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-semibold hover:border-[#B9FC01]"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              Atualizar
            </button>
            <button
              type="button"
              onClick={() => {
                setAdminKey("");
                window.sessionStorage.removeItem("criativoos_admin_key");
              }}
              className="rounded-full border border-white/15 px-4 py-2 text-xs text-slate-400 hover:text-white"
            >
              Sair
            </button>
          </div>
        </div>

        {/* Contadores */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-amber-400/30 bg-[#15130C] p-4">
            <div className="font-mono text-[10px] text-amber-300">ABERTOS</div>
            <div className="mt-1 font-display text-3xl font-extrabold text-white">
              {counts.abertos}
            </div>
          </div>
          <div className="rounded-2xl border border-sky-400/30 bg-[#0D131D] p-4">
            <div className="font-mono text-[10px] text-sky-300">EM ANÁLISE</div>
            <div className="mt-1 font-display text-3xl font-extrabold text-white">
              {counts.emAnalise}
            </div>
          </div>
          <div className="rounded-2xl border border-[#B9FC01]/35 bg-[#0F1711] p-4">
            <div className="font-mono text-[10px] text-[#B9FC01]">RESOLVIDOS</div>
            <div className="mt-1 font-display text-3xl font-extrabold text-white">
              {counts.resolvidos}
            </div>
          </div>
        </div>

        {/* Filtros e busca */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {(
              [
                ["todos", "Todos"],
                ["aberto", "Abertos"],
                ["em_analise", "Em Análise"],
                ["resolvido", "Resolvidos"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilterStatus(key)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                  filterStatus === key
                    ? "bg-[#B9FC01] text-[#050608]"
                    : "border border-white/10 bg-[#111522] text-slate-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar protocolo, nome ou e-mail..."
              className="w-full rounded-full border border-white/10 bg-[#111522] py-2 pl-9 pr-4 text-xs text-white focus:border-[#B9FC01] focus:outline-none"
            />
          </div>
        </div>

        {/* Lista de tickets */}
        <div className="mt-6 space-y-4">
          {filteredTickets.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-[#111522] p-10 text-center text-sm text-slate-400">
              Nenhum chamado encontrado com os filtros atuais.
            </div>
          ) : (
            filteredTickets.map((ticket) => {
              const cleanWa = (ticket.whatsapp || "").replace(/\D/g, "");
              const waHref = cleanWa
                ? `https://wa.me/${cleanWa.startsWith("55") ? cleanWa : `55${cleanWa}`}?text=${encodeURIComponent(
                    `Olá ${ticket.name}, aqui é do suporte do CriativoOS sobre o seu chamado ${ticket.protocol} (${ticket.category}).`
                  )}`
                : "";
              const mailHref = `mailto:${ticket.email}?subject=${encodeURIComponent(
                `[CriativoOS Suporte · ${ticket.protocol}] Resposta ao seu chamado`
              )}&body=${encodeURIComponent(
                `Olá ${ticket.name},\n\nRecebemos o seu chamado ${ticket.protocol} (${ticket.category}).\n\nResposta:\n`
              )}`;

              return (
                <article
                  key={ticket.id}
                  className="rounded-2xl border border-white/10 bg-[#111522] p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/[0.08] pb-3.5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#B9FC01]/15 px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#B9FC01]">
                          {ticket.protocol}
                        </span>
                        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] text-slate-200">
                          {ticket.category}
                        </span>
                        <span className="font-mono text-[11px] text-slate-400">
                          {ticket.plan} · {ticket.os}
                        </span>
                      </div>
                      <h2 className="mt-2 font-display text-lg font-bold text-white">
                        {ticket.name}{" "}
                        <span className="text-sm font-normal text-slate-400">
                          ({ticket.email})
                        </span>
                      </h2>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
                        <Clock className="h-3 w-3" />
                        {new Date(ticket.createdAt).toLocaleString("pt-BR")}
                      </span>
                      <select
                        value={ticket.status}
                        onChange={(e) =>
                          void updateStatus(ticket.id, e.target.value as TicketStatus)
                        }
                        className="rounded-lg border border-white/15 bg-[#07080C] px-2.5 py-1.5 text-xs font-bold text-white focus:border-[#B9FC01]"
                      >
                        <option value="aberto">Aberto</option>
                        <option value="em_analise">Em Análise</option>
                        <option value="resolvido">Resolvido</option>
                      </select>
                    </div>
                  </div>

                  <p className="mt-3.5 whitespace-pre-wrap text-sm leading-relaxed text-slate-200">
                    {ticket.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2.5">
                    <a
                      href={mailHref}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#B9FC01] px-4 py-2 text-xs font-extrabold text-[#050608] hover:brightness-110"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      Responder por E-mail
                    </a>
                    {waHref && (
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-extrabold text-[#050608] hover:brightness-110"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        Responder no WhatsApp
                      </a>
                    )}
                    {ticket.status !== "resolvido" && (
                      <button
                        type="button"
                        onClick={() => void updateStatus(ticket.id, "resolvido")}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-300 hover:border-[#B9FC01] hover:text-white"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#B9FC01]" />
                        Marcar Resolvido
                      </button>
                    )}
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
