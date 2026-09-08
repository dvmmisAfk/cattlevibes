import Link from "next/link";
import { siteConfig, productDropdownLinks } from "@/data/site";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block h-[76px] sm:h-[84px] transition-opacity hover:opacity-90"
              aria-label="CattleVibes Healthcare home"
            >
              <BrandLogo variant="white" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/85">
              {siteConfig.shortName} &middot; {siteConfig.subtitle}. Delivering premium
              veterinary medicines and nutritional supplements for livestock health and
              productivity.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-white/40">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Solutions", href: "/solutions" },
                { label: "Products", href: "/products" },
                { label: "Resources", href: "/resources" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-white/40">
              Products
            </h4>
            <ul className="space-y-3">
              {productDropdownLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-white/40">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/75" suppressHydrationWarning>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/75 transition-colors hover:text-yam-orange"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/75 transition-colors hover:text-yam-orange"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-xs text-white/75 transition-colors hover:text-yam-orange"
            >
              Commercial Enquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
