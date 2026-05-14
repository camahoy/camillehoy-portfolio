'use client'

import { useState } from 'react'
import Link from 'next/link'

type Step = 'upload' | 'detected' | 'scanned' | 'exported'

const sampleQuestions = [
  { id: 1, prefix: 'Q1', label: 'Overall satisfaction with your experience', sheets: 1, type: 'Standard', selected: false },
  { id: 2, prefix: 'Q2', label: 'How likely are you to recommend this product', sheets: 1, type: 'T2B', selected: false },
  { id: 3, prefix: 'Q3', label: 'Awareness of brand among general population', sheets: 1, type: 'Standard', selected: false },
  { id: 4, prefix: 'Q4', label: 'Net Promoter Score — main segment', sheets: 1, type: 'Mean', selected: false },
  { id: 5, prefix: 'Q5', label: 'Trust in institution across demographic groups', sheets: 1, type: 'Standard', selected: false },
  { id: 6, prefix: 'Q6', label: 'Bottom-2-box dissatisfaction measure', sheets: 1, type: 'B2B', selected: false },
  { id: 7, prefix: 'Q7', label: 'Grid: agreement with policy statements', sheets: 3, type: 'Grid', selected: false },
]

const sampleCols = [
  { id: 'total', label: 'Total', selected: false },
  { id: 'total_male', label: 'Total — Male', selected: false },
  { id: 'total_female', label: 'Total — Female', selected: false },
  { id: 'total_18_34', label: 'Total — 18–34', selected: false },
]

const typeColors: Record<string, { bg: string; color: string }> = {
  Standard: { bg: '#e8f5e9', color: '#2e7d32' },
  T2B: { bg: '#e3f2fd', color: '#1565c0' },
  B2B: { bg: '#fff8e1', color: '#f57f17' },
  Grid: { bg: '#f3e5f5', color: '#6a1b9a' },
  Mean: { bg: '#fce4ec', color: '#880e4f' },
}

const typeFilters = ['Standard', 'T2B', 'B2B', 'Grid', 'Mean']

