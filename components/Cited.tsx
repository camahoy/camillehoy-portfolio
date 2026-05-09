'use client'

import { motion } from 'framer-motion'

const citations = [
  {
    outlet: 'Reuters',
    desc: 'Cited in economic and consumer market sentiment coverage',
    href: '#',
  },
  {
    outlet: 'ABC News',
    desc: 'Public opinion and consumer behavior research',
    href: '#',
  },
  {
    outlet: 'Washington Post',
    desc: 'U.S. economic trends and public sentiment research',
    href: '#',
  },
  {
    outlet: 'LSEG',
    desc: 'Weekly Consumer Tracker — economic sentiment memos',
    href: '#',
  },
  {
    outlet: 'Dove Press',
    desc: 'Published contributor — International Journal of COPD, 2023',
    href: '#',
  },
  {
    outlet: 'Client Research',
    desc: 'Google · Mastercard · Visa · World Bank · Pew · CDC · AARP',
    href: '#',
  },
]

export default function Cited() {
  return (
    <section id="cited" className="py-20">
      <div className="section-grid">
        <div>
          <p className="label">Cited</p>
        </div>
        <div>
          <p className="text-[13px] font-light text-muted italic mb-10">
            Research that reached beyond the report.
          </p>

          <div>
            {citations.map((c, i) => (
              <motion.div
                key={c.outlet}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-baseline gap-6 py-4"
                style={{ borderBottom: '0.5px solid #ddd8d0' }}
              >
                <span
                  className="text-[10px] font-light uppercase tracking-[0.14em] text-muted flex-shrink-0"
                  style={{ minWidth: '120px' }}
                >
                  {c.outlet}
                </span>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-light text-warm no-underline transition-colors duration-150 hover:text-ink"
                  style={{ textDecorationColor: 'var(--rose)' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = 'underline')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = 'none')
                  }
                >
                  {c.desc}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
