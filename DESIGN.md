# Cattle Vibes Healthcare — Complete Design System, Structure & Wireflow

**Document purpose:** A single source of truth for rebuilding the Cattlevibes marketing website exactly — visually, structurally, and in user flow. If a designer or engineer has only this file, they should be able to recreate the live site.

**Product:** Cattle Vibes Healthcare Pvt. Ltd. (brand short name: **Cattlevibes**)  
**Tagline:** Complete Animal Healthcare Solutions  
**Site type:** Marketing + product catalogue (veterinary medicines and nutritional supplements for livestock)  
**Stack (as implemented):** Next.js App Router, React, Tailwind CSS v4, Framer Motion, Lucide icons  
**Canonical content width:** `1320px` max, horizontal padding `20px` (`px-5`) on small screens and `32px` (`lg:px-8`) from large screens up. Navbar uses slightly wider padding (`px-6` / `md:px-10` / `lg:px-14`).

---

## Table of contents

1. [Brand & atmosphere](#1-brand--atmosphere)
2. [Color system](#2-color-system)
3. [Typography](#3-typography)
4. [Layout, spacing & geometry](#4-layout-spacing--geometry)
5. [Motion & interaction](#5-motion--interaction)
6. [Global chrome](#6-global-chrome)
7. [Component inventory](#7-component-inventory)
8. [Sitemap & information architecture](#8-sitemap--information-architecture)
9. [User wireflows](#9-user-wireflows)
10. [Page specifications](#10-page-specifications)
11. [Product data model & catalogue](#11-product-data-model--catalogue)
12. [Media, audio & accessibility](#12-media-audio--accessibility)
13. [Responsive rules](#13-responsive-rules)
14. [Replication checklist](#14-replication-checklist)

---

## 1. Brand & atmosphere

**Mood:** Pastoral, professional, warm, veterinary-grade. Not clinical-sterile, not rustic-folksy. Think “modern agri-healthcare”: sunlit livestock photography, calm navy type, and a single warm Yam orange as the accent.

**Density:** Airy. Large section padding (`64px` mobile → `96px` tablet → `128px` desktop). Cards have generous internal padding (`24–40px`). Headlines are large and extra-bold; body copy is readable, never cramped.

**Photography language:** Golden-hour pastures, cattle/buffalo, wide landscapes. Overlays are deep slate-navy at 70–80% on cinematic CTAs; interior pages use a bottom-weighted navy gradient on photo heroes.

**Voice:** Confident, educational, veterinary-responsible. Never claim human use. Always imply “under veterinary guidance.” Product pages defer full dosage/composition to the official catalogue.

**Do not:** Use harsh reds, neon greens, black-on-black luxury styling, or dense dashboard UI. Do not add a shopping cart. This is enquiry-led, not ecommerce.

---

## 2. Color system

Palette names in code comments: **Pebble / Yam / Cadet Blue / High Tide**.

| Token (code) | Descriptive name | Hex | Role |
|---|---|---|---|
| `--deep-navy` | High Tide | `#313841` | Primary surfaces for contrast (footer, dark sections, primary buttons, logo mark). Headlines on light backgrounds. |
| `--primary-navy` | Cadet Blue | `#3a4750` | Navigation text, secondary borders, body-adjacent UI. |
| `--text-primary` | Cadet Blue (body) | `#3a4750` | Default body text. |
| `--text-muted` | Soft Cadet | `#58636a` | Subtitles, captions, supporting copy. |
| `--brand-orange` | Yam | `#ea9216` | Accent: eyebrows, icons, active states, arrows on primary buttons, dark-section CTAs, focus rings. |
| `--warm-orange` | Light Yam | `#efad50` | Reserved lighter accent (available; used sparingly). |
| `--warm-cream` | Pebble | `#eeeeee` | Alternate section backgrounds, form well, product image wells. |
| `--soft-white` | Light Pebble | `#f7f7f7` | Page canvas / body background, soft card fills. |
| `--pure-white` | White | `#ffffff` | Cards, forms, nav glass mix, button text on dark. |
| `--border` | Cool pebble line | `#d8dadb` | Hairline borders on cards, inputs, FAQ, filters. |

**Functional rules**

- Eyebrows (small uppercase labels) are always Yam (`#ea9216`), extra-bold, tracked out.
- Headlines on light: High Tide (`#313841`). Headlines on dark: white.
- Primary filled button fill is High Tide; the trailing arrow is Yam.
- On dark navy sections, the *primary* CTA inverts: Yam fill, white text (Final CTA, navy CTASection).
- Selection highlight: Yam at 20% opacity; selected text High Tide.
- Focus-visible: 2px Yam outline, 2px offset.

**Section background rhythm (home)**

Alternate so the page breathes: video hero → white → soft-white → white → pebble cream → white → High Tide → soft-white → white (FAQ) → photo+navy CTA.

**Section background rhythm (inner pages)**

Cream or white page intro, then alternating white / cream / soft-white. Solutions “by animal” block is full High Tide.

---

## 3. Typography

**Heading font:** Manrope (Google Fonts), weights 400, 500, 600, 700, 800. Applied to all `h1–h6` and to extra-bold marketing headlines.

**Body font:** Inter (Google Fonts), weights 400, 500, 600. Applied to `body`, UI labels, form fields, nav.

**Scale (as implemented)**

| Role | Size | Weight | Tracking | Line height |
|---|---|---|---|---|
| Hero H1 | 38px → 48px (`md`) → 72px (`lg`) | 800 extra-bold | tight | 1.15 / 1.1 |
| Page H1 (inner) | 30px → 48px / 60px | 700–800 | normal | tight |
| Section H2 | 30px → 36px → 44px | 700 | normal | tight |
| Card / step H3 | 18–28px | 700–800 | normal | snug |
| Body | 16px, 18px on large | 400–600 | normal | relaxed (~1.6) |
| Eyebrow | 11–12px | 700–800 | 0.15–0.2em | — |
| Caption / chip | 11–12px | 600–700 | wider on uppercase | — |
| Nav item | 15px (`xl`: 16px) | 500 | normal | — |

**Hero home copy (exact)**

- Eyebrow: `COMPLETE ANIMAL HEALTHCARE SOLUTIONS`
- H1 line 1: `Healthcare that keeps`
- H1 line 2: `livestock moving` + orange word `forward.`
- Lead: `Complete animal healthcare solutions for healthier livestock, stronger productivity and better farm outcomes.`
- Support: `Cattlevibes Healthcare brings together veterinary medicines and nutritional solutions designed around critical livestock health and production needs.`

**Hero feature chips (exact labels):** Digestion · Nutrition · Reproductive Health · Pain & Inflammation · Parasite Control

**Accent word rule:** In the home hero, only `forward.` is Yam. Everywhere else, full headlines stay High Tide unless the section is on a dark ground.

---

## 4. Layout, spacing & geometry

**Grid**

- Page content: CSS max-width `1320px`, centered.
- Common product grids: 1 col → 2 (`sm`) → 3 (`lg`).
- Problem cards: 1 → 2 (`sm`) → 4 (`lg`).
- Brand pillars: 1 → 3 (`md`).
- Animal cards: 2 → 3 (`sm`) → 5 (`lg`).
- Solutions editorial: 1 col stacked, 2 col from `lg` with alternating image/text (odd rows reverse via RTL trick).

**Vertical padding**

- Standard section: `py-16` (64px) / `md:py-24` (96px) / often `lg:py-32` (128px).
- Inner-page offset for fixed nav: `pt-[72px]` (72px) so content clears the 64–68px bar.

**Corner radii (physical language)**

| Token | Meaning | Use |
|---|---|---|
| `rounded-lg` (~8px) | Subtle | Logo mark, small chips |
| `rounded-xl` (12px) | Soft rectangle | Buttons, inputs, selects, enquire inner circle sits in a pill |
| `rounded-[10px]` | Nav item | Active/hover outline on nav links |
| `rounded-[14px]` | Dropdown panel | Nav mega/simple menus |
| `rounded-2xl` (16px) | Comfortable | Icon wells, lifecycle stage cards |
| `rounded-[18px]` | Product/problem cards | Catalogue cards, proof cards, animal cards |
| `rounded-[20px]` | Forms & FAQ | Enquiry form, FAQ shell, product info panel |
| `rounded-[24px]` | Editorial media | Solution photos, catalogue download well, lifecycle photo |
| `rounded-full` | Pill | Enquire Now, feature chips, carousel arrows, product tags, mute control |

**Elevation**

- Default cards: 1px border, no shadow (flat-but-soft).
- Hover on product/solution cards: lift `translateY(-4px)` + medium shadow.
- Nav when scrolled: soft navy-tinted shadow `0 4px 20px rgba(58,71,80,0.08)`.
- Dropdown: `0 8px 24px rgba(58,71,80,0.1)`.
- Lifecycle circle photo: `0 20px 60px rgba(49,56,65,0.15)` plus a 4px white ring.
- Glass chips: `0 8px 32px rgba(49,56,65,0.1)`.

**Glass / frost**

- Navbar: frosted white `bg-white/70` (rest) → `bg-white/85` (scrolled), `backdrop-blur-md` / `lg`, saturate 150%.
- Hero feature chips: `bg-white/25`, `border-white/40`, `backdrop-blur-xl`, `backdrop-saturate-150`.
- If `prefers-reduced-transparency: reduce`, nav becomes solid `#ffffff`.

---

## 5. Motion & interaction

**Fade-in (almost every section):** opacity 0 → 1, `translateY(20px)` → 0, duration 600ms, `viewport once`, margin `-50px`. Stagger siblings by ~80ms.

**Hover**

- Buttons: lift 2px (`-translate-y-0.5`), optional shadow; arrow slides right 4px.
- Links: color to Yam.
- Product cards: lift 4px + shadow; packshot well scales 1.03.
- Animal cards: image scale 1.05 over 500ms.

**How It Works timeline (desktop only):** A 1px border line sits behind; an orange line animates `scaleX` 0 → 1 from the left over 1.1s when in view.

**FAQ:** First item open by default (`index 0`). Chevron rotates 180° when open.

**Product showcase carousel:** Hidden scrollbar, snap-x mandatory, left/right circular controls scroll ~80% of track width.

**Portfolio proof:** Horizontal snap scroller, 240px-wide cards, hidden scrollbar.

**Reduced motion:** Disable CSS animations/transitions globally; hide `.hero-video-bg` (video layer).

---

## 6. Global chrome

Every page is wrapped: **Navbar (fixed) → `<main>` page → Footer**. No sidebar. No breadcrumbs except product detail.

### 6.1 Navbar (fixed, z-index 100)

**Height:** 64px mobile, 68px from `md`.  
**Layout:** 3-column grid — logo left, links centered from `lg`, actions right. Below `lg`, hamburger replaces the center nav.

**Logo:** 32×32 rounded-lg High Tide square, letters **CV** in Yam. Wordmark: “Cattle Vibes” 15px bold High Tide; “HEALTHCARE” 10px semibold uppercase tracked 0.12em muted.

**Links (left to right):** Home · About Us · Solutions · Products ▾ · Resources ▾ · Contact Us.

**Active state:** 1.5px Yam border, white/90 fill, slight shadow. Inactive: transparent border, hover Yam text + 40% Yam border.

**Products dropdown items:** Veterinary Medicines, Nutritional Supplements, Digestive & Liver Health, Parasite Control, Calcium & Mineral Support, Milk & Productivity — each deep-links to `/products?category=…` (URL-encoded).

**Resources dropdown:** Product Catalogue, Product Information, FAQs — all go to `/resources`.

**Right cluster:** Search icon (toggles a search bar that GET-submits to `/products?q=`), **Enquire Now** pill, hamburger (`lg:hidden`).

**Enquire Now:** Height 40px, High Tide pill, white “Enquire Now”, 28px Yam circle on the right with a white arrow. Links to `/contact`. Hidden below `sm` (hamburger path uses it in the drawer footer).

**Mobile drawer:** Full-screen dim (`deep-navy/30`), 340px max white panel from the right, 64px header with close, accordion for Products/Resources, Enquire Now at bottom.

**Search overlay:** Appears under the bar, cream-white frost, single search input, rounded-xl, focus border Yam.

### 6.2 Footer (High Tide)

5 columns from `lg` (brand spans 2). White/10 logo mark, white wordmark, muted 70% body blurb.

**Company:** About Us, Solutions, Products, Resources, Contact.  
**Products:** same six category links as the nav dropdown.  
**Contact:** phone `+91 98765 43210`, email `info@cattlevibes.com`, address `India`.

Bottom bar: copyright with current year, then Privacy Policy / Terms / Disclaimer (href `#` placeholders). Divider `white/10`.

---

## 7. Component inventory

Rebuild these as shared primitives before pages.

### 7.1 Primary button

High Tide fill, white 14px semibold label, Yam `→`, `rounded-xl`, padding `28×14px` (`px-7 py-3.5`). Hover: lift + shadow; arrow translates right.

### 7.2 Secondary button

Light variant: white/80, 30% navy border, navy text, navy arrow. Dark variant (on photos): transparent, white/40 border, white text. Same padding and radius as primary.

### 7.3 Orange CTA (dark sections only)

Yam fill, white text, white arrow, same geometry as primary.

### 7.4 Section heading

Optional Yam uppercase eyebrow (12px, tracking 0.15em). Title 30–44px bold. Optional muted subtitle 16–18px, max width `42rem`. Align left (default) or center. `light` flips title to white and subtitle to white/80.

### 7.5 Product card (catalogue)

18px radius, 1px border, white fill. Top: 4:3 well with category-tinted gradient and a fake packshot (white rounded-2xl tile: “Cattlevibes” in Yam, first word of product name in navy). Body: category eyebrow, name, 2-line clamp description, formulation, “View Product →”. Hover lift.

**Category well tints**

- Veterinary Medicines → navy wash  
- Digestive & Liver Health → amber/orange wash  
- Reproductive & Uterine Care → rose wash  
- Parasite Control → emerald wash  
- Nutritional Supplements → sky wash  
- Calcium & Milk Support → orange/amber wash  

### 7.6 FAQ accordion

White shell, 20px radius, 1px border, divided rows. Question 16px semibold navy; answer 14px muted. Yam chevron.

### 7.7 CTA band

Centered H2 + subtitle + buttons. Variants: navy (orange primary), cream (standard primary), white (standard primary).

### 7.8 Enquiry form

White 20px-radius card, 1px border. Fields: Name*, Phone*, Email* (full width), Company/Farm, Location, Product Interested In (full width), Message textarea. Required markers are Yam asterisks. Submit: full-width High Tide. Success state replaces the form with “Thank you for your enquiry”. Client-side only (no backend).

### 7.9 Mute control (hero)

44px circle, bottom-right of hero (`24px` inset), High Tide/80, white icon, white/50 border. Volume2 unmuted / VolumeX muted.

---

## 8. Sitemap & information architecture

```
/                       Home (narrative + proof + FAQ + final CTA)
/about                  Company story, values, atmospheric photo, CTA
/solutions              Six editorial solution chapters + animals grid
/products               Filterable catalogue
/products/[slug]        Product detail (21 static slugs)
/resources              Catalogue teaser, resource cards, site FAQ, CTA
/contact                Contact details + enquiry form
/api/hero-video         Optional MP4 stream fallback (not a page)
```

**Primary nav IA** matches the six top-level destinations. Products is both a hub (`/products`) and a filtered entry (`?category=`).

**Content domains**

1. **Brand / trust** — About, footer, brand pillars  
2. **Problem → ecosystem** — Home problem cards + five pillars  
3. **Solutions editorial** — `/solutions` long-scroll  
4. **Catalogue** — `/products` + detail  
5. **Proof / enablement** — Resources, FAQ  
6. **Conversion** — Contact, Enquire, product enquiry deep-link `?product=`

---

## 9. User wireflows

### 9.1 First-time visitor (awareness → consideration)

1. Lands on `/`. Hero video autoplays muted; looping ambient audio attempts to play (blocked until first pointer). Mute button bottom-right. Audio **pauses when the hero is fully scrolled out of view** and resumes if still unmuted.
2. Scrolls: Portfolio proof (horizontal categories) → Problem (4 cards) → Ecosystem (5 pillars with product chips) → Product showcase carousel → How it works (4 steps + journey line) → Brand (Health / Nutrition / Productivity on navy) → Lifecycle wheel → FAQ → Final cinematic CTA.
3. From any product name/chip: `/products/{slug}`.
4. From hero: **Explore Our Solutions** → `/solutions`; **View Product Range** → `/products`.
5. From final CTA: Solutions or Contact.

### 9.2 Product seeker

1. Nav **Products** or search icon → `/products` (optional `?q=`).
2. Filters: Category, Formulation, Animal, Health Concern (AND logic on top of optional initial category).
3. Empty state: “No products found matching your criteria.”
4. Card → detail. Breadcrumb Home / Products / {Name}.
5. **Enquire About This Product** → `/contact?product={urlencoded name}` (form field should be prefillable from query if implemented; currently the form does not auto-read the query — replicate by reading `product` search param into “Product Interested In”).
6. Related products grid → other slugs. Bottom cream well → Contact.

### 9.3 Category seeker (from nav dropdown)

Nav Products ▾ → e.g. Parasite Control → `/products?category=Parasite+Control` → catalogue prefiltered.

### 9.4 Solution explorer

`/solutions` long page. Alternate cream/white chapters. “Explore Products →” always goes to `/products` (not filtered). “Solutions by Animal” is visual only (no per-animal routes).

### 9.5 Enquiry / distributor

Nav Enquire Now or Contact → `/contact`. Left: phone/email/address. Right: form. Success thank-you card.

### 9.6 Resource seeker

`/resources`. Catalogue download is **disabled** (“coming soon”). FAQ uses the *site-wide* five questions (not the home FAQ set). CTA to Contact.

---

## 10. Page specifications

Use this as a wireframe-in-prose. Heights are approximate; follow padding tokens.

### 10.1 Home `/`

**A. Hero — full viewport (`min-h: 100svh`), centered**

- Background: looping MP4 `/videos/hero-upscaled.mp4`, `object-cover`, no blur.
- Corner haze only: radial white ellipses at **bottom-left and bottom-right**, ~22% white fading to transparent by 42% of the ellipse. No full-screen wash.
- Audio: `/audio/hero.mp3`, loop, volume 0.7, pause when hero `intersectionRatio` is 0.
- Content centered, top padding ~80px / 76px desktop to clear nav.
- Feature chips: five glass pills in a wrapping row, 12–16px gap. Icons (Lucide, 16px, Yam, stroke 2): Droplets, Wheat, Baby, Thermometer, Bug.

**B. Portfolio proof — white**

- Heading: eyebrow `Portfolio`; title `One portfolio. Multiple health challenges.`; subtitle as in data.
- Horizontal scroller of 7 cards (240px): Liver Health (Liver-OK), Digestive Health (Rumi-OK), Reproductive & Uterine Care (Utrovibe), Pain & Inflammation (Pyrovibe, Megluvibe, Cattlespas), Infection Control (Cattle-Cef, Cattlecef-SB), Parasite Control (Fendivibe Plus, Flukevibe DS, Worms-OK Plus), Nutrition & Productivity (Cattlemin, Cattlestar range). Names are links to slugs.

**C. Problem — soft-white**

- Eyebrow `The Challenge`. Title `When animal health slips, productivity follows.`
- 4 cards with giant faded Yam numbers 01–04, icon top-right, title, body.
- Closing statement, centered, 20–24px bold, with a top border: “The goal isn’t simply to treat a problem. / It’s to support the animal through the moments that matter.”

**D. Ecosystem — white**

- Eyebrow `The Ecosystem`. Title `One healthcare ecosystem. Built around the animal.`
- 5 stacked large cards (`rounded-[24px]`, soft-white fill). Left: number + 56px icon well (alternating Yam wash / navy wash). Right: Yam eyebrow, extra-bold heading, description, product chips (pill, white, hover Yam). Cattlestar Gold has `slug: null` — chip is not a link, muted text.

**E. Product showcase — pebble cream**

- Title `Solutions for every stage of the livestock health cycle.`
- Circular prev/next. Track of 9 products (see `homeShowcaseSlugs`). Card 280–300px: packshot well on soft-white, category, name, first 3 benefits as bullets with Yam dots, View Product →.

**F. How it works — white, centered heading**

- Title `From health challenge to healthier performance.`
- 4 columns: Identify / Choose / Use Responsibly / Support.
- Desktop: six-stage journey line — Nutrition → Digestion → Growth → Reproduction → Lactation → Recovery. Dots: 10px, white fill, 2px Yam stroke.
- Mobile: the six stages as chips with Yam arrows between.

**G. Brand value — High Tide**

- Light section heading, centered: `More than medicines. A complete approach to animal health.`
- 3 columns with left borders (white/10) on md+: Health, Nutrition, Productivity. Yam icons, extra-bold white titles, white/70 body.

**H. Lifecycle — soft-white, centered**

- Title `Built around the moments that matter.`
- Desktop (`lg+`): 560px square. Center circular photo (`images.aboutHero`) with 25% navy veil. Six stage cards on a circle (radius 42% of box), starting at 12 o’clock clockwise: Grow, Digest, Calve, Produce, Protect, Recover.
- Below `lg`: 16:9 rounded photo + 2/3-column grid of the same six cards.

**I. FAQ — white, max-width 720px, centered heading** `Questions, answered.` — 7 home-specific FAQs (see data). First open.

**J. Final CTA — full-bleed farm photo, 80% High Tide + Yam radial at top-right (18%)**

- H2: `Better animal health starts with the right support.`
- Buttons: Yam “Explore Our Solutions” → `/solutions`; ghost white “Talk to Cattlevibes” → `/contact`.

### 10.2 About `/about`

1. **Photo hero** min 50vh, content bottom-aligned. Image `aboutHero`. Overlay gradient from High Tide 80% at bottom through 40% to transparent. White H1: `Advancing Animal Health Through Better Solutions`. Extra top padding so title sits in the lower third.
2. **Intro — white, 2-col from lg:** Left section heading (eyebrow About Cattlevibes, title Complete Animal Healthcare Solutions). Right three paragraphs (company dedication, range span, subtitle).
3. **Focus — cream:** centered “What We Do”, 3 equal white cards: Veterinary Medicines, Animal Nutrition, Livestock Productivity.
4. **Approach — white:** centered “From Health to Outcomes”. Vertical stack of cream chips: Animal Health ↓ Nutrition & Support ↓ Better Livestock Outcomes. Arrows Yam.
5. **Values — soft-white:** 4 cards (Quality, Innovation, Animal Wellbeing, Professionalism) with Lucide icons in Yam.
6. **Atmospheric band:** `farmAtmospheric`, 40vh min 300px, no copy.
7. **CTA cream:** “Explore Our Products” → `/products`.

### 10.3 Solutions `/solutions`

1. **Intro — white,** nav offset, centered heading: eyebrow Healthcare Solutions; title `Solutions for Better Animal Health`.
2. **Six chapters** (ids used as hash targets from home `/solutions#…` if linked):  
   01 Veterinary Medicines  
   02 Animal Nutrition  
   03 Digestive & Liver Health  
   04 Reproductive & Uterine Care  
   05 Parasite Control  
   06 Calcium & Milk Support  
   Even index: cream ground; odd: white. Image 4:3, 24px radius. Odd rows swap columns. Product names as small white chips. Link “Explore Products →”.
3. **Animals — High Tide:** light heading “Solutions by Animal”. 9 species: Cattle, Buffalo, Goat, Sheep, Horse, Calf, Pig, Poultry, Aqua. Square photo cards, navy gradient from bottom, white name overlay, hover zoom.

### 10.4 Products `/products`

White canvas, nav offset, large padding. Left-aligned heading “Our Product Range”. Search + 4 selects, then 3-column card grid. Honour `q` and `category` query params on first paint.

**Category filter map (nav labels → internal categories)**

- Veterinary Medicines → Veterinary Medicines  
- Nutritional Supplements → Nutritional Supplements  
- Digestive & Liver Health → Digestive & Liver Health  
- Parasite Control → Parasite Control  
- Calcium & Mineral Support → Calcium & Milk Support  
- Milk & Productivity → Calcium & Milk Support  

### 10.5 Product detail `/products/[slug]`

White, nav offset. Breadcrumb. Two columns: cream rounded-24 packshot well (larger fake box with formulation) + story (category, H1, short description, primary enquire, Key Benefits list). Optional Product Information definition list (skip empty or “As per product catalogue” in the *benefits-adjacent* filter — the dl still shows all non-empty info keys). Product Details paragraph + italic catalogue disclaimer. Related products (up to linked slugs). Cream centered “Need more information?”.

### 10.6 Resources `/resources`

1. Cream intro, centered heading. Centered white download well (24px radius): Download icon Yam, disabled High Tide/50 button, “Catalogue download coming soon”.
2. White “Product Information” grid 2-col: Product Catalogue, Product Information, Animal Nutrition, Livestock Health — each with rotating Lucide icon (FileText, BookOpen, Wheat, Heart) and a “Coming soon” cream chip.
3. Soft-white FAQ (the five *site* FAQs, first open).
4. Navy CTA: “Have a question about our products?” → Contact.

### 10.7 Contact `/contact`

1. Cream intro, nav offset, centered H1 `Let's Talk About Animal Health`.
2. White two-column: contact list (phone, email, address) with 40px cream icon wells; cream callout “Product Enquiries”; form on the right.

**Contact details to print**

- Phone: +91 98765 43210  
- Email: info@cattlevibes.com  
- Address: India  

---

## 11. Product data model & catalogue

Each product has: `slug`, `name`, `category`, `formulation`, `animals[]`, `healthConcerns[]`, `shortDescription`, `description`, `benefits[]`, `info` (composition, indications, dosage, presentation, applicableAnimals, withdrawalPeriod, storage — many are catalogue placeholders), optional `featured`, `relatedSlugs[]`.

**Formulations:** Injection, Bolus, Powder, Liquid, Gel, Tablet, Sachet.  
**Animals:** Cattle, Buffalo, Goat, Sheep, Horse, Calf, Pig, Poultry, Aqua.  
**Health concerns:** Liver Health, Digestive Health, Reproductive Health, Parasite Control, Nutrition, Calcium & Minerals, Milk Productivity, Antibiotic, Fever & Inflammation.

**Catalogue slugs (21) — replicate routes for all**

| Slug | Name | Category |
|---|---|---|
| `liver-ok` | LIVER-OK | Digestive & Liver Health |
| `liver-ok-injection` | LIVER-OK Injection | Digestive & Liver Health |
| `utrovibe` | UTROVIBE | Reproductive & Uterine Care |
| `rumi-ok-powder` | RUMI-OK Powder | Digestive & Liver Health |
| `rumi-ok-bolus` | RUMI-OK Bolus | Digestive & Liver Health |
| `cattlespas` | CATTLESPAS | Veterinary Medicines |
| `pyrovibe-injection` | PYROVIBE Injection | Veterinary Medicines |
| `pyrovibe-bolus` | PYROVIBE Bolus | Veterinary Medicines |
| `megluvibe` | MEGLUVIBE | Veterinary Medicines |
| `cattle-phos` | CATTLE PHOS | Veterinary Medicines |
| `cattle-cef` | CATTLE-CEF | Veterinary Medicines |
| `cattlecef-sb` | CATTLECEF-SB | Veterinary Medicines |
| `fendivibe-plus` | FENDIVIBE PLUS | Parasite Control |
| `flukevibe-ds` | FLUKEVIBE DS | Parasite Control |
| `worms-ok` | WORMS-OK | Parasite Control |
| `worms-ok-plus` | WORMS-OK PLUS | Parasite Control |
| `cattlemin` | CATTLEMIN | Nutritional Supplements |
| `cattlestar` | CATTLESTAR | Calcium & Milk Support |
| `cattlestar-ds` | CATTLESTAR-DS | Calcium & Milk Support |
| `cattlestar-gel` | CATTLESTAR GEL | Calcium & Milk Support |
| `cattlestar-advance-gel` | CATTLESTAR ADVANCE GEL | Calcium & Milk Support |

Home showcase order: liver-ok, rumi-ok-powder, utrovibe, pyrovibe-injection, megluvibe, cattle-cef, fendivibe-plus, cattlemin, cattlestar.

**Legal / medical copy rule:** Always include a path to the official catalogue. Never invent dosages. Products are veterinary-only.

---

## 12. Media, audio & accessibility

**Hero video:** `/videos/hero-upscaled.mp4` (pastoral livestock loop). `autoPlay muted loop playsInline`. Hide the video layer if the user prefers reduced motion.

**Hero audio:** `/audio/hero.mp3`. Do not rely on unmuted autoplay (browsers block it). Unlock on first pointer. Pause when the hero section is fully off-screen.

**Remote images:** Unsplash cattle/farm URLs listed in `images`, `solutionSections`, `animalCategories`. Allow `images.unsplash.com` if using a Next.js image optimizer.

**Alt text:** Always descriptive (“Cattle grazing…”, species name, product context). Video is `aria-hidden`; audio is not shown as a visible player except the mute control.

**Focus:** Yam 2px ring. FAQ buttons use `aria-expanded`. Carousel buttons have aria-labels.

**Hydration:** Do not let browser extensions rewrite `<video>` before paint if possible; client-mounting the video after hydration is acceptable.

**Disclaimer in footer:** Privacy / Terms / Disclaimer may be placeholders (`#`) unless legal pages exist.

---

## 13. Responsive rules

| Breakpoint | Behavior |
|---|---|
| `< 640px` | Enquire hidden in header; hamburger from `< 1024px`. Hero CTAs stack. Feature chips wrap. Journey chips wrap with arrows. Lifecycle uses photo + grid. Footer stacks. |
| `sm` 640 | Enquire visible. Product grid 2-col. Problem 2-col. |
| `md` 768 | Nav 68px. Section padding 96px. Brand 3-col. How-it-works timeline appears. |
| `lg` 1024 | Center nav. Content padding 32px. Lifecycle circle. Solutions 2-col alternating. Animal grid 5. Product grid 3. Footer 5-col. Hero H1 72px. |

**Touch:** Carousels must remain swipeable; arrow buttons are a desktop convenience.

---

## 14. Replication checklist

Use this as a QA script after implementation.

- [ ] Tokens match the hex table (especially Yam `#ea9216` and High Tide `#313841` — not the older deep blue `#03253f`).
- [ ] Manrope on headings, Inter on body/nav.
- [ ] Fixed frosted nav, 64/68px, Enquire pill with Yam arrow disc.
- [ ] Home hero: exact headline, five glass chips, corner-only white haze, no full-frame blur.
- [ ] Audio mute + pause-when-hero-leaves-viewport.
- [ ] Home section order: Hero → Portfolio → Problem → Ecosystem → Showcase → How it works → Brand → Lifecycle → FAQ → Final CTA.
- [ ] Pillar “Cattlestar Gold” is not clickable.
- [ ] All 21 product slugs resolve; unknown slug is 404.
- [ ] `/products?category=Parasite+Control` filters correctly.
- [ ] Solutions hashes (`#parasite-control` etc.) scroll to chapters.
- [ ] Catalogue download remains disabled.
- [ ] Contact form success state works without a server.
- [ ] Footer year, phone, email, India.
- [ ] Hover lifts, Yam arrows, FAQ first item open.
- [ ] Reduced-motion hides hero video.

---

## Appendix A — Exact home FAQ (7)

1. What kind of animals are Cattlevibes products intended for?  
2. What types of animal-health needs does Cattlevibes cover?  
3. Are Cattlevibes products medicines or feed supplements?  
4. Where can I find dosage information?  
5. Are withdrawal periods the same for every product?  
6. Can I get information about a specific product?  
7. Are these products for human use? → **No. Veterinary and livestock use only.**

## Appendix B — Exact resources FAQ (5)

1. How can I find a specific Cattlevibes product?  
2. Where can I download the product catalogue?  
3. How do I enquire about a product?  
4. How can I become a distributor?  
5. Where can I find dosage and product information?

## Appendix C — Wireflow diagram (text)

```
                    ┌─────────────┐
                    │    Home     │
                    │  /  Hero    │
                    └──────┬──────┘
           ┌───────────────┼────────────────┬──────────────┐
           ▼               ▼                ▼              ▼
     /solutions      /products         /about         /contact
     editorial         │                 │               │
           │           ▼                 ▼               ▼
           │     /products/[slug]     /products      enquiry form
           │           │
           └───────────┴──────────► /resources ──► /contact
```

---

*End of specification. This document describes the live Cattlevibes website as implemented in this repository (App Router pages under `src/app`, components under `src/components`, content under `src/data`). A nested `hero section/` folder is an experimental left-aligned hero prototype and is **not** part of the production IA above.*
