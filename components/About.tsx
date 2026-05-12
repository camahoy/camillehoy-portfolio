'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const axes = [
  {
    n: '01',
    title: 'Data',
    desc: 'Survey design, sampling methodology, quantitative and qualitative execution, A/B testing, MaxDiff, regression analysis, SPSS, SQL, Python, NLP pipelines. Building the infrastructure that makes findings credible, defensible, and repeatable.',
  },
  {
    n: '02',
    title: 'Strategy',
    desc: 'Translating ambiguous business, marketing, and policy questions into well-scoped research. Surfacing themes across markets, identifying nuances, and delivering integrated perspectives that only come from connecting multiple data sources. Communicating findings through compelling narratives tailored to every audience.',
  },
  {
    n: '03',
    title: 'Execution',
    desc: 'End-to-end program management across concurrent studies. Agency onboarding, RFP management, milestone planning, vendor coordination, compliance, and stakeholder reporting. Trusted to keep the operating rhythm tight and deliver across multiple priorities simultaneously.',
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
          {/* Opening line */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-[16px] font-medium text-ink tracking-[-0.01em] mb-8"
          >
            Insights do not emerge. They are designed.
          </motion.p>

          {/* Inner two-column: text + axes */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid-about-inner mb-14"
          >
            {/* Body text */}
            <div className="space-y-5">
              <p className="text-[14px] font-light text-warm leading-[1.9]">
                Research and insights strategist with four years building credible,
                defensible, and actionable research programs across consumer
                behavior, public opinion, corporate reputation, brand health,
                policy trends, and social research.
              </p>
              <p className="text-[14px] font-light text-warm leading-[1.9]">
                Rigorous research starts with sound design and ends with a
                decision. I work across the entire chain, from methodology and
                data collection through analysis, delivery, and the stakeholder
                conversations that turn findings into action. I operate as a
                strategist, not a service: already knowing what the team needs
                before a request comes in, solving problems rather than answering
                questions, and making sure my presence in the room is the asset,
                not just the report.
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
