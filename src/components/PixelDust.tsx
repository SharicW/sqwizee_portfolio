"use client";

import { useEffect, useState, useRef } from "react";
import { useAnimationFrame } from "framer-motion";

export function PixelDust() {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; animationDuration: string; delay: string }>>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${10 + Math.random() * 20}s`,
      delay: `${Math.random() * 10}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="pixel-dust">
      {particles.map((p) => (
        <Particle key={p.id} config={p} mouseRef={mouseRef} />
      ))}
    </div>
  );
}

function Particle({ config, mouseRef }: { config: any; mouseRef: React.MutableRefObject<{ x: number, y: number }> }) {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });

  useAnimationFrame(() => {
    if (!ref.current) return;
    const parent = ref.current.parentElement;
    if (!parent) return;
    
    const rect = parent.getBoundingClientRect();
    const px = rect.left + rect.width / 2;
    const py = rect.top + rect.height / 2;

    const dx = mouseRef.current.x - px;
    const dy = mouseRef.current.y - py;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const maxDist = 150;
    let targetX = 0;
    let targetY = 0;

    if (distance < maxDist && distance > 0) {
      const force = (maxDist - distance) / maxDist;
      targetX = -(dx / distance) * force * 150; 
      targetY = -(dy / distance) * force * 150;
    }

    pos.current.x += (targetX - pos.current.x) * 0.1;
    pos.current.y += (targetY - pos.current.y) * 0.1;

    ref.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: "-10px",
        left: config.left,
        animation: `floatUp ${config.animationDuration} linear infinite`,
        animationDelay: config.delay,
      }}
    >
      <div
        ref={ref}
        className="dust-particle"
        style={{
          position: "relative",
          bottom: "0",
          animation: "none",
        }}
      />
    </div>
  );
}
