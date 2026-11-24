import React from "react";
import { ArrowRight, PlugZap } from "lucide-react";
import { SpecularButton } from "../fx/SpecularButton";

interface AppItem {
  id: string;
  name: string;
  description: string;
  logo: string;
  accentBg: string;
}

const APPS_ROW_1: readonly AppItem[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    description: "Aprovar posts por mensagem",
    logo: "/images/integrations/whatsapp.svg",
    accentBg: "bg-[#25D366]/15",
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "Publicar e ler comentários",
    logo: "/images/integrations/instagram.svg",
    accentBg: "bg-[#E4405F]/15",
  },
  {
    id: "meta",
    name: "Meta Ads",
    description: "Preparar peças de anúncios",
    logo: "/images/integrations/meta.svg",
    accentBg: "bg-[#0082FB]/15",
  },
  {
    id: "facebook",
    name: "Facebook",
    description: "Gerenciar páginas e campanhas",
    logo: "/images/integrations/facebook.svg",
    accentBg: "bg-[#1877F2]/15",
  },
  {
    id: "youtube",
    name: "YouTube",
    description: "Estudar vídeos e títulos",
    logo: "/images/integrations/youtube.svg",
    accentBg: "bg-[#FF0000]/15",
  },
  {
    id: "tiktok",
    name: "TikTok",
    description: "Buscar temas em alta",
    logo: "/images/integrations/tiktok.svg",
    accentBg: "bg-[#00F2EA]/12",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Publicar artigos de autoridade",
    logo: "/images/integrations/linkedin.svg",
    accentBg: "bg-[#0A66C2]/15",
  },
  {
    id: "pinterest",
    name: "Pinterest",
    description: "Salvar referências visuais",
    logo: "/images/integrations/pinterest.svg",
    accentBg: "bg-[#CB1F27]/15",
  },
  {
    id: "telegram",
    name: "Telegram",
    description: "Comandos rápidos no celular",
    logo: "/images/integrations/telegram.svg",
    accentBg: "bg-[#26A5E4]/15",
  },
  {
    id: "discord",
    name: "Discord",
    description: "Conectar comunidades e grupos",
    logo: "/images/integrations/discord.svg",
    accentBg: "bg-[#5865F2]/15",
  },
  {
    id: "slack",
    name: "Slack",
    description: "Avisar toda a sua equipe",
    logo: "/images/integrations/slack.svg",
    accentBg: "bg-[#E01E5A]/15",
  },
  {
    id: "msteams",
    name: "Microsoft Teams",
    description: "Alinhar demandas no time",
    logo: "/images/integrations/msteams.svg",
    accentBg: "bg-[#6264A7]/20",
  },
  {
    id: "gmail",
    name: "Gmail",
    description: "Ler e responder e-mails",
    logo: "/images/integrations/gmail.svg",
    accentBg: "bg-[#EA4335]/15",
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    description: "Enviar novidades por e-mail",
    logo: "/images/integrations/mailchimp.svg",
    accentBg: "bg-[#FFE01B]/15",
  },
  {
    id: "intercom",
    name: "Intercom",
    description: "Responder clientes no chat",
    logo: "/images/integrations/intercom.svg",
    accentBg: "bg-white/10",
  },
];

