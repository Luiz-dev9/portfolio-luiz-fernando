import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

const siteUrl = 'https://luizfernando.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Luiz Fernando — Desenvolvedor Full Stack',
    template: '%s | Luiz Fernando',
  },
  description:
    'Portfólio de Luiz Fernando, Desenvolvedor Full Stack apaixonado por criar aplicações modernas, performáticas e intuitivas com React, Node.js, TypeScript e MySQL.',
  keywords: [
    'Luiz Fernando',
    'Desenvolvedor Full Stack',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Portfólio',
    'Desenvolvedor Web',
  ],
  authors: [{ name: 'Luiz Fernando' }],
  creator: 'Luiz Fernando',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    title: 'Luiz Fernando — Desenvolvedor Full Stack',
    description:
      'Desenvolvedor Full Stack apaixonado por criar aplicações modernas, performáticas e intuitivas.',
    siteName: 'Luiz Fernando',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luiz Fernando — Desenvolvedor Full Stack',
    description:
      'Desenvolvedor Full Stack apaixonado por criar aplicações modernas, performáticas e intuitivas.',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrains.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
