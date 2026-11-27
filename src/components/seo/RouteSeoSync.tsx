import { useEffect } from "react";

interface RouteSeoMeta {
  title: string;
  description: string;
  robots: string;
  canonicalPath: string;
}

const DOMAIN = "https://criativoos.com.br";

const HOME_SEO: RouteSeoMeta = {
  title: "CriativoOS | Equipe de 15 Especialistas com IA e Automacao no Seu Computador",
  description:
    "Centralize operacao de computador, navegador inteligente, +253 aplicativos e 15 Criativos de IA com seu rosto real, nuvem 24h e aprovacao pelo WhatsApp.",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  canonicalPath: "/",
};

const ROUTE_SEO_MAP: Record<string, RouteSeoMeta> = {
  "/": HOME_SEO,
  "/apresentacao-migracao": {
    title: "CriativoOS | Apresentacao Exclusiva da Base",
    description: "Apresentacao privada Nivel Omega para condicao especial de migracao.",
    robots: "noindex, nofollow",
    canonicalPath: "/apresentacao-migracao",
  },
  "/apresentacao-black": {
    title: "CriativoOS | Apresentacao Especial Black",
    description: "Apresentacao privada Nivel Omega da condicao especial de lancamento.",
    robots: "noindex, nofollow",
    canonicalPath: "/apresentacao-black",
  },
  "/apresentacao": {
    title: "CriativoOS | Apresentacao Oficial",
    description: "Apresentacao privada Nivel Omega CriativoOS.",
    robots: "noindex, nofollow",
    canonicalPath: "/apresentacao",
  },
  "/meu-roteiro": {
    title: "CriativoOS | Teleprompter de Apresentacao",
    description: "Roteiro interno sincronizado para conducao ao vivo.",
    robots: "noindex, nofollow",
    canonicalPath: "/meu-roteiro",
  },
  "/kit-whatsapp": {
    title: "CriativoOS | Kit de Disparos WhatsApp",
    description: "Mensagens operacionais de campanha para grupos VIP e atendimento.",
    robots: "noindex, nofollow",
    canonicalPath: "/kit-whatsapp",
  },
  "/obrigado": {
    title: "CriativoOS | Download e Ativacao Oficial",
    description: "Area de download dos instaladores do CriativoOS e ativacao da licenca.",
    robots: "noindex, nofollow",
    canonicalPath: "/obrigado",
  },
  "/changelog": {
    title: "CriativoOS | Changelog e Notas de Versao",
    description:
      "Acompanhe todas as atualizacoes do CriativoOS da versao mais recente a mais antiga: novidades, melhorias, correcoes e orientacoes apos atualizar.",
    robots:
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    canonicalPath: "/changelog",
  },
  "/suporte": {
    title: "CriativoOS | Central de Suporte e Tickets",
    description: "Central oficial de autoatendimento e abertura de chamados CriativoOS.",
    robots: "noindex, nofollow",
    canonicalPath: "/suporte",
  },
  "/suporte/admin": {
    title: "CriativoOS | Painel Administrativo de Suporte",
    description: "Painel interno de gestao de chamados.",
    robots: "noindex, nofollow",
    canonicalPath: "/suporte/admin",
  },
};

function upsertMeta(attr: "name" | "property", key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sincroniza title, description, robots e canonical de acordo com a rota ativa,
 * mantendo a Home indexavel e protegendo paginas privadas de campanha e pos-compra.
 */
export const RouteSeoSync: React.FC<{ pathname: string }> = ({ pathname }) => {
  useEffect(() => {
    const meta = ROUTE_SEO_MAP[pathname] ?? HOME_SEO;
    const canonicalUrl = `${DOMAIN}${meta.canonicalPath}`;

    document.title = meta.title;
    upsertMeta("name", "description", meta.description);
    upsertMeta("name", "robots", meta.robots);
    upsertMeta("name", "googlebot", meta.robots);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertCanonical(canonicalUrl);
  }, [pathname]);

  return null;
};
