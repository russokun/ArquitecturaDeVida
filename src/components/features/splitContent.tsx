'use client'

import type { ReactNode } from "react"
import Image from "next/image"
import { useState } from "react"

type SplitContentProps = {
  imagePosition?: "left" | "right"
  minHeight?: string
  imageSrc: string
  imageAlt: string
  imagePriority?: boolean
  title?: string
  titleClassName?: string
  content: ReactNode
  contentClassName?: string
  className?: string
  buttonText?: string
  buttonUrl?: string
  buttonClassName?: string
  imageBg?: string
  contentBg?: string
}

export default function SplitContent({
  imagePosition = "left",
  minHeight = "min-h-[600px]",
  imageSrc,
  imageAlt,
  imagePriority = false,
  title,
  titleClassName = "",
  content,
  contentClassName = "",
  className = "",
  buttonText,
  buttonUrl = "#",
  buttonClassName = "",
  imageBg = "bg-gray-100",
  contentBg = "bg-white",
}: SplitContentProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <section className={`flex flex-col md:flex-row w-full ${minHeight} ${className}`}>
      {/* Image Container */}
      <div 
        className={`w-full md:w-1/2 relative ${imageBg} ${
          imagePosition === "right" ? "md:order-2" : "md:order-1"
        } overflow-hidden`}
      >
        <div className="relative w-full h-full min-h-[300px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={imagePriority}
            className={`object-cover transition-opacity duration-300 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="(max-width: 768px) 100vw, 50vw"
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      </div>

      {/* Content Container */}
      <div
        className={`w-full md:w-1/2 flex flex-col ${contentBg} ${
          imagePosition === "right" ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 h-full">
          {title && (
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ${titleClassName}`}>
              {title}
            </h2>
          )}

          <div className={`space-y-4 ${contentClassName}`}>{content}</div>

          {buttonText && (
            <a
              href={buttonUrl}
              className={`inline-block px-8 py-3 mt-8 rounded-full font-medium transition-colors text-white ${buttonClassName}`}
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
