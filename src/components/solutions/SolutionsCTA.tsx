"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, PhoneCall, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { images, siteConfig } from "@/data/site";

export function SolutionsCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[32px] bg-midnight-navy p-8 sm:p-12 md:p-16 lg:p-20 shadow-2xl">
            {/* Background Photographic Ambience with Overlay */}
            <div className="absolute inset-0">
              <Image
                src={images.farmAtmospheric}
                alt="Pastoral livestock agricultural landscape"
                fill
                className="object-cover object-center opacity-25"
                sizes="(max-width: 1440px) 100vw, 1440px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-midnight-navy via-midnight-navy/95 to-midnight-navy/80" />
            </div>

            {/* Technical Lab Grid Accent in Background */}
            <div className="pointer-events-none absolute inset-0 bg-lab-grid-dark opacity-30" />

            <div className="relative z-10 max-w-3xl">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-harvest-amber/30 bg-harvest-amber/10 px-4 py-1.5 backdrop-blur-xs">
                <Sparkles className="h-3.5 w-3.5 text-harvest-amber" />
                <span className="font-mono text-[11px] font-bold tracking-wider text-harvest-amber uppercase">
                  CLINICAL CONSULTATION &amp; DISTRIBUTION
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Build a healthier,{" "}
                <span className="text-harvest-amber">more productive herd.</span>
              </h2>

              {/* Supporting Text */}
              <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-white/80 sm:text-lg">
                Whether managing progressive dairy operations, veterinary distribution
                networks, or commercial livestock enterprises, our veterinary team works
                with you to identify and supply the right therapeutic formulations.
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-harvest-amber px-8 py-4 text-sm font-bold text-midnight-navy shadow-lg touch-manipulation active:scale-[0.97] transition-all hover:bg-harvest-amber/90 hover:shadow-xl"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Enquire Now</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xs touch-manipulation active:scale-[0.97] transition-all hover:border-white/40 hover:bg-white/15"
                >
                  <span>Explore Products</span>
                </Link>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hidden sm:inline-flex items-center gap-2.5 px-4 py-4 text-sm font-mono text-white/70 hover:text-harvest-amber transition-colors"
                >
                  <PhoneCall className="h-4 w-4 text-harvest-amber" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
