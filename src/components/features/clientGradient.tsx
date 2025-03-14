'use client'

import { useEffect, useRef, ReactNode, useState } from 'react'

interface ClientGradientProps {
  bgColor?: string
  bgGradient?: string
  children: ReactNode
}

export default function ClientGradient({ bgColor, bgGradient, children }: ClientGradientProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Solo agregar event listeners después del montaje
    if (!ref.current) return

    const updateGradient = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Calculate distance from the center of the viewport to the center of the element
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = viewportHeight / 2
      const distance = Math.abs(elementCenter - viewportCenter)
      
      // Calculate opacity based on distance (closer = more opaque)
      const maxDistance = viewportHeight / 1.5
      const opacity = Math.max(0, Math.min(1, 1 - (distance / maxDistance)))
      
      ref.current.style.setProperty('--scroll-progress', opacity.toString())
    }

    // Initial update
    updateGradient()

    window.addEventListener('scroll', updateGradient, { passive: true })
    window.addEventListener('resize', updateGradient, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateGradient)
      window.removeEventListener('resize', updateGradient)
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      {/* Base background */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: bgColor || 'white' }}
      />
      
      {/* Gradient overlay with transition */}
      <div 
        ref={ref}
        className={`
          absolute inset-0 transition-opacity duration-300
          ${isMounted ? 'ease-out' : 'opacity-0'}
        `}
        style={{
          backgroundColor: bgGradient || 'transparent',
          opacity: 'var(--scroll-progress, 0)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )
}