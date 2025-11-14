'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#servicos"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Serviços
            </a>
            <a
              href="#planos"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Planos
            </a>
            <a
              href="#galeria"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Galeria
            </a>
            <a
              href="#contato"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Contato
            </a>
            <a
              href="https://wa.me/5511947146196"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors font-semibold"
            >
              Falar no WhatsApp
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#servicos"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Serviços
              </a>
              <a
                href="#planos"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Planos
              </a>
              <a
                href="#galeria"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Galeria
              </a>
              <a
                href="#contato"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Contato
              </a>
              <a
                href="https://wa.me/5511947146196"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors font-semibold text-center"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

