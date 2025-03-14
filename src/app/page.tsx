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
        minHeight="min-h-[80vh]"
        contentWidth="half"
        contentAlign="right"
        verticalAlign="top"
        contentMargin={{
          right: '1rem',
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
        useScrollEffect={true}
        bgGradient="linear-gradient(135deg, rgba(254, 243, 199, 0.9), rgba(239, 68, 68, 0.6))"
        textColor="text-white"
        imageSrc="/imgs/inicio/img2.png"
        imageAlt="Ana Lidia facilitando"
        imagePosition="right"
        useContainer={false}
        contentWidth="half"
        contentAlign="left"
        contentMargin={{
          left: '0.5rem'
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
        // bgImage="/imgs/inicio/IMG_2372.jpg"
        // bgImageOverlay="bg-blue-900/80"
        textColor="text-white"
        description="Te ofrezco un proceso de mentoría y coaching personalizado para que puedas darle valor y autenticidad a tu proyecto y convertirlo en una fuente de satisfacción. Juntos, exploraremos tus fortalezas y debilidades, identificaremos oportunidades de crecimiento y definiremos estrategias para alcanzar tus metas. A través de un espacio conversacional abierto y exploratorio, te brindaré las herramientas y el apoyo necesarios para que puedas lograr el éxito que deseas."
        useContainer={false}
        minHeight="min-h-fit"
        contentWidth="half"
        contentAlign="center"
        contentMargin={{
          right: '2rem',
          left: '2rem'
        }}
        useScrollEffect={false}
        className="bg-hero-animated"
        descriptionAsChild
        descriptionPosition="before"
      >
        <Button 
          href="/services" 
          variant="gradient"
          size="lg"
        >
          Conoce Nuestra Metodología
        </Button>
      </ContentSection>

      {/* Creative Section */}
      <ContentSection
        bgImage="/imgs/inicio/fondo2.jpg"
        bgImageOverlay="bg-white-900/80"
        textColor="text-white"
        imageSrc="/imgs/inicio/img3.png"
        imageAlt="Diseño y creatividad"
        imagePosition="left"
        useContainer={false}
        minHeight="min-h-fit"
        contentWidth="half"
        contentAlign="center"
        verticalAlign="top"
        contentMargin={{
          top: '4rem'
        }}
      >
        <div className="space-y-6 text-center max-w-3xl mx-auto">
          <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed tracking-wide">
            DEJA FLUIR TU CREATIVIDAD…
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed tracking-wide">
            SUELTA LAS RIENDAS DE TU IMAGINACIÓN…
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mt-8 whitespace-pre-line">
            {`AL FIN PODRÁS DISEÑAR, CONSTRUIR Y DISFRUTAR EN ESE ESPACIO DE MENTORÍA
QUE CONECTA
CON TU ESENCIA.`}
          </p>
        </div>
      </ContentSection>

      {/* Recursos Section */}
      <ContentSection
        bgImage="/imgs/inicio/fondo3.jpg"
        bgImageOverlay=""
        textColor="text-white"
        description="Todo proceso creativo requiere que te prepares para esa descarga energética y eso implica que conozcas con cuales recursos cuentas.
        Para ello tengo para ti mi poderosa guía gratuita de AUTOCONOCIMIENTO."
        useContainer={false}
        minHeight="min-h-[50vh]"
        contentWidth="half"
        contentAlign="right"
        contentMargin={{
          right: '2rem'
        }}
        descriptionAsChild
        descriptionPosition="before"
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
            Quiero Descargarla Ya
          </Button>
        </div>
      </ContentSection>

      {/* Testimonios Preview */}
      <ContentSection
        bgImage="/imgs/inicio/fondo4.jpg"
        bgImageOverlay="bg-black/50"
        textColor="text-white"
        description="¿Estás listo para ahorrar tiempo y recursos valiosos en tu camino hacia el éxito en la facilitación y convertirte en un referente en este campo profesional?
"
        useContainer={false}
        minHeight="min-h-fit"
        contentWidth="half"
        contentAlign="left"
        contentMargin={{
          left: '2rem'
        }}
        descriptionAsChild
        descriptionPosition="before"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
          ¡Diseñemos y construyámoslo juntos!
          </h2>
          <Button 
            href="/testimonios" 
            variant="gradient"
            size="lg"
          >
            Opciones de servicios
          </Button>
        </div>
      </ContentSection>
    </>
  )
}
