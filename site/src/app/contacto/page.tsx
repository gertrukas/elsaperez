import ContactSection from "@/components/ContactSection";
import PageHeader from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contacto y contrataciones",
  description:
    "Contrata a Elsa Urbina para bodas, eventos corporativos y conciertos: mariachi, Los Internacionales, big band y jazz. Teléfono, WhatsApp, correo y formulario.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contrataciones directas"
        title="Contacto"
        intro="Lleva a tu evento la música de Elsa Urbina."
        image="/images/elsa-urbina-noche-de-gala.jpeg"
      />
      <ContactSection headingLevel="h1" />
    </>
  );
}
