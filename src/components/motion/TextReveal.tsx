"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  /** Split by "word" (default) or "char" */
  splitBy?: "word" | "char";
  /** Stagger between each unit */
  stagger?: number;
}

/**
 * Splits text into words (or characters) and reveals each with a masked
 * slide-up animation on scroll-into-view. Used for editorial hero headlines.
 */
export function TextReveal({
  children,
  as: Tag = "h1",
  className = "",
  delay = 0,
  splitBy = "word",
  stagger = 0.04,
}: TextRevealProps) {
  const prefersReduced = useReducedMotion();

  const units =
    splitBy === "char" ? children.split("") : children.split(/(\s+)/);

  if (prefersReduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag className={className} aria-label={children}>
      {units.map((unit, i) => {
        if (/^\s+$/.test(unit)) {
          return (
            <span key={`space-${i}`} className="inline-block">
              &nbsp;
            </span>
          );
        }

        return (
          <span
            key={`${unit}-${i}`}
            className="inline-block overflow-hidden align-bottom"
          >
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + i * stagger,
              }}
              aria-hidden="true"
            >
              {unit}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
