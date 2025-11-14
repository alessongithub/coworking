'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  Users,
  Wifi,
  Car,
  Coffee,
  Monitor,
  Phone,
  FileText,
  Printer,
  Sparkles,
} from 'lucide-react'

const services = [
  {
    category: 'ESPAÇO FÍSICO',
    icon: Building2,
    items: [
      'Salas Privativas de 13m² (6 unidades)',
      'Mesanino Corporativo (1 unidade)',
      'Mobília Básica Inclusa (mesa, cadeira, armário)',
      'Ar-condicionado',
      'Limpeza Diária',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'SUPORTE ADMINISTRATIVO',
    icon: Users,
    items: [
      'Recepcionista em Tempo Integral',
      'Atendimento Telefônico Personalizado',
      'Sistema de Senhas para Clientes',
      'Endereço Comercial de Prestígio (Av. 9 de Julho)',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'SERVIÇOS TECNOLÓGICOS',
    icon: Wifi,
    items: [
      'Internet Fibra 500MB Dedicada',
      'Manutenção de Equipamentos (PC, Notebook, Impressora)',
      'Criação de Sites (Incluso no Pacote)',
      'Rede Wi-Fi Segura por Senha',
      'Impressão em Qualidade Profissional',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'SERVIÇOS ESPECIALIZADOS',
    icon: Car,
    items: [
      'Despachante (Documentação Veicular)',
      'Assessoria (Limpeza de Nome, Score, MCMV)',
      'Marketing Digital (Gestão de Redes Sociais)',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'COMODIDADES',
    icon: Coffee,
    items: [
      'Café Premium Gratuito',
      'Água e Energia Inclusas',
      'Cozinha Compacta',
      'Banheiro Social',
      'Ambiente Climatizado',
    ],
    color: 'from-amber-500 to-yellow-500',
  },
]

export default function WhatWeOffer() {
  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">O Que Oferecemos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para seu negócio funcionar perfeitamente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {service.category}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                      <Sparkles size={16} className="text-primary-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

