'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
} from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'

export function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    // Placeholder submit — replace with real endpoint later.
    setTimeout(() => {
      setStatus('sent')
      ;(e.target as HTMLFormElement).reset()
      setTimeout(() => setStatus('idle'), 4000)
    }, 1200)
  }

  const channels = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@luizfernando',
      href: 'https://github.com/luizfernando',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/luizfernando',
      href: 'https://linkedin.com/in/luizfernando',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contato@luizfernando.dev',
      href: 'mailto:contato@luizfernando.dev',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+55 (00) 00000-0000',
      href: 'https://wa.me/5500000000000',
    },
  ]

  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="08"
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="glass space-y-4 rounded-3xl border border-border p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium"
                >
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder={t.contact.namePlaceholder}
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium"
                >
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium"
              >
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={t.contact.messagePlaceholder}
                className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="glow-blue inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-70"
            >
              {status === 'sent' ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  {t.contact.success}
                </>
              ) : status === 'sending' ? (
                t.contact.sending
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  {t.contact.send}
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 lg:col-span-2"
          >
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-center gap-4 rounded-2xl border border-border p-4 transition-colors hover:border-primary/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{c.label}</span>
                  <span className="block truncate text-sm text-muted-foreground">
                    {c.value}
                  </span>
                </span>
              </a>
            ))}
            <div className="glass flex items-center gap-4 rounded-2xl border border-border p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-medium">
                  {t.contact.location}
                </span>
                <span className="block text-sm text-muted-foreground">
                  Brasil
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
