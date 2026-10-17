"use client";

import React, { useEffect, useState, useRef } from "react";

// Curated subtle GREEN color palettes matching Kushal's signature electric lime and cyber emerald theme
// (Electric Lime #d4ff00, Cyber Emerald #10b981, Neon Green #22c55e, and Mint)
const SMOKE_PALETTES = [
  // 1. Signature Electric Lime
  {
    core: [212, 255, 0],        // #d4ff00 electric lime
    mid: [163, 230, 53],        // #a3e635 lime-400
    outer: [132, 204, 22],       // #84cc16 lime-500
  },
  // 2. Cyber Emerald Mist
  {
    core: [52, 211, 153],       // #34d399 emerald-400
    mid: [16, 185, 129],        // #10b981 emerald-500
    outer: [5, 150, 105],        // #059669 emerald-600
  },
  // 3. Neon Green
  {
    core: [74, 222, 128],       // #4ade80 green-400
    mid: [34, 197, 94],         // #22c55e green-500
    outer: [21, 128, 61],       // #15803d green-700
  },
  // 4. Luminous Cyber Green Highlight
  {
    core: [240, 253, 244],      // #f0fdf4 soft green-white
    mid: [212, 255, 0],         // #d4ff00 lime
    outer: [16, 185, 129],      // #10b981 emerald
  },
];

const HOVER_PALETTE = {
  core: [255, 255, 255],        // Pure white core on interaction
  mid: [212, 255, 0],           // Electric lime
  outer: [34, 197, 94],         // Vibrant green
};

// Light mode curated green watercolor ink palettes
const LIGHT_SMOKE_PALETTES = [
  // 1. Emerald Green Ink
  {
    core: [21, 128, 61],        // #15803d emerald
    mid: [34, 197, 94],         // #22c55e
    outer: [187, 247, 208],     // #bbf7d0
  },
  // 2. Forest Cyber Mist
  {
    core: [22, 101, 52],        // #166534
    mid: [21, 128, 61],         // #15803d
    outer: [134, 239, 172],     // #86efac
  },
  // 3. Crisp Mint Ink
  {
    core: [4, 120, 87],         // #047857
    mid: [16, 185, 129],        // #10b981
    outer: [167, 243, 208],     // #a7f3d0
  },
];

const LIGHT_HOVER_PALETTE = {
  core: [22, 101, 52],          // #166534
  mid: [21, 128, 61],           // #15803d
  outer: [34, 197, 94],         // #22c55e
};

interface Particle {
  active: boolean;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  startSize: number;
  targetSize: number;
  age: number;
  lifeSpan: number; // in milliseconds
  maxAlpha: number;
  rotation: number;
  rotationSpeed: number;
  curlSeed: number;
  curlFreq: number;
  coreColor: number[];
  midColor: number[];
  outerColor: number[];
}

