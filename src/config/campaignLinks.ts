export type CampaignWave = "official" | "migration" | "black";

export interface PlanOfferSpec {
  id: "individual" | "agencia10" | "ilimitado";
  code: "CRIA-IND" | "CRIA-AG10" | "CRIA-AGIL";
  name: string;
  tagline: string;
  priceCash: string;
  installmentsText: string;
  anchorPrice?: string;
  billingCycle: string;
  brandsLimit: string;
  pcsLimit: string;
  criativosCount: string;
  highlighted?: boolean;
  isDecoy?: boolean;
  badge?: string;
  vitalicioIncluded: boolean;
  orderBumpNote?: string;
  checkoutUrl: string;
  features: string[];
}

export const CRIATIVOOS_RELEASE = {
  version: "v1.0.3",
  releasePageUrl: "https://github.com/ivancnogueira/criativo-studio/releases/tag/v1.0.3",
  windowsUrl:
    "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.3/CriativoOS-Setup-1.0.3.exe",
  macDmgUrl:
    "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.3/CriativoOS-1.0.3-universal.dmg",
  macZipUrl:
    "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.3/CriativoOS-1.0.3-universal.zip",
  linuxAppImageUrl:
    "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.3/CriativoOS-1.0.3-x86_64.AppImage",
  linuxTarGzUrl:
    "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.3/CriativoOS-1.0.3-x86_64.tar.gz",
  checksumsUrl:
    "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.3/SHA256SUMS.txt",
} as const;

export const SITE_URLS = {
  domain: "https://criativoos.com.br",
  home: "/",
  presentationMigration: "/apresentacao-migracao",
  presentationBlack: "/apresentacao-black",
  presentationAlias: "/apresentacao",
  presenterScript: "/meu-roteiro",
  whatsappKit: "/kit-whatsapp",
  thankYou: "/obrigado",
} as const;

const env = import.meta.env ?? {};

export const CHECKOUT_URLS = {
  official: {
    individual:
      (env.VITE_CHECKOUT_OFFICIAL_INDIVIDUAL as string | undefined) ||
      "#checkout-oficial-individual",
    agencia10:
      (env.VITE_CHECKOUT_OFFICIAL_AGENCIA10 as string | undefined) ||
      "#checkout-oficial-agencia10",
    ilimitado:
      (env.VITE_CHECKOUT_OFFICIAL_ILIMITADO as string | undefined) ||
      "#checkout-oficial-ilimitado",
  },
  migration: {
    individual:
      (env.VITE_CHECKOUT_MIGRACAO_INDIVIDUAL as string | undefined) ||
      "#checkout-migracao-individual",
    agencia10:
      (env.VITE_CHECKOUT_MIGRACAO_AGENCIA10 as string | undefined) ||
      "#checkout-migracao-agencia10",
    ilimitado:
      (env.VITE_CHECKOUT_MIGRACAO_ILIMITADO as string | undefined) ||
      "#checkout-migracao-ilimitado",
  },
  black: {
    individual:
      (env.VITE_CHECKOUT_BF_INDIVIDUAL as string | undefined) || "#checkout-bf-individual",
    agencia10:
      (env.VITE_CHECKOUT_BF_AGENCIA10 as string | undefined) || "#checkout-bf-agencia10",
    ilimitado:
      (env.VITE_CHECKOUT_BF_ILIMITADO as string | undefined) || "#checkout-bf-ilimitado",
  },
} as const;

export const SUPPORT_WHATSAPP_URL =
  (env.VITE_SUPPORT_WHATSAPP_URL as string | undefined) || "#suporte-whatsapp";

