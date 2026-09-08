const docCodes = ["DOC-CAT", "DOC-SPEC", "DOC-NUTR", "DOC-VET"];

interface ResourceCardProps {
  title: string;
  description: string;
  status?: "available" | "coming-soon";
  index: number;
}

export function ResourceCard({ title, description, status = "coming-soon", index }: ResourceCardProps) {
  const code = docCodes[index % docCodes.length];

  return (
    <div className="rounded-xl border border-border bg-white p-6 md:p-7 transition-all duration-200 hover:border-yam-orange/40 hover:-translate-y-0.5">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="font-mono text-xs font-semibold text-cadet-blue/70">{code}</span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
          Formulary Reference
        </span>
      </div>
      <h3 className="mt-4 font-heading text-lg font-bold text-deep-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-cadet-blue">{description}</p>
      {status === "coming-soon" && (
        <div className="mt-5 flex items-center gap-2 border-t border-border/60 pt-3">
          <span className="block h-1.5 w-1.5 rounded-sm bg-cadet-blue/50" aria-hidden="true" />
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-cadet-blue/70">
            Archive Updating
          </span>
        </div>
      )}
    </div>
  );
}
