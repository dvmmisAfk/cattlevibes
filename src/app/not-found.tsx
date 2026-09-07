import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-deep-navy px-5 pt-(--nav-height) text-center lg:px-8">
      {/* Faint Architectural 404 Watermark */}
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-heading text-[12rem] font-black tracking-tighter text-white/[0.03] md:text-[18rem] lg:text-[22rem]"
        aria-hidden="true"
      >
        404
      </span>

      {/* Atmospheric Hairline Frame */}
      <div className="relative z-10 mx-auto max-w-2xl">
        <p className="text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-yam-orange mb-4">
          Error 404 &middot; Formulary Index
        </p>

        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Formulation Not Found.
        </h1>

        <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
          The clinical dossier, veterinary medicine specification, or formulary document you
          requested is unavailable or has been relocated within the CattleVibes therapeutic index.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl bg-yam-orange px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-200 hover:bg-[#d88410] hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" strokeWidth={2} />
            Return to Formulary
          </Link>

          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5"
          >
            Explore All Products
            <ArrowRight className="h-4 w-4 text-yam-orange transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
          </Link>
        </div>

        {/* Clinical support note */}
        <p className="mt-12 text-xs text-white/40 tracking-wider uppercase">
          Institutional Supply &middot; Veterinary Compliance &middot; GMP Standard
        </p>
      </div>
    </section>
  );
}
