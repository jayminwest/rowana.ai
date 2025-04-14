"use client"

"use client"

import { useEffect, useState } from "react"
import Image from "next/image" // Import the Image component
import Link from "next/link" // Import Link for external navigation (or use <a>)
import { Github } from "lucide-react" // Import the Github icon
import { Button } from "@/components/ui/button" // Import the Button component
import { MatrixText } from "@/components/ui/matrix-text"
import RowanaLogo from "/public/RowanaLogoSmall.png" // Import the logo image

const GITHUB_URL = "https://github.com/rowana-ai/rowana-core" // Define the repo URL

export default function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Animated background - Gradient directly between primary and accent */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 animate-gradient" // Removed via-background
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 1s ease-in-out" }}
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        {/* Removed single quotes inside url() */}
        <div
          className="h-full w-full bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bS02LTI0aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptLTYtMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6Ii8+PC9nPjwvZz48L3N2Zz4=)]"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 2s ease-in-out",
            animation: "fadeIn 2s ease-out forwards",
          }}
        />
      </div>

      {/* Animated circles - Use new theme colors */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" // Use primary color
        style={{
          opacity: isVisible ? 0.3 : 0,
          transition: "opacity 1.5s ease-in-out, transform 10s ease-in-out infinite",
          animation: "pulse 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" // Use accent color
        style={{
          opacity: isVisible ? 0.3 : 0,
          transition: "opacity 1.5s ease-in-out, transform 15s ease-in-out infinite",
          animation: "pulse 15s ease-in-out infinite alternate",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          {/* Logo and Text Container */}
          <div className="flex justify-center items-center mb-8">
            <Image
              src={RowanaLogo}
              alt="Rowana Logo"
              width={810} // Intrinsic width
              height={646} // Intrinsic height
              className="w-20 h-auto sm:w-24" // Control displayed size, maintain aspect ratio
              priority // Load the logo early as it's in the hero
            />
            {/* Add Rowana Text Next to Logo */}
            <span className="ml-3 text-3xl font-bold text-secondary-foreground">
              Rowana
            </span>
          </div>
          {/* GitHub Star Button - Added below Logo/Text */}
          <div className="flex justify-center mt-4 mb-8"> {/* Centering container with margin */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Star rowana-ai/rowana-core on GitHub"
            >
              {/* Using default size, outline variant */}
              <Button variant="outline" className="flex items-center gap-2">
                <Github className="h-5 w-5" /> {/* Slightly larger icon */}
                <span>Star on GitHub</span> {/* More descriptive text */}
              </Button>
            </a>
          </div>
          {/* Increased bottom margin and added vertical padding to prevent text overlap */}
          <div className="mb-8 py-2"> {/* Added py-2 and changed mb-6 to mb-8 */}
            <MatrixText
              text="control how ai sees your brand"
              // color prop removed, gradient applied within MatrixText
              initialDelay={500}
              letterAnimationDuration={1000}
              letterInterval={120}
              delayBetweenPasses={3000} // 3 second delay between passes
              // className="h-auto" // Removed h-auto
            />
          </div>
          <p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
            }}
          >
            Tired of AI getting your startup wrong? Rowana <strong>analyzes, optimizes, and structures</strong> your web content, ensuring
            LLMs like ChatGPT & Perplexity can <strong>find, understand, and accurately represent</strong> your innovation.
          </p>
        </div>
      </div>
    </div>
  )
}
