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
                  <span>Cantante, Conductora & Directora Musical</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight text-gray-400 leading-tight">
                  La Voz y Pasión de la <span className="text-white px-2 rounded-lg">Música Mexicana</span>
                </h1>
                
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                  Elsa Urbina es una destacada cantante mexicana especializada en música popular, mariachi y bolero. Con una trayectoria virtuosa de entrega artística, su voz ha cautivado a audiencias en México, Estados Unidos, Colombia y la República Dominicana.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                  <a
                    href="#contacto"
                    className="bg-gray-400hover:bg-gray-400 text-amber-400 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-1"
                  >
                    Contrataciones
                  </a>
                  <a
                    href="#biografia"
                    className="bg-white/70 hover:bg-white text-gray-400 border border-stone-900/20 hover:border-stone-900/40 font-semibold px-7 py-3.5 rounded-xl transition-all transform hover:-translate-y-1"
                  >
                    Conocer Semblanza
                  </a>
                </div>

                {/* Destacados rápidos con animaciones hover en tarjetas */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-900/20 text-center">
                  <div className="p-2 rounded-xl bg-stone-950/90 hover:bg-gray-400transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-2xl font-bold text-amber-400 font-serif">+20 Años</div>
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
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* SECCIÓN BIOGRAFÍA (SEMBLANZA) */}
        <section id="biografia" className="py-16 md:py-24 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-gray-400mb-4">
                Biografía y Semblanza
              </h2>
              <div className="w-20 h-1 bg-gray-400mx-auto rounded-full mb-4 animate-pulseGlow" />
              <p className="text-gray-400 text-base md:text-lg">
                Originaria de la Ciudad de México. Una vida consagrada al canto, la preservación de las bellas artes y la difusión de la música tradicional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              
              {/* Imagen Biografía */}
              <div className="md:col-span-5 animate-fadeIn">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-stone-900/20 group hover:border-amber-600/60 transition-all duration-500">
                  <Image
                    src="/images/IMG_1695.JPG"
                    alt="Elsa Urbina Biografía"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Texto de la Semblanza con interactividad al pasar el cursor */}
              <div className="md:col-span-7 space-y-5 text-stone-300 leading-relaxed animate-fadeInSlow">
                <p className="p-4 rounded-xl bg-stone-950/95 border border-gray-400/60 shadow-md hover:border-amber-500/50 transition-colors">
                  Inició sus estudios profesionales a los 17 años en la <strong className="text-amber-300">Escuela de Iniciación Artística de Bellas Artes</strong>, especializándose en canto y flauta traversa. Formó parte de la Compañía Mexicana de Ópera y del Coro Monumental de Bellas Artes. Continuó su formación en la Escuela de Música G. Martell y el Sindicato Único de Trabajadores de la Música (SUTM), perfeccionando su técnica vocal con maestros renombrados como Fernando Lima, Adriana Moreno y Orlando Muñiz.
                </p>
                <p className="p-4 rounded-xl bg-stone-950/95 border border-gray-400/60 shadow-md hover:border-amber-500/50 transition-colors">
                  En 1998 fue coronada <strong className="text-amber-300">Reina de los Músicos de la Ciudad de México</strong>, un hito fundamental en su carrera. Ha participado en producciones de Televisa como <em>“Bailando por un sueño”</em>, <em>“Cantando por un sueño”</em> y diversas telenovelas, además de ser corista estelar junto a figuras de la talla de Thalía, Alejandra Guzmán, Samo y Gilberto Gless.
                </p>
                <p className="p-4 rounded-xl bg-stone-950/95 border border-gray-400/60 shadow-md hover:border-amber-500/50 transition-colors">
                  Desde 2003 es la voz femenina principal de la prestigiada orquesta <strong className="text-amber-300">Los Internacionales</strong>, asumiendo su Administración y Dirección General desde septiembre de 2021. Su versatilidad le permite destacar al frente de agrupaciones con Mariachi, Big Band, ensambles de Jazz y formato de Orquesta Versátil.
                </p>
                <p className="p-4 rounded-xl bg-stone-950/95 border border-gray-400/60 shadow-md hover:border-amber-500/50 transition-colors">
                  En su faceta como conductora y comunicadora, ha dirigido el programa <em>“Músicos en Contacto”</em> (SUTM) y fue conductora y productora del programa <em>“VIVA LA FIESTA”</em>. Durante tres años consecutivos ha sido invitada a cantar en las Mañanitas a la Virgen de Guadalupe en la Basílica de Guadalupe.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SECCIÓN DISCOGRAFÍA Y SENCILLOS con animación Hover Lift en Tarjetas */}
        <section id="discografia" className="py-16 md:py-24 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-gray-400mb-4">
                Sencillos y Producciones Discográficas
              </h2>
              <div className="w-20 h-1 bg-gray-400mx-auto rounded-full mb-4 animate-pulseGlow" />
              <p className="text-gray-400 text-base md:text-lg">
                Explora las producciones y canciones más destacadas interpretadas por Elsa Urbina.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sencillos.map((sencillo, index) => (
                <div
                  key={index}
                  className="bg-stone-950 border border-gray-400 hover:border-amber-500/60 p-6 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between group"
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
                  <div className="pt-4 border-t border-gray-400flex items-center text-amber-400 font-semibold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>Disponible en Plataformas Digitales</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECCIÓN TRAYECTORIA Y RECONOCIMIENTOS con micro-animaciones */}
        <section id="trayectoria" className="py-16 md:py-24 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-gray-400mb-4">
                Reconocimientos y Distinciones
              </h2>
              <div className="w-20 h-1 bg-gray-400mx-auto rounded-full mb-4 animate-pulseGlow" />
              <p className="text-gray-400 text-base md:text-lg">
                Premios y reconocimientos otorgados a su excelencia en la interpretación vocal y aportación a la cultura.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-gray-400border border-gray-400 hover:border-amber-500/50 p-6 rounded-2xl text-center space-y-3 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
                <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                  <Award className="w-7 h-7 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-white font-serif group-hover:text-amber-400 transition-colors">Doctorado Honoris Causa</h3>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Otorgado en 2021 por el Colegio Internacional de Profesionistas por sus aportes significativos a las Bellas Artes.
                </p>
              </div>

              <div className="bg-gray-400border border-gray-400 hover:border-amber-500/50 p-6 rounded-2xl text-center space-y-3 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
                <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                  <Mic className="w-7 h-7 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-white font-serif group-hover:text-amber-400 transition-colors">Micrófono de Oro</h3>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Galardón de la Asociación Nacional de Locutores de México por brillante trayectoria como cantante y conductora.
                </p>
              </div>

              <div className="bg-gray-400border border-gray-400 hover:border-amber-500/50 p-6 rounded-2xl text-center space-y-3 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
                <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                  <Heart className="w-7 h-7 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-white font-serif group-hover:text-amber-400 transition-colors">Premios Yohualli</h3>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Reconocimiento en Puebla por su destacada carrera como cantante y ejemplo de dedicación artística.
                </p>
              </div>

              <div className="bg-gray-400border border-gray-400 hover:border-amber-500/50 p-6 rounded-2xl text-center space-y-3 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
                <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                  <Radio className="w-7 h-7 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-white font-serif group-hover:text-amber-400 transition-colors">Latin Grammy Member</h3>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Miembro de la Academia del Latin Grammy como intérprete femenina del álbum triple "Tour" de Los Internacionales.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SECCIÓN GALERÍA DE FOTOS con Zoom Smooth y Overlay Interactivo */}
        <section id="galeria" className="py-16 md:py-24 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-gray-400mb-4">
                Galería Fotográfica
              </h2>
              <div className="w-20 h-1 bg-gray-400mx-auto rounded-full mb-4 animate-pulseGlow" />
              <p className="text-gray-400 text-base md:text-lg">
                Momentos especiales en conciertos, escenarios y sesiones fotográficas de Elsa Urbina.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galeriaFotos.map((foto, index) => (
                <div
                  key={index}
                  className="relative group aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-gray-400 bg-stone-950 cursor-pointer"
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
                      <p className="text-amber-400 text-xs font-semibold">Elsa Urbina</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECCIÓN COMUNICADOS / NOTICIAS con animaciones */}
        <section id="comunicados" className="py-16 md:py-24 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 animate-fadeIn">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-gray-400mb-2">
                  Comunicados & Noticias
                </h2>
                <p className="text-gray-400 text-base">Últimas novedades, presentaciones e información para prensa.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-gray-400border border-gray-400 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg">
                <div className="text-amber-400 text-xs font-semibold mb-2">ABRIL 2026</div>
                <h3 className="text-xl font-bold font-serif text-white mb-3">Lanzamiento de "Segundo Aire"</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Elsa Urbina estrena su tema "Segundo aire", debutando como autora y compositora en colaboración con Luis Mogollón y Oscar Ignacio León.
                </p>
              </div>

              <div className="bg-gray-400border border-gray-400 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg">
                <div className="text-amber-400 text-xs font-semibold mb-2">DICIEMBRE 2025</div>
                <h3 className="text-xl font-bold font-serif text-white mb-3">Mañanitas a la Virgen de Guadalupe</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Por tercer año consecutivo, Elsa tuvo el honor de participar en la tradicional serenata a la Virgen de Guadalupe en la Basílica.
                </p>
              </div>

              <div className="bg-gray-400border border-gray-400 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg">
                <div className="text-amber-400 text-xs font-semibold mb-2">INTERNACIONAL</div>
                <h3 className="text-xl font-bold font-serif text-white mb-3">Difusión en Emisoras de Colombia</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Sus temas musicales sobrepasan fronteras con una extraordinaria recepción en más de 350 emisoras de radio en Colombia.
                </p>
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
