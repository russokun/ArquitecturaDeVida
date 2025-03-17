'use client'

import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/analidiapenacoach/?hl=es-la',
    icon: Instagram,
    color: 'hover:text-pink-500',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/ANALIDIAARQUITECTURADEVIDA?_rdc=2&_rdr#',
    icon: Facebook,
    color: 'hover:text-blue-600',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ana-lidia-pe%C3%B1a-grullon-852a6760/',
    icon: Linkedin,
    color: 'hover:text-blue-500',
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/channel/UCbYoJ7QB6BQhNaOozBZYTTw',
    icon: Youtube,
    color: 'hover:text-red-600',
  },
]

export default function SocialSidebar() {
  return (
    <>
      {/* Versión Desktop - Sidebar */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col gap-4 bg-white/80 backdrop-blur-sm p-3 rounded-l-lg shadow-lg z-40">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-600 ${link.color} transition-colors p-2 rounded-full hover:bg-gray-100`}
          >
            <link.icon size={24} />
          </Link>
        ))}
      </div>

      {/* Versión Mobile - Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 py-3">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 ${link.color} transition-colors p-2 rounded-full hover:bg-gray-100 active:scale-95`}
              >
                <link.icon size={24} />
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}