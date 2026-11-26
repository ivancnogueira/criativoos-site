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
  { act: 1, label: "Ato 1 · Visão de Mercado", shortTitle: "A Dor & Visão" },
  { act: 2, label: "Ato 2 · Instalação em 60s", shortTitle: "Pausa: Instalar" },
  { act: 3, label: "Ato 3 · CriativoOS por Dentro", shortTitle: "Tour Ferramentas" },
  { act: 4, label: "Ato 4 · ROI & Condição Única", shortTitle: "Oferta & Pitch" },
];

export function getKeynoteSlides(edition: KeynoteEdition): readonly KeynoteSlideSpec[] {
  const isMig = edition === "migration";

  return [
    {
      id: 1,
      act: 1,
      badge: isMig
        ? "COMUNICADO OFICIAL · MEMBROS FUNDADORES (1ª IMERSÃO)"
        : "LANÇAMENTO OFICIAL · QUINTA-FEIRA BLACK",
      title: isMig
        ? "Do Criativo AI Studio para o Novo CriativoOS"
        : "Sua Operação Inteira e 15 Criativos de IA no Seu Computador",
      subtitle:
        "Muito além de conteúdo: opere seu computador, conecte +253 apps, rode 24h na nuvem e aprove campanhas no WhatsApp.",
      presenterCue: "Cumprimente a sala mostrando a capa com os personagens cyberpunk e os mascotes.",
    },
    {
      id: 2,
      act: 1,
      badge: "ATO 1 · A DOR REAL DO DIA A DIA",
      title: "Chega de viver refém de 10 abas abertas e ferramentas em dólar",
      subtitle:
        "Copiar texto para o Canva, caçar fotos sem seu rosto e travar quando os créditos acabam consome sua semana inteira.",
      presenterCue: "Aprofunde na dor comparando o caos manual de hoje com a liberdade do CriativoOS.",
    },
    {
      id: 3,
      act: 1,
      badge: isMig
        ? "ATO 1 · TRANSIÇÃO OFICIAL DE CICLO"
        : "ATO 1 · A VIRADA DE CHAVE",
      title: isMig
        ? "O antigo Criativo AI Studio encerrou o ciclo e evoluiu para o CriativoOS"
        : "Saia de sites soltos para um aplicativo completo no seu computador",
      subtitle: isMig
        ? "Construímos do zero um programa completo para Windows, Mac e Linux sem códigos nem complicação."
        : "Instale direto na sua máquina ou nuvem 24h com controle total das suas pastas e sem trava de créditos.",
      presenterCue: isMig
        ? "Explique com transparência o fim das atualizações do legado e o salto para o novo CriativoOS."
        : "Destaque a vantagem de rodar no próprio PC e nuvem em vez de plataformas presas no navegador.",
    },
    {
      id: 4,
      act: 1,
      badge: "ATO 1 · NÃO SE RESUME A CONTEÚDO",
      title: "Um Sistema Operacional completo: trabalho pesado + criação juntos",
      subtitle:
        "Opera programas e planilhas do PC, pesquisa concorrentes na web, conecta +253 apps e entrega tudo no WhatsApp.",
      presenterCue: "Aponte os 4 blocos e reforce que o CriativoOS automatiza operação além de criar posts.",
    },
    {
      id: 5,
      act: 1,
      badge: "ATO 1 · ZERO GASTO EXTRA COM IA",
      title: "10 Inteligências Artificiais gratuitas já inclusas ou use sua conta",
      subtitle:
        "Sem cadastrar cartão em créditos por fora: rode grátis na hora ou conecte seu ChatGPT, Claude, Gemini ou Grok.",
      presenterCue: "Quebre a objeção de gasto mensal por fora antes de abrir a tela de instalação.",
    },
    {
      id: 6,
      act: 2,
      badge: "PAUSA AO VIVO · INSTALAÇÃO PASSO 1 DE 3",
      title: "Pausa ao vivo: instalando do zero em 1 minuto na minha tela",
      subtitle:
        "Sem telas pretas de código: baixou o instalador normal, deu dois cliques e ele atualiza sozinho.",
      presenterCue: "PAUSA AO VIVO: Compartilhe a tela do computador e mostre a instalação em 2 cliques.",
    },
    {
      id: 7,
      act: 2,
      badge: "PAUSA AO VIVO · ATIVAÇÃO PASSO 2 DE 3",
      title: "Ative na hora com seu e-mail de compra e sua chave",
      subtitle:
        "Colou sua chave recebida por e-mail e todas as ferramentas do seu plano já destravam na hora.",
      presenterCue: "Mostre na tela a diferença de capacidade entre Individual, Agência 10 e Ilimitada.",
    },
    {
      id: 8,
      act: 2,
      badge: "PAUSA AO VIVO · BOAS-VINDAS PASSO 3 DE 3",
      title: "Em 4 cliques sua marca e suas rotinas já estão funcionando",
      subtitle:
        "Escolha a IA gratuita, suba suas fotos reais, conecte Instagram e apps e leia o QR Code do WhatsApp.",
      presenterCue: "Finalize a configuração inicial ao vivo e puxe o tour completo das ferramentas.",
    },
    {
      id: 9,
      act: 3,
      badge: "TOUR COMPLETO · VISÃO GERAL",
      title: "Painel visual limpo nos modos Escuro Volt e Claro Cobalt",
      subtitle:
        "Acompanhe tudo no topo da tela e mantenha cada cliente separado em pastas 100% isoladas.",
      presenterCue: "TOUR AO VIVO: Alterne o tema Escuro/Claro e mostre a organização das marcas.",
    },
    {
      id: 10,
      act: 3,
      badge: "TOUR COMPLETO · OPERADOR DE PC & NAVEGADOR",
      title: "Operador de Computador e Navegador Inteligente com Pausa Segura",
      subtitle:
        "Abre pastas e planilhas locais, pesquisa concorrentes na web e chama você antes de qualquer senha.",
      presenterCue: "Mostre o Operador de Computador e o Navegador pesquisando e pausando com segurança.",
    },
    {
      id: 11,
      act: 3,
      badge: "TOUR COMPLETO · +253 APPS, ROTINAS & NUVEM 24H",
      title: "+253 Aplicativos Conectados, Rotinas Semanais e Nuvem 24h",
      subtitle:
        "Conecte Drive, Planilhas, Notion e CRM para gerar relatórios PDF e entregas até com o PC desligado.",
      presenterCue: "Destaque a automação semanal recorrente e o funcionamento 24h na nuvem.",
    },
    {
      id: 12,
      act: 3,
      badge: "TOUR COMPLETO · EQUIPE DE 15 ESPECIALISTAS",
      title: "15 Criativos que planejam, escrevem, criam e editam Reels",
      subtitle:
        "9 Especialistas Base + 3 Bônus (Rosto Real, Concorrentes e PDFs) + 3 Diretores de Vídeos para Reels.",
      presenterCue: "Mostre as 3 camadas da equipe trabalhando em conjunto.",
    },
    {
      id: 13,
      act: 3,
      badge: "TOUR COMPLETO · NA PRÁTICA",
      title: "De um único pedido até a campanha pronta com suas fotos reais",
      subtitle:
        "Um comando simples puxa suas fotos da pasta, monta o carrossel, atualiza a planilha e manda para você.",
      presenterCue: "Avance os 4 passos na tela enquanto mostra o resultado visual à direita.",
    },
    {
      id: 14,
      act: 3,
      badge: "TOUR COMPLETO · ESTÚDIO DO INSTAGRAM",
      title: "Calendário visual do mês, Stories sem cortes e resultados reais",
      subtitle:
        "Arraste os posts no mês, garanta espaço livre para enquetes nos Stories e acompanhe o que vende mais.",
      presenterCue: "Alterne as 3 abas no slide para demonstrar Calendário, Espaço Livre e Resultados.",
    },
    {
      id: 15,
      act: 3,
      badge: "TOUR COMPLETO · NO SEU BOLSO 24 HORAS",
      title: "Comande seu PC e aprove suas criações pelo próprio WhatsApp",
      subtitle:
        "Mande mensagem ou áudio da rua, confira a prévia pronta no celular e responda 1 para confirmar.",
      presenterCue: "Reforce que nada vai ao ar sem a sua resposta 1.",
    },
    {
      id: 16,
      act: 4,
      badge: "ATO 4 · ECONOMIA REAL NO SEU CAIXA",
      title: "Quanto custa hoje fazer tudo isso fora do CriativoOS?",
      subtitle:
        "Social media, designer, editor de vídeos e assinaturas em dólar passam fácil de R$ 59.400 por ano.",
      presenterCue: "Contraste o custo mensal tradicional antes de mostrar a tabela oficial.",
    },
    {
      id: 17,
      act: 4,
      badge: "ATO 4 · VALOR OFICIAL PERPÉTUO NO SITE",
      title: "Os valores oficiais em até 12x em criativoos.com.br",
      subtitle:
        "No site público, os planos anuais custam 12x de R$ 32,15 (Individual), 12x de R$ 97,09 (Agência 10) e 12x de R$ 107,91 (Ilimitada).",
      presenterCue: "Ancore os valores oficiais parcelados antes de revelar o lote especial.",
    },
    {
      id: 18,
      act: 4,
      badge: isMig
        ? "ATO 4 · PRÉ-LANÇAMENTO EXCLUSIVO MEMBROS FUNDADORES"
        : "ATO 4 · CONDIÇÃO ESPECIAL LANÇAMENTO QUINTA BLACK",
      title: isMig
        ? "Condição Fundador: a partir de 12x de R$ 5,09 com Vitalício no Ilimitado"
        : "Lote Quinta Black: a partir de 12x de R$ 9,97 com Vitalício no Ilimitado",
      subtitle: isMig
        ? "Exclusivo da 1ª imersão: garanta o Agência Ilimitada Vitalício por apenas 12x de R$ 10,50 (ou R$ 97 à vista)."
        : "Exclusivo desta janela: garanta o Agência Ilimitada Vitalício por apenas 12x de R$ 20,25 (ou R$ 197,00 à vista).",
      presenterCue: isMig
        ? "Destaque que são apenas +R$ 1,08/mês do Agência 10 para o Ilimitado Vitalício."
        : "Destaque que são apenas +R$ 2,05/mês do Agência 10 para o Ilimitado Vitalício.",
    },
    {
      id: 19,
      act: 4,
      badge: "ATO 4 · ESCOLHA SEU PLANO",
      title: "Compare os 3 planos e veja por que o Ilimitado é a escolha óbvia",
      subtitle:
        "Clientes infinitos, 5 PCs, todos os 15 Criativos com Reels e Acesso Vitalício por centavos ou R$ 2 a mais por mês.",
      presenterCue: "Explique os 3 planos e cite o adicional de +R$ 37 caso alguém escolha o Individual.",
    },
    {
      id: 20,
      act: 4,
      badge: isMig
        ? "ATO 4 · TUDO QUE VOCÊ LEVA · ILIMITADO VITALÍCIO"
        : "ATO 4 · REFORÇO DE OFERTA · ILIMITADO VITALÍCIO",
      title: "Tudo o Que Você Desbloqueia Hoje no Agência Ilimitada Vitalício",
      subtitle:
        "Uma decisão única hoje para nunca mais pagar anuidade e operar marcas, PCs e 15 Criativos sem limite.",
      presenterCue: "REFORÇO DO PITCH: Leia cada um dos 8 entregáveis e mostre o valor absurdamente baixo da parcela.",
    },
    {
      id: 21,
      act: 4,
      badge: "ATO 4 · GARANTIA DE 7 DIAS + COMUNIDADE + AULAS",
      title: "Teste no seu computador por 7 dias com risco zero e aulas gravadas",
      subtitle:
        "Baixe hoje, assista ao passo a passo na Área de Membros e conte com a Comunidade Oficial no WhatsApp.",
      presenterCue: "Reforce risco zero total antes de abrir os QR Codes finais.",
    },
    {
      id: 22,
      act: 4,
      badge: isMig
        ? "ATO 4 · ESCANEIE AGORA · MIGRAÇÃO FUNDADOR"
        : "ATO 4 · ESCANEIE AGORA · BLACK FRIDAY",
      title: "Aponte a Câmera do Celular e Garanta Sua Licença Agora",
      subtitle:
        "Escaneie o QR Code do plano escolhido na tela ou clique no botão correspondente.",
      presenterCue: "Deixe esta tela em largura total com os 3 QR Codes visíveis enquanto responde dúvidas da sala.",
    },
  ];
}
