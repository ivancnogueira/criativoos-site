import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Check, Copy, Settings2, Users, User } from "lucide-react";
import { CHECKOUT_URLS, SITE_URLS } from "../config/campaignLinks";
import {
  WHATSAPP_CAMPAIGN_MESSAGES,
  type WhatsAppCampaignId,
  type WhatsAppChannelId,
} from "../data/whatsappMessagesData";

interface KitVariables {
  nomeContato: string;
  horarioLive: string;
  linkApresentacaoMigracao: string;
  linkApresentacaoBlack: string;
  linkMigInd: string;
  linkMigAg10: string;
  linkMigIlim: string;
  linkBfInd: string;
  linkBfAg10: string;
  linkBfIlim: string;
}

const DEFAULT_VARS: KitVariables = {
  nomeContato: "[NOME]",
  horarioLive: "Quinta-feira às 20h00",
  linkApresentacaoMigracao: `${SITE_URLS.domain}${SITE_URLS.presentationMigration}`,
  linkApresentacaoBlack: `${SITE_URLS.domain}${SITE_URLS.presentationBlack}`,
  linkMigInd: CHECKOUT_URLS.migration.individual,
  linkMigAg10: CHECKOUT_URLS.migration.agencia10,
  linkMigIlim: CHECKOUT_URLS.migration.ilimitado,
  linkBfInd: CHECKOUT_URLS.black.individual,
  linkBfAg10: CHECKOUT_URLS.black.agencia10,
  linkBfIlim: CHECKOUT_URLS.black.ilimitado,
};

function renderPreviewFormatting(raw: string): React.ReactNode {
  return raw.split("\n").map((line, lineIdx) => {
    const tokens = line.split(/(\*[^*]+\*|_[^_]+_|~[^~]+~)/g);
    return (
      <React.Fragment key={lineIdx}>
        {tokens.map((part, idx) => {
          if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
            return (
              <strong key={idx} className="font-bold text-white">
                {part.slice(1, -1)}
              </strong>
            );
          }
          if (part.startsWith("_") && part.endsWith("_") && part.length > 2) {
            return (
              <em key={idx} className="italic text-zinc-300">
                {part.slice(1, -1)}
              </em>
            );
          }
          if (part.startsWith("~") && part.endsWith("~") && part.length > 2) {
            return (
              <span key={idx} className="line-through text-zinc-400">
                {part.slice(1, -1)}
              </span>
            );
          }
          return <React.Fragment key={idx}>{part}</React.Fragment>;
        })}
        {lineIdx < raw.split("\n").length - 1 && <br />}
      </React.Fragment>
    );
  });
}

