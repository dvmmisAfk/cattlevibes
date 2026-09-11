import { siteConfig } from "@/data/site";

/** Policies describe this marketing site as implemented. They are not legal advice. */
export const legalMeta = {
  lastUpdated: "12 September 2026",
  lastUpdatedIso: "2026-09-12",
  jurisdiction: "India",
  governingLaw: "the laws of India",
  grievanceTitle: "Privacy contact",
  /** Publish a named Grievance Officer when appointed under the DPDP Act. */
  grievanceOfficerName: "",
};

export const legalUrls = {
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
  refunds: "/refunds",
} as const;

export const imageCredits = [
  {
    use: "Home page hero",
    credit: "Photo by Illiya Vjestica",
    source: "Unsplash",
    href: "https://unsplash.com/photos/W5FdAcHp7l8",
    license: "Unsplash License",
  },
  {
    use: "Contact page landscape",
    credit: "Unsplash stock photograph (photo-1416879595882-3373a0480b5b)",
    source: "Unsplash",
    href: "https://unsplash.com/license",
    license: "Unsplash License",
  },
  {
    use: "Solutions ovine field feature",
    credit: "Unsplash stock photograph (photo-1625246333195-78d9c38ad449)",
    source: "Unsplash",
    href: "https://unsplash.com/license",
    license: "Unsplash License",
  },
  {
    use: "Product packshots, logos, and remaining site photography",
    credit: siteConfig.name,
    source: "First-party or licensed for this website",
    href: "",
    license: "All rights reserved unless otherwise noted",
  },
] as const;
