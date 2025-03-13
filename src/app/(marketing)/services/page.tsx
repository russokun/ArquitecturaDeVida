import Image from "next/image"
import ContentSection from "@/components/features/contentSection"
import SplitContent from "@/components/features/splitContent"
export const metadata = {
  title: "Servicios de Facilitación | Arq de Vida",
  description: "Descubre nuestros servicios de mentoría y facilitación creativa",
}

export default function ServicesPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Servicios de Facilitación Creativa
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transforma tu manera de facilitar y crear experiencias memorables
        </p>
      </section>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Mentoría Individual */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Mentoría Individual
          </h3>
          <p className="text-gray-600 mb-6">
            Sesiones personalizadas para desarrollar tus habilidades como facilitador
            y encontrar tu estilo único.
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              4 sesiones mensuales
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              Plan personalizado
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              Recursos exclusivos
            </li>
          </ul>
        </div>

        {/* Talleres Grupales */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Talleres Grupales
          </h3>
          <p className="text-gray-600 mb-6">
            Experiencias colaborativas para aprender y compartir con otros facilitadores
            en un ambiente creativo.
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              Grupos reducidos
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              Material didáctico
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              Certificado de participación
            </li>
          </ul>
        </div>
      </div>

      {/* Metodología Section */}
      <ContentSection
        bgColor="bg-blue-50"
        textColor="text-gray-800"
        description="Nuestra metodología se basa en la experiencia práctica y el aprendizaje activo. Trabajamos juntos para desarrollar tus habilidades de facilitación de manera creativa y efectiva."
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
      {/* Mentoría uno a uno */}
            <SplitContent
              imagePosition="left"
              imageSrc="/imgs/inicio/IMG_2463.jpg"
              imageAlt="Espacio de trabajo creativo"
              title="MENTORIA UNO A UNO"
              titleClassName="text-black"
              contentBg="bg-gray-200"
              content={
                <>
                  <p className="text-lg text-gray-700">
                    ¿Estás buscando llevar tus habilidades de facilitación creativa al siguiente nivel? Únete a mi programa de
                    mentoría uno a uno y aprende cómo crear experiencias creativas y memorables para tus participantes
                    utilizando la lúdica y la gamificación.
                  </p>
      
                  <p className="text-lg text-gray-700">
                    En este programa, trabajaré contigo de forma personalizada para ayudarte a alcanzar tus objetivos y
                    mejorar tus habilidades de facilitación. Aprenderás cómo utilizar técnicas innovadoras para diseñar
                    talleres y sesiones que involucren y entusiasmen a tus participantes, permitiéndoles explorar su
                    creatividad de una manera única.
                  </p>
      
                  <p className="text-lg text-gray-700">
                    No importa si eres un facilitador experimentado o si estás comenzando tu carrera, mi programa de mentoría
                    uno a uno te ayudará a alcanzar tus objetivos y mejorar tus habilidades de facilitación creativa.
                  </p>
                </>
              }
              buttonText="SABER MÁS"
              buttonClassName="bg-gray-600 hover:bg-red-700"
            />
    </div>
  )
}