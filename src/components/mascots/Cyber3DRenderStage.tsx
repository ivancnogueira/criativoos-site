import React, { useEffect, useRef, useState } from "react";

export type Cyber3DAvatarModel = "reactor-bot" | "nexora-synth" | "squad-core";

function use3DMouseTilt() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      setTilt({ x: nx, y: ny });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    let t1: number | undefined;
    let t2: number | undefined;
    const loop = () => {
      t1 = window.setTimeout(() => {
        setBlink(true);
        t2 = window.setTimeout(() => {
          setBlink(false);
          loop();
        }, 130);
      }, 2400 + Math.random() * 2000);
    };
    loop();
    return () => {
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, []);

  return { tilt, blink };
}

/**
 * Canvas 60fps de partículas holográficas e feixe volumétrico subindo do pedestal 3D
 */
const HologramParticlesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    const particles = Array.from({ length: 34 }, () => ({
      x: 110 + Math.random() * 220,
      y: 120 + Math.random() * 320,
      r: 1 + Math.random() * 2.4,
      vy: 0.45 + Math.random() * 1.1,
      alpha: 0.2 + Math.random() * 0.75,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y -= p.vy;
        if (p.y < 70) {
          p.y = 415;
          p.x = 120 + Math.random() * 200;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(185, 252, 1, ${p.alpha})`;
        ctx.shadowColor = "#B9FC01";
        ctx.shadowBlur = 10;
        ctx.fill();
      }
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={440}
      height={480}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
};

export const Cyber3DRenderStage: React.FC<{
  model?: Cyber3DAvatarModel;
  className?: string;
}> = ({ model = "reactor-bot", className = "" }) => {
  const { tilt, blink } = use3DMouseTilt();
  const eyeScaleY = blink ? 0.12 : 1;

  const headX = tilt.x * 14;
  const headY = tilt.y * 9;
  const eyeX = tilt.x * 11;
  const eyeY = tilt.y * 7;
  const bodyX = tilt.x * 6;
  const bodyY = tilt.y * 4;

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ perspective: "1000px" }}
    >
      <HologramParticlesCanvas />

      <svg
        viewBox="0 0 520 560"
        className="relative z-10 h-full w-full overflow-visible drop-shadow-[0_30px_65px_rgba(0,0,0,0.95)]"
      >
        <defs>
          {/* Sombreamento 3D PBR Titânio Escuro / Carbono Polido */}
          <radialGradient id="pbr-titanium" cx="32%" cy="22%" r="72%">
            <stop offset="0%" stopColor="#64708a" />
            <stop offset="18%" stopColor="#353d4f" />
            <stop offset="52%" stopColor="#171b24" />
            <stop offset="84%" stopColor="#090b10" />
            <stop offset="100%" stopColor="#030406" />
          </radialGradient>

          {/* Sombreamento 3D PBR Cerâmica Branca/Prata Esculpida (Estilo Nexora) */}
          <radialGradient id="pbr-ceramic" cx="36%" cy="24%" r="70%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="28%" stopColor="#cbd5e1" />
            <stop offset="62%" stopColor="#475569" />
            <stop offset="88%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#090d16" />
          </radialGradient>

          {/* Sombreamento 3D Vidro Obsidiana Curvo */}
          <radialGradient id="pbr-visor" cx="40%" cy="25%" r="75%">
            <stop offset="0%" stopColor="#1b2620" />
            <stop offset="35%" stopColor="#080d0b" />
            <stop offset="85%" stopColor="#030504" />
            <stop offset="100%" stopColor="#010202" />
          </radialGradient>

          {/* Rim Light Volt #B9FC01 */}
          <linearGradient id="pbr-rim-volt" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B9FC01" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#B9FC01" stopOpacity="0.85" />
          </linearGradient>

          {/* Pedestal Holográfico Plasma */}
          <radialGradient id="pbr-pedestal-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ecfccb" stopOpacity="1" />
            <stop offset="30%" stopColor="#B9FC01" stopOpacity="0.92" />
            <stop offset="68%" stopColor="#65a30d" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#B9FC01" stopOpacity="0" />
          </radialGradient>

          {/* Cone de Luz Volumétrico Subindo do Reator */}
          <linearGradient id="pbr-light-cone" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#B9FC01" stopOpacity="0.38" />
            <stop offset="45%" stopColor="#B9FC01" stopOpacity="0.11" />
            <stop offset="100%" stopColor="#B9FC01" stopOpacity="0" />
          </linearGradient>

          <filter id="pbr-bloom" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="pbr-soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#000000" floodOpacity="0.85" />
          </filter>
        </defs>

        {/* ==================================================================
            PEDESTAL HOLOGRÁFICO 3D MULTI-CAMADAS NA BASE (ESTILO AIVANCE/NEXORA)
           ================================================================== */}
        <g transform="translate(10, 18)">
          {/* Feixe cônico de luz subindo do pedestal */}
          <polygon
            points="145,468 355,468 415,175 85,175"
            fill="url(#pbr-light-cone)"
          />

          {/* Sombra projetada no chão */}
          <ellipse cx="250" cy="495" rx="185" ry="34" fill="rgba(0,0,0,0.85)" />

          {/* Anel externo chanfrado de titânio 3D */}
          <ellipse
            cx="250"
            cy="480"
            rx="168"
            ry="36"
            fill="#07090e"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="2.2"
          />
          <ellipse
            cx="250"
            cy="473"
            rx="148"
            ry="30"
            fill="url(#pbr-titanium)"
            stroke="rgba(185,252,1,0.5)"
            strokeWidth="2"
          />

          {/* Degrau interno metálico do reator */}
          <ellipse
            cx="250"
            cy="467"
            rx="118"
            ry="23"
            fill="#0a0e14"
            stroke="#B9FC01"
            strokeOpacity="0.75"
            strokeWidth="2.4"
          />

          {/* Núcleo de Plasma Incandescente #B9FC01 */}
          <ellipse
            cx="250"
            cy="465"
            rx="88"
            ry="16"
            fill="url(#pbr-pedestal-core)"
            filter="url(#pbr-bloom)"
          />

          {/* Anéis holográficos flutuando acima do pedestal */}
          <ellipse
            cx="250"
            cy="444"
            rx="105"
            ry="18"
            fill="none"
            stroke="#B9FC01"
            strokeOpacity="0.55"
            strokeWidth="1.5"
            strokeDasharray="10 6"
          />
          <ellipse
            cx="250"
            cy="422"
            rx="80"
            ry="13"
            fill="none"
            stroke="#B9FC01"
            strokeOpacity="0.35"
            strokeWidth="1.2"
          />
        </g>

        {/* ==================================================================
            MODELO 1 & 3: ROBÔ COMPANION 3D HIPER-DETALHADO (ESTILO AIVANCE)
           ================================================================== */}
        {(model === "reactor-bot" || model === "squad-core") && (
          <g className="mascote-idle">
            {/* Satélites 3D Orbitando (Quando no modo Squad Core) */}
            {model === "squad-core" && (
              <g>
                {/* Satélite Esquerdo (Copywriter 3D) */}
                <g
                  style={{
                    transform: `translate(${(-headX * 0.7).toFixed(1)}px, ${(headY * 0.7).toFixed(1)}px)`,
                  }}
                >
                  <circle
                    cx="72"
                    cy="170"
                    r="34"
                    fill="url(#pbr-titanium)"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                    filter="url(#pbr-soft-shadow)"
                  />
                  <rect x="52" y="156" width="40" height="26" rx="13" fill="#05080c" stroke="#38bdf8" strokeWidth="1.8" />
                  <circle cx="64" cy="169" r="4.5" fill="#38bdf8" filter="url(#pbr-bloom)" />
                  <circle cx="80" cy="169" r="5.5" fill="#38bdf8" filter="url(#pbr-bloom)" />
                </g>

                {/* Satélite Direito (Diretor de Reels 3D) */}
                <g
                  style={{
                    transform: `translate(${(headX * 0.8).toFixed(1)}px, ${(-headY * 0.7).toFixed(1)}px)`,
                  }}
                >
                  <circle
                    cx="448"
                    cy="165"
                    r="34"
                    fill="url(#pbr-titanium)"
                    stroke="#B9FC01"
                    strokeWidth="2.5"
                    filter="url(#pbr-soft-shadow)"
                  />
                  <rect x="428" y="151" width="40" height="26" rx="13" fill="#05080c" stroke="#B9FC01" strokeWidth="1.8" />
                  <circle cx="440" cy="164" r="4.5" fill="#B9FC01" filter="url(#pbr-bloom)" />
                  <circle cx="456" cy="164" r="5.5" fill="#B9FC01" filter="url(#pbr-bloom)" />
                </g>
              </g>
            )}

            {/* TORSO & BRAÇOS 3D COM PARALLAX */}
            <g
              style={{
                transform: `translate(${bodyX.toFixed(1)}px, ${bodyY.toFixed(1)}px)`,
                transition: "transform 110ms linear",
              }}
              filter="url(#pbr-soft-shadow)"
            >
              {/* Braço Esquerdo 3D */}
              <g transform="rotate(20 116 305)">
                <rect
                  x="78"
                  y="268"
                  width="52"
                  height="86"
                  rx="26"
                  fill="url(#pbr-titanium)"
                  stroke="url(#pbr-rim-volt)"
                  strokeWidth="2.2"
                />
                <path
                  d="M 92 282 C 98 274, 110 274, 116 282"
                  fill="none"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="104" cy="292" r="6" fill="#B9FC01" filter="url(#pbr-bloom)" />
              </g>

              {/* Braço Direito 3D */}
              <g transform="rotate(-20 404 305)">
                <rect
                  x="390"
                  y="268"
                  width="52"
                  height="86"
                  rx="26"
                  fill="url(#pbr-titanium)"
                  stroke="url(#pbr-rim-volt)"
                  strokeWidth="2.2"
                />
                <path
                  d="M 404 282 C 410 274, 422 274, 428 282"
                  fill="none"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="416" cy="292" r="6" fill="#B9FC01" filter="url(#pbr-bloom)" />
              </g>

              {/* Chassi Central do Torso 3D */}
              <path
                d="M 164 268 C 148 268, 138 318, 158 368 C 174 408, 210 424, 260 424 C 310 424, 346 408, 362 368 C 382 318, 372 268, 356 268 Z"
                fill="url(#pbr-titanium)"
                stroke="url(#pbr-rim-volt)"
                strokeWidth="2.5"
              />

              {/* Linhas de blindagem mecânica do torso */}
              <path
                d="M 176 300 C 205 314, 315 314, 344 300"
                fill="none"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="2"
              />

              {/* Reator Peitoral CriativoOS (Símbolo oO em 3D) */}
              <circle
                cx="260"
                cy="346"
                r="38"
                fill="#05070b"
                stroke="#B9FC01"
                strokeWidth="3"
                filter="url(#pbr-bloom)"
              />
              <circle cx="249" cy="348" r="8.5" fill="none" stroke="#B9FC01" strokeWidth="3.8" />
              <circle cx="270" cy="345" r="11.5" fill="none" stroke="#B9FC01" strokeWidth="3.8" />
            </g>

            {/* CABEÇA 3D COM PARALLAX MAIS PROFUNDO */}
            <g
              style={{
                transform: `translate(${headX.toFixed(1)}px, ${headY.toFixed(1)}px)`,
                transition: "transform 95ms linear",
              }}
              filter="url(#pbr-soft-shadow)"
            >
              {/* Antenas Táticas Superiores */}
              <line
                x1="172"
                y1="104"
                x2="152"
                y2="54"
                stroke="#94a3b8"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <circle cx="150" cy="50" r="8" fill="#B9FC01" filter="url(#pbr-bloom)" />

              <line
                x1="348"
                y1="104"
                x2="368"
                y2="54"
                stroke="#94a3b8"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <circle cx="370" cy="50" r="8" fill="#B9FC01" filter="url(#pbr-bloom)" />

              {/* Módulos Auriculares 3D (Headset) */}
              <rect
                x="114"
                y="148"
                width="32"
                height="74"
                rx="16"
                fill="url(#pbr-titanium)"
                stroke="#B9FC01"
                strokeWidth="2.6"
              />
              <rect
                x="374"
                y="148"
                width="32"
                height="74"
                rx="16"
                fill="url(#pbr-titanium)"
                stroke="#B9FC01"
                strokeWidth="2.6"
              />

              {/* Casco Principal da Cabeça 3D */}
              <rect
                x="132"
                y="78"
                width="256"
                height="202"
                rx="92"
                fill="url(#pbr-titanium)"
                stroke="url(#pbr-rim-volt)"
                strokeWidth="2.8"
              />

              {/* Highlight Especular 3D de Estúdio na Testa */}
              <path
                d="M 182 102 C 225 86, 295 86, 338 102"
                fill="none"
                stroke="rgba(255,255,255,0.65)"
                strokeWidth="6"
                strokeLinecap="round"
              />

              {/* VISOR CURVO DE VIDRO OBSIDIANA */}
              <rect
                x="156"
                y="110"
                width="208"
                height="140"
                rx="62"
                fill="url(#pbr-visor)"
                stroke="#B9FC01"
                strokeOpacity="0.85"
                strokeWidth="2.8"
              />

              {/* Grade HUD sutil dentro do visor */}
              <line
                x1="172"
                y1="180"
                x2="348"
                y2="180"
                stroke="#B9FC01"
                strokeOpacity="0.12"
                strokeWidth="1"
              />

              {/* OLHOS LED NEON QUE SEGUEM O MOUSE */}
              <g
                style={{
                  transform: `translate(${eyeX.toFixed(1)}px, ${eyeY.toFixed(1)}px)`,
                  transition: "transform 80ms linear",
                }}
                filter="url(#pbr-bloom)"
              >
                {/* Olho Esquerdo */}
                <g
                  style={{
                    transformOrigin: "218px 176px",
                    transform: `scaleY(${eyeScaleY})`,
                    transition: "transform 80ms ease",
                  }}
                >
                  <path
                    d="M 194 184 C 198 154, 236 154, 240 184"
                    fill="none"
                    stroke="#B9FC01"
                    strokeWidth="9"
                    strokeLinecap="round"
                  />
                </g>

                {/* Olho Direito */}
                <g
                  style={{
                    transformOrigin: "302px 176px",
                    transform: `scaleY(${eyeScaleY})`,
                    transition: "transform 80ms ease",
                  }}
                >
                  <path
                    d="M 280 184 C 284 154, 322 154, 326 184"
                    fill="none"
                    stroke="#B9FC01"
                    strokeWidth="9"
                    strokeLinecap="round"
                  />
                </g>

                {/* Sorriso LED inteligente */}
                <path
                  d="M 244 210 Q 260 222 276 210"
                  fill="none"
                  stroke="#B9FC01"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </g>

              {/* Reflexo de vidro curvo no visor */}
              <path
                d="M 184 126 C 225 114, 295 114, 332 126"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </g>
          </g>
        )}

        {/* ==================================================================
            MODELO 2: CIBORGUE SYNTH 3D NO PEDESTAL (ESTILO NEXORA IMAGEM 3)
           ================================================================== */}
        {model === "nexora-synth" && (
          <g
            style={{
              transform: `translate(${headX.toFixed(1)}px, ${headY.toFixed(1)}px)`,
              transition: "transform 95ms linear",
            }}
            filter="url(#pbr-soft-shadow)"
          >
            {/* Halo circular holográfico atrás da cabeça cibernética (igual Nexora) */}
            <circle
              cx="260"
              cy="225"
              r="165"
              fill="none"
              stroke="#B9FC01"
              strokeOpacity="0.35"
              strokeWidth="2"
            />
            <circle
              cx="260"
              cy="225"
              r="135"
              fill="none"
              stroke="#B9FC01"
              strokeOpacity="0.2"
              strokeWidth="1.5"
              strokeDasharray="8 6"
            />

            {/* Pescoço Biomecânico de Fibra de Carbono e Pistões */}
            <path
              d="M 192 295 L 178 442 L 328 442 L 302 295 Z"
              fill="url(#pbr-titanium)"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="2"
            />
            <path
              d="M 212 305 L 198 438 M 242 310 L 238 440 M 274 310 L 282 438"
              stroke="#B9FC01"
              strokeWidth="3.2"
              filter="url(#pbr-bloom)"
            />

            {/* Parte Traseira do Crânio em Carbono Preto Polido */}
            <path
              d="M 142 205 C 138 110, 205 64, 286 72 C 345 78, 378 125, 376 196 C 374 265, 332 315, 260 315 C 192 315, 146 270, 142 205 Z"
              fill="url(#pbr-titanium)"
              stroke="url(#pbr-rim-volt)"
              strokeWidth="2.5"
            />

            {/* Placa Facial Esculpida em Cerâmica Prata/Titânio 3D (Estilo Nexora) */}
            <path
              d="M 245 74 C 318 76, 374 122, 376 196 C 374 264, 336 312, 274 314 C 254 275, 248 225, 232 182 Z"
              fill="url(#pbr-ceramic)"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="2"
            />

            {/* Visor Óptico Laser Volt #B9FC01 */}
            <path
              d="M 248 164 L 374 160 L 368 196 L 244 192 Z"
              fill="#050807"
              stroke="#B9FC01"
              strokeWidth="2.6"
              filter="url(#pbr-bloom)"
            />
            <line
              x1="264"
              y1="178"
              x2="362"
              y2="176"
              stroke="#B9FC01"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#pbr-bloom)"
            />

            {/* Grande Módulo Auricular Mecânico Circular (Marca Registrada Nexora) */}
            <circle
              cx="216"
              cy="204"
              r="54"
              fill="#080b11"
              stroke="url(#pbr-rim-volt)"
              strokeWidth="3.5"
            />
            <circle
              cx="216"
              cy="204"
              r="38"
              fill="url(#pbr-titanium)"
              stroke="#B9FC01"
              strokeWidth="2.5"
              filter="url(#pbr-bloom)"
            />
            <circle
              cx="216"
              cy="204"
              r="16"
              fill="#B9FC01"
              filter="url(#pbr-bloom)"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
