import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServicesGrid } from '@/components/services-grid'

export const metadata = {
  title: 'Services',
  description: 'Websites, CRM, e-commerce, analytics, payments, and digital systems built around how your business actually operates.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#091818] text-foreground">
      <Navbar />
      <div className="pt-32">
        <ServicesGrid showBorder={false} />
      </div>
      <Footer showContactForm={false} />
    </main>
  )
}
