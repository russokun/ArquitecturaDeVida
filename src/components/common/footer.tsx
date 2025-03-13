'use client'

import Link from "next/link"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">ARQ DE VIDA</h3>
            <p className="text-gray-300">
              Facilitación y experiencias formativas creativas para transformar tu manera de conectar y enseñar.
            </p>
          </div>

         

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Email: analypg@gmail.com
              </li>
              <li className="text-gray-300">
                Numero: +1 8096051317
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/analidiapenacoach/" className="text-gray-300 hover:text-pink-500 transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="https://www.facebook.com/ana.l.penagrullon" className="text-gray-300 hover:text-blue-500 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="https://www.linkedin.com/in/ana-lidia-pe%C3%B1a-grullon-852a6760/" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href="https://www.youtube.com/channel/UCbYoJ7QB6BQhNaOozBZYTTw" className="text-gray-300 hover:text-red-500 transition-colors">
                <Youtube size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} ARQ DE VIDA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer