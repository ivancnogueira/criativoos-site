export type ChangelogCategory = "added" | "changed" | "fixed" | "security";

export type ChangelogFilter = "all" | ChangelogCategory;

export interface ChangelogGroup {
  type: ChangelogCategory;
  heading: string;
  items: string[];
}

export interface ChangelogRelease {
  version: string;
  anchor: string;
  date: string;
  summary: string;
  notices?: string[];
  groups: ChangelogGroup[];
}

export const CHANGELOG_CATEGORY_META: Record<
  ChangelogCategory,
  { label: string; dotClass: string; badgeClass: string }
> = {
  added: {
    label: "Novidades",
    dotClass: "bg-[#B9FC01] shadow-[0_0_10px_rgba(185,252,1,0.65)]",
    badgeClass: "border-[#B9FC01]/30 bg-[#B9FC01]/10 text-[#B9FC01]",
  },
  changed: {
    label: "Melhorias",
    dotClass: "bg-[#38BDF8] shadow-[0_0_10px_rgba(56,189,248,0.55)]",
    badgeClass: "border-sky-400/30 bg-sky-400/10 text-sky-300",
  },
  fixed: {
    label: "Correções",
    dotClass: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]",
    badgeClass: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  },
  security: {
    label: "Segurança",
    dotClass: "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]",
    badgeClass: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  },
};

