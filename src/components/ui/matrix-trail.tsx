"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface MatrixTrailProps {
  className?: string;
  fontSize?: number;
  radius?: number;
  fade?: number;
  color?: string;
  scramble?: boolean;
  ambientBrightness?: number; // Brightness of background away from hover (0.05 to 0.15)
  rainSpeed?: number;
  rainDensity?: number;
  rainGlow?: boolean;
  children?: React.ReactNode;
}

export function MatrixTrail({
  className,
  fontSize = 16,
  radius = 180, // Large responsive flashlight radius
  fade = 0.08,
  color = "#06b6d4", // Electric cyan default
  scramble = true,
  ambientBrightness = 0.1, // Dim ghost characters outside hover area
  rainSpeed = 1.2,
  rainDensity = 0.95,
  rainGlow = true,
  children,
}: MatrixTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    active: false,
    lastMoveTime: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let columns = 0;

    // Katakana, matrix digits, math symbols
    const chars =
      "日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ010101<>{}/*=+-~#$_ABCDEF0123456789";

    let drops: number[] = [];
    let speeds: number[] = [];
    let leadChars: string[] = [];

    const initGrid = () => {
      const container = containerRef.current || canvas.parentElement || document.body;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      columns = Math.max(1, Math.floor(width / fontSize));
      drops = [];
      speeds = [];
      leadChars = [];

      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -(height / fontSize));
        speeds[i] = (Math.random() * 0.7 + 0.6) * rainSpeed;
        leadChars[i] = chars[Math.floor(Math.random() * chars.length)];
      }

      ctx.fillStyle = "#080b12";
      ctx.fillRect(0, 0, width, height);
    };

    initGrid();

    // Track mouse with window listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active = true;
      mouseRef.current.lastMoveTime = Date.now();
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", initGrid);

    let lastFrameTime = performance.now();

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);

      const deltaTime = (currentTime - lastFrameTime) / 1000;
      lastFrameTime = currentTime;

      // Smooth mouse lerp for natural flashlight motion
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.3;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.3;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const isMouseActive = mouseRef.current.active && (Date.now() - mouseRef.current.lastMoveTime < 3500);

      // Trail fade effect (clears trails into dark obsidian background)
      ctx.fillStyle = `rgba(8, 11, 18, ${Math.min(Math.max(fade, 0.03), 0.2)})`;
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace, "Courier New"`;
      ctx.textAlign = "start";

      const radiusSq = radius * radius;

      for (let i = 0; i < columns; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Scramble character occasionally
        if (scramble && Math.random() > 0.85) {
          leadChars[i] = chars[Math.floor(Math.random() * chars.length)];
        }

        const char = leadChars[i];

        // Proximity calculation from cursor to this column's current drop position
        const dx = x - mx;
        const dy = y - my;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);

        const isInsideHover = isMouseActive && dist < radius;

        let dropVelocity = speeds[i];

        if (isInsideHover) {
          // HOVER SPOTLIGHT REGION:
          // Intensity from 0 (at radius edge) to 1 (directly under cursor)
          const intensity = Math.pow(1 - dist / radius, 1.4);

          // Drops under cursor move actively and smoothly
          dropVelocity *= 1.8 + intensity * 1.5;

          if (intensity > 0.55) {
            // Bright white-hot center right under cursor
            ctx.shadowBlur = rainGlow ? 16 : 0;
            ctx.shadowColor = "#ffffff";
            ctx.fillStyle = "#ffffff";
            ctx.globalAlpha = 1.0;
            ctx.fillText(char, x, y);

            // Halo color aura
            ctx.shadowColor = color;
            ctx.fillStyle = color;
            ctx.globalAlpha = 0.85;
            ctx.fillText(char, x, y - fontSize);
          } else {
            // Illuminated glowing theme color in hover zone
            ctx.shadowBlur = rainGlow ? 10 * intensity : 0;
            ctx.shadowColor = color;
            ctx.fillStyle = color;
            ctx.globalAlpha = 0.35 + 0.65 * intensity;
            ctx.fillText(char, x, y);
          }
          ctx.shadowBlur = 0;
        } else {
          // OUTSIDE HOVER REGION:
          // Moves at near-zero crawl or very slow ambient pace
          dropVelocity *= 0.08;

          // Render with very low brightness / faint ghost character
          ctx.shadowBlur = 0;
          ctx.fillStyle = color;
          ctx.globalAlpha = ambientBrightness; // 0.10 opacity (barely visible subtle background)
          ctx.fillText(char, x, y);
        }

        // Advance drop position by its dynamic velocity
        drops[i] += dropVelocity;

        // Reset drop to top once off screen
        if (y > height) {
          if (Math.random() > 0.95) {
            drops[i] = 0;
            speeds[i] = (Math.random() * 0.7 + 0.6) * rainSpeed;
          }
        }
      }

      ctx.globalAlpha = 1.0;
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", initGrid);
      cancelAnimationFrame(animationFrameId);
    };
  }, [fontSize, radius, fade, color, scramble, ambientBrightness, rainSpeed, rainDensity, rainGlow]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden", className)}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      />
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

export default MatrixTrail;
