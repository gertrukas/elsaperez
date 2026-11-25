import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const UPDATED = new Date("2026-11-25");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ["", 1],
    ["/biografia", 0.9],
    ["/trayectoria", 0.8],
    ["/discografia", 0.8],
    ["/galeria", 0.7],
    ["/comunicados", 0.7],
    ["/contacto", 0.8],
    ["/aviso-privacidad", 0.2],
  ];
  return pages.map(([path, priority]) => ({
    url: `${SITE.url}${path}`,
    lastModified: UPDATED,
    changeFrequency: "monthly",
    priority,
  }));
}
