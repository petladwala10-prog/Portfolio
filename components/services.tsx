import { Palette, Zap, Globe } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Social Media Design',
      description: 'Professional creatives for Instagram, LinkedIn, Facebook and other platforms that engage your audience and boost your brand presence.'
    },
    {
      icon: Zap,
      title: 'Marketing Materials',
      description: 'Brochures, flyers, banners, and presentations designed to communicate your message effectively and leave lasting impressions.'
    },
    {
      icon: Globe,
      title: 'Website Graphics',
      description: 'Modern and visually appealing graphics for websites and landing pages that enhance user experience and drive conversions.'
    }
  ]

  return (
    <section className="py-20 px-6 md:px-12 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-2">What I Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            Services That Drive Results
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Comprehensive design solutions tailored to elevate your brand and engage your audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-orange-500/50 hover:bg-gray-900 transition group">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition">
                  <Icon className="w-6 h-6 text-orange-500 group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
