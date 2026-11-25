import type { ActNumber, KeynoteEdition } from "./keynoteSlidesData";

export interface PresenterScriptBlock {
  slideId: number;
  act: ActNumber;
  slideTitle: string;
  stageDirection: string;
  spokenText: string;
}

export function getPresenterScriptBlocks(
  edition: KeynoteEdition
): readonly PresenterScriptBlock[] {
  const isMig = edition === "migration";

  return [
    {
      slideId: 1,
      act: 1,
      slideTitle: isMig
        ? "Capa: Do Criativo AI Studio para o CriativoOS"
        : "Capa: Sua Operação Inteira e 15 Criativos no PC",
      stageDirection: "[TELA: Passe o mouse pelos mascotes mostrando que acompanham o cursor.]",
      spokenText: isMig
        ? "Pessoal, sejam muito bem-vindos! Hoje é um encontro direto com vocês que fazem parte da nossa base desde a 1ª Imersão. Antes de abrir qualquer link, quero mostrar por que evoluímos para um Sistema Operacional completo que vai muito além de conteúdo, fazer uma pausa ao vivo para instalar e mostrar cada ferramenta rodando na minha tela."
        : "Boa noite, pessoal! Antes de revelar qualquer oferta de Lançamento da Quinta Black, quero mostrar por que o jeito antigo de trabalhar trava sua semana inteira, explicar como o CriativoOS automatiza sua operação muito além de só fazer posts, pausar os slides para instalar ao vivo e fazer um tour completo por dentro do programa.",
    },
    {
      slideId: 2,
      act: 1,
      slideTitle: "Ato 1: A Dor Real do Dia a Dia",
      stageDirection: "[PAUSA EMOCIONAL: Olhe para a câmera e conecte com a rotina real de quem está assistindo.]",
      spokenText:
        "Fala a verdade para mim: você não cansou de viver refém de 10 abas abertas? Pede um texto num chat de IA, copia para o Canva, caça imagem que não tem o seu rosto, atualiza planilha na mão, esquece arquivos de cliente espalhados e ainda paga caro em dólar para ferramentas que travam seus créditos no meio do mês. Isso não é automação. É trabalho braçal disfarçado.",
    },
    {
      slideId: 3,
      act: 1,
      slideTitle: isMig
        ? "Ato 1: Fim do Ciclo Antigo & Nascimento do CriativoOS"
        : "Ato 1: De Ferramentas Soltas para um Sistema no Seu PC",
      stageDirection: "[TOM TRANSPARENTE: Aponte os dois cartões comparativos na tela.]",
      spokenText: isMig
        ? "Sendo 100% transparente com vocês: o antigo Criativo AI Studio cumpriu seu ciclo e não receberá mais atualizações. Em vez de remendar o formato antigo, reescrevemos tudo do zero em um aplicativo completo para Windows, Mac e Linux chamado CriativoOS, muito mais simples e poderoso."
        : "Enquanto ferramentas online vivem presas no navegador e cobram caro por crédito, o CriativoOS se instala direto no seu computador ou num servidor 24 horas na nuvem, com acesso às suas pastas reais e aos seus aplicativos.",
    },
    {
      slideId: 4,
      act: 1,
      slideTitle: "Ato 1: Muito Além de Conteúdo (Os 4 Pilares do OS)",
      stageDirection: "[DESTAQUE IMPORTANTE: Deixe claro que o CriativoOS não é só um gerador de posts.]",
      spokenText:
        "E prestem atenção num ponto fundamental: o CriativoOS não se resume a criar posts! Ele é um Sistema Operacional completo que opera programas e planilhas do seu computador, pesquisa concorrentes na internet, conecta mais de 253 aplicativos do seu trabalho e ainda coloca 15 especialistas para criar suas campanhas com suas fotos reais pelo WhatsApp.",
    },
    {
      slideId: 5,
      act: 1,
      slideTitle: "Ato 1: Economia Real Sem Pagar Créditos Extras",
      stageDirection: "[QUEBRA DE OBJEÇÃO: Tire o medo de gastar com API ou cartão internacional.]",
      spokenText:
        "E você não precisa gastar com créditos extras por imagem ou mensagem gerada. O programa já traz 10 inteligências artificiais gratuitas prontas logo na abertura, e se você já assina ChatGPT, Claude, Gemini ou Grok, basta conectar a conta que já usa.",
    },
    {
      slideId: 6,
      act: 2,
      slideTitle: "Pausa Ao Vivo (1/3): Instalação em 1 Minuto",
      stageDirection: "[PAUSA NOS SLIDES: Compartilhe sua tela e abra o instalador ao vivo!]",
      spokenText:
        "Agora vou fazer uma pausa rápida nos slides para instalar junto com vocês ao vivo. Esqueça tela preta de código: você baixa o instalador normal para Windows, Mac ou Linux, dá dois cliques para abrir e pronto. Ele atualiza sozinho.",
    },
    {
      slideId: 7,
      act: 2,
      slideTitle: "Pausa Ao Vivo (2/3): Ativação da Chave",
      stageDirection: "[MOSTRE NA TELA: Campo de E-mail + Chave CRIA-*]",
      spokenText:
        "Na primeira vez que abrir, é só digitar o e-mail usado na compra e colar sua chave. No mesmo segundo ele libera todas as ferramentas do computador, os aplicativos conectados e os 9, 12 ou 15 Criativos do seu plano.",
    },
    {
      slideId: 8,
      act: 2,
      slideTitle: "Pausa Ao Vivo (3/3): Boas-Vindas em 4 Cliques",
      stageDirection: "[MOSTROU O SETUP? AGORA PUXE O TOUR COMPLETO DAS FERRAMENTAS]",
      spokenText:
        "Em 4 cliques rápidos tudo está no ar: escolhe uma das 10 IAs gratuitas ou sua assinatura, seleciona suas fotos reais e logo, conecta seus aplicativos e Instagram, e lê o QR Code do WhatsApp. Agora vamos fazer um tour completo por todas as ferramentas.",
    },
    {
      slideId: 9,
      act: 3,
      slideTitle: "Tour (1/7): Painel Visual Escuro Volt e Claro Cobalt",
      stageDirection: "[ALTERNE O BOTÃO DE TEMA NO SLIDE OU MOSTRE NO APP ABERTO]",
      spokenText:
        "Olha a limpeza desse painel tanto no modo Escuro quanto no modo Claro. Aqui em cima fica a barra de atividade mostrando o que está acontecendo em tempo real, e na esquerda você separa todas as suas marcas e clientes em pastas que nunca se misturam.",
    },
    {
      slideId: 10,
      act: 3,
      slideTitle: "Tour (2/7): Operador de Computador & Navegador Inteligente",
      stageDirection: "[MOSTRE NO PROGRAMA ABERTO COMO ELE OPERA PASTAS, PLANILHAS E NAVEGADOR]",
      spokenText:
        "Olha o poder disso fora da criação de conteúdo: o Operador de Computador enxerga a tela com segurança para abrir suas pastas, atualizar planilhas e organizar arquivos. Já o Navegador Inteligente pesquisa concorrentes e assuntos na internet e pausa na hora para chamar você quando algum site pede senha ou código no celular.",
    },
    {
      slideId: 11,
      act: 3,
      slideTitle: "Tour (3/7): +253 Apps, Rotinas Automáticas e Nuvem 24h",
      stageDirection: "[DESTAQUE A LOJA DE APPS E O FUNCIONAMENTO 24H NA NUVEM]",
      spokenText:
        "Você também conecta mais de 253 aplicativos como Google Drive, Planilhas, Notion, Gmail e WordPress sem pagar taxa por execução. Pode programar rotinas semanais com relatórios em PDF e deixar tudo rodando 24 horas na nuvem mesmo quando fechar seu notebook.",
    },
    {
      slideId: 12,
      act: 3,
      slideTitle: "Tour (4/7): A Equipe de 15 Criativos Especialistas",
      stageDirection: "[MOSTRE OS 15 MASCOTES NAS 3 CAMADAS]",
      spokenText:
        "E dentro da criação você tem 15 especialistas completos: os 9 da equipe base que cuidam de estratégia, copy, carrosséis, posts de feed, stories, anúncios, identidade visual, postagem e métricas; os 3 bônus de rosto real, concorrentes e PDFs; e os 3 diretores de vídeo para Reels.",
    },
    {
      slideId: 13,
      act: 3,
      slideTitle: "Tour (5/7): De 1 Pedido à Campanha Completa",
      stageDirection: "[CLIQUE EM AVANÇAR PASSO NO SLIDE OU RODE UM PEDIDO AO VIVO]",
      spokenText:
        "Na prática você faz um único pedido em português simples. A equipe pesquisa o tema, busca suas fotos reais na pasta da marca, monta os slides do carrossel com seu logo, atualiza a planilha de controle e manda pronto para você.",
    },
    {
      slideId: 14,
      act: 3,
      slideTitle: "Tour (6/7): Estúdio Visual do Instagram & Calendário",
      stageDirection: "[ALTERNE AS 3 ABAS: CALENDÁRIO, ESPAÇO LIVRE E RESULTADOS]",
      spokenText:
        "Dentro do estúdio você organiza o mês inteiro no calendário arrasta e solta, confere antes se as artes de Stories deixaram espaço livre para enquetes e links sem cobrir o texto, e acompanha os resultados reais para saber o que repetir.",
    },
    {
      slideId: 15,
      act: 3,
      slideTitle: "Tour (7/7): Controle 24h no Bolso Pelo WhatsApp",
      stageDirection: "[TRANSIÇÃO PARA O ATO 4: COMPARE A ECONOMIA]",
      spokenText:
        "E você não fica preso na frente do computador. Do seu próprio WhatsApp você manda um áudio pedindo uma tarefa ou post, recebe a prévia no celular e responde 1 para aprovar. Nada vai para o ar sem seu aval. Agora vamos fazer uma conta simples.",
    },
    {
      slideId: 16,
      act: 4,
      slideTitle: "Ato 4: O Custo de Fazer Tudo Isso Fora do CriativoOS",
      stageDirection: "[APONTE OS VALORES MENSAIS E O TOTAL DE R$ 59.400+/ANO]",
      spokenText:
        "Quanto custa pagar um social media ou agência, um designer e editor de vídeos e mais um monte de assinaturas em dólar todo mês? Passa fácil de R$ 4.950 por mês, quase R$ 60 mil por ano, fora a dor de cabeça de cobrar prazos.",
    },
    {
      slideId: 17,
      act: 4,
      slideTitle: "Ato 4: O Preço Oficial Perpétuo em criativoos.com.br",
      stageDirection: "[ANCORAGEM NAS PARCELAS PERPÉTUAS: 12x R$ 32,15 / 12x R$ 97,09 / 12x R$ 107,91]",
      spokenText:
        "No site oficial criativoos.com.br, a tabela oficial perpétua para o público geral sai por 12x de R$ 32,15 (ou R$ 297 à vista/ano) no Individual, 12x de R$ 97,09 (ou R$ 897 à vista/ano) no Agência 10 e 12x de R$ 107,91 (ou R$ 997 à vista/ano) no Agência Ilimitada.",
    },
    {
      slideId: 18,
      act: 4,
      slideTitle: isMig
        ? "Ato 4: Pré-Lançamento Fundadores (12x R$ 5,09 / R$ 9,42 / R$ 10,50)"
        : "Ato 4: Lançamento Quinta Black (12x R$ 10,50 / R$ 19,16 / R$ 21,32)",
      stageDirection: "[MOMENTO DA OFERTA: Destaque a diferença mínima por mês no parcelado]",
      spokenText: isMig
        ? "Mas amanhã, na janela de Pré-Lançamento exclusiva para vocês Membros Fundadores da 1ª Imersão, o Individual sai por apenas 12x de R$ 5,09 (ou R$ 47 à vista no ano), o Agência 10 sai por 12x de R$ 9,42 (ou R$ 87 à vista no ano), e olha isso: por apenas R$ 1,08 a mais por mês - 12x de R$ 10,50 (ou R$ 97 à vista) - você garante o Agência Ilimitada VITALÍCIO para clientes e servidores ilimitados!"
        : "Mas nesta quinta-feira de Lançamento Oficial Black, em vez de 12x de R$ 107,91 no site oficial, liberamos o Individual por 12x de R$ 10,50 (ou R$ 97 à vista), o Agência 10 por 12x de R$ 19,16 (ou R$ 177 à vista), e por apenas R$ 2,16 a mais por mês - 12x de R$ 21,32 (ou R$ 197 à vista) - você garante o Agência Ilimitada VITALÍCIO com clientes ilimitados, todos os 15 Criativos e Vídeos para Reels!",
    },
    {
      slideId: 19,
      act: 4,
      slideTitle: "Ato 4: Comparativo Completo + Order Bump do Individual",
      stageDirection: "[EXPLIQUE O ADICIONAL DE +R$ 37 NO INDIVIDUAL E POR QUE O ILIMITADO VENCE]",
      spokenText:
        "E atenção: se você quiser começar apenas com até 2 marcas no plano Individual, lá no checkout você ainda pode marcar o adicional de +R$ 37 para transformar seu Individual em Acesso Vitalício e liberar também os 6 Criativos extras. Mas pela diferença de centavos ou R$ 2 por mês sobre o plano do meio, ir direto no Agência Ilimitada Vitalício é a decisão mais inteligente.",
    },
    {
      slideId: 20,
      act: 4,
      slideTitle: "Ato 4: Garantia de 7 Dias + Aulas Gravadas + Comunidade",
      stageDirection: "[CHAMADA FINAL: Aponte os botões na tela e no grupo]",
      spokenText:
        "Você tem 7 dias de garantia total para instalar no seu computador, assistir às aulas passo a passo na Área de Membros e entrar na nossa Comunidade Oficial no WhatsApp. Escolha seu plano agora aqui na tela e nos vemos lá dentro!",
    },
  ];
}
