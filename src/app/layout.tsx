import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/features/navbar"
import Footer from "@/components/common/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arq de Vida - Ana Lidia",
  description: "Facilitación y experiencias formativas creativas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
