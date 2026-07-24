import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-amber-500/20 pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logotipo en el Footer */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="w-14 h-14 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-2xl mb-3 shadow-lg font-serif">
            E
          </div>
          <h2 className="text-3xl font-extrabold text-amber-400 font-serif tracking-wide text-center">
            Elsa Pérez Urbina
          </h2>
          <p className="text-stone-400 text-sm mt-1 text-center max-w-md">
            Embajadora de la Música Popular Mexicana, Cantante Versátil y Conductora de Televisión.
          </p>
        </div>

        {/* Separador Pleca del Footer */}
        <div className="border-t border-stone-800 my-6" />

        {/* Pleca Inferior con Derechos centrados y Aviso de Privacidad */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-stone-400 text-center">
          <div>
            &copy; 2026 Elsa Pérez Urbina. Todos los derechos reservados.
          </div>
          <span className="hidden sm:inline text-stone-600">•</span>
          <Link
            href="/contacto#privacidad"
            className="hover:text-amber-400 transition-colors underline decoration-stone-600 underline-offset-4"
          >
            Aviso de Privacidad
          </Link>
        </div>

      </div>
    </footer>
  );
}
