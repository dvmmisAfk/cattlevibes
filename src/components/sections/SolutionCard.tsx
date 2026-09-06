import Link from "next/link";
import {
  Pill,
  Wheat,
  Heart,
  Baby,
  Bug,
  Droplets,
} from "lucide-react";

const icons = [Pill, Wheat, Heart, Baby, Bug, Droplets];

interface SolutionCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

export function SolutionCard({ number, title, description, href, index }: SolutionCardProps) {
  const Icon = icons[index % icons.length];

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-[18px] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-md md:p-7"
    >
      <div className="flex items-start justify-between">
        <span className="text-xs font-bold text-brand-orange/60">{number}</span>
        <Icon className="h-5 w-5 text-brand-orange/70" strokeWidth={1.5} />
      </div>
      <h3 className="mt-4 text-lg font-bold text-deep-navy">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-deep-navy transition-colors group-hover:text-brand-orange">
        Learn more
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
