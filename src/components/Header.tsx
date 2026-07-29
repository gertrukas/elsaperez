"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Music, Disc, Award, Newspaper, Mail } from "lucide-react";

export default function Header() {
  // El hamburger se mantiene cerrado en cualquier resolución inicialmente (isMenuOpen = false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-stone-900 shadow-lg border-b border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logotipo */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0 min-w-0" onClick={closeMenu}>
            <div className="w-10 h-10 shrink-0 rounded-full bg-stone-900 text-amber-400 flex items-center justify-center font-bold text-xl shadow-md border border-amber-300 group-hover:scale-105 transition-transform">
              E
            </div>
            <div className="min-w-0">
              <span className="text-lg sm:text-2xl font-extrabold tracking-wide text-stone-950 font-serif block leading-none whitespace-nowrap">
                Elsa Urbina
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-stone-800 uppercase block mt-1 whitespace-nowrap">
                Cantante & Conductora
              </span>
            </div>
          </Link>

          <div className="flex items-center flex-shrink-0 ml-auto mr-2">
            <a href="https://www.facebook.com/share/19vu3wiodG/?mibextid=wwXIfr"><Image src="/images/social/facebook.png" width={30} height={30} alt="facebook"/></a>
            <a href="https://www.instagram.com/elsa_urbina?utm_source=qr"><Image src="/images/social/instagram.png" width={30} height={30} alt="facebook"/></a>
            <a href="https://www.tiktok.com/@elsaurbina31?_r=1&_t=ZS-98QGG2qVDmu"><Image src="/images/social/tiktok.png" width={30} height={30} alt="facebook"/></a>
            <a href="https://youtube.com/@elsaurbinaoficial?si=GouvXso4ksrr6M3U"><Image src="/images/social/youtube.png" width={30} height={30} alt="facebook"/></a>
          </div>
          {/* Botón de Menú Hamburger — siempre visible en cualquier resolución, solo se expande al dar click */}
          <div className="flex items-center flex-shrink-0">
            <button
              id="hamburger-button"
              type="button"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              className="p-2.5 rounded-lg text-stone-900 bg-amber-400/80 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-stone-900 transition-all shadow"
              aria-label="Abrir menú de navegación"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Despliegue del Menú Hamburguesa — mismo comportamiento en cualquier resolución */}
      {isMenuOpen && (
        <div className="bg-stone-900 text-amber-400 border-b border-amber-500/30 animate-fadeIn">
          <div className="px-4 pt-4 pb-6 space-y-3 font-medium">
            <Link
              href="/biografia"
              onClick={closeMenu}
              className="flex items-center space-x-3 px-3 py-2.5 rounded-md text-stone-200 hover:text-amber-400 hover:bg-stone-800 transition-colors"
            >
              <Music className="w-5 h-5 text-amber-400" />
              <span>Biografía</span>
            </Link>
            <Link
              href="/trayectoria"
              onClick={closeMenu}
              className="flex items-center space-x-3 px-3 py-2.5 rounded-md text-stone-200 hover:text-amber-400 hover:bg-stone-800 transition-colors"
            >
              <Award className="w-5 h-5 text-amber-400" />
              <span>Trayectoria & Reconocimientos</span>
            </Link>
            <Link
              href="/discografia"
              onClick={closeMenu}
              className="flex items-center space-x-3 px-3 py-2.5 rounded-md text-stone-200 hover:text-amber-400 hover:bg-stone-800 transition-colors"
            >
              <Disc className="w-5 h-5 text-amber-400" />
              <span>Discografía & Sencillos</span>
            </Link>
            <Link
              href="/galeria"
              onClick={closeMenu}
              className="flex items-center space-x-3 px-3 py-2.5 rounded-md text-stone-200 hover:text-amber-400 hover:bg-stone-800 transition-colors"
            >
              <Music className="w-5 h-5 text-amber-400" />
              <span>Galería de Fotos</span>
            </Link>
            <Link
              href="/comunicados"
              onClick={closeMenu}
              className="flex items-center space-x-3 px-3 py-2.5 rounded-md text-stone-200 hover:text-amber-400 hover:bg-stone-800 transition-colors"
            >
              <Newspaper className="w-5 h-5 text-amber-400" />
              <span>Comunicados & Prensa</span>
            </Link>
            <Link
              href="/contacto"
              onClick={closeMenu}
              className="flex items-center space-x-3 px-3 py-2.5 rounded-md text-stone-200 hover:text-amber-400 hover:bg-stone-800 transition-colors"
            >
              <Mail className="w-5 h-5 text-amber-400" />
              <span>Contacto & Contrataciones</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
