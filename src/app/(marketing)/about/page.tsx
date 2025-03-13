import SplitContent from "@/components/features/splitContent"

export const metadata = {
  title: "Sobre Mí | Arq de Vida",
  description: "Conoce más sobre Ana Lidia y su pasión por la facilitación creativa",
}

export default function AboutPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
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
        title="Mi Historia en la Facilitación"
        titleClassName="text-blue-800"
        content={
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Mi viaje en el mundo de la facilitación comenzó hace más de una década, 
              cuando descubrí el poder transformador de crear espacios donde las personas 
              pueden explorar, aprender y crecer de manera auténtica y creativa.
            </p>
            <p className="text-lg text-gray-700">
              Como Coach Certificada y Facilitadora Internacional, he tenido el privilegio 
              de acompañar a cientos de profesionales en su camino hacia convertirse en 
              facilitadores más efectivos y creativos. Mi enfoque combina técnicas 
              innovadoras con una profunda comprensión de la dinámica grupal.
            </p>
          </div>
        }
        contentBg="bg-gray-50"
      />

      {/* Segunda Sección: Mi Enfoque */}
      <SplitContent
        imagePosition="right"
        imageSrc="/imgs/quienSoy/074c9c_fd497489bf6b4fca8b4e0094cf1a907emv2.jpg"
        imageAlt="Ana Lidia en taller"
        title="Mi Enfoque y Metodología"
        titleClassName="text-blue-800"
        content={
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Creo firmemente en el poder de la creatividad y la lúdica como herramientas 
              fundamentales para el aprendizaje y el desarrollo personal. Mi metodología 
              se basa en crear experiencias significativas que conecten con la esencia 
              de cada participante.
            </p>
            <p className="text-lg text-gray-700">
              Como Facilitadora Serious Game y especialista en Neuro Herramientas, 
              integro elementos de gamificación y neurociencia para diseñar experiencias 
              que no solo sean memorables, sino que también generen transformaciones 
              duraderas en quienes participan.
            </p>
            <div className="pt-4">
              <h3 className="font-bold text-gray-800 mb-2">Certificaciones:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Coach Certificada Internacional</li>
                <li>Facilitadora Serious Game</li>
                <li>Especialista en Neuro Herramientas</li>
                <li>Certificada en Coaching Play</li>
              </ul>
            </div>
          </div>
        }
        contentBg="bg-white"
      />
    </div>
  )
}