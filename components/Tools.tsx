'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import DemoModal from './DemoModal'

type DemoId = 'data-output' | 'research-ops' | 'research-brain'

const GithubIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const tools = [
  {
    idx: '001',
    type: 'Data Visualization',
    name: 'Data Output Banner',
    desc: 'Designed a standardized data output system that automated clean table generation across recurring research programs. Identified that manual formatting was the bottleneck between data collection and delivery and built a system to remove it.',
    impact: 'Reduced reporting time from several weeks to a few days across 50+ annual programs.',
    tags: ['SQL', 'Python', 'Tableau', 'Automation'],
    demoId: 'data-output' as DemoId,
  },
  {
    idx: '002',
    type: 'Operations Infrastructure',
    name: 'Research Ops Organizer',
    desc: 'Built a Notion-based program management system to track concurrent research programs, deadlines, and client deliverables. Identified that version confusion and manual check-ins were slowing cross-functional teams down and designed a single source of truth to fix it.',
    impact: 'Kept 50+ concurrent annual programs aligned without manual coordination overhead.',
    tags: ['Notion', 'Program Management', 'SOP Design', 'Compliance Tracking'],
    demoId: 'research-ops' as DemoId,
  },
  {
    idx: '003',
    type: 'AI-Powered Knowledge System',
    name: 'Research Brain',
    desc: 'Developed a living research repository that maintains intelligence on client landscapes, competitive context, and prior findings across program waves. Built to solve the problem of institutional knowledge getting buried between engagements.',
    impact: 'Faster study design and zero repeated insights across longitudinal programs.',
    tags: ['AI Tools', 'NLP', 'Literature Review', 'Knowledge Management'],
    demoId: 'research-brain' as DemoId,
  },
]

export default function Tools() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })
  const [activeDemo, setActiveDemo] = useState<DemoId | null>(null)

  return (
    <section id="tools" className="py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-[1080px] mx-auto px-14" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="eyebrow-line text-[10px] tracking-[0.3em] uppercase text-rose mb-3.5 flex items-center">
            Things I have built
          </p>
          <h2
            className="font-serif font-bold text-ink leading-[1.12] tracking-[-0.02em] mb-3.5"
            style={{ fontSize: 'clamp(32px, 3.6vw, 50px)' }}
          >
            Tools that came from
            <br />
            seeing a{' '}
            <em className="italic text-rose font-normal">better way</em>
          </h2>
          <p className="text-[16px] text-mid leading-[1.8] font-light max-w-[560px]">
            Each one started with identifying a gap in how research was being
            done and building something to close it.
          </p>
        </motion.div>

        <div>
          {tools.map((tool, i) => (
            <motion.div
              key={tool.idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className={`group grid gap-10 py-12 border-b border-light items-start transition-all duration-300 hover:bg-white hover:-mx-14 hover:px-14 ${i === 0 ? 'border-t' : ''}`}
              style={{ gridTemplateColumns: '52px 1fr auto' }}
            >
              <p className="text-[12px] text-light tracking-[0.06em] pt-1 tabular-nums">
                {tool.idx}
              </p>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-rose mb-2.5">
                  {tool.type}
                </p>
                <h3 className="font-serif text-[26px] text-ink font-bold mb-3.5 tracking-[-0.01em]">
                  {tool.name}
                </h3>
                <p className="text-[14px] text-mid leading-[1.78] font-light max-w-[520px] mb-4">
                  {tool.desc}
                </p>
                <p className="text-[13px] text-rose italic mb-4">
                  {tool.impact}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-mid border border-light px-3 py-1 rounded-sm tracking-[0.03em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2.5 items-end pt-1">
                <button
                  onClick={() => setActiveDemo(tool.demoId)}
                  className="text-[10px] tracking-wider uppercase text-rose border border-rose-l px-4.5 py-2 rounded-sm whitespace-nowrap transition-all duration-200 hover:bg-rose hover:text-white hover:border-rose"
                  style={{ padding: '8px 18px' }}
                >
                  Live Demo
                </button>
                <a
                  href="https://github.com/camahoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-[0.1em] uppercase text-mid no-underline flex items-center gap-1.5 hover:text-ink transition-colors"
                >
                  <GithubIcon />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <DemoModal demoId={activeDemo} onClose={() => setActiveDemo(null)} />
    </section>
  )
}
