import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CRIATIVOS_15_ROSTER, type MascotShape } from "../../data/criativosRoster";
import { LiveCriativoMascot } from "./LiveCriativoMascot";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HERO_MASCOT_SIZES: readonly number[] = [
  78, 52, 32, 46, 74, 36, 54,
  34, 76, 56, 48, 82, 32, 54, 36,
];

const HERO_MASCOT_OPACITIES: readonly number[] = [
  1, 0.95, 0.75, 0.9, 1, 0.8, 0.95,
  0.75, 1, 0.95, 0.9, 1, 0.75, 0.95, 0.8,
];

const LEADER_3A = 0;
const LEADER_3B = 1;
const LEADER_3C = 6;

/**
 * Ordem da fila alternando os lados Esquerdo (C-R-I-A-T) e Direito (S-O-O-V)
 * dos mascotes mais próximos ao funil central até os das extremidades,
 * garantindo escoamento em fila e queda escalonada de no máximo 3 por vez.
 */
const QUEUE_ORDER: readonly number[] = [
  6, 10, 4, 11, 2, 7, 5, 9, 1, 13, 0, 8, 3, 12, 14,
];

const QUEUE_RANK: readonly number[] = CRIATIVOS_15_ROSTER.map((_, idx) => {
  const pos = QUEUE_ORDER.indexOf(idx);
  return pos >= 0 ? pos : idx;
});

interface MascotPose {
  x: number;
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
  shadowScale: number;
  shadowOpacity: number;
}

