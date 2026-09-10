"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { images, navLinks, siteConfig } from "@/data/site";
import PillNav from "./PillNav";

const navbarLinks = navLinks.filter((link) => link.href !== "/contact");

function activeHrefForPath(pathname: string) {
  if (pathname === "/") return "/";
  const match = navbarLinks
    .filter((link) => link.href !== "/")
    .find(
      (link) => pathname === link.href || pathname.startsWith(`${link.href}/`),
    );
  return match?.href;
}

const darkHeroRoutes = ["/", "/about", "/solutions", "/resources", "/contact"];

function isElementDark(el: Element): boolean {
  // 1. Explicit theme markers
  const themed = el.closest("[data-theme]");
  if (themed) {
    return themed.getAttribute("data-theme") === "dark";
  }

  // 2. Class check on element or parent hierarchy
  let curr: Element | null = el;
  while (curr && curr !== document.body && curr !== document.documentElement) {
    const cls = typeof curr.className === "string" ? curr.className : "";
    if (
      cls.includes("bg-deep-navy") ||
      cls.includes("bg-[#313841]") ||
      cls.includes("bg-primary-navy") ||
      cls.includes("bg-black") ||
      cls.includes("dark-section")
    ) {
      return true;
    }
    if (
      cls.includes("bg-white") ||
      cls.includes("bg-soft-white") ||
      cls.includes("bg-[#f6f3ec]") ||
      cls.includes("bg-[#fafafa]") ||
      cls.includes("bg-[#eef0f0]") ||
      cls.includes("bg-[#f7f5f0]") ||
      cls.includes("bg-[#f3f1ec]")
    ) {
      return false;
    }

    // Computed background color check
    const bg = window.getComputedStyle(curr).backgroundColor;
    if (bg && bg !== "transparent" && !bg.startsWith("rgba(0, 0, 0, 0)")) {
      const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (match) {
        const a = match[4] !== undefined ? parseFloat(match[4]) : 1;
        if (a > 0.4) {
          const r = parseInt(match[1], 10);
          const g = parseInt(match[2], 10);
          const b = parseInt(match[3], 10);
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          return brightness < 130;
        }
      }
    }

    curr = curr.parentElement;
  }

  return false;
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  // Initial state: routes with dark heroes start dark, others start light
  const [isDark, setIsDark] = useState(() => darkHeroRoutes.includes(pathname));

  const checkTheme = useCallback(() => {
    if (!logoRef.current) return;
    const rect = logoRef.current.getBoundingClientRect();
    const x = Math.max(10, Math.min(rect.left + rect.width / 2, window.innerWidth - 10));
    const y = Math.max(10, Math.min(rect.top + rect.height / 2, window.innerHeight - 10));

    const elements = document.elementsFromPoint(x, y);
    for (const el of elements) {
      if (el.closest("header") || el.tagName.toLowerCase() === "header") {
        continue;
      }
      setIsDark(isElementDark(el));
      return;
    }

    // Fallback if not intersecting any content element
    if (darkHeroRoutes.includes(pathname)) {
      setIsDark(window.scrollY < 400);
    } else {
      setIsDark(false);
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let rafId: number | null = null;
    const onScrollOrFrame = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        checkTheme();
      });
    };

    // Run theme check immediately and on next frame
    checkTheme();
    const timer = setTimeout(checkTheme, 60);

    window.addEventListener("scroll", onScrollOrFrame, { passive: true });
    window.addEventListener("resize", onScrollOrFrame, { passive: true });

    // Global Lenis smooth scroll listener interop
    const lenis = (window as unknown as {
      __lenis?: {
        on: (event: string, callback: () => void) => void;
        off: (event: string, callback: () => void) => void;
      };
    }).__lenis;

    if (lenis) {
      lenis.on("scroll", onScrollOrFrame);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(timer);
      window.removeEventListener("scroll", onScrollOrFrame);
      window.removeEventListener("resize", onScrollOrFrame);
      if (lenis) {
        lenis.off("scroll", onScrollOrFrame);
      }
    };
  }, [pathname, checkTheme]);

  const isHeroInitial = isHome && !scrolled;

  return (
    <header className="pointer-events-none fixed top-0 z-[100] w-full bg-transparent">
      {/* ─── Floating Brand Logo (No box/glass background, enlarged, dark/white adaptive crossfade) ─── */}
      <Link
        href="/"
        ref={logoRef}
        aria-label="CattleVibes Healthcare home"
        className="nav-logo-link group"
      >
        <div className="nav-logo-inner">
          {/* Dark Original Logo (Navy cow/dog + brand orange accents) */}
          <Image
            src={images.logo}
            alt={siteConfig.name}
            width={479}
            height={449}
            priority
            unoptimized
            className={`nav-logo-img nav-logo-img--default ${
              isDark ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          />
          {/* Whitish Logo (Pure white cow/dog + brand orange accents) */}
          <Image
            src={images.logoWhite}
            alt=""
            aria-hidden="true"
            width={479}
            height={449}
            priority
            unoptimized
            className={`nav-logo-img nav-logo-img--white ${
              isDark ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        </div>
      </Link>

      <div className="pointer-events-auto mx-auto h-(--nav-height) max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <PillNav
          logo={images.logo}
          logoAlt={siteConfig.name}
          items={navbarLinks}
          activeHref={activeHrefForPath(pathname)}
          className={`pill-nav--cattlevibes ${isHeroInitial ? "pill-nav--hero-initial" : "pill-nav--scrolled"}`}
          ease="power2.easeOut"
          baseColor="#313841"
          pillColor="#ffffff"
          pillTextColor="#313841"
          hoveredPillTextColor="#ffffff"
          initialLoadAnimation={!isHome}
        />
      </div>
    </header>
  );
}
