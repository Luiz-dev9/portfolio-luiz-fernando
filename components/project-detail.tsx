'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Github,
} from 'lucide-react'
import { projects, type Project } from '@/lib/projects'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/motion/reveal'

export function ProjectDetail({ project }: { project: Project }) {
  const { t, lang } = useLanguage()
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <article className="relative pt-28 pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/3 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <Link
            href="/#projetos"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.projects.back}
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              {project.category[lang]}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {project.year}
            </span>
          </div>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title[lang]}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {project.short[lang]}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-blue inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <ExternalLink className="h-4 w-4" />
              {t.projects.demo}
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Github className="h-4 w-4" />
              {t.projects.code}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass mt-10 overflow-hidden rounded-3xl border border-border">
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.title[lang]}
              width={1280}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-semibold">{t.projects.overview}</h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {project.overview[lang]}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-10 text-2xl font-semibold">
                {t.projects.features}
              </h2>
              <ul className="mt-4 space-y-3">
                {project.features[lang].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <aside className="glass h-fit rounded-3xl border border-border p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {t.projects.stack}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>

        <div className="mt-20">
          <h2 className="mb-8 text-2xl font-semibold">
            {t.projects.otherProjects}
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {others.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Link
                  href={`/projetos/${p.slug}`}
                  className="glass group flex flex-col overflow-hidden rounded-2xl border border-border transition-colors hover:border-primary/50"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={p.image || '/placeholder.svg'}
                      alt={p.title[lang]}
                      width={480}
                      height={270}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 p-4">
                    <span className="text-sm font-medium">{p.title[lang]}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
