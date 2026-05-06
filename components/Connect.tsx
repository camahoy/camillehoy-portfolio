'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Connect() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section id="connect" className="py-28 bg-white">
      <div className="max-w-[1080px] mx-auto px-14">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[640px]"
        >
          <h2
            className="font-serif font-bold text-ink leading-[1.06] tracking-[-0.025em] mb-7"
            style={{ fontSize: 'clamp(44px, 5vw, 68px)' }}
          >
            Let&apos;s
            <br />
            <em className="italic text-rose font-normal">talk</em>
          </h2>
          <p className="text-[16px] text-warm leading-[1.8] font-light mb-10 max-w-[480px]">
            Always open to conversations about research, AI, strategy, data,
            policy — or how people actually think and what to do about it.
          </p>
          <div className="flex gap-5 flex-wrap">
            {[
              { label: 'camilleahoy@gmail.com', href: 'mailto:camilleahoy@gmail.com' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/camille-hoy' },
              { label: 'camillehoy.com', href: 'https://camillehoy.com' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-[11px] tracking-wider uppercase text-ink no-underline border-b border-rose pb-0.5 transition-colors duration-200 hover:text-rose"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
