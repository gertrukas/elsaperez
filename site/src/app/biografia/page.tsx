import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Biografía y semblanza",
  description:
    "Biografía de Elsa Urbina: formación en Bellas Artes, Reina de los Músicos del SUTM, voz principal y directora de Los Internacionales, conductora de televisión.",
  path: "/biografia",
});

const CAPITULOS = [
  {
    year: "Formación",
    body: (
      <>
        Inició sus estudios profesionales de canto y flauta traversa a los 17 años, en la <strong className="text-accent-light">Escuela de Iniciación Artística de Bellas Artes</strong>. Formó parte de la Compañía Mexicana de Ópera y del Coro Monumental de Bellas Artes. Continuó su formación en la Escuela de Música G. Martell y en la Escuela de Capacitación Musical del Sindicato Único de Trabajadores de la Música de la Ciudad de México. Otros de sus maestros de técnica vocal han sido los prestigiados Fernando Lima, Adriana Moreno y Orlando Muñiz.
      </>
    ),
  },
  {
    year: "1998",
    body: (
      <>
        Fue coronada <strong className="text-accent-light">Reina de los Músicos del SUTM</strong>. Ha participado en producciones de televisión como «Bailando por un sueño», «Cantando por un sueño» y diversas telenovelas, además de ser corista de figuras estelares como Alejandra Guzmán, Gilberto Gless, Thalía y Samo.
      </>
    ),
  },
  {
    year: "Los Internacionales",
    body: (
      <>
        Desde hace 23 años es la principal voz femenina de <strong className="text-accent-light">Los Internacionales, la Orquesta</strong>, de la cual asumió la administración y dirección general desde septiembre de 2021. Su capacidad interpretativa y versatilidad le permiten acompañarse de mariachi, trío, ensambles de jazz con diversas dotaciones, agrupaciones de pop, etc.
      </>
    ),
  },
  {
    year: "Comunicadora",
    body: (
      <>
        Ha dirigido el programa <strong className="text-accent-light">«Músicos en Contacto» (SUTM)</strong> y fue conductora y productora del programa <strong className="text-accent-light">«VIVA LA FIESTA, el mundo de las celebraciones»</strong>. Durante tres años consecutivos ha sido invitada a cantar, en la Basílica, <strong className="text-accent-light">las Mañanitas a la Virgen de Guadalupe</strong>.
      </>
    ),
  },
];

export default function BiografiaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Semblanza"
        title="Biografía"
        intro="Originaria de la Ciudad de México, ha dedicado su vida a la música de una manera apasionada."
        image="/images/IMG_1695.JPG"
      />

      <section className="section">
        <div className="container-site grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)] lg:self-start">
            <div data-reveal="left" className="relative">
              <div className="absolute -inset-3 -z-10 -translate-x-5 translate-y-5 rounded-3xl border border-accent/30" aria-hidden />
              <div className="overflow-hidden rounded-3xl">
                <Image src="/images/elsa-urbina.jpeg" alt="Retrato de Elsa Urbina" width={1041} height={1280} sizes="(min-width: 1024px) 520px, 100vw" className="h-auto w-full transition-transform duration-[1.5s] ease-out-expo hover:scale-105" />
              </div>
            </div>
            <blockquote data-reveal className="mt-10 border-l-2 border-accent pl-6">
              <Quote className="size-7 text-accent" aria-hidden />
              <p className="mt-3 font-display text-3xl italic leading-snug text-secondary">
                Está convencida de que el arte habrá de salvar al mundo.
              </p>
            </blockquote>
          </div>

          <ol className="relative space-y-12 border-l border-white/10 pl-8 md:pl-12">
            {CAPITULOS.map((c, i) => (
              <li key={c.year} data-reveal style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties} className="relative">
                <span className="absolute -left-[calc(2rem+7px)] top-2 size-3.5 rounded-full border-2 border-accent bg-ink md:-left-[calc(3rem+7px)]" aria-hidden />
                <p className="eyebrow">{c.year}</p>
                <p className="mt-4 text-lg leading-relaxed text-secondary-soft">{c.body}</p>
              </li>
            ))}
            <li data-reveal>
              <Link href="/trayectoria" className="btn-primary">
                Ver reconocimientos <ArrowRight className="size-4" aria-hidden />
              </Link>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
