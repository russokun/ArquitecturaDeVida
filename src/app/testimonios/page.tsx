import TestimonialCard from "@/components/features/testimonialCard"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Testimonios | Arq de Vida",
  description: "Descubre lo que nuestros clientes dicen sobre nuestros servicios de facilitación",
}

const testimonios = [
  {
    name: "Blanca Hernández",
    profession: "Psicóloga y Especialista en Herramientas de Facilitación",
    country: "México",
    countryCode: "mx",
    videoUrl: "/videos/testimonios/Blanca Hernandez.mp4",
  },
  {
    name: "Nadiuska Del Castillo",
    profession: "Coach  y mentora de liderazgo",
    country: "Panamá",
    countryCode: "pa",
    videoUrl: "videos/testimonios/Nadiuska Del Castillo.mp4",
  },
  {
    name: "Nina Pino",
    profession: "Coach, Facilitadora de Barras Access y Especialista en Herramientas de Facilitación",
    country: "Venezuela",
    countryCode: "ve",
    videoUrl: "videos/testimonios/Nina Pino.mp4",
  },
  {
    name: "Rosa Jimenez",
    profession: "Coach de bienestar y conferencista JMT",
    country: "Panamá",
    countryCode: "pa",
    imageUrl: "/imgs/testimonios/juan.jpg",
    videoUrl: "videos/testimonios/Rosa Jimenez.mp4",
  },
  {
    name: "Paulo Castañeda",
    profession: "Coach y Mentor de Liderazgo",
    country: "Colombia",
    countryCode: "co",
    videoUrl: "videos/testimonios/Paulo Castaneda.mp4",
  },
  {
    name: "Ana M. Campbell",
    profession: "Psicóloga, Coach y Facilitadora",
    country: "Colombia",
    countryCode: "co",
    videoUrl: "videos/testimonios/Ana Campbell.mp4",
  },
  {
    name: "Sócrates Salas",
    profession: "Coach y Facilitador Coaching Play",
    country: "Costa Rica",
    countryCode: "cr",
    videoUrl: "videos/testimonios/Socrates Salas.mp4",
  },
  {
    name: "Mauricio Zambrano",
    profession: "Master Coach Internacional y CEO Academia de Coaching Mauricio Zambrano",
    country: "Venezuela",
    countryCode: "ve",
    videoUrl: "videos/testimonios/Mauricio Sambrano.mp4",
  },
  {
    name: "Janneth Palacios",
    profession: "Psicóloga Especializada en Psicología del Consumidor y Marketing Digital",
    country: "Colombia",
    countryCode: "co",
    videoUrl: "videos/testimonios/Janeth Palacios.mp4",
  },
  {
    name: "Glenis Morillo",
    profession: "Mentora, Autora, Facilitadora y Oradora",
    country: "República Dominicana",
    countryCode: "do",
    videoUrl: "videos/testimonios/Glenis Morillo.mp4",
  },
  {
    name: "Yinelka De León",
    profession: "Coach y mentora , Ceo de Ámate Desnuda",
    country: "República Dominicana",
    countryCode: "do",
    imageUrl:"/imgs/testimonios/yinelka.png",
    testimonialText:"Holaa querida Ana, quiero agradecerte infinitamente tu apoyo con el programa Arquitectura de vida, gracias a el logré ver mis limitaciones como coach, tu acompañamiento genuino, sincero y empático me permitió desarrollar mi programa de coaching y clarificar como entregarlo, tu seguimiento y respeto a mis silencios honra el verdadero desempeño que para mi es importante tener como coach, acompañar sin invadir, ser amoroso sin cargar, en fin, gracias a ti Amate desnuda salio al mundo, un abrazo."
  },
  {
    name: "Geannina Ureña Solano",
    profession: "Coach de vida",
    country: "Costa Rica",
    countryCode: "cr",
    imageUrl:"/imgs/testimonios/geannina.png",
    testimonialText:"Encontré en Ana Lidia una coach con mucha calidez y humildad. Fueron sesiones muy empáticas, permitiéndome esto, poder tratar temas que nunca había tocado con nadie. Me sentí en confianza y realmente acompañada en mi proceso de lograr mis objetivos personales. La recomiendo totalmente, porque encontrarán en ella, una excelente profesional y mejor persona, conocedora además, de múltiples herramientas que me invitaron a profundizar más en mi SER, para poder tomar acciones. Luego de sus sesiones logré la motivación necesaria para centrarme mucho más en mis metas personales y profesionales."
  },
]

export default function TestimoniosPage() {
  return (
    <div className="bg-sky-50">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Testimonios
        </h1>
        <p className="text-xl text-gray-600 max-w-5xl mx-auto px-4">
        Queremos compartir contigo las experiencias de algunos profesionales que han vivido nuestros procesos y han transformado su vida profesional y personal. Sus testimonios son una muestra de la calidad y el impacto de nuestro trabajo. Conoce de primera mano cómo nuestros procesos de coaching, formación y facilitación han ayudado a otros a alcanzar sus objetivos, descubrir su potencial y mejorar su desempeño. Esperamos que estos testimonios te inspiren y te motiven a dar el siguiente paso hacia tu crecimiento y éxito personal y profesional. ¡Acompáñanos y descubre cómo podemos ayudarte a alcanzar tus metas y objetivos!
        </p>
      </section>

      {/* Testimonios Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="h-full">
              <TestimonialCard {...testimonio} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}