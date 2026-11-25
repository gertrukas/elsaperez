import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MotionProvider from "@/components/MotionProvider";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { personJsonLd } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [{ url: "/images/hero-elsa-urbina.jpg", width: 2240, height: 1113, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/images/hero-elsa-urbina.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col bg-ink text-secondary antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:font-semibold focus:text-ink"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <MotionProvider />
        <JsonLd data={personJsonLd()} />
      </body>
    </html>
  );
}
