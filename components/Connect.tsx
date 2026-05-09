'use client'

import { motion } from 'framer-motion'

export default function Connect() {
  return (
    <section id="connect" className="py-20">
      <div className="section-grid">
        <div>
          <p className="label">Connect</p>
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-[22px] font-light text-ink leading-[1.6] tracking-[-0.01em] mb-12"
            style={{ maxWidth: '560px' }}
          >
            I am interested in having conversations about research, AI, strategy,
            and the intersection of data and people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex gap-8 items-center flex-wrap"
          >
            <a
              href="mailto:camilleahoy@gmail.com"
              className="text-[13px] font-light text-warm no-underline transition-colors duration-150 hover:text-ink"
            >
              camilleahoy@gmail.com
            </a>
            <span className="text-[#c0bbb4] text-[11px]">·</span>
            <a
              href="https://www.linkedin.com/in/camillehoy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-light text-warm no-underline transition-colors duration-150 hover:text-ink"
            >
              LinkedIn
            </a>
            <span className="text-[#c0bbb4] text-[11px]">·</span>
            <a
              href="https://camillehoy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-light text-warm no-underline transition-colors duration-150 hover:text-ink"
            >
              camillehoy.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
