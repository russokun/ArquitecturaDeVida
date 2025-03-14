'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ClientGradientProps {
  bgColor?: string
  bgGradient?: string
  className?: string
  children: ReactNode
}

export default function ClientGradient({ bgColor, bgGradient, className, children }: ClientGradientProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Calculate visibility based on element's position
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = viewportHeight / 2
      const distance = Math.abs(elementCenter - viewportCenter)
      
      // Make the transition zone larger
      const maxDistance = viewportHeight
      let progress = 1 - (distance / maxDistance)
      
      // Suavizar la transición
      progress = Math.min(1, Math.max(0.2, progress))
      
      ref.current.style.setProperty('--scroll-progress', progress.toString())
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const gradientStyle = {
    backgroundColor: bgColor || 'white',
    background: bgGradient ? 
      `linear-gradient(135deg, rgba(254, 243, 199, 0.9), rgba(239, 68, 68, 0.6))` : 
      bgColor || 'white',
    opacity: 'var(--scroll-progress, 0.2)',
  }

  return (
    <div 
      ref={ref}
      className={`absolute inset-0 transition-opacity duration-500 ${className || ''}`}
      style={gradientStyle}
    >
      {children}
    </div>
  )
}