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
              Graphic Designer. Brand Specialist. Digital Expert.
            </h2>
            <p className="text-gray-300 text-lg">
              Creating compelling visual identities that make your brand unforgettable.
            </p>
            <p className="text-gray-400">
              I&apos;m a passionate graphic designer with 8+ years of experience helping businesses, startups, and creative entrepreneurs develop stunning visual brands. My expertise spans logo design, brand identity systems, packaging design, and comprehensive digital marketing assets that connect emotionally with your target audience.
            </p>
            <p className="text-gray-400">
              Whether you&apos;re launching a new brand or refreshing an existing one, I combine strategic thinking with creative excellence to deliver designs that not only look beautiful but also drive results and build lasting brand loyalty.
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
