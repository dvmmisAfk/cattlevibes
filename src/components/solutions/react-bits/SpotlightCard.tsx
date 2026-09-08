"use client";

import React, { useRef, useState, useEffect } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  size?: number;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(238, 155, 22, 0.08)",
  size = 350,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    if (!isTouch) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition(null);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Soft Low-Opacity Mouse-Tracking Spotlight */}
      {!isTouch && isHovered && position && (
        <div
          className="pointer-events-none absolute -inset-px z-1 rounded-[inherit] transition-opacity duration-300"
          style={{
            background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
          }}
        />
      )}

      {/* Children content */}
      <div className="relative z-2 h-full w-full">{children}</div>
    </div>
  );
}
