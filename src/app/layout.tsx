import type { Metadata } from "next"
import "./globals.css"
import Footer from "@/components/common/footer"
import Navbar from "@/components/common/navbar"
import CertificationBadges from "@/components/common/certificationBadges"

export const metadata: Metadata = {
  title: "Arq de Vida",
  description: "Facilitación y diseño de experiencias transformadoras",
  icons: {
    icon: [
      {
        url: "/imgs/common/favicon.png",
        href: "/imgs/common/favicon.png",
      }
    ],
    shortcut: ["/imgs/common/favicon.png"],
    apple: [
      {
        url: "/imgs/common/favicon.png",
        sizes: "180x180",
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
    <html lang="es">
      <head>
        <title>Arq de Vida</title>
        <meta
          name="description"
          content="Facilitación y diseño de experiencias transformadoras"
        />
        <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          {children}
          <CertificationBadges />
          <Footer />
        </div>
      </body>
    </html>
  )
}
