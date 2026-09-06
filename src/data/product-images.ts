export const productImageMap: Record<string, string[]> = {
  "liver-ok": [
    "/images/products/liver-ok-1.png",
    "/images/products/liver-ok-2.png",
    "/images/products/liver-ok-3.png",
  ],
  "liver-ok-injection": ["/images/products/liver-ok-injection.png"],
  utrovibe: [
    "/images/products/utrovibe-1.png",
    "/images/products/utrovibe-2.png",
    "/images/products/utrovibe-3.png",
  ],
  "rumi-ok-powder": [
    "/images/products/rumi-ok-powder-1.png",
    "/images/products/rumi-ok-powder-2.png",
  ],
  "rumi-ok-bolus": ["/images/products/rumi-ok-bolus.png"],
  cattlespas: ["/images/products/cattlespas.png"],
  "pyrovibe-injection": ["/images/products/pyrovibe-injection.png"],
  "pyrovibe-bolus": ["/images/products/pyrovibe-bolus.png"],
  megluvibe: ["/images/products/megluvibe.png"],
  "cattle-phos": ["/images/products/cattle-phos.png"],
  "cattle-cef": ["/images/products/cattle-cef.png"],
  "cattlecef-sb": ["/images/products/cattlecef-sb.png"],
  "flukevibe-ds": ["/images/products/flukevibe-ds.png"],
  "worms-ok-plus": ["/images/products/worms-ok-plus.png"],
  cattlemin: [
    "/images/products/cattlemin-1.png",
    "/images/products/cattlemin-2.png",
  ],
  cattlestar: [
    "/images/products/cattlestar-1.png",
    "/images/products/cattlestar-2.png",
    "/images/products/cattlestar-3.png",
  ],
  "cattlestar-ds": [
    "/images/products/cattlestar-ds-1.png",
    "/images/products/cattlestar-ds-2.png",
  ],
  "cattlestar-advance-gel": ["/images/products/cattlestar-advance-gel.png"],
};

export function getProductImages(slug: string): string[] {
  return productImageMap[slug] ?? [];
}
