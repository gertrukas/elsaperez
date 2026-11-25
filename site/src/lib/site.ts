export const SITE = {
  name: "Elsa Urbina",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://elsaurbina.com").replace(/\/$/, ""),
  domain: "elsaurbina.com",
  tagline: "Cantante & Conductora",
  title: "Elsa Urbina | Cantante de música mexicana y conductora",
  description:
    "Sitio oficial de Elsa Urbina. Cantante mexicana con más de 30 años de trayectoria: mariachi, bolero, balada y jazz. Directora de Los Internacionales y conductora de televisión.",
  emails: ["info@elsaurbina.com", "elsaurbinamexico@gmail.com"],
  phoneDisplay: "+52 55 8580 9927",
  phoneHref: "tel:+525585809927",
  whatsapp: "525585809927",
  whatsappMessage:
    "¡Hola Elsa Urbina! Me gustaría solicitar información sobre tus presentaciones y contrataciones.",
  city: "Ciudad de México",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/share/19vu3wiodG/?mibextid=wwXIfr", icon: "/images/social/facebook.png" },
    { label: "Instagram", href: "https://www.instagram.com/elsa_urbina", icon: "/images/social/instagram.png" },
    { label: "TikTok", href: "https://www.tiktok.com/@elsaurbina31", icon: "/images/social/tiktok.png" },
    { label: "YouTube", href: "https://youtube.com/@elsaurbinaoficial", icon: "/images/social/youtube.png" },
  ],
  nav: [
    { label: "Biografía", href: "/biografia" },
    { label: "Trayectoria", href: "/trayectoria" },
    { label: "Discografía", href: "/discografia" },
    { label: "Galería", href: "/galeria" },
    { label: "Comunicados", href: "/comunicados" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;

export function whatsappUrl(message: string = SITE.whatsappMessage) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
