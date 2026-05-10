'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const tools = [
  {
    idx: '001',
    type: 'Data Visualization',
    name: 'Cross Star Studio',
    desc: 'Automated data output system that transforms raw survey tables into clean, executive-ready formats. Removed the manual formatting bottleneck between collection and delivery.',
    impact: 'Reduced reporting time from weeks to days.',
    tags: ['SQL', 'Python', 'Tableau', 'Automation'],
    demoHref: '/demo/cross-star-studio',
  },
  {
    idx: '002',
    type: 'Operations Infrastructure',
    name: 'Research Ops Organizer',
    desc: 'Notion-based program management system for concurrent research studies. Single source of truth for milestones, vendors, compliance, and capacity.',
    impact: '50+ concurrent programs. Zero dropped threads.',
    tags: ['Notion', 'Program Management', 'SOP Design'],
    demoHref: '/demo/research-ops-organizer',
  },
  {
    idx: '003',
    type: 'AI Knowledge System',
    name: 'Research Brain',
    desc: 'Living knowledge repository that follows multiple research streams simultaneously. Organizes literature, tags findings by theme, surfaces what matters across projects.',
    impact: 'Faster study design. Zero repeated insights.',
    tags: ['AI Tools', 'NLP', 'Literature Review', 'Knowledge Management'],
    demoHref: '/demo/research-brain',
  },
]

export default function Tools() {
  return (
    <section id="tools" className="py-20">
      <div className="section-grid">
        <div>
          <p className="label">Tools I built</p>
        </div>
        <div>
          <p className="text-[13px] font-light text-muted italic mb-12">
            Identified a gap. Built something to close it.
          </p>

          <div className="space-y-0">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid-tools-card"
              >
                {/* Index — hidden on mobile via CSS */}
                <span className="tools-index-col text-[12px] font-light text-rose-l pt-0.5 tabular-nums">
                  {tool.idx}
                </span>

                {/* Content */}
                <div>
                  {/* Show index inline on mobile */}
                  <p className="md:hidden text-[11px] font-light text-rose-l tabular-nums mb-2">
                    {tool.idx}
                  </p>
                  <p className="text-[10px] font-light uppercase tracking-[0.18em] text-muted mb-2">
                    {tool.type}
                  </p>
                  <h3 className="text-[18px] font-medium text-ink mb-3 tracking-[-0.01em]">
                    {tool.name}
                  </h3>
                  <p className="text-[13px] font-light text-warm leading-[1.9] mb-3">
                    {tool.desc}
                  </p>
                  <p className="text-[13px] font-light text-muted italic mb-4">
                    {tool.impact}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-light text-muted px-4 py-2"
                        style={{
                          borderRadius: '20px',
                          border: '0.5px solid #c0bbb4',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="tools-buttons-col flex flex-col gap-2 pt-0.5">
                  <Link
                    href={tool.demoHref}
                    className="text-[11px] font-light uppercase tracking-[0.1em] text-bg no-underline text-center py-2.5 px-4 transition-opacity hover:opacity-80"
                    style={{
                      background: '#1a1816',
                      borderRadius: '4px',
                    }}
                  >
                    Live Demo
                  </Link>
                  <a
                    href="https://github.com/camahoy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-light uppercase tracking-[0.1em] text-ink no-underline text-center py-2.5 px-4 transition-colors hover:border-ink"
                    style={{
                      border: '0.5px solid #c0bbb4',
                      borderRadius: '4px',
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: '0.5px solid #ddd8d0' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
