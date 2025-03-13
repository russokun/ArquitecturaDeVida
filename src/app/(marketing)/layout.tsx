import Breadcrumbs from "@/components/features/breadcrumbs"
import MarketingCta from "@/components/features/marketingCta"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Breadcrumbs />

      {/* Marketing common sections */}
      <div className="container mx-auto px-4">
        {children}
        <MarketingCta />
      </div>
    </div>
  )
}