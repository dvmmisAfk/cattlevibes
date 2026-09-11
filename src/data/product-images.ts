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
  cattlespas: [
    "/images/cattlespas.png",
    "/images/cattlespas-box.png",
  ],
  "pyrovibe-injection": ["/images/pyrovibe-injection.png"],
  "pyrovibe-bolus": ["/images/pyrovibe-bolus.png"],
  megluvibe: ["/images/megluvibe.png"],
  "cattle-phos": [
    "/images/cattle-phos-1.png",
    "/images/cattle-phos-2.png",
  ],
  "cattle-cef": ["/images/cattle-cef.png"],
  "cattle-cef-1g": [
    "/images/cattle-cef-1g.png",
    "/images/cattle-cef-1g-box.png",
  ],
  "cattle-cef-3g": ["/images/cattle-cef-3g.png"],
  "cattlecef-sb": ["/images/cattlecef-sb.png"],
  "fendivibe-plus": ["/images/fendivibe-plus.png"],
  "flukevibe-ds": ["/images/flukevibe-ds.png"],
  "worms-ok-plus": ["/images/worms-ok-plus.png"],
  cattlemin: [
    "/images/cattlemin-2.png",
    "/images/cattlemin-bucket.png",
  ],
  "cattlemin-super": [
    "/images/cattlemin-super-1.png",
    "/images/cattlemin-super-2.png",
  ],
  cattlestar: [
    "/images/cattlestar.png",
    "/images/cattlestar-5l.png",
    "/images/cattlestar-2l.png",
  ],
  "cattlestar-ds": [
    "/images/cattlestar-ds-1.png",
  ],
  "cattlestar-gel": ["/images/cattlestar-gel.png"],
  "cattlestar-advance-gel": ["/images/cattlestar-advance-gel.png"],
  "cattlestar-gold": ["/images/cattlestar-gold-1.png?v=20260911"],
};

export function getProductImages(slug: string): string[] {
  return productImageMap[slug] ?? [];
}
