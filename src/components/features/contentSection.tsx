'use client'
import { ReactNode, useEffect, useRef } from 'react'
import Image from 'next/image'

interface ContentSectionProps {
  children?: ReactNode
  bgColor?: string
  bgGradient?: string
  bgImage?: string
  bgImageOverlay?: string
  textColor?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  buttonText?: string
  buttonUrl?: string
  buttonGradient?: boolean
  useContainer?: boolean
  minHeight?: string
  contentWidth?: 'full' | 'half'
  contentAlign?: 'left' | 'right' | 'center'
  verticalAlign?: 'top' | 'center' | 'bottom'
  contentMargin?: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
  useScrollEffect?: boolean
  className?: string
  descriptionAsChild?: boolean
  descriptionPosition?: 'before' | 'after'
  imageStyle?: string
  orderImageFirst?: boolean
  imageHeight?: string
}

export default function ContentSection({
  children,
  bgColor = 'bg-white',
  bgGradient,
  bgImage,
  bgImageOverlay,
  textColor = 'text-gray-900',
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  buttonText,
  buttonUrl,
  buttonGradient,
  useContainer = true,
  minHeight = 'min-h-[600px]',
  contentWidth = 'full',
  contentAlign = 'left',
  verticalAlign = 'center',
  contentMargin,
  useScrollEffect = false,
  className = '',
  descriptionAsChild = false,
  descriptionPosition = 'after',
  imageStyle = 'object-cover',
  orderImageFirst = false,
  imageHeight = 'h-[600px]'
}: ContentSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!useScrollEffect) return

    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

      if (isVisible) {
        section.classList.add('scroll-gradient-active')
      } else {
        section.classList.remove('scroll-gradient-active')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [useScrollEffect])

  const verticalAlignClass = {
    top: 'items-start',
    center: 'items-center',
    bottom: 'items-end'
  }[verticalAlign]

  const alignClass = {
    left: 'text-left',
    right: 'text-right',
    center: 'text-center'
  }[contentAlign]

  const marginStyles = {
    marginTop: contentMargin?.top || '0',
    marginRight: contentMargin?.right || '0',
    marginBottom: contentMargin?.bottom || '0',
    marginLeft: contentMargin?.left || '0',
  }

  const ContentWrapper = () => (
    <div 
      className={`
        ${contentWidth === 'half' ? 'w-full lg:w-1/2' : 'w-full'} 
        ${alignClass}
        relative z-10
        flex flex-col ${verticalAlignClass} justify-center
      `}
      style={marginStyles}
    >
      {descriptionAsChild && descriptionPosition === 'before' && description && (
        <p className={`mb-8 whitespace-pre-line ${textColor}`}>{description}</p>
      )}
      {children}
      {descriptionAsChild && descriptionPosition === 'after' && description && (
        <p className={`mt-8 whitespace-pre-line ${textColor}`}>{description}</p>
      )}
      {buttonText && buttonUrl && (
        <a 
          href={buttonUrl}
          className={`
            inline-block px-8 py-3 mt-8 rounded-full font-medium
            ${buttonGradient 
              ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
            }
          `}
        >
          {buttonText}
        </a>
      )}
    </div>
  )

  const ImageContainer = ({  }: { position: 'left' | 'right' }) => (
    <div className={`w-full lg:w-1/2 relative flex items-end ${imageHeight}`}>
      <Image
        src={imageSrc!}
        alt={imageAlt || ''}
        fill
        className={`${imageStyle} rounded-lg`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        quality={100}
        priority
      />
    </div>
  )

  return (
    <section 
      ref={sectionRef}
      className={`
        relative
        ${minHeight}
        ${bgColor}
        ${bgGradient ? 'scroll-gradient' : ''}
        ${className}
      `}
      style={bgGradient ? { background: bgGradient } : undefined}
    >
      {/* Background Image */}
      {bgImage && (
        <>
          <div className="absolute inset-0">
            <Image
              src={bgImage}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          {bgImageOverlay && (
            <div className={`absolute inset-0 ${bgImageOverlay}`}></div>
          )}
        </>
      )}

      {/* Content Container */}
      <div className={`relative h-full ${useContainer ? 'container mx-auto px-4' : ''}`}>
        <div className={`flex flex-col lg:flex-row h-full ${verticalAlignClass} justify-center`}>
          {/* Left Side Content */}
          {imagePosition === 'left' && !orderImageFirst && imageSrc && <ImageContainer position="left" />}
          
          {/* Main Content */}
          {!description || descriptionAsChild ? (
            <ContentWrapper />
          ) : (
            <div className={`${contentWidth === 'half' ? 'w-full lg:w-1/2' : 'w-full'}`}>
              <p 
                className={`whitespace-pre-line ${textColor}`}
                style={marginStyles}
              >
                {description}
              </p>
            </div>
          )}

          {/* Image after content if orderImageFirst is true */}
          {imagePosition === 'left' && orderImageFirst && imageSrc && <ImageContainer position="left" />}

          {/* Right Side Image */}
          {imagePosition === 'right' && imageSrc && <ImageContainer position="right" />}
        </div>
      </div>
    </section>
  )
}
