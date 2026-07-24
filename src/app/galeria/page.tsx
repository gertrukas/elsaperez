"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function GaleriaPage() {
  const galeriaFotos = [
    { src: "/images/IMG_1695.JPG", title: "Presentación en Vivo" },
    { src: "/images/IMG_1698.JPG", title: "Sesión Fotográfica Principal" },
    { src: "/images/IMG_1710.JPG", title: "Retrato Artístico" },
    { src: "/images/Elsa_4212.jpg", title: "Música Popular Mexicana" },
    { src: "/images/Elsa_4323.jpg", title: "Interpretación Versátil" },
    { src: "/images/Elsa_4496.jpg", title: "Escenario y Luces" },
    { src: "/images/IMG_1697.jpg", title: "Retrato Clásico" },
    { src: "/images/IMG_1700.JPG", title: "Sesión Fotográfica" },
    { src: "/images/IMG_1708.JPG", title: "Presentación Artística" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      <Header />

      <main className="flex-grow py-16 md:py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-gray-400 mb-4">
              Galería Fotográfica
            </h1>
            <div className="w-24 h-1 bg-gray-400 mx-auto rounded-full mb-4 animate-pulseGlow" />
            <p className="text-gray-400 text-base md:text-lg">
              Colección visual de presentaciones en concierto, giras y momentos de Elsa Pérez Urbina.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galeriaFotos.map((foto, index) => (
              <div
                key={index}
                className="relative group aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-stone-800 bg-stone-950 cursor-pointer"
              >
                <Image
                  src={foto.src}
                  alt={foto.title}
                  fill
                  className="object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-0 group-hover:opacity-95 transition-all duration-400 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white font-bold text-lg font-serif">{foto.title}</h4>
                    <p className="text-amber-400 text-xs font-semibold">Elsa Pérez Urbina</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
