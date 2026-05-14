'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const tools = [
  {
    idx: '001',
    type: 'Data Visualization',
    name: 'Cross Stab Studio',
    need: 'Raw data exports were eating hours of manual formatting before anything useful could be delivered.',
    desc: 'A workflow tool for reformatting raw survey data and market research exports into clean, executive-ready formats including media releases, updated Excel tables, and client-ready outputs.',
    impact: 'Reduced reporting time from several weeks to a few days.',
    tags: ['SQL', 'Python', 'Tableau', 'Automation'],
    demoHref: '/demo/cross-star-studio',
    githubHref: 'https://github.com/camahoy/crosstab-studio',
    demoExternal: false,
  },
  {
    idx: '002',
    type: 'Operations Infrastructure',
    name: 'Research Ops Organizer',
    need: 'Running 50+ concurrent programs with no single source of truth for milestones, deliverables, or compliance.',
    desc: 'A Notion-based program management system that tracks concurrent research studies, vendor touchpoints, compliance requirements, and team capacity in one place.',
    impact: '50+ concurrent programs. Nothing dropped.',
    tags: ['Notion', 'Program Management', 'SOP Design'],
    demoHref: '/demo/research-ops-organizer',
    githubHref: 'https://github.com/camahoy',
    demoExternal: false,
  },
  {
    idx: '003',
    type: 'AI Knowledge System',
    name: 'Signal Streams',
    need: 'Institutional knowledge was getting buried between program waves and study design was starting from scratch each time.',
    desc: 'A living knowledge repository that follows multiple research streams simultaneously. Organizes literature, tags findings by theme, and surfaces relevant prior work so every study starts informed.',
    impact: 'Faster, better-informed study design across every program.',
    tags: ['AI Tools', 'NLP', 'Literature Review', 'Knowledge Management'],
    demoHref: 'https://research-repo-xi.vercel.app',
    githubHref: 'https://github.com/camahoy/Research-Repo',
    demoExternal: true,
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
            Research moves at the speed of the systems behind it. These tools came
            out of needs I identified on the ground.
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
                  <p className="md:hidden text-[11px] font-light text-rose-l tabular-nums mb-2">
                    {tool.idx}
                  </p>
                  <p className="text-[10px] font-light uppercase tracking-[0.18em] text-muted mb-2">
                    {tool.type}
                  </p>
                  <h3 className="text-[18px] font-medium text-ink mb-3 tracking-[-0.01em]">
                    {tool.name}
                  </h3>
                  <p className="text-[13px] font-light text-muted italic mb-2">
                    The need: {tool.need}
                  </p>
                  <p className="text-[13px] font-light text-warm leading-[1.9] mb-3">
                    {tool.desc}
                  </p>
                  <p className="text-[13px] font-light italic mb-4" style={{ color: '#c17f5a' }}>
                    {tool.impact}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-light text-muted px-4 py-2"
                        style={{ borderRadius: '20px', border: '0.5px solid #c0bbb4' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="tools-buttons-col flex flex-col gap-2 pt-0.5">
                  {tool.demoExternal ? (
                    <a
                      href={tool.demoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-light uppercase tracking-[0.1em] text-bg no-underline text-center py-2.5 px-4 transition-opacity hover:opacity-80"
                      style={{ background: '#1a1816', borderRadius: '4px' }}
                    >
                      Live Demo
                    </a>
                  ) : (
                    <Link
                      href={tool.demoHref}
                      className="text-[11px] font-light uppercase tracking-[0.1em] text-bg no-underline text-center py-2.5 px-4 transition-opacity hover:opacity-80"
                      style={{ background: '#1a1816', borderRadius: '4px' }}
                    >
                      Live Demo
                    </Link>
                  )}
                  <a
                    href={tool.githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-light uppercase tracking-[0.1em] text-ink no-underline text-center py-2.5 px-4 transition-colors hover:border-ink"
                    style={{ border: '0.5px solid #c0bbb4', borderRadius: '4px' }}
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
