'use client'

import { ChevronRight } from 'lucide-react'

export default function PortfolioShowcase() {
  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="flex flex-col gap-4">
            <div className="aspect-video bg-gradient-to-br from-purple-600 to-indigo-800 rounded-xl overflow-hidden">
              <img src="/case-tech-startup.png" alt="Modern Tech Startup" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-white">Modern Tech Startup</h3>
            <p className="text-gray-400">
              Complete brand identity system including logo, color palette, typography, and comprehensive brand guidelines for a fast-growing tech company.
            </p>
            <button className="inline-flex items-center gap-2 bg-orange-500 text-white w-fit px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
              View Case Study
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col gap-4">
            <div className="aspect-video bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl overflow-hidden">
              <img src="/case-beauty-brand.png" alt="Premium Beauty Brand" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-white">Premium Beauty Brand</h3>
            <p className="text-gray-400">
              Luxury packaging design and brand refresh for a premium beauty product line, including product labels, boxes, and marketing materials.
            </p>
            <button className="inline-flex items-center gap-2 bg-orange-500 text-white w-fit px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
              View Case Study
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
