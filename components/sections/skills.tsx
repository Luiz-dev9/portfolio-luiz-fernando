'use client'

import { motion } from 'framer-motion'
import { Code2, Server, Wrench, Rocket } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import { skillGroups, learning } from '@/lib/skills'

function SkillCard({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ scale: 1.06, y: -3 }}
      className="glass group flex items-center justify-center rounded-xl border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
    >
      {name}
    </motion.div>
  )
}

export function Skills() {
  const { t } = useLanguage()

  const groups = [
    { icon: Code2, title: t.skills.frontend, items: skillGroups.frontend },
    { icon: Server, title: t.skills.backend, items: skillGroups.backend },
    { icon: Wrench, title: t.skills.tools, items: skillGroups.tools },
  ]

  return (
    <section id="habilidades" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="02"
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass rounded-3xl border border-border p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <group.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {group.items.map((item, i) => (
                  <SkillCard key={item} name={item} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <div className="mb-6 flex items-center justify-center gap-2 text-muted-foreground">
            <Rocket className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{t.skills.learning}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {learning.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-full border border-dashed border-primary/40 px-4 py-1.5 text-sm text-muted-foreground"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
