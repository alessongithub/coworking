'use client'

import { motion } from 'framer-motion'
import { Sparkles, Clock, Gift } from 'lucide-react'

export default function SpecialOffer() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6"
          >
            <Gift size={20} />
            <span className="font-semibold">CONDIÇÃO ESPECIAL DE LANÇAMENTO</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            PRIMEIRAS 4 SALAS COM
            <br />
            <span className="text-yellow-300">30% OFF NO 1º MÊS!</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
              <Clock size={20} />
              <span className="font-semibold">Vagas Limitadas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
              <Sparkles size={20} />
              <span className="font-semibold">Oferta por Tempo Limitado</span>
            </div>
          </div>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5511947146196"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300"
          >
            👆 Clique no WhatsApp e Garanta Sua Sala
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

