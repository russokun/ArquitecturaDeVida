'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActiveLink = (path: string) => pathname === path

  const navLinks = [
    { text: "Inicio", href: "/" },
    { text: "Sobre Mí", href: "/about" },
    { text: "Testimonios", href: "/testimonios" },
    { text: "Recursos", href: "/resources" },
    { text: "Servicios", href: "/services" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="relative w-60 h-60">
            <Image
              src="/imgs/common/Logo.png"
              alt="Arq de Vida Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-gray-600 hover:text-blue-600 transition-colors
                  ${isActiveLink(link.href) && 'text-blue-600'}
                  group
                `}
              >
                {link.text}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300
                    ${isActiveLink(link.href) ? 'scale-x-100' : 'scale-x-0'}
                    group-hover:scale-x-100
                  `}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          md:hidden 
          absolute 
          w-full 
          bg-white 
          shadow-lg 
          transition-all 
          duration-300 
          ease-in-out
          ${isMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 invisible'}
        `}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                block px-3 py-2 rounded-md text-base font-medium
                relative overflow-hidden
                ${
                  isActiveLink(link.href)
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }
                transition-colors
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
              {isActiveLink(link.href) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
