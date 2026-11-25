import Equalizer from "@/components/Equalizer";
import PageHeader from "@/components/PageHeader";
import { SENCILLOS } from "@/content/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Discografía y sencillos",
  description:
    "Sencillos y producciones de Elsa Urbina: Segundo Aire, La Gata Bajo la Lluvia, Amarte es un Placer, La Belleza con mariachi, La Llorona y más.",
  path: "/discografia",
});

export default function DiscografiaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Discografía"
        title="Sencillos y discografía"
        intro="Las producciones discográficas y sencillos más representativos interpretados por Elsa Urbina."
        image="/images/elsa-urbina-cantando.jpeg"
      />

      <section className="section">
        <div className="container-site">
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SENCILLOS.map((s, i) => (
              <li key={s.titulo} data-reveal style={{ "--reveal-delay": `${(i % 3) * 100}ms` } as React.CSSProperties} className="card card-hover group flex flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-semibold text-white/10 transition-colors duration-500 group-hover:text-accent/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Equalizer className="opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <h2 className="mt-4 font-display text-3xl font-semibold transition-colors group-hover:text-accent">{s.titulo}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary-muted">{s.descripcion}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-ink">
                    {s.badge}
                  </span>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-secondary-muted">Plataformas digitales</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
