import React from "react";
import { ArrowRight } from "lucide-react";
import { SpecularButton } from "../fx/SpecularButton";

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.07] bg-[#07080C]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="flex items-center gap-3 focus:outline-none"
          aria-label="CriativoOS Início"
        >
          <img
            src="/logo-criativoos-dark.svg"
            alt="CriativoOS"
            className="h-7 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
          <a href="#showcase-infinito" className="transition hover:text-[#B9FC01]">
            Resultados Reais
          </a>
          <a href="#diferenciais" className="transition hover:text-[#B9FC01]">
            Por Que Funciona
          </a>
          <a href="#formatos" className="transition hover:text-[#B9FC01]">
            Formatos
          </a>
          <a href="#como-funciona" className="transition hover:text-[#B9FC01]">
            Como Funciona
          </a>
          <a href="#equipe" className="transition hover:text-[#B9FC01]">
            Os 15 Criativos
          </a>
          <a href="#planos" className="transition hover:text-[#B9FC01]">
            Planos
          </a>
          <a href="/changelog" className="transition hover:text-[#B9FC01]">
            Changelog
          </a>
        </nav>

        <SpecularButton href="#planos" size="md" variant="volt" className="!py-2.5 !px-5 !text-xs sm:!text-sm">
          <span>Começar Agora</span>
          <ArrowRight className="h-4 w-4" />
        </SpecularButton>
      </div>
    </header>
  );
};
