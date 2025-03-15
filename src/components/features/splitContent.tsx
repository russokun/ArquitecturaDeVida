'use client'

import type { ReactNode } from "react"
import Image from "next/image"
import { useState } from "react"

type SplitContentProps = {
  imagePosition?: "left" | "right"
  minHeight?: string
  imageSrc?: string
  imageAlt?: string
  imagePriority?: boolean
  title?: ReactNode
  titleClassName?: string
  content: ReactNode
  contentClassName?: string
  className?: string
  buttonText?: string
  buttonUrl?: string
  buttonClassName?: string
  imageBg?: string
  contentBg?: string
  useContainer?: boolean
}

export default function SplitContent({
  imagePosition = "left",
  minHeight = "",
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
  useContainer = false,
}: SplitContentProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const ContentSection = () => (
    <div
      className={`
        ${imageSrc ? 'w-full lg:w-1/2' : 'w-full'}
        ${contentBg} 
        order-2 lg:order-none
        py-8 md:py-12 lg:py-16
        px-6 md:px-8 lg:px-12
        flex items-center
      `}
    >
      <div className="w-full max-w-xl">
        {title && (
          <div className={`mb-6 ${titleClassName}`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              {title}
            </h2>
          </div>
        )}

        <div className={`space-y-4 ${contentClassName}`}>{content}</div>

        {buttonText && (
          <a
            href={buttonUrl}
            className={`inline-block px-8 py-3 mt-8 rounded-full font-medium transition-all duration-300 text-white ${buttonClassName}`}
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  )

  const ImageSection = () => imageSrc ? (
    <div 
      className={`
        w-full lg:w-1/2
        ${imageBg} 
        order-1 lg:order-none
        overflow-hidden
        relative
      `}
    >
      <div className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-full relative">
        <Image
          src={imageSrc}
          alt={imageAlt || ''}
          fill
          priority={imagePriority}
          className={`
            object-cover object-center
            
            hover:scale-[1.02] transition-transform duration-700
            ${isImageLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          sizes="(max-width: 1024px) 100vw, 50vw"
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
    </div>
  ) : null

  const Content = () => (
    <div className="w-full flex flex-col lg:flex-row min-h-full">
      {imagePosition === "left" && imageSrc && <ImageSection />}
      <ContentSection />
      {imagePosition === "right" && imageSrc && <ImageSection />}
    </div>
  )

  return useContainer ? (
    <section className={`container mx-auto ${className}`}>
      <Content />
    </section>
  ) : (
    <div className={`w-full ${className}`}>
      <Content />
    </div>
  )
}
