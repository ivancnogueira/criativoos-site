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
  // CAMPANHA 1 - PRE-LANCAMENTO MEMBROS FUNDADORES (1ª IMERSAO) - GRUPOS
  // =========================================================================
  {
    id: "g1-1",
    campaign: "migration",
    channel: "grupo",
    code: "G1.1",
    title: "Comunicado Oficial para Membros Fundadores (1ª Imersão) + Revelação CriativoOS",
    timing: "Fase 1 · Pré-Lançamento (Abertura de consciência sem link ainda)",
    body: `🚨 *COMUNICADO OFICIAL PARA MEMBROS FUNDADORES (1ª IMERSÃO)*

Pessoal, uma atualização importante e 100% transparente para vocês que estão com a gente desde a primeira turma.

O antigo *Criativo AI Studio* cumpriu o ciclo dele e *não vai mais receber novas atualizações ou novos recursos daqui para frente.*

Mas ele não parou à toa: ele evoluiu para um sistema de outra categoria.

Reescrevemos tudo do zero e criamos o *CriativoOS* - um *Sistema Operacional Autônomo* com instalador próprio em 2 cliques para Windows, Mac e Linux (e opção de rodar 24h na nuvem).

E preste atenção: *ele NÃO se resume apenas a criar conteúdo!* Olha o que o *CriativoOS* faz hoje:
• *Operador Real de Computador:* abre pastas, atualiza planilhas e opera programas no seu PC com sua autorização
• *Navegador Inteligente com Pausa Segura:* pesquisa concorrentes na internet e pausa chamando você antes de qualquer senha ou código no celular
• *+253 Aplicativos Conectados & Rotinas Semanais:* conecta Google Drive, Planilhas, Notion, Gmail, WordPress e gera relatórios em PDF sozinho
• *15 Criativos Especialistas em Equipe:* carrosséis, posts com o seu rosto real, anúncios, stories com espaço livre e vídeos para Reels
• *No seu bolso pelo WhatsApp:* peça tarefas ou criações por áudio e aprove respondendo \`1\`
• *Zero gasto obrigatório com IA:* já vem com *10 inteligências artificiais gratuitas inclusas* ou conecte sua conta do ChatGPT, Claude, Gemini ou Grok.

Na quinta-feira abrimos o *Lançamento Oficial Quinta Black* (de \`12x R$ 9,97\` a \`12x R$ 20,25\`) e depois fica o preço oficial no site \`criativoos.com.br\` (de \`12x R$ 32,15\` a \`12x R$ 107,91\`).

*MAS AMANHÃ É A JANELA DE PRÉ-LANÇAMENTO EXCLUSIVA PARA VOCÊS FUNDADORES* com parcela menor que um café por mês.

Fiquem de olho aqui no grupo que logo mando o horário da apresentação ao vivo mostrando tudo por dentro! 👀🔥`,
  },
  {
    id: "g1-2",
    campaign: "migration",
    channel: "grupo",
    code: "G1.2",
    title: "Convite Tour Ao Vivo: Pausa para Instalar + Visão Completa das Ferramentas",
    timing: "Fase 1 · Pré-Lançamento (Antes de abrir os links)",
    body: `👀 *QUER VER O CRIATIVOOS INSTALADO DO ZERO E FUNCIONANDO AO VIVO NA TELA?*

Hoje preparamos uma apresentação direta ao ponto (sem linguagem técnica complicada) mostrando:

1️⃣ *A dor real que acabou:* como sair das 10 abas abertas e ferramentas em dólar que travam seus créditos
2️⃣ *Pausa Ao Vivo para Instalar em 1 Minuto:* baixando o instalador para Windows, Mac ou Linux e configurando em 4 cliques
3️⃣ *Tour Completo pelas Ferramentas:* Operador de Computador, Navegador Inteligente, +253 Apps conectados, Rotinas na Nuvem 24h, os 15 Criativos com seu rosto real e comando pelo WhatsApp.

👉 *Link da apresentação interativa:*
[LINK_APRESENTACAO_MIGRACAO]

_(Na página pública oficial \`criativoos.com.br\` a tabela perpétua fica entre 12x R$ 32,15 e 12x R$ 107,91. Aqui para Fundadores você garante sua licença simbólica ainda antes do lançamento de quinta!)_`,
  },
  {
    id: "g1-3",
    campaign: "migration",
    channel: "grupo",
    code: "G1.3",
    title: "Abertura Oficial Pré-Lançamento Fundadores (12x R$ 5,09 / R$ 9,42 / R$ 10,50)",
    timing: "Fase 1 · Liberação dos links diretos",
    body: `🔓 *PRÉ-LANÇAMENTO LIBERADO: MEMBROS FUNDADORES DO CRIATIVOOS*

Está oficialmente aberta a janela exclusiva de *Pré-Lançamento* para quem comprou na 1ª Imersão!

⚠️ _Lembrando: na quinta-feira do lançamento oficial os planos sobem para 12x R$ 9,97 / 12x R$ 18,20 / 12x R$ 20,25, e depois no site oficial ficam entre *12x R$ 32,15 e 12x R$ 107,91*._

Escolha o tamanho da sua operação e já garanta seu instalador v1.0.3:

🟢 *LICENÇA INDIVIDUAL · 12x de R$ 5,09* *(ou R$ 47 à vista anual)* _(Oficial: ~12x R$ 32,15~)_
• Até 2 marcas / servidores · 2 PCs · 9 Criativos Base + Operador de PC + Navegador + +253 Apps
• _Bônus no checkout:_ por apenas *+R$ 37* você transforma em *VITALÍCIO + libera os 6 Criativos extras* (15 no total para até 2 marcas)!
👉 Link direto: [LINK_MIGRACAO_INDIVIDUAL]

🟡 *LICENÇA AGÊNCIA 10 · 12x de R$ 9,42* *(ou R$ 87 à vista anual)* _(Oficial: ~12x R$ 97,09~)_
• Até 10 clientes ou servidores · 3 PCs · 12 Criativos (Base + Bônus de Rosto Real, Concorrentes e PDFs)
👉 Link direto: [LINK_MIGRACAO_AG10]

🔥 *LICENÇA ILIMITADA · 12x de R$ 10,50!* *(ou R$ 97 à vista · VITALÍCIO!)* _(Oficial: ~12x R$ 107,91~)_
• *Clientes e servidores ILIMITADOS* · até 5 PCs
• *Todos os 15 Criativos Completos* (incluindo os 3 Diretores de Vídeos para Reels) + Nuvem 24h
• *EXCLUSIVO:* Apenas *+R$ 1,08 por mês* de diferença para o Agência 10 e você leva o *ACESSO VITALÍCIO FUNDADOR* (sem nunca pagar renovação anual)!
👉 Link direto: [LINK_MIGRACAO_ILIMITADO]

Assim que o pagamento confirma, sua chave chega na hora por e-mail com o link de download, Área de Membros e Comunidade Oficial no WhatsApp! 🚀`,
  },
  {
    id: "g1-4",
    campaign: "migration",
    channel: "grupo",
    code: "G1.4",
    title: "Quebra de Objeções + Lógica do +R$ 1,08/mês e do Order Bump de +R$ 37",
    timing: "Fase 1 · Meio do Pré-Lançamento",
    body: `🤔 *"Qual opção faz mais sentido para o meu momento?"* · Respondendo às 3 maiores dúvidas aqui do grupo:

*1️⃣ "Preciso pagar API da OpenAI ou créditos extras todo mês?"*
*Não.* O CriativoOS já vem com *10 inteligências artificiais gratuitas inclusas* para você começar sem gastar nada por fora, além de aceitar sua assinatura atual de ChatGPT, Claude, Gemini ou Grok.

*2️⃣ "E se eu não souber mexer em nada técnico ou código?"*
Acabaram as telas pretas e comandos manuais. Agora você baixa um *instalador comum* (Windows, Mac ou Linux), dá dois cliques e acompanha as aulas passo a passo na Área de Membros e nossa Comunidade Oficial.

*3️⃣ "Individual (12x R$ 5,09 + R$ 37) ou Agência Ilimitada (12x R$ 10,50 Vitalício)?"*
Olha como é simples:
• No *Individual (12x R$ 5,09 ou R$ 47 à vista)* ou no *Agência 10 (12x R$ 9,42 ou R$ 87 à vista)*, a licença base é anual.
• Já no *Agência Ilimitada*, por apenas *12x de R$ 10,50* *(ou R$ 97 à vista)* · literalmente *+R$ 1,08 por mês* em relação ao Agência 10 · você destrava *clientes e servidores ILIMITADOS + 5 PCs + Vídeos Reels + ACESSO VITALÍCIO* para sempre!

🔥 *Garantir Licença Ilimitada VITALÍCIA por 12x de R$ 10,50 (ou R$ 97):*
[LINK_MIGRACAO_ILIMITADO]

_(Ou ir de Individual por 12x de R$ 5,09 / R$ 47 com opção vitalícia no checkout: [LINK_MIGRACAO_INDIVIDUAL])_`,
  },
  {
    id: "g1-5",
    campaign: "migration",
    channel: "grupo",
    code: "G1.5",
    title: "Últimas Horas do Pré-Lançamento Fundadores (12x R$ 5,09 a R$ 10,50)",
    timing: "Fase 1 · Encerramento antes do Lançamento Oficial",
    body: `⏳ *ÚLTIMAS HORAS DO PRÉ-LANÇAMENTO FUNDADORES (12x R$ 5,09 a 12x R$ 10,50)*

Passando para avisar antes de virar a chave para a próxima fase:

Hoje encerramos os links exclusivos de Membros Fundadores (*12x R$ 5,09 / 12x R$ 9,42 / 12x R$ 10,50*).

No *Lançamento Oficial de Quinta-Feira Black*, os preços sobem para *12x R$ 9,97 / 12x R$ 18,20 / 12x R$ 20,25* · e na sequência entra a tabela oficial perpétua do site (\`12x R$ 32,15 / 12x R$ 97,09 / 12x R$ 107,91\`).

Ou seja: garantindo agora você trava *Acesso Vitalício na Licença Ilimitada por 12x de R$ 10,50 (ou R$ 97 à vista)*.

🔗 *Últimos acessos de Membro Fundador:*
• Individual (\`12x R$ 5,09\` ou R$ 47 + opção vitalícia de R$ 37): [LINK_MIGRACAO_INDIVIDUAL]
• Agência 10 (\`12x R$ 9,42\` ou R$ 87 anual · até 10 clientes): [LINK_MIGRACAO_AG10]
• *Licença Ilimitada (\`12x R$ 10,50\` ou R$ 97 VITALÍCIO):* [LINK_MIGRACAO_ILIMITADO] ⚡`,
  },

  // =========================================================================
  // CAMPANHA 1 - DISPAROS 1:1 INDIVIDUAIS (PRE-LANCAMENTO FUNDADORES)
  // =========================================================================
  {
    id: "d1-1",
    campaign: "migration",
    channel: "disparo_1_1",
    code: "D1.1",
    title: "Abordagem Pessoal 1:1 para Alunos da 1ª Imersão",
    timing: "Fase 1 · Disparo inicial para base fundadora",
    body: `Fala [NOME], tudo bem por aí? 👋

Passando rapidinho no seu privado porque você participou com a gente da 1ª Imersão do *Criativo AI Studio*.

Quis te avisar antes do Lançamento Oficial de quinta-feira: o projeto antigo encerrou o ciclo e reescrevemos tudo do zero como *CriativoOS* · agora um aplicativo completo que instala em 2 cliques no Windows/Mac/Linux, opera programas e planilhas do computador, conecta +253 aplicativos, pesquisa na internet e ainda entrega tudo com 15 Criativos pelo WhatsApp.

Por você já ser da base fundadora, abrimos antes para vocês por valor simbólico (*12x de R$ 5,09* no Individual ou *12x de R$ 10,50 / R$ 97 à vista no Plano Ilimitado já VITALÍCIO* · contra 12x de R$ 107,91 na tabela oficial).

Quer que eu te mande o link da apresentação mostrando tudo por dentro antes de virar para os valores de quinta?`,
  },
  {
    id: "d1-2",
    campaign: "migration",
    channel: "disparo_1_1",
    code: "D1.2",
    title: "Envio Direto com os 3 Links do Pré-Lançamento Fundadores",
    timing: "Fase 1 · Envio para interessados da base",
    body: `Oi [NOME]! Tudo certo?

Aqui estão os links da janela exclusiva de *Pré-Lançamento para Membros Fundadores* antes de abrir a Quinta Black e antes do valor perpétuo do site \`criativoos.com.br\` (que vai de 12x R$ 32,15 a 12x R$ 107,91):

• *Licença Individual (2 marcas · 9 Criativos + Operador PC):* *12x de R$ 5,09* (ou R$ 47 à vista anual) → [LINK_MIGRACAO_INDIVIDUAL]
_(No checkout tem a opção de +R$ 37 para tornar Vitalício + liberar todos os 15 Criativos para até 2 marcas)_

• *Licença Agência 10 (até 10 clientes/servidores):* *12x de R$ 9,42* (ou R$ 87 à vista anual) → [LINK_MIGRACAO_AG10]

• *Licença Ilimitada (Clientes Ilimitados · 15 Criativos incl. Vídeos Reels · VITALÍCIO):* *12x de R$ 10,50* (ou R$ 97 à vista) → [LINK_MIGRACAO_ILIMITADO]

Se quiser assistir ao tour completo do sistema rodando ao vivo antes de escolher, está aqui: [LINK_APRESENTACAO_MIGRACAO]`,
  },
  {
    id: "d1-3",
    campaign: "migration",
    channel: "disparo_1_1",
    code: "D1.3",
    title: "Follow-up 1:1 Quebra de Objeção de Instalação e IA",
    timing: "Fase 1 · Para quem clicou e não finalizou",
    body: `[NOME], vi que você chegou a dar uma olhada no novo *CriativoOS* 👀

Só um detalhe que muita gente da primeira turma se surpreendeu: agora *não tem mais nada técnico, linha de comando ou obrigação de pagar API cara por fora*.

O *CriativoOS* já vem com:
✅ Instalador normal em 2 cliques (Windows, Mac ou Linux)
✅ 10 inteligências artificiais gratuitas inclusas (ou sua conta do ChatGPT/Claude/Gemini/Grok)
✅ *Acesso Vitalício* direto na *Licença Ilimitada por apenas 12x de R$ 10,50 (ou R$ 97 à vista)* · só nessa janela de Pré-Lançamento!

O link direto da Licença Ilimitada Vitalícia continua ativo aqui antes de subir na quinta:
👉 [LINK_MIGRACAO_ILIMITADO]`,
  },
  {
    id: "d1-4",
    campaign: "migration",
    channel: "disparo_1_1",
    code: "D1.4",
    title: "Fechamento 1:1 Últimas Horas do Pré-Lançamento",
    timing: "Fase 1 · Encerramento da janela Fundadores",
    body: `[NOME], aviso rápido de encerramento ⏳

Hoje às 23h59 encerram os valores simbólicos de Membros Fundadores (*12x R$ 5,09 / 12x R$ 9,42 / 12x R$ 10,50*) para entrar o Lançamento Oficial da Quinta Black (*12x R$ 9,97 / 12x R$ 18,20 / 12x R$ 20,25*).

Se quiser garantir a *Licença Ilimitada Vitalícia por 12x de R$ 10,50 (ou R$ 97 à vista)* com clientes e servidores sem limite + aulas passo a passo na Área de Membros, esse é o último link válido:
👉 [LINK_MIGRACAO_ILIMITADO]

Qualquer dúvida me chama! 🤝`,
  },

  // =========================================================================
  // CAMPANHA 2 - LANCAMENTO OFICIAL QUINTA BLACK (GRUPOS VIP)
  // =========================================================================
  {
    id: "g2-1",
    campaign: "black",
    channel: "grupo",
    code: "G2.1",
    title: "Abertura de Consciência & Dor Real (Pré-Quinta Black)",
    timing: "Fase 2 · Aquecimento para a Live de Quinta",
    body: `🧠 *CHEGA DE VIVER REFÉM DE 10 ABAS ABERTAS E FERRAMENTAS CARAS EM DÓLAR*

Vamos falar a real antes da nossa apresentação especial de *[HORARIO_LIVE]*:

Pedir texto solto no ChatGPT, copiar pro Canva, gerar foto artificial sem o seu rosto, atualizar planilha na mão, pagar vários aplicativos separados em dólar e ainda travar quando acabam os créditos no meio do mês... *isso consome sua semana inteira e suga seu caixa.*

Foi exatamente por isso que construímos o *CriativoOS*: um sistema instalado direto no seu computador (ou nuvem 24h) que *NÃO se resume só a conteúdo!*

Ele opera programas e pastas do seu computador, pesquisa concorrentes na internet, conecta *+253 aplicativos* (Drive, Planilhas, Notion, Gmail) e ainda coloca *15 Criativos Especialistas* trabalhando com suas fotos reais, aprovando tudo direto pelo seu *WhatsApp*!

No site oficial \`criativoos.com.br\`, a tabela oficial fica entre *12x de R$ 32,15 e 12x de R$ 107,91*. Mas nesta *[HORARIO_LIVE]* vamos abrir o sistema na tela ao vivo e liberar o *Lote Especial de Lançamento Quinta Black*. 🔔🔥`,
  },
  {
    id: "g2-2",
    campaign: "black",
    channel: "grupo",
    code: "G2.2",
    title: "Spoiler da Live: Pausa para Instalar + Tour Completo das Ferramentas",
    timing: "Fase 2 · Quinta-feira à tarde",
    body: `🎬 *O QUE VAMOS FAZER AO VIVO HOJE À NOITE ([HORARIO_LIVE])*

Nada de enrolação nem papo técnico difícil. Hoje às *[HORARIO_LIVE]* vou abrir minha tela e mostrar passo a passo:

1️⃣ *Pausa para Instalar do Zero em 1 Minuto:*
Instalando em 2 cliques e ativando com *10 inteligências artificiais gratuitas já inclusas* (ou sua conta do ChatGPT, Claude, Gemini ou Grok).

2️⃣ *Tour Completo pelas Ferramentas do CriativoOS:*
• *Operador de Computador:* abre suas pastas, preenche planilhas e opera seu PC com segurança
• *Navegador Inteligente com Pausa Segura:* pesquisa concorrentes e chama você antes de qualquer senha ou código
• *+253 Aplicativos & Rotinas 24h:* Google Drive, Notion, Gmail, WordPress e relatórios em PDF semanais no automático
• *Estúdio dos 15 Criativos & Instagram:* carrosséis, posts com o seu rosto real, calendário visual, Stories com espaço livre e Vídeos para Reels.

3️⃣ *Tudo no WhatsApp:*
Como pedir tarefas e aprovar criações respondendo \`1\` direto do celular.

4️⃣ *Lote Quinta Black com Acesso Vitalício no Ilimitado:*
Como garantir por uma fração do valor oficial de \`12x R$ 107,91\` do site.

Te vejo daqui a pouco! 🚀`,
  },
  {
    id: "g2-3",
    campaign: "black",
    channel: "grupo",
    code: "G2.3",
    title: "Chamada 'Estamos AO VIVO Agora' · Lançamento Quinta Black",
    timing: "Fase 2 · Início da Live",
    body: `🔴 *ESTAMOS AO VIVO! ENTRE AGORA NO LANÇAMENTO OFICIAL QUINTA BLACK DO CRIATIVOOS*

Acabamos de começar! Vou mostrar a dor real que estamos eliminando hoje, fazer uma pausa para instalar na tela em 1 minuto, fazer o tour completo por todas as ferramentas e liberar a condição especial de *Quinta Black*.

👉 *Acompanhe a apresentação interativa aqui:*
[LINK_APRESENTACAO_BLACK]

Entra agora que já estamos na tela! 🚀`,
  },
  {
    id: "g2-4",
    campaign: "black",
    channel: "grupo",
    code: "G2.4",
    title: "Carrinho Aberto Quinta Black (12x R$ 9,97 / R$ 18,20 / R$ 20,25)",
    timing: "Fase 2 · Momento do Pitch (Fixar no grupo)",
    body: `🖤 *CARRINHO ABERTO: LANÇAMENTO OFICIAL QUINTA BLACK DO CRIATIVOOS!*

Chegou a hora! Enquanto a tabela oficial perpétua no site público (\`criativoos.com.br\`) custa *12x R$ 32,15, 12x R$ 97,09 e 12x R$ 107,91*, quem entra nesta janela especial de *Lançamento Quinta Black* garante:

🟢 *LICENÇA INDIVIDUAL · 12x de R$ 9,97* *(ou R$ 97,00 à vista anual)* _(Oficial: ~12x R$ 32,15~)_
• Até 2 marcas / servidores · 2 PCs · 9 Criativos Base + Operador PC + Navegador + +253 Apps
• _Opcional no checkout:_ por apenas *+R$ 37* você transforma em *VITALÍCIO + libera os 6 Criativos extras* (15 no total para até 2 marcas)!
👉 Link direto: [LINK_BF_INDIVIDUAL]

🟡 *LICENÇA AGÊNCIA 10 · 12x de R$ 18,20* *(ou R$ 177,00 à vista anual)* _(Oficial: ~12x R$ 97,09~)_
• Até 10 clientes ou servidores · 3 PCs · 12 Criativos (Base + Bônus de Rosto Real, Concorrentes e PDFs)
👉 Link direto: [LINK_BF_AG10]

🔥 *LICENÇA ILIMITADA · 12x de R$ 20,25!* *(ou R$ 197,00 à vista · VITALÍCIO!)* _(Oficial: ~12x R$ 107,91~)_
• *Clientes e servidores ILIMITADOS* · até 5 PCs
• *Todos os 15 Criativos Completos* (incluindo os 3 Diretores de Vídeos para Reels) + Nuvem 24h
• *🎁 BÔNUS QUINTA BLACK:* Por apenas *R$ 2,05 por mês de diferença* para o Agência 10, você ganha o *PASSAPORTE VITALÍCIO INCLUSO* (sem nunca mais pagar anuidade)!
👉 Link direto: [LINK_BF_ILIMITADO]

⚡ *Entrega Imediata:* Chave por e-mail na hora + download do *CriativoOS v1.0.3* (Windows, Mac e Linux) + Área de Membros + Comunidade WhatsApp + *Garantia Blindada de 7 Dias*. 🚀`,
  },
  {
    id: "g2-5",
    campaign: "black",
    channel: "grupo",
    code: "G2.5",
    title: "Comparativo Lógico Black Friday (+R$ 2,05/mês -> Ilimitado Vitalício)",
    timing: "Fase 2 · Sexta-feira Black Friday",
    body: `📊 *FAÇA ESSA CONTA RÁPIDA ANTES DA MEIA-NOITE (BLACK FRIDAY CRIATIVOOS)*

Compare os valores válidos *SOMENTE ATÉ HOJE ÀS 23H59*:

• *Agência 10 (Anual · até 10 clientes):* \`12x de R$ 18,20\` *(ou R$ 177,00 à vista)*
• *Licença Ilimitada (Clientes Ilimitados + Vídeos Reels + ACESSO VITALÍCIO):* *\`12x de R$ 20,25\`* *(ou R$ 197,00 à vista)*!

Por literalmente *R$ 2,05 a mais por mês*, você sai da licença anual limitada a 10 clientes para ter *clientes e servidores ILIMITADOS + 5 PCs + acesso VITALÍCIO* contra *12x de R$ 107,91 todos os anos* no site oficial perpétuo.

👀 _Ainda não viu o CriativoOS funcionando na prática?_
Confira os slides aqui: [LINK_APRESENTACAO_BLACK]

🔥 _Garantir sua Licença Ilimitada Vitalícia agora:_
👉 [LINK_BF_ILIMITADO]`,
  },
  {
    id: "g2-6",
    campaign: "black",
    channel: "grupo",
    code: "G2.6",
    title: "Última Chamada Lançamento Quinta Black (Virada para Perpétuo)",
    timing: "Fase 2 · Últimas horas",
    body: `🚨 *ÚLTIMA CHAMADA: LOTE QUINTA BLACK COM VITALÍCIO ENCERRA ÀS 23H59*

Faltam poucas horas para encerrarmos o lote de lançamento de *12x R$ 9,97 / 12x R$ 18,20 / 12x R$ 20,25*.

Depois das 23h59 entra em vigor a *Oferta Oficial Perpétua* do site \`criativoos.com.br\`:
• Individual passa para \`12x de R$ 32,15\` *(R$ 297/ano · adicional vitalício sobe para +R$ 97)*
• Agência 10 passa para \`12x de R$ 97,09\` *(R$ 897/ano)*
• Agência Ilimitada passa para \`12x de R$ 107,91\` *(R$ 997/ano e sai o bônus Vitalício incluso)*.

Com *7 dias de garantia incondicional*, aulas gravadas na Área de Membros e Comunidade Oficial no WhatsApp:

🔥 *GARANTIR LICENÇA ILIMITADA VITALÍCIA · 12x de R$ 20,25 (ou R$ 197,00 à vista):*
👉 [LINK_BF_ILIMITADO]

🟡 *Agência 10 (Anual) · 12x R$ 18,20 (ou R$ 177,00):* [LINK_BF_AG10]
🟢 *Individual (Anual + opção vitalícia de R$ 37) · 12x R$ 9,97 (ou R$ 97,00):* [LINK_BF_INDIVIDUAL]`,
  },

  // =========================================================================
  // CAMPANHA 2 - DISPAROS 1:1 INDIVIDUAIS (QUINTA BLACK)
  // =========================================================================
  {
    id: "d2-1",
    campaign: "black",
    channel: "disparo_1_1",
    code: "D2.1",
    title: "Convite 1:1 para o Lançamento Quinta Black",
    timing: "Fase 2 · Antes da Live",
    body: `Fala [NOME], tudo ótimo? 👋

Hoje às *[HORARIO_LIVE]* vamos abrir oficialmente o *CriativoOS v1.0.3* na nossa live de *Quinta Black*.

Vou fazer uma pausa para mostrar instalando em 1 minuto no computador e fazer um tour completo por dentro · mostrando que ele não faz apenas posts, mas também opera programas e planilhas do PC, pesquisa na internet, conecta +253 aplicativos e envia criações com seu rosto real pelo WhatsApp (inclusive com 10 IAs gratuitas já inclusas).

E no final revelamos o lote fechado de lançamento com *Acesso Vitalício*!

Quer o link da apresentação para acompanhar? 👉 [LINK_APRESENTACAO_BLACK]`,
  },
  {
    id: "d2-2",
    campaign: "black",
    channel: "disparo_1_1",
    code: "D2.2",
    title: "Disparo Direto Carrinho Aberto Quinta Black 1:1",
    timing: "Fase 2 · Pós-Live / Black Friday",
    body: `[NOME], liberamos o lote de *Lançamento Quinta Black do CriativoOS v1.0.3*! 🖤⚡

Enquanto a tabela oficial perpétua do site \`criativoos.com.br\` fica entre *12x de R$ 32,15 e 12x de R$ 107,91*, nessa janela especial ficou assim:

• *Individual (Anual · 2 marcas · 9 Criativos + Operador PC):* *12x de R$ 9,97* (ou R$ 97,00 à vista)
_(Com opção no checkout de +R$ 37 para ficar Vitalício + 6 Criativos extras)_
👉 [LINK_BF_INDIVIDUAL]

• *Agência 10 (Anual · até 10 clientes/servidores):* *12x de R$ 18,20* (ou R$ 177,00 à vista)
👉 [LINK_BF_AG10]

• *Licença Ilimitada (Clientes Ilimitados · 15 Criativos incl. Vídeos Reels · VITALÍCIO INCLUSO):* *12x de R$ 20,25* (ou R$ 197,00 à vista)
👉 [LINK_BF_ILIMITADO]

Dica sincera: pela diferença de apenas *R$ 2,05/mês* do Agência 10 pro Ilimitado, você leva clientes ilimitados e nunca mais paga anuidade. Qualquer dúvida me chama aqui!`,
  },
  {
    id: "d2-3",
    campaign: "black",
    channel: "disparo_1_1",
    code: "D2.3",
    title: "Recuperação & Quebra de Objeção 1:1",
    timing: "Fase 2 · Black Friday Tarde",
    body: `Oi [NOME]! Tudo bem?

Vi seu interesse no *CriativoOS* nessa janela de *Quinta Black* e passei para tirar qualquer dúvida rápida.

Você tem *7 dias de garantia incondicional* para baixar no seu Windows, Mac ou Linux, acessar a Área de Membros com as aulas passo a passo, entrar na nossa Comunidade Oficial no WhatsApp e rodar usando as 10 IAs gratuitas já inclusas (sem gasto extra com API).

Se quiser travar a *Licença Ilimitada Vitalícia (12x de R$ 20,25 ou R$ 197,00 à vista)* antes de virar para 12x de R$ 107,91 no perpétuo, o link está aqui:
👉 [LINK_BF_ILIMITADO]

E se preferir o *Individual (12x de R$ 9,97 ou R$ 97,00 à vista)*:
👉 [LINK_BF_INDIVIDUAL]`,
  },
  {
    id: "d2-4",
    campaign: "black",
    channel: "disparo_1_1",
    code: "D2.4",
    title: "Fechamento 1:1 Últimas Horas antes do Perpétuo",
    timing: "Fase 2 · Últimas horas antes das 23h59",
    body: `[NOME], passando rapidinho antes da meia-noite ⏳

Às *23h59* encerra a condição de lançamento da *Quinta Black* e entra no ar o valor oficial perpétuo do site \`criativoos.com.br\` (12x R$ 32,15 / 12x R$ 97,09 / 12x R$ 107,91, sem o Vitalício gratuito no Ilimitado).

Se quiser travar sua *Licença Ilimitada Vitalícia por apenas 12x de R$ 20,25 (ou R$ 197,00 à vista)*, é só concluir por aqui antes da virada:
👉 [LINK_BF_ILIMITADO]

Sucesso demais por aí! 🚀`,
  },
];
