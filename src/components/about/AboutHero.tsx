"use client";

import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FoldText } from "@/components/ui/FoldText";
import { images } from "@/data/site";

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
          <span className="block">
            <FoldText
              text="Advancing Animal Health"
              trigger="mount"
              hinge="top"
              duration={0.7}
              stagger={0.035}
            />
          </span>
          <span className="block mt-2">
            <FoldText
              text="Through Clinical Science."
              trigger="mount"
              hinge="top"
              duration={0.7}
              stagger={0.035}
            />
          </span>
        </h1>
      </div>
    </section>
  );
}
