'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { ParticlesBackground } from '@/components/particles-background'

const floatingTech = [
  { name: 'React', className: 'left-0 top-6' },
  { name: 'Node.js', className: 'right-0 top-16' },
  { name: 'TypeScript', className: 'left-2 bottom-24' },
  { name: 'Tailwind', className: 'right-2 bottom-10' },
  { name: 'MySQL', className: '-left-6 top-1/2' },
  { name: 'Express', className: '-right-4 top-1/3' },
]

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    const speed = deleting ? 45 : 90
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1400)
        }
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length === 0) {
          setDeleting(false)
          setIndex((i) => i + 1)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return text
}

export function Hero() {
  const { t } = useLanguage()
  const typed = useTypewriter(t.hero.roles)

  const socials = [
    { icon: Github, href: 'https://github.com/luizfernando', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/luizfernando',
      label: 'LinkedIn',
    },
  ]

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <ParticlesBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-brand-blue/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-1/4 h-[32rem] w-[32rem] rounded-full bg-brand-purple/10 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {t.hero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            {t.hero.greeting}{' '}
            <span className="text-gradient">{t.hero.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex h-8 items-center justify-center gap-1 font-mono text-lg text-primary sm:text-xl lg:justify-start"
          >
            <Sparkles className="h-4 w-4" />
            <span>{typed}</span>
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:mx-0"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground/80 lg:mx-0"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Link
              href="#projetos"
              className="glow-blue inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {t.hero.viewProjects}
              <ArrowDown className="h-4 w-4" />
            </Link>
            <a
              href="/cv-luiz-fernando.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Download className="h-4 w-4" />
              {t.hero.downloadCV}
            </a>
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" />
              {t.hero.contact}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 flex items-center justify-center gap-3 lg:justify-start"
          >
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-full bg-gradient-to-tr from-brand-blue/30 to-brand-purple/30 blur-2xl"
          />
          <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-full border border-border p-1.5 sm:w-72">
            <div className="h-full w-full overflow-hidden rounded-full">
              <Image
                src="/luiz-fernando.png"
                alt="Foto de Luiz Fernando"
                width={320}
                height={320}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {floatingTech.map((tech, i) => (
            <motion.div
              key={tech.name}
              className={`glass absolute rounded-xl border border-border px-3 py-1.5 font-mono text-xs font-medium ${tech.className}`}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            >
              {tech.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
