import Image from "next/image"
import CarouselCTA from "@/components/features/carouselCTA"
import SplitContent from "@/components/features/splitContent"
import Button from "@/components/common/button"
import AnimatedText from "@/components/common/animatedText"

export const metadata = {
  title: "Servicios | Arq de Vida",
  description: "Descubre nuestros servicios de facilitación y mentoría creativa",
}

const carouselSlides = [
  {
    question: "¿Quieres transformar la manera en que facilitas tus sesiones?",
    bgColor: "bg-blue-600",
    textColor: "text-white"
  },
  {
    question: "¿Buscas herramientas innovadoras para conectar con tu audiencia?",
    bgColor: "bg-purple-600",
    textColor: "text-white"
  },
  {
    question: "¿Deseas crear experiencias memorables de aprendizaje?",
    bgColor: "bg-teal-600",
    textColor: "text-white"
  },
  {
    question: "¿Te gustaría destacar como facilitador creativo?",
    bgColor: "bg-pink-600",
    textColor: "text-white"
  }
]

export default function ServicesPage() {
  return (
    <div>
      {/* Primera Sección */}
      <section className="bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center">
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[600px] relative">
          <Image
          src="/imgs/servicios/foto1.png"
          alt="Facilitación creativa en acción"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          />
        </div>
        <div className="w-full lg:w-1/2 p-8 lg:p-16 xl:p-20">
          <div className="max-w-xl">
          <AnimatedText
            text="Un arquitecto de vidas merece encontrarse para encontrar la musa para diseñar sus servicios como coach y facilitador."
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            delay={200}
          />
          </div>
        </div>
        </div>
      </div>
      </section>

      {/* Sección de Preguntas */}
      <CarouselCTA slides={carouselSlides} />

      {/* Servicios Principales */}
      <SplitContent
        imagePosition="left"
        imageSrc="/imgs/servicios/img1.jpg"
        imageAlt="Mentoría Individual"
        title={<span className="text-yellow-800">Mentoría Individual</span>}
        content={
          <p className="text-lg text-gray-700">
            Sesiones personalizadas donde trabajamos en desarrollar tus habilidades
            como facilitador, encontrar tu estilo único y crear experiencias memorables.
          </p>
        }
        buttonText="Más información"
        buttonClassName="bg-yellow-500 hover:bg-yellow-600"
        contentBg="bg-yellow-50"
        className="w-full"
      />

      <SplitContent
        imagePosition="right"
        imageSrc="/imgs/servicios/img2.jpg"
        imageAlt="Programas Grupales"
        title={<span className="text-blue-800">Programas Grupales</span>}
        content={
          <p className="text-lg text-gray-700">
            Experiencias colaborativas donde aprendes y compartes con otros facilitadores,
            enriqueciendo tu práctica a través del intercambio y la retroalimentación.
          </p>
        }
        buttonText="Conoce más"
        buttonClassName="bg-blue-600 hover:bg-blue-700"
        contentBg="bg-blue-50"
        className="w-full"
      />

      <SplitContent
        imagePosition="left"
        imageSrc="/imgs/servicios/img3.jpg"
        imageAlt="Talleres Especializados"
        title={<span className="text-red-800">Talleres Especializados</span>}
        content={
          <p className="text-lg text-gray-700">
            Formación intensiva en técnicas específicas de facilitación, desde el uso
            de herramientas visuales hasta la facilitación de procesos creativos.
          </p>
        }
        buttonText="Explorar talleres"
        buttonClassName="bg-red-600 hover:bg-red-700"
        contentBg="bg-red-50"
        className="w-full"
      />

      <SplitContent
        imagePosition="right"
        imageSrc="/imgs/servicios/img4.jpg"
        imageAlt="Consultoría de Diseño"
        title={<span className="text-gray-800">Consultoría de Diseño</span>}
        content={
          <p className="text-lg text-gray-700">
            Asesoría especializada para diseñar experiencias de aprendizaje efectivas
            y memorables, adaptadas a las necesidades de tu audiencia.
          </p>
        }
        buttonText="Consultar"
        buttonClassName="bg-gray-600 hover:bg-gray-700"
        contentBg="bg-gray-50"
        className="w-full"
      />

      <SplitContent
        imagePosition="left"
        imageSrc="/imgs/servicios/11062b_53fd61938d2c44c798c23d147449520fmv2.jpg"
        imageAlt="Certificación"
        title={<span className="text-sky-800">Certificación en Facilitación Creativa</span>}
        content={
          <p className="text-lg text-gray-700">
            Programa completo de formación para obtener tu certificación como
            facilitador creativo, con herramientas prácticas y mentoría continua.
          </p>
        }
        buttonText="Más detalles"
        buttonClassName="bg-sky-600 hover:bg-sky-700"
        contentBg="bg-sky-50"
        className="w-full"
      />

      {/* Sección de Texto */}
      <section className="bg-white">
        <div className="container mx-auto max-w-4xl text-center px-4 py-20">
          <AnimatedText
            text="Nuestra metodología se basa en la experiencia práctica y el aprendizaje activo."
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
            delay={200}
          />
          <AnimatedText
            text="Trabajamos con herramientas probadas y técnicas innovadoras para asegurar que cada participante desarrolle su máximo potencial como facilitador."
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            delay={400}
          />
        </div>
      </section>

      {/* Penúltima Sección */}
      <section className="bg-[#FBD797]">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 p-12 lg:p-20">
            <AnimatedText
              text="Mis cursos están disponibles en diferentes formatos para adaptarse a tus requerimientos.
              Podemos organizar sesiones en grupos de trabajo, charlas y conferencias, o encuentros breves de aprendizaje. Todo con el objetivo de ayudarte a alcanzar tus objetivos profesionales y personales."
              className="text-2xl md:text-3xl lg:text-4xl mb-3 text-[#134B7B] leading-tight"
              delay={200}
            />
            <AnimatedText
              text="Gracias por confiar en mi experiencia y habilidades para ayudarte a alcanzar tus objetivos. Espero poder trabajar contigo muy pronto."
              className="text-2xl md:text-3xl lg:text-4xl mt-3 font-bold text-[#134B7B] leading-tight"
              delay={200}
            />
          </div>
          <div className="w-full lg:w-1/2 h-[700px] lg:h-[800px] relative">
            <Image
              src="/imgs/servicios/foto2.png"
              alt="Comunidad de facilitadores"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Última Sección con Botón */}
      <section className="relative bg-[#F2F2F2] overflow-hidden">
        <div className="relative z-10 container mx-auto py-24 px-4">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <AnimatedText
              text="Por favor, ten en cuenta que para poder orientarte con precisión sobre mis servicios, es importante que me proporciones algunos detalles. Cuando te pongas en contacto conmigo, por favor incluye tus datos, empresa, página web, redes sociales y una breve descripción de la necesidad específica que tienes como profesional. De esta manera, podré ofrecerte una solución adecuada y personalizada para tus necesidades."
              className="text-xl md:text-2xl lg:text-3xl font-bold text-black tracking-tight"
              delay={200}
            />
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button 
                variant="gradient"
                size="lg"
                href="/contact"
                className="bg-black hover:from-gray-500 hover:to-white text-blue-900 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Escribeme Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}