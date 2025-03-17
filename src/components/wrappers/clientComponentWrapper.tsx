'use client'

import { useEffect, useState } from 'react'

interface ClientComponentWrapperProps {
  children: React.ReactNode
}

export default function ClientComponentWrapper({ children }: ClientComponentWrapperProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <>{children}</>
}