const APPS_ROW_2: readonly AppItem[] = [
  {
    id: "gdrive",
    name: "Google Drive",
    description: "Guardar fotos e pastas",
    logo: "/images/integrations/gdrive.svg",
    accentBg: "bg-[#34A853]/15",
  },
  {
    id: "gsheets",
    name: "Google Planilhas",
    description: "Atualizar listas e metas",
    logo: "/images/integrations/gsheets.svg",
    accentBg: "bg-[#0F9D58]/15",
  },
  {
    id: "gcalendar",
    name: "Google Agenda",
    description: "Marcar horários na semana",
    logo: "/images/integrations/gcalendar.svg",
    accentBg: "bg-[#4285F4]/15",
  },
  {
    id: "gmeet",
    name: "Google Meet",
    description: "Resumir reuniões com clientes",
    logo: "/images/integrations/gmeet.svg",
    accentBg: "bg-[#00AC47]/15",
  },
  {
    id: "dropbox",
    name: "Dropbox",
    description: "Sincronizar arquivos pesados",
    logo: "/images/integrations/dropbox.svg",
    accentBg: "bg-[#0061FF]/15",
  },
  {
    id: "onedrive",
    name: "OneDrive",
    description: "Acessar pastas na nuvem",
    logo: "/images/integrations/onedrive.svg",
    accentBg: "bg-[#0078D4]/15",
  },
  {
    id: "notion",
    name: "Notion",
    description: "Organizar roteiros e ideias",
    logo: "/images/integrations/notion.svg",
    accentBg: "bg-white/10",
  },
  {
    id: "trello",
    name: "Trello",
    description: "Mover cartões de tarefas",
    logo: "/images/integrations/trello.svg",
    accentBg: "bg-[#0079BF]/15",
  },
  {
    id: "clickup",
    name: "ClickUp",
    description: "Acompanhar entregas do time",
    logo: "/images/integrations/clickup.svg",
    accentBg: "bg-[#7B68EE]/15",
  },
  {
    id: "asana",
    name: "Asana",
    description: "Organizar tarefas diárias",
    logo: "/images/integrations/asana.svg",
    accentBg: "bg-[#F06A6A]/15",
  },
  {
    id: "monday",
    name: "Monday.com",
    description: "Controlar prazos de campanhas",
    logo: "/images/integrations/monday.svg",
    accentBg: "bg-[#F62B54]/15",
  },
  {
    id: "airtable",
    name: "Airtable",
    description: "Estruturar bancos de pautas",
    logo: "/images/integrations/airtable.svg",
    accentBg: "bg-[#FFBF00]/15",
  },
  {
    id: "loom",
    name: "Loom",
    description: "Transformar gravações em roteiros",
    logo: "/images/integrations/loom.svg",
    accentBg: "bg-[#625DF5]/15",
  },
  {
    id: "zoom",
    name: "Zoom",
    description: "Extrair trechos de chamadas",
    logo: "/images/integrations/zoom.svg",
    accentBg: "bg-[#0B5CFF]/15",
  },
  {
    id: "calendly",
    name: "Calendly",
    description: "Agendar reuniões com clientes",
    logo: "/images/integrations/calendly.svg",
    accentBg: "bg-[#006BFF]/15",
  },
];

const APPS_ROW_3: readonly AppItem[] = [
  {
    id: "mercadopago",
    name: "Mercado Pago",
    description: "Conferir cobranças no Pix",
    logo: "/images/integrations/mercadopago.svg",
    accentBg: "bg-[#00B1EA]/15",
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Acompanhar assinaturas online",
    logo: "/images/integrations/stripe.svg",
    accentBg: "bg-[#635BFF]/15",
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "Receber vendas internacionais",
    logo: "/images/integrations/paypal.svg",
    accentBg: "bg-[#0079C1]/15",
  },
  {
    id: "shopify",
    name: "Shopify",
    description: "Ler produtos da sua loja",
    logo: "/images/integrations/shopify.svg",
    accentBg: "bg-[#95BF47]/15",
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    description: "Atualizar ofertas e catálogo",
    logo: "/images/integrations/woocommerce.svg",
    accentBg: "bg-[#7F54B3]/15",
  },
  {
    id: "wordpress",
    name: "WordPress",
    description: "Publicar textos no seu site",
    logo: "/images/integrations/wordpress.svg",
    accentBg: "bg-[#21759B]/15",
  },
  {
    id: "webflow",
    name: "Webflow",
    description: "Editar páginas de vendas",
    logo: "/images/integrations/webflow.svg",
    accentBg: "bg-[#146EF5]/15",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    description: "Atualizar contatos e vendas",
    logo: "/images/integrations/hubspot.svg",
    accentBg: "bg-[#FF7A59]/15",
  },
  {
    id: "googleads",
    name: "Google Ads",
    description: "Acompanhar resultados de anúncios",
    logo: "/images/integrations/googleads.svg",
    accentBg: "bg-[#4285F4]/15",
  },
  {
    id: "googleanalytics",
    name: "Google Analytics",
    description: "Ler acessos e conversões",
    logo: "/images/integrations/googleanalytics.svg",
    accentBg: "bg-[#F9AB00]/15",
  },
  {
    id: "make",
    name: "Make",
    description: "Montar fluxos entre aplicativos",
    logo: "/images/integrations/make.png",
    accentBg: "bg-[#A855F7]/15",
  },
  {
    id: "n8n",
    name: "n8n",
    description: "Rodar rotinas no seu servidor",
    logo: "/images/integrations/n8n.svg",
    accentBg: "bg-[#EA4B71]/15",
  },
  {
    id: "zapier",
    name: "Zapier",
    description: "Conectar formulários em segundos",
    logo: "/images/integrations/zapier.svg",
    accentBg: "bg-[#FF4F00]/15",
  },
  {
    id: "figma",
    name: "Figma",
    description: "Consultar artes e referências",
    logo: "/images/integrations/figma.svg",
    accentBg: "bg-[#A259FF]/15",
  },
  {
    id: "typeform",
    name: "Typeform",
    description: "Coletar respostas de formulários",
    logo: "/images/integrations/typeform.svg",
    accentBg: "bg-white/10",
  },
];

