export type MascotShape =
  | "blob"
  | "pill"
  | "triangle"
  | "cloud"
  | "hex"
  | "rounded_square"
  | "octo"
  | "diamond";

export type CriativoTier = "base" | "bonus" | "video";

export interface CriativoSpecialistSpec {
  id: string;
  nome: string;
  papel: string;
  tier: CriativoTier;
  tierLabel: string;
  shape: MascotShape;
  color: string;
  entregaExemplo: string;
  ferramentas: string[];
}

export const CLASSIC_SHAPE_PATHS: Record<MascotShape, string> = {
  blob: "M50 11 C73 11 89 26 89 49 C89 72 74 89 50 89 C26 89 11 72 11 49 C11 26 27 11 50 11 Z",
  pill: "M50 10 C71 10 83 22 83 41 L83 60 C83 78 70 90 50 90 C30 90 17 78 17 60 L17 41 C17 22 29 10 50 10 Z",
  triangle:
    "M50 10 C56 10 61 14 66 22 L85 59 C90 70 84 85 71 86 L29 86 C16 85 10 70 15 59 L34 22 C39 14 44 10 50 10 Z",
  cloud:
    "M32 30 C39 17 61 17 68 30 C82 30 90 42 86 55 C91 69 78 85 63 83 C56 90 44 90 37 83 C22 85 9 69 14 55 C10 42 18 30 32 30 Z",
  hex: "M42 12 C47 9 53 9 58 12 L81 26 C86 29 89 35 89 41 L89 60 C89 66 86 72 81 75 L58 89 C53 92 47 92 42 89 L19 75 C14 72 11 66 11 60 L11 41 C11 35 14 29 19 26 Z",
  rounded_square:
    "M32 13 L68 13 C80 13 87 20 87 32 L87 68 C87 80 80 87 68 87 L32 87 C20 87 13 80 13 68 L13 32 C13 20 20 13 32 13 Z",
  octo: "M50 9 L64 17 L80 19 L84 35 L91 50 L84 65 L80 81 L64 83 L50 91 L36 83 L20 81 L16 65 L9 50 L16 35 L20 19 L36 17 Z",
  diamond:
    "M50 8 C54 8 58 10 62 14 L86 38 C92 44 92 56 86 62 L62 86 C56 92 44 92 38 86 L14 62 C8 56 8 44 14 38 L38 14 C42 10 46 8 50 8 Z",
};

