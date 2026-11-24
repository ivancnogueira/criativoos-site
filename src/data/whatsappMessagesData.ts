export type WhatsAppCampaignId = "migration" | "black";
export type WhatsAppChannelId = "grupo" | "disparo_1_1";

export interface WhatsAppMessageTemplate {
  id: string;
  campaign: WhatsAppCampaignId;
  channel: WhatsAppChannelId;
  code: string;
  title: string;
  timing: string;
  body: string;
}

export const WHATSAPP_CAMPAIGN_MESSAGES: readonly WhatsAppMessageTemplate[] = [
  // =========================================================================
  // CAMPANHA 1 — MIGRAÇÃO DA BASE ANTIGA (GRUPOS)
  // =========================================================================
  {
    id: "g1-1",
    campaign: "migration",
    channel: "grupo",
    code: "G1.1",
    title: "Comunicado Oficial de Fim do Legado + Revelação CriativoOS",
    timing: "Dia 1 · Manhã (Abertura de consciência sem link ainda)",
    body: `🚨 *COMUNICADO OFICIAL PARA QUEM É DA BASE DO ANTIGO CRIATIVO AI STUDIO*

Pessoal, uma atualização muito importante e transparente para vocês que estão aqui com a gente desde o início.

O antigo *Criativo AI Studio* cumpriu o ciclo dele — *ele não vai mais receber novas atualizações ou novos recursos daqui pra frente.*

Mas calma: ele não acabou à toa. Ele evoluiu para algo de outra categoria.

Nos últimos meses nós reescrevemos praticamente tudo do zero e criamos o *CriativoOS* — não é mais um pacote de prompts ou um plugin preso no terminal. Agora é um *Sistema Operacional completo de Criativos de IA* com instalador próprio para Windows, Mac e Linux (além de VPS).

Olha só o que entrou dentro do *CriativoOS*:
• *App Nativo Desktop + Dynamic Island* acompanhando tudo ao vivo no topo da tela
• *15 Criativos Especialistas em Equipe* (Estratégia, Copy, Carrossel 4:5, Anúncios, Stories 9:16, Bônus e 3 Diretores de Vídeo com Remotion)
• *Instagram Oficial via Meta Graph API v27.0* com Cofre local AES-256-GCM e Aprovação Humana
• *Estúdio Social Media integrado* (Calendário Editorial, Galeria de Métricas e Editor com Zonas Seguras)
• *Navegador Real Chromium embutido + Computer Use + Loja com +253 Apps*
• *WhatsApp 24/7* (comande e aprove tudo pelo celular, inclusive no seu próprio número / Self-Chat)
• *Zero gasto obrigatório com API:* rode com 10 modelos gratuitos no OpenCode _ou_ conecte sua própria assinatura do ChatGPT, Claude, Gemini ou Grok.

Nesta quinta-feira à noite nós vamos abrir oficialmente o *CriativoOS* para o público no site \`criativoos.com.br\` com licença anual de ~R$ 997 a R$ 1.997~.

*MAS ANTES DISSO...*
Como vocês fazem parte da nossa base antiga, decidimos abrir uma *Janela de Migração Fundador de 48h* com valor puramente simbólico — _muito abaixo até da Black Friday de quinta_.

Logo mais eu mando aqui no grupo a apresentação mostrando o *CriativoOS por dentro* e como ativar sua licença de migração em 60 segundos.

Fiquem de olho aqui no grupo 👀🔥`,
  },
  {
    id: "g1-2",
    campaign: "migration",
    channel: "grupo",
    code: "G1.2",
    title: "Tour por Dentro + Instalação em 60s + Âncora Oficial",
    timing: "Dia 1 · Tarde (Educação antes do pitch)",
    body: `👀 *QUER VER COMO O CRIATIVOOS FUNCIONA POR DENTRO ANTES DE DECIDIR?*

Muita gente perguntou no privado o que realmente mudou do antigo _Criativo AI Studio_ para o novo *CriativoOS v1.0.3*.

Preparamos uma apresentação interativa passo a passo onde você vê, sem enrolação:
1️⃣ *Visão de Mercado:* por que prompts soltos e SaaS web caros morreram
2️⃣ *Instalação em 60 segundos:* baixou o \`.exe\` / \`.dmg\` / \`.AppImage\`, colou sua chave \`CRIA-*\` e seguiu 4 cliques no Onboarding
3️⃣ *Tour Completo por Dentro:* Estúdio Social Media, Safe Zones \`4:5\` e \`9:16\`, Dynamic Island, Navegador Chromium integrado, Workflows em Grafo e WhatsApp 24/7.

👉 *Veja a apresentação interativa completa aqui:*
[LINK_APRESENTACAO_MIGRACAO]

_(No site público \`criativoos.com.br\` os planos anuais estão ancorados de R$ 997 a R$ 1.997. Pelo link acima você destrava a tabela secreta de Migração da Base ainda hoje.)_`,
  },
  {
    id: "g1-3",
    campaign: "migration",
    channel: "grupo",
    code: "G1.3",
    title: "Abertura Oficial da Janela de Migração (R$ 47 / R$ 87 / R$ 97 + Vitalício)",
    timing: "Dia 1 · Noite (Liberação dos links diretos)",
    body: `🔓 *JANELA ABERTA: MIGRAÇÃO FUNDADOR PARA O CRIATIVOOS*

Está oficialmente liberado o lote exclusivo de migração para quem veio do antigo _Criativo AI Studio_!

⚠️ _Lembrando: no site oficial (\`criativoos.com.br\`), a licença anual vai de *R$ 997 a R$ 1.997*. Esses valores abaixo NÃO estão na página pública — só existem nestes links diretos para a nossa base antes do lançamento de quinta._

Escolha o tamanho da sua operação e já garanta seu instalador v1.0.3:

🟢 *PLANO INDIVIDUAL — De ~R$ 997~ por R$ 47* _(Licença Anual)_
• 2 Marcas / Servidores · 2 PCs
• 9 Criativos Base completos (Copy, Carrossel, Post, Stories, Anúncios, Meta API, Editorial)
👉 Link direto: [LINK_MIGRACAO_INDIVIDUAL]

🟡 *PLANO AGÊNCIA 10 — De ~R$ 1.797~ por R$ 87* _(Licença Anual)_
• 10 Marcas / Servidores · 3 PCs
• 12 Criativos (Base + Pacote Bônus Estratégia/Engenharia Reversa/Consistência)
👉 Link direto: [LINK_MIGRACAO_AG10]

🔥 *PLANO AGÊNCIA ILIMITADA — De ~R$ 1.997~ por R$ 97* _(+ PASSAPORTE VITALÍCIO INCLUSO!)_
• *∞ Marcas/Servidores ILIMITADOS* · 5 PCs
• *Todos os 15 Criativos* (Base + Bônus + *3 Diretores de Vídeo Remotion*)
• *EXCLUSIVO:* Apenas neste plano você ganha o *ACESSO VITALÍCIO FUNDADOR* (sem taxa de renovação anual) por apenas +R$ 10 de diferença!
👉 Link direto: [LINK_MIGRACAO_ILIMITADO]

Assim que o pagamento confirma, sua chave \`CRIA-*\` chega na hora e você já baixa o *CriativoOS v1.0.3* para Windows, Mac ou Linux! 🚀`,
  },
  {
    id: "g1-4",
    campaign: "migration",
    channel: "grupo",
    code: "G1.4",
    title: "Quebra de Objeções + Contraste Lógico do +R$ 10 no Ilimitado",
    timing: "Dia 2 · Manhã / Tarde",
    body: `🤔 *"Qual plano de migração faz mais sentido pra mim?"* — Respondendo as 3 dúvidas que mais chegaram no suporte:

*1️⃣ "Preciso pagar API da OpenAI/Claude todo mês por fora?"*
*Não.* Você escolhe no Onboarding: pode rodar grátis com *10 modelos via OpenCode* _ou_ conectar sua própria assinatura do ChatGPT, Claude, Gemini ou Grok.

*2️⃣ "Nunca mexi com código ou terminal, vou conseguir instalar?"*
Sim! Esqueça o tempo de linha de comando. Agora é um *instalador nativo normal* (\`Setup.exe\`, \`.dmg\` ou \`.AppImage\`) com tela de boas-vindas em 4 cliques.

*3️⃣ "Vale a pena pegar o Individual (R$ 47) ou o Agência Ilimitada (R$ 97)?"*
Faça as contas com calma:
• No *Individual (R$ 47)* ou *Agência 10 (R$ 87)* a licença é *Anual (12 meses)*.
• No *Agência Ilimitada (R$ 97)*, além de liberar *todos os 15 Criativos (incluindo os 3 de Vídeo Remotion)* e *marcas infinitas em até 5 PCs*, você leva o *ACESSO VITALÍCIO FUNDADOR* sem precisar renovar todo ano — pagando literalmente *R$ 10 a mais* do que o Agência 10.

🔥 *Garantir Agência Ilimitada VITALÍCIO por R$ 97:*
[LINK_MIGRACAO_ILIMITADO]

_(Se preferir começar menor no Individual anual por R$ 47: [LINK_MIGRACAO_INDIVIDUAL])_`,
  },
  {
    id: "g1-5",
    campaign: "migration",
    channel: "grupo",
    code: "G1.5",
    title: "Últimas Horas da Janela de Migração (Antes de Virar para Black Friday)",
    timing: "Dia 2 · Noite",
    body: `⏳ *ÚLTIMAS HORAS DA JANELA DE MIGRAÇÃO (R$ 47 a R$ 97)*

Passando apenas para avisar com transparência:

Hoje à noite encerramos os links de migração de *R$ 47 / R$ 87 / R$ 97* para quem veio do antigo _Criativo AI Studio_.

A partir da abertura do *Lançamento & Black Friday (quinta à noite)*, os mesmos planos passam para *R$ 97 / R$ 177 / R$ 197* — e depois voltam para o valor oficial do site (\`R$ 997 a R$ 1.997/ano\`).

Ou seja: quem garantir a migração agora paga *praticamente a metade do valor da própria Black Friday* e ainda trava o *Vitalício no Plano Agência Ilimitada por R$ 97 únicos*.

🔗 *Últimos acessos da tabela de migração:*
• Individual (\`R$ 47\` Anual): [LINK_MIGRACAO_INDIVIDUAL]
• Agência 10 (\`R$ 87\` Anual): [LINK_MIGRACAO_AG10]
• *Agência Ilimitada (\`R$ 97\` + VITALÍCIO):* [LINK_MIGRACAO_ILIMITADO] ⚡`,
  },

  // =========================================================================
  // CAMPANHA 1 — DISPAROS 1:1 INDIVIDUAIS (MIGRAÇÃO)
  // =========================================================================
  {
    id: "d1-1",
    campaign: "migration",
    channel: "disparo_1_1",
    code: "D1.1",
    title: "Abordagem Pessoal 1:1 (Alta Taxa de Resposta)",
    timing: "Dia 1 · Disparo inicial para contatos da base",
    body: `Fala [NOME], tudo bem por aí? 👋

Passando rapidinho no seu WhatsApp porque você já acompanhou o antigo *Criativo AI Studio* com a gente.

Quis te avisar em primeira mão antes de irmos para o lançamento oficial desta quinta: o _Criativo AI Studio_ encerrou o ciclo e foi completamente transformado no *CriativoOS v1.0.3* (agora com app nativo para Windows/Mac/Linux, 15 Criativos em equipe, Estúdio Social Media, Meta API oficial e operação pelo próprio WhatsApp).

Como você já é da base antiga, liberamos por 48h um link secreto de migração a preço simbólico (*R$ 47* no Individual ou *R$ 97 no Agência Ilimitada já com Vitalício incluso* — contra R$ 1.997 no site oficial).

Quer que eu te mande o link da apresentação rápida mostrando o CriativoOS por dentro e os links de migração?`,
  },
  {
    id: "d1-2",
    campaign: "migration",
    channel: "disparo_1_1",
    code: "D1.2",
    title: "Envio Direto com os 3 Checkouts de Migração",
    timing: "Dia 1 · Resposta ao interesse ou disparo direto em lista quente",
    body: `Oi [NOME]! Tudo certo?

Aqui é da equipe do *CriativoOS* ⚡

Resumo direto ao ponto: o antigo *Criativo AI Studio* não terá mais atualizações porque evoluímos tudo para o novo *CriativoOS* (instalador nativo Desktop + VPS, Estúdio Instagram Meta API v27.0, 15 Criativos incl. Vídeos Remotion e controle via WhatsApp).

Antes de abrir o lote de Black Friday na quinta (que será de R$ 97 a R$ 197) e depois manter o preço cheio de *R$ 997 a R$ 1.997/ano* em \`criativoos.com.br\`, sua conta antiga dá direito à *Janela de Migração Fundador*:

• *Individual (Anual · 2 marcas):* R$ 47 → [LINK_MIGRACAO_INDIVIDUAL]
• *Agência 10 (Anual · 10 marcas):* R$ 87 → [LINK_MIGRACAO_AG10]
• *Agência Ilimitada (∞ Marcas · 15 Criativos · + VITALÍCIO INCLUSO):* R$ 97 → [LINK_MIGRACAO_ILIMITADO]

Se quiser ver o tour do sistema funcionando por dentro antes, está aqui: [LINK_APRESENTACAO_MIGRACAO]`,
  },
  {
    id: "d1-3",
    campaign: "migration",
    channel: "disparo_1_1",
    code: "D1.3",
    title: "Follow-up Pós-Clique / Quebra de Objeção de Instalação",
    timing: "Dia 2 · Para quem visualizou ou clicou sem concluir",
    body: `[NOME], vi que você chegou a olhar o novo *CriativoOS* 👀

Só um detalhe que muita gente da base antiga não percebeu de primeira: você *não precisa mais instalar nada via terminal ou pagar API cara por token*.

O *CriativoOS v1.0.3* já vem com:
✅ Instalador com 2 cliques (Windows, Mac ou Linux)
✅ 10 modelos gratuitos prontos via OpenCode (ou sua assinatura normal de ChatGPT/Claude/Gemini/Grok)
✅ *Acesso Vitalício incluso* direto no plano Agência Ilimitada de *R$ 97* (só nessa janela de migração!)

O link direto do Ilimitado Vitalício ainda está ativo aqui se quiser travar antes de virar para R$ 197:
👉 [LINK_MIGRACAO_ILIMITADO]`,
  },
  {
    id: "d1-4",
    campaign: "migration",
    channel: "disparo_1_1",
    code: "D1.4",
    title: "Fechamento 1:1 Últimas Horas da Migração",
    timing: "Dia 2 · Noite (Antes de encerrar os links de R$ 47/87/97)",
    body: `[NOME], aviso rápido de encerramento ⏳

Hoje às 23h59 os links de migração de *R$ 47 / R$ 87 / R$ 97* saem do ar definitivamente para prepararmos o lançamento e a Black Friday oficial (onde os valores dobram para R$ 97 / R$ 177 / R$ 197).

Se você quiser migrar sua licença para o *CriativoOS v1.0.3* garantindo o *Agência Ilimitada Vitalício por R$ 97 únicos*, esse é o último link válido:
👉 [LINK_MIGRACAO_ILIMITADO]

Me avisa se precisar de ajuda para ativar sua chave! 🤝`,
  },

  // =========================================================================
  // CAMPANHA 2 — QUINTA À NOITE & BLACK FRIDAY (GRUPOS VIP)
  // =========================================================================
  {
    id: "g2-1",
    campaign: "black",
    channel: "grupo",
    code: "G2.1",
    title: "Aquecimento & Visão de Mercado 2026 (Pré-Quinta)",
    timing: "Quarta / Quinta Manhã",
    body: `🧠 *POR QUE 90% DE QUEM USA IA PARA SOCIAL MEDIA CONTINUA TRAVADO NO MESMO LUGAR?*

Vamos falar a real antes da nossa apresentação especial de *[HORARIO_LIVE]*:

Usar um prompt solto no ChatGPT para copiar, colar no Canva, baixar imagem genérica sem o seu rosto, ajustar legenda na mão e subir tudo manualmente no Instagram... *isso não é automação. É só digitação mais rápida.*

Em 2026, o jogo mudou para *Sistemas Operacionais Autônomos de Criativos*.

Foi exatamente por isso que construímos o *CriativoOS*:
Um software instalado direto na sua máquina (Windows, Mac ou Linux) — ou no seu servidor VPS — onde *15 Criativos Especialistas trabalham juntos* como uma agência completa:
• Planejam o calendário do mês analisando dados reais do seu Instagram
• Geram carrosséis \`4:5\`, anúncios e stories \`9:16\` usando *suas fotos reais e seu logo*
• Renderizam Reels animados em vídeo (Remotion)
• Enviam prévia no seu *WhatsApp* e só publicam na *Meta API oficial* quando você responde \`[1] Aprovar\`.

E o melhor: você pode olhar o projeto oficial hoje mesmo em \`criativoos.com.br\` — onde as licenças anuais oficiais custam de *R$ 997 a R$ 1.997/ano*.

Mas nesta *[HORARIO_LIVE]* nós vamos mostrar o *CriativoOS* inteiro por dentro e abrir uma condição única de *Black Friday* exclusiva para este grupo VIP. 🔔🔥`,
  },
  {
    id: "g2-2",
    campaign: "black",
    channel: "grupo",
    code: "G2.2",
    title: "Spoiler do CriativoOS por Dentro + Instalação em 60s",
    timing: "Quinta-feira · Início da tarde",
    body: `🎬 *O QUE VOCÊ VAI VER POR DENTRO DO CRIATIVOOS HOJE À NOITE ([HORARIO_LIVE])*

Nada de slides vazios nem promessa vaga. Hoje às *[HORARIO_LIVE]* vamos abrir o *CriativoOS v1.0.3* em tempo real e mostrar:

1️⃣ *Instalação & Onboarding em 60 segundos:*
Como conectar *10 modelos gratuitos no OpenCode* OU usar a sua assinatura atual de ChatGPT, Claude, Gemini ou Grok — _sem pagar conta extra de API por token_.

2️⃣ *Tour Completo do Cockpit:*
• *Dynamic Island* monitorando tarefas em tempo real
• *Estúdio Social Media integrado:* Calendário Editorial Drag & Drop + Zonas Seguras \`4:5\` e \`9:16\` + Métricas oficiais da Meta Graph API v27.0
• *Navegador Real Chromium embutido + Computer Use + Loja com +253 Apps conectados*
• *Fluxos Visuais em Grafo + Rotinas Agendadas*

3️⃣ *Agência no WhatsApp:*
Como mandar uma ordem no próprio WhatsApp e receber o carrossel pronto pra aprovação.

4️⃣ *A Oferta Fechada de Black Friday:*
Como garantir o acesso ao invés dos ~R$ 1.997/ano~ do site oficial com *Acesso Vitalício* liberado somente nesta janela de quinta e sexta.

Nos vemos daqui a pouco! 🚀`,
  },
  {
    id: "g2-3",
    campaign: "black",
    channel: "grupo",
    code: "G2.3",
    title: "Chamada 'Faltam 1h' e 'Estamos AO VIVO Agora'",
    timing: "Quinta-feira · 19h00 e 20h00 (início da apresentação)",
    body: `🔴 *ESTAMOS AO VIVO! ENTRE AGORA NA APRESENTAÇÃO NÍVEL ÔMEGA DO CRIATIVOOS*

Acabamos de iniciar! Primeiro estamos mostrando a visão de mercado 2026, como instalar em 60 segundos e todo o *CriativoOS v1.0.3* por dentro (Cockpit, 15 Criativos, Estúdio Meta API e WhatsApp 24/7) — e ao final revelamos o lote fechado de *Black Friday*.

👉 *Acesse a apresentação interativa aqui:*
[LINK_APRESENTACAO_BLACK]

Vem pra sala que já começamos! 🚀`,
  },
  {
    id: "g2-4",
    campaign: "black",
    channel: "grupo",
    code: "G2.4",
    title: "Abertura Oficial Black Friday (R$ 97 / R$ 177 / R$ 197 + Vitalício)",
    timing: "Quinta-feira · Momento do Pitch (Fixar no grupo)",
    body: `🖤 *CARRINHO ABERTO: BLACK FRIDAY CRIATIVOOS (COM VITALÍCIO LIBERADO!)*

Chegou a hora! Enquanto o site público (\`criativoos.com.br\`) exibe os valores anuais oficiais de *~R$ 997 a R$ 1.997/ano~*, quem está aqui no Grupo VIP destrava a tabela especial de *Lançamento & Black Friday*:

*(Atenção: estes valores NÃO aparecem na página inicial — apenas nestes links diretos 👇)*

🟢 *PLANO INDIVIDUAL — De ~R$ 997/ano~ por R$ 97* *(ou 12x de R$ 9,74)*
• Licença Anual · 2 Marcas / Servidores · 2 PCs
• *9 Criativos Base* completos (Estratégia, Copy, Carrossel, Posts, Stories, Anúncios e Publicação Meta)
👉 Link direto: [LINK_BF_INDIVIDUAL]

🟡 *PLANO AGÊNCIA 10 — De ~R$ 1.797/ano~ por R$ 177* *(ou 12x de R$ 17,77)*
• Licença Anual · 10 Marcas / Servidores · 3 PCs
• *12 Criativos* (Base + 3 Especialistas Bônus de Engenharia Reversa e Consistência)
👉 Link direto: [LINK_BF_AG10]

🔥 *PLANO AGÊNCIA ILIMITADA — De ~R$ 1.997/ano~ por R$ 197* *(ou 12x de R$ 19,78)*
• *∞ Marcas/Servidores ILIMITADOS · 5 PCs*
• *Todos os 15 Criativos Completos* (Base + Bônus + *3 Diretores de Vídeo Remotion*)
• *🎁 BÔNUS BLACK FRIDAY:* Somente no Agência Ilimitada você ganha o *PASSAPORTE VITALÍCIO INCLUSO* (sem taxa de renovação anual!) por apenas *R$ 20* de diferença para o Agência 10!
👉 Link direto: [LINK_BF_ILIMITADO]

⚡ *Entrega Imediata:* Comprou, recebeu sua chave \`CRIA-*\` + download dos instaladores *CriativoOS v1.0.3* (Windows, Mac e Linux) com *Garantia Blindada de 7 Dias*. 🚀`,
  },
  {
    id: "g2-5",
    campaign: "black",
    channel: "grupo",
    code: "G2.5",
    title: "Prova Lógica Sexta-Feira + Efeito Chamariz (+R$ 20 -> Vitalício)",
    timing: "Sexta-feira Black Friday · Meio-dia",
    body: `📊 *A CONTA QUE FAZ O PLANO ILIMITADO DA BLACK FRIDAY SE PAGAR NO 1º DIA*

Olha só a comparação real de hoje (Sexta-feira de Black Friday):

Se você entrar agora no site oficial \`criativoos.com.br\`, o *Agência Ilimitada Anual* custa *R$ 1.997/ano*.
E hoje *SOMENTE ATÉ ÀS 23H59* nos links diretos do grupo está assim:
• *Agência 10 (Anual):* \`R$ 177\`
• *Agência Ilimitada (∞ Marcas + Vídeo Remotion + ACESSO VITALÍCIO):* *\`R$ 197\`* _(ou 12x de R$ 19,78)_!

Por literalmente *R$ 20 a mais* (menos de R$ 2/mês no parcelado), você sai de uma licença anual de 10 marcas para *∞ Marcas Ilimitadas + Vídeos Remotion + PASSAPORTE VITALÍCIO* sem nunca mais pagar renovação anual.

👀 _Ainda não viu o CriativoOS funcionando por dentro?_
Veja a apresentação completa aqui: [LINK_APRESENTACAO_BLACK]

🔥 _Já quer garantir sua chave \`CRIA-AGIL-*\` Vitalícia direto?_
👉 [LINK_BF_ILIMITADO]`,
  },
  {
    id: "g2-6",
    campaign: "black",
    channel: "grupo",
    code: "G2.6",
    title: "Última Chamada Black Friday (Sexta 23h59 — Encerramento do Vitalício)",
    timing: "Sexta-feira · Noite (Últimas horas)",
    body: `🚨 *ÚLTIMA CHAMADA: ACESSO VITALÍCIO + DESCONTO DE BLACK FRIDAY ENCERRA ÀS 23H59*

Faltam poucas horas para fecharmos a condição especial de Black Friday do *CriativoOS v1.0.3*.

Depois da meia-noite de hoje:
❌ Encerra a condição promocional de \`R$ 97 / R$ 177 / R$ 197\`
❌ Encerra o *Passaporte Vitalício* incluso no Agência Ilimitada
✅ Permanece apenas a tabela oficial do site público \`criativoos.com.br\` (*R$ 997 a R$ 1.997/ano*).

Se você quer automatizar toda a criação de conteúdo, carrosséis, anúncios, vídeos Remotion, calendário e publicação no Instagram direto do seu PC/VPS e WhatsApp — com *7 dias de garantia incondicional*:

🔥 *GARANTIR AGÊNCIA ILIMITADA VITALÍCIO — R$ 197 (12x R$ 19,78):*
👉 [LINK_BF_ILIMITADO]

🟡 *Agência 10 (Anual) — R$ 177:* [LINK_BF_AG10]
🟢 *Individual (Anual) — R$ 97:* [LINK_BF_INDIVIDUAL]`,
  },

  // =========================================================================
  // CAMPANHA 2 — DISPAROS 1:1 INDIVIDUAIS (QUINTA & BLACK FRIDAY)
  // =========================================================================
  {
    id: "d2-1",
    campaign: "black",
    channel: "disparo_1_1",
    code: "D2.1",
    title: "Convite 1:1 para Apresentação de Quinta à Noite",
    timing: "Quinta-feira · Antes da Live",
    body: `Fala [NOME], tudo ótimo? 👋

Hoje às *[HORARIO_LIVE]* vamos fazer a apresentação oficial do *CriativoOS v1.0.3* — o primeiro Sistema Operacional de Criativos de IA para Instagram, Anúncios, Vídeos e Operação via WhatsApp.

Vou mostrar na tela desde como instalar em 60 segundos até todos os *15 Criativos* rodando juntos no Estúdio Social Media (sem precisar gastar com API cara, podendo usar modelos gratuitos ou sua assinatura atual do ChatGPT/Claude/Gemini/Grok).

E no final vai rolar o lote fechado de *Black Friday* (com acesso vitalício liberado pra quem entrar na janela).

Quer o link da sala pra assistir por dentro? 👉 [LINK_APRESENTACAO_BLACK]`,
  },
  {
    id: "d2-2",
    campaign: "black",
    channel: "disparo_1_1",
    code: "D2.2",
    title: "Disparo Direto Carrinho Aberto Black Friday 1:1",
    timing: "Quinta à noite / Sexta de manhã",
    body: `[NOME], acabou de abrir a janela de *Black Friday do CriativoOS v1.0.3*! 🖤⚡

No site oficial (\`criativoos.com.br\`) o valor normal fica entre *R$ 997 e R$ 1.997/ano*, mas pelos links diretos de hoje até amanhã (sexta 23h59) ficou assim:

• *Individual (Anual · 2 marcas · 9 Criativos):* R$ 97 (12x R$ 9,74)
👉 [LINK_BF_INDIVIDUAL]

• *Agência 10 (Anual · 10 marcas · 12 Criativos):* R$ 177 (12x R$ 17,77)
👉 [LINK_BF_AG10]

• *Agência Ilimitada (∞ Marcas · 15 Criativos incl. Vídeo Remotion + VITALÍCIO INCLUSO):* *R$ 197* (12x R$ 19,78)
👉 [LINK_BF_ILIMITADO]

Dica sincera: pela diferença de apenas *R$ 20* do Agência 10 pro Ilimitado, você leva marcas infinitas, os 3 criativos de vídeo e *nunca mais paga anuidade*. Qualquer dúvida é só me chamar aqui!`,
  },
  {
    id: "d2-3",
    campaign: "black",
    channel: "disparo_1_1",
    code: "D2.3",
    title: "Recuperação & Tira-Dúvidas 1:1",
    timing: "Sexta-feira · Tarde",
    body: `Oi [NOME]! Tudo bem?

Vi seu interesse no *CriativoOS* nessa Black Friday e passei só pra confirmar se ficou alguma dúvida técnica ou de pagamento.

Lembrando que você tem *7 dias de garantia total* para baixar o *CriativoOS v1.0.3* no seu Windows/Mac/Linux, conectar sua conta grátis do OpenCode (ou sua assinatura de IA) e testar seus primeiros posts no Instagram.

Se o plano que faz mais sentido for o *Agência Ilimitada Vitalício (12x R$ 19,78 ou R$ 197 à vista)*, o link direto continua aqui:
👉 [LINK_BF_ILIMITADO]

Se preferir começar no *Individual (R$ 97)*, está aqui:
👉 [LINK_BF_INDIVIDUAL]`,
  },
  {
    id: "d2-4",
    campaign: "black",
    channel: "disparo_1_1",
    code: "D2.4",
    title: "Fechamento 1:1 Últimas Horas Black Friday",
    timing: "Sexta-feira · Noite (22h)",
    body: `[NOME], passando rapidinho antes da meia-noite ⏳

Às *23h59 de hoje* o lote de Black Friday do *CriativoOS* com *Vitalício no Plano Agência Ilimitada (R$ 197 ou 12x R$ 19,78)* sai do ar e volta a tabela oficial de até *R$ 1.997/ano* no site \`criativoos.com.br\`.

Se ainda quiser travar sua licença vitalícia antes do encerramento, é só concluir por aqui:
👉 [LINK_BF_ILIMITADO]

Sucesso demais nos projetos por aí! 🚀`,
  },
];
