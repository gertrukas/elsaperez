"use client";

import { Mail, Phone, ShieldCheck } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="flex-grow py-16 md:py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto bg-stone-950 border border-amber-500/30 rounded-3xl p-8 md:p-12 shadow-2xl animate-fadeIn">
            <div className="text-center space-y-4 mb-10">
              <span className="bg-amber-500/10 text-amber-400 text-xs font-bold px-4 py-1.5 rounded-full border border-amber-500/30 uppercase tracking-widest inline-block animate-float">
                Contrataciones Directas
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-white">
                Contacto & Contrataciones
              </h1>
              <p className="text-stone-400 text-base max-w-xl mx-auto">
                Lleva la voz y presencia de Elsa Urbina a tu evento con Mariachi, Orquesta Los Internacionales, Big Band o Trío de Jazz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-stone-800 pt-8">
              
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

              <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl text-center space-y-4 hover:border-amber-500/40 transition-colors">
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

          {/* Aviso de Privacidad */}
          <div id="privacidad" className="max-w-4xl mx-auto mt-12 bg-stone-950 border border-stone-800 rounded-2xl p-6 text-stone-400 text-xs">
            <div className="flex items-center space-x-2 text-amber-400 font-bold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Aviso de Privacidad Simplificado</span>
            </div>
            <p className="leading-relaxed">
              Elsa Urbina con domicilio y medio de contacto en elsaurbinamexico@gmail.com, utiliza la información proporcionada a través de este portal exclusivamente para atender solicitudes de contratación, información artística y atención al público. Los datos personales recabados se protegen conforme a la legislación aplicable en materia de protección de datos personales.
            </p>
          </div>

        </div>
    </div>
  );
}
