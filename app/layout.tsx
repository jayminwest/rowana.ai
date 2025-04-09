import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
// ThemeProvider import removed again
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Rowana - Control How AI Sees Your Brand",
  description:
    "Rowana automatically structures your content, ensuring LLMs like ChatGPT & Perplexity represent your innovation accurately.",
  generator: 'v0.dev',
  // Add icons configuration
  icons: {
    icon: "/RowanaLogoSmall.png", // Standard favicon
    apple: "/RowanaLogoWhiteBG.png", // Apple touch icon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Revert to direct dark class, remove ThemeProvider
    <html lang="en" className="dark">
      {/* Removed bg-black text-white - handled by theme in globals.css */}
      {/* Re-add font class */}
      <body className={`${spaceGrotesk.className}`}>
        {children}
      </body>
    </html>
  )
}

// Removed extra import './globals.css'
// ThemeProvider import removed again
