export type CampaignWave = "official" | "migration" | "black";

export interface PlanOfferSpec {
  id: "individual" | "agencia10" | "ilimitado";
  code: "CRIA-IND" | "CRIA-AG10" | "CRIA-AGIL";
  name: string;
  tagline: string;
  installmentValue: string;
  installmentsText: string;
  priceCash: string;
  anchorInstallments?: string;
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
  githubRepo: "ivancnogueira/criativo-studio",
  version: "v1.0.4",
  releasePageUrl: "https://github.com/ivancnogueira/criativo-studio/releases/tag/v1.0.4",
  windowsFilename: "CriativoOS-Setup-1.0.4.exe",
  windowsUrl:
    "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.4/CriativoOS-Setup-1.0.4.exe",
  macDmgFilename: "CriativoOS-1.0.4-universal.dmg",
  macDmgUrl:
    "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.4/CriativoOS-1.0.4-universal.dmg",
  macZipFilename: "CriativoOS-1.0.4-universal.zip",
  macZipUrl:
    "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.4/CriativoOS-1.0.4-universal.zip",
  linuxAppImageFilename: "CriativoOS-1.0.4-x86_64.AppImage",
  linuxAppImageUrl:
    "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.4/CriativoOS-1.0.4-x86_64.AppImage",
  linuxTarGzFilename: "CriativoOS-1.0.4-x86_64.tar.gz",
  linuxTarGzUrl:
    "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.4/CriativoOS-1.0.4-x86_64.tar.gz",
  checksumsUrl:
    "https://github.com/ivancnogueira/criativo-studio/releases/download/v1.0.4/SHA256SUMS.txt",
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
  supportCenter: "/suporte",
  supportAdmin: "/suporte/admin",
} as const;

export const WHATSAPP_COMMUNITY_URL =
  "https://chat.whatsapp.com/FxVkK9yXv9vC22HcYb2mYV";

export const SUPPORT_EMAIL = "suporte@criativoos.com.br";

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
      "https://payfast.greenn.com.br/207841/offer/OCTWeq?b_id_1=207842&b_offer_1=IMkvZN",
    agencia10:
      "https://payfast.greenn.com.br/207841/offer/kcnsgN?b_id_1=207842&b_offer_1=IMkvZN",
    ilimitado:
      "https://payfast.greenn.com.br/207841?ch_id=145806&b_id_1=207842&b_offer_1=IMkvZN",
  },
} as const;

export const SUPPORT_CENTER_URL = SITE_URLS.supportCenter;

export const SUPPORT_WHATSAPP_URL =
  (env.VITE_SUPPORT_WHATSAPP_URL as string | undefined) || SITE_URLS.supportCenter;

