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
  const words = text.split(" ");

  if (prefersReduced) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p className={className}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, filter: "blur(6px)", y: 4 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.35,
              delay: delay + i * 0.015,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </p>
  );
}
