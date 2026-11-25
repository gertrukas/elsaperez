import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-accent/20 bg-ink-900">
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" aria-hidden />
      <div className="container-site relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div data-reveal>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-full border border-accent/60 font-display text-2xl font-semibold text-accent">E</span>
            <span className="font-display text-3xl font-semibold text-gold animate-shine">Elsa Urbina</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-secondary-muted">
            Embajadora de la música internacional, popular mexicana y conductora de televisión.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <nav aria-label="Pie de página" data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">Explora</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm md:grid-cols-1">
            {SITE.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-secondary-soft transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div data-reveal style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">Contrataciones</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={SITE.phoneHref} className="flex items-center gap-3 text-secondary-soft transition-colors hover:text-accent">
                <Phone className="size-4 text-accent" aria-hidden />
                {SITE.phoneDisplay}
              </a>
            </li>
            {SITE.emails.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`} className="flex items-center gap-3 break-all text-secondary-soft transition-colors hover:text-accent">
                  <Mail className="size-4 shrink-0 text-accent" aria-hidden />
                  {email}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 text-secondary-soft">
              <MapPin className="size-4 text-accent" aria-hidden />
              {SITE.city}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-secondary-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Elsa Urbina. Todos los derechos reservados.</p>
          <Link href="/aviso-privacidad" className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-accent">
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
