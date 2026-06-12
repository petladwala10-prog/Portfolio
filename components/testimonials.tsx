import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      text: 'Hakimi delivered exactly what we needed and exceeded expectations. The design was professional, creative, and perfectly captured our brand vision.',
      author: 'Sarah Johnson',
      role: 'CEO, Tech Startup',
      rating: 5
    },
    {
      text: 'Working with Hakimi was a game-changer for our business. The branding work transformed how customers perceive our company. Highly recommended!',
      author: 'Michael Chen',
      role: 'Founder, E-Commerce Brand',
      rating: 5
    },
    {
      text: 'The attention to detail and creative problem-solving is outstanding. Hakimi listened to our feedback and incorporated it perfectly. Absolutely worth it.',
      author: 'Emma Williams',
      role: 'Marketing Manager, Fashion Brand',
      rating: 5
    },
    {
      text: 'Professional quality work delivered on time, every time. Hakimi is responsive, collaborative, and truly cares about the project outcome.',
      author: 'David Kumar',
      role: 'Business Owner, Design Agency Client',
      rating: 5
    },
    {
      text: 'The best designer I&apos;ve worked with. Creative, efficient, and brings fresh ideas to the table. Our social media presence improved dramatically.',
      author: 'Lisa Anderson',
      role: 'Content Creator',
      rating: 5
    },
    {
      text: 'From concept to final delivery, everything was seamless. The design work helped us stand out in a competitive market. Definitely hiring again.',
      author: 'James Mitchell',
      role: 'Product Manager, SaaS Company',
      rating: 5
    }
  ]

  return (
    <section className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-2">Client Love</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            What My Clients Say
          </h2>
          <p className="text-gray-400 mt-4">Testimonials from real clients and projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-orange-500/30 transition">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
