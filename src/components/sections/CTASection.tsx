import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "navy" | "cream" | "white";
}

export function CTASection({
  title,
  subtitle,
  primaryLabel = "Contact Us",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  variant = "navy",
}: CTASectionProps) {
  const bgClass =
    variant === "navy"
      ? "bg-deep-navy text-white"
      : variant === "cream"
        ? "bg-warm-cream"
        : "bg-white";

  return (
    <section className={`${bgClass} py-16 md:py-24`}>
      <div className="mx-auto max-w-[1320px] px-5 text-center lg:px-8">
        <h2
          className={`text-3xl font-bold md:text-4xl ${
            variant === "navy" ? "text-white" : "text-deep-navy"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mx-auto mt-4 max-w-xl text-base ${
              variant === "navy" ? "text-white/75" : "text-text-muted"
            }`}
          >
            {subtitle}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {variant === "navy" ? (
            <>
              <Link
                href={primaryHref}
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                {primaryLabel}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  {secondaryLabel} →
                </Link>
              )}
            </>
          ) : (
            <>
              <PrimaryButton href={primaryHref}>{primaryButtonText(primaryLabel)}</PrimaryButton>
              {secondaryLabel && secondaryHref && (
                <SecondaryButton href={secondaryHref} variant="light">
                  {secondaryLabel}
                </SecondaryButton>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function primaryButtonText(label: string) {
  return label.replace(" →", "");
}
