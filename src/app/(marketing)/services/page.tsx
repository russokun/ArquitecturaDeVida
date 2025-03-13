import ContentSection from "@/components/features/contentSection"
import CarouselCTA from "@/components/features/carouselCTA"
import SplitContent from "@/components/features/splitContent"
import Button from "@/components/common/button"

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
      <ContentSection
        bgColor="bg-gradient-to-b from-blue-50 to-white"
        textColor="text-gray-800"
        description="Transformamos la manera en que facilitas y creas experiencias de aprendizaje. A través de metodologías creativas y herramientas innovadoras, te ayudamos a desarrollar tu potencial como facilitador."
        imageSrc="/imgs/servicios/11062b_5c779c886e374c01925a171975b0e453mv2_d_6720_4480_s_4_2.jpg"
        imageAlt="Facilitación creativa en acción"
        buttonText="Descubre más"
        buttonUrl="#services"
        buttonGradient={true}
        useContainer={false}
        imagePosition="left"
      />

      {/* Sección de Preguntas */}
      <CarouselCTA slides={carouselSlides} />

      {/* Servicios Principales */}
      <SplitContent
        imagePosition="left"
        imageSrc="/imgs/servicios/IMG_2408.jpg"
        imageAlt="Mentoría Individual"
        title="Mentoría Individual"
        content={
          <p className="text-lg text-gray-700">
            Sesiones personalizadas donde trabajamos en desarrollar tus habilidades
            como facilitador, encontrar tu estilo único y crear experiencias memorables.
          </p>
        }
        buttonText="Más información"
        buttonClassName="bg-blue-600 hover:bg-blue-700"
        className="w-full"
      />

      <SplitContent
        imagePosition="right"
        imageSrc="/imgs/servicios/IMG_2536.jpg"
        imageAlt="Programas Grupales"
        title="Programas Grupales"
        content={
          <p className="text-lg text-gray-700">
            Experiencias colaborativas donde aprendes y compartes con otros facilitadores,
            enriqueciendo tu práctica a través del intercambio y la retroalimentación.
          </p>
        }
        buttonText="Conoce más"
        buttonClassName="bg-purple-600 hover:bg-purple-700"
        className="w-full"
      />

      <SplitContent
        imagePosition="left"
        imageSrc="/imgs/servicios/IMG_2548.jpg"
        imageAlt="Talleres Especializados"
        title="Talleres Especializados"
        content={
          <p className="text-lg text-gray-700">
            Formación intensiva en técnicas específicas de facilitación, desde el uso
            de herramientas visuales hasta la facilitación de procesos creativos.
          </p>
        }
        buttonText="Explorar talleres"
        buttonClassName="bg-teal-600 hover:bg-teal-700"
        className="w-full"
      />

      <SplitContent
        imagePosition="right"
        imageSrc="/imgs/servicios/11062b_67e1e0af28024fc7aa00ee870b6b8d1emv2.jpg"
        imageAlt="Consultoría de Diseño"
        title="Consultoría de Diseño"
        content={
          <p className="text-lg text-gray-700">
            Asesoría especializada para diseñar experiencias de aprendizaje efectivas
            y memorables, adaptadas a las necesidades de tu audiencia.
          </p>
        }
        buttonText="Consultar"
        buttonClassName="bg-pink-600 hover:bg-pink-700"
        className="w-full"
      />

      <SplitContent
        imagePosition="left"
        imageSrc="/imgs/servicios/11062b_53fd61938d2c44c798c23d147449520fmv2.jpg"
        imageAlt="Certificación"
        title="Certificación en Facilitación Creativa"
        content={
          <p className="text-lg text-gray-700">
            Programa completo de formación para obtener tu certificación como
            facilitador creativo, con herramientas prácticas y mentoría continua.
          </p>
        }
        buttonText="Más detalles"
        buttonClassName="bg-indigo-600 hover:bg-indigo-700"
        className="w-full"
      />

      {/* Sección de Texto */}
      <ContentSection
        bgColor="bg-gray-50"
        textColor="text-gray-800"
        description="Nuestra metodología se basa en la experiencia práctica y el aprendizaje activo. Trabajamos con herramientas probadas y técnicas innovadoras para asegurar que cada participante desarrolle su máximo potencial como facilitador."
        useContainer={false}
      />

      {/* Penúltima Sección */}
      <ContentSection
        bgColor="bg-white"
        textColor="text-gray-800"
        description="Únete a nuestra comunidad de facilitadores creativos y descubre cómo transformar tus sesiones en experiencias memorables."
        imageSrc="/imgs/servicios/nsplsh_4428397322dd40299b8f3564689ea277mv2.jpg"
        imageAlt="Comunidad de facilitadores"
        useContainer={false}
        imagePosition="right"
      />

      {/* Última Sección con Botón */}
      <ContentSection
        bgColor="bg-blue-900"
        textColor="text-white"
        description="¿Listo para llevar tu facilitación al siguiente nivel?"
        imageSrc="/imgs/servicios/nsplsh_32221802900949f5bba2c2c307eaac5bmv2.jpg"
        imageAlt="Facilitación avanzada"
        useContainer={false}
        imagePosition="left"
      >
        <div className="mt-8 text-center">
          <Button
            variant="gradient"
            size="lg"
            href="/contact"
          >
            Agenda una llamada de descubrimiento
          </Button>
        </div>
      </ContentSection>
    </div>
  )
}