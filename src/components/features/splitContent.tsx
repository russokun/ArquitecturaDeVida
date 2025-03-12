import type { ReactNode } from "react"
import Image from "next/image"

type SplitContentProps = {
  // Layout
  imagePosition?: "left" | "right"
  minHeight?: string

  // Image
  imageSrc: string
  imageAlt: string
  imagePriority?: boolean

  // Content
  title?: string
  titleClassName?: string
  content: ReactNode
  contentClassName?: string

  // Container
  className?: string

  // Button
  buttonText?: string
  buttonUrl?: string
  buttonClassName?: string

  // Background colors
  imageBg?: string
  contentBg?: string
}

export default function SplitContent({
  // Layout
  imagePosition = "left",
  minHeight = "min-h-[600px]",

  // Image
  imageSrc,
  imageAlt,
  imagePriority = false,

  // Content
  title,
  titleClassName = "",
  content,
  contentClassName = "",

  // Container
  className = "",

  // Button
  buttonText,
  buttonUrl = "#",
  buttonClassName = "",

  // Background colors
  imageBg = "bg-gray-100",
  contentBg = "bg-white",
}: SplitContentProps) {
  return (
    <section className={`flex flex-col md:flex-row w-full ${minHeight} ${className}`}>
      {/* Image Container */}
      <div className={`w-full md:w-1/2 relative ${imageBg} ${imagePosition === "right" ? "md:order-2" : "md:order-1"}`}>
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          priority={imagePriority}
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div
        className={`w-full md:w-1/2 flex flex-col ${contentBg} ${
          imagePosition === "right" ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 h-full">
          {title && <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ${titleClassName}`}>{title}</h2>}

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

