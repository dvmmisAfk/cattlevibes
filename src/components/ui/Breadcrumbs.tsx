"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  customItems?: BreadcrumbItem[];
  className?: string;
  theme?: "light" | "dark";
}

const routeTitleMap: Record<string, string> = {
  about: "About Us",
  solutions: "Solutions",
  products: "Products",
  resources: "Resources",
  contact: "Contact",
  terms: "Terms and Conditions",
  privacy: "Privacy Policy",
  cookies: "Cookie Policy",
  refunds: "Refund Policy",
};

export function Breadcrumbs({
  customItems,
  className = "",
  theme = "light",
}: BreadcrumbsProps) {
  const pathname = usePathname();

  const items: BreadcrumbItem[] =
    customItems ||
    (() => {
      const segments = pathname.split("/").filter(Boolean);
      const generated: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

      let accumulated = "";
      for (const segment of segments) {
        accumulated += `/${segment}`;
        const label =
          routeTitleMap[segment] ||
          segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());
        generated.push({ label, href: accumulated });
      }
      return generated;
    })();

  const isDark = theme === "dark";
  const textColor = isDark ? "text-white/85" : "text-cadet-blue";
  const activeColor = isDark ? "text-white" : "text-deep-navy";
  const hoverColor = "hover:text-yam-orange";
  const separatorColor = isDark ? "text-white/30" : "text-border";

  // Google BreadcrumbList Schema JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://cattlevibes.com${item.href}`,
    })),
  };

  return (
    <>
      <Script
        id={`breadcrumbs-schema-${pathname.replace(/\//g, "-") || "root"}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center text-xs font-semibold tracking-wide ${textColor} ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-2" role="list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <span className={`${separatorColor} select-none`} aria-hidden="true">
                    &middot;
                  </span>
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className={`font-bold ${activeColor}`}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition-colors ${hoverColor}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
