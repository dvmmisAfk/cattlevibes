"use client";

import React, {
  useRef,
  useCallback,
  useLayoutEffect,
  useEffect,
  ReactNode,
} from "react";
import "./ScrollStack.css";

// SSR-safe layout effect for Next.js
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
  style?: React.CSSProperties;
  index?: number;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
  style,
  index = 0,
}) => (
  <div className="scroll-stack-card-wrapper" data-stack-index={index}>
    <div
      style={style}
      className={`scroll-stack-card ${itemClassName}`.trim()}
    >
      {children}
    </div>
  </div>
);

export interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  baseScale?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 70,
  itemScale = 0.024,
  itemStackDistance = 40,
  stackPosition = "12%",
  baseScale = 0.9,
  useWindowScroll = true,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const wrappersRef = useRef<HTMLElement[]>([]);
  const cardsRef = useRef<HTMLElement[]>([]);
  const cardTopsRef = useRef<number[]>([]);
  const lastTransformsRef = useRef<string[]>([]);
  const stackCompletedRef = useRef<boolean>(false);
  const isUpdatingRef = useRef<boolean>(false);

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (scrollTop <= start) return 0;
      if (scrollTop >= end) return 1;
      return (scrollTop - start) / (end - start);
    },
    []
  );

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * containerHeight;
      }
      return typeof value === "number" ? value : parseFloat(value);
    },
    []
  );

  // Measure document offset of each wrapper (wrappers have NO transform applied, so their offsets are 100% stable)
  const measureLayout = useCallback(() => {
    if (!wrappersRef.current.length) return;

    cardTopsRef.current = wrappersRef.current.map((wrapper) => {
      let top = 0;
      let el: HTMLElement | null = wrapper;
      while (el) {
        top += el.offsetTop || 0;
        el = el.offsetParent as HTMLElement | null;
      }
      return top;
    });

    // Dynamically calibrate inner container bottom padding so the next section
    // arrives EXACTLY at the desired gap below Card 6 at the moment the stack releases
    if (innerRef.current) {
      const isMobile = window.innerWidth < 1024;
      const holdDistance = isMobile ? 140 : 240;
      const desiredGap = isMobile ? 32 : 48;
      const paddingBottom = holdDistance + desiredGap;
      innerRef.current.style.paddingBottom = `${paddingBottom}px`;
    }
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const isMobile = window.innerWidth < 1024;
    const isSmallPhone = window.innerWidth < 640;

    // Responsive stack offsets calibrated to match tab header heights
    // Desktop tab bar is 40px, mobile tab bar is 34px
    const effectiveStackDistance = isSmallPhone
      ? 32
      : isMobile
      ? 34
      : itemStackDistance;

    const effectiveStackPosition = isSmallPhone
      ? "8%"
      : isMobile
      ? "10%"
      : stackPosition;

    const stackPositionPx = parsePercentage(effectiveStackPosition, containerHeight);
    const cardTops = cardTopsRef.current;
    const n = cardsRef.current.length;

    if (!cardTops.length) {
      isUpdatingRef.current = false;
      return;
    }

    // Pin starts for each card
    const pinStarts = cardTops.map(
      (top, i) => top - stackPositionPx - effectiveStackDistance * i
    );

    // Duration the completed stack stays pinned before smoothly scrolling away together
    const holdDistance = isMobile ? 140 : 240;
    const lastCardPinStart = pinStarts[n - 1];
    const pinEnd = lastCardPinStart + holdDistance;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const cardTop = cardTops[i] ?? 0;
      const pinStart = pinStarts[i];

      // Smooth progressive Apple-style scale down as each subsequent card stacks on top
      // The last card (front of the deck) remains at full scale (1.0)
      let scale = 1;
      if (i < n - 1) {
        const scaleRange = Math.min(260, Math.max(140, containerHeight * 0.22));
        const scaleProgress = calculateProgress(scrollTop, pinStart, pinStart + scaleRange);
        // Smooth ease-out quad curve
        const eased = scaleProgress * (2 - scaleProgress);
        const targetScale = baseScale + i * itemScale;
        scale = 1 - eased * (1 - targetScale);
      }

      // Vertical translation pinning mechanics
      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        // Active pin state: follow scroll to remain anchored in deck
        translateY = scrollTop - cardTop + stackPositionPx + effectiveStackDistance * i;
      } else if (scrollTop > pinEnd) {
        // Released state: freeze translateY at release position so all cards scroll away together
        translateY = pinEnd - cardTop + stackPositionPx + effectiveStackDistance * i;
      }

      const roundedY = Math.round(translateY * 10) / 10;
      const roundedScale = Math.round(scale * 1000) / 1000;
      const newTransform = `translate3d(0, ${roundedY}px, 0) scale(${roundedScale})`;

      // Change detection cache prevents unnecessary DOM reflows and eliminates laptop jitter
      if (lastTransformsRef.current[i] !== newTransform) {
        card.style.transform = newTransform;
        lastTransformsRef.current[i] = newTransform;
      }

      // Trigger completion callback when the 6th card pins
      if (i === n - 1) {
        if (scrollTop >= pinStart && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (scrollTop < pinStart && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    baseScale,
    onStackComplete,
    calculateProgress,
    parsePercentage,
  ]);

  useIsomorphicLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller && !useWindowScroll) return;

    const wrappers = Array.from(
      scroller?.querySelectorAll<HTMLElement>(".scroll-stack-card-wrapper") ??
        document.querySelectorAll<HTMLElement>(".scroll-stack-card-wrapper")
    );
    const cards = wrappers.map(
      (w) => w.querySelector<HTMLElement>(".scroll-stack-card")!
    ).filter(Boolean);

    wrappersRef.current = wrappers;
    cardsRef.current = cards;
    lastTransformsRef.current = new Array(cards.length).fill("");

    // Apply layout margins and z-index to ensure correct card layering
    const isMobile = window.innerWidth < 1024;
    const effectiveItemDistance = isMobile ? 50 : itemDistance;

    wrappers.forEach((wrapper, i) => {
      wrapper.style.zIndex = `${i + 1}`;
      if (i < wrappers.length - 1) {
        wrapper.style.marginBottom = `${effectiveItemDistance}px`;
      } else {
        wrapper.style.marginBottom = "0px";
      }
    });

    // Measure layout and apply initial transforms
    measureLayout();
    updateCardTransforms();

    const handleScroll = () => {
      updateCardTransforms();
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      const dist = mobile ? 50 : itemDistance;
      wrappers.forEach((wrapper, i) => {
        if (i < wrappers.length - 1) {
          wrapper.style.marginBottom = `${dist}px`;
        } else {
          wrapper.style.marginBottom = "0px";
        }
      });
      measureLayout();
      updateCardTransforms();
    };

    // Synchronize directly with root Lenis instance for 60/120fps smooth wheel scrolling
    const globalLenis =
      typeof window !== "undefined"
        ? (
            window as unknown as {
              __lenis?: {
                on: (event: string, cb: () => void) => void;
                off: (event: string, cb: () => void) => void;
              };
            }
          ).__lenis
        : undefined;

    if (globalLenis) {
      globalLenis.on("scroll", handleScroll);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // ResizeObserver watches inner container to re-measure if images load or layout reflows
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && innerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        measureLayout();
        updateCardTransforms();
      });
      resizeObserver.observe(innerRef.current);
    }

    // Safety timeout for any late-loading image dimensions
    const timer = setTimeout(() => {
      measureLayout();
      updateCardTransforms();
    }, 150);

    return () => {
      clearTimeout(timer);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (globalLenis) {
        globalLenis.off("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      cardsRef.current.forEach((card) => {
        card.style.transform = "";
      });
      wrappersRef.current.forEach((w) => {
        w.style.marginBottom = "";
        w.style.zIndex = "";
      });
      cardTopsRef.current = [];
      cardsRef.current = [];
      wrappersRef.current = [];
      lastTransformsRef.current = [];
      stackCompletedRef.current = false;
    };
  }, [
    useWindowScroll,
    itemDistance,
    measureLayout,
    updateCardTransforms,
  ]);

  // Inject index to children
  const indexedChildren = React.Children.map(children, (child, idx) => {
    if (React.isValidElement<{ index?: number }>(child)) {
      return React.cloneElement(child, {
        index: child.props.index ?? idx,
      });
    }
    return child;
  });

  return (
    <div
      className={`scroll-stack-scroller ${className}`.trim()}
      ref={scrollerRef}
      data-use-window-scroll={useWindowScroll ? "true" : "false"}
    >
      <div className="scroll-stack-inner" ref={innerRef}>
        {indexedChildren}
      </div>
    </div>
  );
};

export default ScrollStack;
