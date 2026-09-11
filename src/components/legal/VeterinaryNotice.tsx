export function VeterinaryNotice({ className = "" }: { className?: string }) {
  return (
    <p className={`text-sm leading-relaxed text-cadet-blue ${className}`}>
      For licensed veterinary use in animals only. Not for human use. Product information on
      this website is a summary and is not a diagnosis, prescription, or treatment instruction.
      Always follow the label, the official catalogue, and a registered veterinarian.
    </p>
  );
}
