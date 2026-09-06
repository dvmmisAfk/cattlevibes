# Cattle Vibes Healthcare — Website

Premium responsive website for **Cattle Vibes Healthcare Pvt. Ltd.**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/solutions` | Solutions |
| `/products` | Products Catalogue |
| `/products/[slug]` | Product Detail |
| `/resources` | Resources |
| `/contact` | Contact / Enquiry |

## Hero Video

Place your pastoral hero video files at:

- `public/videos/hero-pastoral.mp4`
- `public/videos/hero-pastoral.webm`

The hero uses a static poster image (Unsplash) until video files are added. With `prefers-reduced-motion`, video is disabled automatically.

## Product Catalogue

Product data lives in `src/data/products.ts`. Update with official brochure content for composition, dosage, and indications.

## Build

```bash
npm run build
npm start
```
