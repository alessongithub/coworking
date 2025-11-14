'use client'

import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Aguarda o componente montar no cliente
    const timer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined') {
          const cookieConsent = localStorage.getItem('cookieConsent')
          // Se não houver consentimento, mostra o banner
          if (!cookieConsent) {
            setShowBanner(true)
          }
        } else {
          // Se window não estiver disponível, mostra mesmo assim
          setShowBanner(true)
        }
      } catch (error) {
        // Em caso de erro, mostra o banner
        setShowBanner(true)
      }
    }, 1500) // Delay de 1.5 segundos para garantir que está no cliente
    
    return () => clearTimeout(timer)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setShowBanner(false)
  }

  // Sempre renderiza, mas só mostra se showBanner for true
  return (
    <AnimatePresence mode="wait">
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-6 right-6 md:right-auto md:left-6 md:w-96 z-[60] bg-white rounded-lg shadow-2xl border-2 border-primary-200 p-6 max-h-[90vh] overflow-y-auto"
        >
          <div className="flex items-start gap-4">
            <div className="bg-primary-100 p-3 rounded-lg">
              <Cookie className="text-primary-600" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 mb-2">Cookies e Privacidade</h3>
              <p className="text-sm text-gray-600 mb-4">
                Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{' '}
                <a
                  href="/politica-privacidade"
                  target="_blank"
                  className="text-primary-600 hover:underline font-semibold"
                >
                  Política de Privacidade
                </a>{' '}
                e nossos{' '}
                <a
                  href="/termos-uso"
                  target="_blank"
                  className="text-primary-600 hover:underline font-semibold"
                >
                  Termos de Uso
                </a>
                .
              </p>
              <div className="flex gap-3">
                <button
                  onClick={acceptCookies}
                  className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-semibold"
                >
                  Aceitar
                </button>
                <button
                  onClick={rejectCookies}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm font-semibold"
                >
                  Recusar
                </button>
              </div>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