export const OFFICIAL_PUBLIC_PLANS: readonly PlanOfferSpec[] = [
  {
    id: "individual",
    code: "CRIA-IND",
    name: "Individual",
    tagline: "Ideal para criadores, especialistas e negócios próprios.",
    priceCash: "R$ 997",
    installmentsText: "12x de R$ 99,70",
    billingCycle: "Licença Anual com 12 meses de atualizações",
    brandsLimit: "Até 2 marcas",
    pcsLimit: "2 computadores",
    criativosCount: "9 Criativos",
    vitalicioIncluded: false,
    checkoutUrl: CHECKOUT_URLS.official.individual,
    features: [
      "9 Criativos Base (Estratégia, Copy, Carrossel, Posts, Stories, Anúncios e Publicação)",
      "Estúdio visual com calendário do mês e prévia do feed e stories",
      "Peça e aprove suas artes direto pelo seu WhatsApp",
      "Use 10 inteligências artificiais gratuitas já inclusas ou sua conta do ChatGPT, Claude, Gemini ou Grok",
      "Instalador fácil em 1 clique para Windows, Mac e Linux",
    ],
  },
  {
    id: "agencia10",
    code: "CRIA-AG10",
    name: "Agência 10",
    tagline: "Para social medias e equipes que atendem múltiplos clientes.",
    priceCash: "R$ 1.797",
    installmentsText: "12x de R$ 179,70",
    billingCycle: "Licença Anual com 12 meses de atualizações",
    brandsLimit: "Até 10 marcas",
    pcsLimit: "3 computadores",
    criativosCount: "12 Criativos",
    isDecoy: true,
    badge: "Intermediário",
    vitalicioIncluded: false,
    checkoutUrl: CHECKOUT_URLS.official.agencia10,
    features: [
      "Tudo do plano Individual para até 10 marcas separadas",
      "Mais 3 Especialistas Bônus: Rosto Real, Radar de Concorrentes e Apresentações em PDF",
      "Pastas de fotos, logotipos e cores isoladas para cada cliente",
      "Rotinas semanais que preparam pautas e relatórios automaticamente",
      "Suporte prioritário no WhatsApp e atualizações do ciclo anual",
    ],
  },
  {
    id: "ilimitado",
    code: "CRIA-AGIL",
    name: "Agência Ilimitada",
    tagline: "Poder total, marcas sem limite e Estúdio de Vídeos para Reels.",
    priceCash: "R$ 1.997",
    installmentsText: "12x de R$ 199,70",
    billingCycle: "Licença Anual · Apenas +R$ 200 de diferença",
    brandsLimit: "Marcas ilimitadas",
    pcsLimit: "5 computadores",
    criativosCount: "Todos os 15",
    highlighted: true,
    badge: "Mais Escolhido · Melhor Custo-Benefício",
    vitalicioIncluded: false,
    checkoutUrl: CHECKOUT_URLS.official.ilimitado,
    features: [
      "Cadastre quantas marcas e clientes quiser, sem nenhum limite",
      "Todos os 15 Criativos liberados (9 Base + 3 Bônus + 3 Diretores de Vídeo para Reels)",
      "Criação de vídeos verticais dinâmicos com legendas animadas e roteiros prontos",
      "Instale em até 5 computadores da sua equipe com a mesma licença",
      "Atendimento VIP prioritário e todas as atualizações incluídas",
    ],
  },
];

