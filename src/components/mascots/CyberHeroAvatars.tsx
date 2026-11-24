import React, { useEffect, useState } from "react";

function useCursorOffset(maxX = 10, maxY = 7) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      setOffset({ x: nx * maxX, y: ny * maxY });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [maxX, maxY]);

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
      }, 2500 + Math.random() * 2200);
    };
    loop();
    return () => {
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, []);

  return { offset, blink };
}

/**
 * 1. AVATAR CYBER FRONTIER (Inspirado em Neon Frontier & Metaverse - Imagem 1)
 * Operador Cyberpunk 3D com orelhas/antenas neon #B9FC01, capacete/visor AR tático
 * com grade HUD interna, olhos expressivos oO que seguem o mouse e armadura de carbono.
 */
export const CyberFrontierOperator3D: React.FC<{
  variant?: "bunny" | "tactical" | "mecha";
  className?: string;
}> = ({ variant = "bunny", className = "" }) => {
  const { offset, blink } = useCursorOffset(11, 7);
  const eyeScaleY = blink ? 0.12 : 1;

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center select-none ${className}`}
    >
      <svg
        viewBox="0 0 520 560"
        className="h-full w-full overflow-visible drop-shadow-[0_28px_60px_rgba(0,0,0,0.95)]"
      >
        <defs>
          {/* Luz volumétrica verde/volt de fundo */}
          <radialGradient id="cf-aura" cx="50%" cy="44%" r="52%">
            <stop offset="0%" stopColor="#B9FC01" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#10b981" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#050608" stopOpacity="0" />
          </radialGradient>

          {/* Chassi carbono 3D */}
          <linearGradient id="cf-armor" x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#272c3a" />
            <stop offset="35%" stopColor="#12151f" />
            <stop offset="75%" stopColor="#090b10" />
            <stop offset="100%" stopColor="#040507" />
          </linearGradient>

          {/* Rim light metálica */}
          <linearGradient id="cf-rim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B9FC01" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#B9FC01" stopOpacity="0.8" />
          </linearGradient>

          {/* Visor de vidro curvo */}
          <linearGradient id="cf-visor" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0e1712" />
            <stop offset="45%" stopColor="#050807" />
            <stop offset="100%" stopColor="#09130c" />
          </linearGradient>

          <filter id="cf-neon-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Aura energética de fundo */}
        <circle cx="260" cy="255" r="240" fill="url(#cf-aura)" />

        {/* ORELHAS NEON CYBER BUNNY / ANTENAS TÁTICAS (Estilo Metaverse Imagem 1) */}
        {variant === "bunny" && (
          <g filter="url(#cf-neon-glow)">
            {/* Orelha esquerda neon */}
            <path
              d="M 205 140 C 175 45, 195 14, 220 22 C 240 28, 244 82, 236 135"
              fill="rgba(185,252,1,0.07)"
              stroke="#B9FC01"
              strokeWidth="5.5"
              strokeLinecap="round"
            />
            <path
              d="M 213 128 C 194 62, 204 36, 219 42 C 229 46, 231 85, 226 125"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.55"
              strokeWidth="1.8"
            />
            {/* Orelha direita neon */}
            <path
              d="M 315 140 C 345 45, 325 14, 300 22 C 280 28, 276 82, 284 135"
              fill="rgba(185,252,1,0.07)"
              stroke="#B9FC01"
              strokeWidth="5.5"
              strokeLinecap="round"
            />
            <path
              d="M 307 128 C 326 62, 316 36, 301 42 C 291 46, 289 85, 294 125"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.55"
              strokeWidth="1.8"
            />
          </g>
        )}

        {variant === "tactical" && (
          <g filter="url(#cf-neon-glow)">
            <line x1="150" y1="210" x2="108" y2="95" stroke="#B9FC01" strokeWidth="4" strokeLinecap="round" />
            <circle cx="106" cy="90" r="6" fill="#B9FC01" />
            <line x1="370" y1="210" x2="412" y2="95" stroke="#B9FC01" strokeWidth="4" strokeLinecap="round" />
            <circle cx="414" cy="90" r="6" fill="#B9FC01" />
          </g>
        )}

        {variant === "mecha" && (
          <g filter="url(#cf-neon-glow)">
            <polygon points="260,18 228,125 292,125" fill="#111722" stroke="#B9FC01" strokeWidth="3.5" />
            <polygon points="175,65 190,150 225,130" fill="#111722" stroke="#B9FC01" strokeWidth="2.5" />
            <polygon points="345,65 330,150 295,130" fill="#111722" stroke="#B9FC01" strokeWidth="2.5" />
          </g>
        )}

        {/* TORSO & ARMADURA CYBERPUNK (Ombros, Peitoral e Cabos Biomecânicos) */}
        <g>
          {/* Sombra base */}
          <path
            d="M 85 545 C 95 415, 165 375, 260 375 C 355 375, 425 415, 435 545 Z"
            fill="url(#cf-armor)"
            stroke="url(#cf-rim)"
            strokeWidth="2.2"
          />

          {/* Placas de ombro segmentadas */}
          <path
            d="M 96 510 C 108 425, 156 392, 206 386 L 222 475 L 140 535 Z"
            fill="#0e121a"
            stroke="rgba(185,252,1,0.4)"
            strokeWidth="1.6"
          />
          <path
            d="M 424 510 C 412 425, 364 392, 314 386 L 298 475 L 380 535 Z"
            fill="#0e121a"
            stroke="rgba(185,252,1,0.4)"
            strokeWidth="1.6"
          />

          {/* Pescoço biomecânico com fibras ópticas #B9FC01 */}
          <path
            d="M 216 315 L 204 395 L 316 395 L 304 315 Z"
            fill="#090c12"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1.5"
          />
          <path
            d="M 232 320 C 230 355, 224 378, 218 405"
            fill="none"
            stroke="#B9FC01"
            strokeWidth="2.5"
            filter="url(#cf-neon-glow)"
          />
          <path
            d="M 288 320 C 290 355, 296 378, 302 405"
            fill="none"
            stroke="#B9FC01"
            strokeWidth="2.5"
            filter="url(#cf-neon-glow)"
          />
          <path
            d="M 260 325 L 260 420"
            fill="none"
            stroke="#B9FC01"
            strokeWidth="2"
            strokeDasharray="6 4"
          />

          {/* Núcleo Peitoral Central (Reator CriativoOS) */}
          <polygon
            points="260,418 295,442 282,492 238,492 225,442"
            fill="#070a0e"
            stroke="#B9FC01"
            strokeWidth="2.4"
            filter="url(#cf-neon-glow)"
          />
          <circle cx="260" cy="456" r="14" fill="#B9FC01" filter="url(#cf-neon-glow)" />
          <circle cx="260" cy="456" r="6" fill="#ffffff" />

          {/* Circuitos luminosos no peito */}
          <path
            d="M 155 445 L 205 445 L 225 460 M 365 445 L 315 445 L 295 460"
            fill="none"
            stroke="#B9FC01"
            strokeWidth="2.2"
            strokeOpacity="0.8"
          />
        </g>

        {/* CABEÇA / CAPACETE CYBERPUNK 3D */}
        <g>
          {/* Casco do capacete */}
          <path
            d="M 158 225 C 158 142, 200 105, 260 105 C 320 105, 362 142, 362 225 C 362 292, 322 338, 260 338 C 198 338, 158 292, 158 225 Z"
            fill="url(#cf-armor)"
            stroke="url(#cf-rim)"
            strokeWidth="2.8"
          />

          {/* Brilho especular superior do capacete */}
          <path
            d="M 185 155 C 205 122, 245 116, 295 122"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Módulos auriculares laterais (Headset Cyber) */}
          <rect
            x="136"
            y="196"
            width="24"
            height="68"
            rx="10"
            fill="#111622"
            stroke="#B9FC01"
            strokeWidth="2.2"
          />
          <rect
            x="360"
            y="196"
            width="24"
            height="68"
            rx="10"
            fill="#111622"
            stroke="#B9FC01"
            strokeWidth="2.2"
          />

          {/* MEGA VISOR AR CURVO (Estilo Metaverse / Neon Frontier Imagem 1) */}
          <path
            d="M 148 212 C 148 178, 195 166, 260 166 C 325 166, 372 178, 372 212 C 372 252, 336 274, 260 274 C 184 274, 148 252, 148 212 Z"
            fill="url(#cf-visor)"
            stroke="#B9FC01"
            strokeWidth="3.2"
            filter="url(#cf-neon-glow)"
          />

          {/* Grade HUD holográfica dentro do visor */}
          <path
            d="M 164 205 L 356 205 M 160 228 L 360 228 M 172 250 L 348 250 M 220 172 L 220 268 M 260 170 L 260 272 M 300 172 L 300 268"
            stroke="#B9FC01"
            strokeOpacity="0.16"
            strokeWidth="1"
          />

          {/* OLHOS ASSINATURA oO CRIATIVOOS QUE SEGUEM O MOUSE DENTRO DO VISOR */}
          <g
            style={{
              transform: `translate(${offset.x.toFixed(1)}px, ${offset.y.toFixed(1)}px)`,
              transition: "transform 90ms linear",
            }}
            filter="url(#cf-neon-glow)"
          >
            {/* Olho esquerdo 'o' */}
            <g
              style={{
                transformOrigin: "222px 224px",
                transform: `scaleY(${eyeScaleY})`,
                transition: "transform 90ms ease",
              }}
            >
              <ellipse cx="222" cy="224" rx="18" ry="20" fill="#B9FC01" />
              <ellipse cx="222" cy="224" rx="9" ry="10" fill="#050807" />
              <circle cx="227" cy="218" r="4.5" fill="#ffffff" />
            </g>

            {/* Olho direito 'O' (ligeiramente maior como no símbolo oO oficial) */}
            <g
              style={{
                transformOrigin: "298px 220px",
                transform: `scaleY(${eyeScaleY})`,
                transition: "transform 90ms ease",
              }}
            >
              <ellipse cx="298" cy="220" rx="23" ry="25" fill="#B9FC01" />
              <ellipse cx="298" cy="220" rx="11" ry="12" fill="#050807" />
              <circle cx="304" cy="213" r="5.5" fill="#ffffff" />
            </g>
          </g>

          {/* Reflexo de vidro no visor */}
          <path
            d="M 168 184 C 210 173, 275 173, 332 183"
            fill="none"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Máscara respiratória cyber inferior */}
          <path
            d="M 218 292 L 260 282 L 302 292 L 290 326 L 230 326 Z"
            fill="#141923"
            stroke="rgba(185,252,1,0.5)"
            strokeWidth="1.6"
          />
        </g>
      </svg>
    </div>
  );
};

/**
 * 2. AVATAR REACTOR CORE (Inspirado diretamente no Robô 3D da Aivance & Nexora - Imagens 3 e 4)
 * Robô 3D carismático e futurista flutuando no ar sobre um Pedestal Holográfico Circular
 * com anéis de energia Volt #B9FC01, braços flutuantes, visor com olhos expressivos e núcleo no peito.
 */
export const CyberReactorBot3D: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const { offset, blink } = useCursorOffset(9, 6);
  const eyeScaleY = blink ? 0.14 : 1;

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center select-none ${className}`}
    >
      <svg
        viewBox="0 0 500 540"
        className="h-full w-full overflow-visible"
      >
        <defs>
          <radialGradient id="rb-body" cx="35%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#3b4254" />
            <stop offset="40%" stopColor="#1c202b" />
            <stop offset="85%" stopColor="#0b0d13" />
            <stop offset="100%" stopColor="#050609" />
          </radialGradient>

          <radialGradient id="rb-pedestal-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B9FC01" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#B9FC01" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#B9FC01" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="rb-beam" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#B9FC01" stopOpacity="0.32" />
            <stop offset="65%" stopColor="#B9FC01" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#B9FC01" stopOpacity="0" />
          </linearGradient>

          <filter id="rb-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ============================================================
            PEDESTAL HOLOGRÁFICO 3D NA BASE (Estilo Aivance & Nexora)
           ============================================================ */}
        <g transform="translate(0, 15)">
          {/* Feixe de luz vertical subindo do pedestal para o robô */}
          <polygon
            points="145,455 355,455 395,210 105,210"
            fill="url(#rb-beam)"
          />

          {/* Base metálica externa do pedestal */}
          <ellipse
            cx="250"
            cy="468"
            rx="158"
            ry="36"
            fill="#0b0e15"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="2"
          />
          <ellipse
            cx="250"
            cy="462"
            rx="136"
            ry="28"
            fill="#121621"
            stroke="#B9FC01"
            strokeOpacity="0.55"
            strokeWidth="2"
          />

          {/* Anel de plasma #B9FC01 no centro do pedestal */}
          <ellipse
            cx="250"
            cy="458"
            rx="96"
            ry="19"
            fill="url(#rb-pedestal-glow)"
            stroke="#B9FC01"
            strokeWidth="3.5"
            filter="url(#rb-glow)"
          />
          <ellipse
            cx="250"
            cy="458"
            rx="52"
            ry="10"
            fill="#B9FC01"
            filter="url(#rb-glow)"
          />
        </g>

        {/* ============================================================
            ROBÔ 3D FLUTUANDO ACIMA DO PEDESTAL
           ============================================================ */}
        <g className="mascote-idle">
          {/* Braço Esquerdo 3D Flutuante */}
          <g transform="rotate(18 118 295)">
            <rect
              x="82"
              y="265"
              width="46"
              height="74"
              rx="23"
              fill="url(#rb-body)"
              stroke="#B9FC01"
              strokeOpacity="0.55"
              strokeWidth="2"
            />
            <circle cx="105" cy="282" r="6" fill="#B9FC01" filter="url(#rb-glow)" />
          </g>

          {/* Braço Direito 3D Flutuante */}
          <g transform="rotate(-18 382 295)">
            <rect
              x="372"
              y="265"
              width="46"
              height="74"
              rx="23"
              fill="url(#rb-body)"
              stroke="#B9FC01"
              strokeOpacity="0.55"
              strokeWidth="2"
            />
            <circle cx="395" cy="282" r="6" fill="#B9FC01" filter="url(#rb-glow)" />
          </g>

          {/* Torso Arredondado 3D do Robô */}
          <path
            d="M 168 265 C 155 265, 146 310, 162 355 C 176 392, 208 408, 250 408 C 292 408, 324 392, 338 355 C 354 310, 345 265, 332 265 Z"
            fill="url(#rb-body)"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="2.2"
          />

          {/* Emblema Luminoso CriativoOS (oO) no Peito do Robô */}
          <circle
            cx="250"
            cy="332"
            r="34"
            fill="#070a0f"
            stroke="#B9FC01"
            strokeWidth="2.8"
            filter="url(#rb-glow)"
          />
          <circle cx="240" cy="334" r="7.5" fill="none" stroke="#B9FC01" strokeWidth="3.5" />
          <circle cx="259" cy="331" r="10.5" fill="none" stroke="#B9FC01" strokeWidth="3.5" />

          {/* Antenas Laterais Superiores com Pontas Neon */}
          <line
            x1="168"
            y1="110"
            x2="152"
            y2="66"
            stroke="#94a3b8"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <circle cx="150" cy="62" r="7" fill="#B9FC01" filter="url(#rb-glow)" />

          <line
            x1="332"
            y1="110"
            x2="348"
            y2="66"
            stroke="#94a3b8"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <circle cx="350" cy="62" r="7" fill="#B9FC01" filter="url(#rb-glow)" />

          {/* Módulos de Ouvido (Headphones 3D) */}
          <rect
            x="114"
            y="148"
            width="28"
            height="66"
            rx="14"
            fill="url(#rb-body)"
            stroke="#B9FC01"
            strokeWidth="2.4"
          />
          <rect
            x="358"
            y="148"
            width="28"
            height="66"
            rx="14"
            fill="url(#rb-body)"
            stroke="#B9FC01"
            strokeWidth="2.4"
          />

          {/* CABEÇA 3D DO ROBÔ */}
          <rect
            x="132"
            y="84"
            width="236"
            height="186"
            rx="84"
            fill="url(#rb-body)"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="2.6"
          />

          {/* Brilho especular de estúdio no topo da cabeça */}
          <path
            d="M 178 106 C 215 92, 285 92, 322 106"
            fill="none"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* TELA / VISOR PRETO BRILHANTE DO ROSTO */}
          <rect
            x="154"
            y="114"
            width="192"
            height="128"
            rx="56"
            fill="#05070b"
            stroke="#B9FC01"
            strokeOpacity="0.7"
            strokeWidth="2.5"
          />

          {/* OLHOS EXPRESSIVOS NEON QUE ACOMPANHAM O MOUSE */}
          <g
            style={{
              transform: `translate(${offset.x.toFixed(1)}px, ${offset.y.toFixed(1)}px)`,
              transition: "transform 90ms linear",
            }}
            filter="url(#rb-glow)"
          >
            {/* Olho esquerdo */}
            <g
              style={{
                transformOrigin: "212px 176px",
                transform: `scaleY(${eyeScaleY})`,
                transition: "transform 90ms ease",
              }}
            >
              <path
                d="M 190 182 C 194 156, 228 156, 232 182"
                fill="none"
                stroke="#B9FC01"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </g>

            {/* Olho direito */}
            <g
              style={{
                transformOrigin: "288px 176px",
                transform: `scaleY(${eyeScaleY})`,
                transition: "transform 90ms ease",
              }}
            >
              <path
                d="M 268 182 C 272 156, 306 156, 310 182"
                fill="none"
                stroke="#B9FC01"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </g>

            {/* Sorriso LED sutil */}
            <path
              d="M 236 204 Q 250 214 264 204"
              fill="none"
              stroke="#B9FC01"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

