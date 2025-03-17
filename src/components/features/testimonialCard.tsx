'use client'

import Image from 'next/image'
import { useState } from 'react'
import VideoPlayer from '@/components/common/videoPlayer'

interface TestimonialProps {
  name: string
  profession: string
  country: string
  countryCode: string
  testimonialText?: string
  imageUrl?: string
  videoUrl?: string
}

export default function TestimonialCard({
  name,
  profession,
  country,
  countryCode,
  testimonialText,
  imageUrl,
  videoUrl
}: TestimonialProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const flagUrl = `https://flags.fmcdn.net/data/flags/mini/${countryCode.toLowerCase()}.png`

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
      {/* Video o Imagen */}
      <div className="w-full">
        {videoUrl ? (
          <div className="aspect-[16/9]">
            <VideoPlayer
              src={videoUrl}
              title={`Testimonio de ${name}`}
            />
          </div>
        ) : imageUrl && (
          <div className="relative aspect-[4/3]">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className={`object-cover transition-opacity duration-300 ${
                isImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
        )}
      </div>

      {/* Información del Testimonial */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-0.5">{name}</h3>
            <p className="text-sm text-gray-600">{profession}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">{country}</span>
            <img
              src={flagUrl}
              alt={`Bandera de ${country}`}
              className="w-6 h-4 rounded-sm"
            />
          </div>
        </div>

        {/* Texto del Testimonial */}
        {!videoUrl && testimonialText && (
          <div className="mt-2 flex-1">
            <p className="text-gray-700 text-sm leading-relaxed">{testimonialText}</p>
          </div>
        )}
      </div>
    </div>
  )
}