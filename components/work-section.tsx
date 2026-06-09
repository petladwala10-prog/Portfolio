'use client'

import { ChevronRight } from 'lucide-react'

export default function WorkSection() {
  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* First Project - Projects */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-500 to-orange-600 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-sm opacity-75">Featured Image</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <p className="text-orange-500 font-semibold">Selected Work</p>
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                Projects
              </h3>
              <div>
                <p className="text-gray-300 text-lg mb-4">
                  Real brands, real results
                </p>
                <p className="text-gray-400">
                  Take a closer look at how strategy and design come together to build brands that connect and endure.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 bg-white text-black w-fit px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Get in touch
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Second Project - Bringing Brands to Life */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              <p className="text-orange-500 font-semibold">Selected Work</p>
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                Bringing Brands to Life Through Design
              </h3>
              <div>
                <p className="text-gray-400">
                  A curated collection of visual identities, packaging, and creative systems built for impact.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 bg-orange-500 text-white w-fit px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                Get in touch
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Image */}
            <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center order-1 lg:order-2">
              <div className="text-center text-white">
                <p className="text-sm opacity-75">Featured Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
