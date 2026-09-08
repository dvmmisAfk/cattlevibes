# CattleVibes Healthcare — Solutions, Resources, About Us & Enquire Pages

> **Document status:** Current-state inventory for a full redesign  
> **Brand:** Cattle Vibes Healthcare Pvt. Ltd. (**Cattlevibes**)  
> **Tagline:** Complete Animal Healthcare Solutions  
> **Stack:** Next.js 16 App Router, React 19, Tailwind CSS v4, Framer Motion (`FadeIn`), Lucide icons  
> **Canonical content width:** `1320px` (`max-w-[1320px]`), centered; padding `px-5` mobile → `lg:px-8` desktop  
> **Global chrome:** Transparent `Navbar` (PillNav) + `Footer` wrap every page via `src/app/layout.tsx`

This file is the **source of truth for what these four pages currently are**: information architecture, every block of copy, every component, visual theme, and how they connect to `/products` and `/contact`. Use it as the baseline when replacing the pages with a new structure.

---

## Table of contents

1. [Scope and routes](#1-scope-and-routes)
2. [Shared design system](#2-shared-design-system)
3. [Shared page chrome and patterns](#3-shared-page-chrome-and-patterns)
4. [Solutions (`/solutions`)](#4-solutions-solutions)
5. [Resources (`/resources`)](#5-resources-resources)
6. [About Us (`/about`)](#6-about-us-about)
7. [Enquire Now / Contact (`/contact`)](#7-enquire-now--contact-contact)
8. [Cross-page content map](#8-cross-page-content-map)
9. [Redesign notes (what this inventory implies)](#9-redesign-notes-what-this-inventory-implies)

---

## 1. Scope and routes

| Page | Route | Source file | Metadata title | Primary CTA destination |
|------|--------|-------------|----------------|-------------------------|
| Solutions | `/solutions` | `src/app/solutions/page.tsx` | Solutions | `/products?category=…` per section, animal cards → `/products` |
| Resources | `/resources` | `src/app/resources/page.tsx` | Resources | `/contact?product=Product+Catalogue+Request`, footer CTA → `/contact` |
| About Us | `/about` | `src/app/about/page.tsx` | About Us | `/products` |
| Enquire Now | `/contact` | `src/app/contact/page.tsx` | Contact | Form submit (client-only success state; no backend) |

**Nav mapping (current):** Solutions, Our Products, Resources, About Us in the center PillNav. Enquire Now is a separate right-corner pill linking to `/contact`. Contact Us is **not** in the center pill row.

**Shared site identity** (`src/data/site.ts` → `siteConfig`):

- Legal name: Cattle Vibes Healthcare Pvt. Ltd.
- Short name: Cattlevibes
- Subtitle: Innovative Veterinary Medicines & Nutritional Supplement
- Description: Delivering premium veterinary medicines and nutritional supplements to enhance livestock health, productivity, and agricultural sustainability.
- Phone: `+91 98765 43210`
- Email: `info@cattlevibes.com`
- Address: `India` (placeholder)

---

## 2. Shared design system

These pages do **not** use the home cinematic video hero. They share a quieter clinical-editorial language: white / pebble bands, Manrope headings, Inter body, Yam orange accents, High Tide navy for dark bands and primary buttons.

### 2.1 Atmosphere

| Attribute | Description |
|-----------|-------------|
| Mood | Veterinary-grade, editorial, farm-aware — not ecommerce, not rustic |
| Density | Airy. Section padding typically `py-12` / `md:py-20` (intros) or `py-16` / `md:py-24` (body). About corporate block goes to `lg:py-32` |
| Voice | Professional, veterinary-backed. About page is more “clinical dossier”; Solutions is more “category explorer”; Contact is “commercial / institutional enquiry” |
| Motion | `FadeIn` on section titles and cards (`delay` 0.05–0.1s). Cards: `hover:-translate-y-0.5`, orange border tint. Text links: orange arrow `translate-x-1` on hover |

### 2.2 Colour tokens (`src/app/globals.css`)

| Role | Token / class | Hex | Use on these pages |
|------|----------------|-----|--------------------|
| Deep navy / High Tide | `deep-navy` | `#313841` | Headings, primary buttons, About hero overlay, Solutions animal band, navy CTA |
| Cadet / body | `primary-navy`, `cadet-blue`, `text-primary` | `#3a4750` | Body copy, contact values |
| Muted text | `text-muted` | `#58636a` | Subtitles, FAQ answers, form helper copy |
| Yam / brand orange | `brand-orange`, `yam-orange` | `#ea9216` | Eyebrows, numbers, icons, dossier codes, focus rings, arrow icons |
| Warm orange | `warm-orange` | `#efad50` | Rare on these pages |
| Pebble / cream | `warm-cream`, `pebble` | `#eeeeee` | About CTA band (`CTASection` cream), icon wells |
| Soft / light pebble | `soft-white`, `light-pebble` | `#f7f7f7` | Page backgrounds, alternating Solutions rows, Resources intro, Contact intro |
| White | `pure-white` / `bg-white` | `#ffffff` | Cards, form, even Solutions rows, About corporate + governance |
| Border | `border` | `#d8dadb` | Cards, form, FAQ, images |
| Overlay | navy at 30–85% | — | About hero gradient, animal cards, atmospheric banner |

**Selection:** `rgba(234, 146, 22, 0.2)` on navy text.  
**Focus:** `2px solid` Yam, offset 2px.

### 2.3 Typography

| Role | Font | Typical classes |
|------|------|-----------------|
| Headings | Manrope (`font-heading`) | H1 About: `text-3xl md:text-5xl lg:text-6xl font-extrabold`. Section titles: `text-2xl md:text-3xl` or `SectionHeading` `text-3xl md:text-4xl lg:text-[2.75rem] font-bold` |
| Eyebrow | Manrope/Inter | `text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-brand-orange` |
| Body | Inter (`font-body`) | `text-base leading-relaxed` / `text-sm` for cards and forms |
| Meta / codes | Mono on About/Resources | `font-mono text-xs font-bold text-yam-orange` (DOSSIER, GMP-M, DOC-CAT) |
| Product lists | — | `text-[11px] md:text-xs font-bold uppercase tracking-wider text-cadet-blue` |

### 2.4 Shape and layout

- **Radius:** Images and cards `rounded-xl`; form fields `rounded-xl`; catalogue CTA on Resources `rounded-xl`; animal cards `rounded-xl`.
- **Grid:** Solutions story rows `lg:grid-cols-2`; animals `grid-cols-2 sm:grid-cols-3 lg:grid-cols-5`; Resources cards `sm:grid-cols-2`; About dossiers `lg:grid-cols-3`; governance `sm:grid-cols-2 lg:grid-cols-4`; Contact `lg:grid-cols-2`.
- **Image ratio:** Solutions story `aspect-[4/3]`; animals `aspect-square`.
- **Max subtitle width:** `SectionHeading` inner `max-w-2xl`. Contact intro copy `max-w-xl`.

### 2.5 Buttons (as used here)

| Variant | Where | Look |
|---------|--------|------|
| Primary (`Button` / navy fill) | Resources “Request Catalogue”, Contact “Send Enquiry”, cream CTA “View Products” | Navy fill, white type, orange arrow, `rounded-xl`, slight lift |
| Accent | Navy `CTASection` primary | Yam fill |
| Ghost text link | Solutions “Explore Products” | Navy type, orange arrow, no fill |
| Contact icon wells | Phone / mail / pin | `h-10 w-10 rounded-xl bg-warm-cream`, orange Lucide icon |

### 2.6 Shared components

| Component | File | Role |
|-----------|------|------|
| `Breadcrumbs` | `src/components/ui/Breadcrumbs.tsx` | Home · Page. Light theme default; About hero uses `theme="dark"`. JSON-LD BreadcrumbList |
| `SectionHeading` | `src/components/ui/SectionHeading.tsx` | Eyebrow + H2 + optional subtitle; `align` left/center; `light` for navy bands |
| `FadeIn` | `src/components/ui/FadeIn.tsx` | Scroll/entrance fade |
| `CTASection` | `src/components/sections/CTASection.tsx` | Full-width closer: `navy` (default) or `cream` |
| `AnimalCard` | `src/components/sections/AnimalCard.tsx` | Square photo + name overlay, link to `/products` |
| `ResourceCard` | `src/components/sections/ResourceCard.tsx` | Doc code + title + description + “Archive Updating” |
| `FAQAccordion` | `src/components/sections/FAQAccordion.tsx` | First item open; Yam chevron |
| `EnquiryForm` | `src/components/sections/EnquiryForm.tsx` | Product enquiry form + thank-you state |
| `Button` | `src/components/ui/Buttons.tsx` | Shared CTA primitive |

### 2.7 Images

- **About hero / atmospheric / several Solutions & animal photos:** Unsplash URLs in `site.ts`. Several Unsplash IDs 404 in production logs — treat as **broken stock**, not brand photography.
- **Logo:** `/images/cattlevibes-mark.png` (transparent mark). Not used as a page-title lockup on these inner pages.

---

## 3. Shared page chrome and patterns

### 3.1 Top offset

Inner pages start with `pt-(--nav-height)` (`4.25rem` / `md: 4.75rem`) so content clears the fixed transparent navbar.

### 3.2 Intro band pattern (Solutions, Resources, Contact)

```
[pt-nav] [bg white OR light-pebble]
  Breadcrumbs
  SectionHeading or custom H1 stack (center)
  (optional extra block)
```

About **does not** use this pattern; it uses a full-bleed photo hero instead.

### 3.3 Footer CTA pattern

- Resources: navy `CTASection` — question → Contact Us  
- About: cream `CTASection` — Explore products → View Products  
- Solutions: **no** `CTASection`; ends on navy “Solutions by Animal”  
- Contact: **no** closer CTA; form is the action

### 3.4 Enquiry funnel

Any “talk to us” path lands on `/contact`. Optional query: `?product=` pre-fills **Product Interested In** (used by Resources catalogue request and product pages elsewhere).

---

## 4. Solutions (`/solutions`)

### 4.1 Mission

Category education: six therapeutic pillars, each linking into the filtered catalogue, then a species grid into unfiltered `/products`.

**SEO description:** Veterinary medicines, animal nutrition, digestive health, parasite control, and calcium support solutions for livestock.

### 4.2 Page flow

```
1. Intro (white) — breadcrumbs + heading
2–7. Six alternating story sections (pebble / white), image + copy, Explore Products
8. Solutions by Animal (deep navy) — 9 species cards
```

### 4.3 Section 01 — Intro

| Field | Content |
|-------|---------|
| Background | `bg-white` |
| Breadcrumbs | Home · Solutions |
| Eyebrow | Healthcare Solutions |
| Title | Solutions for Better Animal Health |
| Subtitle | Editorial solutions across veterinary medicines, nutrition, and livestock productivity designed for real farm operations and veterinary clinical standards. |
| Alignment | Center |

### 4.4 Sections 02–07 — Solution stories

Data: `solutionSections` in `src/data/site.ts`.  
Layout: 2-column, image `aspect-[4/3]`, `rounded-xl`, `border-border/80`. Even index (`0,2,4`): pebble bg, image left. Odd: white bg, image **right** (`lg:order-2`).

Each block:

| UI | Spec |
|-----|------|
| Index | `01`–`06`, Yam, extra-bold, tracking `0.2em` |
| Title | ALL CAPS string from data (see table below) |
| Description | Body muted |
| Product names | Uppercase, middot-separated |
| Link | “Explore Products” → `/products?category={mapped}` |

**Category query map** (`categoryParamMap` in the page):

| `section.id` | Query `category=` | Catalogue filter intent |
|--------------|-------------------|---------------------------|
| veterinary-medicines | Veterinary+Medicines | Veterinary Medicines |
| animal-nutrition | Nutritional+Supplements | Nutritional Supplements |
| digestive-liver | Digestive+%26+Liver+Health | Digestive & Liver Health |
| reproductive | Reproductive+%26+Uterine+Care | Reproductive & Uterine Care |
| parasite-control | Parasite+Control | Parasite Control |
| calcium-milk | Calcium+%26+Mineral+Support | Calcium & Mineral Support |

**Copy inventory**

| # | ID | Title (as shown) | Description | Products listed |
|---|-----|------------------|-------------|-----------------|
| 01 | veterinary-medicines | VETERINARY MEDICINES | Our veterinary medicine range includes antibiotics, anti-inflammatory injections, and specialized formulations for professional livestock healthcare under veterinary guidance. | CATTLESPAS · PYROVIBE Injection · MEGLUVIBE · CATTLE PHOS · CATTLE-CEF · CATTLECEF-SB |
| 02 | animal-nutrition | ANIMAL NUTRITION | Complete vitamin and mineral supplements designed to meet the nutritional requirements of dairy and farm animals for improved productivity and wellbeing. | CATTLEMIN |
| 03 | digestive-liver | DIGESTIVE & LIVER HEALTH | Hepatoprotective tonics and rumen conditioning formulations to support liver function, digestive health, and feed utilization in ruminants. | LIVER-OK · LIVER-OK Injection · RUMI-OK Powder · RUMI-OK Bolus |
| 04 | reproductive | REPRODUCTIVE & UTERINE CARE | Veterinary medicines formulated for reproductive health management and uterine care in cattle and buffalo. | UTROVIBE · CATTLESPAS |
| 05 | parasite-control | PARASITE CONTROL | Broad-spectrum anthelmintics and flukicides for internal parasite and liver fluke control in livestock. | FENDIVIBE PLUS · FLUKEVIBE DS · WORMS-OK · WORMS-OK PLUS |
| 06 | calcium-milk | CALCIUM & MILK SUPPORT | Calcium and mineral supplements in liquid and gel forms to support post-calving recovery and milk productivity in dairy animals. | CATTLESTAR · CATTLESTAR-DS · CATTLESTAR GEL · CATTLESTAR ADVANCE GEL |

**Images:** Unsplash cattle / farm / crop photos (see `solutionSections[].image`). Treat as generic placeholders.

**Anchor IDs:** `#veterinary-medicines`, `#animal-nutrition`, `#digestive-liver`, `#reproductive`, `#parasite-control`, `#calcium-milk` (also referenced from home `solutions` cards).

### 4.5 Section 08 — Solutions by Animal

| Field | Content |
|-------|---------|
| Background | `bg-deep-navy` |
| Title (light) | Solutions by Animal |
| Subtitle | Our products are formulated for a wide range of livestock species. |
| Cards | `AnimalCard`: photo, bottom-left white name → Yam on hover, scale image; all `href="/products"` (not species-filtered) |

**Animals (order):** Cattle, Buffalo, Goat, Sheep, Horse, Calf, Pig, Poultry, Aqua.

### 4.6 Related but unused on this page

`solutions` array in `site.ts` (shorter blurbs + `/solutions#…` hrefs) is for **home**, not rendered on `/solutions`.

---

## 5. Resources (`/resources`)

### 5.1 Mission

Trust / documentation hub: catalogue request, four “formulary” cards (all coming-soon), FAQ, contact CTA. No live PDF download.

**SEO description:** Download product catalogue and access product information resources.

### 5.2 Page flow

```
1. Intro (light pebble) — breadcrumbs, heading, catalogue request card
2. Product Information (white) — 2×2 ResourceCards
3. FAQ (soft white)
4. CTA (navy) — Contact Us
```

### 5.3 Section 01 — Intro + catalogue request

| Field | Content |
|-------|---------|
| Background | `bg-light-pebble` |
| Breadcrumbs | Home · Resources |
| Title | Resources & Product Information |
| Subtitle | Access product catalogues, technical specification sheets, and veterinary formulary documentation. |
| Alignment | Center |

**Catalogue card** (centered, `max-w-2xl`, white, bordered):

| Element | Content |
|---------|---------|
| Icon | Lucide `Download`, `h-10 w-10`, Yam |
| Title | Product Catalogue |
| Body | Direct digital download is being updated with our latest veterinary portfolio. Request an official digital copy directly from our clinical support team. |
| Button | Request Catalogue → `/contact?product=Product+Catalogue+Request` |
| Fine print | Digital PDF sent via email upon request |

### 5.4 Section 02 — Product information grid

Eyebrow: **Documentation**  
Title: **Product Information** (left-aligned `SectionHeading`)

Cards (`ResourceCard`, `status` default `coming-soon`):

| Index | Code | Title | Description | Status label |
|-------|------|-------|-------------|--------------|
| 0 | DOC-CAT | Product Catalogue | Complete catalogue of Cattlevibes veterinary medicines and nutritional supplements. | Archive Updating |
| 1 | DOC-SPEC | Product Information | Detailed product specifications, formulations, and presentation details. | Archive Updating |
| 2 | DOC-NUTR | Animal Nutrition | Resources on nutritional supplementation for livestock health and productivity. | Archive Updating |
| 3 | DOC-VET | Livestock Health | Information on veterinary healthcare solutions for farm animals. | Archive Updating |

Card chrome: top row code (Yam mono) + “Formulary Reference”; title navy; body cadet; footer orange dot + “Archive Updating”.

**Note:** First card title duplicates the hero catalogue block; none of the four cards are downloadable.

### 5.5 Section 03 — FAQ

Title: **Frequently Asked Questions** (center). Accordion `max-w-3xl`. Data: `faqItems` (same set as home FAQ).

| # | Question | Answer (summary) |
|---|----------|-------------------|
| 1 | How can I find a specific Cattlevibes product? | Browse Products; search/filter; detail pages from brochure. |
| 2 | Where can I download the product catalogue? | Resources page; if not downloadable, contact for a copy. |
| 3 | How do I enquire about a product? | Contact form or product-page enquire CTA. |
| 4 | How can I become a distributor? | Contact with company details and location. |
| 5 | Where can I find dosage and product information? | Product detail pages; consult a veterinarian. |

First item expanded by default.

### 5.6 Section 04 — CTA

| Field | Content |
|-------|---------|
| Variant | navy |
| Title | Have a question about our products? |
| Subtitle | Contact our team for product information and enquiries. |
| Primary | Contact Us → `/contact` |

---

## 6. About Us (`/about`)

### 6.1 Mission

Corporate / clinical-authority page: science-led brand story, three therapeutic dossiers, quality governance, pastoral image, product CTA.

**SEO description:** Learn about {legal name} · advancing animal health through innovative veterinary medicines and clinical nutritional supplements.

### 6.2 Page flow

```
1. Photo hero (min 50vh) — dark overlay, breadcrumbs, H1
2. Corporate overview (white) — heading vs three paragraphs
3. Clinical focus dossiers (pebble) — 3 cards
4. Governance matrix (white) — 4 cards
5. Atmospheric banner (40vh photo)
6. CTA (cream) — View Products
```

### 6.3 Section 01 — Hero

| Field | Spec |
|-------|--------|
| Photo | `images.aboutHero` (Unsplash buffalo/cattle, `object-cover`) |
| Overlay | `from-deep-navy/85 via-deep-navy/45 to-transparent` |
| Breadcrumbs | Dark theme: Home · About Us |
| H1 | Advancing Animal Health Through Clinical Science. |
| Alt | Cattle grazing in high-altitude pastoral landscape |

No eyebrow, no subtitle under the H1.

### 6.4 Section 02 — Corporate overview

Two columns: heading left, copy right.

| Field | Content |
|-------|---------|
| Eyebrow | Corporate Profile |
| Title | Complete Veterinary Healthcare Infrastructure |
| P1 | **{legal name}** is dedicated to delivering premium veterinary medicines and clinical nutritional supplements for livestock health, productivity, and sustainable agricultural welfare. |
| P2 | Our therapeutic portfolio spans veterinary pharmaceuticals, hepatoprotective complexes, rumen conditioners, parasite control systems, maternal reproductive tonics, and chelated mineral supplements · all manufactured under professional veterinary guidance and rigorous statutory quality protocols. |
| P3 (semibold navy) | Innovative Veterinary Medicines & Nutritional Supplement. |

### 6.5 Section 03 — Clinical focus dossiers

| Field | Content |
|-------|---------|
| Eyebrow | Therapeutic Scope |
| Title | Clinical Focus Areas |
| Subtitle | Specialized veterinary disciplines engineered around real farm operations and livestock physiological demands. |

**Dossier cards** (white, bordered, hover Yam border + lift):

| Code | Title | Description | Metrics footer |
|------|-------|-------------|----------------|
| DOSSIER 01 | Veterinary Pharmaceuticals | Sterile injectables, anti-inflammatory therapeutics, and broad-spectrum antimicrobial agents formulated under Schedule M GMP standards for targeted intervention in bovine, ovine, and caprine pathologies. | Schedule H · Sterile Fill · Rapid Kinetics |
| DOSSIER 02 | Clinical Animal Nutrition | Chelated trace mineral suspensions, bio-available calcium-phosphorus kinetics, and metabolic stabilizers engineered to prevent subclinical deficiencies during transition and peak lactation. | Bis-Glycinate Chelation · 98.4% Absorption |
| DOSSIER 03 | Herd Productivity & Involution | Targeted phytogenic reproductive tonics and hepatoprotective rumen buffers that reduce days open, restore myometrial tone, and secure long-term dairy herd longevity. | Non-Hormonal · Zero Milk Withdrawal |

Card chrome: “DOSSIER 0n” (Yam mono) + “Active Formulation Class” (muted 10px uppercase).

### 6.6 Section 04 — Governance

| Field | Content |
|-------|---------|
| Eyebrow | Quality Standards |
| Title | Pharmacological Compliance & Governance |
| Subtitle | Ensuring clinical consistency, biological potency, and safety across every batch released. |
| Alignment | Center |
| Card surface | `bg-light-pebble/60` |

| Code | Title | Description |
|------|-------|-------------|
| GMP-M | Good Manufacturing Practice | All production batches are manufactured in Schedule M certified cleanroom facilities with end-to-end analytical assay verification. |
| QC-LAB | Quality Control & Assay Verification | Multi-stage chromatography and microbiological testing ensure active constituent purity and batch-to-batch kinetic uniformity. |
| COLD-CHAIN | Cold-Chain Integrity | Strict temperature-regulated storage and distribution channels to maintain biological and chemical molecular stability across all delivery routes. |
| VET-PANEL | Clinical Veterinary Advisory | Formulations developed in close consultation with field veterinarians, animal nutritionists, and livestock health practitioners. |

### 6.7 Section 05 — Atmospheric banner

| Field | Spec |
|-------|--------|
| Height | `h-[40vh] min-h-[300px]` |
| Image | `images.farmAtmospheric` |
| Overlay | `bg-deep-navy/30` |
| Alt | Dairy livestock grazing in open pastoral landscape at dawn |
| Copy | None |

### 6.8 Section 06 — CTA

| Field | Content |
|-------|---------|
| Variant | cream (`bg-warm-cream`) |
| Title | Explore Our Products |
| Subtitle | Discover our complete range of veterinary medicines and nutritional supplements. |
| Primary | View Products → `/products` |

---

## 7. Enquire Now / Contact (`/contact`)

### 7.1 Mission

Commercial and clinical lead capture: contact facts + enquiry form. This is the **Enquire Now** destination from the navbar.

**SEO description:** Contact Cattlevibes for institutional supply, commercial procurement, and veterinary product enquiries.

**Query:** `searchParams.product` → form field “Product Interested In”.

### 7.2 Page flow

```
1. Intro (light pebble) — breadcrumbs + commercial H1
2. Two columns (white) — contact info + EnquiryForm
```

No photo hero (`images.contactHero` exists in `site.ts` but is **unused**).

### 7.3 Section 01 — Intro

| Field | Content |
|-------|---------|
| Background | `bg-light-pebble` |
| Breadcrumbs | Home · Contact |
| Eyebrow | Commercial Enquiries · Institutional Procurement |
| H1 | Commercial & Clinical Enquiries |
| Subtitle | Connect with our veterinary support team for bulk distribution agreements, formulation specifications, or institutional tender procurement. |

### 7.4 Section 02 — Contact column (left)

| Field | Content |
|-------|---------|
| H2 | Contact Information |
| Intro | Reach out to {legal name} for product enquiries, catalogue requests, and distribution information. |

**Contact items** (`ContactItem`):

| Label | Value | Href |
|-------|--------|------|
| Call Us | +91 98765 43210 | `tel:+919876543210` |
| Email Us | info@cattlevibes.com | `mailto:info@cattlevibes.com` |
| Address | India | — |

Icon treatment: cream square, Yam stroke icons (`Phone`, `Mail`, `MapPin`).

**Callout box** (`rounded-xl border bg-light-pebble/60`):

- Title: Product Enquiries  
- Body: For specific product information, please include the product name in your enquiry. Our team will provide brochure-derived details and guidance.

### 7.5 Section 02 — Form column (right)

**Default heading:** Product Enquiry  

**Success state** (after submit; no API):

- Title: Thank you for your enquiry  
- Body: Our team will get back to you shortly.

**Fields**

| Label | Name | Required | Grid | Placeholder |
|-------|------|----------|------|-------------|
| Name | name | yes | 1 col | Dr. Rajesh Kumar |
| Phone | phone | yes | 1 col | +91 98765 43210 |
| Email | email | yes | full | rajesh@example.com |
| Company / Farm | company | no | 1 col | Green Valley Dairy |
| Location | location | no | 1 col | Punjab, India |
| Product Interested In | product | no | full | e.g. LIVER-OK, CATTLESTAR (or query string) |
| Message | message | no | textarea 4 rows | Please share specific requirements, quantities, or livestock health concerns... |

Submit: **Send Enquiry** (`Button` primary, full width, `lg`). Client `preventDefault` only.

Inputs: `rounded-xl border-border`, focus Yam border + ring.

---

## 8. Cross-page content map

```
SOLUTIONS                          RESOURCES                         ABOUT                              CONTACT
─────────────────────────────────  ───────────────────────────────  ────────────────────────────────  ────────────────────────────
Intro heading                      Intro + catalogue request        Photo hero H1                     Commercial H1
6 category stories → products      4 doc cards (coming soon)        Corporate 3 paragraphs             Phone / email / address
9 animals → /products               5 FAQs (shared with home)        3 clinical dossiers                 Enquiry form
                                   Navy CTA → /contact                4 governance tiles
                                                                     Photo band
                                                                     Cream CTA → /products
```

**Shared copy themes:** veterinary medicines, nutrition, digestive/liver, parasites, calcium/milk, GMP / quality, enquire / catalogue, consult a veterinarian.

**Duplication to resolve in a redesign:** FAQ lives on Home and Resources; catalogue is promised on Resources but not downloadable; Solutions animal grid does not filter by species; About “98.4% Absorption” and similar metrics are not sourced from the product catalogue.

---

## 9. Redesign notes (what this inventory implies)

Keep this list as constraints / opportunities, not as implemented UI.

1. **Four different page templates** — intro band vs photo hero vs form split. A redesign can unify rhythm (hero type, section padding, CTA closers) while keeping distinct jobs: explore / learn / trust / enquire.
2. **Stock photography is weak** — Unsplash 404s and generic farm shots. New design should assume **owned or licensed livestock/clinical imagery**, or illustration, not these URLs.
3. **Solutions is a catalogue gateway** — preserve the six therapeutic IDs and product name lists if the SKU map stays; they already deep-link into `/products`.
4. **Resources is a placeholder archive** — redesign should either ship real PDFs or reframe as “request only” without four empty DOC-* cards.
5. **About is the densest clinical voice** — dossier/governance language is stronger than Solutions body copy; decide one brand voice for all four pages.
6. **Contact is the commercial close** — keep `?product=` for catalogue and product-page handoff; form still needs a real endpoint.
7. **Chrome** — any new pages must clear `--nav-height` and sit under the transparent PillNav; Enquire Now remains the primary path into `/contact`.

---

*Generated from the live App Router pages and `src/data/site.ts` as of the current codebase. Home-only sections are documented separately in `HOME_PAGE_DESIGN.md`.*
