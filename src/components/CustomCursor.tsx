"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Position references for smooth interpolation
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const glowPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Disable on touch devices or if user prefers reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible((prev) => (prev ? prev : true));

      // Instantly position the small center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
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

    // Smooth physics loop for outer ring and ambient flashlight glow
    const render = () => {
      // Lerp for outer ring (speed 0.22)
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.22;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.22;

      // Slower lerp for ambient glow (speed 0.12)
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * 0.12;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", handleElementHover, { passive: true });
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    rafId.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", handleElementHover);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* 1. Ambient Dynamic Flashlight Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[420px] h-[420px] -mt-[210px] -ml-[210px] rounded-full bg-gradient-radial from-[#d4ff00]/[0.06] via-[#38bdf8]/[0.02] to-transparent blur-3xl pointer-events-none will-change-transform"
      />

      {/* 2. Outer Architectural Aiming Reticle Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -mt-5 -ml-5 rounded-full border pointer-events-none will-change-transform transition-[width,height,border-color,background-color] duration-200 flex items-center justify-center ${
          isHovered
            ? "w-14 h-14 -mt-7 -ml-7 border-[#d4ff00] bg-[#d4ff00]/10 backdrop-blur-[1px]"
            : isClicking
            ? "w-8 h-8 -mt-4 -ml-4 border-[#38bdf8] bg-[#38bdf8]/20"
            : "w-10 h-10 -mt-5 -ml-5 border-[#d4ff00]/50 bg-transparent"
        }`}
      >
        {/* Subtle crosshair notches on hover */}
        {isHovered && (
          <>
            <span className="absolute -top-1 w-1.5 h-0.5 bg-[#d4ff00]" />
            <span className="absolute -bottom-1 w-1.5 h-0.5 bg-[#d4ff00]" />
            <span className="absolute -left-1 h-1.5 w-0.5 bg-[#d4ff00]" />
            <span className="absolute -right-1 h-1.5 w-0.5 bg-[#d4ff00]" />
          </>
        )}
      </div>

      {/* 3. Center Precision Target Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 -mt-1 -ml-1 rounded-full pointer-events-none will-change-transform transition-all duration-150 ${
          isHovered
            ? "scale-0 opacity-0 bg-[#d4ff00]"
            : isClicking
            ? "scale-150 bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]"
            : "scale-100 bg-[#d4ff00] shadow-[0_0_6px_#d4ff00]"
        }`}
      />
    </div>
  );
}
