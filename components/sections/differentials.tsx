'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Smartphone,
  Gauge,
  Palette,
  Network,
  CheckCircle2,
  GitBranch,
  Users,
} from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'

const icons = [
  Code2,
  Smartphone,
  Gauge,
  Palette,
  Network,
  CheckCircle2,
  GitBranch,
  Users,
]

export function Differentials() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="05"
          title={t.differentials.title}
          subtitle={t.differentials.subtitle}
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {t.differentials.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass group flex flex-col items-center gap-3 rounded-2xl border border-border p-6 text-center transition-colors hover:border-primary/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
