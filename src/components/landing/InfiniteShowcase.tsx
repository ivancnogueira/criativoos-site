import React from "react";
import { Image as ImageIcon } from "lucide-react";

const ROW_1_IMAGES = Array.from({ length: 9 }, (_, i) => ({
  id: `slide-${i}`,
  src: `/images/carrossel-slideshow/Camada ${i}.webp`,
  alt: `Exemplo de criativo gerado pelo CriativoOS ${i + 1}`,
}));

const ROW_2_IMAGES = Array.from({ length: 9 }, (_, i) => ({
  id: `viral-${i}`,
  src: `/images/carrossel-viral/0${i + 1}.jpeg`,
  alt: `Exemplo de carrossel gerado pelo CriativoOS ${i + 1}`,
}));

const DOUBLED_ROW_1 = [...ROW_1_IMAGES, ...ROW_1_IMAGES];
const DOUBLED_ROW_2 = [...ROW_2_IMAGES, ...ROW_2_IMAGES];

export const InfiniteShowcase: React.FC = () => {
  return (
    <section
      id="showcase-infinito"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#07090D] py-20"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#B9FC01]/35 bg-[#B9FC01]/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#B9FC01]">
          <ImageIcon className="h-3.5 w-3.5" />
          <span>Saídas Reais Produzidas no OS</span>
        </div>

        <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-5xl">
          Do Sistema Autônomo{" "}
          <span className="text-gradient-volt">Direto Para a Sua Tela</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
          Enquanto o CriativoOS opera programas no PC, pesquisa concorrentes no
          navegador e conecta 253+ aplicativos, seus 15 Criativos entregam artes
          prontas com seu rosto, tipografia e identidade visual:
        </p>
      </div>

      {/* Fileira 1: Esquerda -> Direita */}
      <div className="mt-12 overflow-hidden">
        <div className="marquee-track-left">
          {DOUBLED_ROW_1.map((img, idx) => (
            <div
              key={`r1-${idx}`}
              className="group relative h-[330px] w-[264px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#121622] shadow-2xl transition duration-300 hover:scale-[1.03] hover:border-[#B9FC01]/60"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fileira 2: Direita -> Esquerda */}
      <div className="mt-5 overflow-hidden">
        <div className="marquee-track-right">
          {DOUBLED_ROW_2.map((img, idx) => (
            <div
              key={`r2-${idx}`}
              className="group relative h-[330px] w-[264px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#121622] shadow-2xl transition duration-300 hover:scale-[1.03] hover:border-[#B9FC01]/60"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
