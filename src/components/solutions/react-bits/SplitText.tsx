"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  accentWord?: string;
  accentPhrase?: string;
  accentClassName?: string;
  underlineColor?: string;
  delay?: number;
}

export function SplitText({
  text,
  className = "",
  accentWord,
  accentPhrase,
  accentClassName = "relative inline-block text-[#172333]",
  underlineColor = "rgba(238, 155, 22, 0.3)",
  delay = 0,
}: SplitTextProps) {
  const prefersReduced = useReducedMotion();
  const targetPhrase = accentPhrase || accentWord || "";

  // If accentPhrase is provided and exists in text, we split around it
  if (targetPhrase && text.includes(targetPhrase)) {
    const parts = text.split(targetPhrase);
    const beforeWords = parts[0] ? parts[0].trim().split(/\s+/) : [];
    const phraseWords = targetPhrase.trim().split(/\s+/);
    const afterWords = parts[1] ? parts[1].trim().split(/\s+/) : [];

    if (prefersReduced) {
      return (
        <span className={className}>
          {beforeWords.map((w, i) => (
            <span key={`b-${i}`}>{w} </span>
          ))}
          <span className={accentClassName}>
            {phraseWords.join(" ")}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1.5 left-0 w-full h-3 text-[#EE9B16]/35 -z-10 overflow-visible"
              viewBox="0 0 160 12"
              fill="currentColor"
              preserveAspectRatio="none"
            >
              <path d="M2 7 C 35 3, 90 2, 158 5 C 130 9, 70 10, 2 8 Z" />
            </svg>
          </span>
          {afterWords.map((w, i) => (
            <span key={`a-${i}`}> {w}</span>
          ))}
        </span>
      );
    }

    let wordCounter = 0;

    return (
      <span className={`inline-block ${className}`}>
        {beforeWords.map((word) => {
          const index = wordCounter++;
          return (
            <React.Fragment key={`b-${index}`}>
              <span
                className="inline-block overflow-hidden align-top"
                style={{ marginRight: "0.05em" }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: delay + index * 0.06,
                  }}
                >
                  {word}
                </motion.span>
              </span>
              {" "}
            </React.Fragment>
          );
        })}

        {/* Accented Phrase with organic brush stroke */}
        <span className={`${accentClassName} align-top`}>
          {phraseWords.map((word, pIdx) => {
            const index = wordCounter++;
            return (
              <React.Fragment key={`p-${index}`}>
                <span
                  className="inline-block overflow-hidden align-top"
                  style={{ marginRight: "0.05em" }}
                >
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: delay + index * 0.06,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
                {pIdx < phraseWords.length - 1 && " "}
              </React.Fragment>
            );
          })}

          {/* Organic Brush Stroke SVG */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-1.5 left-0 w-full h-3 text-[#EE9B16]/35 -z-10 overflow-visible"
            viewBox="0 0 160 12"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M2 7 C 35 3, 90 2, 158 5 C 130 9, 70 10, 2 8 Z" />
          </svg>
        </span>

        {afterWords.map((word) => {
          const index = wordCounter++;
          return (
            <React.Fragment key={`a-${index}`}>
              {" "}
              <span
                className="inline-block overflow-hidden align-top"
                style={{ marginRight: "0.05em" }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: delay + index * 0.06,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            </React.Fragment>
          );
        })}
      </span>
    );
  }

  // Fallback single-word iteration
  const words = text.split(" ");
  if (prefersReduced) {
    return (
      <span className={className}>
        {words.map((word, i) => (
          <span key={i}>{word} </span>
        ))}
      </span>
    );
  }

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span
            className="inline-block overflow-hidden align-top"
            style={{ marginRight: "0.05em" }}
          >
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + i * 0.06,
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </span>
  );
}
