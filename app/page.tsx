import Image from "next/image" // Import the Image component
import EmailForm from "@/components/email-form"
import AnimatedHero from "@/components/animated-hero"
import AnimatedSection from "@/components/animated-section"
import RowanaLogo from "/public/RowanaLogoSmall.png" // Import the logo image

export default function Home() {
  return (
    // Removed bg-black, inherits --background from body
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <AnimatedHero />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-20 pb-20">
          {/* Add Logo Image here */}
          <div className="flex justify-center mb-8">
            <Image
              src={RowanaLogo}
              alt="Rowana Logo"
              width={100} // Adjust size as needed
              height={100} // Adjust size as needed
              priority // Load the logo early as it's in the hero
            />
          </div>
          <div className="max-w-md mx-auto">
            <EmailForm buttonText="tame the ai" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      {/* Use bg-card for section background */}
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-card rounded-lg">
        <div className="max-w-3xl mx-auto">
          {/* text-white removed, inherits --foreground */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center lowercase">
            ai is the new front door. is yours locked?
          </h2>
          {/* Use text-muted-foreground */}
          <p className="text-lg text-muted-foreground">
            Without the right signals, LLMs might ignore your site or misrepresent your product. Don't let a confused AI
            bury your brand or become your unintended spokesperson.
          </p>
        </div>
      </AnimatedSection>

      {/* Solution Section */}
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center lowercase">
            rowana: tell ai what's what.
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Rowana is the build-time NPM tool that adds the structured data AI desperately needs to understand your
            product. No more hoping LLMs get it right—make them get it right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Use bg-secondary for cards, text-primary for accent heading */}
            <div className="bg-secondary p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-secondary/80">
              <h3 className="text-xl font-semibold text-primary mb-3">accuracy</h3>
              {/* Use text-muted-foreground */}
              <p className="text-muted-foreground">
                Force AI to represent your product correctly. No more "close enough" descriptions that miss your key
                differentiators.
              </p>
            </div>
             {/* Use bg-secondary for cards, text-primary for accent heading */}
            <div className="bg-secondary p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-secondary/80">
              <h3 className="text-xl font-semibold text-primary mb-3">control</h3>
               {/* Use text-muted-foreground */}
              <p className="text-muted-foreground">
                You built it, you define it. Take back control of how AI systems talk about your innovation.
              </p>
            </div>
             {/* Use bg-secondary for cards, text-primary for accent heading */}
            <div className="bg-secondary p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-secondary/80">
              <h3 className="text-xl font-semibold text-primary mb-3">less headache</h3>
               {/* Use text-muted-foreground */}
              <p className="text-muted-foreground">
                Set it up once, forget about it. Rowana updates your Schema.org data automatically as your product
                evolves.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works Section */}
       {/* Use bg-card for section background */}
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-card rounded-lg">
        <div className="max-w-3xl mx-auto">
           {/* text-white removed, inherits --foreground */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center lowercase">
            dead simple integration.
          </h2>
          <div className="space-y-8">
            <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
               {/* Use bg-accent for step number background */}
              <div className="flex-shrink-0 bg-accent rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <span className="font-bold">1</span>
              </div>
              <div>
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
              <div>
                 {/* text-white removed */}
                <h3 className="text-xl font-semibold mb-2 lowercase">
                  set up your config (we'll make it easy)
                </h3>
                 {/* Use bg-secondary, border, text-primary for code block */}
                <div className="bg-secondary border p-3 rounded-md">
                  <pre className="text-primary text-sm overflow-x-auto">
                    <code>{`// geo.config.js
module.exports = {
  organization: {
    name: 'Your Company',
    description: 'Your product description'
  }
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
              <div>
                 {/* text-white removed */}
                <h3 className="text-xl font-semibold mb-2 lowercase">hook into your build. done.</h3>
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

      {/* Final CTA Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
           {/* text-white removed */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 lowercase">
            stop worrying about ai misinformation. get early access.
          </h2>
           {/* Use text-muted-foreground */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join the developers who are taking control of their AI presence. Be among the first to shape how Rowana
            works.
          </p>
          <div className="max-w-md mx-auto">
            <EmailForm buttonText="get early access" />
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
       {/* Use border (theme variable) for the footer border */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border">
        <div className="text-center">
           {/* Use text-muted-foreground */}
          <p className="text-muted-foreground">© {new Date().getFullYear()} rowana.ai - all rights reserved</p>
        </div>
      </footer>
    </main>
  )
}
