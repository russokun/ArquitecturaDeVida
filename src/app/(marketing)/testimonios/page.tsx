import TestimonialCard from "@/components/features/testimonialCard"

export const metadata = {
  title: "Testimonios | Arq de Vida",
  description: "Descubre las experiencias de quienes han transformado su facilitación con nosotros",
}

const testimonios = [
  {
    name: "Blanca Hernández",
    profession: "Psicóloga y Especialista en Herramientas de Facilitación",
    country: "México",
    countryCode: "mx",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    name: "Nadiuska Del Castillo",
    profession: "Consultor de Innovación",
    country: "Panamá",
    countryCode: "pa",
    imageUrl: "/imgs/testimonios/miguel.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    name: "Nina Pino",
    profession: "Facilitadora de Grupos",
    country: "Colombia",
    countryCode: "co",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    name: "Rosa Jimenez",
    profession: "Director de Innovación",
    country: "Argentina",
    countryCode: "ar",
    imageUrl: "/imgs/testimonios/juan.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    name: "Paulo Castañeda",
    profession: "Psicóloga y Especialista en Herramientas de Facilitación",
    country: "México",
    countryCode: "mx",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    name: "Ana M. Campbell",
    profession: "Psicóloga y Especialista en Herramientas de Facilitación",
    country: "México",
    countryCode: "co",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    name: "Sócrates Salas",
    profession: "Psicóloga y Especialista en Herramientas de Facilitación",
    country: "México",
    countryCode: "mx",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    name: "Mauricio Zambrano",
    profession: "Psicóloga y Especialista en Herramientas de Facilitación",
    country: "México",
    countryCode: "mx",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    name: "Janneth Palacios",
    profession: "Psicóloga y Especialista en Herramientas de Facilitación",
    country: "México",
    countryCode: "co",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    name: "Glenis Morillo",
    profession: "Psicóloga y Especialista en Herramientas de Facilitación",
    country: "México",
    countryCode: "mx",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    name: "Yinelka De León",
    profession: "Psicóloga y Especialista en Herramientas de Facilitación",
    country: "México",
    countryCode: "mx",
    testimonialText:"Holaa querida Ana, quiero agradecerte infinitamente tu apoyo con el programa Arquitectura de vida, gracias a el logré ver mis limitaciones como coach, tu acompañamiento genuino, sincero y empático me permitió desarrollar mi programa de coaching y clarificar como entregarlo, tu seguimiento y respeto a mis silencios honra el verdadero desempeño que para mi es importante tener como coach, acompañar sin invadir, ser amoroso sin cargar, en fin, gracias a ti Amate desnuda salio al mundo, un abrazo."
  },
  {
    name: "Geannina Ureña Solano",
    profession: "Psicóloga y Especialista en Herramientas de Facilitación",
    country: "México",
    countryCode: "mx",
    
    testimonialText:"Encontré en Ana Lidia una coach con mucha calidez y humildad. Fueron sesiones muy empáticas, permitiéndome esto, poder tratar temas que nunca había tocado con nadie. Me sentí en confianza y realmente acompañada en mi proceso de lograr mis objetivos personales. La recomiendo totalmente, porque encontrarán en ella, una excelente profesional y mejor persona, conocedora además, de múltiples herramientas que me invitaron a profundizar más en mi SER, para poder tomar acciones. Luego de sus sesiones logré la motivación necesaria para centrarme mucho más en mis metas personales y profesionales."
  },
  
]

export default function TestimoniosPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          ¡Bienvenido a nuestra sección de testimonios!
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Descubre las experiencias transformadoras de quienes han participado en nuestros programas y cómo han llevado su facilitación al siguiente nivel.
        </p>
      </section>

      {/* Grid de Testimonios */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <TestimonialCard
              key={index}
              name={testimonio.name}
              profession={testimonio.profession}
              country={testimonio.country}
              countryCode={testimonio.countryCode}
              testimonialText={testimonio.testimonialText}
              imageUrl={testimonio.imageUrl}
              videoUrl={testimonio.videoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}