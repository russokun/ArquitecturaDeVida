import ContentSection from "@/components/features/contentSection"
import Button from "@/components/common/button"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <ContentSection
        bgImage="/imgs/inicio/fondo1.jpg"
        bgImageOverlay="bg-black/40"
        textColor="text-white"
        description={`¿Quieres convertirte en un referente en el mundo de la facilitación y ofrecer experiencias formativas creativas y memorables?\n\n¿Te gustaría ahorrar tiempo y recursos valiosos en tu camino hacia el éxito en la facilitación?\n\nDescarga ahora mismo tu recurso gratuito y aprende cómo la Rueda de las Habilidades del Facilitador Creativo puede ayudarte a destacarte en el mundo de la facilitación`}
        useContainer={false}
        minHeight="min-h-[85vh]"
        contentWidth="half"
        contentAlign="right"
        verticalAlign="top"
        contentMargin={{
          right: '10rem',
          top: '11rem'
        }}
      >
        <div className="space-y-6">
          <Button 
            href="/resources" 
            variant="gradient"
            size="lg"
          >
            Descargar Recurso Gratuito
          </Button>
        </div>
      </ContentSection>

      {/* About Section */}
      <ContentSection
        bgColor="bg-white"
        bgGradient="rgba(254, 243, 199, 1)"  // yellow-100
        useScrollEffect={true}
        textColor="text-gray-700"
        imageSrc="/imgs/inicio/IMG_2481.jpg"
        imageAlt="Ana Lidia facilitando"
        imagePosition="right"
        useContainer={false}
        contentWidth="half"
        contentAlign="left"
        contentMargin={{
          left: '8rem'
        }}
      >
        <div className="space-y-8 max-w-2xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-red-600">
            Soy Ana Lidia
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Ayudo a coaches y facilitadores a <span className="font-bold">diseñar y construir</span> sesiones y talleres impactantes que los diferencian de la competencia, y a transmitir su experiencia y conocimientos de una manera memorable y efectiva. Con mi ayuda, fortalecen su confianza y aumentan su reputación como líderes en su campo, lo que les permite atraer y retener a más clientes y lograr el éxito que desean.
          </p>
          <Button 
            href="/about" 
            variant="primary"
            size="lg"
          >
            Conoce Mi Historia
          </Button>
        </div>
      </ContentSection>

      {/* Metodología Section */}
      <ContentSection
        bgImage="/imgs/inicio/IMG_2372.jpg"
        bgImageOverlay="bg-blue-900/80"
        textColor="text-white"
        description="Mi enfoque se basa en el poder de la creatividad y el juego para generar aprendizajes significativos. Utilizo técnicas innovadoras y herramientas probadas para crear espacios de transformación."
        useContainer={false}
        contentWidth="half"
        contentAlign="right"
        contentMargin={{
          right: '4rem'
        }}
        descriptionAsChild
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Metodología Única
        </h2>
        <Button 
          href="/services" 
          variant="gradient"
          size="lg"
        >
          Conoce Nuestra Metodología
        </Button>
      </ContentSection>

      {/* Programas Section */}
      <ContentSection
        bgColor="bg-white"
        textColor="text-gray-800"
        description="Descubre nuestros programas especializados diseñados para potenciar tus habilidades como facilitador y crear experiencias únicas."
        imageSrc="/imgs/inicio/IMG_2463.jpg"
        imageAlt="Programas de facilitación"
        imagePosition="left"
        useContainer={false}
        descriptionAsChild
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-800">
            Programas de Formación
          </h2>
          <Button 
            href="/services" 
            variant="primary"
            size="lg"
          >
            Explorar Programas
          </Button>
        </div>
      </ContentSection>

      {/* Recursos Section */}
      <ContentSection
        bgImage="/imgs/inicio/IMG_2336.jpg"
        bgImageOverlay="bg-blue-900/75"
        textColor="text-white"
        description="Accede a nuestra biblioteca de recursos, herramientas y guías para mejorar tus habilidades de facilitación y crear experiencias memorables."
        useContainer={false}
        contentWidth="half"
        contentAlign="right"
        contentMargin={{
          right: '4rem'
        }}
        descriptionAsChild
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            Recursos para Facilitadores
          </h2>
          <Button 
            href="/resources" 
            variant="gradient"
            size="lg"
          >
            Descubrir Recursos
          </Button>
        </div>
      </ContentSection>

      {/* Testimonios Preview */}
      <ContentSection
        bgImage="/imgs/inicio/074c9c_1e788f438e6c41609e3e3ad57655983f_mv2.jpg"
        bgImageOverlay="bg-black/50"
        textColor="text-white"
        description="Descubre cómo nuestros programas han transformado la manera en que otros facilitan y crean experiencias memorables."
        useContainer={false}
        contentWidth="half"
        contentAlign="left"
        contentMargin={{
          left: '4rem'
        }}
        descriptionAsChild
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            Testimonios
          </h2>
          <Button 
            href="/testimonios" 
            variant="gradient"
            size="lg"
          >
            Ver Testimonios
          </Button>
        </div>
      </ContentSection>
    </>
  )
}
