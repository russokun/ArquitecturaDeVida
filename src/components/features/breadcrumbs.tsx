'use client'

import { usePathname } from 'next/navigation'

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  const getPageTitle = () => {
    switch (pathname) {
      case '/services':
        return 'Servicios'
      case '/resources':
        return 'Recursos'
      case '/about':
        return 'Sobre Mí'  // Texto en español pero matching con la ruta en inglés
      default:
        return ''
    }
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-2 text-sm text-gray-600">
        <span>Inicio</span> {getPageTitle() && <span> / {getPageTitle()}</span>}
      </div>
    </div>
  )
}