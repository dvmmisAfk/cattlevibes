import { FlaskConical } from "lucide-react";

interface ProductPackshotProps {
  src?: string;
  alt: string;
  className?: string;
}

export function ProductPackshot({ src, alt, className = "" }: ProductPackshotProps) {
  if (!src) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <FlaskConical className="h-16 w-16 text-[#3A4750]/25" strokeWidth={1.25} />
      </div>
    );
  }

  return (
    <img
      key={src}
      src={src}
      alt={alt}
      className={`max-h-full max-w-full object-contain drop-shadow-[0_12px_28px_rgba(49,56,65,0.12)] ${className}`}
    />
  );
}
