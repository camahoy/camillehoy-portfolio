'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const citations = [
  {
    outlet: 'Reuters',
    desc: 'Economic and consumer research cited in national coverage on U.S. market sentiment and business conditions.',
    type: 'Economic Research',
  },
  {
    outlet: 'ABC News',
    desc: 'Public opinion research on policy and consumer behavior used in national broadcast reporting.',
    type: 'Public Opinion',
  },
  {
    outlet: 'The Washington Post',
    desc: 'Consumer and policy research featured in reporting on U.S. economic trends and public sentiment.',
    type: 'Policy Research',
  },
  {
    outlet: 'LSEG Consumer Tracker',
    desc: 'Authored weekly write-ups and insight memos on U.S. consumer economic sentiment for financial markets audiences.',
    type: 'Economic Tracker',
  },
  {
    outlet: 'Dove Press',
    desc: 'Published contributor, quantitative analysis for a peer-reviewed multicountry patient study. International Journal of COPD, 2023.',
    type: 'Published Research',
  },
  {
    outlet: 'Client Research',
    desc: 'Strategy and policy research informing decisions at Google, Mastercard, Visa, World Bank, U.S. Chamber of Commerce, Pew, CDC, AARP, and DHA.',
    type: 'Fortune 500 and Government',
  },
]

export default function Cited() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section id="cited" className="py-28 bg-white">
      <div className="max-w-[1080px] mx-auto px-14" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="eyebrow-line text-[10px] tracking-[0.3em] uppercase text-rose mb-3.5 flex items-center">
            Where my work has appeared
          </p>
          <h2
            className="font-serif font-bold text-ink leading-[1.12] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(32px, 3.6vw, 50px)' }}
          >
            Cited
          </h2>
        </motion.div>

        <div
          className="grid gap-px"
          style={{
            gridTemplateColumns: 'repeat(3,1fr)',
            background: 'var(--light)',
          }}
        >
          {citations.map((c, i) => (
            <motion.div
              key={c.outlet}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
              className="bg-white p-9 hover:bg-bg transition-colors duration-200"
              style={{ padding: '36px 30px' }}
            >
              <p className="font-serif text-[18px] text-ink mb-2.5">
                {c.outlet}
              </p>
              <p className="text-[13px] text-mid leading-[1.7] font-light">
                {c.desc}
              </p>
              <p className="text-[10px] tracking-[0.22em] uppercase text-rose mt-4">
                {c.type}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
