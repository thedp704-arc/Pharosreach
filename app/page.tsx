import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { TechStackSection } from '@/components/tech-stack-section'
import { ServicesGrid } from '@/components/services-grid'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { PhilosophySection } from '@/components/philosophy-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { RoyalDivider } from '@/components/royal-divider'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#091818] text-foreground">
      <Navbar />
      <div className="pt-24">
        <HeroSection />
        <TechStackSection />
        <RoyalDivider />
        <ServicesGrid />
        <HowItWorksSection />
        <TestimonialsSection />
        <PhilosophySection />
        <RoyalDivider direction="right" />
      </div>
      <Footer showContactForm={true} />
    </main>
  )
}
