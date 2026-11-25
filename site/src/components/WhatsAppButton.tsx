import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp p-3.5 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-whatsapp-hover sm:px-5 animate-fade-up [animation-delay:1.2s]"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40 [animation-duration:2.5s]" aria-hidden />
      <MessageCircle className="size-6 fill-current" aria-hidden />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
