import { Check } from 'lucide-react'

export default function WhyWorkWithMe() {
  const reasons = [
    'Direct Communication',
    'Attention To Detail',
    'On-Time Delivery',
    'Creative Problem Solving',
    'Professional Quality',
    'Long-Term Support'
  ]

  return (
    <section className="py-20 px-6 md:px-12 bg-black/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-2">Why Choose Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            Why Work With Me
          </h2>
          <p className="text-gray-400 mt-4">
            What sets my design approach apart from the rest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 rounded-lg hover:bg-orange-500/10 transition">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg text-white font-semibold">{reason}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-2xl p-8 text-center">
          <p className="text-lg text-gray-300 mb-6">
            Ready to transform your brand? Let&apos;s create something amazing together.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}
