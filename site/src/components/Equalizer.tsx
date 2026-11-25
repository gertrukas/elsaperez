/** Barras de ecualizador animadas (decorativas). */
export default function Equalizer({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex h-5 items-end gap-[3px] ${className}`} aria-hidden>
      {[0, 0.25, 0.5, 0.15, 0.4].map((d, i) => (
        <span key={i} className="w-[3px] origin-bottom rounded-full bg-accent animate-equalizer" style={{ height: "100%", animationDelay: `${d}s` }} />
      ))}
    </span>
  );
}
