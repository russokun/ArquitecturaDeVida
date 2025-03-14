import Image from "next/image"
import SplitContent from "@/components/features/splitContent"
import ContentSection from "@/components/features/contentSection"
import VideoGallery from "@/components/features/videoGallery"

export const metadata = {
  title: "Recursos | Arq de Vida",
  description: "Recursos gratuitos y premium para mejorar tus habilidades de facilitación",
}

const videos = [
  {
    id: "xNRJwmlRBNU",
    title: "Introducción a la Facilitación",
    description: "Aprende los fundamentos de la facilitación creativa"
  },
  {
    id: "OMLrKrcn9AA",
    title: "Dinámicas Grupales",
    description: "Técnicas efectivas para dinamizar grupos"
  },
  {
    id: "ohr6O78jGzs",
    title: "Herramientas de Coaching",
    description: "Recursos esenciales para coaches"
  },
  {
    id: "yG4xvadf8ZE",
    title: "Facilitación Virtual",
    description: "Claves para facilitar en entornos virtuales"
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

      {/* Recurso 1: Rueda del Facilitador */}
      <SplitContent
        imagePosition="right"
        imageSrc="/imgs/inicio/IMG_2372.jpg"
        imageAlt="Rueda del Facilitador Creativo"
        title="SET DE TARJETAS DE AFIRMACIONES"
        content={
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
            ¿Quieres potenciar tu creatividad y convertirte en un experto en la creación de experiencias memorables? Descarga nuestro set de tarjetas con afirmaciones, una herramienta útil y práctica que te ayudará a estimular tu pensamiento creativo y a diseñar experiencias inolvidables para tus participantes. Con estas tarjetas, podrás explorar diferentes enfoques y perspectivas, y crear experiencias que dejen una huella imborrable en la mente de tus participantes. ¡Descarga ahora nuestro set de tarjetas con afirmaciones y dale un impulso a tu creatividad!
            </p>
          </div>
        }
        buttonText="Descargar Gratis"
        buttonClassName="bg-green-600 hover:bg-green-700"
        contentBg="bg-white"
      />

      {/* Recurso 2: Videos de Formación */}
      <SplitContent
        imagePosition="left"
        imageSrc="/imgs/inicio/IMG_2463.jpg"
        imageAlt="Videos de Formación"
        title="LA VIDA EN METÁFORAS"
        content={
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Accede a nuestra biblioteca de videos formativos donde compartimos técnicas, herramientas y mejores prácticas para la facilitación creativa.
            </p>
            <VideoGallery videos={videos} />
          </div>
        }
        contentBg="bg-gray-50"
      />

      {/* Recurso 3: Guía de Facilitación */}
      <SplitContent
        imagePosition="right"
        imageSrc="/imgs/inicio/IMG_2481.jpg"
        imageAlt="Guía de Facilitación Creativa"
        title="Guía de Facilitación Creativa"
        content={
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Aprende los fundamentos y mejores prácticas de la facilitación creativa con esta guía completa paso a paso.
            </p>
            <p className="text-lg text-gray-700">
              Perfecta para facilitadores que buscan incorporar elementos creativos y lúdicos en sus sesiones.
            </p>
          </div>
        }
        buttonText="Explorar Guía"
        buttonClassName="bg-blue-600 hover:bg-blue-700"
        contentBg="bg-white"
      />

      {/* Recurso 4: Biblioteca de Dinámicas */}
      <SplitContent
        imagePosition="left"
        imageSrc="/imgs/inicio/IMG_2336.jpg"
        imageAlt="Biblioteca de Dinámicas"
        title="Biblioteca de Dinámicas"
        content={
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Accede a nuestra biblioteca digital con más de 100 dinámicas categorizadas por objetivo, duración y número de participantes.
            </p>
            <p className="text-lg text-gray-700">
              Actualizada mensualmente con nuevas actividades y variaciones sugeridas por nuestra comunidad.
            </p>
          </div>
        }
        buttonText="Acceder a la Biblioteca"
        buttonClassName="bg-pink-600 hover:bg-pink-700"
        contentBg="bg-gray-50"
      />

      {/* Recurso 5: Curso Online */}
      <SplitContent
        imagePosition="right"
        imageSrc="/imgs/inicio/11062b_1cbb4f5277c648dfb1eae1ec376a0003_mv2_d_6984_4480_s_4_2.jpg"
        imageAlt="Curso Online de Facilitación"
        title="Curso Online de Facilitación"
        content={
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Formación completa en facilitación creativa con módulos prácticos, ejercicios y feedback personalizado.
            </p>
            <p className="text-lg text-gray-700">
              Aprende a tu ritmo con acceso ilimitado a todos los materiales y únete a nuestra comunidad de práctica.
            </p>
          </div>
        }
        buttonText="Unirse a Lista de Espera"
        buttonClassName="bg-yellow-600 hover:bg-yellow-700"
        contentBg="bg-white"
      />

      {/* Newsletter Section */}
      <ContentSection
        bgColor="bg-blue-50"
        textColor="text-gray-800"
        description="¡Suscríbete a nuestro newsletter para recibir recursos gratuitos, consejos y actualizaciones sobre nuevos materiales!"
        buttonText="Suscribirme"
        buttonUrl="#"
        buttonGradient={true}
        decorativeElements={true}
        decorativeShapes={{
          circles: true,
          rectangles: false,
          customShapes: false,
        }}
        decorativeColors={{
          primary: "bg-blue-200",
          secondary: "bg-yellow-200",
          tertiary: "bg-pink-200",
        }}
      />
    </div>
  )
}