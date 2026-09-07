"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function CinematicCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;

    // Handle canvas resizing with high DPI support
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(canvas);

    // Pause when out of viewport
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(canvas);

    let t = 0;
    const gridSpacing = 72;

    const render = () => {
      if (!isVisible || prefersReduced) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      t += 0.003;
      ctx.clearRect(0, 0, width, height);

      // ─── 1. Architectural Telemetry Grid (cadet-blue / 5%) ───
      ctx.strokeStyle = "rgba(58, 71, 80, 0.045)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines with subtle offset
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // ─── 2. Precision Corner Crosshairs at Grid Intersections ───
      ctx.strokeStyle = "rgba(58, 71, 80, 0.08)";
      ctx.lineWidth = 1;
      const crossSize = 3;

      for (let x = gridSpacing * 2; x < width; x += gridSpacing * 3) {
        for (let y = gridSpacing * 2; y < height; y += gridSpacing * 3) {
          ctx.beginPath();
          ctx.moveTo(x - crossSize, y);
          ctx.lineTo(x + crossSize, y);
          ctx.moveTo(x, y - crossSize);
          ctx.lineTo(x, y + crossSize);
          ctx.stroke();
        }
      }

      // ─── 3. Subtle Topographic Contour Wave (Slow Drifting Clinical Line) ───
      ctx.strokeStyle = "rgba(58, 71, 80, 0.05)";
      ctx.lineWidth = 1.25;
      ctx.beginPath();

      const waveYBase = height * 0.75;
      for (let x = 0; x <= width; x += 12) {
        const wave =
          Math.sin(x * 0.004 + t) * 28 +
          Math.cos(x * 0.008 - t * 0.7) * 14;
        const currentY = waveYBase + wave;
        if (x === 0) {
          ctx.moveTo(x, currentY);
        } else {
          ctx.lineTo(x, currentY);
        }
      }
      ctx.stroke();

      // Secondary parallel contour
      ctx.strokeStyle = "rgba(234, 146, 22, 0.035)"; // ultra-faint yam orange hint
      ctx.beginPath();
      for (let x = 0; x <= width; x += 12) {
        const wave =
          Math.sin(x * 0.0035 + t * 1.2) * 22 +
          Math.cos(x * 0.006 - t * 0.5) * 12;
        const currentY = waveYBase - 48 + wave;
        if (x === 0) {
          ctx.moveTo(x, currentY);
        } else {
          ctx.lineTo(x, currentY);
        }
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [prefersReduced]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-100"
      aria-hidden="true"
    />
  );
}
