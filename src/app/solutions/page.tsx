import type { Metadata } from "next";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { TherapeuticBento } from "@/components/solutions/TherapeuticBento";
import { OvineBreakout } from "@/components/solutions/OvineBreakout";
import { SpeciesIndex } from "@/components/solutions/SpeciesIndex";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Therapeutic architectures for veterinary medicines, nutrition, digestive health, parasite control, calcium support, and ovine flock economics.",
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <TherapeuticBento />
      <OvineBreakout />
      <SpeciesIndex />
    </>
  );
}