export default function CrossStabStudioDemo() {
  const [step, setStep] = useState<Step>('upload')
  const [fileLoaded, setFileLoaded] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [scanning, setScanning] = useState(false)
  const [questions, setQuestions] = useState(sampleQuestions)
  const [cols, setCols] = useState(sampleCols)
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set(typeFilters))
  const [exportFormat, setExportFormat] = useState<'excel' | 'word'>('excel')
  const [exportDone, setExportDone] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [searchQ, setSearchQ] = useState('')

  const selectedQ = questions.filter((q) => q.selected)
  const selectedCols = cols.filter((c) => c.selected)

  function loadSample() {
    setFileLoaded(true)
    setTimeout(() => setStep('detected'), 600)
  }

  function scan() {
    setScanning(true)
    setTimeout(() => {
      setScanning(false)
      setStep('scanned')
    }, 1600)
  }

  function toggleQ(id: number) {
    setQuestions((qs) => qs.map((q) => (q.id === id ? { ...q, selected: !q.selected } : q)))
  }

  function toggleCol(id: string) {
    setCols((cs) => cs.map((c) => (c.id === id ? { ...c, selected: !c.selected } : c)))
  }

  function toggleFilter(f: string) {
    setActiveFilters((prev) => {
      const next = new Set(prev)
      next.has(f) ? next.delete(f) : next.add(f)
      return next
    })
  }

  function doExport() {
    setExporting(true)
    setTimeout(() => {
      setExporting(false)
      setExportDone(true)
      setStep('exported')
    }, 1400)
  }

  function reset() {
    setStep('upload')
    setFileLoaded(false)
    setConfirmed(false)
    setScanning(false)
    setQuestions(sampleQuestions)
    setCols(sampleCols)
    setExportFormat('excel')
    setExportDone(false)
    setSearchQ('')
    setActiveFilters(new Set(typeFilters))
  }

  const filteredQ = questions.filter(
    (q) => activeFilters.has(q.type) && q.label.toLowerCase().includes(searchQ.toLowerCase())
  )
  const canExport = selectedQ.length > 0 && selectedCols.length > 0

  return (
    <div className="min-h-screen" style={{ background: '#f0eeeb' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '120px 52px 80px' }}>
        <Link
          href="/"
          className="text-[12px] font-light text-muted no-underline transition-colors hover:text-ink inline-block mb-16"
        >
          ← Back
        </Link>

        <p className="label mb-6">001 · Data Visualization</p>
        <h1
          className="text-ink mb-4 tracking-[-0.02em]"
          style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.1 }}
        >
          Cross Stab Studio
        </h1>
        <p className="text-[14px] font-light text-warm leading-[1.9] mb-10" style={{ maxWidth: '560px' }}>
          Upload a raw SPSS banner export and the tool auto-detects the format, lets you select
          questions and subgroups, and exports clean, executive-ready crosstabs in Excel or Word.
        </p>

        <div className="flex gap-3 mb-16 flex-wrap">
          <a
            href="https://github.com/camahoy/crosstab-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-light uppercase tracking-[0.1em] text-ink no-underline py-3 px-6 transition-colors"
            style={{ border: '0.5px solid #c0bbb4', borderRadius: '4px' }}
          >
            GitHub
          </a>
        </div>

        <div style={{ borderTop: '0.5px solid #ddd8d0', paddingTop: '40px' }}>
          <p className="text-[10px] font-light uppercase tracking-[0.18em] text-muted mb-6">
            Interactive simulation
          </p>

          {/* Browser chrome */}
          <div style={{ border: '0.5px solid #ddd8d0', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
            <div style={{ background: '#e8e4df', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '0.5px solid #ddd8d0' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28ca42' }} />
              <div style={{ flex: 1, textAlign: 'center', fontSize: '11px', color: '#888', fontFamily: 'monospace' }}>
                localhost:8501
              </div>
            </div>

            {/* Streamlit body */}
            <div style={{ background: '#F7F9FC', padding: '32px 40px', fontFamily: "'Sora', 'Inter', sans-serif" }}>

              {/* Header */}
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1a1816', margin: 0, letterSpacing: '-0.01em' }}>
                  Crosstab <span style={{ color: '#1976d2' }}>Studio</span>
                </h2>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0', fontFamily: "'DM Mono', monospace" }}>
                  Research output formatter
                </p>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '24px' }} />

              {/* Step 1: Upload */}
              <StepLabel n="1" title="Upload file" />
              {!fileLoaded ? (
                <div style={{ border: '1.5px dashed #d1d5db', borderRadius: '6px', padding: '32px', textAlign: 'center', background: '#fff', marginBottom: '24px' }}>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>
                    Drag and drop a .xlsx or .xls banner file here
                  </p>
                  <p style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '16px' }}>
                    Multiple files supported for wave comparison
                  </p>
                  <Btn onClick={loadSample}>Load sample file</Btn>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '6px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '16px' }}>📄</span>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: 600, color: '#1a1816', margin: 0 }}>KP_Q1_2024_banner.xlsx</p>
                    <p style={{ fontSize: '11px', color: '#9ca3af', margin: 0 }}>142 KB · uploaded</p>
                  </div>
                </div>
              )}

              {/* Step 2: Format detection */}
              {step !== 'upload' && (
                <>
                  <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '24px' }} />
                  <StepLabel n="2" title="Format detection" />
                  <div style={{ border: '1.5px solid #4caf50', borderRadius: '6px', padding: '16px 20px', background: '#fff', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <span style={{ color: '#4caf50' }}>✓</span>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#1a1816' }}>Knowledge Panel detected</span>
                      <span style={{ marginLeft: 'auto', fontSize: '11px', fontFamily: "'DM Mono', monospace", color: '#6b7280', background: '#f3f4f6', padding: '2px 8px', borderRadius: '3px' }}>94% confidence</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '14px' }}>
                      {[
                        { label: 'Question row', val: 'Row 2', status: 'ok' },
                        { label: 'Column headers', val: 'Row 3', status: 'ok' },
                        { label: 'Base / N row', val: 'Row 4', status: 'ok' },
                        { label: 'Data start', val: 'Row 5', status: 'ok' },
                      ].map((r) => (
                        <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 10px', background: '#f9fafb', borderRadius: '4px' }}>
                          <span style={{ fontSize: '11px', color: '#6b7280', fontFamily: "'DM Mono', monospace" }}>{r.label}</span>
                          <span style={{ fontSize: '11px', color: '#1a1816', fontFamily: "'DM Mono', monospace" }}>{r.val}</span>
                          <span style={{ fontSize: '10px', color: '#4caf50', fontWeight: 600 }}>{r.status}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                      <p style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '6px', fontFamily: "'DM Mono', monospace" }}>Sample columns:</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {['Total', 'Total — Male', 'Total — Female', 'Total — 18–34'].map((c) => (
                          <span key={c} style={{ fontSize: '11px', background: '#e3f2fd', color: '#1565c0', padding: '3px 10px', borderRadius: '3px', fontFamily: "'DM Mono', monospace" }}>{c}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() => setConfirmed(true)}
                        style={{ background: confirmed ? '#4caf50' : '#1976d2', color: '#fff', border: 'none', borderRadius: '4px', padding: '7px 16px', fontSize: '11px', cursor: 'pointer', fontWeight: 500 }}
                      >
                        {confirmed ? '✓ Confirmed' : 'Confirm — use this format'}
                      </button>
                      <button style={{ background: 'transparent', color: '#6b7280', border: '1px solid #d1d5db', borderRadius: '4px', padding: '7px 16px', fontSize: '11px', cursor: 'default' }}>
                        Override profile ▾
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Step 3: Scan */}
              {confirmed && step !== 'upload' && (
                <>
                  <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '24px' }} />
                  <StepLabel n="3" title="Scan" />
                  <p style={{ fontSize: '12px', color: '#4b5563', marginBottom: '14px' }}>
                    Format: <strong>Knowledge Panel</strong> · Single file mode
                  </p>
                  {step === 'detected' ? (
                    <div style={{ marginBottom: '24px' }}>
                      <Btn onClick={scan} disabled={scanning}>
                        {scanning ? 'Scanning…' : 'Scan file →'}
                      </Btn>
                    </div>
                  ) : (
                    <p style={{ fontSize: '12px', color: '#4caf50', fontWeight: 600, marginBottom: '24px' }}>✓ Scan complete</p>
                  )}
                </>
              )}

              {/* Step 4: Question & column selection */}
              {(step === 'scanned' || step === 'exported') && (
                <>
                  <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '24px' }} />
                  <StepLabel n="4" title="Select questions and columns" />

                  {/* Stats pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                    {['7 Questions', '3 Sheets', '1 File', '4 Columns'].map((s) => (
                      <span key={s} style={{ fontSize: '11px', background: '#e5e7eb', color: '#374151', padding: '4px 12px', borderRadius: '20px', fontFamily: "'DM Mono', monospace" }}>{s}</span>
                    ))}
                  </div>

                  {/* Type filters */}
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
                    {typeFilters.map((f) => (
                      <label key={f} style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                        <input type="checkbox" checked={activeFilters.has(f)} onChange={() => toggleFilter(f)} style={{ accentColor: typeColors[f].color }} />
                        <span style={{ fontSize: '11px', background: typeColors[f].bg, color: typeColors[f].color, padding: '2px 8px', borderRadius: '3px', fontWeight: 600 }}>{f}</span>
                      </label>
                    ))}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '16px', marginBottom: '24px' }}>
                    {/* Questions */}
                    <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '6px', padding: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                        <button onClick={() => setQuestions((qs) => qs.map((q) => ({ ...q, selected: true })))} style={{ fontSize: '11px', color: '#1976d2', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Select all</button>
                        <span style={{ color: '#d1d5db' }}>|</span>
                        <button onClick={() => setQuestions((qs) => qs.map((q) => ({ ...q, selected: false })))} style={{ fontSize: '11px', color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Clear all</button>
                        <input
                          type="text"
                          placeholder="Search questions…"
                          value={searchQ}
                          onChange={(e) => setSearchQ(e.target.value)}
                          style={{ marginLeft: 'auto', fontSize: '11px', border: '1px solid #e5e7eb', borderRadius: '4px', padding: '3px 8px', color: '#374151', background: '#f9fafb', width: '140px' }}
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        {filteredQ.map((q) => (
                          <label key={q.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer', background: q.selected ? '#eff6ff' : 'transparent' }}>
                            <input type="checkbox" checked={q.selected} onChange={() => toggleQ(q.id)} style={{ accentColor: '#1976d2', flexShrink: 0 }} />
                            <span style={{ fontSize: '10px', fontFamily: "'DM Mono', monospace", color: '#9ca3af', flexShrink: 0 }}>{q.prefix}</span>
                            <span style={{ fontSize: '11px', color: '#374151', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{q.label}</span>
                            {q.sheets > 1 && <span style={{ fontSize: '10px', color: '#9ca3af', flexShrink: 0 }}>{q.sheets} sheets</span>}
                            <span style={{ fontSize: '10px', background: typeColors[q.type].bg, color: typeColors[q.type].color, padding: '1px 6px', borderRadius: '3px', fontWeight: 600, flexShrink: 0 }}>{q.type}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Columns */}
                    <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '6px', padding: '14px' }}>
                      <p style={{ fontSize: '11px', fontWeight: 600, color: '#6b7280', marginBottom: '10px' }}>Columns / subgroups</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {cols.map((c) => (
                          <label key={c.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '11px', color: '#374151' }}>
                            <input type="checkbox" checked={c.selected} onChange={() => toggleCol(c.id)} style={{ accentColor: '#1976d2' }} />
                            {c.label}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Step 5: Export */}
              {(step === 'scanned' || step === 'exported') && (
                <>
                  <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '24px' }} />
                  <StepLabel n="5" title="Export" />
                  <p style={{ fontSize: '12px', color: '#4b5563', marginBottom: '14px' }}>
                    {selectedQ.length} question{selectedQ.length !== 1 ? 's' : ''} · {selectedCols.length} column{selectedCols.length !== 1 ? 's' : ''} selected
                  </p>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
                    {(['excel', 'word'] as const).map((f) => (
                      <label key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '12px', color: '#374151' }}>
                        <input type="radio" name="fmt" value={f} checked={exportFormat === f} onChange={() => { setExportFormat(f); setExportDone(false) }} style={{ accentColor: '#1976d2' }} />
                        {f === 'excel' ? 'Excel (.xlsx)' : 'Media Release Template (Word)'}
                      </label>
                    ))}
                  </div>
                  {!exportDone ? (
                    <button
                      onClick={doExport}
                      disabled={!canExport || exporting}
                      style={{ background: !canExport ? '#e5e7eb' : exporting ? '#9ca3af' : '#1976d2', color: !canExport ? '#9ca3af' : '#fff', border: 'none', borderRadius: '4px', padding: '8px 20px', fontSize: '12px', cursor: !canExport || exporting ? 'default' : 'pointer', fontWeight: 500 }}
                    >
                      {exporting ? 'Generating…' : canExport ? `Export ${selectedQ.length} question${selectedQ.length !== 1 ? 's' : ''} →` : 'Select questions and columns to export'}
                    </button>
                  ) : (
                    <div>
                      <p style={{ fontSize: '12px', color: '#4caf50', fontWeight: 600, marginBottom: '10px' }}>✓ Export ready</p>
                      <button style={{ background: '#e8f5e9', color: '#2e7d32', border: '1px solid #4caf50', borderRadius: '4px', padding: '8px 20px', fontSize: '12px', cursor: 'pointer', fontWeight: 500 }}>
                        ⬇ Download {exportFormat === 'excel' ? 'crosstabs.xlsx' : 'media_release.docx'}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={reset} style={{ fontSize: '11px', color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              ↺ Start over
            </button>
            <a href="https://github.com/camahoy/crosstab-studio" target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', color: '#9ca3af', textDecoration: 'none' }}>
              View source on GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function StepLabel({ n, title }: { n: string; title: string }) {
  return (
    <p style={{ fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>
      {n} · {title}
    </p>
  )
}

function Btn({ onClick, disabled, children }: { onClick?: () => void; disabled?: boolean; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ background: disabled ? '#9ca3af' : '#1976d2', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 20px', fontSize: '12px', cursor: disabled ? 'default' : 'pointer', fontWeight: 500 }}
    >
      {children}
    </button>
  )
}
