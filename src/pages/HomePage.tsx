import React from "react";
import { TravellingMascotGuide } from "../components/mascots/TravellingMascotGuide";
import { HeroSection } from "../components/landing/HeroSection";
import { OldVsNewOSComparison } from "../components/landing/OldVsNewOSComparison";
import { OsEnginesBentoSection } from "../components/landing/OsEnginesBentoSection";
import { VpsHybridInfraSection } from "../components/landing/VpsHybridInfraSection";
import { AudienceAndAgencySection } from "../components/landing/AudienceAndAgencySection";
import { UnifiedStudioOutputsSection } from "../components/landing/UnifiedStudioOutputsSection";
import { InsideCockpitSimulator } from "../components/landing/InsideCockpitSimulator";
import { CriativosSquadBento } from "../components/landing/CriativosSquadBento";
import { WhatsAppApprovalSimulator } from "../components/landing/WhatsAppApprovalSimulator";
import { HowToInstall60sSection } from "../components/landing/HowToInstall60sSection";
import { RoiCalculatorSection } from "../components/landing/RoiCalculatorSection";
import { OfficialOfferSection } from "../components/landing/OfficialOfferSection";
import { GuaranteeSection } from "../components/landing/GuaranteeSection";
import { FaqSection } from "../components/landing/FaqSection";
import { Footer } from "../components/landing/Footer";

/**
 * Página Inicial High-Ticket Full-Width do CriativoOS em 12 dobras estratégicas
 * (sem menu no topo, preservando a Hero 1B aprovada e todas as seções ponta a ponta).
 */
export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050608] text-[#F8FAFC]">
      <main>
        {/* 01. Hero 1B Aprovada */}
        <HeroSection />
        {/* 02. Quebra de Paradigma (Pilha Fragmentada vs Núcleo Unificado) */}
        <OldVsNewOSComparison />
        {/* 03. Os 4 Motores do OS (CUA, Browser CDP, 253+ Apps & Grafos, Cofre AES-256) */}
        <OsEnginesBentoSection />
        {/* 04. Infraestrutura Híbrida 24/7: Seu PC + Servidor VPS / Docker */}
        <VpsHybridInfraSection />
        {/* 05. Para Quem É + Modo Agência Multi-Cliente & Payback */}
        <AudienceAndAgencySection />
        {/* 06. Estúdio de Saídas Reais (Formatos + Marquee Full-Bleed Unificados) */}
        <UnifiedStudioOutputsSection />
        {/* 07. Cockpit CriativoOS Por Dentro (Dark Volt / Light Cobalt) */}
        <InsideCockpitSimulator />
        {/* 08. Os 15 Criativos Autônomos (15 Avatares Exclusivos + Mascotes Vivos oO) */}
        <CriativosSquadBento />
        {/* 09. Comando 24/7 no Bolso (WhatsApp & Multi-Canal) */}
        <WhatsAppApprovalSimulator />
        {/* 10. Setup em 60s + Banner Zero Custo Obrigatório (OpenCode 10 Grátis) */}
        <HowToInstall60sSection />
        {/* 11. Calculadora de ROI + Tabela Oficial (R$ 997..R$ 1.997) + Garantia 7 Dias */}
        <RoiCalculatorSection />
        <OfficialOfferSection />
        <GuaranteeSection />
        {/* 12. FAQ High-Ticket (VPS, Agência, CUA, OpenCode) */}
        <FaqSection />
      </main>
      <Footer />
      <TravellingMascotGuide />
    </div>
  );
};
