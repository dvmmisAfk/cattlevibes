"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { navLinks, resourceDropdownLinks } from "@/data/site";
import { BrandLogo } from "./BrandLogo";
import { EnquireButton } from "./EnquireButton";

interface MobileNavbarProps {
  open: boolean;
  onClose: () => void;
}

const mobileDropdowns: Record<string, { label: string; href: string }[]> = {
  Resources: resourceDropdownLinks,
};

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNavbar({ open, onClose }: MobileNavbarProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div
        className="absolute inset-0 bg-deep-navy/30"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute right-0 top-0 flex h-full w-[min(340px,88vw)] flex-col bg-white shadow-xl">
        <div className="flex h-[72px] items-center justify-between border-b border-border px-5">
          <Link
            href="/"
            onClick={onClose}
            className="flex h-14 items-center"
            aria-label="CattleVibes Healthcare home"
          >
            <BrandLogo />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-primary-navy"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-4">
          {navLinks.map((link) => {
            const active = isNavActive(pathname, link.href);
            const subItems = mobileDropdowns[link.label];

            if (subItems) {
              const isExpanded = expanded === link.label;
              return (
                <div key={link.href} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(isExpanded ? null : link.label)
                    }
                    className={`flex w-full items-center justify-between py-4 text-base font-medium transition-colors ${
                      active ? "text-brand-orange" : "text-primary-navy"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="pb-3 pl-3">
                      {subItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={onClose}
                          className="block py-2 text-sm text-text-muted transition-colors hover:text-brand-orange"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`block border-b border-border py-4 text-base font-medium transition-colors ${
                  active
                    ? "text-brand-orange"
                    : "text-primary-navy hover:text-brand-orange"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border p-5">
          <EnquireButton className="flex w-full justify-center" />
        </div>
      </div>
    </div>
  );
}
