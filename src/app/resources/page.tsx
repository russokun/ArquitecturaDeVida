import SplitContent from "@/components/features/splitContent"
import VideoGallery from "@/components/features/videoGallery"

export const metadata = {
  title: "Recursos | Arq de Vida",
  description: "Recursos gratuitos y premium para mejorar tus habilidades de facilitación",
}

const videos = [
  {
    id: "oyVcd4DhLng",
    title: "¿Qué hace un facilitador?",
    description: "Descubre el rol y la importancia del facilitador"
  },
  {
    id: "NfhHeHGYQCs",
    title: "La Facilitación Creativa",
    description: "Metodologías y herramientas para la facilitación"
  },
  {
    id: "hDWDUy3UbkE",
    title: "El Arte de la Facilitación",
    description: "Técnicas y mejores prácticas en facilitación"
  },
  {
    id: "Qb-ieo0a1Gs",
    title: "Cómo Ser un Buen Facilitador",
    description: "Consejos y estrategias para mejorar tus habilidades"
  }
]

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Recursos para Facilitadores
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Herramientas y guías para potenciar tu práctica de facilitación
        </p>
      </section>

      {/* Recurso 1: Tarjetas de Afirmaciones */}
      <SplitContent
        imagePosition="right"
        imageSrc="/imgs/recursos/img1.jpg"
        imageAlt="Set de Tarjetas de Afirmaciones"
        title={<span className="text-4xl md:text-5xl font-bold text-gray-800">SET DE TARJETAS DE AFIRMACIONES</span>}
        content={
          <div className="space-y-4">
            <p className="text-lg text-gray-900">
              ¿Quieres potenciar tu creatividad y convertirte en un experto en la creación de experiencias memorables? Descarga nuestro set de tarjetas con afirmaciones, una herramienta útil y práctica que te ayudará a estimular tu pensamiento creativo y a diseñar experiencias inolvidables para tus participantes.
            </p>
          </div>
        }
        buttonText="Descargar Gratis"
        buttonClassName="bg-gray-500 hover:bg-gray-600 text-white"
        contentBg="bg-gray-50"
      />

      {/* Recurso 2: Videos de Formación */}
      <div className="flex flex-col lg:flex-row w-</div>full">
        <div className="w-full lg:w-1/2 bg-blue-50 p-8">
          <VideoGallery videos={videos} />
        </div>
        <div className="w-full lg:w-1/2 bg-blue-50 p-12 flex items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800">LA VIDA EN METÁFORAS</h2>
            <p className="text-lg text-blue-900">
              Accede a nuestra biblioteca de videos formativos donde compartimos técnicas, 
              herramientas y mejores prácticas para la facilitación creativa.
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-medium">
              Ver Videos
            </button>
          </div>
        </div>
      </div>

      {/* Recurso 3: Guía de Facilitación */}
      <SplitContent
        imagePosition="right"
        imageSrc="/imgs/recursos/img2.jpg"
        imageAlt="Guía de Facilitación Creativa"
        title={<span className="text-4xl md:text-5xl font-bold text-sky-800">Guía de Facilitación Creativa</span>}
        content={
          <div className="space-y-4">
            <p className="text-lg text-sky-900">
              Aprende los fundamentos y mejores prácticas de la facilitación creativa con esta guía completa paso a paso.
              Perfecta para facilitadores que buscan incorporar elementos creativos y lúdicos en sus sesiones.
            </p>
          </div>
        }
        buttonText="Explorar Guía"
        buttonClassName="bg-sky-600 hover:bg-sky-700 text-white"
        contentBg="bg-sky-50"
      />

      {/* Recurso 4: Biblioteca de Dinámicas */}
      <SplitContent
        imagePosition="left"
        imageSrc="/imgs/recursos/img3.jpg"
        imageAlt="Biblioteca de Dinámicas"
        title={<span className="text-4xl md:text-5xl font-bold text-red-800">Biblioteca de Dinámicas</span>}
        content={
          <div className="space-y-4">
            <p className="text-lg text-red-700">
              Accede a nuestra biblioteca digital con más de 100 dinámicas categorizadas por objetivo, duración y número de participantes.
              Actualizada mensualmente con nuevas actividades y variaciones sugeridas por nuestra comunidad.
            </p>
          </div>
        }
        buttonText="Acceder a la Biblioteca"
        buttonClassName="bg-red-600 hover:bg-red-700 text-white"
        contentBg="bg-red-50"
      />

      {/* Recurso 5: Curso Online */}
      <SplitContent
        imagePosition="right"
        imageSrc="/imgs/recursos/img4.jpg"
        imageAlt="Curso Online de Facilitación"
        title={<span className="text-4xl md:text-5xl font-bold text-yellow-800">Curso Online de Facilitación</span>}
        content={
          <div className="space-y-4">
            <p className="text-lg text-yellow-900">
              Formación completa en facilitación creativa con módulos prácticos, ejercicios y feedback personalizado.
              Aprende a tu ritmo con acceso ilimitado a todos los materiales y únete a nuestra comunidad de práctica.
            </p>
          </div>
        }
        buttonText="Unirse a Lista de Espera"
        buttonClassName="bg-yellow-600 hover:bg-yellow-700 text-white"
        contentBg="bg-yellow-50"
      />
    </div>
  )
}