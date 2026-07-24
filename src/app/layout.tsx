import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elsa Pérez Urbina - Cantante de Música Mexicana y Conductora",
  description: "Sitio oficial de Elsa Pérez Urbina. Cantante mexicana especializada en música popular, mariachi, bolero y conductora de televisión.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-brand-bg text-stone-100 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
