"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function BiografiaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      <Header />

      <main className="flex-grow py-16 md:py-24 bg-stone-950 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-amber-400 mb-4">
              Biografía y Semblanza
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4 animate-pulseGlow" />
            <p className="text-stone-400 text-base md:text-lg">
              Originaria de la Ciudad de México. Una vida consagrada al canto, la preservación de las bellas artes y la difusión de la música tradicional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Imagen Biografía */}
            <div className="md:col-span-5 animate-fadeIn">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-stone-800 group hover:border-amber-500/50 transition-all duration-500">
                <Image
                  src="/images/IMG_1695.JPG"
                  alt="Elsa Pérez Urbina Biografía"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Texto de la Semblanza */}
            <div className="md:col-span-7 space-y-5 text-stone-300 leading-relaxed animate-fadeInSlow">
              <p className="p-3 rounded-lg hover:bg-stone-900/40 transition-colors">
                Inició sus estudios profesionales a los 17 años en la <strong className="text-amber-300">Escuela de Iniciación Artística de Bellas Artes</strong>, especializándose en canto y flauta traversa. Formó parte de la Compañía Mexicana de Ópera y del Coro Monumental de Bellas Artes. Continuó su formación en la Escuela de Música G. Martell y el Sindicato Único de Trabajadores de la Música (SUTM), perfeccionando su técnica vocal con maestros renombrados como Fernando Lima, Adriana Moreno y Orlando Muñiz.
              </p>
              <p className="p-3 rounded-lg hover:bg-stone-900/40 transition-colors">
                En 1998 fue coronada <strong className="text-amber-300">Reina de los Músicos de la Ciudad de México</strong>, un hito fundamental en su carrera. Ha participado en producciones de Televisa como <em>“Bailando por un sueño”</em>, <em>“Cantando por un sueño”</em> y diversas telenovelas, además de ser corista estelar junto a figuras de la talla de Thalía, Alejandra Guzmán, Samo y Gilberto Gless.
              </p>
              <p className="p-3 rounded-lg hover:bg-stone-900/40 transition-colors">
                Desde 2003 es la voz femenina principal de la prestigiada orquesta <strong className="text-amber-300">Los Internacionales</strong>, asumiendo su Administración y Dirección General desde septiembre de 2021. Su versatilidad le permite destacar al frente de agrupaciones con Mariachi, Big Band, ensambles de Jazz y formato de Orquesta Versátil.
              </p>
              <p className="p-3 rounded-lg hover:bg-stone-900/40 transition-colors">
                En su faceta como conductora y comunicadora, ha dirigido el programa <em>“Músicos en Contacto”</em> (SUTM) y fue conductora y productora del programa <em>“VIVA LA FIESTA”</em>. Durante tres años consecutivos ha sido invitada a cantar en las Mañanitas a la Virgen de Guadalupe en la Basílica de Guadalupe.
              </p>
            </div>

          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
