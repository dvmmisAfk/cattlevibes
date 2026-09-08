"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  accentWord?: string;
  accentClassName?: string;
  underlineColor?: string;
  delay?: number;
}

export function SplitText({
  text,
  className = "",
  accentWord,
  accentClassName = "relative inline-block text-[#172333]",
  underlineColor = "rgba(238, 155, 22, 0.3)",
  delay = 0,
}: SplitTextProps) {
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");

  if (prefersReduced) {
    return (
      <span className={className}>
        {words.map((word, i) => {
          const isAccent = accentWord && word.toLowerCase().includes(accentWord.toLowerCase());
          return (
            <span key={i} className={isAccent ? accentClassName : undefined}>
              {word}{" "}
              {isAccent && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-2.5 rounded-xs -rotate-1"
                  style={{ backgroundColor: underlineColor }}
                />
              )}
            </span>
          );
        })}
      </span>
    );
  }

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => {
        const isAccent = accentWord && word.toLowerCase().includes(accentWord.toLowerCase());

        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-top"
            style={{ marginRight: "0.28em" }}
          >
            <motion.span
              className={`inline-block ${isAccent ? accentClassName : ""}`}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + i * 0.08,
              }}
            >
              {word}
              {isAccent && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-2.5 rounded-xs -rotate-1"
                  style={{ backgroundColor: underlineColor }}
                />
              )}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
