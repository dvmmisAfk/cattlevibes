# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Dairy Farmers & Commercial Herd Managers**: Managing cattle and buffalo herds; seeking sustained peak milk yields, fast recovery after calving, reduced herd downtime, and prevention of common metabolic disorders (milk fever, acidosis, ketosis).
- **Veterinarians & Field Paravets**: Looking for reliable pharmacology, exact compositions, approved indications, and clinical dosages for field treatment and disease intervention.
- **Veterinary Distributors, Stockists & Agricultural Dealers**: Evaluating commercial partnership opportunities, territory availability, brand reliability, and product catalogue depth for regional retail distribution.

## Product Purpose

- Provide an authoritative, premium digital presence and complete veterinary formulary catalogue for **Cattle Vibes Healthcare Pvt. Ltd.**
- Structure animal healthcare education around holistic herd protocols rather than fragmented, isolated treatments.
- Drive qualified sales and distribution inquiries through low-friction communication channels (WhatsApp, phone consultation, enquiry forms, and downloadable catalog PDF). Success is measured by enquiry conversion and brand credibility among livestock professionals.

## Positioning

- **"Five Connected Pillars. One Veterinary Standard."**: Rather than treating ailments as isolated events, CattleVibes organizes veterinary solutions across five synergistic physiological systems:
  1. Calcium & Milk Support
  2. Digestive & Liver Health
  3. Parasite Control
  4. Reproductive & Uterine Care
  5. Veterinary Medicines & Acute Therapeutics
- Balances high-rigor clinical science with practical field accessibility, avoiding both cold sterile laboratory detachment and folksy, unscientific remedies.

## Operating Context

- **Field & Outdoor Usage**: Accessed frequently by dairy owners and veterinarians on mobile devices in bright daylight, rural farm environments, and variable network bandwidth conditions.
- **Direct B2B Communication Habits**: The Indian livestock and animal health industry operates predominantly on direct relationship building, peer recommendations, WhatsApp messaging, and PDF catalogue sharing.
- **Seasonal Herd Rhythms**: Driven by seasonal biological cycles including calving peaks, summer heat stress/lactation drops, and monsoon parasite infection surges.

## Capabilities and Constraints

- **Enquiry-Led Architecture**: Strictly non-ecommerce. No online shopping cart or direct consumer checkout; all transactions route through dealer/distributor enquiries, WhatsApp, or phone.
- **21 Verified SKUs**: Active formulary across 5 physical dosage forms:
  - Injections (8 SKUs)
  - Liquids & Oral Suspensions (5 SKUs)
  - Boluses (4 SKUs)
  - Powders (2 SKUs)
  - Oral Gels (2 SKUs)
- **Regulatory & Veterinary Responsibility**: All formulations are strictly for animal treatment ("Not for Human Use"). Product pages provide high-level indications and compositions while explicitly deferring specific treatment regimens to registered veterinary practitioners.
- **Technology Stack**: Next.js App Router, React 19, Tailwind CSS v4, Framer Motion, Lucide icons.

## Brand Commitments

- **Brand Name**: Cattle Vibes Healthcare Pvt. Ltd. (Brand short name: **Cattlevibes**).
- **Brand Tagline**: *Complete Animal Healthcare Solutions*.
- **Palette Identity**:
  - High Tide Navy (`#313841`): Primary headlines, high-contrast dark sections, footer, and brand marks.
  - Cadet Blue (`#3a4750`): Body copy and supporting structural elements.
  - Yam Orange (`#ea9216`): Primary accent, eyebrows, badges, active indicators, and conversion actions.
  - Pebble (`#F6F3EC` / `#eeeeee`): Warm neutral backgrounds, card wells, and alternating surfaces.
- **Tone of Voice**: Professional, respectful of livestock traditions, scientifically responsible, and clear. Avoids generic SaaS tropes, overly technical jargon without plain explanation, and hyperbolic marketing claims.

## Evidence on Hand

- **Official Product Catalog**: Comprehensive master document `Cattlevibes ctlg for tab_compressed.pdf`.
- **Reconciled Formulary Dataset**: 21 catalog-accurate products defined in `src/data/products.ts` and catalogued in `PRODUCT_INVENTORY.md`.
- **Product Packshots**: 21 official studio packshot assets in `public/images/` and registered in `src/data/product-images.ts`.
- **Design & Layout Blueprints**: Complete specifications in `DESIGN.md`, `HOME_PAGE_DESIGN.md`, `SECONDARY_PAGES_DESIGN.md`, and `FIVE_CONNECTED_PILLARS_SECTION.md`.

## Product Principles

1. **Clinical Rigor with Farm-Level Clarity**: Every therapeutic claim, indication, and nutritional benefit must be factually verifiable and explained in language immediately understandable to both farm managers and veterinarians.
2. **Frictionless Enquiry Access**: The shortest path between identifying a herd health challenge and connecting with a CattleVibes representative must always be visible and accessible across any page or viewport.
3. **Ecosystem Over Isolated SKUs**: Always position individual formulations within the broader context of the Five Connected Pillars to promote comprehensive, long-term herd productivity.
4. **Resilient Mobile Usability**: Prioritize fast load times, readable high-contrast typography, large touch targets (minimum 44×44px), and robust responsive ergonomics for one-handed outdoor usage.

## Accessibility & Inclusion

- Target WCAG 2.1 AA conformance with strong contrast ratios against light Pebble and dark High Tide backgrounds.
- Explicit support for `prefers-reduced-motion`, disabling ambient video backgrounds and heavy transforms for users with vestibular sensitivities or bandwidth constraints.
- Accessible semantic headings, ARIA attributes on interactive tabs/accordions, and descriptive labels for all icon buttons and telephone/WhatsApp triggers.
