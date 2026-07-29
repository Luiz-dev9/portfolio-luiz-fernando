'use client'

import { motion } from 'framer-motion'
import { Github as GithubIcon } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import { githubStats, languageBars } from '@/lib/skills'

// Deterministic pseudo-random pattern for the contribution grid
const grid = Array.from({ length: 7 * 26 }, (_, i) => (i * 37) % 5)

export function GithubSection() {
  const { t } = useLanguage()

  const statLabels: Record<string, string> = {
    contributions: t.github.contributions,
    commits: t.github.commits,
    repositories: t.github.repositories,
    languages: t.github.languages,
  }

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="06"
          title={t.github.title}
          subtitle={t.github.subtitle}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="grid grid-cols-2 gap-4 lg:col-span-1">
            {githubStats.map((stat, i) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="glass rounded-2xl border border-border p-5 text-center"
              >
                <div className="text-gradient text-2xl font-bold">
                  {stat.value}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {statLabels[stat.key]}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl border border-border p-6 lg:col-span-2"
          >
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <GithubIcon className="h-4 w-4" />
              <span>@luizfernando</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {grid.map((level, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: (i % 40) * 0.006 }}
                  className="h-3 w-3 rounded-[3px]"
                  style={{
                    backgroundColor: `color-mix(in oklch, var(--brand-blue) ${
                      level * 24 + 8
                    }%, var(--muted))`,
                  }}
                />
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {languageBars.map((lang, i) => (
                <div key={lang.name}>
                  <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                    <span>{lang.name}</span>
                    <span>{lang.pct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-purple"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
