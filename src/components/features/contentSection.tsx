'use client'

import Image from 'next/image'
import Link from 'next/link'
import ClientGradient from './clientGradient'

interface DecorativeShapes {
  circles?: boolean
  rectangles?: boolean
  customShapes?: boolean
}

interface DecorativeColors {
  primary: string
  secondary: string
  tertiary: string
}

interface ContentSectionProps {
  className?: string
  bgColor?: string
  bgGradient?: string
  bgImage?: string
  bgImageOverlay?: string
  minHeight?: string
  textColor: string
  description?: string
  descriptionAsChild?: boolean
  descriptionPosition?: 'before' | 'after'
  imageSrc?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  buttonText?: string
  buttonUrl?: string
  buttonGradient?: boolean
  decorativeElements?: boolean
  decorativeShapes?: DecorativeShapes
  decorativeColors?: DecorativeColors
  children?: React.ReactNode
  useContainer?: boolean
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
}

export default function ContentSection({
  className,
  bgColor,
  bgGradient,
  bgImage,
  bgImageOverlay = 'bg-black/40',
  minHeight = 'min-h-screen',
  textColor,
  description,
  descriptionAsChild = false,
  descriptionPosition = 'after',
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  buttonText,
  buttonUrl,
  buttonGradient,
  decorativeElements,
  decorativeShapes,
  decorativeColors,
  children,
  useContainer = true,
  contentWidth = 'full',
  contentAlign = 'center',
  verticalAlign = 'center',
  contentMargin,
  useScrollEffect = false,
}: ContentSectionProps) {
  const renderDecorativeElements = () => {
    if (!decorativeElements || !decorativeShapes || !decorativeColors) return null

    return (
      <>
        {decorativeShapes.circles && (
          <>
            <div className={`absolute right-20 top-10 w-32 h-32 rounded-full ${decorativeColors.primary} opacity-20`}></div>
            <div className={`absolute left-40 bottom-20 w-24 h-24 rounded-full ${decorativeColors.secondary} opacity-30`}></div>
          </>
        )}
        {decorativeShapes.rectangles && (
          <>
            <div className={`absolute left-10 top-20 w-20 h-20 transform rotate-45 ${decorativeColors.tertiary} opacity-20`}></div>
            <div className={`absolute right-40 bottom-10 w-16 h-16 ${decorativeColors.primary} opacity-25`}></div>
          </>
        )}
      </>
    )
  }

  const getVerticalAlignClass = () => {
    switch (verticalAlign) {
      case 'top':
        return 'items-start pt-16'
      case 'bottom':
        return 'items-end pb-16'
      default:
        return 'items-center'
    }
  }

  const getMarginStyle = () => {
    if (!contentMargin) return {}
    return {
      marginTop: contentMargin.top || '',
      marginRight: contentMargin.right || '',
      marginBottom: contentMargin.bottom || '',
      marginLeft: contentMargin.left || '',
    }
  }

  const DescriptionContent = () => description ? (
    <div className="space-y-4 max-w-3xl">
      {description.split('\n').map((line, index) => (
        <p key={index} className="text-lg md:text-xl lg:text-2xl leading-relaxed">
          {line}
        </p>
      ))}
    </div>
  ) : null

  const renderContent = () => {
    if (!descriptionAsChild) {
      return (
        <>
          <DescriptionContent />
          {children}
        </>
      )
    }

    if (descriptionPosition === 'before') {
      return (
        <div className="space-y-8">
          <DescriptionContent />
          {children}
        </div>
      )
    }

    return (
      <div className="space-y-8">
        {children}
        <DescriptionContent />
      </div>
    )
  }

  const MainContent = (
    <div className={`w-full h-full flex ${getVerticalAlignClass()}`}>
      <div className={`${useContainer ? 'container mx-auto' : ''} w-full px-4 md:px-8 lg:px-12`}>
        <div className={`
          w-full flex flex-col lg:flex-row items-center gap-8 py-12
          ${contentAlign === 'right' ? 'lg:justify-end' : 
            contentAlign === 'left' ? 'lg:justify-start' : 'lg:justify-center'}
        `}>
          {imageSrc && imagePosition === 'left' && (
            <div className={`w-full ${contentWidth === 'half' ? 'lg:w-1/2' : 'lg:w-5/12'}`}>
              <div className="relative aspect-[16/9] lg:aspect-[4/3]">
                <Image
                  src={imageSrc}
                  alt={imageAlt || ''}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          )}
          
          <div 
            className={`
              ${textColor} space-y-8
              ${contentWidth === 'half' ? 'w-full lg:w-1/2' : 'w-full lg:w-7/12'}
              ${contentAlign === 'right' ? 'lg:text-right' : 
                contentAlign === 'left' ? 'lg:text-left' : 'text-center'}
            `}
            style={getMarginStyle()}
          >
            {renderContent()}
          </div>
          
          {imageSrc && imagePosition === 'right' && (
            <div className={`w-full ${contentWidth === 'half' ? 'lg:w-1/2' : 'lg:w-5/12'}`}>
              <div className="relative aspect-[16/9] lg:aspect-[4/3]">
                <Image
                  src={imageSrc}
                  alt={imageAlt || ''}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  const Background = bgImage ? (
    <>
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src={bgImage}
            alt="Background"
            fill
            className="object-cover"
            quality={90}
            sizes="100vw"
            priority
          />
        </div>
      </div>
      <div className={`absolute inset-0 ${bgImageOverlay}`} />
    </>
  ) : null

  return (
    <section 
      className={`
        relative
        ${minHeight}
        overflow-hidden
        flex flex-col
      `}
    >
      {useScrollEffect ? (
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ backgroundColor: bgColor || 'white' }} />
          <ClientGradient 
            bgColor={bgColor} 
            bgGradient={bgGradient}
            className={className}
          >
            {Background}
          </ClientGradient>
        </div>
      ) : (
        <div className={`absolute inset-0 ${className || ''}`} style={{ backgroundColor: bgColor || 'white' }}>
          {Background}
        </div>
      )}
      
      <div className="relative z-10 flex-grow flex">
        {decorativeElements && renderDecorativeElements()}
        {MainContent}
      </div>
    </section>
  )
}
