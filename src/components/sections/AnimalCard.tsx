import Image from "next/image";
import Link from "next/link";

interface AnimalCardProps {
  name: string;
  image: string;
  href?: string;
}

export function AnimalCard({ name, image, href }: AnimalCardProps) {
  const content = (
    <div className="group relative overflow-hidden rounded-[18px] border border-white/20 bg-deep-navy/80 shadow-md">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={`${name} — Cattlevibes solutions`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 200px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent transition-opacity group-hover:opacity-90" />
        <span className="absolute bottom-3 left-3 text-sm font-bold text-white tracking-wide group-hover:text-brand-orange transition-colors">
          {name}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block transition-transform hover:-translate-y-1">
        {content}
      </Link>
    );
  }

  return content;
}