export const CRIATIVOS_15_ROSTER: readonly CriativoSpecialistSpec[] = [
  {
    id: "estrategista",
    nome: "Estrategista Editorial",
    papel: "Define o calendário do mês, temas e ideias que atraem compradores para o seu perfil.",
    tier: "base",
    tierLabel: "Equipe Base",
    shape: "hex",
    color: "#31cf76",
    entregaExemplo: "Entrega: Calendário mensal e pautas da semana",
    ferramentas: ["Calendário", "Pautas"],
  },
  {
    id: "copywriter",
    nome: "Copywriter Persuasivo",
    papel: "Escreve chamadas magnéticas de capa, textos slide por slide e legendas que geram desejo.",
    tier: "base",
    tierLabel: "Equipe Base",
    shape: "blob",
    color: "#38bdf8",
    entregaExemplo: "Entrega: Ganchos, textos de slides e legendas prontas",
    ferramentas: ["Copywriting", "Legendas"],
  },
  {
    id: "designer_individual",
    nome: "Diretor de Arte Feed",
    papel: "Cria posts únicos dignos de estúdio fotográfico usando suas fotos reais e suas cores.",
    tier: "base",
    tierLabel: "Equipe Base",
    shape: "diamond",
    color: "#f27ba5",
    entregaExemplo: "Entrega: Posts de impacto com o seu rosto e logo",
    ferramentas: ["Fotografia", "Feed"],
  },
  {
    id: "designer_carrossel",
    nome: "Mestre de Carrosséis",
    papel: "Gera sequências completas de 4 a 10 lâminas conectadas que multiplicam seus salvamentos.",
    tier: "base",
    tierLabel: "Equipe Base",
    shape: "rounded_square",
    color: "#2dd4bf",
    entregaExemplo: "Entrega: Carrosséis completos prontos para postar",
    ferramentas: ["Carrossel", "Storytelling"],
  },
  {
    id: "designer_ads",
    nome: "Especialista em Anúncios",
    papel: "Produz criativos focados em cliques e conversão para suas campanhas de tráfego pago.",
    tier: "base",
    tierLabel: "Equipe Base",
    shape: "triangle",
    color: "#f97316",
    entregaExemplo: "Entrega: Variações de anúncios prontas para testar",
    ferramentas: ["Tráfego", "Conversão"],
  },
  {
    id: "designer_stories",
    nome: "Designer de Stories",
    papel: "Desenha sequências verticais deixando o espaço livre para suas enquetes, caixinhas e links.",
    tier: "base",
    tierLabel: "Equipe Base",
    shape: "cloud",
    color: "#eab308",
    entregaExemplo: "Entrega: Sequências de Stories que geram Directs",
    ferramentas: ["Stories", "Engajamento"],
  },
  {
    id: "diretor_identidade",
    nome: "Guardião da Sua Marca",
    papel: "Aprende e protege suas cores, fontes e estilo visual para manter seu perfil sempre elegante.",
    tier: "base",
    tierLabel: "Equipe Base",
    shape: "octo",
    color: "#8b5cf6",
    entregaExemplo: "Entrega: Padronização visual automática da marca",
    ferramentas: ["Identidade", "Paleta"],
  },
  {
    id: "engenheiro_meta",
    nome: "Publicador do Instagram",
    papel: "Envia a prévia no seu WhatsApp e publica no seu perfil oficial assim que você aprova.",
    tier: "base",
    tierLabel: "Equipe Base",
    shape: "pill",
    color: "#34479c",
    entregaExemplo: "Entrega: Agendamento e postagem com 1 clique",
    ferramentas: ["Instagram", "WhatsApp"],
  },
  {
    id: "analista_metricas",
    nome: "Analista de Resultados",
    papel: "Acompanha quais posts trouxeram mais alcance e salvamentos para guiar a semana seguinte.",
    tier: "base",
    tierLabel: "Equipe Base",
    shape: "diamond",
    color: "#6bc7d9",
    entregaExemplo: "Entrega: Resumo fácil do que mais funcionou",
    ferramentas: ["Métricas", "Crescimento"],
  },
  {
    id: "diretor_entregaveis",
    nome: "Gerador de Apresentações",
    papel: "Organiza seus posts e planejamentos em relatórios PDF bonitos para apresentar a clientes.",
    tier: "bonus",
    tierLabel: "Pacote Bônus",
    shape: "rounded_square",
    color: "#d6b98c",
    entregaExemplo: "Entrega: PDFs e vitrines de aprovação para clientes",
    ferramentas: ["PDF", "Agências"],
  },
  {
    id: "inteligencia_competitiva",
    nome: "Radar de Concorrentes",
    papel: "Pesquisa o que está viralizando no seu mercado e adapta as melhores ideias para você.",
    tier: "bonus",
    tierLabel: "Pacote Bônus",
    shape: "octo",
    color: "#6366f1",
    entregaExemplo: "Entrega: Mapa de temas e formatos em alta no nicho",
    ferramentas: ["Pesquisa", "Tendências"],
  },
  {
    id: "consistencia_visual",
    nome: "Especialista em Rosto Real",
    papel: "Garante que sua fisionomia real apareça nítida e fiel em todas as fotos e artes criadas.",
    tier: "bonus",
    tierLabel: "Pacote Bônus",
    shape: "blob",
    color: "#a855f7",
    entregaExemplo: "Entrega: Fidelidade total ao seu rosto nas imagens",
    ferramentas: ["Fidelidade", "Retratos"],
  },
  {
    id: "editor_video",
    nome: "Diretor de Vídeos Reels",
    papel: "Monta vídeos verticais dinâmicos com legendas animadas prontos para Reels, TikTok e Shorts.",
    tier: "video",
    tierLabel: "Estúdio de Vídeo",
    shape: "hex",
    color: "#ef4444",
    entregaExemplo: "Entrega: Vídeos MP4 editados com legendas dinâmicas",
    ferramentas: ["Reels", "Vídeo"],
  },
  {
    id: "roteirista_faceless",
    nome: "Roteirista Sem Aparecer",
    papel: "Cria roteiros envolventes cena a cena para vídeos narrados mesmo sem você ligar a câmera.",
    tier: "video",
    tierLabel: "Estúdio de Vídeo",
    shape: "triangle",
    color: "#f59e0b",
    entregaExemplo: "Entrega: Roteiro completo com indicação visual de cenas",
    ferramentas: ["Narração", "Cenas"],
  },
  {
    id: "roteirista_talking_head",
    nome: "Roteirista Para Câmera",
    papel: "Escreve textos rápidos e naturais para você gravar vídeos falando direto com seu público.",
    tier: "video",
    tierLabel: "Estúdio de Vídeo",
    shape: "cloud",
    color: "#a8324e",
    entregaExemplo: "Entrega: Roteiro fluido com gancho de 3 segundos",
    ferramentas: ["Gravação", "Retenção"],
  },
];
