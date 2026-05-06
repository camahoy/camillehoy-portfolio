'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

type DemoId = 'data-output' | 'research-ops' | 'research-brain'

interface DemoModalProps {
  demoId: DemoId | null
  onClose: () => void
}

export default function DemoModal({ demoId, onClose }: DemoModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    if (demoId) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [demoId])

  return (
    <AnimatePresence>
      {demoId && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/50 z-[200] backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[5vh] bottom-[5vh] md:inset-x-[10%] md:top-[8vh] md:bottom-[8vh] z-[201] bg-white rounded-sm overflow-hidden flex flex-col shadow-2xl"
            style={{ border: '1px solid var(--light)' }}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-light flex-shrink-0">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-rose">
                  Live Demo
                </span>
                <h3 className="font-serif text-[20px] text-ink mt-0.5">
                  {demoId === 'data-output' && 'Data Output Banner'}
                  {demoId === 'research-ops' && 'Research Ops Organizer'}
                  {demoId === 'research-brain' && 'Research Brain'}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-mid hover:text-ink text-[22px] leading-none w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>

            {/* Demo content */}
            <div className="flex-1 overflow-auto">
              {demoId === 'data-output' && <DataOutputDemo />}
              {demoId === 'research-ops' && <ResearchOpsDemo />}
              {demoId === 'research-brain' && <ResearchBrainDemo />}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

/* ─── 001 Data Output Banner ─── */
function DataOutputDemo() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 600),
      setTimeout(() => setStep(2), 1400),
      setTimeout(() => setStep(3), 2200),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const tableData = [
    { segment: 'SMB Owners', n: 502, aware: '67%', favorable: '54%', nps: 42 },
    { segment: 'Consumers', n: 1004, aware: '81%', favorable: '73%', nps: 61 },
    { segment: 'Healthcare', n: 301, aware: '59%', favorable: '48%', nps: 38 },
    { segment: 'Financial', n: 403, aware: '72%', favorable: '65%', nps: 55 },
  ]

  return (
    <div className="p-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* SQL pane */}
        <div
          className="rounded-sm overflow-hidden"
          style={{ background: '#1a1714', border: '1px solid #2e2a27' }}
        >
          <div
            className="px-4 py-2.5 flex items-center gap-2 border-b"
            style={{ borderColor: '#2e2a27' }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-rose-l/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-gold/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#a0c4a0]/40" />
            <span className="ml-2 text-[10px] tracking-wider uppercase text-mid">
              query.sql
            </span>
          </div>
          <pre className="demo-code p-5 text-[12px] leading-[1.7] overflow-x-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="kw">SELECT</span>
              {'\n  '}segment,{'\n  '}COUNT(*) <span className="kw">AS</span> n,
              {'\n  '}
              <span className="fn">ROUND</span>(awareness_pct * 100, 1){' '}
              <span className="kw">AS</span> aware,{'\n  '}
              <span className="fn">ROUND</span>(fav_pct * 100, 1){' '}
              <span className="kw">AS</span> favorable,{'\n  '}
              <span className="fn">ROUND</span>(nps_score) <span className="kw">AS</span>{' '}
              nps{'\n'}
              <span className="kw">FROM</span>{' '}
              <span className="str">survey_responses</span>
              {'\n'}
              <span className="kw">WHERE</span> wave = <span className="str">
                'Q2_2024'
              </span>
              {'\n'}
              <span className="kw">GROUP BY</span> segment{'\n'}
              <span className="kw">ORDER BY</span> n <span className="kw">DESC</span>;
            </motion.div>
          </pre>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-5 pb-4"
            >
              <div className="text-[11px] text-[#a0c4a0] tracking-wider">
                ✓ Query executed — {tableData.length} rows returned in 0.24s
              </div>
            </motion.div>
          )}
        </div>

        {/* Output table */}
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-mid mb-3">
            Formatted Output
          </p>
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="overflow-x-auto"
              >
                <table className="w-full text-[12px] border-collapse">
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--rose-l)' }}>
                      {['Segment', 'N', 'Aware', 'Favorable', 'NPS'].map(
                        (h) => (
                          <th
                            key={h}
                            className="text-left py-2.5 px-3 text-[10px] tracking-wider uppercase text-mid font-medium"
                          >
                            {h}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, i) => (
                      <motion.tr
                        key={row.segment}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        style={{ borderBottom: '1px solid var(--light)' }}
                        className="hover:bg-bg"
                      >
                        <td className="py-3 px-3 text-ink font-medium">
                          {row.segment}
                        </td>
                        <td className="py-3 px-3 text-mid">{row.n}</td>
                        <td className="py-3 px-3 text-warm">{row.aware}</td>
                        <td className="py-3 px-3 text-warm">{row.favorable}</td>
                        <td className="py-3 px-3">
                          <span
                            className="font-serif font-bold"
                            style={{
                              color: row.nps >= 50 ? '#a0c4a0' : 'var(--rose)',
                            }}
                          >
                            {row.nps}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {step >= 3 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-sm"
          style={{ background: 'var(--bg)', border: '1px solid var(--light)' }}
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-rose mb-3">
            Auto-Generated Output Summary
          </p>
          <p className="text-[13px] text-warm leading-[1.8] font-light">
            Wave Q2 2024 — Consumer segment leads on awareness (81%) and NPS
            (61). Healthcare shows lowest favorability (48%), flagged for
            qualitative follow-up. Financial services within margin of prior wave.
            Executive summary auto-formatted and ready for delivery.
          </p>
        </motion.div>
      )}
    </div>
  )
}

