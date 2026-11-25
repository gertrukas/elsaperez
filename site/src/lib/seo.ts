import type { Metadata } from "next";
import { SITE } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/** Metadata por página: título, descripción, canonical y Open Graph. */
export function pageMetadata({ title, description, path, image = "/images/hero-elsa-urbina.jpg" }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_MX",
      url: path,
      siteName: SITE.name,
      title: `${title} | ${SITE.name}`,
      description,
      images: [{ url: image, alt: SITE.name }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${SITE.name}`, description, images: [image] },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#elsa-urbina`,
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}/images/hero-elsa-urbina.jpg`,
    jobTitle: ["Cantante", "Directora de orquesta", "Conductora de televisión"],
    description: SITE.description,
    email: SITE.emails[0],
    telephone: "+525585809927",
    nationality: { "@type": "Country", name: "México" },
    homeLocation: { "@type": "Place", name: SITE.city },
    award: ["Doctorado Honoris Causa", "Micrófono de Oro", "Premios Yohualli"],
    sameAs: SITE.social.map((s) => s.href),
  };
}
