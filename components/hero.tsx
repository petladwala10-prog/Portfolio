'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-orange-600 via-orange-700 to-black overflow-hidden">
      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-8 md:px-12 md:py-10">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="hakimicreative logo" className="h-16 w-16 object-contain" />
          <span className="text-lg font-bold text-white">hakimicreative</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link href="#about" className="hover:text-orange-400 transition">Home</Link>
          <Link href="#about" className="hover:text-orange-400 transition">About</Link>
          <Link href="#projects" className="hover:text-orange-400 transition">Projects</Link>
          <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-orange-100 transition">
            Get in touch
          </button>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-12 py-12 md:py-20">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-white">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
              Graphic Designer & Digital Branding
            </h2>
          </div>

          <p className="text-lg text-orange-100 max-w-md">
            Helping brands stand out through creative design, engaging visuals, and strategic branding.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-2xl font-bold text-orange-300">#01</p>
              <p className="text-sm text-orange-100">Logo & Brand Identity</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-300">#02</p>
              <p className="text-sm text-orange-100">Visual Design</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-300">#03</p>
              <p className="text-sm text-orange-100">Social Media Design</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-300">#04</p>
              <p className="text-sm text-orange-100">Brand Guidelines</p>
            </div>
          </div>
        </div>

        {/* Right - Image Placeholder */}
        <div className="relative h-96 md:h-full min-h-96">
          <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-black/50 rounded-full flex items-center justify-center mb-4">
                <div className="w-28 h-28 bg-orange-900/50 rounded-full"></div>
              </div>
              <p className="text-orange-200 text-sm">Portrait Image</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Partners Section */}
      <div className="relative z-10 px-6 md:px-12 py-12 border-t border-orange-800/50">
        <p className="text-sm text-orange-200 mb-6">Trusted by Brands I&apos;ve Helped Shape</p>
        <div className="flex flex-wrap gap-8 items-center">
          <div className="flex items-center gap-2 text-orange-100">
            <div className="w-4 h-4 rounded-full bg-orange-400"></div>
            <span>Supa Blox</span>
          </div>
          <div className="flex items-center gap-2 text-orange-100">
            <div className="w-4 h-4 rounded-full bg-orange-400"></div>
            <span>Hype Blox</span>
          </div>
          <div className="flex items-center gap-2 text-orange-100">
            <div className="w-4 h-4 rounded-full bg-orange-400"></div>
            <span>Frame Blox</span>
          </div>
          <div className="flex items-center gap-2 text-orange-100">
            <div className="w-4 h-4 rounded-full bg-orange-400"></div>
            <span>Ultra Blox</span>
          </div>
        </div>
      </div>
    </section>
  )
}
