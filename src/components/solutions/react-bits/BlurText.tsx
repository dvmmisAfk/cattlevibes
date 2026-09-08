"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function BlurText({ text, className = "", delay = 0.2 }: BlurTextProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <p className={className}>{text}</p>;
  }

  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, filter: "blur(8px)", y: 8 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {text}
    </motion.p>
  );
}
