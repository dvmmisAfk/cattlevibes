interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-pure-white" : "text-deep-navy";
  const subtitleColor = light ? "text-white/80" : "text-text-muted";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-4 text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-brand-orange">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem] ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
