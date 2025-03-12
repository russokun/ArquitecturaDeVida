import Image from 'next/image'
import Link from 'next/link'

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
  bgColor: string
  textColor: string
  description?: string
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
}

const ContentSection = ({
  bgColor,
  textColor,
  description,
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
}: ContentSectionProps) => {
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

  const contentOrder = imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'

  return (
    <section className={`relative ${bgColor} overflow-hidden py-16`}>
      {decorativeElements && renderDecorativeElements()}

      <div className={`container mx-auto px-4 flex flex-col ${contentOrder} items-center gap-8`}>
        {/* Image Section */}
        {imageSrc && (
          <div className="md:w-1/2 relative z-10">
            <Image
              src={imageSrc}
              alt={imageAlt || ''}
              width={500}
              height={600}
              className="object-contain"
            />
          </div>
        )}

        {/* Content Section */}
        <div className={`md:w-1/2 ${textColor} z-10 space-y-6`}>
          {description ? (
            <p className="text-lg md:text-xl leading-relaxed">{description}</p>
          ) : (
            children
          )}

          {buttonText && buttonUrl && (
            <div className="mt-8">
              <Link
                href={buttonUrl}
                className={`inline-block px-8 py-4 rounded-full font-bold text-white 
                  ${
                    buttonGradient
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600'
                      : 'bg-cyan-400 hover:bg-cyan-500'
                  } 
                  transition-all`}
              >
                {buttonText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContentSection
