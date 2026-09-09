export function BestsellerRibbon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute top-0 right-0 z-20 h-28 w-28 overflow-hidden select-none ${className}`}
      aria-label="Bestseller product"
    >
      <div className="absolute top-5 -right-9 w-36 rotate-45 border-y border-white/35 bg-gradient-to-r from-[#d97706] via-brand-orange to-[#ea9216] py-1 text-center font-heading text-[9.5px] font-extrabold uppercase tracking-widest text-white shadow-[0_2px_8px_rgba(234,146,22,0.35)]">
        <span className="inline-flex items-center justify-center gap-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
          <span className="text-[8px] leading-none" aria-hidden="true">★</span>
          <span>Bestseller</span>
        </span>
      </div>
    </div>
  );
}
