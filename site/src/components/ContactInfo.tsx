import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      <a href={SITE.phoneHref} data-reveal className="card card-hover group flex items-center gap-4 p-5">
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
          <Phone className="size-5" aria-hidden />
        </span>
        <span>
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-secondary-muted">Teléfono</span>
          <span className="font-semibold text-secondary">{SITE.phoneDisplay}</span>
        </span>
      </a>
      <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties} className="card card-hover group flex items-center gap-4 p-5">
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
          <Mail className="size-5" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-secondary-muted">Correo electrónico</span>
          {SITE.emails.map((email) => (
            <a key={email} href={`mailto:${email}`} className="block break-all font-semibold text-secondary transition-colors hover:text-accent">{email}</a>
          ))}
        </span>
      </div>
      <div data-reveal style={{ "--reveal-delay": "160ms" } as React.CSSProperties} className="card flex items-center gap-4 p-5">
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
          <MapPin className="size-5" aria-hidden />
        </span>
        <span>
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-secondary-muted">Base</span>
          <span className="font-semibold text-secondary">{SITE.city} · Presentaciones en todo México y el extranjero</span>
        </span>
      </div>
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-reveal style={{ "--reveal-delay": "240ms" } as React.CSSProperties} className="group flex items-center gap-4 rounded-[1.25rem] bg-whatsapp p-5 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-whatsapp-hover">
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/15">
          <MessageCircle className="size-5 fill-current" aria-hidden />
        </span>
        <span>
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Respuesta inmediata</span>
          <span className="font-semibold">Escríbeme por WhatsApp</span>
        </span>
      </a>
    </div>
  );
}
