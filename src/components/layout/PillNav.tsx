import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import "./PillNav.css";

export interface PillNavItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
  endSlot?: ReactNode;
}

export default function PillNav({
  logo,
  logoAlt = "Logo",
  items,
  activeHref,
  className = "",
  ease = "power3.easeOut",
  baseColor = "#fff",
  pillColor = "#120F17",
  hoveredPillTextColor = "#120F17",
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
  endSlot,
}: PillNavProps) {
  const pathname = usePathname();
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRefs = useRef<(gsap.core.Timeline | null)[]>([]);
  const activeTweenRefs = useRef<(gsap.core.Tween | null)[]>([]);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: "hidden", opacity: 0 });
    }
    const hamburger = hamburgerRef.current;
    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line");
      gsap.set(lines, { rotation: 0, y: 0 });
    }
  }, [pathname]);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        if (w === 0 || h === 0) return;

        const R = (w * w) / 4 / h + h / 2;
        const D = Math.ceil(2 * R) + 2;
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector(".pill-label");
        const white = pill.querySelector(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" },
          0,
        );

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(
            white,
            { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" },
            0,
          );
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: "hidden", opacity: 0, scaleY: 1 });
    }

    if (initialLoadAnimation) {
      const logoEl = logoRef.current;
      const navItems = navItemsRef.current;

      if (logoEl) {
        gsap.set(logoEl, { scale: 0 });
        gsap.to(logoEl, {
          scale: 1,
          duration: 0.6,
          ease,
        });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: "hidden" });
        gsap.to(navItems, {
          width: "auto",
          duration: 0.6,
          ease,
        });
      }
    }

    return () => window.removeEventListener("resize", onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { scale: 1 });
    logoTweenRef.current = gsap.to(img, {
      scale: 1.04,
      duration: 0.25,
      ease,
      yoyo: true,
      repeat: 1,
      overwrite: "auto",
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line");
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: "top center",
          },
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          ease,
          transformOrigin: "top center",
          onComplete: () => {
            gsap.set(menu, { visibility: "hidden" });
          },
        });
      }
    }

    onMobileMenuClick?.();
  };

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: resolvedPillTextColor,
  } as React.CSSProperties;

  const renderEnquire = () => {
    const i = items.length;
    return (
      <Link
        href="/contact"
        className={`pill pill-enquire${pathname === "/contact" ? " is-active" : ""}`}
        aria-label="Enquire now"
        onMouseEnter={() => handleEnter(i)}
        onMouseLeave={() => handleLeave(i)}
      >
        <span
          className="hover-circle"
          aria-hidden="true"
          ref={(el) => {
            circleRefs.current[i] = el;
          }}
        />
        <span className="label-stack">
          <span className="pill-label">Enquire Now</span>
          <span className="pill-label-hover" aria-hidden="true">
            Enquire Now
          </span>
        </span>
        <span className="pill-enquire-icon" aria-hidden="true">
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
      </Link>
    );
  };

  const renderPill = (item: PillNavItem, i: number) => (
    <Link
      role="menuitem"
      href={item.href}
      className={`pill${activeHref === item.href ? " is-active" : ""}`}
      aria-label={item.ariaLabel || item.label}
      onMouseEnter={() => handleEnter(i)}
      onMouseLeave={() => handleLeave(i)}
    >
      <span
        className="hover-circle"
        aria-hidden="true"
        ref={(el) => {
          circleRefs.current[i] = el;
        }}
      />
      <span className="label-stack">
        <span className="pill-label">{item.label}</span>
        <span className="pill-label-hover" aria-hidden="true">
          {item.label}
        </span>
      </span>
    </Link>
  );

  return (
    <div className="pill-nav-container">
      <nav
        className={`pill-nav ${className}`}
        aria-label="Primary"
        style={cssVars}
      >
        <Link
          className="pill-logo"
          href="/"
          aria-label="CattleVibes Healthcare home"
          onMouseEnter={handleLogoEnter}
          ref={(el) => {
            logoRef.current = el;
          }}
        >
          <img src={logo} alt={logoAlt} ref={logoImgRef} />
        </Link>

        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => (
              <li key={item.href || `item-${i}`} role="none">
                {renderPill(item, i)}
              </li>
            ))}
          </ul>
        </div>

        <div className="pill-nav-end">
          {renderEnquire()}
          {endSlot}
          <button
            className="mobile-menu-button mobile-only"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            ref={hamburgerRef}
            type="button"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </nav>

      <div
        className="mobile-menu-popover mobile-only"
        ref={mobileMenuRef}
        style={cssVars}
      >
        <ul className="mobile-menu-list">
          {items.map((item, i) => (
            <li key={item.href || `mobile-item-${i}`}>
              <Link
                href={item.href}
                className={`mobile-menu-link${activeHref === item.href ? " is-active" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={`mobile-menu-link${pathname === "/contact" ? " is-active" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enquire Now
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
