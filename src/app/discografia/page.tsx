"use client";

import { Music } from "lucide-react";

export default function DiscografiaPage() {
  const sencillos = [
    { titulo: "Segundo Aire", descripcion: "Debut como autora y compositora en colaboración con Luis Mogollón y Oscar Ignacio León.", badge: "Lanzamiento Reciente" },
    { titulo: "El pastor", descripcion: "Una de las más bellas páginas de la música mexicana. Poco interpretada por su alto grado de dificultad: La versión de Elsa es una verdadera creación.", badge: "Próximo lanzamiento" },
    { titulo: "Te voy a enseñar a querer", descripcion: "Muchas cantantes respaldan su trabajo con una buena técnica. Elsa Urbina lo hace, además, con una singular capacidad interpretativa.", badge: "Lanzamiento Reciente" },
    { titulo: "Te sigo amando", descripcion: "A pesar de los vaivenes de la vida, Elsa conserva su gran pasión por la música… es su verdadero amor.", badge: "Lanzamiento Reciente" },
    { titulo: "Cielo Rojo", descripcion: "Nada más difícil que incorporara al repertorio una canción que cuenta con múltiples versiones. La contribución de Elsa es cantarla con feminidad, sin gritos ni aspavientos..", badge: "Lanzamiento Reciente" },
    { titulo: "La Gata Bajo la Lluvia", descripcion: "Versión del célebre tema de Rafael Pérez Botija, por la cual mereció el galardón a 'Mejor Artista Romántica del Año,' que le fue concedido en la ciudad de Nueva York.", badge: "Éxito Galardonado" },
    { titulo: "Amarte es un Placer", descripcion: "Primer sencillo como solista del compositor Juan Carlos Calderón, difundido internacionalmente en EE.UU., Colombia y República Dominicana.", badge: "Sencillo Principal" },
    { titulo: "La Belleza", descripcion: "Tema de su ´primera producción como solista, con la cual, acompañada por Mariachi, rinde homenaje a sus raíces mexicanas.", badge: "Álbum Solista" },
    { titulo: "La Llorona", descripcion: "Interpretación, en español y zapoteco, del conocido tema tradicional, con el cual ha logrado                                     gran reconocimiento de público y crítica.", badge: "Tradición Mexicana" },
    { titulo: "El Toro y la Luna", descripcion: "Por lo general, es una canción que interpretan hombres, con estilo operático. Son contadas las versiones femeninas. Elsa prefiere comunicar antes que impresionar.", badge: "Fusión Cultural" },
    { titulo: "Búscame en tu corazón", descripcion: "En su interés por aceptar retos interpretativos en géneros con auténtica musicalidad, Elsa canta, al lado del compositor Martín Ramos, una cumbia bailable cuya letra contrasta los momentos difíciles con la felicidad.", badge: "Fusión Cultural" },
    { titulo: "Granada", descripcion: "Por lo general, es una canción que interpretan hombres, con estilo operático. Son contadas las versiones femeninas. Elsa prefiere comunicar antes que impresionar.", badge: "Fusión Cultural" },
  ];




  return (
    <div className="flex-grow py-16 md:py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-gray-400 mb-4">
              Sencillos y Discografía
            </h1>
            <div className="w-24 h-1 bg-stone-900 mx-auto rounded-full mb-4 animate-pulseGlow" />
            <p className="text-gray-400 text-base md:text-lg">
              Explora las producciones discográficas y sencillos más representativos interpretados por Elsa Urbina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sencillos.map((sencillo, index) => (
              <div
                key={index}
                className="bg-stone-950 border border-stone-800 hover:border-amber-500/60 p-6 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all">
                      {sencillo.badge}
                    </span>
                    <Music className="w-6 h-6 text-amber-400 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {sencillo.titulo}
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-4">
                    {sencillo.descripcion}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-900 flex items-center text-amber-400 font-semibold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Disponible en Plataformas Digitales</span>
                </div>
              </div>
            ))}
          </div>

        </div>
    </div>
  );
}
