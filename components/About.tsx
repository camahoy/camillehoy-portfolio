'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pills = [
  'Research Operations',
  'Economic Research',
  'Policy Research',
  'Consumer Insights',
  'Strategy and Ops',
  'Customer Success',
  'AI-Powered Research',
  'Cross-Functional Execution',
]

const axes = [
  {
    n: '01',
    title: 'Data',
    desc: 'SQL, Python, NLP pipelines, dashboards. The infrastructure that makes insight repeatable and fast.',
  },
  {
    n: '02',
    title: 'Strategy',
    desc: 'Translating ambiguous questions into research that informs real decisions across product, policy, and GTM.',
  },
  {
    n: '03',
    title: 'Execution',
    desc: 'Milestones, vendors, compliance, stakeholder alignment. Making sure the work lands on time, every time.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="about" className="py-28">
      <div className="max-w-[1080px] mx-auto px-14" ref={ref}>
        <div
          className="grid gap-[88px] items-start"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow-line text-[10px] tracking-[0.3em] uppercase text-rose mb-3.5 flex items-center">
              About
            </p>
            <h2
              className="font-serif font-bold text-ink leading-[1.12] tracking-[-0.02em] mb-8"
              style={{ fontSize: 'clamp(32px, 3.6vw, 50px)' }}
            >
              Data, strategy,
              <br />
              and <em className="italic text-rose font-normal">execution</em>
            </h2>
            <div className="space-y-[22px]">
              {[
                'Research and insights strategist at the crossroads of data, strategy, and execution. Four years designing and running programs that help organizations understand the people they serve — consumers, patients, voters, business owners — and act on what they find.',
                'What drives the work is <strong>genuine curiosity</strong>. Not collecting data for its own sake, but finding the insight that shifts something. The outlier that reframes the question. The pattern that nobody thought to look for.',
                'Comfortable working at every level — from methodology with data scientists to two-slide briefings for executives. Fluent across industries because every industry is ultimately about people and what they need.',
              ].map((p, i) => (
                <p
                  key={i}
                  className="text-[16px] text-warm leading-[1.9] font-light"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-9">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="text-[11px] text-mid tracking-[0.04em] border border-light px-4 py-1.5 rounded-sm bg-white"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] tracking-[0.25em] uppercase text-mid mb-6">
              How I work
            </p>
            {axes.map((ax, i) => (
              <div
                key={ax.n}
                className={`grid gap-[18px] py-[22px] border-b border-light items-start ${i === 0 ? 'border-t' : ''}`}
                style={{ gridTemplateColumns: '52px 1fr' }}
              >
                <span className="font-serif text-[32px] text-light font-bold leading-none">
                  {ax.n}
                </span>
                <div>
                  <p className="font-serif text-[18px] text-ink mb-0.5">
                    {ax.title}
                  </p>
                  <p className="text-[13px] text-mid leading-[1.7]">{ax.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
