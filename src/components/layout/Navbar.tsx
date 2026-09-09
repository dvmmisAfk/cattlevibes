"use client";

import { useEffect, useState } from "react";
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

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const isHeroInitial = isHome && !scrolled;

  return (
    <header className="pointer-events-none fixed top-0 z-[100] w-full bg-transparent">
      <div className="pointer-events-auto mx-auto h-(--nav-height) max-w-[1320px] px-5 md:px-10 lg:px-14">
        <PillNav
          logo={images.logo}
          logoAlt={siteConfig.name}
          items={navbarLinks}
          activeHref={activeHrefForPath(pathname)}
          className={`pill-nav--cattlevibes ${isHeroInitial ? "pill-nav--hero-initial" : "pill-nav--scrolled"}`}
          ease="power2.easeOut"
          baseColor="#313841"
          pillColor="#f0f2f5"
          pillTextColor="#313841"
          hoveredPillTextColor="#ffffff"
          initialLoadAnimation={!isHome}
        />
      </div>
    </header>
  );
}
