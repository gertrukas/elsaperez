"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ComunicadosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      <Header />

      <main className="flex-grow py-16 md:py-24 bg-stone-950 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-amber-400 mb-4">
              Comunicados & Prensa
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4 animate-pulseGlow" />
            <p className="text-stone-400 text-base md:text-lg">
              Últimas noticias, boletines informativos y presentaciones recientes de Elsa Pérez Urbina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-stone-900 border border-stone-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg">
              <div className="text-amber-400 text-xs font-semibold mb-2">ABRIL 2026</div>
              <h3 className="text-xl font-bold font-serif text-white mb-3">Lanzamiento de "Segundo Aire"</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Elsa Urbina estrena su tema "Segundo aire", debutando como autora y compositora en colaboración con Luis Mogollón y Oscar Ignacio León.
              </p>
            </div>

            <div className="bg-stone-900 border border-stone-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg">
              <div className="text-amber-400 text-xs font-semibold mb-2">DICIEMBRE 2025</div>
              <h3 className="text-xl font-bold font-serif text-white mb-3">Mañanitas a la Virgen de Guadalupe</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Por tercer año consecutivo, Elsa tuvo el honor de participar en la tradicional serenata a la Virgen de Guadalupe en la Basílica.
              </p>
            </div>

            <div className="bg-stone-900 border border-stone-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg">
              <div className="text-amber-400 text-xs font-semibold mb-2">INTERNACIONAL</div>
              <h3 className="text-xl font-bold font-serif text-white mb-3">Difusión en Emisoras de Colombia</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Sus temas musicales sobrepasan fronteras con una extraordinaria recepción en más de 350 emisoras de radio en Colombia.
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
