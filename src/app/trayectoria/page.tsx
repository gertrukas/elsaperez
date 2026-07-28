"use client";

import { Award, Mic, Radio, Heart } from "lucide-react";

export default function TrayectoriaPage() {
  return (
    <div className="flex-grow py-16 md:py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-gray-400 mb-4">
              Trayectoria y Reconocimientos
            </h1>
            <div className="w-24 h-1 bg-stone-900 mx-auto rounded-full mb-4 animate-pulseGlow" />
            <p className="text-gray-400 text-base md:text-lg">
              Otorgados por su excelencia interpretativa y por sus aportaciones a la cultura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-stone-900 border border-stone-800 hover:border-amber-500/50 p-8 rounded-2xl text-center space-y-4 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
              <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                <Award className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif group-hover:text-amber-400 transition-colors">Doctorado Honoris Causa</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Otorgado, en 2021, por el Colegio Internacional de Profesionistas.
              </p>
            </div>

            <div className="bg-stone-900 border border-stone-800 hover:border-amber-500/50 p-8 rounded-2xl text-center space-y-4 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
              <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                <Mic className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif group-hover:text-amber-400 transition-colors">Micrófono de Oro</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Galardón de la Asociación Nacional de Locutores de México.
              </p>
            </div>

            <div className="bg-stone-900 border border-stone-800 hover:border-amber-500/50 p-8 rounded-2xl text-center space-y-4 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
              <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                <Heart className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif group-hover:text-amber-400 transition-colors">Premios Yohualli</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Diosa de plata ofrecida, en Puebla, por la organización que preside el Dr. David Pérez Méndez.
              </p>
            </div>

            <div className="bg-stone-900 border border-stone-800 hover:border-amber-500/50 p-8 rounded-2xl text-center space-y-4 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
              <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                <Radio className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif group-hover:text-amber-400 transition-colors">Latin Grammy Member</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Miembro de la Academia del Latin Grammy como intérprete femenina del álbum triple "Tour" de Los Internacionales. En 2007.
              </p>
            </div>

          </div>

        </div>
    </div>
  );
}
