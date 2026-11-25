import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="WhatsApp"
      className="group fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-whatsapp-hover animate-fade-up [animation-delay:1.2s]"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40 [animation-duration:2.5s]" aria-hidden />
      <MessageCircle className="size-6 fill-current" aria-hidden />
    </a>
  );
}
