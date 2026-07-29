'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'

export function Preloader() {
  const [done, setDone] = useState(false)
  const { t } = useLanguage()
  const name = 'Luiz Fernando'

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 2000)
    document.body.style.overflow = 'hidden'
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (done) document.body.style.overflow = ''
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex overflow-hidden">
            {name.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: '120%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-2xl font-bold tracking-tight sm:text-4xl"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="mt-6 h-0.5 w-40 overflow-hidden rounded-full bg-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-brand-blue to-brand-purple"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 1.2, ease: 'easeInOut' }}
            />
          </motion.div>
          <motion.p
            className="mt-4 font-mono text-xs tracking-widest text-muted-foreground uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {t.preloader}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
