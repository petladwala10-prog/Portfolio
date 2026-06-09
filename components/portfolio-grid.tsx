'use client'

import { ChevronRight } from 'lucide-react'

export default function PortfolioGrid() {
  return (
    <section id="projects" className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-4">Behind the Designs</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Curious What Else I&apos;ve Created?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Explore more brand identities, packaging, and digital design work in my extended portfolio.
          </p>
          <button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            See more Projects
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {/* Project Cards */}
          {[
            { num: '#01', title: 'Brand Identity Design', image: '/portfolio-01-brand.png' },
            { num: '#02', title: 'Logo Design', image: '/portfolio-02-logo.png' },
            { num: '#03', title: 'Packaging Design', image: '/portfolio-03-packaging.png' },
            { num: '#04', title: 'Digital Marketing Assets', image: '/portfolio-04-marketing.png' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="aspect-square bg-gradient-to-br from-gray-800 to-black rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 group relative"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="text-center">
                  <p className="text-orange-500 font-bold mb-2">{item.num}</p>
                  <p className="text-white text-sm">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
