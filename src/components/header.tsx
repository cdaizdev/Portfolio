import { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-eco-200/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-eco-700 dark:bg-eco-200 flex items-center justify-center text-white dark:text-eco-dark font-black text-xl transition-transform group-hover:scale-105">
              <Leaf size={22} aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-eco-900 dark:text-white">
                EcoTech<span className="text-eco-700 dark:text-eco-200">2026</span>
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400 tracking-wider">SUMMIT</span>
            </div>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-eco-700 dark:hover:text-eco-200 transition-colors">Acerca</a>
            <a href="#speakers" className="text-gray-700 dark:text-gray-300 hover:text-eco-700 dark:hover:text-eco-200 transition-colors">Oradores</a>
            <a href="#agenda" className="text-gray-700 dark:text-gray-300 hover:text-eco-700 dark:hover:text-eco-200 transition-colors">Agenda</a>
            <a href="#tickets" className="text-gray-700 dark:text-gray-300 hover:text-eco-700 dark:hover:text-eco-200 transition-colors">Entradas</a>
            <a href="#contacto" className="text-gray-700 dark:text-gray-300 hover:text-eco-700 dark:hover:text-eco-200 transition-colors">Contacto</a>
          </nav>

          {/* Botón CTA Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#tickets"
              className="bg-eco-200 text-eco-dark font-bold px-6 py-2.5 rounded-full hover:bg-eco-300 transition-all transform hover:-translate-y-0.5 glow-btn"
            >
              Comprar <span className="lg:inline-block md:hidden">Entradas</span>
            </a>
          </div>

          {/* Botón Menú Hamburguesa (Móvil) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-eco-900 dark:hover:text-white focus:outline-none p-2"
              aria-label="Abrir menú de navegación"
            >
              {isMobileMenuOpen
                ? <X size={24} aria-hidden="true" />
                : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-eco-carddark border-b border-eco-900/10 dark:border-eco-200/10 px-4 pt-2 pb-6 space-y-3 transition-all">
          <a
            href="#about"
            onClick={closeMobileMenu}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-eco-700 dark:hover:text-eco-200 font-medium"
          >
            Acerca
          </a>
          <a
            href="#speakers"
            onClick={closeMobileMenu}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-eco-700 dark:hover:text-eco-200 font-medium"
          >
            Oradores
          </a>
          <a
            href="#agenda"
            onClick={closeMobileMenu}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-eco-700 dark:hover:text-eco-200 font-medium"
          >
            Agenda
          </a>
          <a
            href="#tickets"
            onClick={closeMobileMenu}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-eco-700 dark:hover:text-eco-200 font-medium"
          >
            Entradas
          </a>
          <a
            href="#contacto"
            onClick={closeMobileMenu}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-eco-700 dark:hover:text-eco-200 font-medium"
          >
            Contacto
          </a>
          <div className="pt-2">
            <a
              href="#tickets"
              onClick={closeMobileMenu}
              className="block text-center w-full bg-eco-200 text-eco-dark font-bold py-3 rounded-xl glow-btn"
            >
              Comprar Entradas
            </a>
          </div>
        </div>
      )}
    </header>
  );
}