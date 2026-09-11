"use client";

import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";
import { VeterinaryNotice } from "@/components/legal/VeterinaryNotice";

export function CatalogueDownloadSection() {
  const catalogueHref = "/downloads/cattlevibes-product-catalogue.pdf";
  const downloadFileName = "Cattlevibes-Product-Catalogue.pdf";

  return (
    <section
      id="download-catalogue"
      className="bg-[#F7F5F0] py-16 sm:py-20 md:py-28 border-b border-border/70 scroll-mt-20"
      aria-labelledby="catalogue-heading"
    >
      {/* Anchor alias for existing internal links */}
      <span id="dossier-request" className="sr-only" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* ─── Left Column (7 cols): Authoritative Veterinary Editorial ─── */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div>
              <h2
                id="catalogue-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-deep-navy leading-[1.12]"
              >
                Download Our Complete Product Catalogue
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-cadet-blue max-w-xl">
                The veterinary compendium covering compositions, target-species indications, administration notes, and pack sizes across all 24 formulations.
              </p>
              <VeterinaryNotice className="mt-3 max-w-xl" />
            </div>

            {/* Editorial Specification Matrix (Hairline Dividers, No Template Cards) */}
            <div className="border-y border-border/80 divide-y divide-border/60">
              <div className="py-4 sm:py-5 flex items-start gap-4">
                <span className="font-numeral text-xs font-medium text-cadet-blue mt-0.5 tracking-wider">
                  01
                </span>
                <div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-deep-navy">
                    24 Complete Formulations
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted mt-0.5 leading-relaxed">
                    Sterile injectables, broad-spectrum antimicrobials, anti-inflammatory therapeutics, intrauterine infusions, and nutritional digestive tonics.
                  </p>
                </div>
              </div>

              <div className="py-4 sm:py-5 flex items-start gap-4">
                <span className="font-numeral text-xs font-medium text-cadet-blue mt-0.5 tracking-wider">
                  02
                </span>
                <div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-deep-navy">
                    Field-Tested Dosing Protocols
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted mt-0.5 leading-relaxed">
                    Precise bodyweight-calibrated administration guidelines for dairy cattle, water buffaloes, sheep, and calves under veterinary guidance.
                  </p>
                </div>
              </div>

              <div className="py-4 sm:py-5 flex items-start gap-4">
                <span className="font-numeral text-xs font-medium text-cadet-blue mt-0.5 tracking-wider">
                  03
                </span>
                <div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-deep-navy">
                    Commercial Pack Specifications & Shelf-Life
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted mt-0.5 leading-relaxed">
                    Exact presentation volumes, glass vial and HDPE can specifications, batch stability, and cold-chain storage parameters.
                  </p>
                </div>
              </div>
            </div>

            {/* Institutional Tender Contact Note */}
            <div className="text-xs sm:text-sm text-cadet-blue pt-1">
              <span className="font-bold text-deep-navy">Institutional Tenders & Commercial Supply:</span>{" "}
              For dairy cooperative supply, hospital requisitions, or C&F distribution, contact our commercial desk directly at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-bold text-deep-navy hover:text-brand-orange underline underline-offset-4 transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* ─── Right Column (5 cols): The Manual Premium Publication Folio ─── */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-border/80 bg-white p-6 sm:p-8 shadow-[0_20px_50px_-20px_rgba(49,56,65,0.12)] transition-shadow duration-300 hover:shadow-[0_24px_60px_-20px_rgba(49,56,65,0.16)]">
              {/* Card Top Header */}
              <div className="pb-4 border-b border-border/70">
                <h3 className="font-heading text-base sm:text-lg font-bold text-deep-navy">
                  Product Catalogue 2026
                </h3>
              </div>

              {/* Visual Centerpiece: Tactile Publication Folio with Physical Depth */}
              <div className="my-5">
                <a
                  href={catalogueHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block w-full overflow-hidden rounded-xl border border-deep-navy/10 bg-[#F4F3EF] p-4 sm:p-5 transition-all duration-300 active:scale-[0.99] cursor-pointer"
                  title="Click to preview the complete CattleVibes Product Catalogue in browser"
                >
                  {/* Physical Book Shadow and Binding Depth */}
                  <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-lg bg-white shadow-[0_12px_28px_-6px_rgba(49,56,65,0.22),0_4px_10px_rgba(49,56,65,0.08)] border border-black/10 transition-all duration-300 group-hover:shadow-[0_18px_38px_-8px_rgba(49,56,65,0.3),0_6px_14px_rgba(49,56,65,0.12)] group-hover:-translate-y-0.5">
                    <Image
                      src="/images/cattlevibes-catalogue-cover.jpg"
                      alt="Official CattleVibes Veterinary Product Catalogue Cover"
                      fill
                      priority
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover object-center"
                    />

                    {/* Book Spine Sheen / Tactile Binding Edge */}
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 via-white/10 to-transparent"
                      aria-hidden="true"
                    />
                    {/* Subtle page-fold corner highlight */}
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/[0.04] via-transparent to-white/15"
                      aria-hidden="true"
                    />

                    {/* Hover State: "Click to preview" pill */}
                    <div className="absolute inset-0 flex items-center justify-center bg-deep-navy/0 opacity-0 transition-all duration-300 group-hover:bg-deep-navy/30 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-deep-navy shadow-lg backdrop-blur-xs">
                        <ExternalLink className="h-3.5 w-3.5 text-brand-orange" />
                        Click to Preview
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Technical Specifications Grid (Clean 3-column metadata bar, NO floating pills) */}
              <div className="grid grid-cols-3 gap-2 border-y border-border/70 py-3.5 text-center mb-6">
                <div>
                  <span className="block font-heading text-xs sm:text-sm font-bold text-deep-navy">
                    24 SKUs
                  </span>
                  <span className="block text-[11px] text-text-muted">
                    Formulations
                  </span>
                </div>
                <div className="border-x border-border/70">
                  <span className="block font-heading text-xs sm:text-sm font-bold text-deep-navy">
                    Standardized
                  </span>
                  <span className="block text-[11px] text-text-muted">
                    Dosing Guides
                  </span>
                </div>
                <div>
                  <span className="block font-heading text-xs sm:text-sm font-bold text-deep-navy">
                    Verified
                  </span>
                  <span className="block text-[11px] text-text-muted">
                    Veterinary Grade
                  </span>
                </div>
              </div>

              {/* Bespoke Action Controls */}
              <div className="space-y-2.5">
                {/* Primary Download Button */}
                <a
                  href={catalogueHref}
                  download={downloadFileName}
                  className="group relative flex w-full min-h-[50px] items-center justify-center gap-2.5 rounded-xl bg-deep-navy px-6 py-3.5 font-heading text-sm sm:text-base font-bold text-white shadow-md transition-all hover:bg-brand-orange hover:shadow-lg hover:shadow-brand-orange/25 active:scale-[0.98] cursor-pointer touch-manipulation"
                  aria-label="Download CattleVibes Veterinary Product Catalogue PDF (14.2 MB)"
                >
                  <Download
                    className="h-4.5 w-4.5 text-white transition-transform duration-200 group-hover:translate-y-0.5"
                    strokeWidth={2.2}
                  />
                  <span>Download Catalogue PDF</span>
                  <span className="ml-1 text-xs text-white/90 font-numeral font-medium">
                    (14.2 MB)
                  </span>
                </a>

                {/* Secondary Preview Link */}
                <a
                  href={catalogueHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full min-h-[42px] items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 py-2 font-heading text-xs sm:text-sm font-semibold text-deep-navy transition-all hover:border-deep-navy hover:bg-deep-navy/[0.02] active:scale-[0.98] cursor-pointer touch-manipulation"
                >
                  <ExternalLink className="h-4 w-4 text-cadet-blue" strokeWidth={1.75} />
                  <span>Open & Preview in New Tab</span>
                </a>
              </div>

              {/* Dignified Footnote */}
              <p className="mt-4 text-center font-body text-[11px] text-text-muted">
                Direct PDF document &middot; No registration or waitlist required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CatalogueDownloadSection;
