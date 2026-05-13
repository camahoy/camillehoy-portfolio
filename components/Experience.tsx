'use client'

import { motion } from 'framer-motion'

const jobs = [
  {
    period: '2022 — Now',
    company: 'Ipsos Public Affairs',
    location: 'San Francisco, CA',
    role: 'Senior Research Analyst',
    context:
      'Global research and strategy consultancy. Research manager across 50+ programs annually spanning Fortune 500, federal agencies, and policy institutions.',
    bullets: [
      'Served as research manager and lead analyst on end-to-end programs spanning corporate reputation, brand tracking, public affairs, policy trends, consumer behavior, and social research for Google, Pew Research Center, AARP, World Bank, BCBS, Meta, AstraZeneca, Mastercard, CDC, DHA, and the U.S. Chamber of Commerce.',
      'Managed the full research lifecycle: study design, questionnaire development, methodology selection, agency and vendor management, data collection, analysis, and delivery of executive-ready findings across quantitative and qualitative programs.',
      'Scoped and executed quick-turn studies to support strategy discussions, surfacing themes across audiences and markets and translating findings into compelling narratives for stakeholders from junior teams to executive leadership.',
      'Built automated output systems, NLP pipelines, and SOP libraries that reduced reporting time from weeks to days across 50+ annual programs.',
      'Authored the LSEG Weekly Consumer Tracker and produced research briefings cited in Reuters, ABC News, and The Washington Post.',
      'Supported panel recruitment, focus group moderation, cognitive testing, and pilot testing across quantitative and qualitative studies.',
      'Contributed to business development, bid proposals, and IRB and ISO-compliant data workflow documentation.',
    ],
    tags: ['Economic Research', 'Policy Research', 'Python', 'SQL', 'NLP', 'Client Strategy'],
  },
  {
    period: '2020 — 2022',
    company: 'Viobi, LLC',
    location: 'Remote',
    role: 'Business Intelligence and Communications Manager',
    context: 'Digital strategy consultancy for SMB clients.',
    bullets: [
      'Built consolidated reporting system in Tableau, improving ROI tracking accuracy by 30 percent.',
      'Translated performance data into acquisition and retention recommendations adopted directly into client growth strategy.',
    ],
    tags: ['Business Intelligence', 'Tableau', 'Analytics'],
  },
]

const edu = [
  { year: 'In Progress', inst: 'MIT MicroMasters', cred: 'Data, Economics, and Design of Policy' },
  { year: '2017 — 2020', inst: 'University of Westminster', cred: 'BA (Hons), Politics and International Relations' },
  { year: '2017', inst: 'French Baccalauréat ES', cred: 'Economics and Social Sciences' },
  { year: 'In Progress', inst: 'Google', cred: 'Advanced Data Analysis Certificate' },
]

function Role({ job, delay }: { job: (typeof jobs)[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay }}
      className="grid-role"
    >
      <div>
        <p className="text-[12px] font-light text-muted mb-1">{job.period}</p>
        <p className="text-[13px] font-medium text-ink mb-0.5">{job.company}</p>
        <p className="text-[12px] font-light text-muted">{job.location}</p>
      </div>
      <div>
        <h3 className="text-[16px] font-medium text-ink mb-1.5 tracking-[-0.01em]">
          {job.role}
        </h3>
        <p className="text-[13px] font-light text-muted italic mb-5">
          {job.context}
        </p>
        <ul className="space-y-3 mb-5">
          {job.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-muted mt-[7px] flex-shrink-0 text-[8px]">—</span>
              <span className="text-[13px] font-light text-warm leading-[1.85]">{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {job.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] font-light text-muted px-4 py-2"
              style={{ borderRadius: '20px', border: '0.5px solid #c0bbb4' }}
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
  return (
    <section id="experience" className="py-20">
      <div className="section-grid">
        <div>
          <p className="label">Experience</p>
        </div>
        <div>
          {jobs.map((job, i) => (
            <Role key={job.company} job={job} delay={i * 0.1} />
          ))}

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="pt-10"
            style={{ borderTop: '0.5px solid #ddd8d0' }}
          >
            <p className="text-[10px] font-light uppercase tracking-[0.2em] text-muted mb-6">
              Education
            </p>
            {edu.map((e) => (
              <div key={e.inst} className="grid-edu-row">
                <p className="text-[12px] font-light text-muted">{e.year}</p>
                <div>
                  <p className="text-[13px] font-medium text-ink">{e.inst}</p>
                  <p className="text-[12px] font-light text-muted">{e.cred}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
