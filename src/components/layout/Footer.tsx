import Link from "next/link";
import { siteConfig, productDropdownLinks } from "@/data/site";
import { BrandLogo } from "./BrandLogo";

/* ─── Custom Social SVG Icons ─── */
function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.905.815 2.796.815 3.182 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.768-5.768-5.768zm3.364 8.167c-.14.394-.816.746-1.127.795-.296.046-.66.075-1.921-.448-1.579-.654-2.593-2.259-2.671-2.363-.078-.104-.644-.858-.644-1.637 0-.779.407-1.164.551-1.32.144-.156.314-.195.42-.195.105 0 .211.001.303.006.098.005.229-.037.358.272.133.321.455 1.109.495 1.191.04.082.066.178.013.283-.053.106-.08.172-.158.264-.078.091-.164.204-.234.274-.078.077-.16.16-.068.317.091.157.406.669.871 1.083.598.533 1.103.698 1.26.776.157.078.249.066.341-.04.092-.105.394-.46.499-.618.105-.157.21-.131.355-.078.144.053.918.433 1.075.512.158.079.263.118.303.184.04.066.04.382-.1.776zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.436 5.176L2 22l4.981-1.307A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.642 0-3.17-.487-4.454-1.325l-.32-.208-2.964.777.791-2.89-.228-.363A8.134 8.134 0 0 1 3.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="3" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "WhatsApp",
    href: siteConfig.socials.whatsapp,
    icon: WhatsAppIcon,
    label: "Chat with CattleVibes on WhatsApp",
  },
  {
    name: "Email",
    href: siteConfig.socials.email,
    icon: MailIcon,
    label: "Email CattleVibes",
  },
  {
    name: "Facebook",
    href: siteConfig.socials.facebook,
    icon: FacebookIcon,
    label: "CattleVibes on Facebook",
  },
  {
    name: "Instagram",
    href: siteConfig.socials.instagram,
    icon: InstagramIcon,
    label: "CattleVibes on Instagram",
  },
].filter((item) => Boolean(item.href));

export function Footer() {
  return (
    <footer className="bg-deep-navy text-white" data-theme="dark">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block h-[76px] sm:h-[84px] transition-opacity hover:opacity-90"
              aria-label="CattleVibes Healthcare home"
            >
              <BrandLogo variant="white" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/90">
              {siteConfig.name}. {siteConfig.subtitle}. Veterinary medicines and
              nutritional supplements for livestock.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/90">
              {siteConfig.phone}
              <br />
              {siteConfig.email}
              <br />
              {siteConfig.registeredOffice || siteConfig.address}
            </p>

            {/* Social Media Channels */}
            <div className="mt-6 flex items-center gap-2.5">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-orange hover:bg-brand-orange hover:text-white hover:shadow-md hover:shadow-brand-orange/20 active:scale-95 cursor-pointer touch-manipulation"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-white/90">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Why CattleVibes", href: "/about" },
                { label: "Solutions", href: "/solutions" },
                { label: "Products", href: "/products" },
                { label: "Resources", href: "/resources" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded text-sm text-white/90 transition-colors hover:text-brand-orange focus-visible:ring-1 focus-visible:ring-brand-orange focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-white/90">
              Products
            </h4>
            <ul className="space-y-3">
              {productDropdownLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded text-sm text-white/90 transition-colors hover:text-brand-orange focus-visible:ring-1 focus-visible:ring-brand-orange focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li>
                <Link
                  href="/contact"
                  className="rounded transition-colors hover:text-brand-orange focus-visible:ring-1 focus-visible:ring-brand-orange focus-visible:outline-none"
                >
                  Send an enquiry
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="rounded transition-colors hover:text-brand-orange focus-visible:ring-1 focus-visible:ring-brand-orange focus-visible:outline-none"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="rounded transition-colors hover:text-brand-orange focus-visible:ring-1 focus-visible:ring-brand-orange focus-visible:outline-none"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.registeredOffice || siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/90" suppressHydrationWarning>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="text-xs text-white/90 transition-colors hover:text-brand-orange"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/90 transition-colors hover:text-brand-orange"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-white/90 transition-colors hover:text-brand-orange"
            >
              Cookie Policy
            </Link>
            <Link
              href="/refunds"
              className="text-xs text-white/90 transition-colors hover:text-brand-orange"
            >
              Refund Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
