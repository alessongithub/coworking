'use client'

import { motion } from 'framer-motion'
import { Zap, Users, MapPin, Wrench, Network } from 'lucide-react'

const differentiators = [
  {
    icon: Users,
    title: 'Fluxo de +100 Clientes/Dia',
    description: 'Passando pelo local, gerando networking natural e oportunidades de negócio',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Network,
    title: 'Ecossistema Completo',
    description: 'Todos os serviços empresariais que você precisa em um só lugar',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: MapPin,
    title: 'Localização Premium',
    description: 'No centro de Poá, com fácil acesso e estacionamento',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Wrench,
    title: 'Suporte Técnico Imediato',
    description: 'Nós mesmos fazemos a manutenção, sem espera ou terceirização',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'Networking Natural',
    description: 'Conecte-se com outros empreendedores e expanda seus negócios',
    color: 'from-amber-500 to-yellow-500',
  },
]

export default function Differentiators() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Diferenciais Exclusivos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            O que só a gente oferece para você
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

