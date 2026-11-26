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
        "Muito além de apenas criar posts: coloque um sistema inteligente no seu PC e na nuvem 24h para operar seus programas, organizar pastas, pesquisar na internet, conectar +253 aplicativos e criar campanhas com suas fotos reais pelo WhatsApp.",
      presenterCue: "Cumprimente a sala e mostre os 15 mascotes vivos seguindo o mouse.",
    },
    {
      id: 2,
      act: 1,
      badge: "ATO 1 · A DOR REAL DO DIA A DIA",
      title: "Chega de viver refém de 10 abas abertas e ferramentas que cobram em dólar",
      subtitle:
        "Pedir texto genérico em um chat, copiar para o Canva, caçar fotos sem o seu rosto, atualizar planilhas na mão, esquecer arquivos de clientes espalhados e ainda travar no meio do mês quando acabam os créditos pagos... isso rouba a sua semana inteira.",
      presenterCue: "Aprofunde na dor: pergunte quem sente o cansaço dessa rotina picotada e cara.",
    },
    {
      id: 3,
      act: 1,
      badge: isMig
        ? "ATO 1 · TRANSIÇÃO OFICIAL DE CICLO"
        : "ATO 1 · A VIRADA DE CHAVE",
      title: isMig
        ? "O antigo Criativo AI Studio encerrou seu ciclo e não terá mais atualizações"
        : "De ferramentas complicadas para um aplicativo completo no seu computador",
      subtitle: isMig
        ? "Em vez de remendar o formato antigo, construímos do zero um programa de verdade para Windows, Mac e Linux chamado CriativoOS: muito mais fácil de instalar e com o poder de operar sua rotina inteira."
        : "Enquanto plataformas na internet vivem presas fora do seu computador e cobram caro por crédito, o CriativoOS roda direto na sua máquina (ou servidor 24h) com controle total das suas pastas e aplicativos.",
      presenterCue: isMig
        ? "Explique com transparência o fim das atualizações do legado e a evolução gigante para o CriativoOS."
        : "Destaque a diferença entre uma ferramenta presa no navegador e um sistema no próprio PC.",
    },
    {
      id: 4,
      act: 1,
      badge: "ATO 1 · NÃO SE RESUME A CONTEÚDO",
      title: "Um Sistema Operacional completo: trabalho pesado + criação em um só lugar",
      subtitle:
        "O CriativoOS opera programas e planilhas do seu computador, pesquisa concorrentes na internet, conecta mais de 253 aplicativos e ainda coloca 15 especialistas trabalhando juntos para criar carrosséis, posts com o seu rosto, anúncios, stories e vídeos.",
      presenterCue: "Mostre os 4 blocos do sistema e reforce que vai muito além de só fazer post.",
    },
    {
      id: 5,
      act: 1,
      badge: "ATO 1 · ECONOMIA REAL COM IA",
      title: "Comece grátis com 10 Inteligências Artificiais já incluídas ou use sua conta",
      subtitle:
        "Você não precisa cadastrar cartão nem gastar com créditos extras por imagem ou mensagem. Já vem com 10 modelos gratuitos prontos para rodar na hora, ou conecte o ChatGPT, Claude, Gemini ou Grok que você já usa.",
      presenterCue: "Quebre a objeção de custo mensal por fora antes de abrir a tela do programa.",
    },
    {
      id: 6,
      act: 2,
      badge: "PAUSA AO VIVO · INSTALAÇÃO PASSO 1 DE 3",
      title: "Agora vou pausar os slides: instalando do zero em 1 minuto na minha tela",
      subtitle:
        "Esqueça telas pretas de código ou configurações difíceis. Você baixa o instalador para Windows, Mac ou Linux, dá dois cliques como qualquer programa comum e ele já atualiza sozinho.",
      presenterCue: "PAUSA AO VIVO: Compartilhe sua tela, baixe/execute o instalador e mostre a simplicidade.",
    },
    {
      id: 7,
      act: 2,
      badge: "PAUSA AO VIVO · ATIVAÇÃO PASSO 2 DE 3",
      title: "Ative na hora com seu e-mail de compra e sua chave de acesso",
      subtitle:
        "Ao abrir o CriativoOS, digite o mesmo e-mail usado na compra e cole sua chave para liberar imediatamente suas ferramentas de computador, conectores e seus 9, 12 ou 15 Criativos.",
      presenterCue: "Mostre na prática a diferença entre Individual, Agência 10 e Agência Ilimitada.",
    },
    {
      id: 8,
      act: 2,
      badge: "PAUSA AO VIVO · BOAS-VINDAS PASSO 3 DE 3",
      title: "Em 4 cliques rápidos sua marca e suas automações já estão rodando",
      subtitle:
        "1) Escolha uma IA gratuita ou sua assinatura · 2) Selecione suas fotos reais e logo · 3) Conecte seu Instagram e apps · 4) Leia o QR Code do seu WhatsApp.",
      presenterCue: "Finalize a instalação ao vivo e prepare o tour completo por todas as ferramentas.",
    },
    {
      id: 9,
      act: 3,
      badge: "TOUR COMPLETO AO VIVO · VISÃO GERAL",
      title: "Um painel visual limpo nos modos Escuro Volt e Claro Cobalt",
      subtitle:
        "Veja na barra de atividade no topo tudo o que o sistema está fazendo ao vivo, separe seus clientes em pastas totalmente isoladas na lateral esquerda e alterne os temas com 1 clique.",
      presenterCue: "TOUR AO VIVO: Clique para alternar Escuro/Claro e mostre a organização visual do painel.",
    },
    {
      id: 10,
      act: 3,
      badge: "TOUR COMPLETO AO VIVO · OPERADOR DE PC & NAVEGADOR",
      title: "Operador de Computador e Navegador Inteligente com Pausa Segura",
      subtitle:
        "Ele enxerga sua tela para abrir pastas, planilhas e programas locais, pesquisa concorrentes e assuntos em alta na internet e pausa automaticamente para chamar você quando algum site pede senha ou código no celular.",
      presenterCue: "Mostre ao vivo o Operador de Computador e o Navegador pesquisando e pausando com segurança.",
    },
    {
      id: 11,
      act: 3,
      badge: "TOUR COMPLETO AO VIVO · +253 APPS, ROTINAS & NUVEM 24H",
      title: "+253 Aplicativos Conectados, Rotinas Automáticas e Servidor na Nuvem 24h",
      subtitle:
        "Conecte Google Drive, Planilhas, Notion, Gmail, WordPress e seu CRM sem pagar taxa extra por tarefa. Programe rotinas semanais com relatórios em PDF rodando direto no seu PC ou 24h na nuvem com o notebook desligado.",
      presenterCue: "Destaque que o trabalho operacional e os relatórios rodam sozinhos toda semana.",
    },
    {
      id: 12,
      act: 3,
      badge: "TOUR COMPLETO AO VIVO · EQUIPE DE 15 ESPECIALISTAS",
      title: "Conheça os 15 Criativos que planejam, escrevem, criam e editam vídeos",
      subtitle:
        "9 Criativos Base (estratégia, copy, carrossel, feed, stories, anúncios, identidade, postagem e métricas) + 3 Bônus (rosto real, radar de concorrentes e PDFs) + 3 Diretores de Vídeos para Reels.",
      presenterCue: "Passe pelos 15 mascotes mostrando que cada um cuida de uma parte da entrega.",
    },
    {
      id: 13,
      act: 3,
      badge: "TOUR COMPLETO AO VIVO · NA PRÁTICA",
      title: "De um único pedido em português até a campanha pronta com suas fotos reais",
      subtitle:
        "Você manda um comando simples. O sistema puxa suas fotos da pasta da marca, estrutura o carrossel, aplica seu logotipo, escreve a legenda e entrega tudo pronto para sua revisão.",
      presenterCue: "Clique no botão de avançar execução no slide (ou mostre direto no programa aberto).",
    },
    {
      id: 14,
      act: 3,
      badge: "TOUR COMPLETO AO VIVO · ESTÚDIO DO INSTAGRAM",
      title: "Calendário visual do mês, Stories com espaço livre e painel de resultados",
      subtitle:
        "Arraste seus posts no calendário, confira na prévia do celular se textos ou artes não ficam atrás das enquetes e links nos Stories, e acompanhe o que gerou mais alcance e salvamentos.",
      presenterCue: "Alterne as 3 abas no slide para mostrar Calendário, Espaço Livre e Resultados.",
    },
    {
      id: 15,
      act: 3,
      badge: "TOUR COMPLETO AO VIVO · NO SEU BOLSO 24 HORAS",
      title: "Comande seu computador e aprove suas entregas direto pelo WhatsApp",
      subtitle:
        "Mesmo longe do escritório, envie uma mensagem ou áudio para o seu próprio WhatsApp pedindo uma tarefa ou post, receba a prévia no celular e responda 1 para confirmar com total segurança.",
      presenterCue: "Reforce que nada é postado ou alterado sem o seu '1' ou aprovação humana.",
    },
    {
      id: 16,
      act: 4,
      badge: "ATO 4 · ECONOMIA REAL NO SEU BOLSO",
      title: "Quanto custa hoje fazer tudo isso do jeito antigo com ferramentas e terceiros?",
      subtitle:
        "Somando social media ou agência, designer, editor de vídeos e várias assinaturas em dólar de IAs e automadores, a conta passa fácil de R$ 4.950 por mês (quase R$ 60.000 por ano).",
      presenterCue: "Deixe a dor financeira clara na tela antes de revelar a tabela oficial e a oferta.",
    },
    {
      id: 17,
      act: 4,
      badge: "ATO 4 · VALOR OFICIAL PERPÉTUO NO SITE",
      title: "Os valores oficiais em criativoos.com.br",
      subtitle:
        "Na nossa página oficial para o público geral (Oferta Oficial Perpétua), as licenças anuais custam 12x de R$ 32,15 (ou R$ 297 à vista) no Individual, 12x de R$ 97,09 (ou R$ 897 à vista) no Agência 10 e 12x de R$ 107,91 (ou R$ 997 à vista) no Agência Ilimitada.",
      presenterCue: "Ancore nos valores oficiais parcelados em 12x: R$ 32,15, R$ 97,09 e R$ 107,91 por mês.",
    },
    {
      id: 18,
      act: 4,
      badge: isMig
        ? "ATO 4 · PRÉ-LANÇAMENTO EXCLUSIVO MEMBROS FUNDADORES"
        : "ATO 4 · CONDIÇÃO ESPECIAL LANÇAMENTO QUINTA BLACK",
      title: isMig
        ? "Condição de Membro Fundador: a partir de 12x de R$ 5,09 (com Vitalício no Ilimitado)"
        : "Lote de Lançamento Quinta Black: a partir de 12x de R$ 9,97 (com Vitalício no Ilimitado)",
      subtitle: isMig
        ? "Valor simbólico exclusivo para quem comprou a 1ª imersão: menos de um cafezinho por mês, garantindo Acesso Vitalício sem anuidade no plano Agência Ilimitada por apenas 12x de R$ 10,50 (ou R$ 97 à vista)."
        : "Condição fechada de quinta e sexta-feira muito abaixo da tabela oficial do site, liberando Acesso Vitalício sem renovação anual no plano Agência Ilimitada por apenas 12x de R$ 20,25 (ou R$ 197,00 à vista).",
      presenterCue: isMig
        ? "Destaque que do Agência 10 (12x R$ 9,42) para o Ilimitado Vitalício (12x R$ 10,50) são apenas +R$ 1,08 por mês!"
        : "Destaque que do Agência 10 (12x R$ 18,20) para o Ilimitado Vitalício (12x R$ 20,25) são apenas +R$ 2,05 por mês!",
    },
    {
      id: 19,
      act: 4,
      badge: "ATO 4 · ESCOLHA SEU PLANO",
      title: "Compare os 3 planos e veja por que o Agência Ilimitada Vitalício é a decisão óbvia",
      subtitle:
        "No Ilimitado você libera marcas e servidores sem fim, até 5 computadores, todos os 15 Criativos (com Vídeos para Reels) e Acesso Vitalício sem nunca mais renovar. Se for de Individual, ainda pode adicionar o Vitalício + 6 Criativos extras por +R$ 37 direto no checkout.",
      presenterCue: "Explique claramente os 3 planos + a oportunidade do adicional de +R$ 37 no checkout do Individual.",
    },
    {
      id: 20,
      act: 4,
      badge: "ATO 4 · GARANTIA DE 7 DIAS + COMUNIDADE + AULAS",
      title: "Teste no seu computador por 7 dias com risco zero, aulas gravadas e comunidade",
      subtitle:
        "Garanta sua chave agora, assista ao passo a passo na Área de Membros, entre na Comunidade Oficial do WhatsApp e rode suas rotinas hoje mesmo com garantia total de 7 dias.",
      presenterCue: "Faça a chamada final e avance para a tela cheia com os 3 QR Codes das ofertas.",
    },
    {
      id: 21,
      act: 4,
      badge: isMig
        ? "ATO 4 · ESCANEIE AGORA · MIGRAÇÃO FUNDADOR"
        : "ATO 4 · ESCANEIE AGORA · BLACK FRIDAY",
      title: "Aponte a Câmera do Celular e Garanta Sua Licença Agora",
      subtitle:
        "Escaneie o QR Code do plano escolhido direto na tela ou clique no botão correspondente para liberar acesso imediato com 7 dias de garantia.",
      presenterCue: "Deixe esta tela em largura total com os 3 QR Codes visíveis enquanto responde dúvidas da sala.",
    },
  ];
}
