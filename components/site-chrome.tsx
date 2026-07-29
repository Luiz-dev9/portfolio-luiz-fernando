import { Navbar } from '@/components/navbar'
import { CustomCursor } from '@/components/custom-cursor'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'

export function SiteChrome() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <BackToTop />
    </>
  )
}
