import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/data/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src={images.farmWide}
          alt="Livestock on a Cattlevibes-supported farm"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-deep-navy/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,146,22,0.18)_0%,transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 text-center lg:px-8">
        <FadeIn>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Better animal health starts with the right support.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Explore the Cattlevibes range of veterinary medicines and nutritional solutions
            designed around livestock health, recovery and productivity.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore Our Solutions
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Talk to Cattlevibes
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
