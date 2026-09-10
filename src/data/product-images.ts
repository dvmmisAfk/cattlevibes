export const productImageMap: Record<string, string[]> = {
  "liver-ok": [
    "/images/liver-ok-1.png",
    "/images/liver-ok-2.png",
    "/images/liver-ok-3.png",
  ],
  "liver-ok-injection": [
    "/images/liver-ok-injection-1.png",
    "/images/liver-ok-injection-2.png",
    "/images/liver-ok-injection-3.png",
  ],
  utrovibe: [
    "/images/utrovibe-1.png",
    "/images/utrovibe-2.png",
    "/images/utrovibe-3.png",
  ],
  "rumi-ok-powder": [
    "/images/rumi-ok-powder-1.png",
    "/images/rumi-ok-powder-2.png",
  ],
  "rumi-ok-bolus": ["/images/rumi-ok-bolus.png"],
  cattlespas: ["/images/cattlespas.png"],
  "pyrovibe-injection": ["/images/pyrovibe-injection.png"],
  "pyrovibe-bolus": ["/images/pyrovibe-bolus.png"],
  megluvibe: ["/images/megluvibe.png"],
  "cattle-phos": [
    "/images/cattle-phos-1.png",
    "/images/cattle-phos-2.png",
  ],
  "cattle-cef": ["/images/cattle-cef.png"],
  "cattlecef-sb": ["/images/cattlecef-sb.png"],
  "fendivibe-plus": ["/images/fendivibe-plus.png"],
  "flukevibe-ds": ["/images/flukevibe-ds.png"],
  "worms-ok-plus": ["/images/worms-ok-plus.png"],
  cattlemin: [
    "/images/cattlemin-1.png",
    "/images/cattlemin-2.png",
  ],
  cattlestar: [
    "/images/cattlestar-1.png",
    "/images/cattlestar-2.png",
    "/images/cattlestar-3.png",
  ],
  "cattlestar-ds": [
    "/images/cattlestar-ds-1.png",
    "/images/cattlestar-ds-2.png",
  ],
  "cattlestar-gel": ["/images/cattlestar-gel.png"],
  "cattlestar-advance-gel": ["/images/cattlestar-advance-gel.png"],
  "cattlestar-gold": ["/images/cattlestar-gold-1.png"],
};

export function getProductImages(slug: string): string[] {
  return productImageMap[slug] ?? [];
}
