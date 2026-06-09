'use client'

import { Check, ChevronRight } from 'lucide-react'

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '$1990',
      period: '/project',
      description: 'Perfect for logo or single design needs.',
      features: ['Logo Design', 'Color Palette', 'Brand Guidelines Basics'],
      highlighted: false,
    },
    {
      name: 'Pro plan',
      price: '$2990',
      period: '/project',
      description: 'Ideal for complete brand identity.',
      features: ['Full Brand Identity', 'Logo + Guidelines', '5 Revision Rounds'],
      highlighted: true,
    },
    {
      name: 'Enterprise plan',
      price: '$4990',
      period: '/project',
      description: 'Comprehensive branding solution.',
      features: ['Complete Brand System', 'Marketing Assets', 'Ongoing Support'],
      highlighted: false,
    },
  ]

  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-4">Pricing</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Simple Packages for Every Stage
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Clear, flexible packages built to fit your brand&apos;s stage.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-orange-500 text-black scale-105'
                  : 'bg-gray-900 text-white border border-gray-800'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-4 right-4 bg-white text-orange-500 px-3 py-1 rounded-full text-xs font-semibold">
                  Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? 'text-black/70' : 'text-gray-400'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-black/80' : 'text-gray-400'}`}>
                {plan.description}
              </p>

              <button
                className={`w-full py-3 rounded-full font-semibold mb-8 transition ${
                  plan.highlighted
                    ? 'bg-white text-orange-500 hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                Get in touch
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-center gap-2">
                    <Check className={`w-5 h-5 ${plan.highlighted ? 'text-black' : 'text-orange-500'}`} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