/**
 * 3. AVATAR TACTICAL MONOLITH (Inspirado em NJEY Future & Redline - Imagens 5 e 6)
 * Busto robótico aerodinâmico em perfil 3/4 com acabamento carbono espelhado,
 * fendas ópticas #B9FC01 Volt e reflexos #0031CC Royal Cobalt.
 */
export const CyberMonolithUnit3D: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const { offset } = useCursorOffset(7, 5);

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center select-none ${className}`}
    >
      <svg viewBox="0 0 500 540" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="cm-shell" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2e3546" />
            <stop offset="30%" stopColor="#121620" />
            <stop offset="70%" stopColor="#07090e" />
            <stop offset="100%" stopColor="#030406" />
          </linearGradient>

          <linearGradient id="cm-visor-glass" x1="0%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#1b2436" />
            <stop offset="40%" stopColor="#06080d" />
            <stop offset="100%" stopColor="#040508" />
          </linearGradient>

          <filter id="cm-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Torso / Ombro Blindado em 3/4 */}
        <path
          d="M 110 530 C 120 410, 185 355, 275 355 C 375 355, 430 415, 445 530 Z"
          fill="url(#cm-shell)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2.2"
        />

        {/* Ombreira com contorno neon Volt #B9FC01 (igual ao ombro iluminado de NJEY Future) */}
        <path
          d="M 255 395 C 325 385, 388 425, 402 515 C 350 525, 285 520, 245 485 Z"
          fill="#0b0e15"
          stroke="#B9FC01"
          strokeWidth="3"
          filter="url(#cm-glow)"
        />

        {/* Pistões biomecânicos do pescoço */}
        <path
          d="M 215 285 L 195 385 L 325 385 L 308 275 Z"
          fill="#080a10"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1.6"
        />
        <line
          x1="238"
          y1="295"
          x2="222"
          y2="380"
          stroke="#B9FC01"
          strokeWidth="3"
          filter="url(#cm-glow)"
        />
        <line
          x1="278"
          y1="290"
          x2="290"
          y2="380"
          stroke="#0031CC"
          strokeWidth="3.5"
        />

        {/* CAPACETE AERODINÂMICO 3/4 (Olhando para a esquerda como em NJEY Future) */}
        <g
          style={{
            transform: `translate(${offset.x.toFixed(1)}px, ${offset.y.toFixed(1)}px)`,
            transition: "transform 110ms linear",
          }}
        >
          {/* Crânio do capacete */}
          <path
            d="M 142 195 C 145 102, 222 64, 305 78 C 378 90, 412 155, 392 232 C 375 292, 315 318, 245 316 C 175 314, 140 262, 142 195 Z"
            fill="url(#cm-shell)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2.5"
          />

          {/* Visor Frontal Escuro em Perfil 3/4 */}
          <path
            d="M 140 185 C 142 132, 185 112, 248 122 L 265 268 C 192 282, 138 245, 140 185 Z"
            fill="url(#cm-visor-glass)"
            stroke="#B9FC01"
            strokeWidth="2.4"
          />

          {/* Fendas Ópticas HUD #B9FC01 dentro do visor 3/4 */}
          <g filter="url(#cm-glow)">
            <line
              x1="154"
              y1="176"
              x2="232"
              y2="168"
              stroke="#B9FC01"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <line
              x1="158"
              y1="194"
              x2="215"
              y2="188"
              stroke="#B9FC01"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="166"
              y1="210"
              x2="202"
              y2="206"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* Módulo Auditivo Circular com Anel Neon */}
          <circle
            cx="296"
            cy="202"
            r="36"
            fill="#0b0e15"
            stroke="#B9FC01"
            strokeWidth="2.8"
            filter="url(#cm-glow)"
          />
          <circle cx="296" cy="202" r="16" fill="#131824" stroke="#ffffff" strokeOpacity="0.4" />

          {/* Brilho especular de borda superior */}
          <path
            d="M 185 96 C 245 74, 325 82, 368 124"
            fill="none"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
