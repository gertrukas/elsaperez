"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function setFinalCount(node: HTMLElement) {
  const target = Number(node.dataset.count ?? 0);
  const suffix = node.dataset.countSuffix ?? "";
  if (!Number.isFinite(target)) return;
  node.textContent = `${target.toLocaleString("es-MX")}${suffix}`;
}

function startCount(node: HTMLElement) {
  const target = Number(node.dataset.count ?? 0);
  const suffix = node.dataset.countSuffix ?? "";
  if (!Number.isFinite(target)) return;

  const duration = 1500;
  const start = performance.now();
  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    node.textContent = `${Math.round(target * eased).toLocaleString("es-MX")}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };

  node.textContent = `0${suffix}`;
  requestAnimationFrame(tick);
}

export default function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    let revealObserver: IntersectionObserver | null = null;
    let counterObserver: IntersectionObserver | null = null;
    let timer = 0;

    const setup = () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const revealNodes = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]"),
      );

      if (reduceMotion) {
        revealNodes.forEach((node) => node.classList.add("is-revealed"));
        document
          .querySelectorAll<HTMLElement>("[data-count]")
          .forEach(setFinalCount);
        return;
      }

      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            revealObserver?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -7% 0px", threshold: 0.08 },
      );

      revealNodes.forEach((node) => {
        if (node.classList.contains("is-revealed")) return;
        // Lo que ya está a la vista (o por encima del viewport tras una
        // navegación con scroll restaurado) se muestra de inmediato.
        const rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          node.classList.add("is-revealed");
          return;
        }
        revealObserver?.observe(node);
      });

      counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const node = entry.target as HTMLElement;
            counterObserver?.unobserve(node);
            startCount(node);
          });
        },
        { threshold: 0.5 },
      );

      document.querySelectorAll<HTMLElement>("[data-count]").forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          setFinalCount(node);
          return;
        }
        counterObserver?.observe(node);
      });
    };

    // Espera al commit de la nueva ruta antes de recolectar los nodos.
    timer = window.setTimeout(setup, 80);

    return () => {
      window.clearTimeout(timer);
      revealObserver?.disconnect();
      counterObserver?.disconnect();
    };
  }, [pathname]);

  return null;
}
