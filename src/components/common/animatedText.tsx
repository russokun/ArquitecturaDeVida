'use client'

import { useEffect, useRef } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export default function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
  const elementRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    setTimeout(() => {
      element.style.opacity = '1'
      element.style.transform = 'translateY(0)'
    }, delay)
  }, [delay])

  return (
    <p 
      ref={elementRef}
      className={`transition-all duration-1000 opacity-0 translate-y-4 ${className}`}
    >
      {text}
    </p>
  )
}
