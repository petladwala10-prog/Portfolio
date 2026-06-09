'use client'

import { ChevronRight } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <img src="/product-01.png" alt="Designer workspace" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <img src="/product-02.png" alt="Brand design process" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <img src="/product-03.png" alt="Design studio" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <p className="text-orange-500 font-semibold">Design Expertise</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white text-balance">
              Crafting Visual Stories That Inspire
            </h2>
            <p className="text-gray-300 text-lg">
              With expertise in graphic design, branding, and visual communication, I create designs that are both beautiful and effective.
            </p>
            <p className="text-gray-400">
              From concept to final execution, I focus on delivering exceptional design solutions that elevate your brand and engage your audience.
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