export const OFFICIAL_PUBLIC_PLANS: readonly PlanOfferSpec[] = [
  {
    id: "individual",
    code: "CRIA-IND",
    name: "Individual",
    tagline: "Ideal para criadores, especialistas e negócios próprios.",
    installmentValue: "R$ 32,15",
    installmentsText: "12x de R$ 32,15",
    priceCash: "R$ 297",
    billingCycle: "Licença Anual com 12 meses de atualizações",
    brandsLimit: "Até 2 marcas",
    pcsLimit: "2 computadores",
    criativosCount: "9 Criativos Base",
    vitalicioIncluded: false,
    orderBumpNote:
      "Opcional no checkout: adicione Acesso Vitalício + 6 Criativos extras (todos os 15 para até 2 marcas) por +R$ 97.",
    checkoutUrl: CHECKOUT_URLS.official.individual,
    features: [
      "Operador de Computador, Navegador Inteligente e +253 aplicativos conectados em rotinas visuais",
      "9 Criativos Base (Estratégia, Copy, Carrossel, Posts, Stories, Anúncios e Publicação Oficial)",
      "Peça tarefas e aprove criações direto pelo seu WhatsApp, além de calendário visual do mês",
      "10 inteligências artificiais gratuitas já inclusas ou sua conta do ChatGPT, Claude, Gemini ou Grok",
      "Área de Membros com aulas passo a passo, Comunidade Oficial no WhatsApp e Central de Ajuda",
    ],
  },
  {
    id: "agencia10",
    code: "CRIA-AG10",
    name: "Agência 10",
    tagline: "Para social medias e empresas que atendem múltiplos clientes.",
    installmentValue: "R$ 97,09",
    installmentsText: "12x de R$ 97,09",
    priceCash: "R$ 897",
    billingCycle: "Licença Anual com 12 meses de atualizações",
    brandsLimit: "Até 10 marcas",
    pcsLimit: "3 computadores",
    criativosCount: "12 Criativos",
    isDecoy: true,
    badge: "Intermediário",
    vitalicioIncluded: false,
    checkoutUrl: CHECKOUT_URLS.official.agencia10,
    features: [
      "Todas as automações de computador, navegador e +253 apps para até 10 marcas separadas",
      "Mais 3 Especialistas Bônus: Rosto Real, Radar de Concorrentes e Apresentações em PDF",
      "Pastas de fotos, logotipos, senhas e rotinas isoladas para cada cliente",
      "Rotinas semanais que preparam pautas e relatórios automáticos na nuvem 24h",
      "Área de Membros completa, Comunidade Oficial e Central de Chamados incluídas",
    ],
  },
  {
    id: "ilimitado",
    code: "CRIA-AGIL",
    name: "Agência Ilimitada",
    tagline: "Poder total, marcas sem limite e Estúdio de Vídeos para Reels.",
    installmentValue: "R$ 107,91",
    installmentsText: "12x de R$ 107,91",
    priceCash: "R$ 997",
    billingCycle: "Licença Anual · Apenas +R$ 10,82/mês de diferença",
    brandsLimit: "Marcas ilimitadas",
    pcsLimit: "5 computadores",
    criativosCount: "Todos os 15",
    highlighted: true,
    badge: "Mais Escolhido · Melhor Custo-Benefício",
    vitalicioIncluded: false,
    checkoutUrl: CHECKOUT_URLS.official.ilimitado,
    features: [
      "Cadastre quantas marcas, servidores na nuvem 24h e clientes quiser, sem limite",
      "Todos os 15 Criativos liberados (9 Base + 3 Bônus + 3 Diretores de Vídeo para Reels)",
      "Operador de Computador, Navegador Inteligente e rotinas com +253 aplicativos em escala",
      "Instale em até 5 computadores ou servidores da sua equipe com a mesma licença",
      "Área de Membros completa, Comunidade VIP e atualizações automáticas do ciclo anual",
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
        tagline: "Migração simbólica de Membro Fundador para cuidar do próprio negócio.",
        anchorInstallments: "12x de R$ 32,15",
        anchorPrice: "R$ 297",
        installmentValue: "R$ 5,09",
        installmentsText: "12x de R$ 5,09",
        priceCash: "R$ 47",
        billingCycle: "Licença Anual (12 meses)",
        brandsLimit: "2 marcas",
        pcsLimit: "2 PCs",
        criativosCount: "9 Criativos Base",
        vitalicioIncluded: false,
        orderBumpNote:
          "No checkout: por +R$ 37 você transforma em VITALÍCIO e libera os 6 Criativos extras (15 no total para até 2 marcas).",
        checkoutUrl: CHECKOUT_URLS.migration.individual,
        features: [
          "Operador de Computador, Navegador Inteligente e +253 aplicativos conectados no seu PC",
          "9 Criativos Base + Calendário Visual + Pedido e Aprovação pelo WhatsApp",
          "10 inteligências artificiais gratuitas já inclusas ou sua assinatura de IA atual",
        ],
      },
      {
        id: "agencia10",
        code: "CRIA-AG10",
        name: "Agência 10",
        tagline: "Licença anual para atender até 10 marcas, clientes ou servidores.",
        anchorInstallments: "12x de R$ 97,09",
        anchorPrice: "R$ 897",
        installmentValue: "R$ 9,42",
        installmentsText: "12x de R$ 9,42",
        priceCash: "R$ 87",
        billingCycle: "Licença Anual (12 meses)",
        brandsLimit: "10 marcas",
        pcsLimit: "3 PCs",
        criativosCount: "12 Criativos (Base + Bônus)",
        isDecoy: true,
        badge: "Licença Anual",
        vitalicioIncluded: false,
        checkoutUrl: CHECKOUT_URLS.migration.agencia10,
        features: [
          "9 Base + 3 Bônus (Rosto Real, Concorrentes e PDFs) + automações no PC e Nuvem 24h",
          "Licença anual para até 10 marcas ou clientes (não inclui o Acesso Vitalício)",
          "Ativação liberada em até 3 computadores",
        ],
      },
      {
        id: "ilimitado",
        code: "CRIA-AGIL",
        name: "Agência Ilimitada",
        tagline: "Por apenas +R$ 1,08/mês (ou +R$ 10 à vista) você leva Clientes Ilimitados, Vídeos e Vitalício.",
        anchorInstallments: "12x de R$ 107,91",
        anchorPrice: "R$ 997",
        installmentValue: "R$ 10,50",
        installmentsText: "12x de R$ 10,50",
        priceCash: "R$ 97",
        billingCycle: "PASSAPORTE VITALÍCIO FUNDADOR INCLUSO",
        brandsLimit: "Marcas ilimitadas",
        pcsLimit: "5 PCs",
        criativosCount: "Todos os 15 (+ Vídeos Reels)",
        highlighted: true,
        badge: "VITALÍCIO FUNDADOR INCLUSO · +R$ 1,08/mês vs. Ag. 10",
        vitalicioIncluded: true,
        checkoutUrl: CHECKOUT_URLS.migration.ilimitado,
        features: [
          "EXCLUSIVO: Acesso Vitalício sem taxa de renovação anual incluso sem custo extra",
          "Marcas, clientes e servidores na nuvem ilimitados em até 5 computadores",
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
      tagline: "Condição oficial de Lançamento & Black Friday para sua operação.",
      anchorInstallments: "12x de R$ 32,15",
      anchorPrice: "R$ 297",
      installmentValue: "R$ 9,97",
      installmentsText: "12x de R$ 9,97",
      priceCash: "R$ 97,00",
      billingCycle: "Licença Anual (12 meses)",
      brandsLimit: "2 marcas",
      pcsLimit: "2 PCs",
      criativosCount: "9 Criativos Base",
      vitalicioIncluded: false,
      orderBumpNote:
        "No checkout: por +R$ 37 você transforma em VITALÍCIO e libera os 6 Criativos extras (15 no total para até 2 marcas).",
      checkoutUrl: CHECKOUT_URLS.black.individual,
      features: [
        "Operador de Computador, Navegador Inteligente e +253 apps para Windows, Mac e Linux",
        "9 Criativos Base + Calendário Visual + Postagem oficial no Instagram",
        "Peça tarefas e aprove tudo direto pelo seu WhatsApp com 10 IAs gratuitas inclusas",
      ],
    },
    {
      id: "agencia10",
      code: "CRIA-AG10",
      name: "Agência 10",
      tagline: "Licença anual intermediária para até 10 clientes ou servidores.",
      anchorInstallments: "12x de R$ 97,09",
      anchorPrice: "R$ 897",
      installmentValue: "R$ 18,20",
      installmentsText: "12x de R$ 18,20",
      priceCash: "R$ 177,00",
      billingCycle: "Licença Anual (12 meses)",
      brandsLimit: "10 marcas",
      pcsLimit: "3 PCs",
      criativosCount: "12 Criativos (Base + Bônus)",
      isDecoy: true,
      badge: "Licença Anual",
      vitalicioIncluded: false,
      checkoutUrl: CHECKOUT_URLS.black.agencia10,
      features: [
        "9 Base + 3 Bônus (Rosto Real, Concorrentes e PDFs) + automações no PC e Nuvem 24h",
        "Licença anual (não inclui o Acesso Vitalício)",
        "Até 10 marcas ou clientes em 3 computadores",
      ],
    },
    {
      id: "ilimitado",
      code: "CRIA-AGIL",
      name: "Agência Ilimitada",
      tagline: "Por apenas +R$ 2,05/mês (ou +R$ 20 à vista) você libera Clientes Ilimitados, Vídeos e Vitalício.",
      anchorInstallments: "12x de R$ 107,91",
      anchorPrice: "R$ 997",
      installmentValue: "R$ 20,25",
      installmentsText: "12x de R$ 20,25",
      priceCash: "R$ 197,00",
      billingCycle: "PASSAPORTE VITALÍCIO BLACK FRIDAY INCLUSO",
      brandsLimit: "Marcas ilimitadas",
      pcsLimit: "5 PCs",
      criativosCount: "Todos os 15 (+ Vídeos Reels)",
      highlighted: true,
      badge: "VITALÍCIO BLACK FRIDAY INCLUSO · +R$ 2,05/mês vs. Ag. 10",
      vitalicioIncluded: true,
      checkoutUrl: CHECKOUT_URLS.black.ilimitado,
      features: [
        "EXCLUSIVO: Acesso Vitalício sem mensalidade e sem renovação anual incluso",
        "Marcas, clientes e servidores na nuvem ilimitados em até 5 computadores",
        "Todos os 15 Criativos completos incluindo os 3 Diretores de Vídeos para Reels",
      ],
    },
  ];
}
