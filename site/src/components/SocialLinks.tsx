import Image from "next/image";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function SocialLinks({ className, size = "md" }: { className?: string; size?: "md" | "lg" }) {
  const box = size === "lg" ? "size-12" : "size-9";
  const icon = size === "lg" ? 22 : 16;
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {SITE.social.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.label} de Elsa Urbina`}
            title={s.label}
            className={cn(
              "grid place-items-center rounded-full bg-accent transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_8px_20px_-8px_rgb(212_175_55/0.8)]",
              box,
            )}
          >
            <Image src={s.icon} width={icon} height={icon} alt="" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
