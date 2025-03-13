import SplitContent from "@/components/features/splitContent"

export const metadata = {
  title: "Sobre Mí | Arq de Vida",
  description: "Conoce más sobre Ana Lidia y su pasión por la facilitación creativa",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Sobre Mí
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Conoce mi historia y pasión por la facilitación creativa
        </p>
      </section>

      {/* Primera Sección: Mi Historia */}
      <SplitContent
        imagePosition="left"
        imageSrc="/imgs/quienSoy/074c9c_2a8517327cef43ea9ff44a608b6499c5mv2.jpg"
        imageAlt="Ana Lidia facilitando"
        title={
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800">ANA LIDIA PEÑA</h2>
            <p className="text-lg md:text-xl font-medium text-blue-600">
              Coach Profesional con PNL, Mentora, Comunicadora, Speaker y Educadora Experiencial
            </p>
          </div>
        }
        content={
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
            Soy Ana Lidia, una coach, mentora y formadora de formadores que se dedica a ayudar a profesionales como tú a identificar y potenciar su talento único para ofrecer experiencias formativas creativas y memorables.
            </p>
            <p className="text-lg text-gray-700">
            Entiendo tus preocupaciones porque yo misma he pasado por lo mismo. Después de invertir mucho tiempo y dinero en mi propia formación, encontré una solución más rápida y económica que me permitió alcanzar mis objetivos. Ahora, quiero compartir todo lo que he aprendido contigo para ayudarte a ahorrar tiempo y recursos valiosos en tu propio camino hacia el éxito.
            </p>
            <p className="text-lg text-gray-700">
            Con una sólida formación como arquitecta,coach, comunicadora y docente universitaria, y con más de 8 años de experiencia como facilitadora experiencial, he desarrollado una metodología única que te permitirá marcar precedentes en el mundo de la facilitación y convertirte en un referente en este campo profesional.
            </p>
            <p className="text-lg text-gray-700">
            Mi enfoque cercano y personalizado se basa en un proceso de crecimiento profesional colaborativo, en el que trabajaremos juntos para identificar tus fortalezas y debilidades, desarrollar estrategias efectivas y ofrecerte el apoyo que necesitas para alcanzar tus metas. Si buscas una experiencia de mentoría que te permita alcanzar tus objetivos de manera más rápida y efectiva, ¡estoy aquí para ayudarte!
            </p>
          </div>
        }
        contentBg="bg-gray-50"
        className="w-full"
      />

      {/* Segunda Sección: Mi Enfoque */}
      <SplitContent
        imagePosition="right"
        imageSrc="/imgs/quienSoy/074c9c_fd497489bf6b4fca8b4e0094cf1a907emv2.jpg"
        imageAlt="Ana Lidia en taller"
        title="Mi historia profesional se resume en:"
        titleClassName="text-3xl md:text-4xl font-bold text-blue-800"
        content={
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
            Mi camino profesional ha estado marcado por la búsqueda constante de aprendizaje y crecimiento. Comencé mi carrera en el sector empresarial, liderando equipos de ventas durante más de 10 años. Sin embargo, mi pasión por el desarrollo personal y profesional me llevó a explorar otros ámbitos, y así fue como me convertí en Facilitadora Experiencial con Equipos y Conferencista Internacional con experiencia en diferentes países del mundo.
            </p>
            <p className="text-lg text-gray-700">
            Mi formación como arquitecta me permitió tener una visión holística y estratégica en mi trabajo, y posteriormente, un postgrado en Gestión Académica me brindó herramientas valiosas para el ámbito educativo, donde he estado involucrada en los últimos años como Doctoranda en Educación.
            En mi trayectoria, he tenido la oportunidad de explorar diferentes áreas y herramientas, lo que me ha llevado a especializarme en diversas disciplinas como el Coaching Ontológico y PNL, donde he realizado más de 600 sesiones individuales y grupales. También he sido certificada como Coach y Conferencista Internacional por el equipo de Jhon Maxwell, y en Coaching Virtual, lo que me ha permitido acompañar a muchas personas a nivel internacional.
            </p>
            <p className="text-lg text-gray-700">
            Me he certificado en diversas metodologías y herramientas de facilitación, como Coaching Play, Neuroherramientas, Yoga de la Risa y Mindfulness Organizacional. Además, soy formadora de formadores IFS y he sido certificada en el proceso de actualización y práctica de Herramientas Digitales, Didácticas y Sistémicas Coaching Play. También he sido certificada en Gamificación y he creado herramientas con esta metodología.
            </p>
            <p className="text-lg text-gray-700">
            En mi búsqueda constante por mejorar mi trabajo, he obtenido la certificación en Eneagrama Test y DISC metodología IDEA, y soy Trainer del Programa Poder Mental 360. Además, he sido certificada como Master en Facilitación con herramientas y como Consultora Disc Serious Game y Coach Team Builder Experience.
            Todo este camino profesional me ha permitido ayudar a muchas personas y equipos a alcanzar sus metas y potencialidades, y me ha enseñado la importancia de seguir aprendiendo y creciendo constantemente.
            </p>
          </div>
        }
        contentBg="bg-gray-50"
        className="w-full"
      />
    </>
  )
}