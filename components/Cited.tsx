'use client'

import { motion } from 'framer-motion'

const citations = [
  {
    outlet: 'Reuters',
    desc: 'Reuters/Ipsos Issues Survey May 2025',
    href: 'https://www.ipsos.com/en-us/news-polls/reuters-ipsos-issues-survey-may-2025',
  },
  {
    outlet: 'ABC News',
    desc: 'Public opinion and consumer behavior research',
    href: '#',
  },
  {
    outlet: 'Washington Post',
    desc: 'U.S. immigration approval and policy sentiment tracking, 2025',
    href: '#',
  },
  {
    outlet: 'LSEG',
    desc: 'Weekly Consumer Tracker, economic sentiment memos',
    href: 'https://www.ipsos.com/en-us/news-polls/consumer-behavior-time-covid-19',
  },
  {
    outlet: 'Ipsos',
    desc: 'Does the US-UK special relationship still exist?',
    href: 'https://www.ipsos.com/en-us/does-us-uk-special-relationship-still-exist',
  },
  {
    outlet: 'Client Research',
    desc: 'Google · Mastercard · Visa · World Bank · Pew · CDC · AARP',
    href: null,
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
                className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 py-4"
                style={{ borderBottom: '0.5px solid #ddd8d0' }}
              >
                <span
                  className="text-[10px] font-light uppercase tracking-[0.14em] text-muted flex-shrink-0"
                  style={{ minWidth: '120px' }}
                >
                  {c.outlet}
                </span>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href !== '#' ? '_blank' : undefined}
                    rel={c.href !== '#' ? 'noopener noreferrer' : undefined}
                    className="text-[13px] font-light text-warm no-underline transition-colors duration-150 hover:text-terracotta"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = 'underline'
                      e.currentTarget.style.textDecorationColor = '#c17f5a'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = 'none'
                    }}
                  >
                    {c.desc}
                  </a>
                ) : (
                  <span className="text-[13px] font-light text-warm">
                    {c.desc}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
