import { Preloader } from '@/components/preloader'
import { SiteChrome } from '@/components/site-chrome'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { Timeline } from '@/components/sections/timeline'
import { Differentials } from '@/components/sections/differentials'
import { GithubSection } from '@/components/sections/github'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <>
      <Preloader />
      <SiteChrome />
      <main className="relative overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Differentials />
        <GithubSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
