import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Buttons";
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
            <Button href="/solutions" variant="accent" size="lg">
              Explore Our Solutions
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="!border-white/40 !bg-transparent !text-white hover:!bg-white/10"
            >
              Talk to Cattlevibes
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
