import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProject, projects } from '@/lib/projects'
import { SiteChrome } from '@/components/site-chrome'
import { Footer } from '@/components/footer'
import { ProjectDetail } from '@/components/project-detail'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Projeto não encontrado' }
  return {
    title: project.title.pt,
    description: project.short.pt,
    openGraph: {
      title: project.title.pt,
      description: project.short.pt,
      images: [{ url: project.image }],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <>
      <SiteChrome />
      <main className="relative overflow-x-clip">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  )
}
