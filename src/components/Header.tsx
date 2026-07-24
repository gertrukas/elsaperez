"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, User, Disc, Award, Image as ImageIcon, Newspaper, Mail } from "lucide-react";

export default function Header() {
  // El menú siempre inicia cerrado (isMenuOpen = false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Biografía", href: "/biografia", icon: User },
    { name: "Trayectoria", href: "/trayectoria", icon: Award },
    { name: "Discografía", href: "/discografia", icon: Disc },
    { name: "Galería", href: "/galeria", icon: ImageIcon },
    { name: "Comunicados", href: "/comunicados", icon: Newspaper },
    { name: "Contacto", href: "/contacto", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-stone-900 shadow-lg border-b border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logotipo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
            <div className="w-10 h-10 rounded-full bg-stone-900 text-amber-400 flex items-center justify-center font-bold text-xl shadow-md border border-amber-300 group-hover:scale-105 transition-transform">
              E
            </div>
            <div>
              <span className="text-2xl font-extrabold tracking-wide text-stone-950 font-serif block leading-none">
                Elsa Pérez Urbina
              </span>
              <span className="text-xs font-semibold tracking-widest text-stone-800 uppercase block mt-1">
                Cantante & Conductora
              </span>
            </div>
          </Link>

          {/* Menú para pantallas grandes (Desktop) */}
          <nav className="hidden md:flex space-x-6 font-semibold text-stone-900">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`py-2 px-1 transition-all border-b-2 ${
                    isActive
                      ? "border-stone-950 text-stone-950 font-bold"
                      : "border-transparent hover:text-stone-950 hover:border-stone-800"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Botón de Menú Hamburger (Pantallas Pequeñas / Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              id="hamburger-button"
              type="button"
              onClick={toggleMenu}
              className="p-2.5 rounded-lg text-stone-900 bg-amber-400/80 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-stone-900 transition-all shadow"
              aria-label="Abrir menú de navegación"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Despliegue del Menú Hamburguesa (Mobile Navigation Drawer) */}
      {isMenuOpen && (
        <div className="md:hidden bg-stone-900 text-amber-400 border-b border-amber-500/30 animate-fadeIn">
          <div className="px-4 pt-4 pb-6 space-y-2 font-medium">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-md transition-colors ${
                    isActive
                      ? "bg-amber-500 text-stone-950 font-bold"
                      : "text-stone-200 hover:text-amber-400 hover:bg-stone-800"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-stone-950" : "text-amber-400"}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