export const WhatsAppCampaignKitPage: React.FC = () => {
  const [campaign, setCampaign] = useState<WhatsAppCampaignId>("migration");
  const [channel, setChannel] = useState<WhatsAppChannelId>("grupo");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showConfig, setShowConfig] = useState(false);

  const [vars, setVars] = useState<KitVariables>(() => {
    if (typeof window === "undefined") return DEFAULT_VARS;
    try {
      const saved = window.localStorage.getItem("criativoos_kit_vars");
      if (!saved) return DEFAULT_VARS;
      const parsed = JSON.parse(saved) as Partial<KitVariables>;
      const merged: KitVariables = { ...DEFAULT_VARS, ...parsed };
      const shouldReplaceLegacyBf = (val?: string) =>
        !val || val.startsWith("#checkout-") || val.toLowerCase().includes("appmax");

      if (shouldReplaceLegacyBf(parsed.linkBfInd)) merged.linkBfInd = DEFAULT_VARS.linkBfInd;
      if (shouldReplaceLegacyBf(parsed.linkBfAg10)) merged.linkBfAg10 = DEFAULT_VARS.linkBfAg10;
      if (shouldReplaceLegacyBf(parsed.linkBfIlim)) merged.linkBfIlim = DEFAULT_VARS.linkBfIlim;
      return merged;
    } catch {
      return DEFAULT_VARS;
    }
  });

  useEffect(() => {
    document.title = "CriativoOS | Central de Mensagens WhatsApp (Grupos & Disparos)";
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("criativoos_kit_vars", JSON.stringify(vars));
    } catch {
      // ignora armazenamento indisponível
    }
  }, [vars]);

  const replacePlaceholders = (templateBody: string): string => {
    return templateBody
      .replaceAll("[NOME]", vars.nomeContato || "[NOME]")
      .replaceAll("[HORARIO_LIVE]", vars.horarioLive || "Quinta-feira às 20h00")
      .replaceAll("[LINK_APRESENTACAO_MIGRACAO]", vars.linkApresentacaoMigracao)
      .replaceAll("[LINK_APRESENTACAO_BLACK]", vars.linkApresentacaoBlack)
      .replaceAll("[LINK_MIGRACAO_INDIVIDUAL]", vars.linkMigInd)
      .replaceAll("[LINK_MIGRACAO_AG10]", vars.linkMigAg10)
      .replaceAll("[LINK_MIGRACAO_ILIMITADO]", vars.linkMigIlim)
      .replaceAll("[LINK_BF_INDIVIDUAL]", vars.linkBfInd)
      .replaceAll("[LINK_BF_AG10]", vars.linkBfAg10)
      .replaceAll("[LINK_BF_ILIMITADO]", vars.linkBfIlim);
  };

  const messages = useMemo(
    () =>
      WHATSAPP_CAMPAIGN_MESSAGES.filter(
        (m) => m.campaign === campaign && m.channel === channel
      ),
    [campaign, channel]
  );

  const handleCopy = async (id: string, body: string) => {
    const resolved = replacePlaceholders(body);
    try {
      await navigator.clipboard.writeText(resolved);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 2000);
    } catch {
      // Fallback caso clipboard API falhe
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0D0D0D]/95 px-4 py-4 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href="/meu-roteiro"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Teleprompter
            </a>
            <div>
              <h1 className="font-display text-lg font-bold text-white">
                Kit de Mensagens WhatsApp · CriativoOS
              </h1>
              <p className="text-xs text-zinc-400">
                Formatação nativa (*negrito*, _itálico_, ~riscado~) pronta para colar
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowConfig((s) => !s)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white hover:border-[#B9FC01]"
          >
            <Settings2 className="h-4 w-4 text-[#B9FC01]" />
            {showConfig ? "Ocultar Links" : "Editar Links de Checkout / Live"}
          </button>
        </div>

        {/* Painel editável de links antes de copiar */}
        {showConfig && (
          <div className="mx-auto mt-4 grid max-w-6xl gap-3 rounded-2xl border border-white/10 bg-[#141416] p-4 sm:grid-cols-2 lg:grid-cols-3 text-xs">
            {(
              [
                ["horarioLive", "Horário da Live"],
                ["nomeContato", "Placeholder Nome (Disparos 1:1)"],
                ["linkApresentacaoMigracao", "URL /apresentacao-migracao"],
                ["linkApresentacaoBlack", "URL /apresentacao-black"],
                ["linkMigInd", "Checkout Migração Individual (12x R$ 5,09 / R$ 47)"],
                ["linkMigAg10", "Checkout Migração Agência 10 (12x R$ 9,42 / R$ 87)"],
                ["linkMigIlim", "Checkout Migração Ilimitado (12x R$ 10,50 / R$ 97)"],
                ["linkBfInd", "Checkout Black Individual (12x R$ 9,97 / R$ 97,00)"],
                ["linkBfAg10", "Checkout Black Agência 10 (12x R$ 18,20 / R$ 177,00)"],
                ["linkBfIlim", "Checkout Black Ilimitado (12x R$ 20,25 / R$ 197,00)"],
              ] as const
            ).map(([key, label]) => (
              <label key={key} className="block">
                <span className="font-mono text-[10px] text-zinc-400">{label}</span>
                <input
                  type="text"
                  value={vars[key]}
                  onChange={(e) => setVars((prev) => ({ ...prev, [key]: e.target.value }))}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-[#0D0D0D] px-3 py-2 text-xs text-white focus:border-[#B9FC01] focus:outline-none"
                />
              </label>
            ))}
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-8">
        {/* Filtros de Campanha e Canal */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCampaign("migration")}
              className={`rounded-full border px-4 py-2 text-xs font-bold transition ${
                campaign === "migration"
                  ? "border-[#B9FC01] bg-[#B9FC01] text-[#0D0D0D]"
                  : "border-white/10 bg-[#141416] text-zinc-300"
              }`}
            >
              Lançamento 1 · Migração (12x R$ 5,09 a R$ 10,50)
            </button>
            <button
              type="button"
              onClick={() => setCampaign("black")}
              className={`rounded-full border px-4 py-2 text-xs font-bold transition ${
                campaign === "black"
                  ? "border-[#B9FC01] bg-[#B9FC01] text-[#0D0D0D]"
                  : "border-white/10 bg-[#141416] text-zinc-300"
              }`}
            >
              Lançamento 2 · Quinta Black (12x R$ 9,97 a R$ 20,25)
            </button>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setChannel("grupo")}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold ${
                channel === "grupo"
                  ? "border-white bg-white text-[#0D0D0D]"
                  : "border-white/15 bg-[#141416] text-zinc-300"
              }`}
            >
              <Users className="h-3.5 w-3.5" />
              Grupos VIP
            </button>
            <button
              type="button"
              onClick={() => setChannel("disparo_1_1")}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold ${
                channel === "disparo_1_1"
                  ? "border-white bg-white text-[#0D0D0D]"
                  : "border-white/15 bg-[#141416] text-zinc-300"
              }`}
            >
              <User className="h-3.5 w-3.5" />
              Disparos 1:1
            </button>
          </div>
        </div>

        {/* Grade de mensagens */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {messages.map((msg) => {
            const resolved = replacePlaceholders(msg.body);
            const isCopied = copiedId === msg.id;

            return (
              <div
                key={msg.id}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#141416] p-6"
              >
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className="rounded-full bg-[#B9FC01]/15 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#B9FC01]">
                        {msg.code} · {msg.timing}
                      </span>
                      <h2 className="mt-2 font-display text-lg font-bold text-white">
                        {msg.title}
                      </h2>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(msg.id, msg.body)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition ${
                        isCopied
                          ? "bg-emerald-500 text-black"
                          : "volt-button"
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          Copiado!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          Copiar WhatsApp
                        </>
                      )}
                    </button>
                  </div>

                  {/* Balão WhatsApp Preview */}
                  <div className="mt-4 rounded-2xl border border-white/[0.06] bg-[#1F2C34] p-4 text-xs leading-relaxed text-zinc-100">
                    {renderPreviewFormatting(resolved)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
