import React, { useCallback, useEffect, useRef } from "react";

interface ElectricBorderProps {
  children: React.ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  borderRadius?: number;
  className?: string;
}

export const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = "#B9FC01",
  speed = 1.05,
  chaos = 0.085,
  borderRadius = 28,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const lastFrameTimeRef = useRef(0);

  const random = useCallback((x: number) => {
    return (Math.sin(x * 12.9898) * 43758.5453) % 1;
  }, []);

  const noise2D = useCallback(
    (x: number, y: number) => {
      const i = Math.floor(x);
      const j = Math.floor(y);
      const fx = x - i;
      const fy = y - j;

      const a = random(i + j * 57);
      const b = random(i + 1 + j * 57);
      const c = random(i + (j + 1) * 57);
      const d = random(i + 1 + (j + 1) * 57);

      const ux = fx * fx * (3.0 - 2.0 * fx);
      const uy = fy * fy * (3.0 - 2.0 * fy);

      return (
        a * (1 - ux) * (1 - uy) +
        b * ux * (1 - uy) +
        c * (1 - ux) * uy +
        d * ux * uy
      );
    },
    [random]
  );

  const octavedNoise = useCallback(
    (
      x: number,
      octaves: number,
      lacunarity: number,
      gain: number,
      baseAmplitude: number,
      baseFrequency: number,
      time: number,
      seed: number
    ) => {
      let y = 0;
      let amplitude = baseAmplitude;
      let frequency = baseFrequency;

      for (let i = 0; i < octaves; i++) {
        const octaveAmp = i === 0 ? 0 : amplitude;
        y +=
          octaveAmp *
          noise2D(frequency * x + seed * 100, time * frequency * 0.3);
        frequency *= lacunarity;
        amplitude *= gain;
      }

      return y;
    },
    [noise2D]
  );

  const getRoundedRectPoint = useCallback(
    (
      t: number,
      left: number,
      top: number,
      width: number,
      height: number,
      radius: number
    ) => {
      const straightW = width - 2 * radius;
      const straightH = height - 2 * radius;
      const cornerArc = (Math.PI * radius) / 2;
      const totalPerimeter = 2 * straightW + 2 * straightH + 4 * cornerArc;
      const distance = t * totalPerimeter;
      let acc = 0;

      const corner = (
        cx: number,
        cy: number,
        r: number,
        startA: number,
        arcL: number,
        p: number
      ) => ({
        x: cx + r * Math.cos(startA + p * arcL),
        y: cy + r * Math.sin(startA + p * arcL),
      });

      if (distance <= acc + straightW) {
        const p = (distance - acc) / straightW;
        return { x: left + radius + p * straightW, y: top };
      }
      acc += straightW;

      if (distance <= acc + cornerArc) {
        const p = (distance - acc) / cornerArc;
        return corner(left + width - radius, top + radius, radius, -Math.PI / 2, Math.PI / 2, p);
      }
      acc += cornerArc;

      if (distance <= acc + straightH) {
        const p = (distance - acc) / straightH;
        return { x: left + width, y: top + radius + p * straightH };
      }
      acc += straightH;

      if (distance <= acc + cornerArc) {
        const p = (distance - acc) / cornerArc;
        return corner(left + width - radius, top + height - radius, radius, 0, Math.PI / 2, p);
      }
      acc += cornerArc;

      if (distance <= acc + straightW) {
        const p = (distance - acc) / straightW;
        return { x: left + width - radius - p * straightW, y: top + height };
      }
      acc += straightW;

      if (distance <= acc + cornerArc) {
        const p = (distance - acc) / cornerArc;
        return corner(left + radius, top + height - radius, radius, Math.PI / 2, Math.PI / 2, p);
      }
      acc += cornerArc;

      if (distance <= acc + straightH) {
        const p = (distance - acc) / straightH;
        return { x: left, y: top + height - radius - p * straightH };
      }
      acc += straightH;

      const p = (distance - acc) / cornerArc;
      return corner(left + radius, top + radius, radius, Math.PI, Math.PI / 2, p);
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const borderOffset = 50;
    const displacement = 45;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const rawWidth = rect.width || 400;
      const rawHeight = rect.height || 600;
      const width = rawWidth + borderOffset * 2;
      const height = rawHeight + borderOffset * 2;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      return { width, height };
    };

    let { width, height } = updateSize();

    const draw = (now: number) => {
      const dt = (now - (lastFrameTimeRef.current || now)) / 1000;
      timeRef.current += dt * speed;
      lastFrameTimeRef.current = now;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr, dpr);

      ctx.strokeStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 12;
      ctx.lineWidth = 1.75;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const bw = width - 2 * borderOffset;
      const bh = height - 2 * borderOffset;
      const r = Math.min(borderRadius, Math.min(bw, bh) / 2);
      const sampleCount = 220;

      ctx.beginPath();
      for (let i = 0; i <= sampleCount; i++) {
        const p = i / sampleCount;
        const pt = getRoundedRectPoint(p, borderOffset, borderOffset, bw, bh, r);
        const xn = octavedNoise(p * 8, 8, 1.6, 0.7, chaos, 10, timeRef.current, 0);
        const yn = octavedNoise(p * 8, 8, 1.6, 0.7, chaos, 10, timeRef.current, 1);
        const dx = pt.x + xn * displacement;
        const dy = pt.y + yn * displacement;
        if (i === 0) ctx.moveTo(dx, dy);
        else ctx.lineTo(dx, dy);
      }
      ctx.closePath();
      ctx.stroke();

      animationRef.current = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => {
      const s = updateSize();
      width = s.width;
      height = s.height;
    });
    ro.observe(container);

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      ro.disconnect();
    };
  }, [color, speed, chaos, borderRadius, octavedNoise, getRoundedRectPoint]);

  return (
    <div
      ref={containerRef}
      className={`electric-border ${className}`}
      style={
        {
          "--electric-border-color": color,
          borderRadius: `${borderRadius}px`,
        } as React.CSSProperties
      }
    >
      <div className="eb-canvas-container">
        <canvas ref={canvasRef} className="eb-canvas" />
      </div>
      <div className="eb-layers">
        <div className="eb-glow-1" />
        <div className="eb-glow-2" />
        <div className="eb-background-glow" />
      </div>
      <div className="eb-content">{children}</div>
    </div>
  );
};
