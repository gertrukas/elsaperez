import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imagePosition?: string;
};

/** Encabezado de páginas interiores con imagen de fondo y entrada animada. */
export default function PageHeader({ eyebrow, title, intro, image = "/images/hero-elsa-urbina.jpg", imagePosition = "center 30%" }: Props) {
  return (
    <section className="relative isolate overflow-hidden border-b border-accent/15">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-35 animate-ken-burns"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" aria-hidden />
      <div className="container-site py-20 text-center md:py-28">
        <p className="eyebrow animate-fade-up justify-center">{eyebrow}</p>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-secondary animate-fade-up [animation-delay:120ms] md:text-7xl">
          {title}
        </h1>
        <span className="mx-auto mt-6 block h-px w-24 bg-accent animate-fade-up [animation-delay:240ms]" aria-hidden />
        {intro && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-secondary-soft animate-fade-up [animation-delay:320ms] md:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
