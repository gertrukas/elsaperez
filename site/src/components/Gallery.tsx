"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { Foto } from "@/content/data";

/** Galería tipo mosaico con visor a pantalla completa (teclado: ← → Esc). */
export default function Gallery({ fotos }: { fotos: Foto[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + fotos.length) % fotos.length)), [fotos.length]);

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  const current = index === null ? null : fotos[index];

  return (
    <>
      <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {fotos.map((foto, i) => (
          <li key={foto.src} data-reveal="zoom" style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties} className="mb-5 break-inside-avoid">
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-white/5 bg-ink-800"
              aria-label={`Ver foto: ${foto.title}`}
            >
              <Image
                src={foto.src}
                alt={foto.title}
                width={foto.width}
                height={foto.height}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-5 text-left opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="block font-display text-xl font-semibold text-secondary">{foto.title}</span>
                  <span className="mt-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
                    <Expand className="size-3.5" aria-hidden /> Ampliar
                  </span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && index !== null && (
        <div role="dialog" aria-modal="true" aria-label={current.title} className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md animate-fade-in" onClick={close}>
          <button type="button" onClick={close} aria-label="Cerrar" className="absolute right-4 top-4 grid size-12 place-items-center rounded-full border border-accent/50 text-accent transition-colors hover:bg-accent hover:text-ink">
            <X className="size-5" aria-hidden />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Foto anterior" className="absolute left-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink/60 text-secondary transition-colors hover:border-accent hover:text-accent sm:left-6">
            <ChevronLeft className="size-6" aria-hidden />
          </button>
          <figure key={current.src} className="flex max-h-full max-w-5xl flex-col items-center animate-fade-up" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.title} width={current.width} height={current.height} sizes="90vw" className="max-h-[78svh] w-auto rounded-xl object-contain" />
            <figcaption className="mt-4 text-center">
              <span className="font-display text-xl text-secondary">{current.title}</span>
              <span className="ml-3 text-xs text-secondary-muted">{index + 1} / {fotos.length}</span>
            </figcaption>
          </figure>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Foto siguiente" className="absolute right-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink/60 text-secondary transition-colors hover:border-accent hover:text-accent sm:right-6">
            <ChevronRight className="size-6" aria-hidden />
          </button>
        </div>
      )}
    </>
  );
}
