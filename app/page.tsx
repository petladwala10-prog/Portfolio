import Hero from '@/components/hero'
import PortfolioGrid from '@/components/portfolio-grid'
import WorkSection from '@/components/work-section'
import AboutSection from '@/components/about-section'
import ExperienceSection from '@/components/experience-section'
import PricingSection from '@/components/pricing-section'
import PortfolioShowcase from '@/components/portfolio-showcase'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <PortfolioGrid />
      <WorkSection />
      <AboutSection />
      <ExperienceSection />
      <PricingSection />
      <PortfolioShowcase />
      <Footer />
    </main>
  )
}