interface ChoreographyMeasurements {
  heroTop: number;
  heroHeight: number;
  heroBottom: number;
  heroCenterX: number;
  cardsTopY: number;
  leftCardLeft: number;
  leftCardRight: number;
  rightCardLeft: number;
  rightCardRight: number;
  anchor3aX: number;
  anchor3aY: number;
  anchor3bX: number;
  anchor3bY: number;
  anchor3cX: number;
  anchor3cY: number;
  dobra3dTop: number;
  slots: Array<{ x: number; y: number; size: number }>;
  milestones: {
    start: number;
    dobra2Land: number;
    dobra2HoldEnd: number;
    nonLeadersFadeEnd: number;
    arrive3a: number;
    stay3a: number;
    arrive3b: number;
    stay3b: number;
    arrive3c: number;
    stay3c: number;
    exit3d: number;
  };
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function smoothstep(t: number): number {
  const c = clamp(t, 0, 1);
  return c * c * (3 - 2 * c);
}

/**
 * Interpolação Catmull-Rom sobre pontos 2D garantindo curva sinuosa contínua.
 */
function catmullRomPoint(
  pts: ReadonlyArray<{ x: number; y: number }>,
  uRaw: number
): { x: number; y: number } {
  const n = pts.length - 1;
  if (n <= 0) return pts[0] ?? { x: 0, y: 0 };
  const u = clamp(uRaw, 0, 1) * n;
  const i = Math.min(n - 1, Math.floor(u));
  const t = u - i;

  const p0 = pts[Math.max(0, i - 1)];
  const p1 = pts[i];
  const p2 = pts[Math.min(n, i + 1)];
  const p3 = pts[Math.min(n, i + 2)];

  const t2 = t * t;
  const t3 = t2 * t;

  const x =
    0.5 *
    (2 * p1.x +
      (-p0.x + p2.x) * t +
      (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
      (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3);
  const y =
    0.5 *
    (2 * p1.y +
      (-p0.y + p2.y) * t +
      (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
      (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3);

  return { x, y };
}

/**
 * Orquestração GSAP no espaço do documento conduzindo os 15 mascotes da Hero
 * pelo corredor central (com escala até 1.55x e sombra expandida) até a Dobra 2,
 * deixando 3 líderes escorregarem para as âncoras de 3A, 3B e 3C.
 */
export const HeroScrollChoreography: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cloneRefs = useRef<Array<HTMLDivElement | null>>([]);
  const shadowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const measurementsRef = useRef<ChoreographyMeasurements | null>(null);

  useEffect(() => {
    const overlayEl = overlayRef.current;
    const stageEl = stageRef.current;
    if (!overlayEl || !stageEl) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const heroEl = document.getElementById("hero");
        const dobra2El = document.getElementById("diferenciais");
        const leftCardEl = document.querySelector<HTMLElement>(
          '[data-dobra2-card="left"]'
        );
        const rightCardEl = document.querySelector<HTMLElement>(
          '[data-dobra2-card="right"]'
        );
        const anchor3aEl = document.querySelector<HTMLElement>(
          '[data-mascot-anchor="motor-3a"]'
        );
        const anchor3bEl = document.querySelector<HTMLElement>(
          '[data-mascot-anchor="motor-3b"]'
        );
        const anchor3cEl = document.querySelector<HTMLElement>(
          '[data-mascot-anchor="motor-3c"]'
        );
        const dobra3dEl = document.getElementById("integracoes-apps");
        const orbitLayerEl = document.querySelector<HTMLElement>(
          "[data-hero-orbit-layer]"
        );

        if (
          !heroEl ||
          !dobra2El ||
          !leftCardEl ||
          !rightCardEl ||
          !anchor3aEl ||
          !anchor3bEl ||
          !anchor3cEl ||
          !dobra3dEl
        ) {
          return;
        }

        const measureAll = (): ChoreographyMeasurements | null => {
          const overlayRect = overlayEl.getBoundingClientRect();
          const overlayDocLeft = overlayRect.left + window.scrollX;
          const overlayDocTop = overlayRect.top + window.scrollY;

          const toDoc = (el: Element) => {
            const r = el.getBoundingClientRect();
            return {
              left: r.left + window.scrollX - overlayDocLeft,
              right: r.right + window.scrollX - overlayDocLeft,
              top: r.top + window.scrollY - overlayDocTop,
              bottom: r.bottom + window.scrollY - overlayDocTop,
              width: r.width,
              height: r.height,
            };
          };

          const heroBox = toDoc(heroEl);
          const leftCardBox = toDoc(leftCardEl);
          const rightCardBox = toDoc(rightCardEl);
          const dobra3dBox = toDoc(dobra3dEl);

          const anchorBoxCenter = (anchorEl: HTMLElement) => {
            const targetBox = anchorEl.firstElementChild ?? anchorEl;
            const r = toDoc(targetBox);
            return {
              x: r.left + r.width / 2,
              y: r.top + r.height / 2,
            };
          };

          const a3a = anchorBoxCenter(anchor3aEl);
          const a3b = anchorBoxCenter(anchor3bEl);
          const a3c = anchorBoxCenter(anchor3cEl);

          // Compensa offset momentâneo do parallax de mouse e flutuação na Hero
          const orbitOffsetX = orbitLayerEl
            ? Number(gsap.getProperty(orbitLayerEl, "x")) || 0
            : 0;
          const orbitOffsetY = orbitLayerEl
            ? Number(gsap.getProperty(orbitLayerEl, "y")) || 0
            : 0;

          const slots: Array<{ x: number; y: number; size: number }> = [];
          for (let i = 0; i < CRIATIVOS_15_ROSTER.length; i++) {
            const slotContainer = document.querySelector<HTMLElement>(
              `[data-hero-slot="${i}"]`
            );
            const fallbackSize = HERO_MASCOT_SIZES[i] ?? 52;
            if (!slotContainer) {
              slots.push({
                x: heroBox.left + heroBox.width / 2,
                y: heroBox.top + 220,
                size: fallbackSize,
              });
              continue;
            }
            const floaterY = Number(gsap.getProperty(slotContainer, "y")) || 0;
            const svgEl = slotContainer.querySelector("svg") ?? slotContainer;
            const svgRect = svgEl.getBoundingClientRect();
            const docCenterX =
              svgRect.left +
              window.scrollX -
              overlayDocLeft +
              svgRect.width / 2 -
              orbitOffsetX;
            const docCenterY =
              svgRect.top +
              window.scrollY -
              overlayDocTop +
              svgRect.height / 2 -
              orbitOffsetY -
              floaterY;

            slots.push({
              x: docCenterX,
              y: docCenterY,
              size: Number(slotContainer.dataset.heroSize) || fallbackSize,
            });
          }

          const vh = window.innerHeight || 900;
          const cardsTopY = Math.min(leftCardBox.top, rightCardBox.top);

          const start = 18;
          const dobra2Land = Math.max(start + 320, cardsTopY - vh * 0.68);
          const arrive3a = Math.max(dobra2Land + 260, a3a.y - vh * 0.86);
          const dobra2HoldEnd = Math.max(
            dobra2Land + 90,
            Math.min(arrive3a - 180, a3a.y - vh * 0.98)
          );
          const nonLeadersFadeEnd =
            dobra2HoldEnd + (arrive3a - dobra2HoldEnd) * 0.72;
          const stay3a = Math.max(arrive3a + 90, a3a.y - vh * 0.28);
          const arrive3b = Math.max(stay3a + 100, a3b.y - vh * 0.86);
          const stay3b = Math.max(arrive3b + 90, a3b.y - vh * 0.28);
          const arrive3c = Math.max(stay3b + 100, a3c.y - vh * 0.86);
          const stay3c = Math.max(arrive3c + 90, a3c.y - vh * 0.28);
          const exit3d = Math.max(stay3c + 80, dobra3dBox.top - vh * 0.38);

          return {
            heroTop: heroBox.top,
            heroHeight: heroBox.height,
            heroBottom: heroBox.bottom,
            heroCenterX: heroBox.left + heroBox.width / 2,
            cardsTopY,
            leftCardLeft: leftCardBox.left,
            leftCardRight: leftCardBox.right,
            rightCardLeft: rightCardBox.left,
            rightCardRight: rightCardBox.right,
            anchor3aX: a3a.x,
            anchor3aY: a3a.y,
            anchor3bX: a3b.x,
            anchor3bY: a3b.y,
            anchor3cX: a3c.x,
            anchor3cY: a3c.y,
            dobra3dTop: dobra3dBox.top,
            slots,
            milestones: {
              start,
              dobra2Land,
              dobra2HoldEnd,
              nonLeadersFadeEnd,
              arrive3a,
              stay3a,
              arrive3b,
              stay3b,
              arrive3c,
              stay3c,
              exit3d,
            },
          };
        };

        const computePose = (
          idx: number,
          scrollY: number,
          m: ChoreographyMeasurements
        ): MascotPose => {
          const slot = m.slots[idx] ?? {
            x: m.heroCenterX,
            y: 180,
            size: 52,
          };
          const baseOpacity = HERO_MASCOT_OPACITIES[idx] ?? 1;
          const isLeft = idx <= 6;
          const laneIdx = isLeft ? idx : idx - 7;

          // Pouso distribuído em largura total sobre os 2 cards da Dobra 2
          const onLeftCard = idx < 6;
          const landX = onLeftCard
            ? lerp(m.leftCardLeft + 44, m.leftCardRight - 44, idx / 5)
            : lerp(
                m.rightCardLeft + 44,
                m.rightCardRight - 44,
                (idx - 6) / 8
              );
          const landY = m.cardsTopY - 26;
          const landScale = clamp(50 / slot.size, 0.75, 1.35);

          const ms = m.milestones;

          if (scrollY <= ms.start) {
            return {
              x: slot.x,
              y: slot.y,
              scale: 1,
              rotation: 0,
              opacity: baseOpacity,
              shadowScale: 0.65,
              shadowOpacity: 0.18,
            };
          }

          // Ato 1: Fila sinuosa pelos dois lados -> perspectiva no funil -> queda 1 a 3 por vez atrás dos cards da Hero
          if (scrollY <= ms.dobra2Land) {
            const u = clamp(
              (scrollY - ms.start) / (ms.dobra2Land - ms.start),
              0,
              1
            );

            const rank = QUEUE_RANK[idx] ?? idx;
            const rankNorm = rank / 14;
            const entryDelay = rankNorm * 0.20;
            const tFunnel = lerp(0.06, 0.83, rankNorm);
            const dropSpan = 0.15;
            const tLand = tFunnel + dropSpan;

            // Escala de perspectiva ampliada no funil proporcional ao plano na Hero
            const perspectivePeak = clamp(92 / slot.size, 1.48, 2.25);

            // Posição do funil central sobre o eixo da operadora (acompanha suavemente o scroll sem sair da viewport)
            const funnelX = m.heroCenterX + ((rank % 3) - 1) * 14;
            const funnelY = m.heroTop + lerp(m.heroHeight * 0.34, m.heroHeight * 0.56, rankNorm);

            // Ponto de entrada nas ondas sobre "CRIATIVOOS" rumo ao funil
            const distFactor = clamp(
              Math.abs(slot.x - funnelX) / Math.max(240, m.heroCenterX * 0.65),
              0.25,
              1
            );
            const waveDir = rank % 2 === 0 ? -1 : 1;
            const w0 = { x: slot.x, y: slot.y };
            const w1a = {
              x: lerp(slot.x, funnelX, 0.42),
              y: clamp(
                lerp(slot.y, funnelY, 0.4) + waveDir * 52 * distFactor,
                m.heroTop + 72,
                m.heroTop + m.heroHeight * 0.58
              ),
            };
            const w1b = {
              x: lerp(slot.x, funnelX, 0.78),
              y: clamp(
                lerp(slot.y, funnelY, 0.82) - waveDir * 30 * distFactor,
                m.heroTop + 96,
                m.heroTop + m.heroHeight * 0.6
              ),
            };
            const wFunnel = { x: funnelX, y: funnelY };

            // Curva pós-funil atravessando atrás do Card Headline / Telemetria / Dock (z-[35] < z-40) até a Dobra 2
            const midBiasX =
              onLeftCard
                ? lerp(m.leftCardRight - 28, landX, 0.52)
                : idx >= 9
                  ? lerp(m.rightCardLeft + 36, landX, 0.45)
                  : lerp(funnelX - 32, landX, 0.36);
            const wBehindHeroCards = {
              x: midBiasX,
              y: m.heroBottom - 165 - (rank % 3) * 22,
            };
            const wSpreadAboveDobra2 = {
              x: lerp(midBiasX, landX, 0.84),
              y: landY - 58 - (laneIdx % 3) * 10,
            };
            const wLand = { x: landX, y: landY };

            if (u <= entryDelay) {
              return {
                x: slot.x,
                y: slot.y,
                scale: 1,
                rotation: 0,
                opacity: baseOpacity,
                shadowScale: 0.65,
                shadowOpacity: 0.18,
              };
            }

            if (u <= tFunnel) {
              const p = smoothstep(
                (u - entryDelay) / Math.max(0.01, tFunnel - entryDelay)
              );
              const pt = catmullRomPoint([w0, w1a, w1b, wFunnel], p);
              const perspEase = Math.pow(p, 1.35);

              return {
                x: pt.x,
                y: pt.y,
                scale: lerp(1, perspectivePeak, perspEase),
                rotation: Math.sin(p * Math.PI * 2) * (isLeft ? 8 : -8),
                opacity: lerp(baseOpacity, 1, smoothstep(p * 1.45)),
                shadowScale: lerp(0.65, 2.05, perspEase),
                shadowOpacity: lerp(0.18, 0.88, p),
              };
            }

            if (u <= tLand) {
              const d = smoothstep(
                (u - tFunnel) / Math.max(0.01, dropSpan)
              );
              const pt = catmullRomPoint(
                [wFunnel, wBehindHeroCards, wSpreadAboveDobra2, wLand],
                d
              );
              const shrinkEase = Math.pow(d, 0.72);

              return {
                x: pt.x,
                y: pt.y,
                scale: lerp(perspectivePeak, landScale, shrinkEase),
                rotation: Math.sin(d * Math.PI) * (onLeftCard ? -10 : 10),
                opacity: 1,
                shadowScale: lerp(2.05, 0.9, d),
                shadowOpacity: lerp(0.88, 0.34, d),
              };
            }

            return {
              x: landX,
              y: landY,
              scale: landScale,
              rotation: 0,
              opacity: 1,
              shadowScale: 0.9,
              shadowOpacity: 0.34,
            };
          }

          if (scrollY <= ms.dobra2HoldEnd) {
            return {
              x: landX,
              y: landY,
              scale: landScale,
              rotation: 0,
              opacity: 1,
              shadowScale: 0.9,
              shadowOpacity: 0.34,
            };
          }

          // Os 12 não-líderes descansam e atenuam suavemente sobre a Dobra 2 antes de 3A
          const isLeader =
            idx === LEADER_3A || idx === LEADER_3B || idx === LEADER_3C;
          if (!isLeader) {
            const fadeT = smoothstep(
              (scrollY - ms.dobra2HoldEnd) /
                Math.max(1, ms.nonLeadersFadeEnd - ms.dobra2HoldEnd)
            );
            return {
              x: landX,
              y: lerp(landY, landY + 14, fadeT),
              scale: lerp(landScale, landScale * 0.72, fadeT),
              rotation: 0,
              opacity: 1 - fadeT,
              shadowScale: lerp(0.9, 0.4, fadeT),
              shadowOpacity: lerp(0.34, 0, fadeT),
            };
          }

          // Ato 2: 3 mascotes líderes conduzem 3A -> 3B -> 3C na coluna esquerda
          const anchorScale = clamp(46 / slot.size, 0.6, 1.15);
          const escortScale = clamp(36 / slot.size, 0.5, 0.95);

          if (idx === LEADER_3A) {
            if (scrollY <= ms.arrive3a) {
              const t = smoothstep(
                (scrollY - ms.dobra2HoldEnd) /
                  Math.max(1, ms.arrive3a - ms.dobra2HoldEnd)
              );
              const midPt = {
                x: lerp(landX, m.anchor3aX, 0.45) - 36,
                y: lerp(landY, m.anchor3aY, 0.48),
              };
              const pt = catmullRomPoint(
                [
                  { x: landX, y: landY },
                  midPt,
                  { x: m.anchor3aX, y: m.anchor3aY },
                ],
                t
              );
              return {
                x: pt.x,
                y: pt.y,
                scale: lerp(landScale, anchorScale, t),
                rotation: Math.sin(t * Math.PI) * -6,
                opacity: 1,
                shadowScale: 0.95,
                shadowOpacity: 0.4,
              };
            }

            if (scrollY <= ms.stay3a) {
              return {
                x: m.anchor3aX,
                y: m.anchor3aY,
                scale: anchorScale,
                rotation: 0,
                opacity: 1,
                shadowScale: 0.95,
                shadowOpacity: 0.4,
              };
            }

            const outT = smoothstep(
              (scrollY - ms.stay3a) / Math.max(1, ms.arrive3b - ms.stay3a)
            );
            return {
              x: lerp(m.anchor3aX, m.anchor3aX - 18, outT),
              y: lerp(m.anchor3aY, m.anchor3aY + 26, outT),
              scale: lerp(anchorScale, anchorScale * 0.72, outT),
              rotation: -6 * outT,
              opacity: 1 - outT,
              shadowScale: lerp(0.95, 0.4, outT),
              shadowOpacity: lerp(0.4, 0, outT),
            };
          }

          if (idx === LEADER_3B) {
            const escort3aX = m.anchor3aX + 12;
            const escort3aY = m.anchor3aY + 76;

            if (scrollY <= ms.arrive3a) {
              const t = smoothstep(
                (scrollY - ms.dobra2HoldEnd) /
                  Math.max(1, ms.arrive3a - ms.dobra2HoldEnd)
              );
              return {
                x: lerp(landX, escort3aX, t),
                y: lerp(landY, escort3aY, t),
                scale: lerp(landScale, escortScale, t),
                rotation: Math.sin(t * Math.PI) * 5,
                opacity: lerp(1, 0.9, t),
                shadowScale: 0.8,
                shadowOpacity: 0.3,
              };
            }

            if (scrollY <= ms.stay3a) {
              return {
                x: escort3aX,
                y: escort3aY,
                scale: escortScale,
                rotation: 0,
                opacity: 0.9,
                shadowScale: 0.8,
                shadowOpacity: 0.3,
              };
            }

            if (scrollY <= ms.arrive3b) {
              const t = smoothstep(
                (scrollY - ms.stay3a) / Math.max(1, ms.arrive3b - ms.stay3a)
              );
              const pt = catmullRomPoint(
                [
                  { x: escort3aX, y: escort3aY },
                  {
                    x: lerp(escort3aX, m.anchor3bX, 0.5) - 28,
                    y: lerp(escort3aY, m.anchor3bY, 0.5),
                  },
                  { x: m.anchor3bX, y: m.anchor3bY },
                ],
                t
              );
              return {
                x: pt.x,
                y: pt.y,
                scale: lerp(escortScale, anchorScale, t),
                rotation: Math.sin(t * Math.PI) * -5,
                opacity: lerp(0.9, 1, t),
                shadowScale: 0.95,
                shadowOpacity: 0.4,
              };
            }

            if (scrollY <= ms.stay3b) {
              return {
                x: m.anchor3bX,
                y: m.anchor3bY,
                scale: anchorScale,
                rotation: 0,
                opacity: 1,
                shadowScale: 0.95,
                shadowOpacity: 0.4,
              };
            }

            const outT = smoothstep(
              (scrollY - ms.stay3b) / Math.max(1, ms.arrive3c - ms.stay3b)
            );
            return {
              x: lerp(m.anchor3bX, m.anchor3bX - 18, outT),
              y: lerp(m.anchor3bY, m.anchor3bY + 26, outT),
              scale: lerp(anchorScale, anchorScale * 0.72, outT),
              rotation: -6 * outT,
              opacity: 1 - outT,
              shadowScale: lerp(0.95, 0.4, outT),
              shadowOpacity: lerp(0.4, 0, outT),
            };
          }

          // LEADER_3C
          const escort3aX = m.anchor3aX + 34;
          const escort3aY = m.anchor3aY + 112;
          const escort3bX = m.anchor3bX + 20;
          const escort3bY = m.anchor3bY + 78;

          if (scrollY <= ms.arrive3a) {
            const t = smoothstep(
              (scrollY - ms.dobra2HoldEnd) /
                Math.max(1, ms.arrive3a - ms.dobra2HoldEnd)
            );
            return {
              x: lerp(landX, escort3aX, t),
              y: lerp(landY, escort3aY, t),
              scale: lerp(landScale, escortScale, t),
              rotation: Math.sin(t * Math.PI) * -4,
              opacity: lerp(1, 0.85, t),
              shadowScale: 0.78,
              shadowOpacity: 0.28,
            };
          }

          if (scrollY <= ms.stay3a) {
            return {
              x: escort3aX,
              y: escort3aY,
              scale: escortScale,
              rotation: 0,
              opacity: 0.85,
              shadowScale: 0.78,
              shadowOpacity: 0.28,
            };
          }

          if (scrollY <= ms.arrive3b) {
            const t = smoothstep(
              (scrollY - ms.stay3a) / Math.max(1, ms.arrive3b - ms.stay3a)
            );
            return {
              x: lerp(escort3aX, escort3bX, t),
              y: lerp(escort3aY, escort3bY, t),
              scale: escortScale,
              rotation: Math.sin(t * Math.PI) * 5,
              opacity: lerp(0.85, 0.92, t),
              shadowScale: 0.82,
              shadowOpacity: 0.32,
            };
          }

          if (scrollY <= ms.stay3b) {
            return {
              x: escort3bX,
              y: escort3bY,
              scale: escortScale,
              rotation: 0,
              opacity: 0.92,
              shadowScale: 0.82,
              shadowOpacity: 0.32,
            };
          }

          if (scrollY <= ms.arrive3c) {
            const t = smoothstep(
              (scrollY - ms.stay3b) / Math.max(1, ms.arrive3c - ms.stay3b)
            );
            const pt = catmullRomPoint(
              [
                { x: escort3bX, y: escort3bY },
                {
                  x: lerp(escort3bX, m.anchor3cX, 0.5) - 28,
                  y: lerp(escort3bY, m.anchor3cY, 0.5),
                },
                { x: m.anchor3cX, y: m.anchor3cY },
              ],
              t
            );
            return {
              x: pt.x,
              y: pt.y,
              scale: lerp(escortScale, anchorScale, t),
              rotation: Math.sin(t * Math.PI) * -5,
              opacity: lerp(0.92, 1, t),
              shadowScale: 0.95,
              shadowOpacity: 0.4,
            };
          }

          if (scrollY <= ms.stay3c) {
            return {
              x: m.anchor3cX,
              y: m.anchor3cY,
              scale: anchorScale,
              rotation: 0,
              opacity: 1,
              shadowScale: 0.95,
              shadowOpacity: 0.4,
            };
          }

          const exitT = smoothstep(
            (scrollY - ms.stay3c) / Math.max(1, ms.exit3d - ms.stay3c)
          );
          return {
            x: lerp(m.anchor3cX, m.anchor3cX - 24, exitT),
            y: lerp(m.anchor3cY, m.anchor3cY + 34, exitT),
            scale: lerp(anchorScale, anchorScale * 0.72, exitT),
            rotation: -7 * exitT,
            opacity: 1 - exitT,
            shadowScale: lerp(0.95, 0.3, exitT),
            shadowOpacity: lerp(0.4, 0, exitT),
          };
        };

        let lastActive: boolean | null = null;
        const lastOpacities = new Float32Array(CRIATIVOS_15_ROSTER.length).fill(-1);
        const lastShadowOpacities = new Float32Array(CRIATIVOS_15_ROSTER.length).fill(-1);

        if (orbitLayerEl) {
          orbitLayerEl.style.transition = "opacity 120ms ease-out";
        }
        stageEl.style.transition = "opacity 120ms ease-out";

        const syncVisibility = (scrollY: number, m: ChoreographyMeasurements) => {
          const heroOrbitVisible = scrollY <= m.milestones.start;
          const stageVisible = !heroOrbitVisible && scrollY < m.milestones.exit3d + 120;

          if (lastActive !== stageVisible) {
            lastActive = stageVisible;
            stageEl.style.opacity = stageVisible ? "1" : "0";
          }
          if (orbitLayerEl) {
            const targetOrbitOp = heroOrbitVisible ? "1" : "0";
            if (orbitLayerEl.style.opacity !== targetOrbitOp) {
              orbitLayerEl.style.opacity = targetOrbitOp;
            }
          }
          return stageVisible || scrollY <= m.milestones.start;
        };

        const applyPoses = (currentScrollY: number) => {
          const m = measurementsRef.current;
          if (!m) return;

          const shouldUpdateTransforms = syncVisibility(currentScrollY, m);
          if (!shouldUpdateTransforms && lastActive === false) {
            return;
          }

          for (let i = 0; i < CRIATIVOS_15_ROSTER.length; i++) {
            const cloneEl = cloneRefs.current[i];
            if (!cloneEl) continue;

            const pose = computePose(i, currentScrollY, m);
            const size = HERO_MASCOT_SIZES[i] ?? 52;
            const half = size * 0.5;
            const tx = (pose.x - half).toFixed(2);
            const ty = (pose.y - half).toFixed(2);

            cloneEl.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${pose.scale.toFixed(4)}) rotate(${pose.rotation.toFixed(2)}deg)`;

            const op = Math.round(pose.opacity * 1000) / 1000;
            if (lastOpacities[i] !== op) {
              lastOpacities[i] = op;
              cloneEl.style.opacity = String(op);
            }

            const shadowEl = shadowRefs.current[i];
            if (shadowEl) {
              const sop = Math.round(pose.shadowOpacity * 1000) / 1000;
              if (sop <= 0.005) {
                if (lastShadowOpacities[i] !== 0) {
                  lastShadowOpacities[i] = 0;
                  shadowEl.style.opacity = "0";
                }
              } else {
                shadowEl.style.transform = `translate3d(0, 0, 0) scale(${pose.shadowScale.toFixed(3)})`;
                if (lastShadowOpacities[i] !== sop) {
                  lastShadowOpacities[i] = sop;
                  shadowEl.style.opacity = String(sop);
                }
              }
            }
          }
        };

        const ctx = gsap.context(() => {
          measurementsRef.current = measureAll();

          let targetY = window.scrollY;
          let smoothedY = window.scrollY;
          let settled = true;

          applyPoses(smoothedY);

          const st = ScrollTrigger.create({
            trigger: heroEl,
            start: () => measurementsRef.current?.milestones.start ?? 18,
            end: () => measurementsRef.current?.milestones.exit3d ?? 3500,
            refreshPriority: 10,
            invalidateOnRefresh: true,
            onRefreshInit: () => {
              measurementsRef.current = measureAll();
            },
            onRefresh: () => {
              targetY = window.scrollY;
              smoothedY = targetY;
              settled = true;
              applyPoses(smoothedY);
            },
          });

          const onScroll = () => {
            targetY = window.scrollY;
            settled = false;
          };

          const onTick = (_time: number, deltaTime: number) => {
            if (settled) return;
            const diff = targetY - smoothedY;
            if (Math.abs(diff) <= 0.12 || Math.abs(diff) > 1600) {
              smoothedY = targetY;
              settled = true;
              applyPoses(smoothedY);
              return;
            }
            const dt = Math.min(Math.max(deltaTime, 4) / 1000, 0.05);
            const factor = 1 - Math.exp(-16 * dt);
            smoothedY += diff * factor;
            applyPoses(smoothedY);
          };

          window.addEventListener("scroll", onScroll, { passive: true });
          gsap.ticker.add(onTick);

          return () => {
            window.removeEventListener("scroll", onScroll);
            gsap.ticker.remove(onTick);
            st.kill();
          };
        }, overlayRef);

        // Recalcula e sincroniza ScrollTrigger após carregar fontes
        let cancelled = false;
        const doRefresh = () => {
          if (!cancelled) {
            ScrollTrigger.refresh();
          }
        };

        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(doRefresh);
        }
        const fallbackTimer = window.setTimeout(doRefresh, 320);

        return () => {
          cancelled = true;
          window.clearTimeout(fallbackTimer);
          if (orbitLayerEl) {
            orbitLayerEl.style.opacity = "1";
          }
          ctx.revert();
        };
      }
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[35] hidden overflow-hidden lg:block"
      style={{ contain: "layout style" }}
    >
      <div
        ref={stageRef}
        className="pointer-events-none absolute inset-0"
        style={{ opacity: 0 }}
      >
        {CRIATIVOS_15_ROSTER.map((spec, idx) => {
          const size = HERO_MASCOT_SIZES[idx] ?? 52;
          return (
            <div
              key={spec.id}
              ref={(el) => {
                cloneRefs.current[idx] = el;
              }}
              className="pointer-events-none absolute top-0 left-0 will-change-transform"
              style={{
                width: size,
                height: size,
                transformOrigin: "center center",
              }}
            >
              <div
                ref={(el) => {
                  shadowRefs.current[idx] = el;
                }}
                className="pointer-events-none absolute -inset-4 rounded-full will-change-transform"
                style={{
                  background: `radial-gradient(circle, rgba(0,0,0,0.82) 0%, ${spec.color}40 44%, transparent 72%)`,
                }}
              />
              <div
                className="mascot-float-gpu relative flex h-full w-full items-center justify-center"
                style={{
                  animationDelay: `${((idx % 6) * -0.31).toFixed(2)}s`,
                  animationDuration: `${(1.85 + (idx % 4) * 0.2).toFixed(2)}s`,
                }}
              >
                <LiveCriativoMascot
                  shape={spec.shape as MascotShape}
                  color={spec.color}
                  size={size}
                  trackCursor={false}
                  working={false}
                  animated={false}
                  lightweight
                  label={spec.nome}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
