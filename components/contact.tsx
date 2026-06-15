'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Share2, Heart } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add form submission logic here
    setFormData({ name: '', email: '', projectType: '', budget: '', message: '' })
  }

  return (
    <section className="py-20 px-6 md:px-12 bg-black/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            Let&apos;s Create Something Amazing
          </h2>
          <p className="text-gray-400 mt-4">Have a project in mind? I&apos;d love to hear about it.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
              >
                <option value="">Select a project type</option>
                <option value="logo">Logo Design</option>
                <option value="branding">Full Branding</option>
                <option value="social">Social Media Design</option>
                <option value="marketing">Marketing Materials</option>
                <option value="web">Website Graphics</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Budget</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
              >
                <option value="">Select a budget range</option>
                <option value="under500">Under $500</option>
                <option value="500-1000">$500 - $1000</option>
                <option value="1000-3000">$1000 - $3000</option>
                <option value="3000-5000">$3000 - $5000</option>
                <option value="5000plus">$5000+</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:hello@hakimicreative.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition">
                    <Mail className="w-6 h-6 text-orange-500 group-hover:text-white transition" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400">hello@hakimicreative.com</p>
                  </div>
                </a>

                <a href="whatsapp://send?phone=1234567890" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition">
                    <MessageSquare className="w-6 h-6 text-orange-500 group-hover:text-white transition" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">WhatsApp</p>
                    <p className="text-gray-400">+1 (234) 567-890</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:border-orange-500 hover:bg-orange-500/10 transition">
                  <Share2 className="w-5 h-5 text-gray-400" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:border-orange-500 hover:bg-orange-500/10 transition">
                  <Heart className="w-5 h-5 text-gray-400" />
                </a>
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
              <p className="text-white font-semibold mb-2">Quick Response Time</p>
              <p className="text-gray-400 text-sm">I typically respond to inquiries within 24 hours. Looking forward to working with you!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
