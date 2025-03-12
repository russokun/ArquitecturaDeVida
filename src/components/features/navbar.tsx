"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-14 w-40">
             
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="/" active>
              INICIO
            </NavLink>
            <NavLink href="/quien-soy">QUIEN SOY</NavLink>
            <NavLink href="/testimonios">TESTIMONIOS</NavLink>
            <NavLink href="/recursos">RECURSOS</NavLink>
            <NavLink href="/servicios">SERVICIOS</NavLink>
           
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-3">
            <MobileNavLink href="/" active>
              INICIO
            </MobileNavLink>
            <MobileNavLink href="/quien-soy">QUIEN SOY</MobileNavLink>
            <MobileNavLink href="/testimonios">TESTIMONIOS</MobileNavLink>
            <MobileNavLink href="/recursos">RECURSOS</MobileNavLink>
            <MobileNavLink href="/servicios">SERVICIOS</MobileNavLink>
            <MobileNavLink href="/blog">BLOG</MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium transition-colors ${
        active ? "text-red-600 border-b-2 border-red-600" : "text-gray-700 hover:text-red-600"
      }`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-base font-medium ${
        active ? "text-red-600 font-bold" : "text-gray-700 hover:text-red-600"
      }`}
    >
      {children}
    </Link>
  )
}

