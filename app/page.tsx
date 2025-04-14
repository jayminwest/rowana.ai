"use client" // Add use client directive for hooks

import { useState, useEffect } from "react" // Import hooks
import Image from "next/image"
import Link from "next/link" // Import Link for external navigation (or use <a>)
import { Github, Linkedin } from "lucide-react" // Import Github and Linkedin icons
import EmailForm from "@/components/email-form"
import AnimatedHero from "@/components/animated-hero"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button" // Import the Button component - Keep for footer button
// RowanaLogo import removed, will be used in AnimatedHero

const GITHUB_URL = "https://github.com/rowana-ai/rowana-core" // Define the repo URL - Keep for footer button

export default function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsFormVisible(true), 100) // Small delay
    return () => clearTimeout(timer)
  }, [])

  return (
    // Removed explicit bg-background, should inherit from body via globals.css
    // Removed relative positioning needed for old top button
    <main className="min-h-screen">
      {/* Top GitHub Star Button moved into AnimatedHero */}

      {/* Hero Section */}
      <section className="relative">
        <AnimatedHero />
        {/* Logo moved into AnimatedHero component */}
        {/* Negative margin remains unchanged as button is now inside Hero */}
        {/* Apply animation styles to this container */}
        <div
          className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-32 sm:-mt-36 pb-20 transition-all duration-1000 ease-out" // Added transition classes
          style={{
            opacity: isFormVisible ? 1 : 0,
            transform: isFormVisible ? "translateY(0)" : "translateY(30px)", // Slide up effect
          }}
        >
          <div className="max-w-md mx-auto">
            <EmailForm buttonText="tame the ai" />
          </div>
        </div>
      </section>

      {/* Problem Section - Consistent padding, bg-card for contrast */}
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg"> {/* Added padding inside card */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center lowercase"> {/* Reduced bottom margin */}
            ai is the new front door. is yours locked?
          </h2>
          {/* Added Sub-headline/Stat - Made more prominent */}
          <p className="text-lg font-semibold text-primary mb-6 text-center"> {/* Increased size, changed color, made bold, removed italic */}
            "Traditional search engine volume will drop by 25% by 2026, due to the rise of AI chatbots and other virtual agents." - Gartner
          </p>
          {/* Use text-muted-foreground */}
          <p className="text-lg text-muted-foreground">
            How do you <strong>know</strong> if AI truly understands your website? Without the right signals, LLMs
            misinterpret, misrepresent, or simply ignore your content. This isn't just traditional SEO; it's about ensuring
            <strong>accuracy</strong> in the new AI-driven answer engines. Don't let a confused AI bury your brand or become your unintended
            spokesperson. As users turn to AI for answers, inaccurate representation is a growing risk.
          </p>
        </div>
      </AnimatedSection>

      {/* Solution Section - Added subtle grid pattern, consistent text colors */}
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Subtle Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          {/* Removed single quotes inside url() */}
          <div className="h-full w-full bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHptMC02aC0JWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bS02LTI0aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptLTYtMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6Ii8+PC9nPjwvZz48L3N2Zz4=)]"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10"> {/* Ensure content is above pattern */}
          {/* Use text-foreground */}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-center lowercase">
            rowana: tell ai what's what.
          </h2>
          {/* Use text-muted-foreground */}
          <p className="text-lg text-muted-foreground mb-10"> {/* Increased bottom margin */}
            Rowana is your <strong>Generative Engine Optimization (GEO)</strong> toolkit.
            Integrating into your build process, it <strong>analyzes</strong> your content's clarity, provides <strong>restructuring guidance</strong>,
            and generates the <strong>advanced structured data</strong> AI needs. Stop hoping LLMs get it right—make them.
          </p>
          {/* Combined Accuracy & Control, Clarity, Automate GEO into 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Combined Accuracy & Control Card */}
            <div className="bg-secondary p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-secondary/80">
              <h3 className="text-xl font-semibold text-primary mb-3">accuracy & control</h3>
              {/* Use text-muted-foreground */}
              <p className="text-muted-foreground">
                Ensure AI represents your product accurately through optimized content and explicit data signals. You built it, you define it.
              </p>
            </div>
            {/* Improve Clarity Card */}
            <div className="bg-secondary p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-secondary/80">
              <h3 className="text-xl font-semibold text-primary mb-3">improve clarity</h3>
               {/* Use text-muted-foreground */}
              <p className="text-muted-foreground">
                Optimize your content structure and language for both AI comprehension and better user
                experience.
              </p>
            </div>
             {/* Use bg-secondary for cards, text-primary for accent heading */}
            <div className="bg-secondary p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-secondary/80">
              <h3 className="text-xl font-semibold text-primary mb-3">automate geo</h3>
               {/* Use text-muted-foreground */}
              <p className="text-muted-foreground">
                Automate complex GEO tasks within your existing development
                workflow.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works Section - Consistent padding, bg-card for contrast */}
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg"> {/* Added padding inside card */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center lowercase">
            dead simple integration.
          </h2>
          <div className="space-y-8">
            <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
               {/* Use bg-accent for step number background */}
              <div className="flex-shrink-0 bg-accent rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <span className="font-bold">1</span>
              </div>
              <div className="min-w-0"> {/* Added min-w-0 */}
                 {/* text-white removed */}
                <h3 className="text-xl font-semibold mb-2 lowercase">install the package</h3>
                 {/* Use bg-secondary, border, text-primary for code block */}
                <div className="bg-secondary border p-3 rounded-md">
                  <pre className="text-primary text-sm overflow-x-auto">
                    <code>npm install @rowana/core</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
               {/* Use bg-accent for step number background */}
              <div className="flex-shrink-0 bg-accent rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <span className="font-bold">2</span>
              </div>
              <div className="min-w-0"> {/* Added min-w-0 */}
                 {/* text-white removed */}
                <h3 className="text-xl font-semibold mb-2 lowercase">
                  Configure Rowana's analysis and generation rules (simple setup).
                </h3>
                 {/* Conceptual example of configuration impact */}
                 <div className="bg-secondary border p-3 rounded-md mt-2">
                  <pre className="text-primary text-sm overflow-x-auto">
                    <code>{`// Example: Tell Rowana what content matters
// (Specific config syntax TBD)

identify Product {
  name: find("h1");
  description: find(".product-description");
  features: find("ul.features > li");
}

generate JSON-LD {
  // Auto-create structured data based on identified content
}`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
               {/* Use bg-accent for step number background */}
              <div className="flex-shrink-0 bg-accent rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <span className="font-bold">3</span>
              </div>
              <div className="min-w-0"> {/* Added min-w-0 */}
                 {/* text-white removed */}
                <h3 className="text-xl font-semibold mb-2 lowercase">Integrate into your build process. Done.</h3>
                 {/* Use bg-secondary, border, text-primary for code block */}
                <div className="bg-secondary border p-3 rounded-md">
                  <pre className="text-primary text-sm overflow-x-auto">
                    <code>{`// Add to your build script
"build": "rowana generate && next build"`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section - Added subtle grid pattern, consistent text colors */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Subtle Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
           {/* Removed single quotes inside url() */}
          <div className="h-full w-full bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHptMC02aC0JWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bS02LTI0aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptLTYtMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6Ii8+PC9nPjwvZz48L3N2Zz4=)]"></div>
        </div>
        <div className="text-center relative z-10"> {/* Ensure content is above pattern */}
          {/* Use text-foreground */}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 lowercase">
            stop worrying about ai misinformation. get early access.
          </h2>
           {/* Use text-muted-foreground */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join the developers taking control of their AI presence. Get early access to the Rowana GEO toolkit and help shape its development.
          </p>
          <div className="max-w-md mx-auto">
            <EmailForm buttonText="get early access" />
          </div>
        </div>
      </AnimatedSection>

      {/* Footer - Consistent padding */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border"> {/* Use border-border */}
        {/* Use flex to align items */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">© {new Date().getFullYear()} rowana.ai - all rights reserved</p> {/* Made text slightly smaller */}

          {/* Social Links Container */}
          <div className="flex items-center gap-2"> {/* Group social icons */}
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/company/rowana-ai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rowana.ai on LinkedIn"
            >
              {/* Use secondary variant for a filled look */}
              <Button variant="secondary" size="icon">
                <Linkedin className="h-5 w-5 text-secondary-foreground" /> {/* Use secondary-foreground for contrast */}
              </Button>
            </a>

            {/* GitHub Star Button - Bottom */}
            <a
              href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star rowana-ai/rowana-core on GitHub"
          >
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>Star</span>
            </Button>
          </a>
        </div> {/* End Social Links Container */}
      </div>
    </footer>
    </main>
  )
}
