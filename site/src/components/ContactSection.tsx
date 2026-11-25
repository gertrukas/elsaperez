import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import SectionHeading from "@/components/SectionHeading";

export default function ContactSection({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  return (
    <section id="contacto" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-20 size-[30rem] rounded-full bg-accent/5 blur-3xl" aria-hidden />
      <div className="container-site relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          {headingLevel === "h2" ? (
            <SectionHeading
              eyebrow="Contrataciones directas"
              title={<>Lleva la música de Elsa <span className="italic text-gold animate-shine">a tu evento</span></>}
              intro="Disponible para presentaciones con Los Internacionales (orquesta versátil), mariachi, big band, formatos de jazz y acompañada por piano y/o guitarra."
            />
          ) : (
            <p data-reveal className="text-base leading-relaxed text-secondary-muted md:text-lg">
              Disponible para presentaciones con Los Internacionales (orquesta versátil), mariachi, big band, formatos de jazz y acompañada por piano y/o guitarra.
            </p>
          )}
          <div className="mt-10">
            <ContactInfo />
          </div>
        </div>
        <div data-reveal="right">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
