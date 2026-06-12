import Hero from '@/components/hero'
import AboutMe from '@/components/about-me'
import PortfolioGrid from '@/components/portfolio-grid'
import Services from '@/components/services'
import WorkSection from '@/components/work-section'
import Testimonials from '@/components/testimonials'
import WhyWorkWithMe from '@/components/why-work-with-me'
import FAQ from '@/components/faq'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <AboutMe />
      <Services />
      <PortfolioGrid />
      <WorkSection />
      <Testimonials />
      <WhyWorkWithMe />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
