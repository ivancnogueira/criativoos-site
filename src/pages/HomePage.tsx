import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroScrollChoreography } from "../components/mascots/HeroScrollChoreography";
import { HeroSection } from "../components/landing/HeroSection";
import { OldVsNewOSComparison } from "../components/landing/OldVsNewOSComparison";
import { MotorDesktopSection } from "../components/landing/MotorDesktopSection";
import { MotorBrowserSection } from "../components/landing/MotorBrowserSection";
import { MotorWorkflowsSection } from "../components/landing/MotorWorkflowsSection";
import { IntegrationsMarqueeSection } from "../components/landing/IntegrationsMarqueeSection";
import { VaultSecuritySection } from "../components/landing/VaultSecuritySection";
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

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Página Inicial Oficial do CriativoOS em 18 seções completas mais Footer,
 * com coreografia GSAP integrada no espaço do documento e zero guia flutuante.
 */
export const HomePage: React.FC = () => {
  useEffect(() => {
    let cancelled = false;
    const refreshTriggers = () => {
      if (!cancelled) {
        ScrollTrigger.refresh();
      }
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refreshTriggers);
    }
    const timer = window.setTimeout(refreshTriggers, 350);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050608] text-[#F8FAFC]">
      <div className="relative overflow-x-clip">
        <HeroScrollChoreography />
        <main>
          {/* 01. Hero 1B Aprovada */}
          <HeroSection />
          {/* 02. Quebra de Paradigma (Jeito Antigo vs Com o CriativoOS) */}
          <OldVsNewOSComparison />
          {/* 03A. Operador de Computador com Motion em Código */}
          <MotorDesktopSection />
          {/* 03B. Navegador Inteligente com 3 Abas e Pausa Segura */}
          <MotorBrowserSection />
          {/* 03C. Rotinas Automáticas Montadas ao Vivo no Scroll */}
          <MotorWorkflowsSection />
          {/* 03D. +253 Aplicativos Conectados em 3 Trilhas Infinitas */}
          <IntegrationsMarqueeSection />
          {/* 03E. Cofre Blindado e Controle Total */}
          <VaultSecuritySection />
          {/* 04. Infraestrutura Híbrida 24h: Seu Computador + Servidor na Nuvem */}
          <VpsHybridInfraSection />
          {/* 05. Para Quem É + Modo Agência Multi-Cliente */}
          <AudienceAndAgencySection />
          {/* 06. Saídas Reais com Pin Compacto + Faixa Contínua */}
          <UnifiedStudioOutputsSection />
          {/* 07. Cockpit Por Dentro (Modo Escuro Volt / Modo Claro Cobalt) */}
          <InsideCockpitSimulator />
          {/* 08. Os 15 Especialistas Intercalados (Avatares Cyberpunk + Mascotes oO) */}
          <CriativosSquadBento />
          {/* 09. Comando 24h no Bolso via WhatsApp */}
          <WhatsAppApprovalSimulator />
          {/* 10. Setup em 1 Minuto + 10 IAs Gratuitas Inclusas */}
          <HowToInstall60sSection />
          {/* 11A. Calculadora de Economia Anual */}
          <RoiCalculatorSection />
          {/* 11B. Planos Anuais Oficiais */}
          <OfficialOfferSection />
          {/* 11C. Garantia Blindada de 7 Dias */}
          <GuaranteeSection />
          {/* 12. Perguntas Frequentes */}
          <FaqSection />
        </main>
      </div>
      <Footer />
    </div>
  );
};
