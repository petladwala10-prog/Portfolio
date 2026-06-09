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
            <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-500 to-orange-600">
              <img src="/featured-brand.png" alt="Beautiful brand design" className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <p className="text-orange-500 font-semibold">Portfolio Showcase</p>
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                Beautiful Brands Begin Here
              </h3>
              <div>
                <p className="text-gray-300 text-lg mb-4">
                  Compelling visual identities that tell your story
                </p>
                <p className="text-gray-400">
                  Every design tells a story. From concept to execution, I create visually stunning brand identities that resonate with your target audience and establish lasting impressions.
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
              <p className="text-orange-500 font-semibold">Design Services</p>
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                Strategic Visual Design Solutions
              </h3>
              <div>
                <p className="text-gray-400">
                  Comprehensive branding and design services including logo design, brand guidelines, marketing materials, and digital assets that elevate your brand presence and create meaningful connections with your audience.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 bg-orange-500 text-white w-fit px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                Get in touch
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Image */}
            <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-orange-400 to-red-600 order-1 lg:order-2">
              <img src="/design-services.png" alt="Design services" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
