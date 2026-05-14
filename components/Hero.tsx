'use client'

import { motion } from 'framer-motion'

const pills = [
  '4+ Years · Consumer, Economic, Policy and Social Research',
  '50+ Annual Programs · Fortune 500, Government, Emerging Tech, Policy',
  'End-to-End Program Ownership · Research Management',
  'Mixed Methods · Quantitative and Qualitative Design',
  'Integrated Insights · Stakeholder Narratives · Executive Communication',
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

          {/* Right: description — editorial treatment */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 space-y-4"
          >
            <p className="text-[15px] font-medium text-ink leading-[1.7] tracking-[-0.01em]">
              Studying people and building the research infrastructure that turns
              that understanding into something an organization can act on.
            </p>
            <p className="text-[13px] font-light text-warm leading-[1.9]">
              What drives the work is{' '}
              <em style={{ color: '#c17f5a', fontStyle: 'normal', fontWeight: 500 }}>belief</em>
              {' '}— how it forms, what sustains it, what moves it. Not opinion
              as a data point, but{' '}
              <span style={{ fontWeight: 400, color: '#4a4540' }}>conviction as something that develops
              over time, under pressure, inside a life</span>.
            </p>
            <p className="text-[13px] font-light text-warm leading-[1.9]">
              I&apos;m drawn to{' '}
              <span style={{ fontWeight: 500, color: '#1a1816' }}>questions that don&apos;t fully resolve</span>
              {' '}— where the data surfaces something that earns the next question,
              and the next shift in the world makes it worth asking again.
            </p>
            <p className="text-[14px] font-medium tracking-[-0.01em]" style={{ color: '#c17f5a' }}>
              Good research holds until the world shifts. I build for both.
            </p>
          </motion.div>
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
