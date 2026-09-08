"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedContentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
}

export function AnimatedContent({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 16,
  duration = 0.45,
}: AnimatedContentProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const initialPosition = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...initialPosition }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
