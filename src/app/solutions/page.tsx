import type { Metadata } from "next";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { TherapeuticBento } from "@/components/solutions/TherapeuticBento";
import { OvineBreakout } from "@/components/solutions/OvineBreakout";
import { SpeciesIndex } from "@/components/solutions/SpeciesIndex";
import { SolutionsCTA } from "@/components/solutions/SolutionsCTA";

export const metadata: Metadata = {
  title: "Veterinary Healthcare Solutions",
  description:
    "Six clinical architectures spanning veterinary medicines, animal nutrition, hepatic support, reproductive care, parasite control, and metabolic calcium yield — engineered for daily livestock operations.",
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <TherapeuticBento />
      <OvineBreakout />
      <SpeciesIndex />
      <SolutionsCTA />
    </>
  );
}

