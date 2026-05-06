'use client'

import { motion } from 'framer-motion'

const findings = [
  {
    stat: '62%',
    finding: 'of consumers cite inflation as their primary financial concern — job security anxiety rising +8pp wave-over-wave',
    source: 'LSEG Consumer Tracker',
    wave: 'Wave 14 · 2024',
    method: 'Quant · n=2,000',
  },
  {
    stat: '44% vs 29%',
    finding: 'AI tool adoption gap between retail and service-sector SMBs; privacy concerns the primary stated barrier',
    source: 'Google SMB Study',
    wave: 'Q1 2024',
    method: 'Quant · n=1,500',
  },
  {
    stat: 'Published',
    finding: 'Quantitative contributor, multicountry patient perception study on COPD exacerbations',
    source: 'Int\'l Journal of COPD',
    wave: 'Dove Press · 2023',
    method: 'Peer-reviewed',
  },
]

const methods = ['Survey design', 'NLP / text analysis', 'Conjoint & MaxDiff', 'Regression', 'Qual synthesis', 'Longitudinal tracking']

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen grid pt-16"
      style={{ gridTemplateColumns: '55% 45%' }}
    >
      {/* LEFT */}
      <div className="flex flex-col justify-center px-14 py-20 bg-white">
        {/* Call Sub Studio banner */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-3 mb-8 self-start"
        >
          <span className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-rose border border-rose-l px-3 py-1.5 rounded-sm bg-rose-x/40">
            <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
            Call Sub Studio
          </span>
          <span className="text-[10px] tracking-widest uppercase text-mid">
            Research Intelligence Studio
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="hero-kicker-line text-[11px] tracking-widest uppercase text-rose mb-8 flex items-center"
        >
          Research and Insights Strategist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="font-serif font-bold text-ink leading-[1.04] tracking-[-0.025em] mb-7"
          style={{ fontSize: 'clamp(48px, 5.5vw, 82px)' }}
        >
          Camille
          <br />
          <em className="not-italic text-rose font-normal italic">Hoy</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-[17px] text-warm leading-[1.82] font-light max-w-[420px] mb-12"
        >
          Curious about how people think, feel, and decide. Building the systems
          that turn that curiosity into something companies can actually use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.6 }}
          className="flex gap-3.5 flex-wrap"
        >
          <a
            href="#experience"
            className="text-[11px] tracking-wider uppercase font-medium no-underline px-7 py-3.5 rounded-sm transition-all duration-250 bg-rose text-white hover:bg-warm hover:-translate-y-px"
          >
            View Experience
          </a>
          <a
            href="#connect"
            className="text-[11px] tracking-wider uppercase font-medium no-underline px-7 py-3.5 rounded-sm transition-all duration-250 border border-light text-warm bg-transparent hover:border-rose hover:text-rose"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* RIGHT — research output panel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="border-l border-light flex flex-col overflow-hidden"
        style={{ background: 'var(--bg)' }}
      >
        {/* Header */}
        <div className="px-8 pt-10 pb-5 border-b border-light">
          <p className="text-[9px] tracking-[0.32em] uppercase text-mid">
            Selected Findings
          </p>
        </div>

        {/* Finding rows */}
        <div className="flex-1 overflow-hidden divide-y divide-light">
          {findings.map((f, i) => (
            <motion.div
              key={f.source}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.14 }}
              className="px-8 py-6"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-serif text-[22px] font-bold text-ink leading-none tracking-[-0.02em]">
                  {f.stat}
                </span>
                <span className="text-[9px] tracking-[0.18em] uppercase text-rose">
                  {f.method}
                </span>
              </div>
              <p className="text-[12px] text-warm leading-[1.7] font-light mb-3">
                {f.finding}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-medium text-ink">{f.source}</span>
                <span className="text-light">·</span>
                <span className="text-[10px] text-mid">{f.wave}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Methods footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="border-t border-light px-8 py-5"
          style={{ background: 'var(--bg2)' }}
        >
          <p className="text-[9px] tracking-[0.28em] uppercase text-mid mb-3">
            Methods
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {methods.map((m) => (
              <span key={m} className="text-[11px] text-warm">
                {m}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
