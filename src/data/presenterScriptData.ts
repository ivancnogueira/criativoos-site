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
        : "Capa: Sua Própria Equipe de 15 Criativos de IA",
      stageDirection: "[TELA: Passe o mouse pelos mascotes para mostrar que eles olham para o cursor.]",
      spokenText: isMig
        ? "Pessoal, sejam muito bem-vindos! Hoje é um encontro direto com quem faz parte da nossa base desde o antigo Criativo AI Studio. Antes de abrir qualquer link, quero mostrar para onde o mercado foi, como você instala o novo programa em 60 segundos e mostrar tudo funcionando por dentro."
        : "Boa noite, pessoal! Antes de falar de preço ou abrir a condição de Black Friday, quero mostrar por que o jeito antigo de criar conteúdo trava seu crescimento, como instalar o CriativoOS em 1 minuto e abrir o estúdio inteiro por dentro aqui na tela.",
    },
    {
      slideId: 2,
      act: 1,
      slideTitle: "Ato 1: Diagnóstico de Mercado 2026",
      stageDirection: "[PAUSA: Faça a pergunta olhando para a câmera.]",
      spokenText:
        "Por que tanta gente usa chat de IA e continua levando duas horas para publicar um único carrossel? Porque pedir um texto solto no navegador, copiar para o Canva, caçar foto e agendar na mão continua sendo trabalho braçal.",
    },
    {
      slideId: 3,
      act: 1,
      slideTitle: isMig
        ? "Ato 1: Encerramento do Ciclo Antigo"
        : "Ato 1: A Virada Para um Aplicativo no Seu PC",
      stageDirection: "[TOM TRANSPARENTE: Mostre os dois cartões comparativos na tela.]",
      spokenText: isMig
        ? "Sendo 100% transparente com vocês: o antigo Criativo AI Studio cumpriu seu papel e não terá mais atualizações. Em vez de fazer remendo no formato antigo, reescrevemos tudo do zero em um programa completo para Windows, Mac e Linux chamado CriativoOS."
        : "Enquanto ferramentas online cobram mensalidades em dólar e travam quando seus créditos acabam, o CriativoOS é instalado direto no seu computador. Sem lentidão e com controle total das suas fotos e da sua marca.",
    },
    {
      slideId: 4,
      act: 1,
      slideTitle: "Ato 1: 15 Especialistas Trabalhando Juntos",
      stageDirection: "[APONTE OS 4 PILARES NA TELA]",
      spokenText:
        "Ter o CriativoOS significa ter 15 especialistas que já conhecem sua pasta de fotos reais, seu logotipo e suas cores, conversam entre si para montar o post inteiro e mandam a prévia pronta no seu WhatsApp.",
    },
    {
      slideId: 5,
      act: 1,
      slideTitle: "Ato 1: Economia Total com IA",
      stageDirection: "[QUEBRA DE OBJEÇÃO: Deixe claro que não há gasto obrigatório por fora]",
      spokenText:
        "E você não precisa pagar créditos caros por imagem gerada. Você pode rodar gratuitamente usando os 10 modelos já incluídos no OpenCode ou conectar a assinatura do ChatGPT, Claude, Gemini ou Grok que você já usa.",
    },
    {
      slideId: 6,
      act: 2,
      slideTitle: "Ato 2: Instalação em 1 Minuto",
      stageDirection: "[MOSTRE OS 3 SISTEMAS: WINDOWS, MAC E LINUX]",
      spokenText:
        "Veja como ficou simples instalar: você baixa o instalador para Windows, Mac ou Linux, dá dois cliques como qualquer aplicativo comum e pronto. Sem códigos e com atualização automática.",
    },
    {
      slideId: 7,
      act: 2,
      slideTitle: "Ato 2: Ativação da Sua Chave",
      stageDirection: "[APONTE O CAMPO DE E-MAIL E CHAVE]",
      spokenText:
        "Abriu o programa pela primeira vez, você informa seu e-mail de compra e cola sua chave recebida. No mesmo segundo ele libera os Criativos do seu plano.",
    },
    {
      slideId: 8,
      act: 2,
      slideTitle: "Ato 2: Boas-Vindas em 4 Cliques",
      stageDirection: "[CONTE AS 4 ETAPAS]",
      spokenText:
        "Em menos de 1 minuto você passa pelas 4 etapas iniciais: escolhe sua IA gratuita ou assinatura, sobe suas fotos reais e seu logo, conecta seu Instagram e lê o QR Code do WhatsApp.",
    },
    {
      slideId: 9,
      act: 3,
      slideTitle: "Ato 3: O Painel Visual Por Dentro",
      stageDirection: "[CLIQUE NO BOTÃO DE ALTERNAR TEMA ESCURO E CLARO]",
      spokenText:
        "Agora estamos dentro do CriativoOS. Olha a organização desse painel tanto no modo Escuro Volt quanto no modo Claro Cobalt. Tudo limpo, fácil de encontrar e mostrando no topo o que cada especialista está produzindo.",
    },
    {
      slideId: 10,
      act: 3,
      slideTitle: "Ato 3: Os 15 Criativos Especialistas",
      stageDirection: "[MOSTRE OS 15 MASCOTES DIVIDIDOS NAS 3 CAMADAS]",
      spokenText:
        "Aqui estão os 15 especialistas: os 9 da equipe base que cuidam de calendário, copy, carrossel, post de feed, stories, anúncios, identidade, postagem e métricas; os 3 bônus de rosto real, radar de concorrentes e PDFs; e os 3 diretores de vídeo para Reels.",
    },
    {
      slideId: 11,
      act: 3,
      slideTitle: "Ato 3: Como Funciona um Pedido na Prática",
      stageDirection: "[CLIQUE EM AVANÇAR EXECUÇÃO PARA MOSTRAR OS PASSOS]",
      spokenText:
        "Na prática você faz um único pedido em português claro. O Estrategista define a estrutura, o Copywriter escreve os slides, o especialista de Consistência puxa sua foto real e o Designer entrega o carrossel completo.",
    },
    {
      slideId: 12,
      act: 3,
      slideTitle: "Ato 3: Estúdio do Instagram e Calendário",
      stageDirection: "[ALTERNE AS ABAS DO ESTÚDIO NO SLIDE]",
      spokenText:
        "Dentro do próprio programa você tem o calendário visual do mês para arrastar seus posts, conferir as margens seguras de feed e stories e ver quais publicações trouxeram mais resultado.",
    },
    {
      slideId: 13,
      act: 3,
      slideTitle: "Ato 3: Pesquisa de Mercado e Aplicativos",
      stageDirection: "[MOSTRE OS 3 CARTÕES DE AUTOMAÇÃO]",
      spokenText:
        "Além de criar artes, sua equipe conta com um navegador integrado para pesquisar referências reais do seu mercado e pode se conectar a mais de 250 aplicativos que você já usa no trabalho.",
    },
    {
      slideId: 14,
      act: 3,
      slideTitle: "Ato 3: Rotinas Semanais Automáticas",
      stageDirection: "[DESTAQUE A ECONOMIA DE TEMPO NA SEGUNDA-FEIRA]",
      spokenText:
        "Você também pode deixar tarefas programadas: toda segunda-feira às 8h sua equipe analisa a semana anterior, sugere novas pautas e monta o PDF pronto para você ou para o seu cliente.",
    },
    {
      slideId: 15,
      act: 3,
      slideTitle: "Ato 3: Aprovação Pelo WhatsApp",
      stageDirection: "[TRANSIÇÃO PARA O ATO 4]",
      spokenText:
        "E o melhor: você pode comandar tudo pelo seu WhatsApp. Recebeu a arte pronta no celular, respondeu 1, ela vai para o seu Instagram. Agora vamos fazer uma conta rápida.",
    },
    {
      slideId: 16,
      act: 4,
      slideTitle: "Ato 4: Comparativo Financeiro",
      stageDirection: "[MOSTRE O CUSTO ANUAL DE FAZER FORA DO CRIATIVOOS]",
      spokenText:
        "Se você fosse pagar ferramentas em dólar, um designer freelancer e um editor de vídeos todo mês, gastaria mais de R$ 4.000 mensais, passando de R$ 60 mil no ano.",
    },
    {
      slideId: 17,
      act: 4,
      slideTitle: "Ato 4: O Preço Oficial no Site",
      stageDirection: "[ANCORAGEM NOS VALORES OFICIAIS DE CRIATIVOOS.COM.BR]",
      spokenText:
        "Por isso, para quem entra direto no site público criativoos.com.br, as licenças anuais custam R$ 997 no Individual, R$ 1.797 no Agência 10 e R$ 1.997 no Agência Ilimitada.",
    },
    {
      slideId: 18,
      act: 4,
      slideTitle: isMig
        ? "Ato 4: Oferta Exclusiva de Migração (R$ 47 / R$ 87 / R$ 97 + Vitalício)"
        : "Ato 4: Lote Especial de Black Friday (R$ 97 / R$ 177 / R$ 197 + Vitalício)",
      stageDirection: "[MOMENTO PRINCIPAL: Destaque a pequena diferença para o Ilimitado Vitalício]",
      spokenText: isMig
        ? "Mas como você já faz parte da base antiga do Criativo AI Studio, abrimos esta janela de 48 horas com valor simbólico: Individual Anual por R$ 47, Agência 10 Anual por R$ 87, e olha isso: por apenas R$ 10 a mais (R$ 97 únicos), você pega o Agência Ilimitada com marcas ilimitadas, todos os 15 Criativos com Vídeos para Reels e ganha o Passaporte Vitalício Fundador sem nunca mais pagar anuidade!"
        : "Mas nesta janela especial de Lançamento e Black Friday, você não paga R$ 1.997. Pelos links exclusivos desta apresentação o Individual Anual fica por R$ 97 (12x R$ 9,74), o Agência 10 Anual fica por R$ 177 (12x R$ 17,77) e, por apenas R$ 20 de diferença, você leva o Agência Ilimitada por R$ 197 (12x R$ 19,78) com marcas ilimitadas, todos os 15 Criativos com Vídeos para Reels e o Passaporte Vitalício incluído sem renovação anual!",
    },
    {
      slideId: 19,
      act: 4,
      slideTitle: "Ato 4: Comparativo dos 3 Planos",
      stageDirection: "[EXPLIQUE TAMBÉM O ADICIONAL NO CHECKOUT DO INDIVIDUAL]",
      spokenText:
        "Se quiser começar pequeno no Individual, lá no checkout existe a opção de adicionar o vitalício junto. Mas pela diferença mínima de valor, o Agência Ilimitada Vitalício entrega o pacote completo de 15 Criativos para sempre.",
    },
    {
      slideId: 20,
      act: 4,
      slideTitle: "Ato 4: Garantia de 7 Dias e Acesso Imediato",
      stageDirection: "[CHAMADA FINAL PARA OS BOTÕES DE COMPRA]",
      spokenText:
        "Você tem 7 dias de garantia incondicional para instalar e testar tudo no seu computador. Clique no botão do seu plano aqui na tela ou no link enviado no grupo antes que a janela encerre. Nos vemos dentro do CriativoOS!",
    },
  ];
}
