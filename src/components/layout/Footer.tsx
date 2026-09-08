import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { siteConfig, productDropdownLinks } from "@/data/site";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="relative bg-midnight-navy text-white border-t-2 border-harvest-amber">
      {/* Background Lab Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-lab-grid-dark opacity-40" />

      <div className="relative mx-auto max-w-[1440px] px-5 pt-16 pb-12 lg:px-12 lg:pt-20">
        {/* Compact Quick Enquiry & Contact Strip */}
        <div className="mb-16 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xs md:flex md:items-center md:justify-between md:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-harvest-amber/20 text-harvest-amber ring-1 ring-harvest-amber/40">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <p className="font-mono text-[10px] font-bold tracking-widest text-harvest-amber uppercase">
                Direct Field Support &amp; Distribution
              </p>
              <h3 className="font-heading text-lg font-bold text-white md:text-xl">
                Looking for specific therapeutic formulations?
              </h3>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-3.5 w-3.5 text-harvest-amber" />
              <span>{siteConfig.phone}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-harvest-amber px-5 py-2.5 text-xs font-bold text-midnight-navy shadow-xs transition-transform hover:scale-105 active:scale-95"
            >
              <span>Submit Enquiry</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-90"
              aria-label="CattleVibes Healthcare Home"
            >
              <div className="h-10 w-10 rounded-lg bg-white/10 p-1 border border-white/15">
                <BrandLogo variant="white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-extrabold tracking-tight text-white">
                  Cattle Vibes
                </span>
                <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-harvest-amber uppercase">
                  HEALTHCARE
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.name} &middot; {siteConfig.subtitle}. Delivering
              veterinary medicines and targeted nutritional supplements for livestock
              health, productivity, and sustainable farm economics.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 font-mono text-[10px] text-muted-sage border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-pasture-green" />
              <span>VETERINARY MEDICINES &amp; NUTRITION</span>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-harvest-amber">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Solutions", href: "/solutions" },
                { label: "Our Products", href: "/products" },
                { label: "Resources", href: "/resources" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-harvest-amber"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Dropdown Categories */}
          <div>
            <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-harvest-amber">
              Formularies
            </h4>
            <ul className="space-y-2.5">
              {productDropdownLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-harvest-amber"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div>
            <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-harvest-amber">
              Headquarters
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-harvest-amber shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-harvest-amber shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-harvest-amber shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Compliance Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="font-mono text-xs text-white/60" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 font-mono text-xs">
            <Link
              href="/privacy"
              className="text-white/60 transition-colors hover:text-harvest-amber"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/60 transition-colors hover:text-harvest-amber"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-white/60 transition-colors hover:text-harvest-amber"
            >
              Commercial Enquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

