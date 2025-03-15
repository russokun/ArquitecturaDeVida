'use client'

import { useState } from 'react'

interface VideoPlayerProps {
  src: string
  title: string
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative aspect-video w-full">
      {!isPlaying ? (
        <div 
          className="absolute inset-0 bg-gray-900/20 flex items-center justify-center cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg
              className="w-8 h-8 text-gray-900 translate-x-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      ) : (
        <video
          src={src}
          controls
          autoPlay
          className="w-full h-full"
          title={title}
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      )}
    </div>
  )
}