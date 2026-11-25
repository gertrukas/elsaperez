import Image from "next/image";
import Gallery from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";
import { GALERIA } from "@/content/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Galería fotográfica",
  description: "Fotos de Elsa Urbina en concierto, giras, televisión y sesiones fotográficas.",
  path: "/galeria",
  image: "/images/IMG_1710.JPG",
});

export default function GaleriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Galería"
        title="Galería fotográfica"
        intro="Colección visual de presentaciones en concierto, giras y momentos de Elsa Urbina."
        image="/images/IMG_1710.JPG"
      />
      <section className="section">
        <div className="container-site">
          <div data-reveal="zoom" className="mb-10 overflow-hidden rounded-3xl border border-white/10">
            <Image src="/images/elsa-urbina-viva-la-fiesta.jpeg" alt="Elsa Urbina en Viva la fiesta, el mundo de las celebraciones" width={1280} height={721} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
          </div>
          <Gallery fotos={GALERIA} />
        </div>
      </section>
    </>
  );
}
