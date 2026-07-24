"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Mic, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      
      <Header />

      <main className="flex-grow">
        
        {/* HERO SECTION estilo propuesta.png */}
        <section id="inicio" className="relative bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950 py-12 md:py-20 overflow-hidden border-b border-amber-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Imagen Principal Hero con animación hover zoom & float sutil */}
              <div className="lg:col-span-6 flex justify-center animate-fadeIn">
                <div className="relative w-full max-w-lg aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/40 group hover:border-amber-400 transition-all duration-500">
                  <Image
                    src="/images/IMG_1698.JPG"
                    alt="Elsa Pérez Urbina - Cantante de Música Popular Mexicana"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 transform group-hover:-translate-y-1 transition-transform duration-300">
                    <span className="inline-block bg-amber-500 text-stone-950 text-xs font-extrabold uppercase px-3 py-1 rounded-full mb-2 shadow-md animate-pulseGlow">
                      Música Popular Mexicana
                    </span>
                    <h2 className="text-2xl font-bold font-serif text-white drop-shadow">
                      Elsa Pérez Urbina
                    </h2>
                  </div>
                </div>
              </div>

              {/* Texto Principal Hero animado con stagger */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left animate-fadeInSlow">
                <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-400 text-sm font-semibold animate-float">
                  <Mic className="w-4 h-4 animate-bounce" />
                  <span>Cantante, Conductora & Directora Musical</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight text-white leading-tight">
                  La Voz y Pasión de la <span className="text-amber-400 underline decoration-amber-500/50 hover:text-amber-300 transition-colors">Música Mexicana</span>
                </h1>
                
                <p className="text-stone-300 text-lg md:text-xl leading-relaxed">
                  Elsa Pérez Urbina es una destacada cantante mexicana especializada en música popular, mariachi y bolero. Con una trayectoria virtuosa de entrega artística, su voz ha cautivado a audiencias en México, Estados Unidos, Colombia y la República Dominicana.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                  <Link
                    href="/contacto"
                    className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-amber-500/25 flex items-center space-x-2"
                  >
                    <span>Contrataciones</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/biografia"
                    className="bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 hover:border-amber-500/40 font-semibold px-7 py-3.5 rounded-xl transition-all transform hover:-translate-y-1"
                  >
                    Conocer Semblanza
                  </Link>
                </div>

                {/* Destacados rápidos con animaciones hover en tarjetas */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-800 text-center">
                  <Link href="/trayectoria" className="p-2 rounded-xl hover:bg-stone-900/60 transition-all duration-300 transform hover:-translate-y-1 block">
                    <div className="text-2xl font-bold text-amber-400 font-serif">+20 Años</div>
                    <div className="text-xs text-stone-400">Trayectoria Musical</div>
                  </Link>
                  <Link href="/biografia" className="p-2 rounded-xl hover:bg-stone-900/60 transition-all duration-300 transform hover:-translate-y-1 block">
                    <div className="text-2xl font-bold text-amber-400 font-serif">Directora</div>
                    <div className="text-xs text-stone-400">Los Internacionales</div>
                  </Link>
                  <Link href="/trayectoria" className="p-2 rounded-xl hover:bg-stone-900/60 transition-all duration-300 transform hover:-translate-y-1 block">
                    <div className="text-2xl font-bold text-amber-400 font-serif">Doctorado</div>
                    <div className="text-xs text-stone-400">Honoris Causa</div>
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />

    </div>
  );
}
