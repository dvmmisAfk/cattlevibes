import { CinematicHero } from "@/components/home/CinematicHero";
import { StickyScrollSequence } from "@/components/home/StickyScrollSequence";
import { EcosystemBento } from "@/components/home/EcosystemBento";
import { LifecycleAnatomy } from "@/components/home/LifecycleAnatomy";
import { CinematicCTA } from "@/components/home/CinematicCTA";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

export default function HomePage() {
  return (
    <SmoothScroll>
      <CinematicHero />
      <StickyScrollSequence />
      <EcosystemBento />
      <LifecycleAnatomy />
      <CinematicCTA />
    </SmoothScroll>
  );
}
