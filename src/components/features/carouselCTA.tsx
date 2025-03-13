'use client'

import { useState, useEffect } from 'react'

interface CarouselSlide {
  question: string
  bgColor: string
  textColor: string
}

interface CarouselCTAProps {
  slides: CarouselSlide[]
  autoplaySpeed?: number
}

export default function CarouselCTA({ slides, autoplaySpeed = 5000 }: CarouselCTAProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length)
    }, autoplaySpeed)

    return () => clearInterval(timer)
  }, [slides.length, autoplaySpeed])

  return (
    <section 
      className={`w-full transition-colors duration-500 ${slides[currentSlide].bgColor}`}
    >
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-500 absolute w-full transform left-0 
                ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                position: index === currentSlide ? 'relative' : 'absolute',
                color: slide.textColor 
              }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {slide.question}
              </h2>
            </div>
          ))}

          {/* Indicadores */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                  }`}
                aria-label={`Ir a la pregunta ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}