'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { projects } from '@/lib/projects'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/motion/reveal'

export function ProjectsListing() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Reveal>
        <Link
          href="/#projetos"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.nav.home}
        </Link>
      </Reveal>

      <SectionHeading
        eyebrow="03"
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  )
}
