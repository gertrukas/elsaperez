"use client";

import Image from "next/image";
import { Award, Music, Mic, Radio, Heart, ShieldCheck, Mail, Phone } from "lucide-react";

export default function Home() {
  const galeriaFotos = [
    { src: "/images/IMG_1695.JPG", title: "Presentación en Vivo" },
    { src: "/images/IMG_1698.JPG", title: "Sesión Fotográfica Principal" },
    { src: "/images/IMG_1710.JPG", title: "Retrato Artístico" },
    { src: "/images/Elsa_4212.jpg", title: "Música Popular Mexicana" },
    { src: "/images/Elsa_4323.jpg", title: "Interpretación Versátil" },
    { src: "/images/Elsa_4496.jpg", title: "Escenario y Luces" },
  ];

  const sencillos = [
    { titulo: "Segundo Aire", descripcion: "Debut como autora y compositora en colaboración con Luis Mogollón y Oscar Ignacio León.", badge: "Lanzamiento Reciente" },
    { titulo: "La Gata Bajo la Lluvia", descripcion: "Versión del célebre tema de Rafael Pérez Botija, ganadora del galardón a 'Mejor Artista Romántica del Año' en NY.", badge: "Éxito Galardonado" },
    { titulo: "Amarte es un Placer", descripcion: "Primer sencillo como solista del compositor Juan Carlos Calderón, difundido internacionalmente en EE.UU., Colombia y República Dominicana.", badge: "Sencillo Principal" },
    { titulo: "La Belleza", descripcion: "Álbum debut solista con Mariachi que rinde homenaje a sus raíces mexicanas con 11 temas tradicionales y bravíos.", badge: "Álbum Solista" },
    { titulo: "La Llorona", descripcion: "Interpretación singular bilingüe en español y zapoteco con gran reconocimiento de la crítica.", badge: "Tradición Mexicana" },
    { titulo: "El Toro y la Luna", descripcion: "Innovador ensamble de fusión flamenco-mexicano.", badge: "Fusión Cultural" },
  ];

  return (
    <>
        {/* HERO SECTION estilo propuesta.png */}
        <section id="inicio" className="relative bg-brand-bg py-12 md:py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Imagen Principal Hero con animación hover zoom & float sutil */}
              <div className="lg:col-span-6 flex justify-center animate-fadeIn">
                <div className="relative w-full max-w-lg aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-stone-900/30 group hover:border-gray-400transition-all duration-500">
                  <Image
                    src="/images/elsa-perez-urbina.jpeg"
                    alt="Elsa Urbina - Cantante de Música Popular Mexicana"
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
                      Elsa Urbina
                    </h2>
                  </div>
                </div>
              </div>

              {/* Texto Principal Hero animado con stagger */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left animate-fadeInSlow">
                <div className="inline-flex items-center space-x-2 bg-stone-950 border border-stone-950 px-4 py-1.5 rounded-full text-amber-400 text-sm font-semibold animate-float">
                  <Mic className="w-4 h-4 animate-bounce" />
                  <span>Cantante, Directora y Conductora</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight text-gray-400 leading-tight">
                  La Voz y Pasión de la <span className="text-white">Música Internacional</span>
                </h1>
                
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                  Elsa Urbina es una experimentada cantante mexicana, con casi 30 años de experiencia, capaz de abordar géneros tan apreciados en el mundo, como el mariachi y el bolero, entre otros. Se ha presentado, con éxito, en México, los Estados Unidos, Colombia y República Dominicana.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                  <a
                    href="#contacto"
                    className="bg-gray-400hover:bg-gray-400 text-amber-400 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-1"
                  >
                    Contrataciones
                  </a>
                  <a
                    href="/biografia"
                    className="bg-white/70 hover:bg-white text-black border border-stone-900/20 hover:border-stone-900/40 font-semibold px-7 py-3.5 rounded-xl transition-all transform hover:-translate-y-1"
                  >
                    Conocer Semblanza
                  </a>
                </div>

                {/* Destacados rápidos con animaciones hover en tarjetas */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-900/20 text-center">
                  <div className="p-2 rounded-xl bg-stone-950/90 hover:bg-gray-400transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-2xl font-bold text-amber-400 font-serif">+30 Años</div>
                    <div className="text-xs text-stone-300">Trayectoria Musical</div>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-950/90 hover:bg-gray-400transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-2xl font-bold text-amber-400 font-serif">Directora</div>
                    <div className="text-xs text-stone-300">Los Internacionales</div>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-950/90 hover:bg-gray-400transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-2xl font-bold text-amber-400 font-serif">Doctorado</div>
                    <div className="text-xs text-stone-300">Honoris Causa</div>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-950/90 hover:bg-gray-400transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-2xl font-bold text-amber-400 font-serif">Conductora</div>
                    <div className="text-xs text-stone-300">Viva la fiesta</div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>



        {/* SECCIÓN CONTACTO Y CONTRATACIONES */}
        <section id="contacto" className="py-16 md:py-24 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-4xl mx-auto bg-stone-950 border border-amber-500/30 rounded-3xl p-8 md:p-12 shadow-2xl animate-fadeIn">
              <div className="text-center space-y-4 mb-10">
                <span className="bg-amber-500/10 text-amber-400 text-xs font-bold px-4 py-1.5 rounded-full border border-amber-500/30 uppercase tracking-widest inline-block animate-float">
                  Contrataciones Directas
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-white">
                  Lleva la Música de Elsa Urbina a tu Evento
                </h2>
                <p className="text-stone-400 text-base max-w-xl mx-auto">
                  Disponible para presentaciones con Mariachi, Orquesta Versátil Los Internacionales, Big Band y formato de Jazz.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-gray-400 pt-8">
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-stone-900/60 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-stone-400 uppercase font-semibold">Correo Electrónico</div>
                      <a href="mailto:elsaurbinamexico@gmail.com" className="text-white hover:text-amber-400 font-bold transition-colors">
                        elsaurbinamexico@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-stone-900/60 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-stone-400 uppercase font-semibold">Teléfono / WhatsApp</div>
                      <a href="tel:+525585809927" className="text-white hover:text-amber-400 font-bold transition-colors">
                        +52 55 8580 9927
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-400border border-gray-400 p-6 rounded-2xl text-center space-y-4 hover:border-amber-500/40 transition-colors">
                  <h3 className="text-lg font-bold text-white font-serif">Contacto Inmediato por WhatsApp</h3>
                  <p className="text-stone-400 text-xs">
                    Comunícate directamente para agendar fechas, consultar disponibilidad de formatos musicales y paquetes.
                  </p>
                  <a
                    href="https://wa.me/525585809927?text=%C2%A1Hola%20Elsa%20Urbina!%20Me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20tus%20presentaciones."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition-all transform hover:scale-105 w-full shadow-lg"
                  >
                    <span>Enviar Mensaje de WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* MODAL DE PRIVACIDAD SIMULADO (Aviso de Privacidad) */}
        <section id="privacidad" className="py-12 bg-stone-950 border-t border-gray-400 text-stone-400 text-xs">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center space-x-2 text-amber-400 font-bold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Aviso de Privacidad Simplificado</span>
            </div>
            <p className="leading-relaxed">
              Elsa Urbina con domicilio y medio de contacto en elsaurbinamexico@gmail.com, utiliza la información proporcionada a través de este portal exclusivamente para atender solicitudes de contratación, información artística y atención al público. Los datos personales recabados se protegen conforme a la legislación aplicable en materia de protección de datos personales.
            </p>
          </div>
        </section>

    </>
  );
}
