'use client'

import { useState, useRef, useCallback } from 'react'

interface VideoPlayerProps {
  src: string
  title: string
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setShowControls(true)
    } else {
      video.pause()
      setShowControls(false)
    }
  }, [])

  const handleVideoEnd = useCallback(() => {
    setShowControls(false)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }, [])

  return (
    <div className="relative w-full h-full bg-gray-100">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        title={title}
        preload="metadata"
        controls={showControls}
        onEnded={handleVideoEnd}
        playsInline
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {!showControls && (
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer group touch-none"
          onClick={togglePlay}
        >
          {/* Overlay con gradiente mejorado para móviles */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/80 sm:from-black/70 sm:via-black/50 sm:to-black/70" />
          
          {/* Botón de play con efecto hover adaptado para móviles */}
          <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center transform transition-all duration-300 active:scale-95 group-hover:scale-110 group-hover:bg-white shadow-xl">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-gray-900 translate-x-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          {/* Indicador de toque para móviles */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm opacity-60 pointer-events-none sm:hidden">
            Toca para reproducir
          </div>
        </div>
      )}
    </div>
  )
}