/* ─── 002 Research Ops Organizer ─── */
function ResearchOpsDemo() {
  const columns = [
    {
      title: 'Scoping',
      color: 'var(--mid)',
      programs: [
        { name: 'Mastercard SMB Tracker', client: 'Mastercard', due: 'Jun 12', type: 'Quant' },
        { name: 'AARP Veterans Study', client: 'AARP', due: 'Jun 28', type: 'Mixed' },
      ],
    },
    {
      title: 'In Field',
      color: 'var(--gold)',
      programs: [
        { name: 'LSEG Consumer Wave 14', client: 'LSEG', due: 'May 30', type: 'Tracking' },
        { name: 'Google SMB Study', client: 'Google', due: 'Jun 3', type: 'Quant' },
        { name: 'CDC Health Equity', client: 'CDC', due: 'Jun 10', type: 'Qual' },
      ],
    },
    {
      title: 'Analysis',
      color: 'var(--rose)',
      programs: [
        { name: 'Visa Payments Behavior', client: 'Visa', due: 'May 28', type: 'Quant' },
        { name: 'World Bank Dev Survey', client: 'World Bank', due: 'Jun 1', type: 'Mixed' },
      ],
    },
    {
      title: 'Delivered',
      color: '#a0c4a0',
      programs: [
        { name: 'Pew Healthcare Wave 3', client: 'Pew', due: 'May 15', type: 'Tracking' },
        { name: 'DHA Veterans Sentiment', client: 'DHA', due: 'May 20', type: 'Quant' },
        { name: 'U.S. Chamber Economic', client: 'Chamber', due: 'May 22', type: 'Policy' },
      ],
    },
  ]

  return (
    <div className="p-6">
      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
        {columns.map((col, ci) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: col.color }}
              />
              <span className="text-[10px] tracking-[0.2em] uppercase text-mid">
                {col.title}
              </span>
              <span
                className="ml-auto text-[10px] font-medium rounded-full w-5 h-5 flex items-center justify-center"
                style={{ background: 'var(--light)', color: 'var(--warm)' }}
              >
                {col.programs.length}
              </span>
            </div>
            <div className="space-y-2.5">
              {col.programs.map((p, pi) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: ci * 0.1 + pi * 0.08 + 0.3 }}
                  className="p-3 rounded-sm hover:bg-bg/60 transition-colors"
                  style={{ background: 'var(--bg)', border: '1px solid var(--light)' }}
                >
                  <p className="text-[12px] text-ink font-medium leading-tight mb-1">
                    {p.name}
                  </p>
                  <p className="text-[11px] text-mid">{p.client}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span
                      className="text-[9px] tracking-wider uppercase px-1.5 py-0.5 rounded-sm"
                      style={{
                        background: 'var(--rose-x)',
                        color: 'var(--rose)',
                      }}
                    >
                      {p.type}
                    </span>
                    <span className="text-[10px] text-mid">Due {p.due}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-6 pt-6 border-t border-light grid grid-cols-3 gap-4"
      >
        {[
          { label: 'Active Programs', value: '12' },
          { label: 'On-Time Delivery', value: '100%' },
          { label: 'Avg. Turnaround', value: '3.2d' },
        ].map((m) => (
          <div key={m.label} className="text-center">
            <div className="font-serif text-[28px] font-bold text-ink">{m.value}</div>
            <div className="text-[10px] tracking-wider uppercase text-mid mt-0.5">
              {m.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

/* ─── 003 Research Brain ─── */
function ResearchBrainDemo() {
  const [query, setQuery] = useState('')
  const [searching, setSearching] = useState(false)
  const [results, setResults] = useState<typeof sampleResults | null>(null)

  const sampleResults = [
    {
      wave: 'LSEG Consumer Wave 13',
      date: 'Apr 2024',
      finding:
        '62% of consumers report inflation as primary financial concern — unchanged from Wave 12, but anxiety about job security rising (+8pp).',
      tags: ['Consumer', 'Economic', 'Tracking'],
    },
    {
      wave: 'Google SMB Study Q1',
      date: 'Feb 2024',
      finding:
        'SMB owners in retail significantly more likely to use AI tools than service sector (44% vs 29%). Barrier: data privacy concerns.',
      tags: ['SMB', 'AI', 'Quant'],
    },
    {
      wave: 'Visa Payments Behavior',
      date: 'Mar 2024',
      finding:
        'Digital payment adoption highest among 25–34 cohort (88%). Key driver: speed, not security. Prior wave flagged security — shift notable.',
      tags: ['Financial', 'Consumer', 'Behavioral'],
    },
  ]

  const handleSearch = () => {
    if (!query.trim()) return
    setSearching(true)
    setResults(null)
    setTimeout(() => {
      setSearching(false)
      setResults(sampleResults)
    }, 1400)
  }

  return (
    <div className="p-8 space-y-6">
      <div>
        <p className="text-[13px] text-warm mb-4 font-light leading-relaxed">
          Retrieves findings, patterns, and context from prior research waves.
          Ask anything about past programs, client landscapes, or historical
          trends.
        </p>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="e.g. consumer economic sentiment Q4 2023..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-1 text-[13px] text-ink bg-bg border border-light rounded-sm px-4 py-3 outline-none focus:border-rose transition-colors placeholder:text-mid"
            style={{ cursor: 'text' }}
          />
          <button
            onClick={handleSearch}
            className="text-[11px] tracking-wider uppercase px-5 py-3 bg-rose text-white rounded-sm hover:bg-warm transition-colors flex-shrink-0"
          >
            {searching ? 'Searching…' : 'Search'}
          </button>
        </div>
      </div>

      {/* Preset queries */}
      <div className="flex flex-wrap gap-2">
        {[
          'consumer inflation sentiment',
          'SMB AI adoption',
          'payment behavior shifts',
        ].map((q) => (
          <button
            key={q}
            onClick={() => {
              setQuery(q)
            }}
            className="text-[10px] tracking-wider uppercase text-mid border border-light px-3 py-1.5 rounded-sm hover:border-rose hover:text-rose transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {searching && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 text-[13px] text-mid"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
          Scanning 50+ research programs...
        </motion.div>
      )}

      {results && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-rose">
            {results.length} findings retrieved
          </p>
          {results.map((r, i) => (
            <motion.div
              key={r.wave}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className="p-5 rounded-sm"
              style={{ background: 'var(--bg)', border: '1px solid var(--light)' }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif text-[15px] text-ink">{r.wave}</span>
                <span className="text-[11px] text-mid">{r.date}</span>
              </div>
              <p className="text-[13px] text-warm leading-[1.78] font-light mb-3">
                {r.finding}
              </p>
              <div className="flex gap-2">
                {r.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-sm"
                    style={{ background: 'var(--rose-x)', color: 'var(--rose)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* AI synthesis */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="p-5 rounded-sm"
            style={{
              background: 'linear-gradient(135deg, var(--rose-x) 0%, var(--bg) 100%)',
              border: '1px solid var(--rose-l)',
            }}
          >
            <p className="text-[10px] tracking-[0.25em] uppercase text-rose mb-2">
              AI Synthesis
            </p>
            <p className="text-[13px] text-warm leading-[1.8] font-light">
              Across matched programs, consumer economic anxiety is persistent
              but shifting in character — from inflation-first to job-security
              concerns. AI adoption in SMB sector is accelerating, with privacy
              as the primary barrier. Financial behavior data shows generational
              divergence on trust drivers. Recommend flagging for client
              briefing.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
