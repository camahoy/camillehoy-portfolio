'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const links = [
  { href: '#tools', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#connect', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'rgba(240,238,235,0.97)' : 'rgba(240,238,235,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '0.5px solid #ddd8d0',
      }}
    >
      <div
        className="max-w-content mx-auto px-[52px] h-14 flex items-center justify-between"
      >
        <a
          href="#"
          className="text-[13px] font-medium text-ink no-underline tracking-[-0.01em]"
        >
          Camille Hoy
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-light uppercase tracking-[0.12em] text-muted no-underline hover:text-ink transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
