'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, GripVertical } from 'lucide-react'

const initialImages = [
  {
    src: '/images/sala-1.jpg',
    alt: 'Sala Privativa 1 - Ambiente moderno e climatizado',
  },
  {
    src: '/images/sala-2.png',
    alt: 'Sala Privativa 2 - Espaço profissional e confortável',
  },
  {
    src: '/images/sala-3.jpg',
    alt: 'Sala Privativa 3 - Ambiente corporativo completo',
  },
]

export default function Gallery() {
  const [images, setImages] = useState(initialImages)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  // Funções de Drag and Drop
  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', index.toString())
    // Adiciona uma imagem fantasma personalizada
    const dragImage = e.currentTarget.cloneNode(true) as HTMLElement
    dragImage.style.opacity = '0.5'
    dragImage.style.position = 'absolute'
    dragImage.style.top = '-1000px'
    document.body.appendChild(dragImage)
    e.dataTransfer.setDragImage(dragImage, e.currentTarget.clientWidth / 2, e.currentTarget.clientHeight / 2)
    setTimeout(() => {
      if (document.body.contains(dragImage)) {
        document.body.removeChild(dragImage)
      }
    }, 0)
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setDragOverIndex(index)
  }

  const handleDragLeave = () => {
    setDragOverIndex(null)
  }

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault()
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null)
      setDragOverIndex(null)
      return
    }

    // Reordenar as imagens
    const newImages = [...images]
    const draggedItem = newImages[draggedIndex]
    newImages.splice(draggedIndex, 1)
    newImages.splice(dropIndex, 0, draggedItem)
    
    setImages(newImages)
    
    // Atualizar o índice da imagem selecionada no modal se necessário
    if (selectedImage !== null) {
      if (selectedImage === draggedIndex) {
        setSelectedImage(dropIndex)
      } else if (selectedImage === dropIndex) {
        setSelectedImage(draggedIndex)
      } else if (draggedIndex < selectedImage && dropIndex >= selectedImage) {
        setSelectedImage(selectedImage - 1)
      } else if (draggedIndex > selectedImage && dropIndex <= selectedImage) {
        setSelectedImage(selectedImage + 1)
      }
    }
    
    setDraggedIndex(null)
    setDragOverIndex(null)
  }

  const handleDragEnd = () => {
    setDraggedIndex(null)
    setDragOverIndex(null)
  }

  return (
    <section id="galeria" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Nossas Salas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça os espaços onde seu negócio vai crescer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              draggable
              onDragStart={(e) => handleDragStart(e as React.DragEvent, index)}
              onDragOver={(e) => handleDragOver(e as React.DragEvent, index)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e as React.DragEvent, index)}
              onDragEnd={handleDragEnd}
              className={`relative group cursor-move overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 select-none ${
                draggedIndex === index ? 'opacity-50 scale-95 z-50' : ''
              } ${
                dragOverIndex === index && draggedIndex !== index
                  ? 'scale-105 ring-4 ring-primary-500 ring-offset-2'
                  : ''
              }`}
              onClick={(e) => {
                // Não abrir modal se estiver arrastando
                if (draggedIndex === null) {
                  openModal(index)
                }
              }}
            >
              {/* Indicador de arrastar */}
              <div className="absolute top-2 right-2 z-20 bg-black/50 backdrop-blur-sm text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <GripVertical size={20} />
              </div>
              
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 pointer-events-none"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-lg">
                    {image.alt}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border-4 border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              
              {/* Feedback visual durante drag */}
              {dragOverIndex === index && draggedIndex !== index && (
                <div className="absolute inset-0 bg-primary-500/20 rounded-2xl pointer-events-none z-10" />
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Dica para o usuário */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <GripVertical size={16} />
            Arraste as imagens para reorganizá-las
          </p>
        </motion.div>

        {/* Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight size={24} />
              </button>
              <div className="relative w-full h-[90vh]">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

