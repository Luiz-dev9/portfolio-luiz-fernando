import type { Metadata } from 'next'
import { SiteChrome } from '@/components/site-chrome'
import { Footer } from '@/components/footer'
import { ProjectsListing } from '@/components/projects-listing'

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Todos os projetos desenvolvidos por Luiz Fernando — aplicações full stack com React, Node.js, TypeScript e MySQL.',
}

export default function ProjetosPage() {
  return (
    <>
      <SiteChrome />
      <main className="relative overflow-x-clip pt-32 pb-24">
        <ProjectsListing />
      </main>
      <Footer />
    </>
  )
}
