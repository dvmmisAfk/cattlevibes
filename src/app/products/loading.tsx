import { ProductCardSkeleton, Skeleton } from "@/components/ui/Skeleton";

export default function ProductsLoading() {
  return (
    <div className="bg-soft-white pt-(--nav-height)">
      <div className="mx-auto w-full max-w-[1800px] px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        {/* Header Skeleton */}
        <div className="mb-12 max-w-2xl">
          <Skeleton className="mb-3 h-4 w-32" />
          <Skeleton className="h-10 w-3/4 sm:h-12" />
          <Skeleton className="mt-4 h-5 w-full" />
        </div>

        {/* Filter Bar Skeleton */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Skeleton className="h-12 w-full max-w-md rounded-xl" />
          <Skeleton className="h-10 w-32 rounded-xl" />
        </div>

        {/* Product Cards Grid Skeleton */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
