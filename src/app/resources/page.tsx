import type { Metadata } from "next";
import { ResourcesHero } from "@/components/resources/ResourcesHero";
import { ResourceIndex } from "@/components/resources/ResourceIndex";
import { CatalogueDownloadSection } from "@/components/resources/CatalogueDownloadSection";
import { ResourceFAQ } from "@/components/resources/ResourceFAQ";
import { ResourceFinalCTA } from "@/components/resources/ResourceFinalCTA";

export const metadata: Metadata = {
  title: "Veterinary Healthcare Resources | CattleVibes",
  description:
    "Download the CattleVibes veterinary product catalogue, access clinical product specifications, or contact our commercial advisory desk.",
};

export default function ResourcesPage() {
  // Client-ready pastoral layout
  return (
    <div className="min-h-screen bg-white">
      {/* ─── 01. Cinematic Left-Aligned Resources Hero ─── */}
      <ResourcesHero />

      {/* ─── 02. Editorial Resource Index ─── */}
      <ResourceIndex />

      {/* ─── 03. Complete Product Catalogue Download ─── */}
      <CatalogueDownloadSection />

      {/* ─── 04. Frequently Asked Questions ─── */}
      <ResourceFAQ />

      {/* ─── 05. Final Conversion CTA ─── */}
      <ResourceFinalCTA />
    </div>
  );
}
