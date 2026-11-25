import { ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Aviso de privacidad",
  description: "Aviso de privacidad simplificado del sitio oficial de Elsa Urbina.",
  path: "/aviso-privacidad",
});

export default function AvisoPrivacidadPage() {
  return (
    <section className="section">
      <div className="container-site max-w-3xl">
        <p className="eyebrow animate-fade-up">Legal</p>
        <h1 className="mt-4 font-display text-5xl font-semibold animate-fade-up [animation-delay:120ms]">Aviso de privacidad simplificado</h1>
        <div className="card mt-10 space-y-5 p-8 leading-relaxed text-secondary-soft animate-fade-up [animation-delay:240ms]">
          <ShieldCheck className="size-8 text-accent" aria-hidden />
          <p>
            Elsa Urbina, con medio de contacto en <a href={`mailto:${SITE.emails[1]}`} className="text-accent underline underline-offset-2">{SITE.emails[1]}</a>, utiliza la información que se le proporcione a través de este portal exclusivamente para atender solicitudes de contratación, información artística y atención al público.
          </p>
          <p>
            Los datos personales recabados (nombre, correo, teléfono y detalles del evento) serán resguardados conforme a la legislación aplicable en materia de protección de datos personales y no se compartirán con terceros.
          </p>
          <p>
            Este sitio utiliza Google reCAPTCHA para proteger el formulario de contacto contra envíos automatizados; su uso está sujeto a la{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">política de privacidad</a> y los{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">términos del servicio</a> de Google.
          </p>
        </div>
      </div>
    </section>
  );
}
