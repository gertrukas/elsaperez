import Image from "next/image";
import { Award, Heart, Mic, Radio } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { RECONOCIMIENTOS } from "@/content/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Trayectoria y reconocimientos",
  description:
    "Reconocimientos de Elsa Urbina: Doctorado Honoris Causa, Micrófono de Oro, Premios Yohualli y miembro de la Academia del Latin Grammy.",
  path: "/trayectoria",
  image: "/images/microfono-de-oro.jpeg",
});

const ICONS = { award: Award, mic: Mic, heart: Heart, radio: Radio };

export default function TrayectoriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trayectoria"
        title="Reconocimientos"
        intro="Otorgados por su excelencia interpretativa y por sus aportaciones a la cultura."
        image="/images/microfono-de-oro.jpeg"
      />

      <section className="section">
        <div className="container-site">
          <ul className="grid gap-6 md:grid-cols-2">
            {RECONOCIMIENTOS.map((r, i) => {
              const Icon = ICONS[r.icon];
              return (
                <li key={r.titulo} data-reveal style={{ "--reveal-delay": `${(i % 2) * 120}ms` } as React.CSSProperties} className="card card-hover group relative overflow-hidden p-8 md:p-10">
                  <span className="pointer-events-none absolute -right-4 -top-6 font-display text-[9rem] font-bold leading-none text-white/[0.03]" aria-hidden>
                    0{i + 1}
                  </span>
                  <span className="grid size-16 place-items-center rounded-full border border-accent/40 text-accent transition-all duration-700 group-hover:rotate-[360deg] group-hover:bg-accent group-hover:text-ink">
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <h2 className="mt-6 font-display text-3xl font-semibold transition-colors group-hover:text-accent md:text-4xl">{r.titulo}</h2>
                  <p className="mt-3 leading-relaxed text-secondary-muted">{r.descripcion}</p>
                </li>
              );
            })}
          </ul>

          <figure data-reveal="zoom" className="mt-16 overflow-hidden rounded-3xl border border-white/10">
            <Image src="/images/microfono-de-oro.jpeg" alt="Elsa Urbina recibiendo el Micrófono de Oro" width={1280} height={960} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
            <figcaption className="bg-ink-800 px-6 py-4 text-sm text-secondary-muted">
              Recibiendo el apreciado Micrófono de Oro al lado de Jesús Vázquez «Chucas» de su Mariachi Nuestro México.
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
