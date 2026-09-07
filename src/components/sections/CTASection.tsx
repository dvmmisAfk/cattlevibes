import { Button } from "@/components/ui/Buttons";

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

  const cleanPrimaryLabel = primaryLabel.replace(" →", "");
  const cleanSecondaryLabel = secondaryLabel?.replace(" →", "");

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
              <Button href={primaryHref} variant="accent" size="lg">
                {cleanPrimaryLabel}
              </Button>
              {cleanSecondaryLabel && secondaryHref && (
                <Button
                  href={secondaryHref}
                  variant="secondary"
                  size="lg"
                  className="!border-white/40 !bg-transparent !text-white hover:!bg-white/10"
                >
                  {cleanSecondaryLabel}
                </Button>
              )}
            </>
          ) : (
            <>
              <Button href={primaryHref} variant="primary" size="lg">
                {cleanPrimaryLabel}
              </Button>
              {cleanSecondaryLabel && secondaryHref && (
                <Button href={secondaryHref} variant="secondary" size="lg">
                  {cleanSecondaryLabel}
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
