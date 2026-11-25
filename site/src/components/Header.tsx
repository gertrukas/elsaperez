"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import SocialLinks from "@/components/SocialLinks";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú al navegar y bloquea el scroll mientras está abierto.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 h-[var(--nav-h)] border-b transition-[background-color,border-color,box-shadow] duration-500",
        scrolled || open
          ? "border-accent/25 bg-ink/85 shadow-[0_10px_40px_-20px_rgb(0_0_0/0.9)] backdrop-blur-xl"
          : "border-transparent bg-ink",
      )}
    >
      <div className="container-site flex h-full items-center gap-6">
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label={`${SITE.name}, inicio`}>
          <span className="grid size-11 shrink-0 place-items-center rounded-full border border-accent/60 font-display text-2xl font-semibold text-accent transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-accent group-hover:text-ink">
            E
          </span>
          <span className="min-w-0 leading-none">
            <span className="block whitespace-nowrap font-display text-2xl font-semibold tracking-wide text-secondary sm:text-[1.7rem]">
              Elsa Urbina
            </span>
            <span className="mt-1 block whitespace-nowrap text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        <nav aria-label="Principal" className="ml-auto hidden xl:block">
          <ul className="flex items-center gap-1">
            {SITE.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "group relative px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.href) ? "text-accent" : "text-secondary-soft hover:text-accent",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-500",
                      isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks className="ml-auto hidden md:flex xl:ml-2" />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="ml-auto grid size-11 place-items-center rounded-full border border-accent/50 text-accent transition-colors hover:bg-accent hover:text-ink md:ml-2 xl:hidden"
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>
    </header>

      {/* Fuera del <header>: su backdrop-filter haría que el panel fixed midiera 0 de alto. */}
      <div
        id="menu-movil"
        className={cn(
          "fixed inset-x-0 bottom-0 top-[var(--nav-h)] z-40 overflow-y-auto bg-ink/97 backdrop-blur-xl transition-[opacity,visibility] duration-500 xl:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Menú móvil" className="container-site flex min-h-full flex-col py-10">
          <ul className="space-y-1">
            {SITE.nav.map((item, i) => (
              <li
                key={item.href}
                className={cn("transition-all duration-700 ease-out-expo", open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "flex items-baseline border-b border-white/5 py-4 font-display text-4xl transition-colors",
                    isActive(item.href) ? "text-accent" : "text-secondary hover:text-accent",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-secondary-muted">Sígueme</p>
            <SocialLinks size="lg" />
          </div>
        </nav>
      </div>
    </>
  );
}
