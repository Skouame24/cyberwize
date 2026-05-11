"use client";

import { useEffect, useRef } from "react";

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 200;
    const globeRadius = 350;
    let angle = 0;

    class Particle {
      x: number = 0;
      y: number = 0;
      z: number = 0;
      ox: number;
      oy: number;
      oz: number;
      size: number;

      constructor() {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        
        this.ox = globeRadius * Math.sin(phi) * Math.cos(theta);
        this.oy = globeRadius * Math.sin(phi) * Math.sin(theta);
        this.oz = globeRadius * Math.cos(phi);
        this.size = Math.random() * 1.5 + 0.5;
      }

      update(w: number, h: number, angle: number) {
        // Rotation around Y axis
        const cosY = Math.cos(angle);
        const sinY = Math.sin(angle);
        
        const rotatedX = this.ox * cosY - this.oz * sinY;
        const rotatedZ = this.ox * sinY + this.oz * cosY;
        
        // Perspective projection
        const perspective = 1000 / (1000 + rotatedZ);
        this.x = w / 2 + rotatedX * perspective;
        this.y = h / 2 + this.oy * perspective;
        this.z = rotatedZ;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const opacity = (this.z + globeRadius) / (2 * globeRadius);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 0.15})`;
        ctx.fill();
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      angle += 0.002;

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height, angle);
        particles[i].draw(ctx);

        if (i % 5 === 0) { // Optimize connections
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              const opacity = ((particles[i].z + globeRadius) / (2 * globeRadius)) * 0.05;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
}
