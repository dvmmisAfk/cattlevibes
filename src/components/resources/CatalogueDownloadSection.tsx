"use client";

import Image from "next/image";
import { Download, FileText, ExternalLink, ShieldCheck, CheckCircle2, Layers, BookOpen } from "lucide-react";
import { siteConfig } from "@/data/site";

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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-center">
          {/* ─── Left Column (55%): Editorial Description & Key Features ─── */}
          <div className="lg:col-span-7 space-y-6">
            <h2
              id="catalogue-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-deep-navy leading-tight"
            >
              Download Our Product Catalogue
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-cadet-blue max-w-xl">
              Access verified compositions, indications, dosage protocols, and packaging across all 21 veterinary formulations.
            </p>

            {/* Feature Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-white/70 p-4">
                <FileText className="h-5 w-5 text-black shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="font-heading text-sm font-bold text-deep-navy">
                    21 Complete Formulations
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted mt-0.5 leading-relaxed">
                    Active molecules, indication profiles, and therapeutic action guidelines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-white/70 p-4">
                <Layers className="h-5 w-5 text-black shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="font-heading text-sm font-bold text-deep-navy">
                    Dosages & Protocols
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted mt-0.5 leading-relaxed">
                    Field-tested administration guides for dairy cattle, buffaloes, and sheep.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-white/70 p-4">
                <ShieldCheck className="h-5 w-5 text-black shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="font-heading text-sm font-bold text-deep-navy">
                    Pack Sizes & SKUs
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted mt-0.5 leading-relaxed">
                    Complete packaging specifications, batch shelf-life, and presentation volumes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-white/70 p-4">
                <CheckCircle2 className="h-5 w-5 text-black shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="font-heading text-sm font-bold text-deep-navy">
                    Instant Free Access
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted mt-0.5 leading-relaxed">
                    Direct high-resolution PDF download without registration forms or delays.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cadet-blue/80 pt-1">
              Looking for institutional tenders or bulk distribution? Email our desk at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-bold text-deep-navy hover:text-brand-orange underline underline-offset-2 transition-colors"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>

          {/* ─── Right Column (45%): Tactile Download Card ─── */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-lg shadow-deep-navy/[0.04]">
              {/* Subtle Warm Accent Flare */}
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-brand-orange/10 blur-3xl"
                aria-hidden="true"
              />

              {/* Document Header */}
              <div className="flex items-center justify-between border-b border-border/70 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-deep-navy text-white shadow-xs">
                    <FileText className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-deep-navy">
                      Product Catalogue Dossier
                    </h3>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-cadet-blue/70">
                      2026 Edition • High Resolution
                    </p>
                  </div>
                </div>
                <span className="rounded-md bg-soft-white border border-border px-2.5 py-1 font-mono text-[11px] font-bold text-deep-navy">
                  14.2 MB
                </span>
              </div>

              {/* Visual Dossier Preview Graphic */}
              <div className="my-6 rounded-xl border border-border/60 bg-gradient-to-br from-soft-white via-white to-light-pebble/70 p-5 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xs border border-border/70 mb-3">
                  <Image
                    src="/images/cattlevibes-mark.png"
                    alt="CattleVibes logo mark"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <h4 className="font-heading text-base font-bold text-deep-navy">
                  CattleVibes Healthcare Portfolio
                </h4>
                <p className="mt-1 text-xs text-text-muted">
                  Comprehensive Clinical & Commercial Veterinary Guide
                </p>
              </div>

              {/* Download & Preview Actions */}
              <div className="space-y-3">
                {/* Primary Download Button */}
                <a
                  href={catalogueHref}
                  download={downloadFileName}
                  className="glare-button relative flex w-full min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-deep-navy px-6 py-3.5 font-heading text-sm sm:text-base font-bold text-white shadow-md transition-all hover:bg-brand-orange hover:shadow-lg hover:shadow-brand-orange/20 active:scale-[0.98] cursor-pointer touch-manipulation"
                  aria-label="Download CattleVibes Veterinary Product Catalogue PDF (14.2 MB)"
                >
                  <Download className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-y-0.5" strokeWidth={2.2} />
                  <span>Download Catalogue (PDF)</span>
                  <span className="ml-1 rounded bg-white/15 px-2 py-0.5 font-mono text-xs font-semibold text-white/90">
                    14.2 MB
                  </span>
                </a>

                {/* Secondary Preview In Tab Button */}
                <a
                  href={catalogueHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full min-h-[44px] items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 py-2.5 font-heading text-xs sm:text-sm font-semibold text-deep-navy transition-all hover:border-brand-orange hover:text-brand-orange active:scale-[0.98] cursor-pointer touch-manipulation"
                >
                  <ExternalLink className="h-4 w-4" strokeWidth={2} />
                  <span>Open & Preview in Browser</span>
                </a>
              </div>

              {/* Immediate Download Reassurance */}
              <div className="mt-5 flex items-center justify-center gap-2 text-[11px] font-medium text-black border-t border-border/60 pt-4">
                <CheckCircle2 className="h-3.5 w-3.5 text-black shrink-0" strokeWidth={2} />
                <span>Direct PDF download • No signup or waiting period</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CatalogueDownloadSection;
