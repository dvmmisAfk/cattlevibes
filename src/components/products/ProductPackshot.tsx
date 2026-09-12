import Image from "next/image";
import { FlaskConical } from "lucide-react";

interface ProductPackshotProps {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ProductPackshot({
  src,
  alt,
  className = "",
  priority = false,
}: ProductPackshotProps) {
  if (!src) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <FlaskConical
          className="h-16 w-16 text-primary-navy/25"
          strokeWidth={1.25}
        />
      </div>
    );
  }

  return (
    <div className={`relative flex h-full w-full items-center justify-center ${className}`}>
      <Image
        key={src}
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 600px"
        quality={85}
        className="object-contain drop-shadow-[0_12px_28px_rgba(49,56,65,0.12)] select-none"
      />
    </div>
  );
}
