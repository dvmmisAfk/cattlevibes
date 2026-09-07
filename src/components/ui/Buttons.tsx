import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "outline"
  | "ghost"
  | "pill";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  icon?: React.ReactNode;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-deep-navy text-pure-white hover:bg-deep-navy/95 hover:-translate-y-0.5 hover:shadow-lg shadow-sm border border-transparent",
  secondary:
    "border border-primary-navy/25 bg-white/90 text-primary-navy hover:bg-white hover:border-brand-orange/40 hover:-translate-y-0.5 shadow-sm",
  accent:
    "bg-brand-orange text-white hover:bg-brand-orange/90 hover:-translate-y-0.5 hover:shadow-lg shadow-sm border border-transparent",
  outline:
    "border-2 border-deep-navy bg-transparent text-deep-navy hover:bg-deep-navy hover:text-white transition-colors",
  ghost:
    "bg-transparent text-primary-navy hover:text-brand-orange hover:bg-warm-cream/50",
  pill:
    "rounded-full bg-deep-navy text-white hover:-translate-y-0.5 hover:shadow-md pl-4 pr-1.5 py-1.5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs font-semibold rounded-lg gap-1.5",
  md: "px-6 py-3 text-sm font-semibold rounded-xl gap-2",
  lg: "px-7 py-3.5 text-sm font-semibold rounded-xl gap-2.5",
};

export function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  children,
  className = "",
  showArrow = true,
  icon,
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center font-semibold transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";
  const vClass = variantStyles[variant];
  const sClass = variant === "pill" ? "" : sizeStyles[size];

  const content = (
    <>
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin text-current" />
      ) : (
        icon
      )}
      <span>{children}</span>
      {showArrow && !loading && (
        <span
          className={`transition-transform duration-200 group-hover:translate-x-1 ${
            variant === "primary" ? "text-brand-orange" : "text-current"
          }`}
        >
          <ArrowRight className="h-4 w-4 inline-block" strokeWidth={2} />
        </span>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={`${baseClasses} ${vClass} ${sClass} ${className}`}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseClasses} ${vClass} ${sClass} ${className}`}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button href={href} variant="primary" size="lg" className={className}>
      {children}
    </Button>
  );
}

export function SecondaryButton({
  href,
  children,
  className = "",
  variant = "light",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}) {
  const darkClass =
    variant === "dark"
      ? "!border-white/40 !bg-transparent !text-white hover:!bg-white/10"
      : "";

  return (
    <Button
      href={href}
      variant="secondary"
      size="lg"
      className={`${darkClass} ${className}`}
    >
      {children}
    </Button>
  );
}
