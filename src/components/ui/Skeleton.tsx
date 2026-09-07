interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-xl bg-border/40 ${className}`}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex min-h-[460px] h-full flex-col justify-between rounded-xl border border-border bg-white p-5">
      <Skeleton className="h-[250px] w-full rounded-lg" />
      <div className="mt-5 space-y-3">
        <Skeleton className="h-3 w-1/4 rounded-sm" />
        <Skeleton className="h-6 w-3/4 rounded-sm" />
        <Skeleton className="h-4 w-full rounded-sm" />
      </div>
      <div className="mt-6 flex items-center gap-3">
        <Skeleton className="h-10 flex-1 rounded-xl" />
        <Skeleton className="h-10 flex-1 rounded-xl" />
      </div>
    </div>
  );
}
