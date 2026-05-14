'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const axes = [
  {
    n: '01',
    title: 'Data',
    desc: 'Survey design and sampling methodology. Quantitative and qualitative execution. A/B testing, MaxDiff, regression analysis. SPSS, SQL, Python, NLP pipelines. AI-assisted workflows that scale output without compressing rigor.',
  },
  {
    n: '02',
    title: 'Strategy',
    desc: 'Translating ambiguous business, marketing, and emerging tech questions into well-scoped research problems. Pressure-testing assumptions before they get baked into design. Surfacing patterns across markets, identifying the exceptions that change the interpretation, and integrating across data sources to develop perspectives that no single study produces alone. Every deliverable is shaped for its audience, from analyst teams to executive leadership.',
  },
  {
    n: '03',
    title: 'Execution',
    desc: 'End-to-end ownership across concurrent programs. Briefing design, RFP management, agency onboarding, vendor coordination, milestone planning, compliance, and stakeholder reporting. I lead the operating rhythm across priorities, timelines, and organizations. It\'s how good research actually reaches the people who need it.',
  },
]

const pillRows = [
  ['Policy, Social and Economic Research', 'Research Operations and Delivery', 'Quantitative and Qualitative Methodologies'],
  ['Consumer Insights and Strategy', 'Client Strategy and Engagement', 'Data Processing, Analysis and Visualization'],
  ['Multicountry and Cross-Market Research', 'Mixed Methods Research Design', 'AI-Enabled Research and Workflow Automation'],
]

const centerIndices = new Set([1, 4, 7])

export default function About() {
  const pillRef = useRef(null)

  const { scrollYProgress: pillProgress } = useScroll({
    target: pillRef,
    offset: ['start 0.9', 'center 0.6'],
  })

  const gap = useTransform(pillProgress, [0, 1], ['32px', '8px'])

  const allPills = pillRows.flat()

  return (
    <section id="about" className="py-20">
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
            The best insights come from actually wanting to know.
          </motion.p>

          {/* Inner two-column: text + axes */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid-about-inner"
          >
            {/* Body text */}
            <div className="space-y-5">
              <p className="text-[14px] font-light text-warm leading-[1.9]">
                Four years at Ipsos Public Affairs managing 50+ annual research
                programs for Google, Mastercard, Pew Research Center, AARP, CDC,
                and the World Bank. Consumer behavior, brand health, public
                opinion, policy, and emerging technology — across markets,
                methodologies, and datasets ranging from 100K to 500K responses.
              </p>
              <p className="text-[14px] font-light text-warm leading-[1.9]">
                I design the research, run the programs, and deliver the findings.
                End-to-end, across concurrent studies, for clients who need the
                work to actually land. NLP and AI pipelines I&apos;ve built have
                reduced reporting time by 40 to 50 percent on recurring programs.
                Research I&apos;ve led has been cited in Reuters, ABC News, and
                The Washington Post.
              </p>
              <p className="text-[14px] font-light text-warm leading-[1.9]">
                The populations I study: consumers, voters, patients, caregivers,
                early adopters, business owners, policymakers, investors, and
                frontline workers. The thread across all of it is the same —
                understanding what people actually believe, and why.
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
        </div>
      </div>

      {/* Full-width 3x3 specialty pills with scroll compression */}
      <div className="max-w-content mx-auto px-5 md:px-[52px] mt-12" ref={pillRef}>
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
              <div
                key={pill}
                className={`text-[11px] text-center text-warm leading-[1.5] ${isCenter ? 'font-normal' : 'font-light'}`}
                style={{
                  borderRadius: '4px',
                  border: isCenter ? '1px solid #c17f5a' : '0.5px solid #c0bbb4',
                  background: isCenter ? '#e5e0db' : 'transparent',
                  padding: '9px 14px',
                }}
              >
                {pill}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
