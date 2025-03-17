'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

interface VideoPlayerProps {
  src: string
  title: string
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  const [showControls, setShowControls] = useState(false)
  const [isFrameLoaded, setIsFrameLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      // Establecer tiempo en 0.1 para cargar el primer frame
      video.currentTime = 0.1
    }

    const handleTimeUpdate = () => {
      if (video.currentTime >= 0.1 && !isFrameLoaded) {
        // El primer frame está cargado
        video.currentTime = 0
        setIsFrameLoaded(true)
      }
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [isFrameLoaded])

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
    <div 
      className="relative aspect-video bg-gray-100 cursor-pointer overflow-hidden" 
      onClick={togglePlay}
    >
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

      {(!showControls && isFrameLoaded) && (
        <div className="absolute inset-0 flex items-center justify-center group pointer-events-none">
          {/* Overlay con gradiente */}
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/40" />
          
          {/* Botón de play */}
          <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center transform transition-all duration-300 shadow-lg group-hover:scale-110">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-gray-900 translate-x-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}