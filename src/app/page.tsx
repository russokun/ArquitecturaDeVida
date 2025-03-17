import ContentSection from "@/components/features/contentSection"
import Button from "@/components/common/button"
import TestimonialPreview from "@/components/features/testimonialPreview"
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <ContentSection
        bgImage="/imgs/inicio/fondo1.jpg"
        bgImageOverlay="bg-black/40"
        textColor="text-white"
        imageSrc="/imgs/inicio/img1.png"
        imageAlt="Facilitación creativa"
        imagePosition="left"
        useContainer={false}
        minHeight="min-h-[80vh]"
        contentWidth="half"
        contentAlign="center"
        verticalAlign="center"
        contentMargin={{
          bottom: '4rem'
        }}
        imageStyle="object-bottom"
        className="text-base md:text-lg lg:text-xl"
        orderImageFirst={true}
        imageHeight=" h-[500px] lg:h-[800px]"
      >
        <div className="space-y-6 px-4 lg:px-0 max-w-xl mx-auto mt-10">
          <p className="whitespace-pre-wrap text-base md:text-xl lg:text-2xl xl:text-3xl text-white">
            ¿Quieres convertirte en un referente en el mundo de la facilitación y ofrecer experiencias formativas creativas y memorables?
          </p>
          <p className="text-base md:text-xl lg:text-2xl xl:text-3xl text-white">
            ¿Te gustaría ahorrar tiempo y recursos valiosos en tu camino hacia el éxito en la facilitación?
          </p>
          <p className="text-base md:text-xl lg:text-2xl xl:text-3xl text-white">
            Descarga ahora mismo tu recurso gratuito y aprende cómo la Rueda de las Habilidades del Facilitador Creativo puede ayudarte a destacarte en el mundo de la facilitación
          </p>
          <div className="text-center">
            <Button 
              href="/resources" 
              variant="gradient"
              size="lg"
              className="shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Descargar Recurso Gratuito
            </Button>
          </div>
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
        minHeight="min-h-fit"
        contentWidth="half"
        contentAlign="left"
        verticalAlign="center"
        contentMargin={{
          left: '1rem'
        }}
        imageStyle="object-bottom"
        imageHeight="h-[400px] md:h-[500px] lg:h-[600px]"
      >
        <div className="space-y-8 px-4 lg:px-0 max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mt-5">
            Soy Ana Lidia
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Ayudo a coaches y facilitadores a <span className="font-bold">diseñar y construir</span> sesiones y talleres impactantes que los diferencian de la competencia, y a transmitir su experiencia y conocimientos de una manera memorable y efectiva. Con mi ayuda, fortalecen su confianza y aumentan su reputación como líderes en su campo, lo que les permite atraer y retener a más clientes y lograr el éxito que desean.
          </p>
          <div>
            <Button 
              href="/about" 
              variant="primary"
              size="lg"
              className="shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Conoce Mi Historia
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* Metodología Section */}
      <ContentSection
        textColor="text-white"
        useContainer={false}
        minHeight="min-h-[35vh]"
        contentWidth="full"
        contentAlign="center"
        verticalAlign="center"
        contentMargin={{
          left: '2rem',
          right: '2rem',
          top: '2rem'
        }}
        useScrollEffect={false}
        className="bg-hero-animated"
      >
        <div className="max-w-5xl mx-auto text-center px-4 lg:px-0 space-y-8">
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-black font-bold">
            Te ofrezco un proceso de mentoría y coaching personalizado para que puedas darle valor y autenticidad a tu proyecto y convertirlo en una fuente de satisfacción. Juntos, exploraremos tus fortalezas y debilidades, identificaremos oportunidades de crecimiento y definiremos estrategias para alcanzar tus metas. A través de un espacio conversacional abierto y exploratorio, te brindaré las herramientas y el apoyo necesarios para que puedas lograr el éxito que deseas.
          </p>
          <div>
            <Button 
              href="/services" 
              variant="gradient"
              size="lg"
              className="shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mb-5"
            >
              Conoce Nuestra Metodología
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* Creative Section */}
      <ContentSection
        bgImage="/imgs/inicio/fondo2.jpg"
        bgImageOverlay="bg-white-900/80"
        textColor="text-white"
        imageSrc="/imgs/inicio/img3.png"
        imageAlt="Diseño y creatividad"
        imagePosition="right"
        useContainer={false}
        imageStyle="object-bottom"
        contentWidth="half"
        contentAlign="left"
        verticalAlign="center"
        contentMargin={{
          top: '2rem',
          left: '2rem'
        }}
        orderImageFirst={true}
        imageHeight="h-[400px] md:h-[500px] lg:h-[600px]"
      >
        <div className="space-y-6 px-4 lg:px-0 max-w-3xl">
          <p className="text-2xl md:text-3xl lg:text-5xl font-bold leading-relaxed tracking-wide">
            DEJA FLUIR TU CREATIVIDAD…
          </p>
          <p className="text-2xl md:text-2xl lg:text-4xl font-light leading-relaxed tracking-wide">
            SUELTA LAS RIENDAS DE TU IMAGINACIÓN…
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mt-4 ">
            {`AL FIN PODRÁS DISEÑAR, CONSTRUIR Y DISFRUTAR EN ESE ESPACIO DE MENTORÍA
QUE CONECTA
CON TU ESENCIA.`}
          </p>
        </div>
      </ContentSection>

      {/* Recursos Section */}
      <ContentSection
        bgImage="/imgs/inicio/fondo3.jpg"
        textColor="text-white"
        useContainer={false}
        minHeight="min-h-[33vh]"
        contentWidth="half"
        contentAlign="center"
        verticalAlign="center"
        contentMargin={{
          left: '0.5rem',
          right: '0.5rem'
        }}
      >
        <div className="space-y-8 px-4 lg:px-0 max-w-2xl mx-auto text-center mt-5">
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
        Todo proceso creativo requiere que te prepares para esa descarga energética y eso implica que conozcas con cuales recursos cuentas.
        Para ello tengo para ti mi poderosa guía gratuita de AUTOCONOCIMIENTO.
          </p>
          <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8">
          Recursos para Facilitadores
        </h2>
        <Button 
          href="/resources" 
          variant="gradient"
          size="lg"
          className="shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mb-3"
        >
          Quiero Descargarla Ya
        </Button>
          </div>
        </div>
      </ContentSection>

      {/* Testimonios Preview */}
      <ContentSection
        bgImage="/imgs/inicio/fondo4.jpg"
        bgImageOverlay="bg-black/50"
        textColor="text-white"
        useContainer={false}
        minHeight="min-h-fit"
        contentWidth="half"
        contentAlign="center"
        verticalAlign="center"
        contentMargin={{
          left: '0.5rem'
        }}
      >
        <div className="space-y-8 px-4 lg:px-0 max-w-2xl mx-auto text-center">
          <p className="text-base md:text-lg lg:text-xl leading-relaxed mt-5">
            ¿Estás listo para ahorrar tiempo y recursos valiosos en tu camino hacia el éxito en la facilitación y convertirte en un referente en este campo profesional?
          </p>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8">
              ¡Diseñemos y construyámoslo juntos!
            </h2>
            <Button 
              href="/servicios" 
              variant="gradient"
              size="lg"
              className="shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mb-5"
            >
              Opciones de servicios
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* Testimoniales */}
      <TestimonialPreview />
   </>
  )
}
