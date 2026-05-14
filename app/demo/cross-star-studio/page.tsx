'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

type Step = 'upload' | 'raw' | 'clean'

const rawRows = [
  { label: 'BASE_unweighted', vals: ['1204.00', '287.00', '312.00', '354.00', '251.00'], type: 'base' },
  { label: 'NET_satisfied (T2B)', vals: ['67.1', '73.2', '69.1', '63.2', '58.4'], type: 'net' },
  { label: 'Q1_1 Very satisfied', vals: ['38.2000', '42.1000', '41.3000', '35.4000', '31.2000'], type: 'normal' },
  { label: 'Q1_2 Somewhat satisfied', vals: ['28.9000', '31.1000', '27.8000', '27.8000', '27.2000'], type: 'normal' },
  { label: 'Q1_3 Neither/nor', vals: ['6.4000', '7.1000', '7.2000', '6.0000', '5.0000'], type: 'normal' },
  { label: 'Q1_4 Somewhat dissatisfied', vals: ['12.3000', '10.2000', '11.4000', '13.5000', '14.8000'], type: 'normal' },
  { label: 'Q1_5 Very dissatisfied', vals: ['14.2000', '9.5000', '12.3000', '17.3000', '21.8000'], type: 'normal' },
]

const cleanRows = [
  { label: 'Very satisfied', vals: ['38%', '42%', '41%', '35%', '31%'] },
  { label: 'Somewhat satisfied', vals: ['29%', '31%', '28%', '28%', '27%'] },
  { label: 'Neither satisfied nor dissatisfied', vals: ['6%', '7%', '7%', '6%', '5%'] },
  { label: 'Somewhat dissatisfied', vals: ['12%', '10%', '11%', '14%', '15%'] },
  { label: 'Very dissatisfied', vals: ['14%', '10%', '12%', '17%', '22%'] },
]

const cleanNet = { label: 'Net: Satisfied (Top 2 Box)', vals: ['67%', '73%', '69%', '63%', '58%'] }

const cleanHeaders = ['Total (n=1,204)', 'Gen Z 18–24 (n=287)', 'Millennials 25–34 (n=312)', 'Gen X 35–54 (n=354)', 'Boomers 55+ (n=251)']

const questions = ['Q1. Overall satisfaction', 'Q2. NPS likelihood', 'Q3. Feature importance', 'Q4. Brand perception']

const appliedSteps = [
  'Net rows moved to bottom',
  'Base N added to column headers',
  'Decimal places removed',
  'Variable labels cleaned',
  'Table of contents generated',
]

