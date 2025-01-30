"use client"
import Image from "next/image"
import { ArrowRight, BookmarkPlus, Link, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import Background from "@/components/background"

export default function LandingPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Background />

      <header className="container mx-auto px-4 py-4 sm:py-6">
        <nav className="flex items-center justify-between backdrop-blur-sm bg-white/5 px-4 sm:px-7 py-2 sm:py-3 rounded-full">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image src="/icon.png" alt="SnipSnap Logo" width={40} height={40} className="relative" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white">SnipSnap</span>
          </div>
          <motion.a
            href="#install"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="group relative m-1 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border-b-2 border-l-2 border-r-2 border-green-700 bg-gradient-to-tr from-green-600 to-green-500 px-3 sm:px-4 py-1 text-sm sm:text-base text-white shadow-lg transition duration-100 ease-in-out active:translate-y-0.5 active:border-green-600 active:shadow-none">
              <span className="absolute h-0 w-0 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:h-32 group-hover:w-32"></span>
              <span className="relative font-medium">Add to Chrome</span>
            </button>
          </motion.a>
        </nav>
      </header>

      <main className="flex-grow container mx-auto max-w-7xl px-4">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="py-12 sm:py-20 flex flex-col lg:flex-row items-center justify-between"
        >
          <div className="lg:w-1/2 mb-8 sm:mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Save Your Favorite Links and AI Chats
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl">
              SnipSnap is your all-in-one Chrome extension for saving and accessing your favorite links and AI
              conversations across platforms.
            </p>
            <motion.a
              href="#install"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center"
            >
              <button className="group relative m-1 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-b-2 border-l-2 border-r-2 border-green-700 bg-gradient-to-tr from-green-600 to-green-500 px-4 py-1 text-white shadow-lg transition duration-100 ease-in-out active:translate-y-0.5 active:border-green-600 active:shadow-none">
                <span className="absolute h-0 w-0 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:h-32 group-hover:w-32"></span>
                <span className="relative font-medium">Add to Chrome</span>
              </button>
            </motion.a>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="rounded-2xl border-4 sm:border-8 border-gray-300/10">
              <Image
                src="/heroImage.png"
                alt="SnipSnap Hero"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </motion.section>

        <section className="py-12 sm:py-20">
          <h2 className="mb-8 sm:mb-12 text-center text-3xl sm:text-4xl font-bold text-white">Key Features</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<BookmarkPlus className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400" />}
              title="Save Favorite Links"
              description="Quickly save and organize your most important web pages."
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 sm:h-12 sm:w-12 text-blue-400" />}
              title="Store AI Chats"
              description="Keep your valuable AI conversations from multiple platforms in one place."
            />
            <FeatureCard
              icon={<Link className="h-10 w-10 sm:h-12 sm:w-12 text-green-400" />}
              title="Access Anywhere"
              description="Sync your saved content across devices with secure authentication."
            />
          </div>
        </section>

        <section className="py-12 sm:py-20">
          <h2 className="mb-8 sm:mb-12 text-center text-3xl sm:text-4xl font-bold text-white">How It Works</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <StepCard
              number={1}
              title="Install the Extension"
              description="Add SnipSnap to your Chrome browser with just one click."
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

        <section className="py-12 sm:py-20">
          <h2 className="mb-8 sm:mb-12 text-center text-3xl sm:text-4xl font-bold text-white">Supported AI Platforms</h2>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            <AIPlatform
              name="ChatGPT"
              logo="https://static.vecteezy.com/system/resources/thumbnails/022/841/114/small_2x/chatgpt-logo-transparent-background-free-png.png"
            />
            <AIPlatform
              name="DeepSeek"
              logo="https://registry.npmmirror.com/@lobehub/icons-static-png/1.15.0/files/dark/deepseek-color.png"
            />
            <AIPlatform
              name="Claude"
              logo="https://res.cloudinary.com/apideck/image/upload/v1689100675/icons/anthropic-claude.png"
            />
            <AIPlatform
              name="Perplexity"
              logo="https://knowprose.com/wp-content/uploads/2024/04/turquoise402xperplexity.ai_.png.webp"
            />
          </div>
        </section>

        <section id="install" className="py-12 sm:py-20 text-center">
          <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold text-white">Ready to Streamline Your Browsing?</h2>
          <p className="mb-6 sm:mb-8 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Install SnipSnap now and start saving your favorite links and AI chats with ease.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center"
          >
            <button className="group relative m-1 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-b-2 border-l-2 border-r-2 border-green-700 bg-gradient-to-tr from-green-600 to-green-500 px-4 py-1 text-white shadow-lg transition duration-100 ease-in-out active:translate-y-0.5 active:border-green-600 active:shadow-none">
              <span className="absolute h-0 w-0 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:h-32 group-hover:w-32"></span>
              <span className="relative font-medium">Add to Chrome</span>
            </button>
          </motion.a>
        </section>
      </main>

      <footer className="py-6 sm:py-8 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 SnipSnap. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl bg-white/10 p-[1px] overflow-hidden">
      <div className="h-full rounded-xl bg-black/40 backdrop-blur-sm p-4 sm:p-6 hover:bg-black/60 transition-colors">
        <div className="mb-3 sm:mb-4 flex justify-center">{icon}</div>
        <h3 className="mb-2 text-lg sm:text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm sm:text-base text-gray-300">{description}</p>
      </div>
    </motion.div>
  )
}

function StepCard({ number, title, description }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl bg-white/10 p-[1px] overflow-hidden">
      <div className="h-full rounded-xl bg-black/40 backdrop-blur-sm p-4 sm:p-6 hover:bg-black/60 transition-colors">
        <div className="mb-3 sm:mb-4 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500">
          <span className="text-xl sm:text-2xl font-bold text-white">{number}</span>
        </div>
        <h3 className="mb-2 text-lg sm:text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm sm:text-base text-gray-300">{description}</p>
      </div>
    </motion.div>
  )
}

function AIPlatform({ name, logo }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
      <div className="relative mb-2 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white/10 p-[1px]">
        <div className="w-full h-full rounded-full overflow-hidden bg-black/40 flex items-center justify-center">
          <img src={logo || "/placeholder.svg"} alt={`${name} logo`} className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
        </div>
      </div>
      <span className="text-sm sm:text-base text-gray-300 font-medium">{name}</span>
    </motion.div>
  )
}