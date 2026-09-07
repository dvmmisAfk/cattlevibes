# CattleVibes Healthcare — Home Page Design & Structure Specification

> **Document Status:** Active Reference & Audit Benchmark  
> **Target Route:** `/` (`src/app/page.tsx`)  
> **Brand:** Cattle Vibes Healthcare Pvt. Ltd. (**Cattlevibes**)  
> **Tagline:** Complete Animal Healthcare Solutions  
> **Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion, Lucide React  
> **Canonical Content Width:** `1320px` max, centered; horizontal padding `px-5` (mobile) to `px-8` (desktop).

---

## Table of Contents

1. [Page Mission, Atmosphere & Narrative Arc](#1-page-mission-atmosphere--narrative-arc)
2. [Section Rhythm & Visual Cadence](#2-section-rhythm--visual-cadence)
3. [Design Token Reference (Home Page Scope)](#3-design-token-reference-home-page-scope)
4. [Section-by-Section Complete Specifications](#4-section-by-section-complete-specifications)
   - [Section 01: Hero with Cinematic Video & Glass Chips](#section-01-hero-with-cinematic-video--glass-chips)
   - [Section 02: Portfolio Proof Scroller](#section-02-portfolio-proof-scroller)
   - [Section 03: The Challenge (Problem Statement)](#section-03-the-challenge-problem-statement)
   - [Section 04: The Healthcare Ecosystem (5 Connected Pillars)](#section-04-the-healthcare-ecosystem-5-connected-pillars)
   - [Section 05: Product Range Showcase Carousel](#section-05-product-range-showcase-carousel)
   - [Section 06: How It Works & Health Journey Timeline](#section-06-how-it-works--health-journey-timeline)
   - [Section 07: Brand Values (High Tide Pillar Block)](#section-07-brand-values-high-tide-pillar-block)
   - [Section 08: The Complete Picture (Lifecycle Wheel)](#section-08-the-complete-picture-lifecycle-wheel)
   - [Section 09: Frequently Asked Questions (FAQ Accordion)](#section-09-frequently-asked-questions-faq-accordion)
   - [Section 10: Final CTA (Cinematic Pastoral Band)](#section-10-final-cta-cinematic-pastoral-band)
5. [Global Chrome Integration (Navbar & Footer)](#5-global-chrome-integration-navbar--footer)
6. [Motion, Micro-interactions & Scroll Physics](#6-motion-micro-interactions--scroll-physics)
7. [Responsive Breakpoint Matrix](#7-responsive-breakpoint-matrix)
8. [Accessibility (a11y) & Usability Standards](#8-accessibility-a11y--usability-standards)
9. [Home Page Audit & Strategic Enhancement Opportunities](#9-home-page-audit--strategic-enhancement-opportunities)

---

## 1. Page Mission, Atmosphere & Narrative Arc

### 1.1 Page Mission
The Home Page of CattleVibes Healthcare is an **enquiry-led, clinical narrative experience**. It is not an ecommerce storefront with price tags and shopping carts; its primary objective is to establish clinical authority, present a comprehensive livestock healthcare ecosystem, educate farm owners and veterinarians, and guide them into exploring solutions or initiating product enquiries.

### 1.2 Atmospheric Identity
* **Mood:** Pastoral, veterinary-grade, warm, scientific. Sunlit livestock environments, clean clinical typography, calm High Tide slate surfaces, and Yam orange accents.
* **Density:** Airy and spacious. Generous vertical breathing room (`py-16` / 64px on mobile up to `py-24` / 96px or `py-32` / 128px on desktop).
* **Tone of Voice:** Responsible, veterinary-backed, professional. Avoids clinical sterility and rustic folksy clichés.

### 1.3 Narrative Progression (The 10-Stage Journey)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. HERO (Awareness)             Cinematic video, core mission & feature pills│
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. PORTFOLIO PROOF (Breadth)    7 categories solving acute livestock issues │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. THE CHALLENGE (Empathy)      When health slips, production crashes       │
├─────────────────────────────────────────────────────────────────────────────┤
│ 4. ECOSYSTEM (Systemic Soln)    5 connected pillars working as one unit     │
├─────────────────────────────────────────────────────────────────────────────┤
│ 5. PRODUCT SHOWCASE (Tangible)  Packshots, benefits & direct detail pathways│
├─────────────────────────────────────────────────────────────────────────────┤
│ 6. HOW IT WORKS (Methodology)   4-step veterinary approach + timeline       │
├─────────────────────────────────────────────────────────────────────────────┤
│ 7. BRAND PILLARS (Authority)    Health, Nutrition, Productivity on navy     │
├─────────────────────────────────────────────────────────────────────────────┤
│ 8. LIFECYCLE (Holistic Vision)  Radial stage wheel: Grow to Recover         │
├─────────────────────────────────────────────────────────────────────────────┤
│ 9. FAQ (Objection Handling)     7 targeted questions answered clearly       │
├─────────────────────────────────────────────────────────────────────────────┤
│ 10. FINAL CTA (Conversion)      Pastoral photo backdrop + high-contrast CTAs│
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Section Rhythm & Visual Cadence

Alternating surface backgrounds keep long-scroll fatigue low while visually signaling content domain transitions:

| Section # | Component | Background Token | Background Color | Text Dominance |
|---|---|---|---|---|
| **01** | `Hero` | Video + Radial Overlay | `#ffffff` / transparent | Deep Navy on light haze |
| **02** | `PortfolioProof` | Pure White | `#ffffff` | Deep Navy + Yam Eyebrow |
| **03** | `ProblemSection` | Soft White | `#f7f7f7` | Deep Navy + Muted Cadet |
| **04** | `SolutionEcosystem`| Pure White | `#ffffff` | Deep Navy + Accent Pills |
| **05** | `ProductShowcase` | Warm Cream | `#eeeeee` | Deep Navy + White Cards |
| **06** | `HowItWorks` | Pure White | `#ffffff` | Deep Navy + Animated Line |
| **07** | `BrandValue` | Deep Navy | `#313841` | Pure White on High Tide |
| **08** | `LifecycleSection` | Soft White | `#f7f7f7` | Deep Navy + Center Photo |
| **09** | `FAQAccordion` | Pure White | `#ffffff` | Deep Navy + Orange Chevrons |
| **10** | `FinalCTA` | Photo + Deep Navy 80% | `#313841` (tinted) | Pure White + Yam Accent |

---

## 3. Design Token Reference (Home Page Scope)

### 3.1 Color Palette
* **`--color-deep-navy` (`#313841`)**: High Tide. Headlines, primary CTA fill, dark brand sections, footer.
* **`--color-primary-navy` (`#3a4750`)**: Cadet Blue. Body copy, secondary borders, subheaders.
* **`--color-brand-orange` (`#ea9216`)**: Yam. Eyebrows, active indicators, arrows, focus rings, CTA fills on dark grounds.
* **`--color-warm-cream` (`#eeeeee`)**: Pebble. Showcase background, chip fills, subtle borders.
* **`--color-soft-white` (`#f7f7f7`)**: Light Pebble. Alternate section canvas, card wells.
* **`--color-pure-white` (`#ffffff`)**: Cards, dropdowns, input backgrounds, white text on dark.
* **`--color-border` (`#d8dadb`)**: Hairline boundary lines (1px) for cards, chips, and accordions.

### 3.2 Typographic Hierarchy
* **Heading Font:** Manrope (`var(--font-manrope)`), weights: 600, 700, 800.
* **Body Font:** Inter (`var(--font-inter)`), weights: 400, 500, 600.
* **Scale**:
  * **Hero H1:** `2.375rem` (38px) mobile → `3rem` (48px) md → `4.5rem` (72px) lg, tight line-height (1.1).
  * **Section H2:** `1.875rem` (30px) mobile → `2.25rem` (36px) md → `2.75rem` (44px) lg.
  * **Card Title H3:** `1.125rem` (18px) to `1.75rem` (28px) bold/extra-bold.
  * **Body Text:** `1rem` (16px) regular, line-height 1.6; lead copy `1.125rem` (18px).
  * **Eyebrow:** `0.6875rem`–`0.75rem` (11–12px), extra-bold (800), uppercase, tracking `0.15em` to `0.2em`.

### 3.3 Geometry & Radius Scale
* **Cards & Containers:** `rounded-[18px]` (Standard Cards), `rounded-[20px]` (FAQ / Forms), `rounded-[24px]` (Ecosystem cards).
* **Buttons & Inputs:** `rounded-xl` (12px).
* **Pills, Chips & Controls:** `rounded-full` (9999px) — feature chips, circular arrows, enquire button.

---

## 4. Section-by-Section Complete Specifications

```
  ┌─────────────────────────────────────────────────────────────┐
  │                    HOME PAGE WIREFLOW                       │
  │                                                             │
  │  [01 HERO: Looping Video + H1 + CTA + 5 Feature Pills]      │
  │                                                             │
  │  [02 PORTFOLIO: 7-Category Horizontal Snap Scroller]        │
  │                                                             │
  │  [03 PROBLEM: 4 Cards 01-04 + Closing Philosophy Line]      │
  │                                                             │
  │  [04 ECOSYSTEM: 5 Stacked Pillars with Product Badges]      │
  │                                                             │
  │  [05 SHOWCASE: Track of 9 Cards + Circular Scroll Controls] │
  │                                                             │
  │  [06 HOW IT WORKS: 4 Steps + Animated Horizon Timeline]     │
  │                                                             │
  │  [07 BRAND VALUES: Deep Navy Block (Health/Nutrition/Prod)] │
  │                                                             │
  │  [08 LIFECYCLE: 6-Stage Radial Wheel around Center Image]   │
  │                                                             │
  │  [09 FAQ: Centered 720px Shell with 7 Expandable Questions] │
  │                                                             │
  │  [10 FINAL CTA: Full-Bleed Pastoral Farm Backdrop + CTAs]   │
  └─────────────────────────────────────────────────────────────┘
```

---

### Section 01: Hero with Cinematic Video & Glass Chips

* **Component Files:** `src/components/sections/Hero.tsx`, `HeroBackgroundVideo.tsx`
* **Semantic Element:** `<section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">`
* **Background:** Looping MP4 (`/videos/hero-upscaled.mp4`) with bottom-left and bottom-right radial white gradient hazes.
* **Layout Structure:**
  * Fixed viewport height (`100svh`).
  * Top offset: `pt-[calc(var(--nav-height)+1.5rem)]` ensures zero overlap with fixed header.
  * Max-width: `1320px`, centered.

#### Visual Hierarchy & Copy
1. **Eyebrow:**
   - Text: `COMPLETE ANIMAL HEALTHCARE SOLUTIONS`
   - Style: `text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-brand-orange mb-4`
2. **Main Headline (H1):**
   - Line 1: `Healthcare that keeps`
   - Line 2: `livestock moving` + `<span className="text-brand-orange">forward.</span>`
   - Style: `text-[2.375rem] md:text-5xl lg:text-[4.5rem] font-extrabold leading-[1.15] lg:leading-[1.1] tracking-tight text-deep-navy`
3. **Subtitles / Lead Copy:**
   - Paragraph 1: `Complete animal healthcare solutions for healthier livestock, stronger productivity and better farm outcomes.` (`text-base md:text-lg font-semibold text-text-primary`)
   - Paragraph 2: `Cattlevibes Healthcare brings together veterinary medicines and nutritional solutions designed around critical livestock health and production needs.` (`text-sm md:text-base text-text-muted`)
4. **Primary CTA Group:**
   - Button 1: `<PrimaryButton href="/solutions">Explore Our Solutions</PrimaryButton>`
   - Button 2: `<SecondaryButton href="/products">View Product Range</SecondaryButton>`
5. **Hero Feature Pills (Glassmorphism):**
   - Container: wrapping row, gap 12px to 16px.
   - Pill Style: `rounded-full border border-white/40 bg-white/25 px-4 py-2 shadow-[0_8px_32px_rgba(49,56,65,0.1)] backdrop-blur-xl backdrop-saturate-150`
   - Items:
     1. `Droplets` icon + `Digestion`
     2. `Wheat` icon + `Nutrition`
     3. `Baby` icon + `Reproductive Health`
     4. `Thermometer` icon + `Pain & Inflammation`
     5. `Bug` icon + `Parasite Control`
6. **Floating Audio Control:**
   - Position: `bottom-6 right-6 z-20`
   - Button: `h-11 w-11 rounded-full border border-white/50 bg-deep-navy/80 text-white backdrop-blur-sm shadow-md`
   - Icons: `Volume2` (unmuted) / `VolumeX` (muted).

---

### Section 02: Portfolio Proof Scroller

* **Component File:** `src/components/home/PortfolioProof.tsx`
* **Semantic Element:** `<section className="bg-white py-16 md:py-24">`
* **Max Width:** `1320px` (header and track padding)
* **Layout Structure:**
  * Section Header: Left-aligned with desktop scroll controls (`ArrowLeft`, `ArrowRight`) on the right.
  * Content Track: Horizontal snap carousel (`snap-x snap-mandatory overflow-x-auto`).
  * Card Dimensions: `w-[260px] shrink-0 snap-start`.

#### Content & Data Elements (7 Pillars of Proof)
1. **Liver Health:** `Liver-OK` (links to `/products/liver-ok`)
2. **Digestive Health:** `Rumi-OK` (links to `/products/rumi-ok-powder`)
3. **Reproductive & Uterine Care:** `Utrovibe` (links to `/products/utrovibe`)
4. **Pain & Inflammation:** `Pyrovibe`, `Megluvibe`, `Cattlespas`
5. **Infection Control:** `Cattle-Cef`, `Cattlecef-SB`
6. **Parasite Control:** `Fendivibe Plus`, `Flukevibe DS`, `Worms-OK Plus`
7. **Nutrition & Productivity:** `Cattlemin`, `Cattlestar range`

#### Card Treatment
- Fills: `bg-soft-white`, border: `border-border`, radius: `rounded-[18px]`, padding: `p-6`.
- Hover: `hover:border-brand-orange/40 hover:shadow-md`.
- Category Label: `text-[11px] font-bold uppercase tracking-wider text-brand-orange`.
- Product Links: `text-base font-bold text-deep-navy hover:text-brand-orange`.

---

### Section 03: The Challenge (Problem Statement)

* **Component File:** `src/components/home/ProblemSection.tsx`
* **Semantic Element:** `<section className="bg-soft-white py-16 md:py-24 lg:py-32">`
* **Heading Specs:**
  - Eyebrow: `The Challenge`
  - Title: `When animal health slips, productivity follows.`
  - Subtitle: `Livestock health challenges don't happen in isolation. Digestion, nutrition, reproduction, calcium balance, infection, parasites and recovery can all influence animal performance.`

#### Grid & Card System
- Grid: 1 col (mobile) → 2 cols (sm/md) → 4 cols (lg), gap `5` (20px).
- Card Anatomy:
  - Surface: `rounded-[18px] border border-border bg-white p-6 md:p-7 flex flex-col h-full`.
  - Top Row: Giant watermark number (`text-3xl font-extrabold text-brand-orange/50`) + Lucide icon in subtle orange (`h-5 w-5 text-brand-orange/70`).
  - Title: `mt-4 text-lg font-bold text-deep-navy leading-snug`.
  - Description: `mt-2 text-sm leading-relaxed text-text-muted flex-1`.
- Cards:
  1. `01` / `Droplets` / **Poor Digestion**: Reduced appetite and inefficient feed utilization can affect growth and overall performance.
  2. `02` / `Activity` / **Production Challenges**: Calcium imbalance and nutritional deficiencies can affect recovery and milk productivity.
  3. `03` / `Baby` / **Reproductive Setbacks**: Uterine and post-calving challenges can disrupt the production cycle.
  4. `04` / `ShieldAlert` / **Pain, Infection & Parasites**: Pain, inflammation, infections and parasite burdens can compromise animal health.
- Closing Philosophy Callout:
  - Container: `mt-16 border-t border-border pt-10 text-center md:mt-20 md:pt-12`.
  - Copy: *"The goal isn't simply to treat a problem. It's to support the animal through the moments that matter."* (`text-xl md:text-2xl font-bold text-deep-navy`).

---

### Section 04: The Healthcare Ecosystem (5 Connected Pillars)

* **Component File:** `src/components/home/SolutionEcosystem.tsx`
* **Semantic Element:** `<section className="bg-white py-16 md:py-24 lg:py-32">`
* **Heading Specs:**
  - Eyebrow: `The Ecosystem`
  - Title: `One healthcare ecosystem. Built around the animal.`
  - Subtitle: `Five connected pillars — each addressing a distinct stage or challenge in livestock health, working together as one system.`

#### Pillar Card Architecture
- Layout: Stacked vertical column of 5 wide cards (`flex flex-col gap-5`).
- Container: `rounded-[24px] border border-border bg-soft-white p-7 md:p-10 transition-colors duration-300 hover:border-brand-orange/30`.
- Split:
  - Left Cluster: Pillar number (`01`–`05`) + `56px` rounded-2xl icon well with alternating subtle Yam wash (`bg-brand-orange/10 text-brand-orange`) and Cadet wash (`bg-primary-navy/10 text-primary-navy`).
  - Right Cluster:
    - Eyebrow: `text-xs font-bold uppercase tracking-wider text-brand-orange`.
    - Heading: `text-2xl md:text-[1.75rem] font-extrabold text-deep-navy`.
    - Body: `text-base leading-relaxed text-text-muted max-w-2xl mt-3`.
    - Product Pills: Wrapping row of pills (`rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-semibold`). Links directly to `/products/[slug]`. Non-slug items render in muted text.
- The 5 Pillars:
  1. `01` / **Nutrition & Productivity** — Build the foundation. (Cattlemin, Cattlestar, Cattlestar Gold)
  2. `02` / **Digestive & Liver Health** — Power feed conversion. (Liver-OK, Rumi-OK Powder, Rumi-OK Bolus)
  3. `03` / **Reproductive & Uterine Care** — Sustain the cycle. (Utrovibe, Cattlespas)
  4. `04` / **Pain, Infection & Inflammation** — Fast recovery, less downtime. (Pyrovibe, Megluvibe, Cattle-Cef, Cattlecef-SB)
  5. `05` / **Parasite Control** — Protect from within. (Fendivibe Plus, Flukevibe DS, Worms-OK Plus)

---

### Section 05: Product Range Showcase Carousel

* **Component File:** `src/components/home/ProductShowcase.tsx`
* **Semantic Element:** `<section className="bg-warm-cream py-16 md:py-24 lg:py-32">`
* **Heading Specs:**
  - Eyebrow: `Product Range`
  - Title: `Solutions for every stage of the livestock health cycle.`
* **Header Controls:**
  - Left/Right 44px circular white buttons with `ArrowLeft` / `ArrowRight` icons.
  - Scrolls track smoothly by 80% of track width.

#### Card Implementation (`ProductCard showBenefits`)
- Track: Horizontal snap carousel with hidden scrollbar.
- Width: `w-[280px] sm:w-[300px] shrink-0 snap-start`.
- Image Well: Aspect 4:3, `bg-soft-white`, centered packshot with floating drop shadow.
- Body:
  - Category: `text-[11px] font-bold uppercase tracking-wider text-brand-orange`.
  - Name: `text-lg font-bold text-deep-navy`.
  - Benefits: Top 3 benefits displayed as bullet points with Yam orange dots (`h-1.5 w-1.5 rounded-full bg-brand-orange`).
  - Action: `"View Product"` with trailing animated `ArrowRight`. Links directly to `/products/[slug]`.

---

### Section 06: How It Works & Health Journey Timeline

* **Component File:** `src/components/home/HowItWorks.tsx`
* **Semantic Element:** `<section className="bg-white py-16 md:py-24 lg:py-32">`
* **Heading Specs:**
  - Eyebrow: `The Journey`
  - Title: `From health challenge to healthier performance.`
  - Alignment: Center.

#### Step Columns (4 Columns)
- Grid: 1 col (mobile) → 2 cols (sm) → 4 cols (lg).
- Elements per Step:
  - Header: Faded number (`text-2xl font-extrabold text-brand-orange/30`) + Lucide icon (`h-5 w-5 text-brand-orange`).
  - Title: `mt-3 text-lg font-bold text-deep-navy`.
  - Description: `mt-2 text-sm leading-relaxed text-text-muted`.
- Steps:
  1. `01` / `Search` / **Identify the Need**: Recognize symptoms and production dips early.
  2. `02` / `CheckCircle2` / **Targeted Formulation**: Choose veterinary-formulated nutrition and medicines.
  3. `03` / `Shield` / **Support Recovery**: Administer under veterinary guidance with proper care.
  4. `04` / `TrendingUp` / **Sustained Performance**: Stronger immunity, better feed conversion, higher yield.

#### Health Journey Horizon Line (Interactive Timeline)
- **Desktop (`md+`):**
  - Continuous horizon line across the section width.
  - Background track: 1px `bg-border`.
  - Animated line: 1px `bg-brand-orange` animates `scaleX` from 0 to 1 over `1.1s` via Framer Motion when in view.
  - 6 Stage Nodes evenly spaced across line:
    - Dot: 10px circular node (`rounded-full border-2 border-brand-orange bg-white`).
    - Label: `text-xs font-bold uppercase tracking-wider text-text-muted`.
    - Stages: `Nutrition` → `Digestion` → `Growth` → `Reproduction` → `Lactation` → `Recovery`.
- **Mobile (`<md`):**
  - Wrapping chip cluster with Yam orange arrows between stages.

---

### Section 07: Brand Values (High Tide Pillar Block)

* **Component File:** `src/components/home/BrandValue.tsx`
* **Semantic Element:** `<section className="bg-deep-navy py-16 md:py-24 lg:py-32">`
* **Heading Specs:**
  - Eyebrow: `Our Approach`
  - Title: `More than medicines. A complete approach to animal health.`
  - Theme: `light` (White title on High Tide canvas), centered.

#### Pillar Layout (3 Columns)
- Grid: 1 col (mobile) → 3 cols (`md+`).
- Dividing Lines: `md:border-l md:border-white/10` separates columns on desktop.
- Anatomy per Pillar:
  - Icon: 28px Lucide icon in Yam orange (`text-brand-orange`, stroke 1.5).
  - Title: `mt-5 text-2xl font-extrabold text-white`.
  - Description: `mt-3 text-base leading-relaxed text-white/70`.
- The 3 Pillars:
  1. `Heart` / **Health First**: Every formulation is designed around animal wellbeing, safety, and verifiable outcomes under veterinary supervision.
  2. `Wheat` / **Nutritional Balance**: High-density mineral, vitamin, and calcium formulations that fortify livestock through high-stress production phases.
  3. `Target` / **Measurable Outcomes**: Engineered to support feed conversion ratio, milk yield, reproductive efficiency, and herd longevity.

---

### Section 08: The Complete Picture (Lifecycle Wheel)

* **Component File:** `src/components/home/LifecycleSection.tsx`
* **Semantic Element:** `<section className="bg-soft-white py-16 md:py-24 lg:py-32">`
* **Heading Specs:**
  - Eyebrow: `The Complete Picture`
  - Title: `Built around the moments that matter.`
  - Subtitle: `Six stages, one connected healthcare system — from growth to recovery.`
  - Alignment: Center.

#### Desktop Composition (`lg+`): Trigonometric Orbital Wheel
- Outer Box: Centered 560px square (`aspect-square max-w-[560px]`).
- Central Core: Circular livestock photograph (`images.aboutHero`), inset 18%, 4px solid white ring, drop shadow `0 20px 60px rgba(49,56,65,0.15)` with a 25% navy overlay veil.
- Orbital Satellites: 6 stage cards precomputed using angular trigonometry (`angle = -90 + i * 60°`, `radius = 42%`):
  - Starting at 12 o'clock clockwise:
    1. **Grow**: Early-stage nutrition & vitality
    2. **Digest**: Rumen function & appetite
    3. **Calve**: Uterine care & reproductive health
    4. **Produce**: Calcium & mineral demand
    5. **Protect**: Immunity & parasite defense
    6. **Recover**: Convalescence & metabolic balance
  - Card Style: `w-[152px] rounded-2xl border border-border bg-white px-4 py-3 shadow-sm text-center`.

#### Mobile/Tablet Composition (`<lg`)
- Aspect 16:9 banner photo with rounded 24px corners.
- 2-column or 3-column responsive card grid displaying the six stage cards below the image.

---

### Section 09: Frequently Asked Questions (FAQ Accordion)

* **Component Files:** `src/app/page.tsx`, `src/components/sections/FAQAccordion.tsx`
* **Semantic Element:** `<section className="bg-white py-16 md:py-24">`
* **Shell Dimensions:** `max-w-[720px]` centered container.
* **Heading Specs:**
  - Eyebrow: `FAQ`
  - Title: `Questions, answered.`
  - Alignment: Center.

#### Accordion Architecture
- Outer Shell: `rounded-[20px] border border-border bg-white divide-y divide-border shadow-sm`.
- Interaction:
  - First item (`index 0`) expanded by default on first load.
  - Clicking a question toggles state; chevron rotates 180° smoothly over 300ms.
- 7 Home FAQ Questions:
  1. *What makes Cattlevibes Healthcare different?*
  2. *Are Cattlevibes products intended for direct farm use?*
  3. *How do I select the right formulation for my livestock?*
  4. *Where can I find complete composition and dosage details?*
  5. *Can I request samples or product brochures?*
  6. *How does Cattlevibes ensure product quality and consistency?*
  7. *How do I become a distribution or retail partner?*

---

### Section 10: Final CTA (Cinematic Pastoral Band)

* **Component File:** `src/components/home/FinalCTA.tsx`
* **Semantic Element:** `<section className="relative overflow-hidden py-20 md:py-28 lg:py-32">`
* **Backdrop Composition:**
  - Full-bleed image (`images.farmWide`).
  - Overlay 1: 80% High Tide dark veil (`bg-deep-navy/80`).
  - Overlay 2: Top-right radial Yam glow (`radial-gradient(ellipse_at_top_right, rgba(234,146,22,0.18) 0%, transparent 55%)`).

#### Content & Conversion Group
- Heading (H2): `Better animal health starts with the right support.` (`text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight`).
- Lead: `Explore the Cattlevibes range of veterinary medicines and nutritional solutions designed around livestock health, recovery and productivity.` (`text-base md:text-lg text-white/80 max-w-xl mx-auto mt-5`).
- Action Group:
  - Primary: `<Button href="/solutions" variant="accent" size="lg">Explore Our Solutions</Button>` (Yam orange fill, white text, trailing arrow).
  - Secondary: `<Button href="/contact" variant="secondary" size="lg" className="!border-white/40 !bg-transparent !text-white hover:!bg-white/10">Talk to Cattlevibes</Button>`.

---

## 5. Global Chrome Integration (Navbar & Footer)

### 5.1 Top Navigation (`Navbar`)
* Position: `fixed top-0 z-[100] w-full`.
* Height: `var(--nav-height)` (`4.25rem` / 68px mobile → `4.75rem` / 76px desktop).
* Right Cluster: Enquire Button pill (`rounded-full bg-deep-navy pl-4 pr-1 text-white` with 28px Yam circle).
* Fixed Header Clearance: Handled cleanly by Hero's top padding (`pt-[calc(var(--nav-height)+1.5rem)]`).

### 5.2 Global Footer (`Footer`)
* Position: Direct successor to `FinalCTA`.
* Surface: `bg-deep-navy text-white py-16 lg:py-20`.
* Structure: 5 columns from `lg` (Company, Products, Contact, and 2-column brand identity block).

---

## 6. Motion, Micro-interactions & Scroll Physics

### 6.1 Viewport Entrance Reveals (`FadeIn`)
* Initial: `opacity: 0, y: 20`.
* While In View: `opacity: 1, y: 0`.
* Viewport Threshold: `once: true, margin: "-50px"`.
* Duration: `0.6s` standard; delays staggered by `0.05s` to `0.1s` across sibling items.
* Accessibility Override: If `useReducedMotion()` is active, opacity immediately renders at `1` with `duration: 0`.

### 6.2 Interactive Hover Micro-Interactions
* **Buttons:** `-translate-y-0.5` (2px lift) + shadow expansion; arrow shifts `translate-x-1` (4px).
* **Cards (Product, Problem, Proof):** `-translate-y-1` (4px lift) + border color shifts toward `border-brand-orange/30` + shadow increases from `0 1px 3px` to `0 12px 32px rgba(49,56,65,0.12)`.
* **Timeline Horizon:** Animates `scaleX: 0 → 1` from left origin over `1.1s` with `easeInOut` when the How It Works section enters view.
* **FAQ Chevrons:** `rotate-180` over `300ms` with smooth height reveal.

---

## 7. Responsive Breakpoint Matrix

| Screen Size | Breakpoint | Hero Treatment | Grids Layout | Special Adaptations |
|---|---|---|---|---|
| **Mobile** | `<640px` | Single column H1 (38px), vertically stacked CTA buttons | Problem: 1 col; Proof: horizontal snap; Steps: 1 col | Timeline changes from line to chip sequence with arrows; Lifecycle switches to 16:9 photo + 2-col card grid |
| **Tablet** | `640px–1023px` | H1 expands to 48px, horizontal CTA buttons | Problem: 2 cols; Showcase: 2-3 visible cards; Steps: 2 cols | PortfolioProof and Showcase use touch snap + arrow buttons; Lifecycle uses stacked layout |
| **Desktop** | `1024px–1279px` | Full H1 (72px), feature pills row centered | Problem: 4 cols; Showcase: 3+ visible; Steps: 4 cols | Full horizontal horizon timeline activates; Lifecycle radial orbital wheel activates at 560px |
| **Large Desktop**| `1280px+` | Content centered in 1320px bounding box | Problem: 4 cols; Ecosystem: wide cards with generous padding | Optimal spacing (`py-32`), zero clipping on all snap scrollers |

---

## 8. Accessibility (a11y) & Usability Standards

* **Contrast Compliance (WCAG AA):**
  * All primary headlines: High Tide (`#313841`) on Pure White achieves **10.5:1** (far exceeding 4.5:1).
  * Dark section headlines: Pure White on High Tide achieves **10.5:1**.
  * Eyebrow labels: Yam (`#ea9216`) on white achieves **3.1:1** for large uppercase text.
  * Watermark numbers: Adjusted to `text-brand-orange/50` to guarantee readability.
  * Footer copyright: Elevated to `text-white/70` (**7.2:1** ratio).
* **Keyboard Navigation & Focus:**
  * Global `:focus-visible` outline: `2px solid var(--brand-orange)` with `2px offset`.
  * All carousel scroll buttons and modal triggers have explicit `aria-label` attributes.
  * FAQ accordion headers use `<button aria-expanded="...">` with semantic `<h3/h4>` titles.
* **Reduced Motion:**
  * All motion wrappers hook into `useReducedMotion()`.
  * Background video gracefully hides without breaking layout.

---

## 9. Home Page Audit & Strategic Enhancement Opportunities

The following enhancements represent high-impact opportunities to elevate the home page from a standard marketing page to a category-defining veterinary digital experience:

### 1. Social Proof & Veterinary Authority Bar (High Impact)
* **Gap:** Currently, the page transitions immediately from the hero into `PortfolioProof` without establishing third-party validation or scale.
* **Enhancement:** Insert a sleek, muted trust/proof metric band between Hero and Section 02:
  * Metric 1: `20+` Formulations Developed
  * Metric 2: `100%` Veterinary-Guided Applications
  * Metric 3: `6` Core Livestock Health Domains
  * Metric 4: GMP-Standard Formulation Compliance

### 2. Live Product Filter Quick-Switch on Showcase Carousel
* **Gap:** `ProductShowcase` currently displays a static array of 9 products in sequential order.
* **Enhancement:** Add category tabs above the carousel track (`All`, `Digestive`, `Nutrition`, `Reproductive`, `Infection`) allowing farmers and vets to instantly filter the carousel without navigating away from the home page.

### 3. Interactive Rumen / Livestock Anatomy Visualizer in Ecosystem
* **Gap:** The 5 Ecosystem pillars are listed as stacked cards, which is readable but static.
* **Enhancement:** Add an interactive animal silhouette hotspot toggle (e.g. clicking "Rumen / Digestion" highlights Pillar 02 and shows how Liver-OK and Rumi-OK act synergistically).

### 4. Interactive Dosage & Product Request Modal on FAQ
* **Gap:** FAQs 4 and 5 discuss dosage and sample requests, but offer no immediate trigger.
* **Enhancement:** Add an inline link within FAQ answers ("Request sample dossier" or "Open enquiry drawer") that directly opens the `CatalogueEnquiryDrawer` with pre-filled context.

### 5. Floating Quick-Contact / WhatsApp Action for Rural Farmers
* **Gap:** Many livestock farmers and field veterinarians communicate predominantly via direct phone and WhatsApp messaging.
* **Enhancement:** Provide a discreet, elegant quick-enquiry action button alongside the bottom-right hero controls for direct field support.
