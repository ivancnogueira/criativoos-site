import React from "react";
import { SUPPORT_WHATSAPP_URL } from "../../config/campaignLinks";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050608] py-12">
      <div className="flex w-full flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 md:px-10 xl:px-16">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <img
            src="/logo-criativoos-dark.svg"
            alt="CriativoOS"
            className="h-6 w-auto"
          />
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CriativoOS. Todos os direitos
            reservados.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
          <a href="#motor-computador" className="hover:text-[#B9FC01]">
            Operador de PC
          </a>
          <a href="#infra-vps" className="hover:text-[#B9FC01]">
            PC + Nuvem 24h
          </a>
          <a href="#para-quem-e" className="hover:text-[#B9FC01]">
            Agências &amp; Empresas
          </a>
          <a href="#equipe" className="hover:text-[#B9FC01]">
            Os 15 Criativos
          </a>
          <a href="#planos" className="hover:text-[#B9FC01]">
            Planos Oficiais
          </a>
          <a
            href={SUPPORT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B9FC01]"
          >
            Atendimento WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};
