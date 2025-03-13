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
  useContainer = false,
}: SplitContentProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const ContentSection = () => (
    <div
      style={{ flex: '1 0 50%' }}
      className={`${contentBg} order-1 lg:order-none`}
    >
      <div className="flex flex-col justify-center h-full px-8 md:px-12 lg:px-16 py-12">
        {title && (
          <div className={`mb-6 ${titleClassName}`}>
            {title}
          </div>
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
  )

  const ImageSection = () => (
    <div 
      style={{ flex: '1 0 50%' }}
      className={`${imageBg} order-2 lg:order-none overflow-hidden relative`}
    >
      <div className="relative aspect-[4/3] lg:h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={imagePriority}
          className={`object-cover transition-opacity duration-300 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="(max-width: 1024px) 100vw, 50vw"
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
    </div>
  )

  const Content = () => (
    <div className="w-full flex flex-col lg:flex-row">
      {imagePosition === "left" ? (
        <>
          <ImageSection />
          <ContentSection />
        </>
      ) : (
        <>
          <ContentSection />
          <ImageSection />
        </>
      )}
    </div>
  )

  return useContainer ? (
    <section className="container mx-auto px-4">
      <Content />
    </section>
  ) : (
    <div className={`flex flex-col ${className}`}>
      <Content />
    </div>
  )
}
