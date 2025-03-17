'use client'

import { useEffect, RefObject } from 'react'

export const useScrollGradient = (elementRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!elementRef.current) return

    // Initialize with the fade-out class
    elementRef.current.classList.add('fade-out')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('fade-out')
            entry.target.classList.add('fade-in')
          } else {
            entry.target.classList.remove('fade-in')
            entry.target.classList.add('fade-out')
          }
        })
      },
      {
        rootMargin: '0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
      }
    )

    observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [elementRef])
}