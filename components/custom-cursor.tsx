'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = e.target as HTMLElement
      setHovering(
        Boolean(el.closest('a, button, [role="button"], input, textarea')),
      )
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          width: hovering ? 44 : 20,
          height: hovering ? 44 : 20,
          backgroundColor: hovering
            ? 'rgba(139,130,246,0.18)'
            : 'rgba(96,130,246,0.10)',
          borderColor: hovering
            ? 'rgba(139,130,246,0.8)'
            : 'rgba(96,130,246,0.6)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        style={{
          border: '1px solid',
          boxShadow: '0 0 20px -4px rgba(96,130,246,0.6)',
        }}
      />
    </motion.div>
  )
}
