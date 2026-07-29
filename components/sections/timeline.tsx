'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Target } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'

export function Timeline() {
  const { t, lang } = useLanguage()

  const items = [
    {
      year: '2024',
      title: {
        pt: 'Técnico em Desenvolvimento de Sistemas',
        en: 'Technical Degree in Systems Development',
      },
      place: 'SENAI',
    },
    {
      year: '2026',
      title: {
        pt: 'Graduação em Análise e Desenvolvimento de Sistemas',
        en: 'Bachelor in Systems Analysis and Development',
      },
      place: 'UNINASSAU',
    },
  ]

  return (
    <section id="trajetoria" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="04"
          title={t.timeline.title}
          subtitle={t.timeline.subtitle}
        />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-brand-blue via-brand-purple to-transparent sm:left-1/2"
          />
          <div className="space-y-10">
            {items.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55 }}
                className={`relative flex items-start gap-6 pl-12 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0
                    ? 'sm:ml-0 sm:pr-12 sm:text-right'
                    : 'sm:ml-auto sm:pl-12'
                }`}
              >
                <span
                  className={`glow-blue absolute left-2.5 top-1 flex h-4 w-4 items-center justify-center rounded-full border border-primary bg-background sm:left-auto ${
                    i % 2 === 0 ? 'sm:-right-2' : 'sm:-left-2'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <div className="glass w-full rounded-2xl border border-border p-5">
                  <span className="font-mono text-sm text-primary">
                    {item.year}
                  </span>
                  <h3 className="mt-1 flex items-center gap-2 font-semibold">
                    <GraduationCap className="h-4 w-4 shrink-0 text-muted-foreground" />
                    {item.title[lang]}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.place}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="glass glow-blue mt-12 rounded-3xl border border-border p-8 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Target className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-xl font-semibold">
              {t.timeline.goalTitle}
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {t.timeline.goal}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
