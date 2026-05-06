'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const jobs = [
  {
    period: '2022 — Now',
    company: 'Ipsos Public Affairs',
    location: 'San Francisco, CA',
    role: 'Senior Research Analyst',
    context:
      'Global research and strategy consultancy. 50+ programs annually across Fortune 500, federal agencies, and policy institutions.',
    bullets: [
      'Led end-to-end execution of economic, policy, consumer, healthcare, financial services, and social research programs for Google, Mastercard, Visa, LSEG, World Bank, U.S. Chamber of Commerce, Pew, AARP, CDC, DHA, and Hilton.',
      'Researched diverse audiences including SMB owners, healthcare patients and caregivers, older adults, veterans, low-income groups, and financial markets participants across national and global programs.',
      'Built automated output systems, NLP pipelines, and SOP libraries that reduced reporting time from weeks to days and eliminated manual formatting bottlenecks across recurring programs.',
      'Managed all research milestones, vendor relationships, IRB and GDPR compliance, and client touchpoints across 50+ concurrent programs simultaneously.',
      'Authored weekly LSEG Consumer Tracker write-ups and monthly leadership updates. Produced briefings cited in Reuters, ABC News, and The Washington Post.',
      'Supported team recruitment, contractor sourcing, and analyst onboarding. Built documentation that reduced ramp time and standardized quality across all workstreams.',
    ],
    tags: [
      'Economic Research',
      'Policy Research',
      'Research Operations',
      'Python',
      'SQL',
      'NLP',
      'Client Strategy',
    ],
  },
  {
    period: '2023',
    company: 'Dove Press',
    location: 'International Journal of COPD',
    role: 'Published Research Contributor',
    context: 'Peer-reviewed academic publication.',
    bullets: [
      'Led quantitative data analysis for a multicountry study on patient perception of COPD exacerbations.',
    ],
    tags: ['Healthcare Research', 'Quantitative Analysis', 'Published Research'],
  },
  {
    period: '2020 — 2022',
    company: 'Viobi, LLC',
    location: 'Remote',
    role: 'Business Intelligence and Communications Manager',
    context:
      'Digital strategy consultancy for SMB clients. Built reporting and analytics infrastructure from scratch.',
    bullets: [
      'Designed and built a consolidated reporting system integrating CRM, advertising, and sales data, improving ROI tracking accuracy by 30 percent.',
      'Translated performance data into acquisition, retention, and messaging recommendations adopted directly into client growth strategy.',
    ],
    tags: ['Business Intelligence', 'Tableau', 'Analytics', 'Client Strategy'],
  },
]

const edu = [
  {
    year: 'In Progress',
    inst: 'MIT MicroMasters',
    cred: 'Data, Economics, and Design of Policy',
  },
  {
    year: '2017 — 2020',
    inst: 'University of Westminster',
    cred: 'BA (Hons), Politics and International Relations',
  },
  {
    year: '2017',
    inst: 'French Baccalauréat ES',
    cred: 'Economics and Social Sciences',
  },
  {
    year: 'In Progress',
    inst: 'Google',
    cred: 'Advanced Data Analysis Certificate',
  },
]

function TimelineItem({ job, delay }: { job: (typeof jobs)[0]; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-12 py-12 border-b border-light relative"
      style={{ gridTemplateColumns: '180px 1fr' }}
    >
      {/* Timeline dot */}
      <div
        className="absolute -left-9 top-14 w-2.5 h-2.5 rounded-full border-2 border-white transition-colors duration-250"
        style={{ background: 'var(--rose-l)' }}
      />

      <div>
        <p className="text-[11px] text-rose tracking-[0.08em] uppercase mb-1.5">
          {job.period}
        </p>
        <p className="font-serif text-[15px] text-ink mb-0.5">{job.company}</p>
        <p className="text-[11px] text-mid">{job.location}</p>
      </div>

      <div>
        <h3 className="font-serif text-[24px] text-ink font-bold mb-1.5 tracking-[-0.01em]">
          {job.role}
        </h3>
        <p className="text-[13px] text-rose italic mb-[18px]">{job.context}</p>
        <ul className="space-y-2.5">
          {job.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-4">
              <span
                className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                style={{ background: 'var(--rose-l)' }}
              />
              <span className="text-[14px] text-warm leading-[1.72] font-light">
                {b}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5 mt-5">
          {job.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] text-mid border border-light px-3 py-1 rounded-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-8%' })
  const eduRef = useRef(null)
  const eduInView = useInView(eduRef, { once: true, margin: '-8%' })

  return (
    <section id="experience" className="py-28 bg-white">
      <div className="max-w-[1080px] mx-auto px-14">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-18"
          style={{ marginBottom: '72px' }}
        >
          <p className="eyebrow-line text-[10px] tracking-[0.3em] uppercase text-rose mb-3.5 flex items-center">
            Experience
          </p>
          <h2
            className="font-serif font-bold text-ink leading-[1.12] tracking-[-0.02em] mb-3.5"
            style={{ fontSize: 'clamp(32px, 3.6vw, 50px)' }}
          >
            Where I have worked
          </h2>
          <p className="text-[16px] text-mid leading-[1.8] font-light max-w-[560px]">
            Four years across industries, audiences, and problem types. Each
            program a new context. Each client a new way of seeing what research
            can do.
          </p>
        </motion.div>

        <div className="timeline-track pl-8">
          {jobs.map((job, i) => (
            <TimelineItem key={job.company + job.period} job={job} delay={i * 0.1} />
          ))}
        </div>

        {/* Education */}
        <motion.div
          ref={eduRef}
          initial={{ opacity: 0, y: 24 }}
          animate={eduInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mt-12 pt-12 border-t border-light"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-mid mb-7">
            Education and Continuous Learning
          </p>
          {edu.map((e, i) => (
            <div
              key={e.inst + e.year}
              className={`grid gap-12 mb-[22px] items-baseline ${i < edu.length - 1 ? '' : ''}`}
              style={{ gridTemplateColumns: '180px 1fr' }}
            >
              <p className="text-[11px] text-mid">{e.year}</p>
              <div>
                <p className="font-serif text-[16px] text-ink mb-0.5">
                  {e.inst}
                </p>
                <p className="text-[13px] text-mid">{e.cred}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
