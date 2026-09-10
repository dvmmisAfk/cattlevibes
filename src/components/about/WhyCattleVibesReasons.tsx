"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface StandardItem {
  number: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  isAccent?: boolean;
}

const STANDARDS: StandardItem[] = [
  {
    number: "01",
    title: "Practical Animal Healthcare",
    copy: "Targeted veterinary pharmaceuticals spanning sterile injectables, anti-inflammatory therapeutics, and broad-spectrum antimicrobial agents formulated for acute clinical intervention under professional veterinary supervision.",
    image: "/images/standard-01-practical-healthcare.jpg",
    imageAlt: "Indian veterinary doctor preparing CattleVibes sterile injectable medicines in clinical dairy station with Indian Gir cow",
    isAccent: true,
  },
  {
    number: "02",
    title: "Formulations Built Around Real Needs",
    copy: "Formulations structured specifically around critical livestock stress windows — periparturient hypocalcemia prevention, ruminal microflora buffering, and postpartum uterine involution.",
    image: "/images/standard-02-real-needs.jpg",
    imageAlt: "Indian dairy farmer with CattleVibes feed supplements tending to indigenous Gir and Sahiwal cows in modern Indian farm shed",
    isAccent: false,
  },
  {
    number: "03",
    title: "A Broader Approach to Animal Health",
    copy: "A unified portfolio connecting statutory pharmaceuticals with phytogenic recovery tonics and chelated mineral nutrition, addressing acute clinical therapy and long-term daily herd productivity.",
    image: "/images/standard-03-broader-approach.jpg",
    imageAlt: "Indian female veterinarian with stethoscope examining Gir calf and cow alongside CattleVibes medical kit in rural dairy courtyard",
    isAccent: true,
  },
  {
    number: "04",
    title: "Support Beyond the Product",
    copy: "Manufactured under Schedule M cleanroom standards with analytical assay verification, cold-chain integrity, and technical advisory support developed in close dialogue with field veterinarians.",
    image: "/images/standard-04-support-beyond.jpg",
    imageAlt: "Indian pharmaceutical scientist in cleanroom inspecting analytical CattleVibes veterinary medicine vials under Schedule M standards",
    isAccent: false,
  },
];

export function WhyCattleVibesReasons() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative bg-white py-12 sm:py-16 lg:py-20"
      aria-labelledby="four-standards-title"
    >
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* Section Header - Concise & Restrained */}
        <motion.div
          className="max-w-4xl mb-8 sm:mb-10 lg:mb-12"
          initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            id="four-standards-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-deep-navy leading-tight"
          >
            Built on Higher Standards.
          </h2>
        </motion.div>

        {/* Continuous Alternating Editorial Spread */}
        <div className="border-b border-deep-navy/15">
          {STANDARDS.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.number}
                className="group relative border-t border-deep-navy/15 py-12 sm:py-14 lg:py-18 overflow-hidden"
                initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* ─── Fading Background Image on the Numeral Side ─── */}
                {isEven ? (
                  /* Point 01 & 03: Image on Left, fading out towards the middle */
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[50%] overflow-hidden select-none z-0"
                    style={{
                      maskImage:
                        "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0) 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0) 100%)",
                    }}
                    aria-hidden="true"
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-left lg:object-center opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/55 to-white"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20"
                      aria-hidden="true"
                    />
                  </div>
                ) : (
                  /* Point 02 & 04: Image on Right, fading out towards the middle */
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-[65%] lg:w-[50%] overflow-hidden select-none z-0"
                    style={{
                      maskImage:
                        "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0) 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0) 100%)",
                    }}
                    aria-hidden="true"
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-right lg:object-center opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-l from-white/30 via-white/55 to-white"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20"
                      aria-hidden="true"
                    />
                  </div>
                )}

                {/* ─── Content Layer ─── */}
                {isEven ? (
                  /* Left-Anchor Layout (01, 03) */
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    {/* Left: Oversized Architectural Numeral + Headline */}
                    <div className="lg:col-span-6">
                      <span
                        className={`block font-heading text-7xl sm:text-8xl md:text-9xl lg:text-[7.5rem] font-extrabold leading-none select-none tracking-tight mb-3 lg:mb-5 drop-shadow-xs ${
                          item.isAccent ? "text-brand-orange" : "text-deep-navy/40"
                        }`}
                      >
                        {item.number}
                      </span>
                      <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-deep-navy tracking-tight leading-tight drop-shadow-xs">
                        {item.title}
                      </h3>
                    </div>

                    {/* Right: Verified Editorial Copy (Clean on pure white) */}
                    <div className="lg:col-span-6 lg:pl-12 lg:border-l lg:border-deep-navy/10">
                      <p className="font-body text-base sm:text-lg lg:text-xl leading-relaxed text-cadet-blue font-medium">
                        {item.copy}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Right-Anchor Inverted Layout (02, 04) */
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    {/* Left: Verified Editorial Copy (Clean on pure white) */}
                    <div className="order-2 lg:order-1 lg:col-span-6 lg:pr-12">
                      <p className="font-body text-base sm:text-lg lg:text-xl leading-relaxed text-cadet-blue font-medium">
                        {item.copy}
                      </p>
                    </div>

                    {/* Right: Oversized Architectural Numeral + Headline */}
                    <div className="order-1 lg:order-2 lg:col-span-6 lg:pl-12 lg:border-l lg:border-deep-navy/10">
                      <span
                        className={`block font-heading text-7xl sm:text-8xl md:text-9xl lg:text-[7.5rem] font-extrabold leading-none select-none tracking-tight mb-3 lg:mb-5 drop-shadow-xs ${
                          item.isAccent ? "text-brand-orange" : "text-deep-navy/40"
                        }`}
                      >
                        {item.number}
                      </span>
                      <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-deep-navy tracking-tight leading-tight drop-shadow-xs">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
