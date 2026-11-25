const DEFAULT_REPO = "ivancnogueira/criativo-studio";
const CACHE_TTL_MS = 5 * 60 * 1000;

export const FALLBACK_RELEASE = {
  version: "v1.0.4",
  cleanVersion: "1.0.4",
  publishedAt: null,
  releasePageUrl: "https://github.com/ivancnogueira/criativo-studio/releases/tag/v1.0.4",
  windows: {
    filename: "CriativoOS-Setup-1.0.4.exe",
    url: "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.4/CriativoOS-Setup-1.0.4.exe",
    sizeBytes: null,
  },
  macDmg: {
    filename: "CriativoOS-1.0.4-universal.dmg",
    url: "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.4/CriativoOS-1.0.4-universal.dmg",
    sizeBytes: null,
  },
  macZip: {
    filename: "CriativoOS-1.0.4-universal.zip",
    url: "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.4/CriativoOS-1.0.4-universal.zip",
    sizeBytes: null,
  },
  linuxAppImage: {
    filename: "CriativoOS-1.0.4-x86_64.AppImage",
    url: "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.4/CriativoOS-1.0.4-x86_64.AppImage",
    sizeBytes: null,
  },
  linuxTarGz: {
    filename: "CriativoOS-1.0.4-x86_64.tar.gz",
    url: "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.4/CriativoOS-1.0.4-x86_64.tar.gz",
    sizeBytes: null,
  },
  checksumsUrl: "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.4/SHA256SUMS.txt",
  source: "fallback",
};

let releaseCache = {
  repo: null,
  fetchedAt: 0,
  data: null,
};

function pickAsset(assets, matcher, fallbackItem) {
  const found = assets.find((asset) => {
    const name = String(asset?.name || "");
    const lower = name.toLowerCase();
    return Boolean(asset?.browser_download_url) && !lower.endsWith(".blockmap") && matcher(lower, name);
  });
  if (!found) return { ...fallbackItem };
  return {
    filename: String(found.name),
    url: String(found.browser_download_url),
    sizeBytes: Number.isFinite(Number(found.size)) ? Number(found.size) : null,
  };
}

export function parseGithubReleasePayload(ghData) {
  const rawTag = String(ghData?.tag_name || FALLBACK_RELEASE.version).trim();
  const version = rawTag.startsWith("v") ? rawTag : `v${rawTag}`;
  const cleanVersion = version.replace(/^v/i, "");
  const assets = Array.isArray(ghData?.assets) ? ghData.assets : [];

  const windows = pickAsset(assets, (lower) => lower.endsWith(".exe"), FALLBACK_RELEASE.windows);
  const macDmg = pickAsset(assets, (lower) => lower.endsWith(".dmg"), FALLBACK_RELEASE.macDmg);
  const macZip = pickAsset(
    assets,
    (lower) => lower.endsWith(".zip") && (lower.includes("mac") || lower.includes("darwin") || lower.includes("universal")),
    FALLBACK_RELEASE.macZip
  );
  const linuxAppImage = pickAsset(assets, (lower) => lower.endsWith(".appimage"), FALLBACK_RELEASE.linuxAppImage);
  const linuxTarGz = pickAsset(assets, (lower) => lower.endsWith(".tar.gz"), FALLBACK_RELEASE.linuxTarGz);
  const checksumAsset = assets.find((a) => String(a?.name || "").toLowerCase() === "sha256sums.txt");

  return {
    version,
    cleanVersion,
    publishedAt: ghData?.published_at ? String(ghData.published_at) : null,
    releasePageUrl: ghData?.html_url ? String(ghData.html_url) : `https://github.com/${DEFAULT_REPO}/releases/tag/${version}`,
    windows,
    macDmg,
    macZip,
    linuxAppImage,
    linuxTarGz,
    checksumsUrl: checksumAsset?.browser_download_url
      ? String(checksumAsset.browser_download_url)
      : FALLBACK_RELEASE.checksumsUrl,
    source: "github-live",
  };
}

export async function getLatestReleaseInfo({
  repo = process.env.CRIATIVOOS_RELEASE_REPO || DEFAULT_REPO,
  fetchImpl = globalThis.fetch,
  forceRefresh = false,
} = {}) {
  if (process.env.CRIATIVOOS_DISABLE_EXTERNAL_RELEASE_FETCH === "1" || typeof fetchImpl !== "function") {
    return { ...FALLBACK_RELEASE, source: "fallback" };
  }

  const now = Date.now();
  if (
    !forceRefresh &&
    releaseCache.data &&
    releaseCache.repo === repo &&
    now - releaseCache.fetchedAt < CACHE_TTL_MS
  ) {
    return { ...releaseCache.data, source: "cache" };
  }

  try {
    const headers = {
      Accept: "application/vnd.github+json",
      "User-Agent": "CriativoOS-Site/1.0",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetchImpl(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers,
      signal: typeof AbortSignal?.timeout === "function" ? AbortSignal.timeout(4000) : undefined,
    });
    if (!res.ok) {
      throw new Error(`GitHub HTTP ${res.status}`);
    }

    const ghData = await res.json();
    const parsed = parseGithubReleasePayload(ghData);
    releaseCache = {
      repo,
      fetchedAt: now,
      data: parsed,
    };
    return parsed;
  } catch {
    if (releaseCache.data && releaseCache.repo === repo) {
      return { ...releaseCache.data, source: "stale-cache" };
    }
    return { ...FALLBACK_RELEASE, source: "fallback" };
  }
}
