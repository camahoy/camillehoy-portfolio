'use client'

import { motion } from 'framer-motion'

const pills = [
  '4+ Years · Economic, Policy and Consumer Research',
  '50+ Annual Programs · Fortune 500, Federal, Policy',
  'Research Operations · Strategy and Ops · Customer Success',
  'Cited · Reuters · ABC News · The Washington Post',
  'AI Tools · Python · SQL · NLP · Active Builder',
  'Published Contributor · Dove Press 2023',
]

export default function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-content mx-auto px-[52px]">
        {/* Two-column: name left, description right */}
        <div
          className="grid items-start mb-16"
          style={{ gridTemplateColumns: '55% 1fr', gap: '64px' }}
        >
          {/* Left: name */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p
                className="text-ink"
                style={{
                  fontSize: '52px',
                  fontWeight: 500,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.08,
                }}
              >
                Hello, I&apos;m
                <br />
                Camille Hoy.
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-6 text-[20px] text-muted"
              style={{ fontWeight: 300 }}
            >
              ↓
            </motion.p>
          </div>

          {/* Right: description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[13px] font-light text-warm leading-[1.9] pt-2"
          >
            Research and insights strategist. Turning curiosity about people
            — consumers, voters, patients — into research that organizations
            can actually act on.
          </motion.p>
        </div>

        {/* 6 round pills in 3×2 grid */}
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {pills.map((pill, i) => (
            <motion.div
              key={pill}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
              className="text-[11px] font-light text-warm px-4 py-2.5 text-center"
              style={{
                borderRadius: '20px',
                border: '0.5px solid #c0bbb4',
                lineHeight: 1.5,
              }}
            >
              {pill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
