"use client";

import { useEffect, useRef } from "react";

interface CssSparklesProps {
  particleColor?: string;
  particleCount?: number;
  className?: string;
}

export function CssSparkles({
  particleColor = "#C5A55A",
  particleCount = 40,
  className = "",
}: CssSparklesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing particles
    container.innerHTML = "";

    for (let i = 0; i < particleCount; i++) {
      const dot = document.createElement("div");
      const size = Math.random() * 2.5 + 0.5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 5;

      dot.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: ${particleColor};
        border-radius: 50%;
        opacity: 0;
        animation: sparkle-fade ${duration}s ${delay}s infinite ease-in-out;
        pointer-events: none;
      `;
      container.appendChild(dot);
    }
  }, [particleColor, particleCount]);

  return (
    <>
      <style jsx global>{`
        @keyframes sparkle-fade {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.8; transform: scale(1); }
        }
      `}</style>
      <div
        ref={containerRef}
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      />
    </>
  );
}
