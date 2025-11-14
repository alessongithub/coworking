'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'SALA STANDARD',
    price: 'R$ 1.800',
    period: '/mês',
    description: 'Ideal para profissionais autônomos',
    features: [
      'Todos os serviços inclusos',
      'Site Profissional (desenvolvido por nós)',
      'Manutenção Ilimitada de Equipamentos',
      'Direito a 100 impressões/mês',
      'Acesso ao Sistema de Senhas',
      'Internet Fibra 500MB',
      'Recepcionista em Tempo Integral',
      'Limpeza Diária',
    ],
    popular: false,
  },
  {
    name: 'MESANINO EXECUTIVO',
    price: 'R$ 2.000',
    period: '/mês',
    description: 'Perfeito para pequenas empresas',
    features: [
      'Maior privacidade e conforto',
      'Todos os serviços inclusos',
      'Site Profissional (desenvolvido por nós)',
      'Manutenção Ilimitada de Equipamentos',
      'Direito a 100 impressões/mês',
      'Acesso ao Sistema de Senhas',
      'Internet Fibra 500MB',
      'Recepcionista em Tempo Integral',
      'Limpeza Diária',
    ],
    popular: true,
  },
]

export default function Plans() {
  return (
    <section id="planos" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Planos e Investimentos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para seu negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-white rounded-2xl p-8 shadow-xl border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'border-primary-500 shadow-2xl'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5511947146196"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white hover:shadow-lg'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Quero Este Plano
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ✅ Todos os Planos Incluem:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-2">
                <Check className="text-primary-600" size={20} />
                <span>Site Profissional (desenvolvido por nós)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary-600" size={20} />
                <span>Manutenção Ilimitada de Equipamentos</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary-600" size={20} />
                <span>Direito a 100 impressões/mês</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary-600" size={20} />
                <span>Acesso ao Sistema de Senhas</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

