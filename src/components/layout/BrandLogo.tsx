import { images } from "@/data/site";

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
}

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  return (
    // Native img keeps PNG alpha. next/image was quantizing this mark to a
    // paletted PNG that painted a white square in the header.
    <img
      src={images.logo}
      alt="CattleVibes Healthcare Pvt. Ltd."
      width={479}
      height={449}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={`h-full w-auto bg-transparent object-contain object-left ${className}`}
      style={{ width: "auto", height: "100%", backgroundColor: "transparent" }}
    />
  );
}
