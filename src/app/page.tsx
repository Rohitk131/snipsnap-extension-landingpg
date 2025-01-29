'use client'
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import { ArrowRight, BookmarkPlus, Link, MessageSquare } from "lucide-react";
import { motion } from 'framer-motion';

export default function LandingPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D]">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-gradient-slow" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </div>

      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between backdrop-blur-sm bg-white/5 rounded-2xl p-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              <Image src="/logo.svg" alt="SnipSnap Logo" width={40} height={40} className="relative" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              SnipSnap
            </span>
          </div>
          <motion.a
            href="#install"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-[1px]"
          >
            <div className="px-6 py-2 rounded-xl bg-black hover:bg-opacity-80 transition-colors">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Install Now
              </span>
            </div>
          </motion.a>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="py-20 text-center"
        >
          <h1 className="mb-6 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient-x">
            Save Your Favorite Links and AI Chats
          </h1>
          <p className="mb-8 text-xl text-gray-400 max-w-3xl mx-auto">
            SnipSnap is your all-in-one Chrome extension for saving and accessing your favorite links and AI
            conversations across platforms.
          </p>
          <motion.a
            href="#install"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-[1px]"
          >
            <div className="px-8 py-3 rounded-xl bg-black hover:bg-opacity-80 transition-colors inline-flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-lg font-semibold">
                Get Started
              </span>
              <ArrowRight className="ml-2 h-5 w-5 text-blue-400" />
            </div>
          </motion.a>
        </motion.section>

        <section className="py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Key Features
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<BookmarkPlus className="h-12 w-12 text-purple-400" />}
              title="Save Favorite Links"
              description="Quickly save and organize your most important web pages."
            />
            <FeatureCard
              icon={<MessageSquare className="h-12 w-12 text-blue-400" />}
              title="Store AI Chats"
              description="Keep your valuable AI conversations from multiple platforms in one place."
            />
            <FeatureCard
              icon={<Link className="h-12 w-12 text-purple-400" />}
              title="Access Anywhere"
              description="Sync your saved content across devices with secure authentication."
            />
          </div>
        </section>

        <section className="py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

        <section className="py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Supported AI Platforms
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <AIPlatform name="ChatGPT" logo="/chatgpt-logo.svg" />
            <AIPlatform name="DeepSeek" logo="/deepseek-logo.svg" />
            <AIPlatform name="Claude" logo="/claude-logo.svg" />
            <AIPlatform name="Perplexity" logo="/perplexity-logo.svg" />
          </div>
        </section>

        <section id="install" className="py-20 text-center">
          <h2 className="mb-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Ready to Streamline Your Browsing?
          </h2>
          <p className="mb-8 text-xl text-gray-400">
            Install SnipSnap now and start saving your favorite links and AI chats with ease.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-[1px]"
          >
            <div className="px-8 py-3 rounded-xl bg-black hover:bg-opacity-80 transition-colors inline-flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-lg font-semibold">
                Add to Chrome
              </span>
              <ArrowRight className="ml-2 h-5 w-5 text-blue-400" />
            </div>
          </motion.a>
        </section>
      </main>

      <footer className="py-8 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 SnipSnap. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-[1px]"
    >
      <div className="h-full rounded-xl bg-black/40 backdrop-blur-sm p-6 hover:bg-black/60 transition-colors">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          {title}
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-[1px]"
    >
      <div className="h-full rounded-xl bg-black/40 backdrop-blur-sm p-6 hover:bg-black/60 transition-colors">
        <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
          <span className="text-2xl font-bold text-white">{number}</span>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          {title}
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

function AIPlatform({ name, logo }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center"
    >
      <div className="relative mb-2">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
        <Image src={logo || "/placeholder.svg"} alt={`${name} logo`} width={64} height={64} className="relative" />
      </div>
      <span className="text-gray-400">{name}</span>
    </motion.div>
  );
}