'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#tools', label: 'Built' },
  { href: '#cited', label: 'Cited' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#experience', label: 'Experience' },
  { href: '#connect', label: 'Connect' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 h-16 px-14 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? 'bg-white/97 border-b border-light shadow-[0_1px_12px_rgba(30,25,22,0.06)]'
          : 'bg-white/96 border-b border-light'
      }`}
      style={{ backdropFilter: 'blur(20px)' }}
    >
      <span className="font-serif text-[17px] text-ink tracking-[0.01em]">
        Camille Hoy
      </span>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-9 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[11px] tracking-wider uppercase text-mid no-underline transition-colors duration-200 hover:text-rose"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span
          className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
        />
        <span
          className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 right-0 bg-white border-b border-light py-6 px-14 flex flex-col gap-4 md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] tracking-wider uppercase text-mid no-underline hover:text-rose"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
