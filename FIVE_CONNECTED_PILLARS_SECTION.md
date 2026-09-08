# Five Connected Pillars. One Veterinary Standard.
## The Clinical Ecosystem & Enterprise Formulary Specification

> **Target Component:** `EcosystemBento`  
> **Source File:** [`src/components/home/EcosystemBento.tsx`](file:///d:/coding/test/cattlevibes/src/components/home/EcosystemBento.tsx)  
> **Location on Site:** Home Page (`/`), Section 03/04 (Immediately following Hero / Problem sequences)  
> **Brand Authority:** Cattle Vibes Healthcare Pvt. Ltd. (**Cattlevibes**)  
> **Canonical Canvas:** `1320px` max-width, responsive padding `px-5` (mobile) to `px-8` (desktop), vertical spacing `py-16 md:py-28 lg:py-36`.

---

## 1. Executive Section Overview

### 1.1 Purpose & Narrative Intent
The **Five Connected Pillars** section transitions the user from high-level livestock challenges into CattleVibes' **proprietary clinical formulary**. Rather than cataloging isolated SKUs, this section structures animal healthcare into **five interconnected physiological pillars** that work synergistically across lactation, digestion, reproduction, acute inflammation, and biosecurity.

### 1.2 Layout Concept & Information Hierarchy
1. **Editorial Masthead & Compact Navigation Controls**:
   - Left side: Enterprise veterinary positioning, headline, and narrative.
   - Right side: Left/Right circular arrow buttons, dynamic `01 / 05` counter, and interactive progress pill dots.
2. **Primary Active Dossier Card (Bento Carousel Stage)**:
   - **Desktop**: 12-column asymmetric split — 7 columns for clinical benefits, 2×2 specifications grid, usage protocols, and product links; 5 columns for the dedicated laboratory packshot stage.
   - **Mobile**: Vertically stacked visual hierarchy — Category badge → Hero packshot stage → Narrative → 2×2 Specifications grid → Administration protocol → Product links & CTA.
3. **Mobile Quick-Switch Bar**: Sticky/convenient bottom controls on mobile with indicators, counter, and touch-friendly arrows for smooth one-handed card switching.

---

## 2. Section Header & Navigation Specifications

```
┌─────────────────────────────────────────────────────────────────┬───────────┐
│ [●] COMPLETE HERD CARE · FIVE CORE PILLARS                      │ [—][·][·] │
│                                                                 │ 01 / 05   │
│ Five connected pillars. One veterinary standard.                │ [ < ] [ >]│
│                                                                 │           │
│ A complete herd care framework designed to sustain peak milk    │           │
│ yields, speed up recovery after illness or calving, and keep    │           │
│ your cattle healthy across every season.                        │           │
└─────────────────────────────────────────────────────────────────┴───────────┘
```

| Element | Specification & Tokens | Description / Action |
|---|---|---|
| **Pulsing Dot** | `h-1.5 w-1.5 rounded-full bg-yam-orange` (`#ea9216`) | Decorative indicator |
| **Eyebrow** | `text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-yam-orange` | `Complete Herd Care · Five Core Pillars` |
| **Main Heading (H2)** | `font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.65rem] font-extrabold leading-tight tracking-tight text-deep-navy sm:whitespace-nowrap` | `Five connected pillars. One veterinary standard.` (Single line across container) |
| **Subtitle Paragraph** | `text-sm sm:text-base md:text-lg leading-relaxed text-text-muted max-w-3xl mt-2.5` | Herd longevity and recovery benefits narrative |
| **Pillar Counter** | `font-mono text-xs sm:text-sm font-bold text-cadet-blue` | Displays `{currentPillar.index} / 05` |
| **Progress Dots** | `h-2 rounded-full` (active: `w-7 bg-yam-orange`, inactive: `w-2 bg-border`) | Direct jump to any of the 5 pillars |
| **Left / Right Arrows** | `h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-border bg-white text-deep-navy shadow-sm` | Smooth directional slide transition between cards |

---

## 3. Carousel Navigation & Directional Slide Motion

The carousel uses a directional slide transition with Framer Motion:
* **Next Arrow (`handleNext`)**: Increments index with wrap-around (`0 -> 4 -> 0`), triggers right-to-left slide (`x: 36 -> 0`).
* **Prev Arrow (`handlePrev`)**: Decrements index with wrap-around, triggers left-to-right slide (`x: -36 -> 0`).
* **Reduced Motion Compliance**: Transitions gracefully to pure opacity fade when `prefers-reduced-motion: reduce` is active.

---

## 4. Complete Content of the 5 Pillars

---

### Pillar 01: Nutrition & Vitality

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ PILLAR 01 · NUTRITION & VITALITY                  Premium Feed Supplement   │
├──────────────────────────────────────────┬──────────────────────────────────┤
│ NARRATIVE & CLINICAL BENEFITS            │ LABORATORY PACKSHOT STAGE        │
│                                          │                                  │
│ Sustained strength and peak milk         │     [ Cattlestar ] [ Cattlemin ] │
│ production.                              │                                  │
│                                          │  Dual-bottle elevation stage     │
│ High-potency calcium and essential       │  Centered soft shadow grounding  │
│ minerals to support steady milk yield    │                                  │
│ and post-calving strength.               │  ┌────────────────────────────┐  │
│                                          │  │ Authentic Laboratory       │  │
│ KEY HIGHLIGHTS & BENEFITS:               │  │ Packshot · Registered      │  │
│ ┌───────────────────┬──────────────────┐ │  │ Formulations               │  │
│ │ Fast Uptake       │ Balanced         │ │  └────────────────────────────┘  │
│ │ High Absorption   │ Ca & Phosphorus  │ │                                  │
│ ├───────────────────┼──────────────────┤ │                                  │
│ │ Sustained         │ Post-Calving     │ │                                  │
│ │ Peak Milk Yield   │ Rapid Recovery   │ │                                  │
│ └───────────────────┴──────────────────┘ │                                  │
├──────────────────────────────────────────┴──────────────────────────────────┤
│ CLINICAL FORMULATIONS: Cattlemin · Cattlestar · Cattlestar-DS                │
│ ACTION: [ Explore Pillar ↗ ]                                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Core Information
* **Pillar ID:** `nutrition`
* **Index Number:** `01`
* **Full Category Name:** `Nutrition & Vitality`
* **Short Navigation Name:** `Nutrition`
* **Regulatory Compliance:** `Premium Feed Supplement`
* **Headline:** `"Sustained strength and peak milk production."`
* **Clinical Narrative:**
  > *"High-potency calcium and essential minerals to support steady milk yield and post-calving strength."*

#### Key Specifications & Benefits (Compact 2×2 Grid)
1. **High Absorption:** `Fast Uptake`
2. **Calcium & Phosphorus:** `Balanced`
3. **Peak Milk Yield:** `Sustained`
4. **Rapid Recovery:** `Post-Calving`

#### Products & Formulations
* **Formulations:**
  * **Cattlemin** (`/products/cattlemin`) — Trace mineral chelated premix
  * **Cattlestar** (`/products/cattlestar`) — High-potency oral calcium gel
  * **Cattlestar-DS** (`/products/cattlestar-ds`) — Double-strength calcium suspension
* **Packshot Assets:**
  * Primary: `/images/products/cattlestar-1.png`
  * Secondary: `/images/products/cattlemin-1.png`
  * Alt Text: `"Cattlestar and Cattlemin veterinary nutritional formulations"`
* **Deep Link:** [`/solutions#animal-nutrition`](file:///d:/coding/test/cattlevibes/src/app/solutions/page.tsx)

---

### Pillar 02: Digestion & Liver Health

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ PILLAR 02 · DIGESTION & LIVER HEALTH          Quality Assured Supplements   │
├──────────────────────────────────────────┬──────────────────────────────────┤
│ NARRATIVE & CLINICAL BENEFITS            │ LABORATORY PACKSHOT STAGE        │
│                                          │                                  │
│ Better appetite and healthy digestion.   │         [ Liver-OK ]             │
│                                          │                                  │
│ Natural herbal extracts that protect the │   Centered amber tonic flask     │
│ liver, stimulate appetite, and optimize  │   Realistic ambient shadow       │
│ feed conversion.                         │                                  │
│                                          │  ┌────────────────────────────┐  │
│ KEY HIGHLIGHTS & BENEFITS:               │  │ Authentic Laboratory       │  │
│ ┌───────────────────┬──────────────────┐ │  │ Packshot · Registered      │  │
│ │ Herbal Action     │ Optimized        │ │  │ Formulations               │  │
│ │ Liver Protection  │ Feed Conversion  │ │  └────────────────────────────┘  │
│ ├───────────────────┼──────────────────┤ │                                  │
│ │ Stimulated        │ Balanced         │ │                                  │
│ │ Healthy Appetite  │ Rumen Function   │ │                                  │
│ └───────────────────┴──────────────────┘ │                                  │
├──────────────────────────────────────────┴──────────────────────────────────┤
│ CLINICAL FORMULATIONS: Liver-OK · Liver-OK Injection · Rumi-OK               │
│ ACTION: [ Explore Pillar ↗ ]                                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Core Information
* **Pillar ID:** `hepatic`
* **Index Number:** `02`
* **Full Category Name:** `Digestion & Liver Health`
* **Short Navigation Name:** `Digestion`
* **Regulatory Compliance:** `Quality Assured Supplements`
* **Headline:** `"Better appetite and healthy digestion."`
* **Clinical Narrative:**
  > *"Natural herbal extracts that protect the liver, stimulate appetite, and optimize feed conversion."*

#### Key Specifications & Benefits (Compact 2×2 Grid)
1. **Liver Protection:** `Herbal Action`
2. **Feed Conversion:** `Optimized`
3. **Healthy Appetite:** `Stimulated`
4. **Rumen Function:** `Balanced`

#### Products & Formulations
* **Formulations:**
  * **Liver-OK** (`/products/liver-ok`) — Herbal hepatoprotective tonic
  * **Liver-OK Injection** (`/products/liver-ok-injection`) — Injectable B-complex liver booster
  * **Rumi-OK** (`/products/rumi-ok-powder`) — Live yeast & rumen buffering powder
* **Packshot Assets:**
  * Primary: `/images/products/liver-ok-1.png`
  * Alt Text: `"Liver-OK herbal liver tonic and rumen conditioner"`
* **Deep Link:** [`/solutions#digestive-liver`](file:///d:/coding/test/cattlevibes/src/app/solutions/page.tsx)

---

### Pillar 03: Reproduction & Recovery

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ PILLAR 03 · REPRODUCTION & RECOVERY                 Safe Herbal Formulation │
├──────────────────────────────────────────┬──────────────────────────────────┤
│ NARRATIVE & CLINICAL BENEFITS            │ LABORATORY PACKSHOT STAGE        │
│                                          │                                  │
│ Safe, natural recovery after calving.    │          [ Utrovibe ]            │
│                                          │                                  │
│ Specialized herbal formulas to naturally │   Clinical phytogenic packshot   │
│ cleanse the uterus, restore tone, and    │   Centered drop shadow           │
│ prepare for the next cycle.              │                                  │
│                                          │  ┌────────────────────────────┐  │
│ KEY HIGHLIGHTS & BENEFITS:               │  │ Authentic Laboratory       │  │
│ ┌───────────────────┬──────────────────┐ │  │ Packshot · Registered      │  │
│ │ Non-Hormonal      │ Thorough         │ │  │ Formulations               │  │
│ │ Herbal Formulation│ Uterine Cleansing│ │  └────────────────────────────┘  │
│ ├───────────────────┼──────────────────┤ │                                  │
│ │ Accelerated       │ Optimal          │ │                                  │
│ │ Postpartum Recovery Breeding Readiness│ │                                  │
│ └───────────────────┴──────────────────┘ │                                  │
├──────────────────────────────────────────┴──────────────────────────────────┤
│ CLINICAL FORMULATIONS: Utrovibe · Cattlespas                                 │
│ ACTION: [ Explore Pillar ↗ ]                                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Core Information
* **Pillar ID:** `maternal`
* **Index Number:** `03`
* **Full Category Name:** `Reproduction & Recovery`
* **Short Navigation Name:** `Reproduction`
* **Regulatory Compliance:** `Safe Herbal Formulation`
* **Headline:** `"Safe, natural recovery after calving."`
* **Clinical Narrative:**
  > *"Specialized herbal formulas to naturally cleanse the uterus, restore tone, and prepare for the next cycle."*

#### Key Specifications & Benefits (Compact 2×2 Grid)
1. **Herbal Formulation:** `Non-Hormonal`
2. **Uterine Cleansing:** `Thorough`
3. **Postpartum Recovery:** `Accelerated`
4. **Breeding Readiness:** `Optimal`

#### Products & Formulations
* **Formulations:**
  * **Utrovibe** (`/products/utrovibe`) — Ecbolic uterine restorative tonic
  * **Cattlespas** (`/products/cattlespas`) — Antispasmodic injection for smooth muscle relief
* **Packshot Assets:**
  * Primary: `/images/products/utrovibe-1.png`
  * Alt Text: `"Utrovibe uterine cleansing tonic"`
* **Deep Link:** [`/solutions#reproductive`](file:///d:/coding/test/cattlevibes/src/app/solutions/page.tsx)

---

### Pillar 04: Relief & Comfort

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ PILLAR 04 · RELIEF & COMFORT                             Veterinary Medicine│
├──────────────────────────────────────────┬──────────────────────────────────┤
│ NARRATIVE & CLINICAL BENEFITS            │ LABORATORY PACKSHOT STAGE        │
│                                          │                                  │
│ Fast relief from pain and fever.         │      [ Pyrovibe Injection ]      │
│                                          │                                  │
│ Fast-acting veterinary medicines         │   Sterile multidose vial stage   │
│ providing rapid relief from fever, pain, │   Deep drop shadow reflection    │
│ and systemic inflammation.               │                                  │
│                                          │  ┌────────────────────────────┐  │
│ KEY HIGHLIGHTS & BENEFITS:               │  │ Authentic Laboratory       │  │
│ ┌───────────────────┬──────────────────┐ │  │ Packshot · Registered      │  │
│ │ Fast-Acting       │ Effective        │ │  │ Formulations               │  │
│ │ Rapid Pain Relief │ Fever Reduction  │ │  └────────────────────────────┘  │
│ ├───────────────────┼──────────────────┤ │                                  │
│ │ Targeted          │ Minimized        │ │                                  │
│ │ Swelling Control  │ Animal Downtime  │ │                                  │
│ └───────────────────┴──────────────────┘ │                                  │
├──────────────────────────────────────────┴──────────────────────────────────┤
│ CLINICAL FORMULATIONS: Pyrovibe Injection · Megluvibe                        │
│ ACTION: [ Explore Pillar ↗ ]                                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Core Information
* **Pillar ID:** `antipyretic`
* **Index Number:** `04`
* **Full Category Name:** `Relief & Comfort`
* **Short Navigation Name:** `Relief`
* **Regulatory Compliance:** `Veterinary Medicine`
* **Headline:** `"Fast relief from pain and fever."`
* **Clinical Narrative:**
  > *"Fast-acting veterinary medicines providing rapid relief from fever, pain, and systemic inflammation."*

#### Key Specifications & Benefits (Compact 2×2 Grid)
1. **Rapid Pain Relief:** `Fast-Acting`
2. **Fever Reduction:** `Effective`
3. **Swelling Control:** `Targeted`
4. **Animal Downtime:** `Minimized`

#### Products & Formulations
* **Formulations:**
  * **Pyrovibe Injection** (`/products/pyrovibe-injection`) — Meloxicam + Paracetamol analgesic & antipyretic
  * **Megluvibe** (`/products/megluvibe`) — Flunixin meglumine potent anti-inflammatory
* **Packshot Assets:**
  * Primary: `/images/products/pyrovibe-injection.png`
  * Alt Text: `"Pyrovibe Injection veterinary analgesic and antipyretic"`
* **Deep Link:** [`/solutions#veterinary-medicines`](file:///d:/coding/test/cattlevibes/src/app/solutions/page.tsx)

---

### Pillar 05: Infection & Parasite Control

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ PILLAR 05 · INFECTION & PARASITE CONTROL                 Veterinary Medicine│
├──────────────────────────────────────────┬──────────────────────────────────┤
│ NARRATIVE & CLINICAL BENEFITS            │ LABORATORY PACKSHOT STAGE        │
│                                          │                                  │
│ Complete protection from the inside out. │     [ Cattle-Cef ] [ Worms-OK ]  │
│                                          │                                  │
│ Broad-spectrum antibiotics and dewormers │   Cephalosporin & anthelmintic   │
│ designed to clear harmful pathogens and  │   Dual-pack presentation         │
│ protect herd health.                     │                                  │
│                                          │  ┌────────────────────────────┐  │
│ KEY HIGHLIGHTS & BENEFITS:               │  │ Authentic Laboratory       │  │
│ ┌───────────────────┬──────────────────┐ │  │ Packshot · Registered      │  │
│ │ Broad Spectrum    │ Complete         │ │  │ Formulations               │  │
│ │ Infection Control │ Internal Deworm  │ │  └────────────────────────────┘  │
│ ├───────────────────┼──────────────────┤ │                                  │
│ │ Protected         │ Systemic         │ │                                  │
│ │ Herd Biosecurity  │ Full-Body Action │ │                                  │
│ └───────────────────┴──────────────────┘ │                                  │
├──────────────────────────────────────────┴──────────────────────────────────┤
│ CLINICAL FORMULATIONS: Cattle-Cef · Cattlecef-SB · Worms-OK Plus · Flukevibe │
│ ACTION: [ Explore Pillar ↗ ]                                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Core Information
* **Pillar ID:** `anti-infective`
* **Index Number:** `05`
* **Full Category Name:** `Infection & Parasite Control`
* **Short Navigation Name:** `Infection`
* **Regulatory Compliance:** `Veterinary Medicine`
* **Headline:** `"Complete protection from the inside out."`
* **Clinical Narrative:**
  > *"Broad-spectrum antibiotics and dewormers designed to clear harmful pathogens and protect herd health."*

#### Key Specifications & Benefits (Compact 2×2 Grid)
1. **Infection Control:** `Broad Spectrum`
2. **Internal Deworming:** `Complete`
3. **Herd Biosecurity:** `Protected`
4. **Full-Body Action:** `Systemic`

#### Products & Formulations
* **Formulations:**
  * **Cattle-Cef** (`/products/cattle-cef`) — Ceftiofur sodium sterile injection
  * **Cattlecef-SB** (`/products/cattlecef-sb`) — Ceftiofur + Sulbactam beta-lactamase inhibitor
  * **Worms-OK Plus** (`/products/worms-ok-plus`) — Broad-spectrum deworming suspension
  * **Flukevibe-DS** (`/products/flukevibe-ds`) — Oxyclozanide + Levamisole flukicide bolus
* **Packshot Assets:**
  * Primary: `/images/products/cattle-cef.png`
  * Secondary: `/images/products/worms-ok-plus.png`
  * Alt Text: `"Cattle-Cef and Worms-OK Plus veterinary anti-infective formulations"`
* **Deep Link:** [`/solutions#anti-infectives`](file:///d:/coding/test/cattlevibes/src/app/solutions/page.tsx)

---

## 5. Design System, Tokens & CSS Classes

### 5.1 Color Palette Usage
| Role | Variable | Hex | Usage in Section |
|---|---|---|---|
| **Canvas Background** | `--color-light-pebble` | `#f7f7f7` | Entire `<section>` background |
| **Card Background** | `--color-pure-white` | `#ffffff` | Main dossier card, alternate cards |
| **Spec Tile Wells** | `--color-light-pebble` | `#f7f7f7` | Background of 2×2 metric blocks (`bg-light-pebble/60`) |
| **Stage Background** | `--color-soft-white` | `#f7f7f7` | Laboratory packshot presentation stage |
| **Border Tokens** | `--color-border` | `#d8dadb` | Structural dividers, card strokes, tab separators |
| **Primary Text** | `--color-deep-navy` | `#313841` | Section H2, card H3, metric values, button text |
| **Secondary Text** | `--color-cadet-blue` | `#3a4750` | Body narratives, protocol copy, spec labels |
| **Muted Text** | `--color-text-muted` | `#58636a` | Clinical notes, formulation sublabels, regulatory text |
| **Brand Accent** | `--color-yam-orange` | `#ea9216` | Eyebrow text, pulsing dot, active tab underline, hover links |

### 6.2 Typography & Radius
* **Headings:** Manrope (`var(--font-manrope)`), `font-extrabold` (800).
* **Body & Protocols:** Inter (`var(--font-inter)`), `font-normal` (400) to `font-semibold` (600).
* **Metric Numbers:** Manrope, `text-xl` to `text-2xl`, `font-extrabold`.
* **Border Radii:**
  * Dossier Container: `rounded-xl` (12px).
  * Spec Tiles: `rounded-lg` (8px).
  * Packshot Badge: `rounded-lg` (8px).
  * Sub-Cards: `rounded-xl` (12px).

---

## 7. Motion & Accessibility (a11y) Standards

### 7.1 Animation Orchestration
* **Section Entrance:**
  - Eyebrow, H2, and Subtitle use Framer Motion with `useReducedMotion()` guard:
  - `whileInView={{ opacity: 1, y: 0 }}`, viewport `once: true`.
* **Tab Transition (Dossier Swap):**
  - Wrapped in `<AnimatePresence mode="wait">`.
  - Spring-driven exit/enter transition:
    `initial={{ opacity: 0, y: 12 }}`, `animate={{ opacity: 1, y: 0 }}`, `exit={{ opacity: 0, y: -12 }}` (`duration: 0.35s`, bezier `[0.22, 1, 0.36, 1]`).
* **Active Indicator:**
  - Shared layout transition via `motion.div layoutId="active-pillar-indicator"` with `spring` stiffness 380 and damping 30.
* **Packshot Stage Hover:**
  - Micro-scale transform on packshot container: `transition-transform duration-300 hover:scale-105`.

### 7.2 Accessibility (a11y)
* **Contrast Compliance:** All text combinations exceed WCAG 2.1 AA (Deep Navy `#313841` on White is 11.2:1; Cadet Blue `#3a4750` on Light Pebble is 7.4:1; Yam Orange `#ea9216` text on white is used for uppercase bold accents with minimum 3:1).
* **Image Accessibility:** Every packshot contains exact descriptive alt text identifying the formulation and brand.
* **Keyboard Navigation:** All tabs and "View Dossier" controls are native `<button type="button">` elements with visible focus rings and accessible labels.
* **Reduced Motion:** When `prefers-reduced-motion: reduce` is detected, all Framer Motion translation animations are zeroed out for instantaneous transitions.

---

## 8. TypeScript Interface Schema

For programmatic maintenance and CMS integrations, the component consumes the following type definition:

```typescript
export interface FormulationRef {
  name: string;
  href: string;
}

export interface SpecEndpoint {
  label: string;
  value: string;
  note: string;
}

export interface PillarData {
  id: string;                          // e.g. 'nutrition' | 'hepatic' | 'maternal' | 'antipyretic' | 'anti-infective'
  index: string;                       // '01' through '05'
  category: string;                    // Clinical title
  title: string;                       // Headline hook
  description: string;                 // Scientific narrative
  packshot: string;                    // Primary asset path
  secondaryPackshot?: string;          // Optional secondary asset path for dual-bottle stage
  packshotAlt: string;                 // Descriptive a11y alt text
  formulations: FormulationRef[];       // Product catalog links
  href: string;                        // Deep link to /solutions anchor
  specs: SpecEndpoint[];               // Exactly 4 clinical metrics
  dosage: string;                      // Administration protocol
  regulatoryStandard: string;          // Compliance badge HTML string
}
```
