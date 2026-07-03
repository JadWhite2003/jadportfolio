"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type SparklesCoreProps = {
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
};

type Particle = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
};

export const SparklesCore = ({
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1.2,
  particleDensity = 1200,
  particleColor = "#FFFFFF",
}: SparklesCoreProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let lastTime = 0;

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const densityFactor = isTouchDevice ? 5200 : 2600;

    const generateParticles = () => {
      const count = Math.max(24, Math.floor((width * height) / densityFactor));
      particles.length = 0;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * (maxSize - minSize) + minSize,
          alpha: Math.random() * 0.6 + 0.2,
          speed: Math.random() * 0.16 + 0.04,
        });
      }
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      generateParticles();
    };

    const drawParticles = (delta = 1) => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speed * delta;
        if (p.y < -p.size) p.y = height + p.size;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
    };

    const animate = (time: number) => {
      if (!prefersReducedMotion) {
        const delta = (time - lastTime) / 16.67 || 1;
        lastTime = time;
        drawParticles(delta);
      } else {
        drawParticles(1);
      }

      animationFrameId = window.requestAnimationFrame(animate);
    };

    resizeCanvas();

    if (prefersReducedMotion || isTouchDevice) {
      drawParticles(1);
    } else {
      lastTime = performance.now();
      animationFrameId = window.requestAnimationFrame(animate);
    }

    const handleResize = () => resizeCanvas();
    const handleVisibility = () => {
      if (document.hidden) {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      } else if (!prefersReducedMotion && !isTouchDevice) {
        lastTime = performance.now();
        animationFrameId = window.requestAnimationFrame(animate);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [minSize, maxSize, particleDensity, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      data-bg={background}
    />
  );
};