export function getCampaignOfferPlans(edition: "migration" | "black"): readonly PlanOfferSpec[] {
  if (edition === "migration") {
    return [
      {
        id: "individual",
        code: "CRIA-IND",
        name: "Individual",
        tagline: "Migração simbólica para quem cuida do próprio perfil.",
        anchorPrice: "R$ 997",
        priceCash: "R$ 47",
        installmentsText: "à vista na janela de migração",
        billingCycle: "Licença Anual (12 meses)",
        brandsLimit: "2 marcas",
        pcsLimit: "2 PCs",
        criativosCount: "9 Criativos Base",
        vitalicioIncluded: false,
        orderBumpNote:
          "No checkout você também pode adicionar o Vitalício + 6 Criativos extras por +R$ 37.",
        checkoutUrl: CHECKOUT_URLS.migration.individual,
        features: [
          "Substitui o antigo Criativo AI Studio pelo novo aplicativo CriativoOS",
          "9 Criativos Base + Calendário Visual + Aprovação pelo WhatsApp",
          "10 modelos gratuitos no OpenCode ou sua própria assinatura de IA",
        ],
      },
      {
        id: "agencia10",
        code: "CRIA-AG10",
        name: "Agência 10",
        tagline: "Licença anual para atender até 10 marcas ou clientes.",
        anchorPrice: "R$ 1.797",
        priceCash: "R$ 87",
        installmentsText: "à vista na janela de migração",
        billingCycle: "Licença Anual (12 meses)",
        brandsLimit: "10 marcas",
        pcsLimit: "3 PCs",
        criativosCount: "12 Criativos (Base + Bônus)",
        isDecoy: true,
        badge: "Licença Anual",
        vitalicioIncluded: false,
        checkoutUrl: CHECKOUT_URLS.migration.agencia10,
        features: [
          "9 Base + 3 Bônus (Fidelidade de Rosto, Concorrentes e PDFs para Clientes)",
          "Licença anual para até 10 perfis (não inclui o Passaporte Vitalício)",
          "Ativação liberada em até 3 computadores",
        ],
      },
      {
        id: "ilimitado",
        code: "CRIA-AGIL",
        name: "Agência Ilimitada",
        tagline: "Por apenas +R$ 10 você leva Marcas Ilimitadas, Vídeos e Acesso Vitalício.",
        anchorPrice: "R$ 1.997",
        priceCash: "R$ 97",
        installmentsText: "pagamento único · SEM ANUIDADE",
        billingCycle: "PASSAPORTE VITALÍCIO FUNDADOR INCLUSO",
        brandsLimit: "Marcas ilimitadas",
        pcsLimit: "5 PCs",
        criativosCount: "Todos os 15 (+ Vídeos Reels)",
        highlighted: true,
        badge: "VITALÍCIO FUNDADOR INCLUSO · +R$ 10 vs. Ag. 10",
        vitalicioIncluded: true,
        checkoutUrl: CHECKOUT_URLS.migration.ilimitado,
        features: [
          "EXCLUSIVO: Acesso Vitalício sem taxa de renovação anual incluso sem custo extra",
          "Marcas e clientes ilimitados em até 5 computadores",
          "Todos os 15 Criativos completos incluindo os 3 Diretores de Vídeos para Reels",
        ],
      },
    ];
  }

  return [
    {
      id: "individual",
      code: "CRIA-IND",
      name: "Individual",
      tagline: "Condição de Black Friday para criar conteúdo para a sua marca.",
      anchorPrice: "R$ 997",
      priceCash: "R$ 97",
      installmentsText: "ou 12x de R$ 9,74",
      billingCycle: "Licença Anual (12 meses)",
      brandsLimit: "2 marcas",
      pcsLimit: "2 PCs",
      criativosCount: "9 Criativos Base",
      vitalicioIncluded: false,
      orderBumpNote:
        "No checkout você também pode adicionar o Vitalício + 6 Criativos extras por +R$ 67.",
      checkoutUrl: CHECKOUT_URLS.black.individual,
      features: [
        "Aplicativo CriativoOS completo para Windows, Mac e Linux",
        "9 Criativos Base + Calendário Visual + Postagem oficial no Instagram",
        "Peça e aprove tudo direto pelo seu WhatsApp",
      ],
    },
    {
      id: "agencia10",
      code: "CRIA-AG10",
      name: "Agência 10",
      tagline: "Licença anual intermediária para até 10 marcas ou clientes.",
      anchorPrice: "R$ 1.797",
      priceCash: "R$ 177",
      installmentsText: "ou 12x de R$ 17,77",
      billingCycle: "Licença Anual (12 meses)",
      brandsLimit: "10 marcas",
      pcsLimit: "3 PCs",
      criativosCount: "12 Criativos (Base + Bônus)",
      isDecoy: true,
      badge: "Licença Anual",
      vitalicioIncluded: false,
      checkoutUrl: CHECKOUT_URLS.black.agencia10,
      features: [
        "9 Base + 3 Bônus (Fidelidade de Rosto, Concorrentes e PDFs para Clientes)",
        "Licença anual (não inclui o Passaporte Vitalício)",
        "Até 10 marcas em 3 computadores",
      ],
    },
    {
      id: "ilimitado",
      code: "CRIA-AGIL",
      name: "Agência Ilimitada",
      tagline: "Por apenas +R$ 20 você libera Marcas Ilimitadas, Vídeos e Acesso Vitalício.",
      anchorPrice: "R$ 1.997",
      priceCash: "R$ 197",
      installmentsText: "ou 12x de R$ 19,78 · SEM ANUIDADE",
      billingCycle: "PASSAPORTE VITALÍCIO BLACK FRIDAY INCLUSO",
      brandsLimit: "Marcas ilimitadas",
      pcsLimit: "5 PCs",
      criativosCount: "Todos os 15 (+ Vídeos Reels)",
      highlighted: true,
      badge: "VITALÍCIO BLACK FRIDAY INCLUSO · +R$ 20 vs. Ag. 10",
      vitalicioIncluded: true,
      checkoutUrl: CHECKOUT_URLS.black.ilimitado,
      features: [
        "EXCLUSIVO: Acesso Vitalício sem mensalidade e sem renovação anual incluso",
        "Marcas e clientes ilimitados em até 5 computadores",
        "Todos os 15 Criativos completos incluindo os 3 Diretores de Vídeos para Reels",
      ],
    },
  ];
}
