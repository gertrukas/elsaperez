"use client";

import Image from "next/image";

export default function BiografiaPage() {
  return (
    <div className="flex-grow py-16 md:py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-gray-400 mb-4">
              Biografía y Semblanza
            </h1>
            <div className="w-24 h-1 bg-gray-400 mx-auto rounded-full mb-4 animate-pulseGlow" />
            <p className="text-gray-400 text-base md:text-lg">
              Originaria de la Ciudad de México, ha dedicado su vida a la música, de una manera apasionada. Está convencida de que el arte habrá de salvar al mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Imagen Biografía */}
            <div className="md:col-span-5 animate-fadeIn">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-gray-400/20 group hover:border-amber-600/60 transition-all duration-500">
                <Image
                  src="/images/IMG_1695.JPG"
                  alt="Elsa Urbina Biografía"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Texto de la Semblanza */}
            <div className="md:col-span-7 space-y-5 text-stone-300 leading-relaxed animate-fadeInSlow">
              <p className="p-4 rounded-xl bg-stone-950/95 border border-gray-400/60 shadow-md hover:border-amber-500/50 transition-colors">
                Inició sus estudios profesionales, de canto y flauta traversa, a la edad de 17 años, en la <strong className="text-amber-300">Escuela de Iniciación Artística de Bellas Artes</strong>. Formó parte de la Compañía Mexicana de Ópera y del Coro Monumental de Bellas Artes. Continuó su formación en la Escuela de Música G. Martell y en la Escuela de Capacitación Musical, del Sindicato Único de Trabajadores de la Música de la Ciudad de México. Otros de sus maestros de técnica vocal han sido los prestigiados Fernando Lima, Adriana Moreno y Orlando Muñiz.
              </p>
              <p className="p-4 rounded-xl bg-stone-950/95 border border-gray-400/60 shadow-md hover:border-amber-500/50 transition-colors">
                En 1998 fue coronada <strong className="text-amber-300">Reina de los Músicos del SUTM.</strong> Ha participado en producciones de televisión, como “Bailando por un sueño”, “Cantando por un sueño” y diversas telenovelas, además de ser corista de figuras estelares como Alejandra Guzmán, Gilberto Gless, Thalía y Samo.
              </p>
              <p className="p-4 rounded-xl bg-stone-950/95 border border-gray-400/60 shadow-md hover:border-amber-500/50 transition-colors">
                Desde hace 23 años es la principal voz femenina principal de <strong className="text-amber-300">Los Internacionales, la Orquesta</strong>, de la cual asumió su Administración y Dirección General desde septiembre de 2021. Su capacidad interpretativa y versatilidad le permiten acompañarse de un mariachi, trío, ensambles de jazz con diversas dotaciones, agrupaciones de pop, etc..
              </p>
              <p className="p-4 rounded-xl bg-stone-950/95 border border-gray-400/60 shadow-md hover:border-amber-500/50 transition-colors">
                En su faceta como comunicadora, ha dirigido el programa “<strong className="text-amber-300">Músicos en Contacto” (SUTM) </strong>y fue conductora y productora del programa <strong className="text-amber-300">“VIVA LA FIESTA, el mundo de las celebraciones”</strong>.
                <br/><br/>Durante tres años consecutivos ha sido invitada a cantar, en la Basílica, <strong className="text-amber-300">las Mañanitas a la Virgen de Guadalupe</strong>.
              </p>

            </div>

          </div>

        </div>
    </div>
  );
}
