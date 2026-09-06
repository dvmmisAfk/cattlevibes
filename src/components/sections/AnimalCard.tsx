import Image from "next/image";

interface AnimalCardProps {
  name: string;
  image: string;
}

export function AnimalCard({ name, image }: AnimalCardProps) {
  return (
    <div className="group overflow-hidden rounded-[18px] border border-border bg-white">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={`${name} — Cattlevibes solutions`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 200px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 to-transparent" />
        <span className="absolute bottom-3 left-3 text-sm font-semibold text-white">
          {name}
        </span>
      </div>
    </div>
  );
}
