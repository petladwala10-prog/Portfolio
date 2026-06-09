'use client'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Design Studio</h3>
            <p className="text-gray-400 text-sm">
              Graphic designer specializing in brand identity, visual design, and digital branding solutions that help your business stand out.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition text-sm">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-orange-500 transition text-sm">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <a href="mailto:hello@folioblox.com" className="text-orange-500 hover:text-orange-400 transition">
              hello@folioblox.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © 2024 Design Studio. All rights reserved. | Crafting beautiful brands, one design at a time.
          </p>
        </div>
      </div>
    </footer>
  )
}
