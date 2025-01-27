import Image from "next/image"
import { ArrowRight, BookmarkPlus, Link, MessageSquare } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="SnipSnao Logo" width={40} height={40} />
            <span className="text-2xl font-bold text-gray-800">SnipSnao</span>
          </div>
          <a
            href="#install"
            className="rounded-full bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Install Now
          </a>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="py-20 text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900">Save Your Favorite Links and AI Chats</h1>
          <p className="mb-8 text-xl text-gray-600">
            SnipSnao is your all-in-one Chrome extension for saving and accessing your favorite links and AI
            conversations across platforms.
          </p>
          <a
            href="#install"
            className="inline-flex items-center rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </section>

        <section className="py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Key Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<BookmarkPlus className="h-12 w-12 text-blue-600" />}
              title="Save Favorite Links"
              description="Quickly save and organize your most important web pages."
            />
            <FeatureCard
              icon={<MessageSquare className="h-12 w-12 text-blue-600" />}
              title="Store AI Chats"
              description="Keep your valuable AI conversations from multiple platforms in one place."
            />
            <FeatureCard
              icon={<Link className="h-12 w-12 text-blue-600" />}
              title="Access Anywhere"
              description="Sync your saved content across devices with secure authentication."
            />
          </div>
        </section>

        <section className="py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <StepCard
              number={1}
              title="Install the Extension"
              description="Add SnipSnao to your Chrome browser with just one click."
            />
            <StepCard
              number={2}
              title="Save Content"
              description="Use the 'Save Chat' button on supported AI platforms or save any link."
            />
            <StepCard
              number={3}
              title="Access Your Dashboard"
              description="View and manage all your saved content in one convenient place."
            />
          </div>
        </section>

        <section className="py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Supported AI Platforms</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <AIPlatform name="ChatGPT" logo="/chatgpt-logo.svg" />
            <AIPlatform name="DeepSeek" logo="/deepseek-logo.svg" />
            <AIPlatform name="Claude" logo="/claude-logo.svg" />
            <AIPlatform name="Perplexity" logo="/perplexity-logo.svg" />
          </div>
        </section>

        <section id="install" className="py-20 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Ready to Streamline Your Browsing?</h2>
          <p className="mb-8 text-xl text-gray-600">
            Install SnipSnao now and start saving your favorite links and AI chats with ease.
          </p>
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Add to Chrome
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 SnipSnao. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
        {number}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function AIPlatform({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex flex-col items-center">
      <Image src={logo || "/placeholder.svg"} alt={`${name} logo`} width={64} height={64} className="mb-2" />
      <span className="text-gray-700">{name}</span>
    </div>
  )
}

