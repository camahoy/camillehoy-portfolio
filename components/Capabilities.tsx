'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const rows = [
  [
    {
      title: 'Research and Strategy',
      items: [
        'Economic and policy research',
        'Mixed-methods research design',
        'Literature reviews and synthesis',
        'Consumer and social insights',
        'Brand and reputation research',
        'Longitudinal tracking studies',
        'Go-to-market research',
        'Competitive intelligence',
      ],
    },
    {
      title: 'Operations and Delivery',
      items: [
        'Program scoping and workplanning',
        'Milestone and capacity planning',
        'Vendor and partner management',
        'SOP development and data QA',
        'IRB, GDPR, ISO-27001 compliance',
        'Cross-functional alignment',
        'Client success and retention',
        'Executive communication',
      ],
    },
    {
      title: 'Technical and AI',
      items: [
        'Python (Pandas, NumPy)',
        'SQL and BigQuery',
        'Tableau and SPSS',
        'NLP pipelines',
        'Conjoint, MaxDiff, regression',
        'Claude, NotebookLM, Gemini',
        'Listen Labs and Outset',
        'AI-assisted qualitative synthesis',
      ],
    },
  ],
  [
    {
      title: 'Industries',
      items: [
        'Economic and financial services',
        'Public policy and government',
        'Consumer and retail',
        'Healthcare and public health',
        'Technology and AI',
        'Corporate reputation',
        'Global development',
        'Social and political research',
      ],
    },
    {
      title: 'Audiences Researched',
      items: [
        'SMB owners and entrepreneurs',
        'Healthcare patients and caregivers',
        'Older adults and veterans',
        'Low-income and underserved groups',
        'Financial markets participants',
        'Policymakers and officials',
        'C-suite and senior executives',
        'General population and consumers',
      ],
    },
    {
      title: 'Languages',
      items: [
        'English (native)',
        'French (native/bilingual)',
        'Spanish (intermediate)',
      ],
    },
  ],
]

export default function Capabilities() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section id="capabilities" className="py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-[1080px] mx-auto px-14" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="eyebrow-line text-[10px] tracking-[0.3em] uppercase text-rose mb-3.5 flex items-center">
            What I work with
          </p>
          <h2
            className="font-serif font-bold text-ink leading-[1.12] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(32px, 3.6vw, 50px)' }}
          >
            Capabilities
          </h2>
        </motion.div>

        <div className="space-y-px">
          {rows.map((row, ri) => (
            <div
              key={ri}
              className="grid gap-px"
              style={{
                gridTemplateColumns: 'repeat(3,1fr)',
                background: 'var(--light)',
              }}
            >
              {row.map((col, ci) => (
                <motion.div
                  key={col.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + ri * 0.12 + ci * 0.07,
                  }}
                  className="px-8 py-10"
                  style={{ background: 'var(--bg)' }}
                >
                  <p
                    className="text-[10px] tracking-[0.25em] uppercase text-ink mb-6 pb-3 border-b-2"
                    style={{ borderColor: 'var(--rose-l)' }}
                  >
                    {col.title}
                  </p>
                  {col.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 mb-2.5">
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
                        style={{ background: 'var(--rose-l)' }}
                      />
                      <p className="text-[13px] text-warm leading-[1.5]">
                        {item}
                      </p>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
