import React, { useState } from "react";
import { AlertTriangle, Check, Link2 } from "lucide-react";
import {
  CHANGELOG_CATEGORY_META,
  type ChangelogFilter,
  type ChangelogRelease,
} from "../../data/changelogData";
import { ChangelogInlineText } from "./ChangelogInlineText";

const LONG_DATE_FORMATTER = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatReleaseDateLong(date: string): string {
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;
  return LONG_DATE_FORMATTER.format(parsed);
}

interface ChangelogReleaseCardProps {
  release: ChangelogRelease;
  isLatest: boolean;
  activeFilter: ChangelogFilter;
  searchQuery: string;
}

export const ChangelogReleaseCard: React.FC<ChangelogReleaseCardProps> = ({
  release,
  isLatest,
  activeFilter,
  searchQuery,
}) => {
  const [copied, setCopied] = useState(false);
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const visibleGroups = release.groups
    .filter((group) => activeFilter === "all" || group.type === activeFilter)
    .map((group) => ({
      ...group,
      items: normalizedQuery
        ? group.items.filter((item) => item.toLowerCase().includes(normalizedQuery))
        : group.items,
    }))
    .filter((group) => group.items.length > 0);

  const handleCopyAnchor = async () => {
    const url = `${window.location.origin}/changelog#${release.anchor}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.history.replaceState(null, "", `#${release.anchor}`);
    }
  };

  return (
    <article
      id={release.anchor}
      aria-labelledby={`${release.anchor}-title`}
      className="scroll-mt-28 border-b border-white/[0.08] pb-14 last:border-b-0 last:pb-4"
    >
      <header className="mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <time
            dateTime={release.date}
            className="font-mono text-xs font-medium uppercase tracking-wider text-slate-400"
          >
            {formatReleaseDateLong(release.date)}
          </time>

          {isLatest && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B9FC01]/40 bg-[#B9FC01]/12 px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide text-[#B9FC01]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B9FC01] animate-pulse" />
              Mais recente
            </span>
          )}
        </div>

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-3">
          <h2
            id={`${release.anchor}-title`}
            className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
          >
            <a
              href={`#${release.anchor}`}
              className="group inline-flex items-baseline gap-2.5 transition hover:text-[#B9FC01]"
            >
              <span>CriativoOS</span>
              <span className="font-mono text-xl font-bold text-[#B9FC01] sm:text-2xl">
                {release.version}
              </span>
            </a>
          </h2>

          <button
            type="button"
            onClick={handleCopyAnchor}
            aria-label={`Copiar link da versão ${release.version}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#0D0F17] px-2.5 py-1.5 font-mono text-[11px] font-medium text-slate-400 transition hover:border-[#B9FC01]/40 hover:text-white"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-[#B9FC01]" />
                <span className="text-[#B9FC01]">Link copiado</span>
              </>
            ) : (
              <>
                <Link2 className="h-3.5 w-3.5" />
                <span>#{release.anchor}</span>
              </>
            )}
          </button>
        </div>

        <p className="mt-3 text-base leading-relaxed text-slate-300">{release.summary}</p>
      </header>

      {release.notices && release.notices.length > 0 && (
        <div
          role="note"
          aria-labelledby={`${release.anchor}-notice`}
          className="mb-7 rounded-2xl border border-amber-400/30 bg-amber-400/[0.06] p-4 sm:p-5"
        >
          <p
            id={`${release.anchor}-notice`}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300"
          >
            <AlertTriangle className="h-4 w-4 shrink-0" />
            <span>O que fazer após atualizar</span>
          </p>
          <ul className="mt-2.5 space-y-1.5 text-sm leading-relaxed text-amber-100/90">
            {release.notices.map((notice, idx) => (
              <li key={idx}>
                <ChangelogInlineText text={notice} />
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-7">
        {visibleGroups.map((group) => {
          const meta = CHANGELOG_CATEGORY_META[group.type];
          return (
            <section
              key={group.type}
              aria-label={`${group.heading} da versão ${release.version}`}
              className="rounded-2xl border border-white/[0.07] bg-[#0D0F17]/75 p-5 sm:p-6"
            >
              <h3 className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-white">
                <span className={`h-2 w-2 rounded-full ${meta.dotClass}`} aria-hidden="true" />
                <span>{group.heading}</span>
                <span
                  className={`ml-auto rounded-full border px-2 py-0.5 font-mono text-[11px] font-semibold ${meta.badgeClass}`}
                >
                  {group.items.length}
                </span>
              </h3>

              <ul className="mt-4 space-y-3">
                {group.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="relative pl-5 text-sm leading-relaxed text-slate-300 sm:text-[15px]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.62em] h-1.5 w-1.5 rounded-full bg-slate-500"
                    />
                    <ChangelogInlineText text={item} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </article>
  );
};