const DOUBLED_ROW_1 = [...APPS_ROW_1, ...APPS_ROW_1];
const DOUBLED_ROW_2 = [...APPS_ROW_2, ...APPS_ROW_2];
const DOUBLED_ROW_3 = [...APPS_ROW_3, ...APPS_ROW_3];

const IntegrationCard: React.FC<{ item: AppItem }> = ({ item }) => (
  <div className="w-64 shrink-0 rounded-2xl border border-white/10 bg-[#0B0E15] p-5 transition-colors duration-300 hover:border-[#B9FC01]/50">
    <div
      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 p-2 ${item.accentBg}`}
    >
      <img
        src={item.logo}
        alt={`Logo ${item.name}`}
        width={32}
        height={32}
        loading="eager"
        decoding="sync"
        className="h-8 w-8 object-contain"
      />
    </div>
    <h3 className="font-display text-lg font-bold text-white">{item.name}</h3>
    <p className="mt-1 text-sm text-slate-400">{item.description}</p>
  </div>
);

/**
 * Dobra 3D: +253 Aplicativos Conectados em 3 trilhas infinitas com 45 marcas distintas
 * (15 apps únicos por faixa, sem repetição e com logos oficiais locais).
 */
export const IntegrationsMarqueeSection: React.FC = () => {
  return (
    <section
      id="integracoes-apps"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#050608] py-20 lg:py-24"
    >
      {/* Cabeçalho Full-Width */}
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
            <PlugZap className="h-3.5 w-3.5" />
            // 03D · +253 APLICATIVOS CONECTADOS
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Conecte Os Aplicativos Que Você Já Usa{" "}
            <span className="text-[#B9FC01]">Sem Pagar Nada a Mais</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Junte suas pastas, planilhas, agenda, cobranças, atendimento e redes
            sociais em um único lugar, sem depender de assinaturas extras caras
            para ligar um aplicativo ao outro.
          </p>
        </div>
      </div>

      {/* 3 Trilhas Infinitas Contínuas com 45 apps distintos sem repetição */}
      <div className="mt-12 space-y-5 overflow-hidden">
        {/* Trilha 1: Comunicação & Redes Sociais (Esquerda) */}
        <div className="overflow-hidden">
          <div
            className="marquee-track-left"
            style={{ animationDuration: "48s", paddingRight: "20px" }}
          >
            {DOUBLED_ROW_1.map((item, index) => (
              <IntegrationCard
                key={`t1-${item.id}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>

        {/* Trilha 2: Arquivos, Google & Projetos (Direita) */}
        <div className="overflow-hidden">
          <div
            className="marquee-track-right"
            style={{ animationDuration: "54s", paddingRight: "20px" }}
          >
            {DOUBLED_ROW_2.map((item, index) => (
              <IntegrationCard
                key={`t2-${item.id}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>

        {/* Trilha 3: Vendas, Pagamentos, Sites & Rotinas (Esquerda) */}
        <div className="overflow-hidden">
          <div
            className="marquee-track-left"
            style={{ animationDuration: "58s", paddingRight: "20px" }}
          >
            {DOUBLED_ROW_3.map((item, index) => (
              <IntegrationCard
                key={`t3-${item.id}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Rodapé Full-Width com chamada direta */}
      <div className="mt-12 w-full px-4 text-center sm:px-6 md:px-10 xl:px-16">
        <p className="mb-5 font-mono text-xs text-slate-400">
          E mais de 208 outros aplicativos populares prontos para ligar com 1
          clique dentro do seu painel.
        </p>
        <SpecularButton href="#planos" size="md" variant="volt">
          Conhecer Planos e Começar
          <ArrowRight className="h-4 w-4" />
        </SpecularButton>
      </div>
    </section>
  );
};
