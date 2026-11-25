import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({ eyebrow, title, intro, align = "left", className }: Props) {
  return (
    <div data-reveal className={cn(align === "center" && "mx-auto text-center", "max-w-2xl", className)}>
      <p className={cn("eyebrow", align === "center" && "justify-center")}>{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-secondary md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-secondary-muted md:text-lg">{intro}</p>}
    </div>
  );
}
