'use client'

import Link from 'next/link'
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/analidiapenacoach/?hl=es-la',
    icon: Instagram,
    bgColor: 'bg-pink-500 hover:bg-pink-600'
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/ANALIDIAARQUITECTURADEVIDA?_rdc=2&_rdr#',
    icon: Facebook,
    bgColor: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ana-lidia-pe%C3%B1a-grullon-852a6760/',
    icon: Linkedin,
    bgColor: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCbYoJ7QB6BQhNaOozBZYTTw',
    icon: Youtube,
    bgColor: 'bg-red-600 hover:bg-red-700'
  }
]

export default function SocialSidebar() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20">
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.bgColor} text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl`}
            aria-label={social.name}
          >
            <Icon size={24} />
          </Link>
        )
      })}
    </div>
  )
}