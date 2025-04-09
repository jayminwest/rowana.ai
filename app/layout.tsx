import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider" // Re-import ThemeProvider
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
    // Use ThemeProvider again, add suppressHydrationWarning
    <html lang="en" suppressHydrationWarning>
      {/* Removed bg-black text-white - handled by theme in globals.css */}
      {/* Re-add font class */}
      <body className={`${spaceGrotesk.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Set default theme to dark
          enableSystem={false} // Disable system preference if you want to force dark
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

// Removed extra import './globals.css'
// ThemeProvider import restored