const MAX_PARTICLES = 90;

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  // Position references for smooth interpolation
  const mousePos = useRef({ x: -100, y: -100 });
  const lastMousePos = useRef({ x: -100, y: -100 });
  const lastMoveTime = useRef(0);
  const ringPos = useRef({ x: -100, y: -100 });
  const glowPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);
  const lastFrameTime = useRef<number>(0);

  // Object pool for particles (prevents GC pauses and guarantees smooth 60 FPS)
  const particles = useRef<Particle[]>([]);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    // Only disable if device ONLY has touch and NO pointing hardware
    const isTouchOnly = window.matchMedia(
      "(pointer: coarse) and not (pointer: fine)"
    ).matches;

    if (isTouchOnly) {
      return;
    }

    setMounted(true);

    // Initialize particle pool with green theme defaults
    particles.current = Array.from({ length: MAX_PARTICLES }, () => ({
      active: false,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      size: 0,
      startSize: 0,
      targetSize: 0,
      age: 0,
      lifeSpan: 0,
      maxAlpha: 0,
      rotation: 0,
      rotationSpeed: 0,
      curlSeed: 0,
      curlFreq: 0,
      coreColor: [212, 255, 0],
      midColor: [163, 230, 53],
      outerColor: [132, 204, 22],
    }));

    // Add active cursor class to html
    document.documentElement.classList.add("custom-cursor-active");

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Handle high-DPI canvas sizing
    const updateCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize, { passive: true });

    // Helper to spawn a soft, subtle green smoke puff from the pool
    const spawnParticle = (
      x: number,
      y: number,
      dx: number,
      dy: number,
      speed: number,
      hoverState: boolean
    ) => {
      // Find an inactive particle or replace the oldest
      let p = particles.current.find((item) => !item.active);
      if (!p) {
        let maxAge = -1;
        let oldest = particles.current[0];
        for (let i = 0; i < particles.current.length; i++) {
          if (particles.current[i].age > maxAge) {
            maxAge = particles.current[i].age;
            oldest = particles.current[i];
          }
        }
        p = oldest;
      }

      const isLight = document.documentElement.classList.contains("light");
      const currentPalettes = isLight ? LIGHT_SMOKE_PALETTES : SMOKE_PALETTES;
      const currentHover = isLight ? LIGHT_HOVER_PALETTE : HOVER_PALETTE;

      const palette = hoverState
        ? Math.random() < 0.4
          ? currentHover
          : currentPalettes[Math.floor(Math.random() * currentPalettes.length)]
        : currentPalettes[Math.floor(Math.random() * currentPalettes.length)];

      // Directional spread perpendicular to movement
      const dist = Math.hypot(dx, dy) || 1;
      const nx = -dy / dist;
      const ny = dx / dist;
      const spread = (Math.random() - 0.5) * (8 + Math.min(speed * 6, 16));

      // Gentle velocity inheritance + subtle upward buoyancy (no harsh explosion)
      const speedFactor = Math.min(speed * 0.12, 1.6);
      const vx = (dx / dist) * speedFactor * 0.35 + nx * (spread * 0.04) + (Math.random() - 0.5) * 0.3;
      const vy = (dy / dist) * speedFactor * 0.35 + ny * (spread * 0.04) + (Math.random() - 0.5) * 0.3 - 0.15;

      // Elegant, refined compact sizing (not large distracting blobs)
      const startSize = 6 + Math.random() * 4;
      const targetSize = 20 + Math.random() * 12 + Math.min(speed * 5, 10);
      const lifeSpan = 450 + Math.random() * 200; // 450ms - 650ms (swift, clean dissipation)

      p.active = true;
      p.x = x + nx * spread * 0.4;
      p.y = y + ny * spread * 0.4;
      p.vx = vx;
      p.vy = vy;
      p.startSize = startSize;
      p.targetSize = targetSize;
      p.size = startSize;
      p.age = 0;
      p.lifeSpan = lifeSpan;
      p.maxAlpha = 0.22 + Math.random() * 0.08; // Delicate, translucent, non-intrusive
      p.rotation = Math.random() * Math.PI * 2;
      p.rotationSpeed = (Math.random() - 0.5) * 0.02;
      p.curlSeed = Math.random() * Math.PI * 2;
      p.curlFreq = 0.003 + Math.random() * 0.002;
      p.coreColor = palette.core;
      p.midColor = palette.mid;
      p.outerColor = palette.outer;
    };

    // Soft, elegant green ripple on click
    const burstParticles = (cx: number, cy: number) => {
      const burstCount = 6;
      for (let i = 0; i < burstCount; i++) {
        const angle = (i / burstCount) * Math.PI * 2 + Math.random() * 0.2;
        const speed = 1.0 + Math.random() * 0.8;
        const dx = Math.cos(angle) * speed * 10;
        const dy = Math.sin(angle) * speed * 10;
        spawnParticle(cx, cy, dx, dy, speed, true);
      }
    };

    const handlePointerMove = (e: MouseEvent | PointerEvent) => {
      if ("pointerType" in e && e.pointerType === "touch") return;

      const now = performance.now();
      const currentX = e.clientX;
      const currentY = e.clientY;

      mousePos.current = { x: currentX, y: currentY };
      setIsVisible(true);

      // Instantly position the center precision dot without latency
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      if (lastMousePos.current.x < 0) {
        lastMousePos.current = { x: currentX, y: currentY };
        lastMoveTime.current = now;
        return;
      }

      const dx = currentX - lastMousePos.current.x;
      const dy = currentY - lastMousePos.current.y;
      const dist = Math.hypot(dx, dy);
      const dt = Math.max(1, now - lastMoveTime.current);
      const speed = dist / dt; // px per ms

      // Smooth spacing: emit subtle puffs at spaced intervals (avoids dense over-accumulation)
      if (dist >= 3) {
        const stepDist = Math.max(14, 24 - Math.min(speed * 4, 10));
        const steps = Math.max(1, Math.floor(dist / stepDist));

        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          const px = lastMousePos.current.x + dx * t;
          const py = lastMousePos.current.y + dy * t;
          spawnParticle(px, py, dx, dy, speed, isHoveredRef.current);
        }

        lastMousePos.current = { x: currentX, y: currentY };
        lastMoveTime.current = now;
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      burstParticles(e.clientX, e.clientY);
    };

    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => {
      setIsVisible(false);
      lastMousePos.current = { x: -100, y: -100 };
    };

    const onMouseEnter = () => setIsVisible(true);

    // Track hover on interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-interactive="true"]'
      );
      setIsHovered(!!interactive);
    };

    // Main animation and physics rendering loop
    const render = (currentTime: number) => {
      if (!lastFrameTime.current) lastFrameTime.current = currentTime;
      const delta = Math.min(currentTime - lastFrameTime.current, 50);
      lastFrameTime.current = currentTime;

      // 1. Smooth lerp for outer reticle ring (speed 0.22)
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.22;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.22;

      // 2. Slower lerp for ambient flashlight glow (speed 0.12)
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * 0.12;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0)`;
      }

      // 3. Clear canvas completely and apply DPR transform
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Dynamic composite mode: 'source-over' for watercolor light mode, 'screen' for luminous dark mode
      const isLight = document.documentElement.classList.contains("light");
      ctx.globalCompositeOperation = isLight ? "source-over" : "screen";

      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        if (!p.active) continue;

        p.age += delta;
        if (p.age >= p.lifeSpan) {
          p.active = false;
          continue;
        }

        const progress = p.age / p.lifeSpan;

        // Fluid drag and gentle upward buoyancy
        p.vx *= 0.92;
        p.vy = p.vy * 0.92 - 0.05;

        // Organic micro-vorticity
        const curl = Math.sin(p.age * p.curlFreq + p.curlSeed) * 0.35;
        p.x += p.vx + Math.cos(p.rotation) * curl;
        p.y += p.vy + Math.sin(p.rotation) * curl;
        p.rotation += p.rotationSpeed;

        // Smooth cubic expansion
        const easeGrowth = 1 - Math.pow(1 - progress, 2);
        p.size = p.startSize + (p.targetSize - p.startSize) * easeGrowth;

        // Smooth opacity envelope (gentle attack, smooth fade-out)
        let alpha = 0;
        if (progress < 0.2) {
          alpha = p.maxAlpha * (progress / 0.2);
        } else {
          alpha = p.maxAlpha * Math.pow(1 - (progress - 0.2) / 0.8, 1.8);
        }

        if (alpha <= 0.002 || p.size <= 0) continue;

        // Gaussian multi-stop radial gradient for soft-edged, sheer mist
        const radGrad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size
        );
        const [cr, cg, cb] = p.coreColor;
        const [mr, mg, mb] = p.midColor;
        const [or, og, ob] = p.outerColor;

        radGrad.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${alpha * 0.45})`);
        radGrad.addColorStop(0.3, `rgba(${mr}, ${mg}, ${mb}, ${alpha * 0.25})`);
        radGrad.addColorStop(0.7, `rgba(${or}, ${og}, ${ob}, ${alpha * 0.08})`);
        radGrad.addColorStop(1, `rgba(${or}, ${og}, ${ob}, 0)`);

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      rafId.current = requestAnimationFrame(render);
    };

    // Page visibility listener: pause RAF when tab is hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (rafId.current) {
          cancelAnimationFrame(rafId.current);
          rafId.current = null;
        }
      } else {
        lastFrameTime.current = performance.now();
        rafId.current = requestAnimationFrame(render);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", handleElementHover, { passive: true });
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    lastFrameTime.current = performance.now();
    rafId.current = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", handleElementHover);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* 1. Full-screen Dedicated Smoke Trail Canvas */}
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 pointer-events-none z-[9995] transition-opacity duration-300 ${
          mounted && isVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* 2. Custom Cursor Overlay: Precision Green Dot, Aiming Reticle, and Ambient Light */}
      <div
        className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
          mounted && isVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        {/* Ambient Dynamic Flashlight Glow in Electric Lime/Green */}
        <div
          ref={glowRef}
          className="custom-cursor-glow fixed top-0 left-0 w-[420px] h-[420px] -mt-[210px] -ml-[210px] rounded-full bg-gradient-radial from-[#d4ff00]/[0.06] via-[#22c55e]/[0.025] to-transparent blur-3xl pointer-events-none will-change-transform"
        />

        {/* Outer Architectural Aiming Reticle Ring in Electric Lime */}
        <div
          ref={ringRef}
          className={`custom-cursor-ring fixed top-0 left-0 rounded-full border pointer-events-none will-change-transform transition-[width,height,border-color,background-color] duration-200 flex items-center justify-center ${
            isHovered
              ? "w-11 h-11 -mt-[22px] -ml-[22px] border-[#d4ff00] bg-[#d4ff00]/15 backdrop-blur-[1px] shadow-[0_0_16px_rgba(212,255,0,0.35)]"
              : isClicking
              ? "w-6 h-6 -mt-3 -ml-3 border-[#22c55e] bg-[#22c55e]/25 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
              : "w-8 h-8 -mt-4 -ml-4 border-[#d4ff00]/60 bg-transparent shadow-[0_0_10px_rgba(212,255,0,0.2)]"
          }`}
        >
          {isHovered && (
            <>
              <span className="absolute -top-1 w-1.5 h-0.5 bg-[#d4ff00]" />
              <span className="absolute -bottom-1 w-1.5 h-0.5 bg-[#d4ff00]" />
              <span className="absolute -left-1 h-1.5 w-0.5 bg-[#d4ff00]" />
              <span className="absolute -right-1 h-1.5 w-0.5 bg-[#d4ff00]" />
            </>
          )}
        </div>

        {/* Center Precision Target Dot in Signature Electric Lime */}
        <div
          ref={dotRef}
          className={`custom-cursor-dot fixed top-0 left-0 w-2 h-2 -mt-1 -ml-1 rounded-full pointer-events-none will-change-transform transition-all duration-150 ${
            isHovered
              ? "scale-125 bg-[#d4ff00] shadow-[0_0_10px_#d4ff00,0_0_18px_rgba(212,255,0,0.7)]"
              : isClicking
              ? "scale-75 bg-[#22c55e] shadow-[0_0_8px_#22c55e]"
              : "scale-100 bg-[#d4ff00] shadow-[0_0_8px_#d4ff00,0_0_14px_rgba(212,255,0,0.5)]"
          }`}
        />
      </div>
    </>
  );
}
