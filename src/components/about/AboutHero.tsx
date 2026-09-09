"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { images } from "@/data/site";

function RevealedLine({ text, delay }: { text: string; delay: number }) {
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className="block">
      {words.map((word, i) =>
        prefersReduced ? (
          <span key={`${word}-${i}`} className="mr-[0.28em] inline-block">
            {word}
          </span>
        ) : (
          <span key={`${word}-${i}`} className="mr-[0.28em] inline-block overflow-hidden py-1">
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.85,
                delay: delay + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ),
      )}
    </span>
  );
}

export function AboutHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-deep-navy pt-(--nav-height)">
      <div className="absolute inset-0">
        <Image
          src={images.aboutHero}
          alt="Pastoral livestock landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-deep-navy/80" />
      </div>

      <div className="relative mx-auto w-full max-w-[1800px] px-4 text-center sm:px-6 lg:px-8">
        <Breadcrumbs theme="dark" className="mb-10 justify-center" />
        <h1 className="mx-auto max-w-5xl font-heading text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-[4.75rem] lg:leading-[0.95]">
          <RevealedLine text="Advancing Animal Health" delay={0.1} />
          <RevealedLine text="Through Clinical Science." delay={0.42} />
        </h1>
      </div>
    </section>
  );
}
