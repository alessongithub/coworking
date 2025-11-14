'use client'

import { motion } from 'framer-motion'
import Logo from './Logo'
import { MapPin, Mail, Globe, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              Mais que um Coworking: Seu Escritório Com Tudo Incluso no Coração de Poá
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">Av. 9 de Julho, Centro</p>
                  <p className="text-gray-400">Poá/SP - CEP 08550-100</p>
                  <p className="text-gray-400 text-sm">Ao lado dos Correios</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-primary-400 mt-1 flex-shrink-0" size={20} />
                <a
                  href="mailto:contato@evoqueassessoria.com.br"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  contato@evoqueassessoria.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-primary-400 mt-1 flex-shrink-0" size={20} />
                <a
                  href="https://wa.me/5511947146196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  (11) 94714-6196
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="text-primary-400 mt-1 flex-shrink-0" size={20} />
                <a
                  href="https://www.evoqueassessoria.com.br/coworking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  www.evoqueassessoria.com.br/coworking
                </a>
              </li>
            </ul>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#planos" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Hub Co working. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="/politica-privacidade"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="/termos-uso"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

