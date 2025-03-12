import Link from 'next/link'
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Información Principal */}
          <div className="space-y-6">
            <p className="text-white text-sm md:text-base leading-relaxed max-w-2xl">
              Ayudo a coaches y facilitadores a diseñar y construir sesiones y talleres impactantes 
              que los diferencian de la competencia, y a transmitir su experiencia y conocimientos 
              de una manera memorable y efectiva. Con mi ayuda, fortalecen su confianza y aumentan 
              su reputación como líderes en su campo, lo que les permite atraer y retener a más 
              clientes y lograr el éxito que desean.
            </p>
            
            {/* Redes Sociales */}
            <div className="flex space-x-4">
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
          </div>

          {/* Links Rápidos */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6">
            <div>
              <h3 className="text-white font-semibold mb-4">Sigueme</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/servicios" className="text-purple-100 hover:text-white transition-colors text-sm">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/sobre-mi" className="text-purple-100 hover:text-white transition-colors text-sm">
                    Sobre Mí
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-purple-100 hover:text-white transition-colors text-sm">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li className="text-purple-100 text-sm">
                  Email: analypg@gmail.com
                </li>
                <li className="text-purple-100 text-sm">
                  Tel: +1 8096051317
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-400 mt-8 pt-8">
          <p className="text-center text-purple-100 text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados por Ana Lidia Coach
          </p>
        </div>
      </div>
    </footer>
  )
}