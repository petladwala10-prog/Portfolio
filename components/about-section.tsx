'use client'

import { ChevronRight } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6">
            <p className="text-orange-500 font-semibold">About me</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white text-balance">
              Designer. Strategist. Creative partner.
            </h2>
            <p className="text-gray-300 text-lg">
              Blending clarity and creativity to build brands with purpose.
            </p>
            <p className="text-gray-400">
              I&apos;m a freelance brand designer with 15 years of experience helping startups, creatives, and growing businesses build identities that feel like them. With a background in design, marketing, art direction, and brand strategy, I bring a balance of strategy and style to every project.
            </p>
            <p className="text-gray-400">
              I bring a balance of strategy and style to every project. Whether it&apos;s your first brand or a refresh, I&apos;m here to guide you every step of the way.
            </p>
            <button className="inline-flex items-center gap-2 bg-orange-500 text-white w-fit px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
              Read more
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden bg-orange-500 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-sm opacity-75">Portrait</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
