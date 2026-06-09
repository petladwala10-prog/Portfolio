'use client'

import { ChevronRight } from 'lucide-react'

export default function PortfolioShowcase() {
  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Orange Blox */}
          <div className="flex flex-col gap-4">
            <div className="aspect-video bg-green-600 rounded-xl overflow-hidden flex items-center justify-center">
              <p className="text-white text-sm">Orange Blox Image</p>
            </div>
            <h3 className="text-2xl font-bold text-white">Orange Blox</h3>
            <p className="text-gray-400">
              The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.
            </p>
            <button className="inline-flex items-center gap-2 bg-orange-500 text-white w-fit px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
              View
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Nova Scene */}
          <div className="flex flex-col gap-4">
            <div className="aspect-video bg-pink-400 rounded-xl overflow-hidden flex items-center justify-center">
              <p className="text-white text-sm">Nova Scene Image</p>
            </div>
            <h3 className="text-2xl font-bold text-white">Nova Scene</h3>
            <p className="text-gray-400">
              The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.
            </p>
            <button className="inline-flex items-center gap-2 bg-orange-500 text-white w-fit px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
              View
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