export default function CrossStabStudioDemo() {
  const [step, setStep] = useState<Step>('upload')
  const [processing, setProcessing] = useState(false)

  const handleProcess = () => {
    setProcessing(true)
    setTimeout(() => { setProcessing(false); setStep('clean') }, 1800)
  }

  return (
    <div className="min-h-screen" style={{ background: '#f0eeeb' }}>
      {/* Top bar */}
      <div style={{ borderBottom: '0.5px solid #ddd8d0', background: 'rgba(240,238,235,0.97)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" className="text-[11px] font-light text-muted no-underline hover:text-ink transition-colors">← Portfolio</Link>
          <span className="text-[11px] font-light uppercase tracking-[0.15em] text-muted">Cross Stab Studio · Demo</span>
          <a href="https://github.com/camahoy/crosstab-studio" target="_blank" rel="noopener noreferrer" className="text-[11px] font-light text-muted no-underline hover:text-ink transition-colors">GitHub ↗</a>
        </div>
      </div>

      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '48px 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <p className="label mb-3">001 · Data Visualization</p>
          <h1 className="text-ink tracking-[-0.02em] mb-3" style={{ fontSize: 'clamp(28px, 5vw, 38px)', fontWeight: 700, lineHeight: 1.1 }}>Cross Stab Studio</h1>
          <p className="text-[13px] font-light text-warm" style={{ maxWidth: '520px', lineHeight: 1.9 }}>
            Turn SPSS banner files into clean, client-ready crosstabs in seconds. Select questions and columns, preview the structure, export to Excel or Word.
          </p>
        </div>

        {/* Step indicator */}
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap' }}>
          {(['upload', 'raw', 'clean'] as Step[]).map((s, i) => {
            const labels: Record<Step, string> = { upload: 'Upload', raw: 'Raw data', clean: 'Formatted output' }
            const active = step === s
            const done = (s === 'upload' && (step === 'raw' || step === 'clean')) || (s === 'raw' && step === 'clean')
            return (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: active ? '#1a1816' : done ? '#c17f5a' : '#e8e3dd', fontSize: '10px', fontWeight: 500, color: active || done ? '#f0eeeb' : '#6b6560', flexShrink: 0 }}>
                  {done ? '✓' : i + 1}
                </div>
                <span style={{ fontSize: '11px', fontWeight: 300, color: active ? '#1a1816' : '#6b6560' }}>{labels[s]}</span>
                {i < 2 && <span style={{ color: '#c0bbb4', fontSize: '11px', margin: '0 4px' }}>—</span>}
              </div>
            )
          })}
        </div>

        {/* App window */}
        <div style={{ background: '#fff', border: '0.5px solid #ddd8d0', borderRadius: '6px', overflow: 'hidden' }}>
          {/* Window chrome */}
          <div style={{ borderBottom: '0.5px solid #ddd8d0', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '6px', background: '#faf9f7' }}>
            {['#e8e3dd', '#e8e3dd', '#e8e3dd'].map((c, i) => <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />)}
            <span style={{ marginLeft: '10px', fontSize: '11px', color: '#6b6560', fontWeight: 300 }}>
              {step === 'upload' ? 'crosstab-studio — no file loaded' : step === 'raw' ? 'crosstab-studio — Q1_satisfaction_banner.xlsx' : 'crosstab-studio — Q1_satisfaction_reformatted.xlsx ✓'}
            </span>
          </div>

          <AnimatePresence mode="wait">

            {/* Upload screen */}
            {step === 'upload' && (
              <motion.div key="upload" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
                style={{ padding: '80px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <div style={{ border: '1px dashed #c0bbb4', borderRadius: '6px', padding: '48px 40px', textAlign: 'center', width: '100%', maxWidth: '420px' }}>
                  <p style={{ fontSize: '24px', marginBottom: '12px' }}>📄</p>
                  <p style={{ fontSize: '13px', color: '#4a4540', fontWeight: 300, marginBottom: '4px' }}>Drop your SPSS banner file here</p>
                  <p style={{ fontSize: '11px', color: '#a0998f', fontWeight: 300 }}>.xlsx, .xls supported</p>
                </div>
                <p style={{ fontSize: '11px', color: '#a0998f', fontWeight: 300 }}>or try the interactive demo</p>
                <button onClick={() => setStep('raw')} style={{ background: '#1a1816', color: '#f0eeeb', border: 'none', borderRadius: '4px', padding: '10px 28px', fontSize: '11px', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
                  Load sample file
                </button>
              </motion.div>
            )}

            {/* Raw data screen */}
            {step === 'raw' && (
              <motion.div key="raw" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'clamp(160px, 200px, 220px) 1fr' }}>
                  {/* Sidebar */}
                  <div style={{ borderRight: '0.5px solid #ddd8d0', padding: '16px', background: '#faf9f7' }}>
                    <p style={{ fontSize: '9px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c17f5a', marginBottom: '10px' }}>Format detected</p>
                    <div style={{ background: '#e5e0db', borderRadius: '3px', padding: '8px 10px', marginBottom: '16px' }}>
                      <p style={{ fontSize: '11px', fontWeight: 400, color: '#1a1816', marginBottom: '2px' }}>Knowledge Panel</p>
                      <p style={{ fontSize: '10px', color: '#6b6560', fontWeight: 300 }}>Confidence: 94%</p>
                    </div>
                    <p style={{ fontSize: '9px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6b6560', marginBottom: '8px' }}>Questions</p>
                    {questions.map((q, i) => (
                      <div key={q} style={{ padding: '6px 8px', borderRadius: '3px', marginBottom: '3px', background: i === 0 ? '#1a1816' : 'transparent', cursor: 'pointer' }}>
                        <p style={{ fontSize: '10px', fontWeight: 300, color: i === 0 ? '#f0eeeb' : '#4a4540', lineHeight: 1.4 }}>{q}</p>
                      </div>
                    ))}
                  </div>

                  {/* Raw table */}
                  <div style={{ overflowX: 'auto' }}>
                    <div style={{ padding: '10px 16px', background: '#fff7f2', borderBottom: '0.5px solid #f0e8e0' }}>
                      <p style={{ fontSize: '9px', color: '#c17f5a', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Raw SPSS export — before formatting</p>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', minWidth: '500px' }}>
                      <thead>
                        <tr style={{ borderBottom: '0.5px solid #ddd8d0', background: '#faf9f7' }}>
                          <th style={{ padding: '8px 12px', textAlign: 'left', fontWeight: 400, color: '#6b6560', fontSize: '10px', minWidth: '180px' }}>Variable: Q1_sat_overall</th>
                          {['Total', '18_24', '25_34', '35_54', '55plus'].map(h => (
                            <th key={h} style={{ padding: '8px 10px', textAlign: 'right', fontWeight: 400, color: '#6b6560', fontSize: '10px', whiteSpace: 'nowrap' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {rawRows.map((row, i) => (
                          <tr key={i} style={{ borderBottom: '0.5px solid #f5f3f0', background: row.type === 'net' ? '#fff7f2' : row.type === 'base' ? '#faf9f7' : 'white' }}>
                            <td style={{ padding: '7px 12px', color: row.type === 'net' ? '#c17f5a' : '#4a4540', fontWeight: row.type === 'base' ? 400 : 300, fontSize: '11px' }}>{row.label}</td>
                            {row.vals.map((v, j) => (
                              <td key={j} style={{ padding: '7px 10px', textAlign: 'right', color: '#6b6560', fontWeight: 300, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{v}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div style={{ padding: '12px 16px', borderTop: '0.5px solid #ddd8d0', display: 'flex', justifyContent: 'flex-end' }}>
                      <button onClick={handleProcess} disabled={processing} style={{ background: processing ? '#e8e3dd' : '#1a1816', color: processing ? '#6b6560' : '#f0eeeb', border: 'none', borderRadius: '4px', padding: '9px 20px', fontSize: '11px', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: processing ? 'default' : 'pointer', transition: 'all 0.2s' }}>
                        {processing ? 'Processing...' : 'Run Crosstab Studio →'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Clean output screen */}
            {step === 'clean' && (
              <motion.div key="clean" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'clamp(160px, 200px, 220px) 1fr' }}>
                  {/* Sidebar */}
                  <div style={{ borderRight: '0.5px solid #ddd8d0', padding: '16px', background: '#faf9f7' }}>
                    <p style={{ fontSize: '9px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c17f5a', marginBottom: '10px' }}>Export ready</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                      <button style={{ background: '#1a1816', color: '#f0eeeb', border: 'none', borderRadius: '3px', padding: '8px 10px', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 300 }}>Export .xlsx</button>
                      <button style={{ background: 'transparent', color: '#4a4540', border: '0.5px solid #c0bbb4', borderRadius: '3px', padding: '8px 10px', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 300 }}>Export .docx</button>
                    </div>
                    <p style={{ fontSize: '9px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6b6560', marginBottom: '8px' }}>Applied</p>
                    {appliedSteps.map((a, i) => (
                      <motion.div key={a} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', marginBottom: '6px' }}>
                        <span style={{ color: '#c17f5a', fontSize: '9px', marginTop: '2px', flexShrink: 0 }}>✓</span>
                        <p style={{ fontSize: '10px', color: '#6b6560', fontWeight: 300, lineHeight: 1.5 }}>{a}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Clean table */}
                  <div style={{ overflowX: 'auto' }}>
                    <div style={{ padding: '10px 16px', background: '#f5f1ee', borderBottom: '0.5px solid #ddd8d0' }}>
                      <p style={{ fontSize: '9px', color: '#a08278', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Formatted output</p>
                    </div>
                    <div style={{ padding: '12px 16px 4px' }}>
                      <p style={{ fontSize: '12px', fontWeight: 500, color: '#1a1816' }}>Q1. How satisfied are you overall with the service?</p>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', minWidth: '500px' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid #ddd8d0' }}>
                          <th style={{ padding: '8px 16px', textAlign: 'left', fontWeight: 400, color: '#6b6560', fontSize: '10px', minWidth: '200px' }}></th>
                          {cleanHeaders.map(h => (
                            <th key={h} style={{ padding: '8px 10px', textAlign: 'right', fontWeight: 400, color: '#4a4540', fontSize: '10px', whiteSpace: 'nowrap' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {cleanRows.map((row, i) => (
                          <motion.tr key={i} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} style={{ borderBottom: '0.5px solid #f5f3f0' }}>
                            <td style={{ padding: '8px 16px', color: '#4a4540', fontWeight: 300 }}>{row.label}</td>
                            {row.vals.map((v, j) => (
                              <td key={j} style={{ padding: '8px 10px', textAlign: 'right', color: j === 0 ? '#1a1816' : '#4a4540', fontWeight: j === 0 ? 400 : 300, fontVariantNumeric: 'tabular-nums' }}>{v}</td>
                            ))}
                          </motion.tr>
                        ))}
                        <tr><td colSpan={6} style={{ padding: '0 16px' }}><div style={{ borderTop: '1px solid #c0bbb4', margin: '4px 0' }} /></td></tr>
                        <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                          <td style={{ padding: '8px 16px', color: '#c17f5a', fontWeight: 400, fontSize: '11px' }}>{cleanNet.label}</td>
                          {cleanNet.vals.map((v, j) => (
                            <td key={j} style={{ padding: '8px 10px', textAlign: 'right', color: '#c17f5a', fontWeight: 400, fontVariantNumeric: 'tabular-nums' }}>{v}</td>
                          ))}
                        </motion.tr>
                      </tbody>
                    </table>
                    <div style={{ padding: '12px 16px', borderTop: '0.5px solid #ddd8d0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                      <p style={{ fontSize: '10px', color: '#6b6560', fontWeight: 300 }}>Q1 of 4 · Profile: Knowledge Panel (KP) · 4 questions processed</p>
                      <button onClick={() => setStep('upload')} style={{ background: 'transparent', color: '#6b6560', border: '0.5px solid #c0bbb4', borderRadius: '4px', padding: '6px 14px', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 300 }}>
                        Start over
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Footer note */}
        <p style={{ fontSize: '11px', color: '#a0998f', fontWeight: 300, marginTop: '24px', textAlign: 'center' }}>
          Interactive simulation · Run the real tool at{' '}
          <a href="https://github.com/camahoy/crosstab-studio" target="_blank" rel="noopener noreferrer" style={{ color: '#c17f5a', textDecoration: 'none' }}>
            github.com/camahoy/crosstab-studio
          </a>
        </p>
      </div>
    </div>
  )
}
