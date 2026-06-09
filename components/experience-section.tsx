'use client'

import { ChevronRight } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
              <p className="text-gray-600 text-xs text-center">Product 1</p>
            </div>
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
              <p className="text-gray-600 text-xs text-center">Product 2</p>
            </div>
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
              <p className="text-gray-600 text-xs text-center">Product 3</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <p className="text-orange-500 font-semibold">Behind the Designs</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white text-balance">
              Shaping Experiences That Make Life Simpler
            </h2>
            <p className="text-gray-300 text-lg">
              I&apos;m a product designer focused on building clean, intuitive interfaces that solve real-world problems.
            </p>
            <p className="text-gray-400">
              Let&apos;s Build Something Meaningful Together
            </p>
            <button className="inline-flex items-center gap-2 bg-orange-500 text-white w-fit px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
              Get in touch
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
