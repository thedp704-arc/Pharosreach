import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HowItWorksSection } from '@/components/how-it-works-section'

export const metadata = {
  title: 'Process',
  description: 'A clear four-step process for planning, building, integrating, launching, and improving your digital systems.',
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#091818] text-foreground">
      <Navbar />
      <div className="pt-32">
        <HowItWorksSection />
      </div>
      <Footer showContactForm={false} />
    </main>
  )
}
