'use client'

import TestimonialCard from "./testimonialCard"
import Button from "../common/button"

const previewTestimonials = [
  {
    name: "Blanca Hernández",
    profession: "Psicóloga y Especialista en Herramientas de Facilitación",
    country: "México",
    countryCode: "mx",
    videoUrl: "/videos/testimonios/Blanca Hernandez.mp4",
  },
  {
    name: "Nadiuska Del Castillo",
    profession: "Coach  y mentora de liderazgo",
    country: "Panamá",
    countryCode: "pa",
    videoUrl: "/videos/testimonios/Nadiuska Del Castillo.mp4",
  },
  {
    name: "Nina Pino",
    profession: "Coach, Facilitadora, y Especialista en Facilitación",
    country: "Venezuela",
    countryCode: "ve",
    videoUrl: "/videos/testimonios/Nina Pino.mp4",
  },
  {
    name: "Rosa Jimenez",
    profession: "Coach de bienestar y conferencista JMT",
    country: "Panamá",
    countryCode: "pa",
    videoUrl: "/videos/testimonios/Rosa Jimenez.mp4",
  },
]

export default function TestimonialPreview() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Testimonios
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre las experiencias transformadoras de quienes ya han trabajado con nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {previewTestimonials.map((testimonio, index) => (
            <div key={index} className="flex">
              <TestimonialCard {...testimonio} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            href="/testimonios" 
            variant="gradient"
            size="lg"
            className="shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Ver Más Testimonios
          </Button>
        </div>
      </div>
    </section>
  )
}