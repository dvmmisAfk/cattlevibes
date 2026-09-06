import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function PrimaryButton({ href, children, className = "" }: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-xl bg-deep-navy px-7 py-3.5 text-sm font-semibold text-pure-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${className}`}
    >
      {children}
      <span className="text-brand-orange transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

interface SecondaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export function SecondaryButton({
  href,
  children,
  className = "",
  variant = "light",
}: SecondaryButtonProps) {
  const styles =
    variant === "light"
      ? "border border-primary-navy/30 bg-white/80 text-primary-navy hover:bg-white"
      : "border border-white/40 bg-transparent text-white hover:bg-white/10";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}
