import { FileText, BookOpen, Wheat, Heart } from "lucide-react";

const icons = [FileText, BookOpen, Wheat, Heart];

interface ResourceCardProps {
  title: string;
  description: string;
  status?: "available" | "coming-soon";
  index: number;
}

export function ResourceCard({ title, description, status = "coming-soon", index }: ResourceCardProps) {
  const Icon = icons[index % icons.length];

  return (
    <div className="rounded-[18px] border border-border bg-white p-6 md:p-7">
      <Icon className="h-6 w-6 text-brand-orange" strokeWidth={1.5} />
      <h3 className="mt-4 text-lg font-bold text-deep-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
      {status === "coming-soon" && (
        <span className="mt-4 inline-block rounded-lg bg-warm-cream px-3 py-1 text-xs font-medium text-brand-orange">
          Coming soon
        </span>
      )}
    </div>
  );
}
