import {
  Droplets,
  Wheat,
  Baby,
  Thermometer,
  Bug,
  TrendingDown,
  Stethoscope,
  TrendingUp,
  Search,
  ClipboardCheck,
  ShieldCheck,
  HeartHandshake,
  ShieldAlert,
  Milk,
} from "lucide-react";

/**
 * Shared icon lookup for homepage-only sections. Keys are plain strings
 * stored in `src/data/site.ts` so data stays framework-agnostic.
 */
export const homeIconMap = {
  digestion: Droplets,
  nutrition: Wheat,
  reproductive: Baby,
  pain: Thermometer,
  parasite: Bug,
  production: TrendingDown,
  health: Stethoscope,
  productivity: TrendingUp,
  identify: Search,
  choose: ClipboardCheck,
  use: ShieldCheck,
  support: HeartHandshake,
  protect: ShieldAlert,
  produce: Milk,
} as const;

export type HomeIconKey = keyof typeof homeIconMap;
