export type KeynoteEdition = "migration" | "black";

export type ActNumber = 1 | 2 | 3 | 4;

export interface KeynoteActMeta {
  act: ActNumber;
  label: string;
  shortTitle: string;
}

export interface KeynoteSlideSpec {
  id: number;
  act: ActNumber;
  badge: string;
  title: string;
  subtitle: string;
  presenterCue: string;
}

export const KEYNOTE_ACTS: readonly KeynoteActMeta[] = [
  { act: 1, label: "Ato 1 · Visão de Mercado", shortTitle: "Mercado 2026" },
  { act: 2, label: "Ato 2 · Instalação em 60s", shortTitle: "Instalação 60s" },
  { act: 3, label: "Ato 3 · CriativoOS por Dentro", shortTitle: "Por Dentro" },
  { act: 4, label: "Ato 4 · ROI & Condição Única", shortTitle: "Oferta & Pitch" },
];

export function getKeynoteSlides(edition: KeynoteEdition): readonly KeynoteSlideSpec[] {
  const isMig = edition === "migration";

  return [
    {
      id: 1,
      act: 1,
      badge: isMig
        ? "COMUNICADO OFICIAL · BASE FUNDADORA CRIATIVO AI STUDIO"
        : "APRESENTAÇÃO OFICIAL · LANÇAMENTO & BLACK FRIDAY",
      title: isMig
        ? "Do Criativo AI Studio para o Novo CriativoOS"
        : "Sua Própria Equipe de 15 Criativos de IA no Computador",
      subtitle:
        "Como sair do trabalho manual e colocar uma equipe completa para criar seus carrosséis, posts com o seu rosto, stories, anúncios e vídeos para Reels.",
      presenterCue: "Cumprimente a sala e mostre os 15 mascotes vivos seguindo o mouse.",
    },
    {
      id: 2,
      act: 1,
      badge: "ATO 1 · DIAGNÓSTICO DE MERCADO 2026",
      title: "Por que pedir texto solto em chat de IA não resolve sua produção",
      subtitle:
        "Gerar um texto genérico, abrir o Canva, tentar diagramar no olho, procurar foto e subir tudo manualmente no Instagram não é automação. É apenas trabalho braçal disfarçado.",
      presenterCue: "Pergunte no chat quem ainda perde horas trocando de aba para criar 1 carrossel.",
    },
    {
      id: 3,
      act: 1,
      badge: isMig
        ? "ATO 1 · TRANSIÇÃO OFICIAL DE CICLO"
        : "ATO 1 · A VIRADA DE CHAVE",
      title: isMig
        ? "O antigo Criativo AI Studio encerrou seu ciclo e não terá mais atualizações"
        : "De ferramentas complicadas para um aplicativo simples no seu computador",
      subtitle: isMig
        ? "Em vez de remendar o formato antigo, construímos do zero um programa completo para Windows, Mac e Linux chamado CriativoOS, muito mais fácil e poderoso."
        : "Enquanto plataformas online cobram caro em dólar e limitam seus créditos, o CriativoOS roda direto na sua máquina sem travar sua criação.",
      presenterCue: isMig
        ? "Explique com transparência o fim das atualizações do legado e o salto para o novo aplicativo."
        : "Destaque a liberdade de ter o estúdio instalado no próprio computador.",
    },
    {
      id: 4,
      act: 1,
      badge: "ATO 1 · O NOVO PARADIGMA",
      title: "O que muda quando 15 especialistas trabalham juntos para você",
      subtitle:
        "Eles conhecem suas fotos reais, respeitam seu logotipo e suas cores, conversam entre si para montar a campanha inteira e enviam tudo pronto no seu WhatsApp.",
      presenterCue: "Mostre os 4 pilares do estúdio nos cartões abaixo.",
    },
    {
      id: 5,
      act: 1,
      badge: "ATO 1 · ECONOMIA REAL",
      title: "Use 10 modelos gratuitos já incluídos ou a IA que você já assina",
      subtitle:
        "Você não precisa gastar com créditos extras por imagem ou por texto. Comece grátis com os modelos do OpenCode ou conecte seu ChatGPT, Claude, Gemini ou Grok.",
      presenterCue: "Quebre a objeção de custo extra logo no início.",
    },
    {
      id: 6,
      act: 2,
      badge: "ATO 2 · COMO INSTALAR (PASSO 1/3)",
      title: "Instalação em 1 minuto no Windows, Mac ou Linux",
      subtitle:
        "Esqueça telas pretas de código. Você baixa o instalador normal, dá dois cliques para abrir e o próprio programa busca novas atualizações sozinho.",
      presenterCue: "Mostre como qualquer pessoa instala em menos de 1 minuto.",
    },
    {
      id: 7,
      act: 2,
      badge: "ATO 2 · ATIVAÇÃO RÁPIDA (PASSO 2/3)",
      title: "Ative com seu e-mail e sua chave de acesso",
      subtitle:
        "Ao abrir o programa, basta digitar o e-mail da compra e colar sua chave para destravar seus 9, 12 ou 15 Criativos Especialistas na hora.",
      presenterCue: "Mostre a diferença visual entre Individual, Agência 10 e Agência Ilimitada.",
    },
    {
      id: 8,
      act: 2,
      badge: "ATO 2 · BOAS-VINDAS EM 4 CLIQUES (PASSO 3/3)",
      title: "Em 4 cliques sua marca já está configurada e pronta",
      subtitle:
        "1) Escolha sua IA · 2) Suba seu logo e suas fotos reais · 3) Conecte seu Instagram · 4) Leia o QR Code do WhatsApp.",
      presenterCue: "Destaque que em 2 minutos a pessoa já pede o primeiro post.",
    },
    {
      id: 9,
      act: 3,
      badge: "ATO 3 · POR DENTRO DO CRIATIVOOS",
      title: "Um painel visual elegante nos modos Escuro Volt e Claro Cobalt",
      subtitle:
        "Acompanhe sua equipe trabalhando no topo da tela, organize suas conversas por marca na barra lateral e veja cada entrega nascendo ao vivo.",
      presenterCue: "Clique no botão de alternar o tema Escuro/Claro ao vivo.",
    },
    {
      id: 10,
      act: 3,
      badge: "ATO 3 · OS 15 CRIATIVOS ESPECIALISTAS",
      title: "Conheça cada membro da equipe que passa a produzir para você",
      subtitle:
        "9 Criativos Base + 3 Especialistas Bônus (Rosto Real, Concorrentes e PDFs) + 3 Diretores de Vídeo para Reels trabalhando em conjunto.",
      presenterCue: "Passe o mouse pelos mascotes e cite exemplos práticos.",
    },
    {
      id: 11,
      act: 3,
      badge: "ATO 3 · COMO OPERAR NA PRÁTICA",
      title: "De um simples pedido até o carrossel pronto com as suas fotos",
      subtitle:
        "Veja a sequência acontecer: você pede o tema, o Estrategista planeja, o Copywriter escreve, o especialista aplica sua foto real e o Designer monta todas as lâminas.",
      presenterCue: "Clique no botão de avançar execução no slide para demonstrar passo a passo.",
    },
    {
      id: 12,
      act: 3,
      badge: "ATO 3 · ESTÚDIO DO INSTAGRAM",
      title: "Calendário visual do mês, prévia de Stories e análise de resultados",
      subtitle:
        "Confira como cada carrossel e story vai ficar no celular antes de ir ao ar e acompanhe quais publicações trouxeram mais alcance e salvamentos.",
      presenterCue: "Alterne as abas do calendário, zonas seguras e métricas.",
    },
    {
      id: 13,
      act: 3,
      badge: "ATO 3 · PESQUISA E AUTOMAÇÃO",
      title: "Navegador integrado que pesquisa o mercado e aprende com você",
      subtitle:
        "Seus Criativos acessam páginas reais para mapear o que está funcionando no seu nicho e podem conectar mais de 250 aplicativos do seu dia a dia.",
      presenterCue: "Explique a diferença entre um chat comum e uma equipe que pesquisa de verdade.",
    },
    {
      id: 14,
      act: 3,
      badge: "ATO 3 · ROTINAS AUTOMÁTICAS",
      title: "Programe tarefas semanais e gere relatórios PDF para clientes",
      subtitle:
        "Configure sua equipe para preparar toda segunda-feira de manhã a análise da semana anterior, novas ideias de posts e o PDF pronto para aprovação.",
      presenterCue: "Mostre o valor disso para quem atende clientes ou tem rotina corrida.",
    },
    {
      id: 15,
      act: 3,
      badge: "ATO 3 · NO SEU BOLSO 24 HORAS",
      title: "Comande tudo pelo WhatsApp de onde você estiver",
      subtitle:
        "Mande mensagem ou áudio para o seu próprio WhatsApp, receba o carrossel pronto na tela do celular e responda 1 para publicar no Instagram.",
      presenterCue: "Destaque a praticidade de aprovar posts mesmo longe do computador.",
    },
    {
      id: 16,
      act: 4,
      badge: "ATO 4 · ECONOMIA NO SEU CAIXA",
      title: "Quanto custaria contratar pessoas e ferramentas para fazer tudo isso?",
      subtitle:
        "Somando designer, redator, editor de vídeos e assinaturas de plataformas em dólar, você gastaria facilmente mais de R$ 4.000 todos os meses.",
      presenterCue: "Mostre a comparação financeira na tela antes de revelar a oferta.",
    },
    {
      id: 17,
      act: 4,
      badge: "ATO 4 · VALOR OFICIAL NO SITE PÚBLICO",
      title: "Os preços anuais oficiais em criativoos.com.br",
      subtitle:
        "Na página pública oficial, as licenças anuais do CriativoOS custam R$ 997 no plano Individual, R$ 1.797 no Agência 10 e R$ 1.997 no Agência Ilimitada.",
      presenterCue: "Deixe claro que esses são os valores públicos normais no site.",
    },
    {
      id: 18,
      act: 4,
      badge: isMig
        ? "ATO 4 · JANELA EXCLUSIVA DE MIGRAÇÃO DA BASE (48H)"
        : "ATO 4 · CONDIÇÃO ESPECIAL DE LANÇAMENTO & BLACK FRIDAY",
      title: isMig
        ? "Sua condição simbólica de Migração Fundador com Vitalício no Ilimitado"
        : "O Lote Especial de Black Friday com Passaporte Vitalício no Ilimitado",
      subtitle: isMig
        ? "Valor simbólico exclusivo para quem veio do antigo Criativo AI Studio, custando metade da própria Black Friday e com Acesso Vitalício no plano Agência Ilimitada."
        : "Somente nesta janela de quinta e sexta-feira: desconto agressivo sobre o valor anual do site e Passaporte Vitalício incluído sem custo extra no plano Agência Ilimitada.",
      presenterCue: isMig
        ? "Destaque os +R$ 10 do Agência 10 (R$ 87) para o Ilimitado Vitalício (R$ 97)."
        : "Destaque os +R$ 20 do Agência 10 (R$ 177) para o Ilimitado Vitalício (R$ 197).",
    },
    {
      id: 19,
      act: 4,
      badge: "ATO 4 · ESCOLHA SEU PLANO",
      title: "Compare os 3 planos e veja por que o Ilimitado é a escolha óbvia",
      subtitle:
        "No Agência Ilimitada você libera marcas infinitas, até 5 computadores, os 3 Diretores de Vídeo para Reels e nunca mais paga renovação anual.",
      presenterCue: "Mencione também o adicional opcional no checkout para quem começar pelo Individual.",
    },
    {
      id: 20,
      act: 4,
      badge: "ATO 4 · GARANTIA TOTAL DE 7 DIAS",
      title: "Teste no seu computador por 7 dias com risco zero",
      subtitle:
        "Garanta sua chave agora, baixe o instalador em 1 minuto e coloque seus 15 Criativos para rodar hoje mesmo com garantia incondicional.",
      presenterCue: "Chame para a ação imediata nos botões abaixo.",
    },
  ];
}
