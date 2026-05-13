'use client'

import { motion } from 'framer-motion'

const pills = [
  '4+ Years · Economic, Policy, Consumer and Social Research',
  '50+ Annual Programs · Fortune 500, Government, Policy',
  'Research Management · End-to-End Program Ownership',
  'Mixed Methods · Quantitative and Qualitative Design',
  'Insights to Action · Stakeholder Narratives · Executive Communication',
  'Cross-Functional Execution · Vendor and Partner Management',
  'AI-Optimized Workflows · Python · SQL · NLP',
]

export default function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-content mx-auto px-5 md:px-[52px]">
        {/* Two-column: name left, description right */}
        <div className="grid-hero mb-12 md:mb-16">
          {/* Left: name */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p style={{ fontSize: 'clamp(36px, 6vw, 52px)', letterSpacing: '-0.03em', lineHeight: 1.08 }}>
                <span style={{ fontWeight: 300, color: '#6b6560' }}>Hello, I&apos;m</span>
                <br />
                <span style={{ fontWeight: 700, color: '#1a1816' }}>Camille Hoy.</span>
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-6 text-[20px]"
              style={{ fontWeight: 300, color: '#c17f5a' }}
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
            (consumers, voters, patients, business owners) and their attitudes,
            behaviors, and beliefs into research that organizations can actually
            act on.
          </motion.p>
        </div>

        {/* 7 pills — 2 cols, 4 rows, last pill centered */}
        <div className="grid grid-cols-2 gap-3">
          {pills.map((pill, i) => {
            const isLast = i === pills.length - 1
            return (
              <motion.div
                key={pill}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                className={`text-[11px] font-light text-warm text-center${isLast ? ' col-span-2 mx-auto w-[calc(50%-6px)]' : ''}`}
                style={{
                  borderRadius: '20px',
                  border: '0.5px solid #c0bbb4',
                  padding: '9px 18px',
                  lineHeight: 1.5,
                }}
              >
                {pill}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
