import Image from "next/image" // Import the Image component
import EmailForm from "@/components/email-form"
import AnimatedHero from "@/components/animated-hero"
import AnimatedSection from "@/components/animated-section"
import RowanaLogo from "/public/RowanaLogoSmall.png" // Import the logo image

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
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
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-900 rounded-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center lowercase">
            ai is the new front door. is yours locked?
          </h2>
          <p className="text-lg text-gray-300">
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
            <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/80">
              <h3 className="text-xl font-semibold text-teal-400 mb-3">accuracy</h3>
              <p className="text-gray-300">
                Force AI to represent your product correctly. No more "close enough" descriptions that miss your key
                differentiators.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/80">
              <h3 className="text-xl font-semibold text-teal-400 mb-3">control</h3>
              <p className="text-gray-300">
                You built it, you define it. Take back control of how AI systems talk about your innovation.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/80">
              <h3 className="text-xl font-semibold text-teal-400 mb-3">less headache</h3>
              <p className="text-gray-300">
                Set it up once, forget about it. Rowana updates your Schema.org data automatically as your product
                evolves.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-900 rounded-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center lowercase">
            dead simple integration.
          </h2>
          <div className="space-y-8">
            <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
              <div className="flex-shrink-0 bg-violet-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 lowercase">install the package</h3>
                <div className="bg-black border border-gray-800 p-3 rounded-md">
                  <pre className="text-teal-400 text-sm overflow-x-auto">
                    <code>npm install @rowana/core</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
              <div className="flex-shrink-0 bg-violet-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 lowercase">
                  set up your config (we'll make it easy)
                </h3>
                <div className="bg-black border border-gray-800 p-3 rounded-md">
                  <pre className="text-teal-400 text-sm overflow-x-auto">
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
              <div className="flex-shrink-0 bg-violet-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 lowercase">hook into your build. done.</h3>
                <div className="bg-black border border-gray-800 p-3 rounded-md">
                  <pre className="text-teal-400 text-sm overflow-x-auto">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 lowercase">
            stop worrying about ai misinformation. get early access.
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Join the developers who are taking control of their AI presence. Be among the first to shape how Rowana
            works.
          </p>
          <div className="max-w-md mx-auto">
            <EmailForm buttonText="get early access" />
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-800">
        <div className="text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} rowana.ai - all rights reserved</p>
        </div>
      </footer>
    </main>
  )
}
