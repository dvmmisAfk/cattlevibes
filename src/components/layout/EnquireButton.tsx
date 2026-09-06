import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EnquireButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact"
      className={`group inline-flex h-10 items-center gap-2.5 rounded-full bg-deep-navy pl-4 pr-1 text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${className}`}
    >
      Enquire Now
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-orange">
        <ArrowRight
          className="h-3.5 w-3.5 text-white transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      </span>
    </Link>
  );
}
