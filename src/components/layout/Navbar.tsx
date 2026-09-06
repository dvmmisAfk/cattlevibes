"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Search, ChevronDown, Menu } from "lucide-react";
import { navLinks, resourceDropdownLinks } from "@/data/site";
import { BrandLogo } from "./BrandLogo";
import { EnquireButton } from "./EnquireButton";
import { MobileNavbar } from "./MobileNavbar";

const dropdownLinks: Record<string, { label: string; href: string }[]> = {
  Resources: resourceDropdownLinks,
};

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavItem({
  label,
  href,
  hasDropdown,
  isActive,
}: {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-[10px] px-3 py-1.5 text-[15px] font-medium transition-all duration-200 xl:px-4 xl:text-base ${
        isActive
          ? "border-[1.5px] border-brand-orange bg-white/90 text-primary-navy shadow-[0_1px_3px_rgba(58,71,80,0.06)] backdrop-blur-sm"
          : "border-[1.5px] border-transparent text-primary-navy hover:border-brand-orange/40 hover:text-brand-orange"
      }`}
    >
      {label}
      {hasDropdown && (
        <ChevronDown className="h-3.5 w-3.5 opacity-70" strokeWidth={2} />
      )}
    </Link>
  );
}

function NavDropdown({
  label,
  href,
  items,
  isActive,
}: {
  label: string;
  href: string;
  items: { label: string; href: string }[];
  isActive: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavItem label={label} href={href} hasDropdown isActive={isActive} />
      {open && (
        <div className="absolute left-0 top-full z-50 pt-2">
          <div className="min-w-[220px] rounded-[14px] border border-white/60 bg-white/90 py-1.5 shadow-[0_8px_24px_rgba(58,71,80,0.1)] backdrop-blur-md">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2.5 text-sm font-medium text-primary-navy transition-colors duration-200 hover:bg-warm-cream hover:text-brand-orange"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`nav-frosted fixed top-0 z-[100] w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-white/50 bg-white/85 shadow-[0_4px_20px_rgba(58,71,80,0.08)] backdrop-blur-lg backdrop-saturate-150"
            : "border-white/40 bg-white/70 shadow-[0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md backdrop-saturate-150"
        }`}
      >
        <div className="mx-auto grid h-(--nav-height) max-w-[1320px] grid-cols-[auto_1fr_auto] items-center gap-4 px-6 md:px-10 lg:grid-cols-[1fr_auto_1fr] lg:px-14">
          <Link
            href="/"
            className="flex h-[72px] shrink-0 items-center justify-self-start md:h-[84px]"
            aria-label="CattleVibes Healthcare home"
          >
            <BrandLogo priority className="max-h-full" />
          </Link>

          {/* Center navigation — grid column prevents overlap with logo/CTA */}
          <nav className="hidden items-center justify-center gap-0.5 justify-self-center lg:flex xl:gap-1">
            {navLinks.map((link) => {
              const active = isNavActive(pathname, link.href);
              const dropdownItems = dropdownLinks[link.label];

              if (dropdownItems) {
                return (
                  <NavDropdown
                    key={link.href}
                    label={link.label}
                    href={link.href}
                    items={dropdownItems}
                    isActive={active}
                  />
                );
              }

              return (
                <NavItem
                  key={link.href}
                  label={link.label}
                  href={link.href}
                  isActive={active}
                />
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 justify-self-end md:gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden p-1 text-primary-navy transition-colors duration-200 hover:text-brand-orange md:flex"
              aria-label="Search products"
            >
              <Search className="h-5 w-5" strokeWidth={1.75} />
            </button>
            <EnquireButton className="hidden sm:inline-flex" />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 text-primary-navy lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" strokeWidth={1.75} />
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-white/40 bg-white/80 px-6 py-4 backdrop-blur-md md:px-10 lg:px-14">
            <form action="/products" method="get" className="mx-auto max-w-xl">
              <input
                type="search"
                name="q"
                placeholder="Search products..."
                className="w-full rounded-xl border border-border px-4 py-3 text-sm text-primary-navy outline-none focus:border-brand-orange"
                autoFocus
              />
            </form>
          </div>
        )}
      </header>

      <MobileNavbar open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
