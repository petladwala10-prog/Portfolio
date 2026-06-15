export default function AboutMe() {
  const skills = [
    'Logo Design',
    'Branding',
    'Social Media Design',
    'Print Design',
  ]

  return (
    <section className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <img 
              src="/product-01.png" 
              alt="About Me" 
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-orange-500 font-semibold mb-2">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
                Hi, I&apos;m Hakimi
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m a freelance graphic designer passionate about creating clean, impactful, and memorable visual identities. I help startups, businesses, and personal brands communicate their message through effective design solutions.
            </p>

            <p className="text-gray-400 leading-relaxed">
              With 8+ years of experience, I&apos;ve worked with diverse clients across industries to transform their visions into stunning visual designs that resonate with their target audience.
            </p>

            {/* Skills */}
            <div>
              <p className="text-white font-semibold mb-4">My Expertise</p>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition w-fit">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