export const CRIATIVOOS_CHANGELOG_RELEASES: readonly ChangelogRelease[] = [
  {
    version: "v1.1.2",
    anchor: "v1-1-2",
    date: "2026-11-28",
    summary:
      "Execucao Enxuta Cross-Platform, Lazy MCP Universal, fim definitivo das janelas pretas CMD no Windows, resiliencia anti-sumico de agentes/provedores na interface e sessoes quentes persistentes para ChatGPT/Codex, Claude, OpenCode e Antigravity.",
    notices: [
      "A atualizacao **v1.1.2** otimiza drasticamente o tempo de resposta e o consumo de tokens em saudações e conversas continuas em todos os provedores suportados.",
    ],
    groups: [
      {
        type: "added",
        heading: "Novidades",
        items: [
          "**Motor Persistente Codex App Server:** ChatGPT/Codex CLI agora executa em servidor JSON-RPC persistente (`codex app-server --listen stdio://`) com reuso de thread, streaming em tempo real, compactacao nativa (`thread/compact/start`) e fallback automatico para `codex exec`.",
          "**Sessoes Persistentes Multi-Provedor:** Claude CLI (`ENABLE_TOOL_SEARCH=true`, `--strict-mcp-config`, `--disallowedTools` e `--resume` com recuperacao automatica), OpenCode ACP e Antigravity ACP passam a reutilizar sessoes aquecidas por conversa e configuracao ativa.",
          "**Lazy MCP Universal & Handoff 32k:** ferramentas especializadas agora sao descobertas sob demanda via `tool_search` (ja entregando schemas e guias), `tool_describe` e `tool_call`, com compactacao real (`/compact`) limitada a pacote deterministico de 32.000 caracteres.",
        ],
      },
      {
        type: "changed",
        heading: "Melhorias",
        items: [
          "**Turnos Leves Ultra-Enxutos:** saudacoes e conversas simples (como `'oi'`) nao injetam dezenas de schemas MCP, arquivos extensos de marca ou regras visuais desnecessarias, derrubando a latencia e evitando geracao involuntaria de imagens.",
        ],
      },
      {
        type: "fixed",
        heading: "Correções",
        items: [
          "**Silencio Total no Windows (Zero CMD Popups):** resolucao direta de binarios nativos `.exe` (sem wrappers intermediarios), migracao automatica de runtimes `npm` legados para standalone e `windowsHide: true` absoluto inclusive em fluxos OAuth e ACP.",
          "**Fim do Sumico de Agentes e Provedores na Interface:** snapshot `stale-while-revalidate` em SQLite com timeout de 4s por sonda, fallback local sem rede quando APIs externas oscilam, protecao de hidratacao no frontend e isolamento Crashpad/Watchdog no daemon Desktop.",
        ],
      },
    ],
  },
  {
    version: "v1.1.1",
    anchor: "v1-1-1",
    date: "2026-11-27",
    summary:
      "Correcao definitiva do loop de inicializacao e splash, execucao 100% silenciosa no Windows sem janelas CMD e chegada dos Fluxos Instagram [BETA] com Automacao Comentario para Direct multi-etapa na janela de 24h.",
    notices: [
      "Os instaladores da versao **v1.1.1** para Windows, macOS e Linux ja estao publicados e prontos para atualizacao automatica ou download direto.",
    ],
    groups: [
      {
        type: "added",
        heading: "Novidades",
        items: [
          "**Automacao Comentario para Direct [BETA]:** novo espaco dentro de **Automacoes** com sub-sidebar recolhivel (**Fluxos Criativos** | **Fluxos Instagram BETA**), regras por palavra-chave, exclusao negativa, escopo por post, aprovacao humana opcional e Simulador Dry-Run.",
          "**Fluxos Multi-Etapa na Janela de 24h:** envio sequencial de mensagens, delays, coleta para CRM, ramificacao por botoes, cartoes de entregaveis HTTPS, disparo de workflows e handoff para Criativo de IA dentro da janela oficial de 24h com limite de 200 req/h.",
          "**3 Modos de Recepcao e Entregaveis Seguros:** Polling local com recuperacao de 7 dias, Webhook Direto HMAC-SHA256, Relay Zero-Trust no Painel Central (sem armazenar tokens Meta), publicacao publica HTTPS (GitHub Pages ou Showcase sob dominio valido sem expor IP) e ferramentas MCP com rascunhos sempre pausados.",
        ],
      },
      {
        type: "fixed",
        heading: "Correções",
        items: [
          "**Fim do Loop de Boot e Splash:** timeout defensivo nas leituras HTTP iniciais (15s sem bloquear mutacoes longas), sondagens de CLIs e cotas movidas para segundo plano, instancia unica de preloader e auto-recuperacao automatica do Daemon (`ensureRunning`) pelo Watchdog Desktop.",
          "**Windows 100% Silencioso:** eliminacao de janelas de console CMD saltando na abertura ou ao acessar Configuracoes com `windowsHide: true` global e deduplicacao em voo no catalogo OpenCode.",
        ],
      },
    ],
  },
  {
    version: "v1.1.0",
    anchor: "v1-1-0",
    date: "2026-11-27",
    summary:
      "Grande virada Base-10 do CriativoOS com Estabilidade em Escala, Workflows Pro com templates e campos tipados, Cockpit Pro multi-split e multimonitor, voz resiliente e pacote completo Meta Graph API 2026 com Trial Reels, Primeiro Comentario e Inteligencia de Retencao.",
    notices: [
      "Todos os novos recursos e melhorias do ciclo v1.0.1 (Fases 41 a 46) estao consolidados nos instaladores da versao **v1.1.0** para Windows, macOS e Linux.",
    ],
    groups: [
      {
        type: "added",
        heading: "Novidades",
        items: [
          "**Workflows Pro:** 4 templates prontos de marketing, botao Organizar (Tidy up), saidas estruturadas (`{{campo}}`), condicoes deterministicas sem custo de IA, geracao de midia em lote (Batch 4x) e importacao/exportacao portavel `.workflow.json`.",
          "**Cockpit Pro e Voz Resiliente:** painel lateral multi-split vertical (ate 3 grupos), janela separada do navegador para multi-monitor, graficos empilhados por provedor (`90d` e `1 ano`), VAD anti-silencio, ditado longo ate 10 minutos, cursores colaborativos em workflows e preview `.docx` nativo.",
          "**Meta Graph API 2026 e Retencao:** publicacao como **Trial Reels** (`>= 1.000` seguidores), agendamento de **Primeiro Comentario** com aprovacao humana, **Exclusao Controlada** auditada, coleta de **Skip Rate (3s)** e **Reposts**, alem do motor de **Melhor Horario para Postar** integrado ao Calendario Editorial.",
          "**Escala e Estabilidade:** Auto-Unload inteligente de abas ociosas sob pressao de RAM com reidratacao sob demanda e Pool Multi-Conta configuravel em modo **Spread** ou **Fill first**.",
        ],
      },
      {
        type: "changed",
        heading: "Melhorias",
        items: [
          "**Runtime e Banco de Dados:** payload ACP ampliado ate 256 MB, cache SQLite ate 64 MB com limpeza em lote indexada, compactacao preventiva de cache de prompt 1h (`>= 200K` tokens) e sidebar inicial enxuta com filtros `Todas`, `Nao lidas` e `Pastas`.",
        ],
      },
      {
        type: "fixed",
        heading: "Correções",
        items: [
          "**Sincronizacao em Tempo Real e Clean-Room:** atualizacao instantanea de abas suspensas via WebSocket (`browser:tab_unloaded`) e substituicao integral de seletores nativos por controles Carbon Dark acessiveis.",
        ],
      },
    ],
  },
  {
    version: "v1.0.9",
    anchor: "v1-0-9",
    date: "2026-11-27",
    summary:
      "Atualização automática silenciosa com reinício assistido em 1 clique no Windows, macOS e Linux, instalação independente do motor Codex sem exigir Node.js e resolução dinâmica do modelo padrão para novos Criativos.",
    notices: [
      "Clique em **Reiniciar para atualizar** na barra superior do aplicativo para aplicar o pacote já baixado, ou confira novas versões das CLIs na aba **Provedores**.",
    ],
    groups: [
      {
        type: "added",
        heading: "Novidades",
        items: [
          "**Auto-update silencioso com reinício em 1 clique:** o `AutoUpdateService` baixa o pacote em segundo plano e exibe a ação **Reiniciar para atualizar**, com instalador assistido em Windows, macOS (`.zip`) e Linux (`.AppImage`).",
          "**Codex CLI standalone:** instalação e atualização direta do binário oficial da Codex CLI sem precisar ter Node.js ou `npm` instalados no computador.",
          "**Banner dedicado de atualização de CLIs:** barra superior discreta informando quando há nova versão disponível para os motores conectados, com botão direto para atualizar na tela de Provedores.",
          "**Suporte a imagens em modelos ChatGPT e Codex:** novos modelos multimodais agora reconhecem automaticamente o envio de referências visuais (`suporta_imagem`).",
        ],
      },
      {
        type: "changed",
        heading: "Melhorias",
        items: [
          "**Modelo padrão dinâmico para novos Criativos:** ao criar um agente ou iniciar uma rotina, o sistema escolhe automaticamente um modelo ativo da sua conta conectada ou do OpenCode gratuito, evitando referências a modelos antigos descontinuados.",
          "**Limpeza automática do cache de modelos:** após atualizar o runtime de qualquer provedor, o `models_cache.json` é renovado para exibir os modelos recém-liberados.",
        ],
      },
    ],
  },
  {
    version: "v1.0.8",
    anchor: "v1-0-8",
    date: "2026-11-27",
    summary:
      "Motor universal de tarefas em segundo plano com auto-despertar reativo para renderizações de vídeo, pesquisas profundas e fluxos demorados sem travar a conversa principal.",
    groups: [
      {
        type: "added",
        heading: "Novidades",
        items: [
          "**Motor universal de background jobs:** comandos demorados, renderizações Remotion/FFmpeg e automações externas agora rodam de forma assíncrona em segundo plano (`background-job-service`).",
          "**Auto-despertar reativo entre turnos:** assim que uma tarefa em segundo plano termina, o Criativo responsável desperta automaticamente com o resultado pronto e continua a entrega na mesma thread.",
        ],
      },
      {
        type: "changed",
        heading: "Melhorias",
        items: [
          "**Roteamento inteligente de espera:** o chat permanece livre para novas perguntas ou outros Criativos enquanto tarefas pesadas seguem executando em paralelo.",
        ],
      },
    ],
  },
  {
    version: "v1.0.7",
    anchor: "v1-0-7",
    date: "2026-11-26",
    summary:
      "Atualização ponta a ponta com feedback visual animado, streaming em tempo real por blocos e melhorias de confiabilidade na entrega de pacotes multiplataforma.",
    groups: [
      {
        type: "added",
        heading: "Novidades",
        items: [
          "**Update Beam no banner de atualização:** nova animação de progresso indicando verificação, download e prontidão da nova versão dentro do Cockpit.",
          "**Streaming por blocos e etapas reais no ACP:** cada chamada de ferramenta, leitura e geração aparece como etapa estruturada em tempo real durante o turno do agente.",
        ],
      },
      {
        type: "changed",
        heading: "Melhorias",
        items: [
          "**Esteira de releases multiplataforma:** validação automática de instaladores Windows, macOS e Linux antes de publicar cada nova versão.",
        ],
      },
    ],
  },
  {
    version: "v1.0.6",
    anchor: "v1-0-6",
    date: "2026-11-26",
    summary:
      "Turnos longos sem limite rígido de duração, detector inteligente de silêncio real, upload ampliado para 100 MB e ferramentas nativas de edição de vídeo com Remotion e FFmpeg.",
    groups: [
      {
        type: "added",
        heading: "Novidades",
        items: [
          "**Ferramentas nativas de vídeo (Remotion e FFmpeg):** corte, composição, legendas animadas e renderização 1080x1920 diretamente integradas ao estúdio de Reels.",
          "**Upload de arquivos de até 100 MB:** envie vídeos brutos, áudios longos e pacotes de referências direto no chat ou nos fluxos de produção.",
          "**Watchdog de inatividade real (`turn-stall-watchdog`):** remove o teto fixo de tempo total e pausa automaticamente a contagem enquanto ferramentas MCP, ACP ou renders de vídeo estão ativos.",
        ],
      },
      {
        type: "fixed",
        heading: "Correções",
        items: [
          "**Compensação de hibernação do sistema:** suspensões rápidas do notebook não disparam falsos timeouts ao retomar o computador.",
          "**Isolamento de conexões ACP por agente:** falhas pontuais em um Criativo não interferem nas sessões simultâneas dos demais.",
        ],
      },
    ],
  },
  {
    version: "v1.0.5",
    anchor: "v1-0-5",
    date: "2026-11-26",
    summary:
      "Descoberta automática dos modelos reais da sua conta ChatGPT, atualização programada das CLIs a cada 24 horas e execução discreta no Windows sem janelas de terminal.",
    groups: [
      {
        type: "added",
        heading: "Novidades",
        items: [
          "**Lista real de modelos ChatGPT via conta conectada:** o seletor exibe exatamente os modelos liberados para o seu plano conectado.",
          "**Atualização automática das CLIs a cada 24h:** mantém os runtimes dos provedores sempre compatíveis sem intervenção manual.",
        ],
      },
      {
        type: "fixed",
        heading: "Correções",
        items: [
          "**Execução silenciosa no Windows:** elimina janelas piscando do `cmd.exe` ao iniciar agentes e checagens em segundo plano.",
          "**Sanitização de tabelas no chat:** garante formatação limpa e previsível mesmo em relatórios extensos de concorrentes e métricas.",
        ],
      },
    ],
  },
  {
    version: "v1.0.4",
    anchor: "v1-0-4",
    date: "2026-11-25",
    summary:
      "Auto-instalação local e detecção multiplataforma blindada para a Antigravity CLI, com fallback resiliente de download em Windows, macOS e Linux.",
    groups: [
      {
        type: "added",
        heading: "Novidades",
        items: [
          "**Auto-instalador multiplataforma da Antigravity CLI:** detecta binários existentes no sistema ou baixa localmente com fallback automático em caso de instabilidade de rede.",
        ],
      },
      {
        type: "changed",
        heading: "Melhorias",
        items: [
          "**Painel de contas conectadas por provedor:** exibição mais clara de status, cotas e reconexão rápida na seção de Provedores.",
        ],
      },
    ],
  },
  {
    version: "v1.0.3",
    anchor: "v1-0-3",
    date: "2026-11-22",
    summary:
      "Consolidação completa da identidade CriativoOS e do vocabulário de Criativos em toda a interface, skills de conteúdo e documentação operacional.",
    groups: [
      {
        type: "changed",
        heading: "Melhorias",
        items: [
          "**Vocabulário unificado CriativoOS:** todas as telas, menus, skills base, especialistas bônus e diretórios de vídeo refletem a nomenclatura oficial de Criativos e Marcas.",
          "**Guardrail automático de consistência:** checagem automatizada integrada ao ciclo de build e testes para preservar integridade de marca e isolamento de dados.",
        ],
      },
    ],
  },
  {
    version: "v1.0.2",
    anchor: "v1-0-2",
    date: "2026-11-22",
    summary:
      "Padronização definitiva dos diretórios de dados e nomes de executáveis oficiais do CriativoOS em Windows, macOS e Linux.",
    notices: [
      "Ao atualizar a partir da `v1.0.1`, confirme se o diretório de trabalho das suas marcas está apontado para a pasta padrão **CriativoOS**.",
    ],
    groups: [
      {
        type: "changed",
        heading: "Melhorias",
        items: [
          "**Caminhos nativos unificados:** dados locais passam a residir em `CriativoOS` no AppData/Config do sistema, com executável `CriativoOS` padronizado entre plataformas.",
        ],
      },
    ],
  },
  {
    version: "v1.0.1",
    anchor: "v1-0-1",
    date: "2026-11-22",
    summary:
      "Grande evolução arquitetural e visual do CriativoOS: novo Design System Obsidian, Volt e Cobalt, busca global Ctrl+K, calendário editorial, Safe Zones 4:5 e 9:16, segurança reforçada e recursos avançados para agências.",
    groups: [
      {
        type: "added",
        heading: "Novidades",
        items: [
          "**Calendário Editorial, Galeria Meta e Editor Visual 4:5 e 9:16:** visualize pautas do mês, acompanhe métricas de posts publicados e valide enquadramento com Safe Zones de Feed e Reels/Stories.",
          "**Busca Global (`Ctrl+K`) e Descoberta Lazy de Ferramentas:** navegue instantaneamente entre Criativos, conversas e configurações enquanto os modelos carregam apenas as ferramentas necessárias por turno.",
          "**Auto-compactação de contexto e transferência entre provedores:** sessões longas resumem decisões automaticamente e permitem trocar de IA sem perder o fio da campanha.",
          "**Navegador Inteligente Avançado:** detecção automática de bloqueios/CAPTCHA com pausa para intervenção humana, políticas de navegação e gravação opcional de sessão.",
          "**Colaboração e Escala de Agência:** controle de acesso por papéis (Team API/RBAC), migrador completo de instância local para VPS 24h, feed `.ics` de rotinas, mensageria multicanal e cofre estruturado de logins com autofill aprovado.",
          "**Operador de Computador (CUA) e Deep Links (`criativo://`):** automação visual no desktop com botão de parada imediata (kill-switch), temas externos em JSON e monitor de recursos do host.",
        ],
      },
      {
        type: "security",
        heading: "Segurança",
        items: [
          "**Hardening do aplicativo Desktop e Cofre:** Política de Segurança de Conteúdo (CSP), validação estrita de canais IPC, proteção da chave mestra no keychain do sistema operacional e catálogo de erros amigáveis `CRV-*`.",
        ],
      },
    ],
  },
  {
    version: "v1.0.0",
    anchor: "v1-0-0",
    date: "2026-11-18",
    summary:
      "Lançamento público inaugural do CriativoOS para Windows, macOS, Linux e servidor 24h em VPS/Docker, reunindo os 15 Criativos especializados, navegador inteligente, rotinas visuais e aprovação pelo WhatsApp.",
    groups: [
      {
        type: "added",
        heading: "Novidades",
        items: [
          "**Equipe completa de 15 Criativos autônomos:** especialistas de estratégia, copy, design de carrossel, posts, anúncios, stories, consistência de rosto real, roteiros, edição de vídeo Reels, métricas e entrega.",
          "**Cockpit local e Nuvem 24h:** instale no seu computador ou rode 24 horas por dia em servidor VPS Linux/Docker com atualização integrada via banner no aplicativo.",
          "**Navegador Inteligente e +253 aplicativos conectados:** automação web com perfis persistentes, proxy por marca, tabelas compartilhadas isoladas, memória persistente FTS5 e workflows visuais em grafo.",
          "**WhatsApp integrado e 10 IAs gratuitas incluídas:** envie comandos e aprove criações direto no WhatsApp com suporte multi-número e rotação multi-conta entre provedores.",
        ],
      },
    ],
  },
];
