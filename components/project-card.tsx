'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { useLanguage } from '@/components/language-provider'

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project
  index?: number
}) {
  const { t, lang } = useLanguage()

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="glass group relative flex flex-col overflow-hidden rounded-3xl border border-border transition-colors hover:border-primary/50"
    >
      <Link
        href={`/projetos/${project.slug}`}
        className="relative block aspect-video overflow-hidden"
        aria-label={project.title[lang]}
      >
        <Image
          src={project.image || '/placeholder.svg'}
          alt={project.title[lang]}
          width={640}
          height={360}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
        <span className="absolute right-3 top-3 rounded-full border border-border bg-background/60 px-2.5 py-1 font-mono text-xs backdrop-blur">
          {project.year}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">
          {project.category[lang]}
        </span>
        <h3 className="mt-2 text-xl font-semibold">{project.title[lang]}</h3>
        <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.short[lang]}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Link
            href={`/projetos/${project.slug}`}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            {t.projects.viewDetails}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title[lang]} - ${t.projects.code}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title[lang]} - ${t.projects.demo}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
