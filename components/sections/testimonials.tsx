'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    name: 'Ana Souza',
    role: { pt: 'Product Manager', en: 'Product Manager' },
    text: {
      pt: 'Luiz entrega com muita qualidade e atenção aos detalhes. As interfaces ficaram impecáveis e o código muito bem organizado.',
      en: 'Luiz delivers with great quality and attention to detail. The interfaces were flawless and the code very well organized.',
    },
  },
  {
    name: 'Carlos Menezes',
    role: { pt: 'Tech Lead', en: 'Tech Lead' },
    text: {
      pt: 'Profissional dedicado, aprende rápido e sempre busca as melhores práticas. Foi um prazer trabalhar em equipe com ele.',
      en: 'A dedicated professional, learns fast and always seeks best practices. It was a pleasure to work with him on the team.',
    },
  },
  {
    name: 'Marina Lopes',
    role: { pt: 'Cliente', en: 'Client' },
    text: {
      pt: 'Transformou minha ideia em um produto lindo e funcional. Comunicação clara e entrega no prazo. Recomendo demais!',
      en: 'Turned my idea into a beautiful and functional product. Clear communication and on-time delivery. Highly recommend!',
    },
  },
]

export function Testimonials() {
  const { t, lang } = useLanguage()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      6000,
    )
    return () => clearInterval(timer)
  }, [])

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  const current = testimonials[index]

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="07"
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <div className="glass relative overflow-hidden rounded-3xl border border-border p-8 sm:p-12">
          <Quote className="mb-6 h-8 w-8 text-primary/40" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-pretty text-lg leading-relaxed">
                {current.text[lang]}
              </p>
              <div className="mt-6">
                <p className="font-semibold">{current.name}</p>
                <p className="text-sm text-muted-foreground">
                  {current.role[lang]}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Depoimento ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-primary' : 'w-2 bg-muted'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Anterior"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Próximo"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
