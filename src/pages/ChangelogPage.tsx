import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Download,
  ExternalLink,
  RotateCcw,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import {
  CRIATIVOOS_CHANGELOG_RELEASES,
  type ChangelogFilter,
  type ChangelogRelease,
} from "../data/changelogData";
import { CRIATIVOOS_RELEASE, SITE_URLS } from "../config/campaignLinks";
import { ChangelogReleaseCard, formatReleaseDateLong } from "../components/changelog/ChangelogReleaseCard";
import { Footer } from "../components/landing/Footer";
import { SpecularButton } from "../components/fx/SpecularButton";

const MONTH_LABEL_FORMATTER = new Intl.DateTimeFormat("pt-BR", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const SHORT_DAY_FORMATTER = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  timeZone: "UTC",
});

const FILTER_TABS: readonly { id: ChangelogFilter; label: string }[] = [
  { id: "all", label: "Tudo" },
  { id: "added", label: "Novidades" },
  { id: "changed", label: "Melhorias" },
  { id: "fixed", label: "Correções" },
];

interface MonthBucket {
  label: string;
  releases: ChangelogRelease[];
}

function groupReleasesByMonth(releases: readonly ChangelogRelease[]): MonthBucket[] {
  const buckets: MonthBucket[] = [];
  for (const release of releases) {
    const parsed = new Date(`${release.date}T00:00:00Z`);
    const rawLabel = Number.isNaN(parsed.getTime()) ? "" : MONTH_LABEL_FORMATTER.format(parsed);
    const label = rawLabel ? rawLabel.charAt(0).toUpperCase() + rawLabel.slice(1) : "";
    const current = buckets[buckets.length - 1];
    if (current && current.label === label) {
      current.releases.push(release);
    } else {
      buckets.push({ label, releases: [release] });
    }
  }
  return buckets;
}

function formatShortDay(date: string): string {
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;
  return SHORT_DAY_FORMATTER.format(parsed).replace(".", "");
}

function releaseMatches(
  release: ChangelogRelease,
  filter: ChangelogFilter,
  query: string
): boolean {
  const normalized = query.trim().toLowerCase();
  const hasGroup = release.groups.some((group) => {
    if (filter !== "all" && group.type !== filter) return false;
    if (!normalized) return group.items.length > 0;
    return group.items.some((item) => item.toLowerCase().includes(normalized));
  });
  if (hasGroup) return true;
  if (!normalized) return false;
  return (
    filter === "all" &&
    (release.version.toLowerCase().includes(normalized) ||
      release.summary.toLowerCase().includes(normalized))
  );
}

