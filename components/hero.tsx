'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-8 md:px-12 md:py-10">
        <div className="flex items-center gap-1">
          <img src="/logo.png" alt="hakimicreative logo" className="h-16 w-16 object-contain" />
          <span className="text-lg font-bold text-white">hakimicreative</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-white text-sm">
          <Link href="#about" className="hover:text-orange-500 transition duration-300">Home</Link>
          <Link href="#about" className="hover:text-orange-500 transition duration-300">About</Link>
          <Link href="#projects" className="hover:text-orange-500 transition duration-300">Projects</Link>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300 flex items-center gap-2">
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </button>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12 py-16 md:py-32">
        {/* Left Content */}
        <div className="flex flex-col gap-8 text-white">
          <div className="inline-flex items-center gap-2 w-fit bg-orange-500/10 border border-orange-500/30 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-orange-400">Creative Designer at Work</span>
          </div>

          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-balance">
              Your Brand&apos;s
              <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Visual Identity
              </span>
              Awaits
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
            I craft stunning brand identities, logos, and digital designs that captivate your audience and elevate your business to the next level.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition duration-300 flex items-center justify-center gap-2 group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            <button className="border-2 border-orange-500/50 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500/10 transition duration-300">
              View My Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-800">
            <div>
              <p className="text-3xl font-bold text-orange-500">50+</p>
              <p className="text-sm text-gray-400">Projects Done</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">8+</p>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">40+</p>
              <p className="text-sm text-gray-400">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">10+</p>
              <p className="text-sm text-gray-400">Awards Won</p>
            </div>
          </div>
        </div>

        {/* Right - Portfolio Preview */}
        <div className="relative h-96 md:h-full min-h-96 lg:min-h-[600px]">
          {/* Large Featured Image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/portfolio-01-brand.png" 
              alt="Featured Brand Design" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Floating Cards */}
          <div className="absolute -bottom-12 -left-6 bg-white/95 backdrop-blur rounded-2xl p-6 shadow-2xl max-w-xs">
            <p className="text-gray-700 font-semibold text-sm mb-2">Latest Work</p>
            <p className="text-gray-900 font-bold text-lg">Modern Brand Identity</p>
          </div>

          <div className="absolute -top-6 -right-6 bg-orange-500/95 backdrop-blur rounded-2xl p-4 shadow-xl">
            <p className="text-white font-bold text-2xl">98%</p>
            <p className="text-orange-100 text-xs">Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Services Bar */}
      <div className="relative z-10 px-6 md:px-12 py-12 border-t border-gray-800/50">
        <p className="text-sm text-gray-400 mb-8 uppercase tracking-wider">Services</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group hover:bg-orange-500/10 p-4 rounded-lg transition">
            <p className="text-orange-500 font-bold mb-2">01</p>
            <p className="text-white font-semibold">Logo Design</p>
            <p className="text-gray-400 text-xs mt-2">Memorable brand marks</p>
          </div>
          <div className="group hover:bg-orange-500/10 p-4 rounded-lg transition">
            <p className="text-orange-500 font-bold mb-2">02</p>
            <p className="text-white font-semibold">Brand Identity</p>
            <p className="text-gray-400 text-xs mt-2">Complete visual systems</p>
          </div>
          <div className="group hover:bg-orange-500/10 p-4 rounded-lg transition">
            <p className="text-orange-500 font-bold mb-2">03</p>
            <p className="text-white font-semibold">Packaging Design</p>
            <p className="text-gray-400 text-xs mt-2">Product impact</p>
          </div>
          <div className="group hover:bg-orange-500/10 p-4 rounded-lg transition">
            <p className="text-orange-500 font-bold mb-2">04</p>
            <p className="text-white font-semibold">Digital Assets</p>
            <p className="text-gray-400 text-xs mt-2">Marketing ready</p>
          </div>
        </div>
      </div>
    </section>
  )
}
