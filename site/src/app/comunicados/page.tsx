import { Newspaper } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { COMUNICADOS } from "@/content/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Comunicados y prensa",
  description: "Noticias, boletines y presentaciones recientes de Elsa Urbina.",
  path: "/comunicados",
  image: "/images/elsa-urbina-noche-de-gala.jpeg",
});

export default function ComunicadosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Prensa"
        title="Comunicados"
        intro="Últimas noticias, boletines informativos y presentaciones recientes de Elsa Urbina."
        image="/images/elsa-urbina-noche-de-gala.jpeg"
      />
      <section className="section">
        <div className="container-site max-w-4xl">
          <ul className="space-y-6">
            {COMUNICADOS.map((c, i) => (
              <li key={c.titulo} data-reveal style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}>
                <article className="card card-hover group grid gap-6 p-7 md:grid-cols-[10rem_1fr] md:p-10">
                  <div className="flex items-center gap-3 md:flex-col md:items-start">
                    <span className="grid size-12 place-items-center rounded-full bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                      <Newspaper className="size-5" aria-hidden />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{c.fecha}</p>
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-semibold transition-colors group-hover:text-accent">{c.titulo}</h2>
                    <p className="mt-3 leading-relaxed text-secondary-muted">{c.texto}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
