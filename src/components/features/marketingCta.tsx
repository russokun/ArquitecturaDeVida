'use client'

export default function MarketingCta() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        ¿Listo para comenzar tu viaje creativo?
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Únete a nuestra comunidad y descubre cómo la facilitación creativa puede transformar tu trabajo
      </p>
      <button 
        onClick={() => window.location.href = '#contact'}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
      >
        Agenda una consulta gratuita
      </button>
    </section>
  )
}