import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/data/site";
import { legalMeta } from "@/data/legal";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-soft-white pt-(--nav-height)">
      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <Breadcrumbs className="mb-8" />
        <div className="border-b border-border pb-8">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-text-muted">
            Last updated: {legalMeta.lastUpdated} · {siteConfig.name}
          </p>
        </div>
        <div className="prose prose-slate mt-10 max-w-none space-y-8 text-sm leading-relaxed text-cadet-blue md:text-base">
          {children}
        </div>
        <p className="mt-10 text-xs leading-relaxed text-text-muted">
          These pages describe how this website operates. They are not legal advice. If a
          commercial supply contract disagrees with this site, the signed contract controls.
        </p>
        <p className="mt-4 text-xs text-text-muted">
          Questions:{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-deep-navy underline decoration-brand-orange/40 underline-offset-2 hover:text-brand-orange"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    </div>
  );
}

export function LegalSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-white p-6 md:p-8">
      <h2 className="font-heading text-lg font-bold text-deep-navy md:text-xl">
        <span className="font-numeral font-medium">{index}.</span> {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
