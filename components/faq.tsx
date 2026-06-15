'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState(0)

  const faqs = [
    {
      q: 'How long does a logo project take?',
      a: 'A typical logo project takes 1-2 weeks from initial consultation to final deliverables. This includes initial concepts, revisions, and file preparation in multiple formats.'
    },
    {
      q: 'How many revisions are included?',
      a: 'Revisions depend on your package. Our starter packages include 2-3 rounds, while premium packages include 5+ rounds of revisions to ensure you&apos;re completely satisfied.'
    },
    {
      q: 'What file formats will I receive?',
      a: 'You&apos;ll receive deliverables in all necessary formats including PNG, PDF, SVG, and high-resolution files suitable for both digital and print use.'
    },
    {
      q: 'Do you work with international clients?',
      a: 'Yes! I work with clients worldwide. We communicate via email, video calls, and project management tools to ensure smooth collaboration regardless of timezone.'
    },
    {
      q: 'What is your design process?',
      a: 'My process includes: discovery & research, concept development, design creation, client feedback & revisions, and final delivery. Clear communication is maintained throughout.'
    },
    {
      q: 'Do you offer unlimited revisions?',
      a: 'Each package includes a specific number of revision rounds. Additional revisions beyond the package can be purchased separately at reasonable rates.'
    }
  ]

  return (
    <section className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-2">Common Questions</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-800 rounded-lg overflow-hidden hover:border-orange-500/30 transition">
              <button
                onClick={() => setActiveIdx(activeIdx === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-6 bg-gray-900/50 hover:bg-gray-900 transition text-left"
              >
                <span className="text-white font-semibold text-lg">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform ${
                    activeIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeIdx === idx && (
                <div className="p-6 bg-black/50 text-gray-300 border-t border-gray-800">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-orange-500/10 border border-orange-500/30 rounded-xl text-center">
          <p className="text-white mb-4">
            Didn&apos;t find your answer? Get in touch!
          </p>
          <p className="text-gray-400">I&apos;m happy to discuss your specific needs and answer any questions.</p>
        </div>
      </div>
    </section>
  )
}
