"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, Phone, Mail } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { siteConfig } from "@/data/site";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Our Products", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-border/80 py-3"
            : "bg-white/80 backdrop-blur-xs border-b border-border/40 py-4"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
          {/* Logo & Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3 touch-manipulation active:scale-[0.98] transition-transform"
            aria-label="CattleVibes Healthcare Home"
          >
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-midnight-navy p-1 transition-transform group-hover:scale-105">
              <BrandLogo priority />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-extrabold tracking-tight text-midnight-navy">
                Cattle Vibes
              </span>
              <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-harvest-amber uppercase">
                HEALTHCARE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 rounded-full bg-light-pebble/80 p-1.5 ring-1 ring-border/60 lg:flex"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
                    active
                      ? "text-midnight-navy"
                      : "text-cadet-blue hover:text-midnight-navy"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-white shadow-xs"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-harvest-amber" />
                    )}
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Enquire Now & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="group hidden sm:inline-flex items-center gap-2.5 rounded-full bg-midnight-navy px-5 py-2.5 text-sm font-semibold text-white shadow-xs touch-manipulation active:scale-[0.97] transition-all hover:bg-midnight-navy/90 hover:shadow-md"
            >
              <span>Enquire Now</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-harvest-amber text-midnight-navy transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
              </span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-midnight-navy touch-manipulation active:scale-95 lg:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" strokeWidth={2} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-midnight-navy/40 backdrop-blur-xs lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-sm flex-col bg-white p-6 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-md bg-midnight-navy p-1">
                    <BrandLogo />
                  </div>
                  <span className="font-heading font-bold text-midnight-navy">
                    Cattle Vibes
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg p-2 text-cadet-blue hover:bg-pebble"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                        active
                          ? "bg-warm-ivory text-harvest-amber font-bold"
                          : "text-midnight-navy hover:bg-light-pebble"
                      }`}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span className="h-2 w-2 rounded-full bg-harvest-amber" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto border-t border-border pt-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-harvest-amber py-3.5 text-sm font-bold text-white shadow-xs touch-manipulation active:scale-[0.98]"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>

                <div className="mt-6 space-y-2 text-xs text-cadet-blue">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-2 hover:text-midnight-navy"
                  >
                    <Phone className="h-3.5 w-3.5 text-harvest-amber" />
                    <span>{siteConfig.phone}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 hover:text-midnight-navy"
                  >
                    <Mail className="h-3.5 w-3.5 text-harvest-amber" />
                    <span>{siteConfig.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

