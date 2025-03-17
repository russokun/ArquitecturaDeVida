import type { Metadata } from "next"
import "./globals.css"
import Footer from "@/components/common/footer"
import Navbar from "@/components/common/navbar"
import CertificationBadges from "@/components/common/certificationBadges"
import WhatsAppButton from "@/components/common/whatsAppButton"
import SocialSidebar from "@/components/common/socialSidebar"

export const metadata: Metadata = {
  title: "Arq de Vida",
  description: "Facilitación y diseño de experiencias transformadoras",
  icons: {
    icon: [
      {
        url: "/imgs/common/favicon.png",
        href: "/imgs/common/favicon.png",
        sizes: "512x512", // Aumentado el tamaño del favicon
        type: "image/png",
      }
    ],
    shortcut: ["/imgs/common/favicon.png"],
    apple: [
      {
        url: "/imgs/common/favicon.png",
        sizes: "512x512", // Aumentado el tamaño para Apple
        type: "image/png",
      }
    ],
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <body className="font-sans overflow-x-hidden w-screen max-w-[100vw]">
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
          {children}
          <CertificationBadges />
          <Footer />
        </div>
        <WhatsAppButton />
        <SocialSidebar />
      </body>
    </html>
  )
}
