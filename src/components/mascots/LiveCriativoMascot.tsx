import React, { useEffect, useId, useRef, useState } from "react";
import { CLASSIC_SHAPE_PATHS, type MascotShape } from "../../data/criativosRoster";

type ClassicEyeFace = "resting" | "wink" | "curieux" | "excite" | "wide" | "squint";

const HOVER_FACES: readonly ClassicEyeFace[] = [
  "wink",
  "curieux",
  "excite",
  "wide",
  "squint",
];

const WORKING_LOOK_TARGETS: ReadonlyArray<{ x: number; y: number }> = [
  { x: -5.0, y: -1.2 },
  { x: 5.0, y: -1.2 },
  { x: -4.2, y: 2.6 },
  { x: 4.2, y: 2.6 },
  { x: 0, y: -2.4 },
  { x: -2.8, y: 0.4 },
  { x: 2.8, y: 0.4 },
  { x: 0, y: 0 },
];

const WORKING_EXPRESSIONS: readonly ClassicEyeFace[] = [
  "resting",
  "squint",
  "curieux",
  "wide",
  "excite",
  "wink",
];

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

export interface LiveCriativoMascotProps {
  shape: MascotShape;
  color: string;
  size?: number;
  label?: string;
  trackCursor?: boolean;
  working?: boolean;
  animated?: boolean;
  lightweight?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Mascote vivo SVG do CriativoOS com acabamento 3D radial, modo autônomo de
 * trabalho (olhinhos olhando para os lados, alternando expressões e piscando)
 * além de rastreio de cursor no hover/movimento.
 */
export const LiveCriativoMascot: React.FC<LiveCriativoMascotProps> = ({
  shape,
  color,
  size = 64,
  label = "Criativo Especialista",
  trackCursor = true,
  working = false,
  animated = true,
  lightweight = false,
  className = "",
  onClick,
}) => {
  const uid = useId().replace(/:/g, "");
  const svgRef = useRef<SVGSVGElement | null>(null);
  const lastMouseTimeRef = useRef<number>(0);

  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [autoOffset, setAutoOffset] = useState({ x: 0, y: 0 });
  const [autoFace, setAutoFace] = useState<ClassicEyeFace>("resting");
  const [isHovered, setIsHovered] = useState(false);
  const [hoverFace, setHoverFace] = useState<ClassicEyeFace>("resting");
  const [blinking, setBlinking] = useState(false);
  const [mouseActive, setMouseActive] = useState(false);

  // Rastreio suave das pupilas quando o mouse se movimenta na página
  useEffect(() => {
    if (lightweight || !trackCursor || typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;

    let rafId = 0;
    let idleTimer: number | undefined;

    const handleMove = (ev: PointerEvent) => {
      lastMouseTimeRef.current = performance.now();
      setMouseActive(true);
      if (idleTimer) window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        setMouseActive(false);
      }, 1700);

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const el = svgRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        setMouseOffset({
          x: clamp((ev.clientX - cx) / 145, -1, 1) * 4.6,
          y: clamp((ev.clientY - cy) / 145, -1, 1) * 3.1,
        });
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (rafId) cancelAnimationFrame(rafId);
      if (idleTimer) window.clearTimeout(idleTimer);
    };
  }, [trackCursor]);

