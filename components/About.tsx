'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const axes = [
  {
    n: '01',
    title: 'Data',
    desc: 'SQL, Python, NLP pipelines. The infrastructure that makes insight repeatable.',
  },
  {
    n: '02',
    title: 'Strategy',
    desc: 'Translating ambiguous questions into research that informs real decisions.',
  },
  {
    n: '03',
    title: 'Execution',
    desc: 'Milestones, vendors, compliance, stakeholder alignment. Landing on time.',
  },
]

const pillRows = [
  ['Economic Research', 'Consumer Insights', 'Policy Research'],
  ['Social Research', 'Research Operations', 'Strategy and Ops'],
  ['AI-Powered Research', 'Client Strategy and Engagement', 'Public Affairs'],
]

const centerIndices = new Set([1, 4, 7])

export default function About() {
  const sectionRef = useRef(null)
  const pillRef = useRef(null)

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.85', 'center 0.55'],
  })

  const { scrollYProgress: pillProgress } = useScroll({
    target: pillRef,
    offset: ['start 0.9', 'center 0.6'],
  })

  const gap = useTransform(pillProgress, [0, 1], ['32px', '8px'])
  const pillRadius = useTransform(pillProgress, [0, 1], ['20px', '3px'])
  const centerRadius = useTransform(pillProgress, [0, 1], ['20px', '4px'])
  const centerBorder = useTransform(pillProgress, [0, 1], ['#c0bbb4', '#a08278'])

  const allPills = pillRows.flat()

  return (
    <section id="about" className="py-20" ref={sectionRef}>
      <div className="section-grid">
        <div>
          <p className="label">About</p>
        </div>
        <div>
          {/* Inner two-column: text + axes */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 mb-14"
            style={{ gridTemplateColumns: '1fr 260px' }}
          >
            {/* Body text */}
            <div className="space-y-5">
              <p className="text-[14px] font-light text-warm leading-[1.9]">
                Research and insights strategist at the crossroads of data,
                strategy, and execution. Four years designing programs that help
                organizations understand the people they serve and act on what
                they find.
              </p>
              <p className="text-[14px] font-light text-warm leading-[1.9]">
                What drives the work is genuine curiosity. Not collecting data
                for its own sake, but finding the insight that shifts something
                — the outlier that reframes the question, the pattern nobody
                thought to look for.
              </p>
            </div>

            {/* How I work */}
            <div>
              <p className="text-[10px] font-light uppercase tracking-[0.18em] text-muted mb-5">
                How I work
              </p>
              {axes.map((ax, i) => (
                <div
                  key={ax.n}
                  className={`py-4 ${i < axes.length - 1 ? 'border-b' : ''}`}
                  style={{ borderColor: '#ddd8d0', borderBottomWidth: i < axes.length - 1 ? '0.5px' : 0 }}
                >
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-[11px] font-light text-muted">{ax.n}</span>
                    <span className="text-[13px] font-medium text-ink">{ax.title}</span>
                  </div>
                  <p className="text-[12px] font-light text-muted leading-[1.7] pl-7">
                    {ax.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 9-pill compression grid */}
          <div ref={pillRef}>
            <motion.div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap,
              }}
            >
              {allPills.map((pill, i) => {
                const isCenter = centerIndices.has(i)
                return (
                  <motion.div
                    key={pill}
                    className="text-[11px] font-light text-warm px-4 py-2.5 text-center"
                    style={{
                      borderRadius: isCenter ? centerRadius : pillRadius,
                      border: '0.5px solid',
                      borderColor: isCenter ? centerBorder : '#c0bbb4',
                      background: isCenter ? '#f5f1ee' : 'transparent',
                      lineHeight: 1.5,
                    }}
                  >
                    {pill}
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
