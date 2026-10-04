'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from '@/hooks/use-toast'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function Footer({ showContactForm = true }: { showContactForm?: boolean }) {
  const currentYear = new Date().getFullYear()
  const contactSchema = z.object({
    name: z.string().min(2, 'Please enter your name'),
    email: z.string().email('Please enter a valid email'),
    company: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
  })
  type ContactFormValues = z.infer<typeof contactSchema>
  const { register, handleSubmit, setError, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    defaultValues: { name: '', email: '', company: '', message: '' },
  })

  async function onSubmit(values: ContactFormValues) {
    const parsed = contactSchema.safeParse(values)
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues | undefined
        if (field) setError(field, { type: 'manual', message: issue.message })
      }
      toast({ title: 'Please check the form', description: 'Some fields need attention.' })
      return
    }
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
      if (!res.ok) {
        toast({ title: 'Could not send message', description: 'Please try again in a moment.' })
        return
      }
      toast({ title: 'Message sent', description: 'Thanks for reaching out. We will get back to you soon.' })
      reset()
    } catch {
      toast({ title: 'Network error', description: 'Please check your connection and try again.' })
    }
  }

  return (
    <footer id="contact" className="bg-[#07130F] border-t border-[#C6A85A]/20 py-32 md:py-40 px-4 md:px-8 scroll-mt-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C6A85A]/45 to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        {showContactForm && (
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="text-[#C6A85A]/75 text-[9px]">◆</span>
                <span className="text-[#C6A85A] text-[10px] uppercase tracking-[0.24em] font-semibold">Pharos Reach</span>
              </div>
              <p className="text-[#91A39B] text-base leading-relaxed font-light max-w-md">
                Websites, systems, and digital infrastructure designed around how your business actually operates.
              </p>
              <div className="mt-6 space-y-2">
                <p className="text-[#91A39B] text-sm font-light">
                  <span className="text-[#F3EFE3] block mb-1">dev@pharosreach.com</span>
                  Available for projects across time zones
                </p>
              </div>
              <div className="mt-12 flex justify-center md:justify-start">
                <img src="/pharos-logo.png" alt="Pharos Reach" className="w-[280px] md:w-[320px] h-auto object-contain transition-all duration-700 drop-shadow-[0_0_18px_rgba(198,168,90,0.28)]" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-[#C6A85A]/40" />
                <h4 className="font-serif text-[#F3EFE3] text-xl font-medium tracking-tighter">Send a message</h4>
              </div>
              <p className="text-[#91A39B] text-sm leading-relaxed font-light">Tell us what you're working on and we'll respond within 1-2 business days.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-xs uppercase tracking-widest font-semibold">Name</Label>
                  <Input id="contact-name" placeholder="Your name" aria-invalid={errors.name ? true : undefined} {...register('name')} />
                  {errors.name?.message && <p className="text-destructive text-sm">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-xs uppercase tracking-widest font-semibold">Email</Label>
                  <Input id="contact-email" placeholder="you@company.com" aria-invalid={errors.email ? true : undefined} {...register('email')} />
                  {errors.email?.message && <p className="text-destructive text-sm">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-company" className="text-xs uppercase tracking-widest font-semibold">Company (optional)</Label>
                  <Input id="contact-company" placeholder="Company name" {...register('company')} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="text-xs uppercase tracking-widest font-semibold">Message</Label>
                  <Textarea id="contact-message" rows={5} placeholder="How can we help?" aria-invalid={errors.message ? true : undefined} {...register('message')} />
                  {errors.message?.message && <p className="text-destructive text-sm">{errors.message.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-[#E0C878] text-[#091512] px-7 py-3.5 rounded-none text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#F0D98E] transition-all duration-500 w-fit disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(198,168,90,0.14)]">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="border-t border-[#C6A85A]/15 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[#91A39B] text-xs font-light">© {currentYear} Pharos Reach. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="mailto:dev@pharosreach.com" className="text-[#91A39B] hover:text-[#C6A85A] text-xs font-light transition-colors">Email</a>
            <a href="https://instagram.com/pharosreach" target="_blank" rel="noreferrer" className="text-[#91A39B] hover:text-[#C6A85A] text-xs font-light transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
