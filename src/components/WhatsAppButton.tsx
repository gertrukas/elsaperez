"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "525585809927"; // +52 5585809927 extraído de EJE - ELSA URBINA.pdf
  const defaultMessage = encodeURIComponent("¡Hola Elsa Urbina! Me gustaría solicitar información sobre tus presentaciones y contrataciones.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-current group-hover:animate-bounce" />
      <span className="hidden sm:inline font-semibold text-sm tracking-wide">
        WhatsApp
      </span>
    </a>
  );
}
