"use client";

import React, { useRef, useState, useEffect } from "react";

interface MagicBentoProps {
  children: React.ReactNode;
  className?: string;
}

export function MagicBento({ children, className = "" }: MagicBentoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !containerRef.current) return;
    const cards = containerRef.current.querySelectorAll<HTMLElement>("[data-magic-bento-card]");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative grid w-full ${className}`}
    >
      {children}
    </div>
  );
}
