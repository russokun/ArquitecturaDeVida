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
          className="absolute inset-0 flex items-center justify-center cursor-pointer group"
          onClick={togglePlay}
        >
          {/* Overlay con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/70" />
          
          {/* Botón de play con efecto hover */}
          <div className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 hover:bg-white shadow-xl">
            <svg
              className="w-8 h-8 text-gray-900 translate-x-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}