export const ChangelogPage: React.FC = () => {
  const [filter, setFilter] = useState<ChangelogFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAnchor, setActiveAnchor] = useState<string>(
    CRIATIVOOS_CHANGELOG_RELEASES[0]?.anchor ?? "v1-0-9"
  );
  const [latestReleaseUrl, setLatestReleaseUrl] = useState<string>(
    CRIATIVOOS_RELEASE.releasePageUrl
  );

  const indexScrollRef = useRef<HTMLDivElement | null>(null);

  const filteredReleases = useMemo(
    () =>
      CRIATIVOOS_CHANGELOG_RELEASES.filter((release) =>
        releaseMatches(release, filter, searchQuery)
      ),
    [filter, searchQuery]
  );

  const monthBuckets = useMemo(
    () => groupReleasesByMonth(filteredReleases),
    [filteredReleases]
  );

  const latestRelease = CRIATIVOOS_CHANGELOG_RELEASES[0];

  // Sincroniza URL da release no GitHub caso haja publicação mais nova no endpoint dinâmico
  useEffect(() => {
    let cancelled = false;
    fetch("/api/release/latest", { headers: { Accept: "application/json" } })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { releasePageUrl?: string } | null) => {
        if (!cancelled && data?.releasePageUrl) {
          setLatestReleaseUrl(data.releasePageUrl);
        }
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  // Rola até a âncora inicial (ex.: /changelog#v1-0-6) ao abrir a página
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const target = document.getElementById(hash);
    if (target) {
      setActiveAnchor(hash);
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  // Scroll-spy para destacar no índice lateral a versão visível na tela
  useEffect(() => {
    if (filteredReleases.length === 0) return;

    let frame = 0;
    const updateActive = () => {
      frame = 0;
      const threshold = window.innerHeight * 0.3;
      let current = filteredReleases[0].anchor;
      for (const rel of filteredReleases) {
        const el = document.getElementById(rel.anchor);
        if (!el) continue;
        if (el.getBoundingClientRect().top > threshold) break;
        current = rel.anchor;
      }
      setActiveAnchor((prev) => {
        if (prev === current) return prev;
        const container = indexScrollRef.current;
        const link = container?.querySelector<HTMLElement>(`a[href="#${current}"]`);
        if (container && link) {
          const box = container.getBoundingClientRect();
          const row = link.getBoundingClientRect();
          if (row.top < box.top || row.bottom > box.bottom) {
            container.scrollTo({
              top: container.scrollTop + row.top - box.top - (box.height - row.height) / 2,
              behavior: "smooth",
            });
          }
        }
        return current;
      });
    };

    const schedule = () => {
      if (frame === 0) frame = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame !== 0) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [filteredReleases]);

  const handleResetFilters = () => {
    setFilter("all");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-[#07080C] text-white">
      {/* Header fixo estilo floating bar com blur */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#07080C]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href={SITE_URLS.home} className="flex items-center gap-3 focus:outline-none" aria-label="CriativoOS Início">
            <img src="/logo-criativoos-dark.svg" alt="CriativoOS" className="h-7 w-auto" />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
            <a href={SITE_URLS.home} className="transition hover:text-[#B9FC01]">
              Início
            </a>
            <a href="/#equipe" className="transition hover:text-[#B9FC01]">
              Os 15 Criativos
            </a>
            <a href="/#planos" className="transition hover:text-[#B9FC01]">
              Planos
            </a>
            <a
              href={SITE_URLS.changelog}
              aria-current="page"
              className="text-[#B9FC01]"
            >
              Changelog
            </a>
            <a href={SITE_URLS.supportCenter} className="transition hover:text-[#B9FC01]">
              Suporte
            </a>
          </nav>

          <SpecularButton href="/#planos" size="md" variant="volt" className="!py-2.5 !px-5 !text-xs sm:!text-sm">
            <span>Começar Agora</span>
            <ArrowRight className="h-4 w-4" />
          </SpecularButton>
        </div>
      </header>

      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Hero Editorial Atmosférico */}
          <section
            aria-labelledby="changelog-title"
            className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0D0F17] px-6 py-10 sm:px-10 sm:py-14"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-20 h-80 w-80 rounded-full bg-[#B9FC01]/15 blur-[95px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#0031CC]/30 blur-[90px]"
            />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-[#B9FC01]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Changelog Oficial</span>
              </div>

              <h1
                id="changelog-title"
                className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl"
              >
                O que há de novo no{" "}
                <span className="text-[#B9FC01]">CriativoOS</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                Novos motores de IA, melhorias de velocidade no Cockpit e na Nuvem 24h, ferramentas de vídeo e correções contínuas. Todas as versões publicadas estão aqui, da mais recente para a mais antiga, com orientações práticas após atualizar.
              </p>
            </div>
          </section>

          {/* Faixa de Última Versão (estilo Latest release) */}
          {latestRelease && (
            <section
              aria-label="Última versão publicada"
              className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/[0.09] bg-[#131622]/90 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-slate-300">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#B9FC01] shadow-[0_0_12px_rgba(185,252,1,0.9)]" />
                <span className="font-medium text-slate-400">Última versão</span>
                <a
                  href={`#${latestRelease.anchor}`}
                  className="rounded-lg border border-[#B9FC01]/40 bg-[#B9FC01]/10 px-2.5 py-0.5 font-mono text-sm font-bold text-[#B9FC01] transition hover:bg-[#B9FC01]/20"
                >
                  {latestRelease.version}
                </a>
                <span className="text-slate-500">·</span>
                <span className="text-slate-300">{formatReleaseDateLong(latestRelease.date)}</span>
                <span className="hidden text-slate-500 sm:inline">·</span>
                <span className="hidden font-mono text-xs text-slate-400 sm:inline">
                  {CRIATIVOOS_CHANGELOG_RELEASES.length} versões registradas
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={SITE_URLS.thankYou}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#0D0F17] px-3.5 py-2 text-xs font-bold text-white transition hover:border-[#B9FC01]/50 hover:text-[#B9FC01]"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Baixar instaladores</span>
                </a>
                <a
                  href={latestReleaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-slate-300 transition hover:border-white/25 hover:text-white"
                >
                  <span>Release no GitHub</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </section>
          )}

          {/* Barra móvel de acesso rápido às versões (telas < lg) */}
          <div className="mt-6 lg:hidden">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {filteredReleases.map((rel) => {
                const active = activeAnchor === rel.anchor;
                return (
                  <a
                    key={rel.anchor}
                    href={`#${rel.anchor}`}
                    onClick={() => setActiveAnchor(rel.anchor)}
                    className={`shrink-0 rounded-full border px-3 py-1.5 font-mono text-xs font-bold transition ${
                      active
                        ? "border-[#B9FC01]/60 bg-[#B9FC01]/15 text-[#B9FC01]"
                        : "border-white/10 bg-[#0D0F17] text-slate-400 hover:text-white"
                    }`}
                  >
                    {rel.version}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Layout Principal em 2 Colunas */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
            {/* Índice Lateral Sticky */}
            <aside className="space-y-5 lg:sticky lg:top-24">
              {/* Filtro por categoria */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#0D0F17] p-3">
                <p className="mb-2 px-1 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Filtrar notas
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {FILTER_TABS.map((tab) => {
                    const selected = filter === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setFilter(tab.id)}
                        className={`rounded-xl px-2.5 py-1.5 text-xs font-semibold transition ${
                          selected
                            ? "bg-[#B9FC01] text-[#07080C] shadow-[0_0_18px_rgba(185,252,1,0.28)]"
                            : "bg-white/[0.03] text-slate-300 hover:bg-white/[0.08] hover:text-white"
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Busca rápida */}
                <div className="relative mt-3">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar recurso ou versão..."
                    aria-label="Buscar nas notas de versão"
                    className="w-full rounded-xl border border-white/10 bg-[#07080C] py-2 pl-8 pr-8 text-xs text-white placeholder-slate-500 focus:border-[#B9FC01]/60 focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      aria-label="Limpar busca"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Índice cronológico por mês */}
              <nav
                aria-label="Índice de versões do CriativoOS"
                className="hidden rounded-2xl border border-white/[0.08] bg-[#0D0F17] p-4 lg:block"
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Versões
                  </p>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-slate-300">
                    {filteredReleases.length}
                  </span>
                </div>

                <div
                  ref={indexScrollRef}
                  className="mt-4 max-h-[55vh] space-y-5 overflow-y-auto pr-1"
                >
                  {monthBuckets.map((bucket) => (
                    <div key={bucket.label}>
                      {bucket.label && (
                        <p className="mb-2 px-2 text-[11px] font-semibold text-slate-500">
                          {bucket.label}
                        </p>
                      )}
                      <ul className="space-y-1">
                        {bucket.releases.map((rel) => {
                          const isCurrent = activeAnchor === rel.anchor;
                          return (
                            <li key={rel.anchor}>
                              <a
                                href={`#${rel.anchor}`}
                                aria-current={isCurrent ? "true" : undefined}
                                onClick={() => setActiveAnchor(rel.anchor)}
                                className={`flex items-center justify-between rounded-xl px-2.5 py-2 text-xs transition ${
                                  isCurrent
                                    ? "border border-[#B9FC01]/35 bg-[#B9FC01]/12 font-bold text-[#B9FC01]"
                                    : "border border-transparent text-slate-300 hover:bg-white/[0.04] hover:text-white"
                                }`}
                              >
                                <span className="font-mono">{rel.version}</span>
                                <time
                                  dateTime={rel.date}
                                  className={`font-mono text-[11px] ${
                                    isCurrent ? "text-[#B9FC01]/80" : "text-slate-500"
                                  }`}
                                >
                                  {formatShortDay(rel.date)}
                                </time>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </nav>
            </aside>

            {/* Coluna do Feed de Versões */}
            <div className="space-y-14">
              {filteredReleases.length > 0 ? (
                filteredReleases.map((release) => (
                  <ChangelogReleaseCard
                    key={release.anchor}
                    release={release}
                    isLatest={release.version === latestRelease?.version}
                    activeFilter={filter}
                    searchQuery={searchQuery}
                  />
                ))
              ) : (
                <div className="rounded-3xl border border-white/10 bg-[#0D0F17] p-10 text-center">
                  <p className="font-display text-xl font-bold text-white">
                    Nenhuma nota encontrada para este filtro
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Tente limpar a busca ou voltar para a visualização completa de todas as atualizações.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#B9FC01]/40 bg-[#B9FC01]/10 px-4 py-2 text-xs font-bold text-[#B9FC01] transition hover:bg-[#B9FC01]/20"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Limpar filtros</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* CTA Final */}
          <section className="mt-20 rounded-3xl border border-[#B9FC01]/25 bg-gradient-to-br from-[#131622] via-[#0D0F17] to-[#07080C] p-8 sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B9FC01]">
                  Evolução contínua sem mensalidade por crédito
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
                  Pronto para operar o CriativoOS no seu computador e na Nuvem 24h?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Garanta sua licença oficial com os 15 Criativos especializados, navegador inteligente, +253 aplicativos conectados e atualizações automáticas dentro do seu ciclo.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <SpecularButton href="/#planos" size="md" variant="volt">
                  <span>Ver Planos Oficiais</span>
                  <ArrowRight className="h-4 w-4" />
                </SpecularButton>
                <a
                  href={SITE_URLS.supportCenter}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:text-white"
                >
                  Central de Suporte
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};