  // Movimento autônomo no modo "trabalhando": olha para os lados, cima, baixo e troca expressões
  useEffect(() => {
    if (lightweight || !working || typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;

    let lookTimer: number | undefined;
    let cancelled = false;

    const scheduleLook = () => {
      const delay = 850 + Math.random() * 1750;
      lookTimer = window.setTimeout(() => {
        if (cancelled) return;
        const nextTarget =
          WORKING_LOOK_TARGETS[
            Math.floor(Math.random() * WORKING_LOOK_TARGETS.length)
          ] ?? { x: 0, y: 0 };
        setAutoOffset(nextTarget);

        if (Math.random() < 0.62) {
          const nextFace =
            WORKING_EXPRESSIONS[
              Math.floor(Math.random() * WORKING_EXPRESSIONS.length)
            ] ?? "squint";
          setAutoFace(nextFace);
        }
        scheduleLook();
      }, delay);
    };

    // Inicia defasado entre cada mascote para parecer uma equipe independente
    const startDelay = window.setTimeout(scheduleLook, Math.random() * 900);

    return () => {
      cancelled = true;
      window.clearTimeout(startDelay);
      if (lookTimer) window.clearTimeout(lookTimer);
    };
  }, [working]);

  // Piscada orgânica assíncrona (com eventual piscada dupla rápida)
  useEffect(() => {
    if (lightweight || typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;

    let cycleTimer: number | undefined;
    let openTimer: number | undefined;
    let secondTimer: number | undefined;
    let secondOpenTimer: number | undefined;
    let cancelled = false;

    const scheduleBlink = () => {
      cycleTimer = window.setTimeout(() => {
        if (cancelled) return;
        setBlinking(true);
        openTimer = window.setTimeout(() => {
          if (cancelled) return;
          setBlinking(false);
          // 28% de chance de piscada dupla fofa
          if (Math.random() < 0.28) {
            secondTimer = window.setTimeout(() => {
              if (cancelled) return;
              setBlinking(true);
              secondOpenTimer = window.setTimeout(() => {
                if (!cancelled) setBlinking(false);
                scheduleBlink();
              }, 115);
            }, 130);
          } else {
            scheduleBlink();
          }
        }, 125);
      }, 1700 + Math.random() * 2400);
    };

    scheduleBlink();
    return () => {
      cancelled = true;
      if (cycleTimer) window.clearTimeout(cycleTimer);
      if (openTimer) window.clearTimeout(openTimer);
      if (secondTimer) window.clearTimeout(secondTimer);
      if (secondOpenTimer) window.clearTimeout(secondOpenTimer);
    };
  }, []);

  const handleEnter = () => {
    const next = HOVER_FACES[Math.floor(Math.random() * HOVER_FACES.length)] ?? "excite";
    setHoverFace(next);
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
    setHoverFace("resting");
  };

  const activeFace: ClassicEyeFace = isHovered
    ? hoverFace
    : working
      ? autoFace
      : "resting";

  const activeEyeOffset = mouseActive ? mouseOffset : working ? autoOffset : mouseOffset;

  const pathData = CLASSIC_SHAPE_PATHS[shape] ?? CLASSIC_SHAPE_PATHS.blob;
  const scaleLeftY = blinking
    ? 0.12
    : activeFace === "wide"
      ? 1.18
      : activeFace === "squint"
        ? 0.62
        : 1;
  const scaleRightY = blinking
    ? 0.12
    : activeFace === "curieux"
      ? 0.72
      : activeFace === "wide"
        ? 1.18
        : activeFace === "squint"
          ? 0.62
          : 1;

  const animClass = lightweight
    ? ""
    : working
      ? "mascote-working"
      : animated
        ? "mascote-idle"
        : "";

  const hoverScaleClass = lightweight ? "" : "transition-transform duration-300 hover:scale-110";

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={label}
      onPointerEnter={lightweight ? undefined : handleEnter}
      onPointerLeave={lightweight ? undefined : handleLeave}
      onClick={onClick}
      className={`${animClass} ${hoverScaleClass} select-none ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <defs>
        <radialGradient id={`plush-${uid}`} cx="35%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.48" />
          <stop offset="46%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#050505" stopOpacity="0.44" />
        </radialGradient>
      </defs>

      <g>
        <path d={pathData} fill={color} />
        <path d={pathData} fill={`url(#plush-${uid})`} />
        <path
          d={pathData}
          fill="none"
          stroke={working || lightweight ? "rgba(185,252,1,0.72)" : "rgba(255,255,255,0.24)"}
          strokeWidth={working || lightweight ? "2.1" : "1.6"}
        />
      </g>

      <g
        style={{
          transform: `translate(${activeEyeOffset.x.toFixed(2)}px, ${activeEyeOffset.y.toFixed(2)}px)`,
          transition: "transform 220ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {activeFace === "excite" && !blinking ? (
          <>
            <path
              d="M 35 52 Q 40.5 43.5 46 52"
              fill="none"
              stroke="#FFF8E7"
              strokeWidth="4.2"
              strokeLinecap="round"
            />
            <path
              d="M 54 52 Q 59.5 43.5 65 52"
              fill="none"
              stroke="#FFF8E7"
              strokeWidth="4.2"
              strokeLinecap="round"
            />
          </>
        ) : (
          <>
            <g
              style={{
                transform: `scale(1, ${scaleLeftY})`,
                transformOrigin: "40.5px 50px",
                transition: "transform 130ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <ellipse cx="40.5" cy="50" rx="5.2" ry="8.4" fill="#FFF8E7" />
              <ellipse cx="41.4" cy="49.2" rx="1.6" ry="3.2" fill="#E6D5B8" opacity="0.55" />
              <circle cx="38.8" cy="46.2" r="1.45" fill="#FFFFFF" opacity="0.92" />
            </g>

            {activeFace === "wink" && !blinking ? (
              <path
                d="M 54.5 51 Q 59.5 46 64.5 51"
                fill="none"
                stroke="#FFF8E7"
                strokeWidth="3.8"
                strokeLinecap="round"
              />
            ) : (
              <g
                style={{
                  transform: `scale(1, ${scaleRightY})`,
                  transformOrigin: "59.5px 50px",
                  transition: "transform 130ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <ellipse cx="59.5" cy="50" rx="5.2" ry="8.4" fill="#FFF8E7" />
                <ellipse cx="60.4" cy="49.2" rx="1.6" ry="3.2" fill="#E6D5B8" opacity="0.55" />
                <circle cx="57.8" cy="46.2" r="1.45" fill="#FFFFFF" opacity="0.92" />
              </g>
            )}
          </>
        )}
      </g>
    </svg>
  );
};
