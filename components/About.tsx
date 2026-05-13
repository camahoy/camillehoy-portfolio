'use client'

import { motion } from 'framer-motion'

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

const specialties = [
  'Policy, Social, and Economic Research',
  'Quantitative and Qualitative Methodologies',
  'Data Processing and Analysis · SPSS, SQL, Python',
  'Consumer Insights and Strategy',
  'Research Operations and Delivery',
  'Client Engagement and Management',
  'Public Affairs and Global Research',
  'Strategy and Operations',
  'AI-Enabled Research and Tool Development',
]

export default function About() {
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
            Insights do not emerge. They are designed.
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
        </div>
      </div>

      {/* Full-width specialty pills — spans both grid columns */}
      <div className="max-w-content mx-auto px-5 md:px-[52px] mt-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2"
        >
          {specialties.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="text-[11px] font-light text-warm px-4 py-2.5"
              style={{
                borderRadius: '4px',
                border: '0.5px solid #c0bbb4',
                lineHeight: 1.5,
              }}
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
