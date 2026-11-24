import React, { useCallback, useRef } from "react";

interface SpecularButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  variant?: "volt" | "glass";
  size?: "md" | "lg";
  className?: string;
}

/**
 * Botão com reflexo especular 3D reativo à posição do mouse no estilo Apple / React Bits.
 */
export const SpecularButton: React.FC<SpecularButtonProps> = ({
  children,
  href,
  onClick,
  target,
  rel,
  variant = "volt",
  size = "lg",
  className = "",
}) => {
  const ref = useRef<HTMLElement | null>(null);

  const handleMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--sb-x", `${x}px`);
    el.style.setProperty("--sb-y", `${y}px`);
  }, []);

  const sizeClass =
    size === "lg"
      ? "px-8 py-4 text-base sm:text-lg"
      : "px-6 py-3 text-sm sm:text-base";

  const variantClass =
    variant === "volt"
      ? "specular-btn-volt text-[#0D0D0D] font-extrabold"
      : "specular-btn-glass text-white font-bold";

  const combined = `specular-btn relative inline-flex items-center justify-center gap-2.5 rounded-2xl transition-all duration-200 select-none ${sizeClass} ${variantClass} ${className}`;

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onPointerMove={handleMove}
        className={combined}
      >
        <span className="specular-btn-rim" />
        <span className="relative z-10 inline-flex items-center gap-2.5">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      onPointerMove={handleMove}
      className={combined}
    >
      <span className="specular-btn-rim" />
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {children}
      </span>
    </button>
  );
};
