'use client'

import Link from "next/link"
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
    { icon: Youtube, href: "#", color: "hover:text-red-600" },
  ]

  const quickLinks = [
    { text: "Inicio", href: "/" },
    { text: "Sobre Mí", href: "/about" },
    { text: "Testimonios", href: "/testimonios" },
    { text: "Recursos", href: "/resources" },
    { text: "Servicios", href: "/services" },
  ]

  const contactInfo = [
    { 
      icon: Mail, 
      text: "analypg@gmail.com",
      href: "mailto:analypg@gmail.com",
    },
    { 
      icon: Phone, 
      text: "+1 8096051317",
      href: "#",
    },
    { 
      icon: MapPin, 
      text: "Republica Dominicana",
      href: "#",
    },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                ARQ DE VIDA
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Facilitación y experiencias formativas creativas para transformar tu manera de conectar y enseñar.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link 
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors p-2 rounded-full hover:bg-gray-800`}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-100">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-100">Contacto</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <Link
                    href={info.href}
                    className="flex items-center text-gray-400 hover:text-white transition-colors group"
                  >
                    <info.icon size={18} className="mr-3 group-hover:text-cyan-400" />
                    <span>{info.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-100">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir recursos gratuitos y actualizaciones
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all font-medium"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-8">
          <p className="text-center text-gray-400">
            &copy; {currentYear} ARQ DE VIDA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer