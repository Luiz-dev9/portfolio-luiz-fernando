'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function Footer() {
  const { t } = useLanguage()

  const socials = [
    { icon: Github, href: 'https://github.com/Luiz-dev9', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/luiz-fernando-b17736345?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      label: 'LinkedIn',
    },
    { icon: Mail, href: 'mailto:contato@luizfernando.dev', label: 'Email' },
  ]

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 md:flex-row md:justify-between">
        <Link href="/#inicio" className="font-mono text-lg font-bold">
          <span className="text-gradient">Luiz Fernando</span>
        </Link>

        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground md:text-right">
          <p>{t.footer.line1}</p>
          <p>{t.footer.line2}</p>
        </div>
      </div>
    </footer>
  )
}
