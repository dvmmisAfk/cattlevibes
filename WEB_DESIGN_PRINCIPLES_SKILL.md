---
name: web-design-principles
description: >-
  Master UI/UX and web design principles based on Figma's Design Basics resource library.
  Use when designing, building, or reviewing websites and web applications to enforce
  visual hierarchy, typography scales, 24 curated web fonts, color theory, 11 Gestalt principles,
  design tokens, wireframing, layout grids, interaction states, and accessibility standards.
---

# Master UI/UX & Web Design Principles: The Definitive AI Agent Guide
*Synthesized directly from Figma’s Design Basics Library, Design Systems Architecture, and Modern Web Standards.*

---

## Table of Contents
1. [Foundational Philosophy: UI vs. UX & Human-Centered Design](#1-foundational-philosophy-ui-vs-ux--human-centered-design)
2. [The 7 Core UI Design Principles](#2-the-7-core-ui-design-principles)
3. [The 11 Gestalt Principles of Visual Perception](#3-the-11-gestalt-principles-of-visual-perception)
4. [Fundamental Human-Computer Interaction (HCI) Laws](#4-fundamental-human-computer-interaction-hci-laws)
5. [Typography Mastery & The 24 Curated Web Fonts](#5-typography-mastery--the-24-curated-web-fonts)
6. [Color Theory, Harmonies & The 60-30-10 Rule](#6-color-theory-harmonies--the-60-30-10-rule)
7. [Design Tokens & 3-Tier System Architecture](#7-design-tokens--3-tier-system-architecture)
8. [Layout Grids, Responsive Mechanics & Scanning Patterns](#8-layout-grids-responsive-mechanics--scanning-patterns)
9. [Component States, Micro-Interactions & Affordances](#9-component-states-micro-interactions--affordances)
10. [Prototyping, Wireframing & User Flows](#10-prototyping-wireframing--user-flows)
11. [Page Narrative & High-Converting Information Architecture](#11-page-narrative--high-converting-information-architecture)
12. [Accessibility (a11y) & WCAG 2.1 AA/AAA Compliance Checklist](#12-accessibility-a11y--wcag-21-aaaaa-compliance-checklist)
13. [AI Agent Execution Rules & Anti-Patterns](#13-ai-agent-execution-rules--anti-patterns)

---

## 1. Foundational Philosophy: UI vs. UX & Human-Centered Design

### 1.1 UI vs. UX: The Symbiotic Balance
* **User Experience (UX)** is the invisible architecture: the user’s cognitive journey, emotional response, task completion efficiency, information architecture, and mental model alignment. UX asks: *"Does this solve the problem effortlessly and intuitively?"*
* **User Interface (UI)** is the sensory manifestation: the typography, colors, spatial pacing, button micro-states, iconography, and visual hierarchy. UI asks: *"Is the interface clear, delightful, cohesive, and easy to interact with?"*
* **The Core Rule**: Great UI cannot rescue broken UX (a gorgeous form that fails to validate is frustrating). Flawless UX cannot survive repulsive UI (a well-structured app with illegible fonts and clashing colors loses trust instantly).

### 1.2 Human-Centered Design (HCD) Loop
Every interface element created by an agent must pass the 4-stage HCD test:
1. **Empathize**: Understand who uses the screen, what emotional state they are in, and what primary question they need answered within 3 seconds.
2. **Define & Constrain**: Identify the primary job-to-be-done (JTBD). Eliminate competing elements that distract from this single action.
3. **Ideate & Structure**: Establish visual hierarchy and information grouping before choosing styling.
4. **Refine & Validate**: Check accessibility, contrast, touch targets, and responsive degradation.

---

## 2. The 7 Core UI Design Principles

### Principle 1: Hierarchy (Directing the Eye)
Visual hierarchy establishes the order in which human eyes perceive information.
* **Size & Scale**: Headings must be distinctly larger than body copy (use a mathematical scale such as `1.25` or `1.333`).
* **Weight Contrast**: Pair bold headlines (`font-weight: 700–800`) with medium or regular body text (`font-weight: 400–500`).
* **Color Value & Luminance**: Draw attention with high-contrast text (`#111827` or `#ffffff`); push secondary details back with muted tones (`#6b7280` or `rgba(255,255,255,0.6)`).
* **Positional Gravity**: Place critical anchors top-left (or top-center) and high-value conversion actions at natural scanning terminations.

### Principle 2: Progressive Disclosure (Managing Cognitive Load)
Never overwhelm a user with every option at once.
* **Tier 1 (Immediate)**: Display only the essential data needed to understand the context and take the next step.
* **Tier 2 (On-Demand)**: Reveal secondary configurations, detailed analytics, or advanced filters behind tabs, accordions, dropdowns, or step-wizards.
* **Tier 3 (Deep-Dive)**: House technical documentation, full audit trails, or complex settings in dedicated detail views.

### Principle 3: Consistency (The Predictability Law)
Users build mental models based on patterns.
* **Internal Consistency**: If primary buttons have `border-radius: 8px` and `font-weight: 600`, every primary button across all pages must share those exact tokens.
* **External Consistency (Jakob’s Law)**: Do not reinvent conventional patterns. Place logos at the top-left, search/navigation in the header, account profiles at top-right, and legal/sitemap links in the footer.

### Principle 4: Contrast (Clarity & Distinction)
Contrast creates focus and separates interactive elements from static surfaces.
* Ensure a stark luminance difference between foreground text and its immediate background plane.
* Contrast is not merely color—use **scale contrast**, **weight contrast**, and **spatial contrast** (generous whitespace around key items).

### Principle 5: Accessibility (Universal Usability)
Accessibility is not an afterthought; it is fundamental engineering hygiene.
* Minimum **4.5:1** contrast ratio for standard text; **3:1** for large text (18pt+) and active UI controls.
* Complete keyboard operability (`tabindex`, visible `:focus-visible` rings).
* Never convey system state using color alone (always combine color with text labels, icons, or patterns).

### Principle 6: Proximity (Spatial Relationship)
Space communicates relationship more powerfully than borders.
* Elements close together are instinctively interpreted as belonging to the same functional group.
* Form labels must sit closer to their corresponding input than to the preceding field (`margin-bottom: 6px` vs. `margin-top: 20px`).
* Card elements (title, description, CTA) must feel like a unified unit through cohesive inner spacing.

### Principle 7: Alignment (The Invisible Grid)
Alignment eliminates visual jitter and creates subconscious order.
* Every single element must anchor to a deliberate vertical or horizontal line.
* Left-align body text in left-to-right languages (avoid center-aligned paragraphs exceeding 3 lines, as ragged left edges impair reading tracking).
* Align numerical data to the right in data tables; align textual columns to the left.

---

## 3. The 11 Gestalt Principles of Visual Perception

| Principle | Visual Rule | UI/Web Implementation |
|---|---|---|
| **1. Proximity** | Items placed near each other are perceived as a related unit. | Form groups, card metadata clusters, breadcrumb items. |
| **2. Similarity** | Items sharing color, shape, size, or orientation are seen as having identical function. | All clickable tag pills share the same shape; all destructive buttons share red styling. |
| **3. Continuity** | The eye naturally glides along lines, curves, and aligned sequences. | Step progress indicators, timeline nodes, carousel peek-outs hinting horizontal scroll. |
| **4. Closure** | The human brain automatically fills in missing parts to perceive a whole. | Incomplete icons (e.g. hamburger bars, search lens), cards cut off at screen edge indicating swipeability. |
| **5. Figure-Ground** | Humans instantly distinguish between the prominent focal object (figure) and the backdrop (ground). | Modal dialogs with darkened backdrop scrims (`bg-black/60 blur-sm`), floating navigation bars with glassmorphism. |
| **6. Prägnanz (Simplicity)** | The brain simplifies complex shapes into the most stable, basic geometric forms. | Clean geometric cards, rounded rectangles, circular avatars instead of irregular polygonal shapes. |
| **7. Symmetry & Order** | Symmetrical arrangements convey stability, elegance, and trustworthiness. | Balanced 2-column or 3-column feature grids, centered hero copy paired with balanced CTA groups. |
| **8. Connectedness** | Elements visually linked by explicit lines or shapes are seen as more related than unlinked elements. | Stepper connectors, flowchart arrows, tree-view indent lines. |
| **9. Common Region** | Elements enclosed within the same boundary are perceived as a distinct grouping. | Bento grid boxes, table rows with alternating zebra fills, bordered content cards. |
| **10. Focal Point** | Whatever element stands out visually will seize attention first. | High-contrast accent CTA button, glowing badge indicator, hero metric counter. |
| **11. Common Fate** | Elements moving in the same direction or speed are perceived as a single entity. | Dropdown menus sliding down together, parallax layers moving at cohesive velocity ratios. |

---

## 4. Fundamental Human-Computer Interaction (HCI) Laws

### Fitts's Law
$$\text{MT} = a + b \log_2\left(1 + \frac{D}{W}\right)$$
* **Concept**: The time required to rapidly move to a target is a function of the **distance ($D$)** to the target and the **width ($W$)** of the target.
* **Agent Rules**:
  1. Make primary touch/click targets sufficiently large (minimum **44×44px**, ideally **48×48px** on mobile).
  2. Pin critical mobile controls to the bottom screen edge (the "thumb zone") where distance is minimized.
  3. Expand click hit-boxes around text links and icons using padding rather than raw text dimensions.

### Hick's Law
$$T = b \cdot \log_2(n + 1)$$
* **Concept**: The time it takes to make a decision increases logarithmically with the number and complexity of choices ($n$).
* **Agent Rules**:
  1. Limit top navigation bars to **5–7 items** maximum.
  2. Limit pricing plans to **3 choices** (with one highlighted as the clear recommendation).
  3. Break multi-input onboarding into a step-by-step wizard rather than one 20-field form.

### Miller's Law
* **Concept**: Working memory holds roughly **$7 \pm 2$ chunks** of information at once.
* **Agent Rules**:
  1. Format telephone numbers (`+1 (555) 000-0000`) and credit cards into 4-digit chunks.
  2. Group dashboard metrics into 3–4 thematic cards rather than an undifferentiated grid of 16 stats.

### Jakob's Law
* **Concept**: Users spend most of their time on *other* websites. They expect your site to function according to established conventions.
* **Agent Rules**: Never invent non-standard interaction models for fundamental utilities (e.g., do not make a shopping cart an accordion or place the search bar in the bottom-left).

---

## 5. Typography Mastery & The 24 Curated Web Fonts

### 5.1 Anatomical Essentials & Sizing Metrics
* **x-Height**: The height of lowercase letters (like 'x'). Large x-heights (e.g. Inter, Open Sans) dramatically improve legibility on small digital screens.
* **Line-Height (Leading)**:
  * Display / H1 / H2: `1.05 – 1.2` (tight to prevent headings from looking disjointed).
  * Subheadings / H3 / H4: `1.2 – 1.35`.
  * Body Text: `1.45 – 1.6` (sufficient breathing room for the eye to track line returns).
* **Letter-Spacing (Tracking)**:
  * Large Headlines (32px+): `-0.02em` to `-0.04em` (removes awkward visual gaps).
  * Body Copy: `0` to `+0.01em`.
  * Small Uppercase Badges / Eyebrows (10px–12px): `+0.1em` to `+0.25em` (enhances optical separation).
* **Measure (Line Length)**:
  * Maintain **45 to 75 characters per line** (inclusive of spaces). Lines wider than 80ch cause eye fatigue; lines under 35ch disrupt reading rhythm. Constrain text blocks with `max-w-prose` or `max-w-2xl`.

### 5.2 Mathematical Type Scales
Base standard on an 8pt / 16px root:
| Token | Ratio (Major Third 1.25) | Ratio (Perfect Fourth 1.333) | Use Case |
|---|---|---|---|
| `text-xs` | 12px (0.75rem) | 12px (0.75rem) | Badges, footnotes, helper text |
| `text-sm` | 14px (0.875rem) | 14px (0.875rem) | Secondary metadata, inputs |
| `text-base` | 16px (1.0rem) | 16px (1.0rem) | Primary body copy |
| `text-lg` | 20px (1.25rem) | 21px (1.333rem) | Lead paragraphs, card titles |
| `text-xl` | 25px (1.563rem) | 28px (1.777rem) | Section subheaders (H4) |
| `text-2xl` | 31px (1.953rem) | 37px (2.369rem) | Section headers (H3) |
| `text-3xl` | 39px (2.441rem) | 50px (3.157rem) | Major page headers (H2) |
| `text-4xl+` | 48px–64px+ | 66px–88px+ | Hero display titles (H1) |

### 5.3 The 24 Best Website Fonts (Figma Catalog & Archetypes)

#### Sans-Serif (Modern, Clean, High Screen Legibility)
1. **Inter**: Designed specifically for UI screens by Rasmus Andersson. Exceptional tall x-height, contextual alternates, tabular figures. *Best for: SaaS, dashboards, product UIs.*
2. **Josefin Sans**: Geometric vintage inspired by 1920s Bauhaus. Elegant, distinctive character. *Best for: Luxury branding, fashion, boutique hero titles.*
3. **Roboto**: Google's neo-grotesque standard. Neutral, highly versatile, wide range of weights. *Best for: Global interfaces, utility apps, cross-platform portals.*
4. **Open Sans**: Humanist sans-serif with open apertures and friendly upright posture. *Best for: Long reading, healthcare, public institutions, blogs.*
5. **Rubik**: Subtle rounded corners giving an approachable, warm technological feel. *Best for: Tech startups, developer tools, onboarding flows.*
6. **DM Sans**: Compact geometric sans designed for small text legibility. *Best for: Data-dense tables, mobile screens, button micro-copy.*
7. **Poppins**: Pure geometric sans based on circles and consistent line weights. *Best for: Marketing homepages, modern landing pages, bold headings.*
8. **Lato**: Warm, classical proportions with semi-rounded personality. *Best for: Corporate websites, professional services, finance.*
9. **Nunito**: Rounded terminal sans-serif radiating friendliness and warmth. *Best for: EdTech, wellness apps, casual consumer tools.*
10. **Ubuntu**: Distinct curved terminals and humanist character. *Best for: Open-source software, technical ecosystems, documentation.*
11. **Ranade**: High-contrast, expressive contemporary sans-serif. *Best for: Design studios, architecture, creative agencies.*
12. **Source Sans Pro**: Adobe’s clean American-gothic humanist typeface. *Best for: Enterprise portals, document viewers, professional workflows.*
13. **Work Sans**: Grotesque-inspired sans optimized for on-screen text between 14px and 48px. *Best for: Modern portfolios, editorial web apps.*
14. **Manrope**: Geometric modern hybrid with crisp digital angles. *Best for: Fintech, Web3, cutting-edge AI landing pages.*
15. **Object Sans**: Swiss neo-grotesque meets geometry. Bold, punchy, memorable. *Best for: Creative portfolios, bold editorial headlines.*
16. **Raleway**: Elegant neo-grotesque with signature criss-cross 'W'. *Best for: High-end lifestyle, portfolios, luxury banners.*
17. **Montserrat**: Urban geometric sans with broad character proportions. *Best for: Bold display banners, impactful CTAs, hero titles.*

#### Serif (Authority, Editorial Elegance, Deep Trust)
18. **Playfair Display**: High-contrast transitional serif inspired by Enlightenment typography. *Best for: Editorial headlines, luxury e-commerce, premium products.*
19. **Libre Baskerville**: Optimized specifically for on-screen body text with taller x-height. *Best for: Long-form journalism, literature, academic sites.*
20. **Soria**: Art Nouveau meets modern Didone serif. *Best for: Artistic headlines, fashion banners, boutique hero statements.*
21. **Neuton**: Space-efficient Dutch serif with compact width and large x-height. *Best for: Compact editorial layouts, scholarly articles.*
22. **Lora**: Contemporary calligraphic serif with brushed curves and balanced contrast. *Best for: Essays, food & lifestyle magazines, elegant storytelling.*

#### Slab Serif (Bold, Architectural, Commanding)
23. **Sreda**: Geometric slab serif with assertive block serifs. *Best for: Magazine headers, bold branding, editorial callouts.*
24. **Arvo**: Geometric monolinear slab serif with crisp readability. *Best for: Menus, punchy subheaders, creative tech blogs.*

### 5.4 Font Pairing Golden Rules
1. **Rule of Maximum Two**: Use no more than **2 font families** on a website (one for headings/display, one for body/UI). A 3rd is permissible *only* if dedicated to monospace code or telemetry.
2. **High Contrast Pairing**: Pair a character-rich serif header with a clean, neutral sans-serif body (e.g. *Playfair Display* + *Inter*, or *Lora* + *DM Sans*).
3. **Harmonious Geometric Pairing**: Pair typefaces that share underlying geometric structures (e.g. *Poppins* + *Open Sans*, or *Montserrat* + *Roboto*).
4. **Superfamily Cohesion**: When in doubt, leverage a superfamily with both serif/sans or variable weights (e.g. *Source Sans Pro* + *Source Serif Pro*).

---

## 6. Color Theory, Harmonies & The 60-30-10 Rule

### 6.1 Color Harmonies & Palettes
* **Monochromatic**: Varying shades, tints, and tones of a single hue. Uncluttered, minimalist, high-end.
* **Analogous**: Colors sitting side-by-side on the color wheel (e.g. navy, cyan, teal). Calming, unified, natural.
* **Complementary**: Opposites on the color wheel (e.g. deep navy `#0b132b` + vibrant orange `#ea9216`). Maximum visual tension and energy; reserve the complement strictly for key interactive focal points.
* **Split-Complementary**: A base hue paired with the two colors adjacent to its complement. High contrast without harsh jarring tension.
* **Triadic**: Three hues spaced evenly at 120° angles. Dynamic and vibrant; requires one hue to heavily dominate (60%) while the other two act as minor accents.

### 6.2 The 60-30-10 Distribution Formula
To achieve balanced visual composition:
* **60% Dominant Base (Canvas)**: Backgrounds, large surfaces, dominant structural tone (e.g., pure white, off-white pebble, or deep slate/navy).
* **30% Secondary Structure (Definition)**: Cards, sidebars, borders, section wrappers, muted copy, secondary buttons.
* **10% Accent Catalyst (Action)**: Primary CTA buttons, notification badges, active indicator pills, focal highlights.

### 6.3 Semantic Color System
Never use arbitrary raw hex codes inline. Always bind colors to semantic functions:
* `surface-canvas`: Base page background.
* `surface-card`: Elevated container surface.
* `text-primary`: Highest contrast text (headlines, essential copy).
* `text-muted`: Secondary metadata, timestamps, helper labels.
* `action-primary`: Brand accent for primary conversion buttons.
* `action-hover`: Darkened/brightened state for cursor hover.
* `status-success`: Confirmation, positive indicators (green).
* `status-warning`: Cautions, pending statuses (amber/yellow).
* `status-error`: Destructive actions, validation failures (red).
* `status-info`: System notifications, informational badges (blue).

---

## 7. Design Tokens & 3-Tier System Architecture

```
┌──────────────────────────────────────────────────────────┐
│  Tier 1: PRIMITIVE TOKENS (Raw Constants)                │
│  blue-500: #3b82f6  |  gray-900: #111827  |  space-4: 16px│
└────────────────────────────┬─────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────┐
│  Tier 2: SEMANTIC TOKENS (Contextual Meaning)            │
│  color-brand: {blue-500}   |  bg-app: {gray-900}          │
│  text-default: {gray-100}  |  spacing-card-p: {space-4}   │
└────────────────────────────┬─────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────┐
│  Tier 3: COMPONENT TOKENS (Scoped Component Properties)   │
│  btn-primary-bg: {color-brand}                           │
│  card-elevation: shadow-md                               │
│  modal-backdrop: rgba(0, 0, 0, 0.6)                      │
└──────────────────────────────────────────────────────────┘
```

* **Why Tokens Over Hex**: Allows instant global theme switching (Light Mode, Dark Mode, High Contrast Mode) by remapping Tier 2 without touching component markup.
* **The 8pt Grid System**: Spacing tokens must follow consistent multiples of 4px / 8px:
  * `4px` (0.25rem) — micro gaps, icon padding
  * `8px` (0.5rem) — compact element spacing, badge padding
  * `16px` (1.0rem) — default card padding, form field gaps
  * `24px` (1.5rem) — section interior spacing
  * `32px` (2.0rem) — container gutters
  * `48px` (3.0rem) — component block margins
  * `64px / 96px` (4.0 / 6.0rem) — major page section separation

---

## 8. Layout Grids, Responsive Mechanics & Scanning Patterns

### 8.1 Multi-Tier Grid Architecture
* **Mobile (< 640px)**: 4-column fluid grid, 16px margins, 12px–16px gutters.
* **Tablet (640px – 1024px)**: 8-column or 12-column grid, 24px margins, 16px–24px gutters.
* **Desktop (1024px – 1440px)**: 12-column grid, max-width constrained to `1200px – 1320px`, centered with `auto` margins.
* **Ultra-Wide (1440px+)**: Constrain content canvas (`max-w-[1440px]`); never allow body paragraphs or data grids to stretch infinitely across a 4K monitor.

### 8.2 Scanning Patterns & Reading Gravity
* **The Z-Pattern (Landing Pages)**: For pages with light text density. The eye starts at Top-Left (Logo) $\rightarrow$ Top-Right (Navigation/CTA) $\rightarrow$ diagonals across to Middle-Left (Hero Feature/Illustration) $\rightarrow$ terminates at Bottom-Right (Primary Conversion Action).
* **The F-Pattern (Content & Dashboards)**: For data-heavy pages. Users read the top headline horizontally, scan down the left margin, read a shorter horizontal chunk, and then scan vertically down the left edge. Keep key words at the start of sentences and bullet points.
* **Bento Grid Layouts**: Asymmetrical card grids grouping diverse content types into a harmonious whole. Combine 1 wide hero card (2 columns), 2 square utility cards, and 1 tall vertical card to create visual rhythm.

---

## 9. Component States, Micro-Interactions & Affordances

### 9.1 The 6 Fundamental Component States
Every interactive component (button, input, card, dropdown) must account for all 6 states:
1. **Default (Rest)**: Clear affordance (looks clickable, readable label, distinct boundary).
2. **Hover**: Visual elevation or subtle color shift (`brightness 105%` or `bg-opacity 90%`) confirming cursor presence.
3. **Focus / Focus-Visible**: High-contrast outline ring (`2px offset 2px`) for keyboard navigation without breaking mouse aesthetics.
4. **Active (Pressed)**: Subtle scale reduction (`scale(0.98)` or `translate-y-0.5`) providing tactile feedback.
5. **Loading / Processing**: Replaces text with a spinner or adds an inline loading indicator while disabling duplicate clicks. **Crucial**: Keep button dimensions fixed to eliminate layout shifts.
6. **Disabled**: Reduced opacity (`opacity-40`), cursor set to `not-allowed`, and explicitly marked with `aria-disabled="true"`.

### 9.2 Micro-Interactions & Motion Timing
* **Micro-Transitions (Buttons, Hover, Toggles)**: `150ms – 250ms`, easing curve `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out).
* **Medium Transitions (Modals, Drawers, Accordions)**: `250ms – 400ms`, easing curve `cubic-bezier(0.16, 1, 0.3, 1)` (spring-like ease-out).
* **Large Transitions (Page navigation, full sequence)**: `400ms – 600ms`.
* **Reduced Motion Compliance**: Always wrap Framer Motion or CSS animations in `@media (prefers-reduced-motion: reduce)` to gracefully fall back to instant opacity cross-fades.

---

## 10. Prototyping, Wireframing & User Flows

### 10.1 The Fidelity Continuum
1. **User Flow (Logic)**: Boxes and arrows mapping the decision tree, error states, and success endpoints before touching pixels.
2. **Low-Fidelity Wireframe (Structure)**: Grayscale outlines focusing solely on hierarchy, content placement, and interaction layout.
3. **High-Fidelity Mockup (Visuals)**: Pixel-perfect implementation of typography, brand colors, imagery, and component tokens.
4. **Interactive Prototype (Experience)**: Dynamic simulation of real click states, page transitions, and data filtering.
5. **Code Delivery**: Semantic HTML, clean modular CSS/Tailwind, and accessible interactive components.

---

## 11. Page Narrative & High-Converting Information Architecture

Every successful marketing or product page follows an intentional psychological sequence:
1. **Hero Section (The Hook)**:
   * Category eyebrow badge (context).
   * Punchy single-idea H1 headline (value proposition).
   * Supporting 2-line explanation (clarity).
   * Primary CTA + secondary low-friction CTA (action).
   * Social proof / trust logos (credibility).
2. **The Problem / Friction (Empathy)**:
   * Validate the user's current frustrations and costs of inaction.
3. **The Solution / Engine (The Revelation)**:
   * Showcase the product or methodology in action (Bento grid, product demo, interactive simulator).
4. **Deep-Dive Pillars / Features (The Substantiation)**:
   * Grouped into 3–5 logical pillars with concrete, benefit-focused outcomes.
5. **Social Proof & Quantitative Proof (The Reassurance)**:
   * Real metrics, clinical/performance data, customer testimonials with names, photos, and roles.
6. **Friction Removal / FAQ Accordion (The De-risking)**:
   * Address pricing, security, onboarding speed, and cancellation policies.
7. **Terminal Action Banner (The Closing)**:
   * High-contrast final invitation to begin.

---

## 12. Accessibility (a11y) & WCAG 2.1 AA/AAA Compliance Checklist

* [ ] **Color Contrast**: Normal text achieves at least `4.5:1`; large text (18pt+) achieves at least `3:1`.
* [ ] **Semantic HTML**: Exactly one `<h1>` per page; logical heading descent (`h1` $\rightarrow$ `h2` $\rightarrow$ `h3`); semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
* [ ] **Keyboard Navigation**: All interactive elements reachable via `Tab` and actionable via `Enter` / `Space`. No focus traps.
* [ ] **Focus Rings**: Never use `outline: none` without providing a prominent custom `:focus-visible` ring.
* [ ] **Touch Target Size**: Interactive targets on touch screens meet or exceed `44×44px` (with padding).
* [ ] **Screen Reader Labels**: Icon-only buttons have descriptive `aria-label` attributes (e.g. `<button aria-label="Close modal">`).
* [ ] **Image Descriptions**: All informational images have concise, accurate `alt` text; decorative graphics have `alt=""` and `aria-hidden="true"`.
* [ ] **Form Labels**: Every form input is explicitly paired with a `<label htmlFor="...">` tag. Error states announce via `aria-describedby` and `aria-invalid="true"`.
* [ ] **Motion Sensitivity**: Respects `prefers-reduced-motion` settings.

---

## 13. AI Agent Execution Rules & Anti-Patterns

### Strict Directives for AI Agents Generating Web Code
1. **Never Output Generic Cookie-Cutter Designs**: Avoid plain default blues, unstyled gray cards, or default browser system fonts. Always curate an intentional palette and modern typography pairing.
2. **Never Use Unmeasured Full-Width Text**: Constrain body copy paragraphs with `max-w-2xl` or `max-w-prose` (45–75 characters per line).
3. **Never Hardcode Random Magic Numbers**: Anchor all padding, margins, gaps, and sizes to the standard 8pt/4pt token scale (`4, 8, 12, 16, 24, 32, 48, 64px`).
4. **Never Create Pure Black Shadows**: Use realistic ambient occlusion: multi-layered shadows tinted with the brand color or neutral slate at low opacities (`rgba(0,0,0,0.06)` to `rgba(0,0,0,0.12)`).
5. **Always Preserve Mobile Touch Ergonomics**: Test responsive degradation. On mobile screens (<640px), ensure buttons span comfortable thumb touch widths, fonts scale fluidly using `clamp()`, and complex multi-column grids collapse gracefully into vertical stacks.
6. **Always Maintain Content Scannability**: Use bold lead-ins for bullet points, prominent metric numbers, and clear section dividers to enable swift visual scanning.
