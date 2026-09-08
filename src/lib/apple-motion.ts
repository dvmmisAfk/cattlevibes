/**
 * Apple Design Fluid Motion & Physics Utilities
 * Distilled from Apple's WWDC "Designing Fluid Interfaces" & "Principles of Great Design".
 */

import type { Transition } from "framer-motion";

export const appleSprings = {
  /**
   * Critically damped default (damping: 1.0, response: 0.35–0.4s).
   * Graceful, settle without bounce or overshoot. Use for general UI transitions,
   * modal entrances, tab switches, and fades.
   */
  criticallyDamped: {
    type: "spring",
    bounce: 0,
    duration: 0.4,
  } as const,

  /**
   * Snappy micro-interaction spring (damping: 1.0, response: 0.28s).
   * For quick toggles, pill expansions, icons, and small chips.
   */
  snappy: {
    type: "spring",
    bounce: 0,
    duration: 0.28,
  } as const,

  /**
   * Momentum spring with controlled physical overshoot (damping: ~0.8, response: 0.4s).
   * Use ONLY when the user's gesture or action carried physical momentum (flicks, swipes, throws).
   */
  momentum: {
    type: "spring",
    bounce: 0.18,
    duration: 0.4,
  } as const,

  /**
   * Sheet, drawer & accordion spring (damping: 0.82, response: 0.35s).
   * Responsive feel for height and sliding panel transitions.
   */
  drawer: {
    type: "spring",
    bounce: 0.1,
    duration: 0.35,
  } as const,

  /**
   * Rotational spring for chevrons, arrows, and indicators.
   * Responsive settle with zero visual jitter.
   */
  rotation: {
    type: "spring",
    bounce: 0.08,
    duration: 0.35,
  } as const,
} satisfies Record<string, Transition>;

/**
 * Apple's exact momentum projection formula from the "Designing Fluid Interfaces" sample code.
 * Projects resting position based on exponential deceleration.
 *
 * @param initialVelocity Gesture release velocity in px/s
 * @param decelerationRate Typically 0.998 for normal scrolling, 0.99 for snappier throw
 */
export function projectMomentum(
  initialVelocity: number,
  decelerationRate = 0.998
): number {
  return (initialVelocity / 1000) * decelerationRate / (1 - decelerationRate);
}

/**
 * Apple's rubber-banding resistance function for boundary overscroll/pull.
 * As overshoot increases, resistance increases progressively instead of stopping hard.
 *
 * @param overshoot Distance dragged past the boundary in px
 * @param dimension Total width or height of the boundary container in px
 * @param constant Apple's standard resistance constant (0.55)
 */
export function rubberband(
  overshoot: number,
  dimension: number,
  constant = 0.55
): number {
  return (
    (overshoot * dimension * constant) /
    (dimension + constant * Math.abs(overshoot))
  );
}

/**
 * Normalizes release velocity to relative velocity required by some spring physics models.
 */
export function relativeVelocity(
  gestureVelocity: number,
  targetValue: number,
  currentValue: number
): number {
  const delta = targetValue - currentValue;
  if (Math.abs(delta) < 0.001) return 0;
  return gestureVelocity / delta;
}
