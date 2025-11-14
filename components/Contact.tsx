'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contato e Localização</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Venha nos visitar ou entre em contato
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-xl">
                <MapPin className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Endereço</h3>
                <p className="text-gray-600">
                  Av. 9 de Julho - Centro, Poá/SP
                  <br />
                  <span className="text-sm text-gray-500">
                    Fácil Estacionamento - Ponto de Ônibus na Porta
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-xl">
                <Phone className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Telefone/WhatsApp</h3>
                <a
                  href="https://wa.me/5511947146196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  (11) 94714-6196
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-xl">
                <Mail className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">E-mail</h3>
                <a
                  href="mailto:coworking@evoqueassessoria.com.br"
                  className="text-primary-600 hover:text-primary-700"
                >
                  coworking@evoqueassessoria.com.br
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-xl">
                <Clock className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Horário de Funcionamento</h3>
                <p className="text-gray-600">
                  Segunda a Sexta: 8h às 18h
                  <br />
                  Sábados: 8h às 12h
                </p>
              </div>
            </div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Envie uma Mensagem
            </h3>
            <form
              action={`mailto:coworking@evoqueassessoria.com.br`}
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-accent-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

