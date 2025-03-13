import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"
import ContentSection from "@/components/features/contentSection"
import SplitContent from "@/components/features/splitContent"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute right-20 top-40 w-64 h-64 rounded-full bg-yellow-400 opacity-80"></div>
        <div className="absolute right-40 bottom-20 w-40 h-40 rounded-full bg-blue-500"></div>
        <div
          className="absolute right-10 bottom-40 w-32 h-32 bg-yellow-300 opacity-70"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        ></div>

        {/* Hero content */}
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-1/2 relative z-10">
            <Image
              src="/imgs/inicio/WhatsApp-Image-2023-03-15-at-7_46_edited.jpg"
              alt="Ana Lidia"
              width={500}
              height={600}
              className="object-contain"
              priority
            />
          </div>

          {/* Text content */}
          <div className="md:w-1/2 text-white z-10 space-y-6 mt-8 md:mt-0">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-medium">
                "¿Quieres convertirte en un referente en el mundo de la facilitación y ofrecer{" "}
                <span className="font-bold">experiencias formativas creativas</span> y memorables?"
              </h2>

              <p className="text-xl md:text-2xl mt-6">
                ¿Te gustaría ahorrar tiempo y recursos valiosos en tu{" "}
                <span className="font-bold">camino hacia el éxito</span> en la facilitación?
              </p>

              <p className="text-lg md:text-xl mt-6">
                Descarga ahora mismo tu recurso gratuito y aprende cómo la Rueda de las Habilidades del Facilitador
                Creativo puede ayudarte a destacarte en el mundo de la facilitación
              </p>

              <button className="mt-8 bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center mx-auto md:mx-0">
                QUIERO MI REGALO
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Social media sidebar */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20">
          <Link href="#" className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors">
            <Instagram size={20} />
          </Link>
          <Link href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
            <Facebook size={20} />
          </Link>
          <Link href="#" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
            <Linkedin size={20} />
          </Link>
          <Link href="#" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors">
            <Youtube size={20} />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-b from-yellow-100 via-yellow-50 to-rose-200 py-16 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-5xl md:text-6xl font-bold text-red-600 mb-6">Soy Ana Lidia</h2>
            <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto md:mx-0">
              Ayudo a coaches y facilitadores a <span className="font-semibold">diseñar y construir </span> 
              sesiones y talleres impactantes que los diferencian de 
              la competencia, y a transmitir su experiencia y 
              conocimientos de una manera memorable y efectiva. 
              Con mi ayuda, fortalecen su confianza y aumentan su 
              reputación como líderes en su campo, lo que les 
              permite atraer y retener a más clientes y lograr el éxito 
              que desean.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="relative">
              <Image 
                src="/imgs/inicio/IMG_2336.jpg"
                alt="Ana Lidia"
                width={320}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mentoring Section */}
      <ContentSection
        bgColor="bg-blue-800"
        textColor="text-white"
        description="Te ofrezco un proceso de mentoría y coaching personalizado para que puedas darle valor y autenticidad a tu proyecto y convertirlo en una fuente de satisfacción. Juntos, exploraremos tus fortalezas y debilidades, identificaremos oportunidades de crecimiento y definiremos estrategias para alcanzar tus metas. A través de un espacio conversacional abierto y exploratorio, te brindaré las herramientas y el apoyo necesarios para que puedas lograr el éxito que deseas."
        buttonText="Agenda tu cita gratuita aquí"
        buttonUrl="#"
        buttonGradient={true}
        decorativeElements={true}
        decorativeShapes={{
          circles: true,
          rectangles: true,
          customShapes: false,
        }}
        decorativeColors={{
          primary: "bg-blue-500",
          secondary: "bg-teal-400",
          tertiary: "bg-yellow-400",
        }}
      />

      {/* Creativity Section */}
      <ContentSection
        bgColor="bg-pink-200"
        textColor="text-gray-800"
        imageSrc="/imgs/inicio/IMG_2372.jpg"
        imageAlt="Ana Lidia facilitando"
        imagePosition="left"
        decorativeElements={true}
        decorativeShapes={{
          circles: true,
          rectangles: false,
          customShapes: false,
        }}
        decorativeColors={{
          primary: "bg-purple-500",
          secondary: "bg-teal-400",
          tertiary: "bg-pink-300",
        }}
      >
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">DEJA FLUIR TU CREATIVIDAD...</h2>
          <h3 className="text-xl md:text-2xl font-medium mb-6">SUELTA LAS RIENDAS DE TU IMAGINACIÓN...</h3>
          <p className="text-lg md:text-xl mb-4">
            AL FIN PODRÁS DISEÑAR, CONSTRUIR Y DISFRUTAR EN ESE ESPACIO DE MENTORÍA QUE CONECTA
          </p>
          <p className="text-xl md:text-2xl font-bold">CON TU ESENCIA</p>
        </div>
      </ContentSection>
      
      
    </main>
  )
}
