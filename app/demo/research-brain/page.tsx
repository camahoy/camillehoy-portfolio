'use client'

import { useState } from 'react'
import Link from 'next/link'

type SourceType = 'news' | 'poll' | 'social' | 'paper' | 'manual'

type Entry = {
  id: string
  streamId: string
  title: string
  source: string
  sourceType: SourceType
  summary: string
  keywords: string[]
  date: string
}

type Stream = {
  id: string
  name: string
  watching: boolean
}

const SOURCE_LABELS: Record<SourceType, string> = {
  news: 'News',
  poll: 'Poll',
  social: 'Social',
  paper: 'Report',
  manual: 'Manual',
}

const STREAMS: Stream[] = [
  { id: 'dma', name: 'DMA Research', watching: false },
  { id: 'econ', name: 'Global Economic', watching: true },
  { id: 'commercial', name: 'Commercial', watching: false },
  { id: 'polling', name: 'Political Polling', watching: true },
]

const INITIAL_QUEUE: Entry[] = [
  {
    id: 'q1', streamId: 'polling',
    title: 'Reuters/Ipsos: Presidential approval drops 4pts amid inflation concerns',
    source: 'Reuters', sourceType: 'poll',
    summary: 'New Reuters/Ipsos poll shows presidential approval at 38%, down 4 points from March. Economic anxiety cited as primary driver, with 67% of respondents rating inflation as their top concern.',
    keywords: ['approval rating', 'inflation', 'economic sentiment', 'presidential'],
    date: 'May 10, 2026',
  },
  {
    id: 'q2', streamId: 'econ',
    title: 'IMF revises 2026 global growth forecast downward to 2.8%',
    source: 'IMF World Economic Outlook', sourceType: 'paper',
    summary: 'IMF cuts global growth projection by 0.4pp citing trade fragmentation, elevated interest rates, and geopolitical tensions. Advanced economies expected to grow at 1.6%, emerging markets at 3.9%.',
    keywords: ['GDP growth', 'IMF', 'trade fragmentation', 'interest rates', 'geopolitical risk'],
    date: 'May 9, 2026',
  },
  {
    id: 'q3', streamId: 'polling',
    title: 'FiveThirtyEight aggregate: Senate race tightens in key swing states',
    source: 'FiveThirtyEight', sourceType: 'poll',
    summary: 'Polling average in 4 competitive Senate seats shows margins tightening to within margin of error. Pennsylvania and Wisconsin show the largest shifts, driven by suburban voter movement.',
    keywords: ['Senate', 'swing states', 'polling average', 'suburban voters', 'Pennsylvania', 'Wisconsin'],
    date: 'May 10, 2026',
  },
  {
    id: 'q4', streamId: 'dma',
    title: 'EU DMA enforcement: Apple ordered to open App Store to rival payment systems',
    source: 'Financial Times', sourceType: 'news',
    summary: 'European Commission issued formal ruling requiring Apple to allow third-party payment processors within 60 days under Digital Markets Act provisions. Non-compliance carries fines up to 10% of global revenue.',
    keywords: ['DMA', 'Apple', 'App Store', 'European Commission', 'enforcement', 'payment systems'],
    date: 'May 8, 2026',
  },
  {
    id: 'q5', streamId: 'commercial',
    title: 'Nielsen: Streaming share of TV viewing hits 43% in Q1 2026',
    source: 'Nielsen', sourceType: 'news',
    summary: 'Streaming now accounts for 43% of total television viewing time in the US, up 6 points year-over-year. Netflix maintains largest share at 8.3%, with YouTube at 9.9% across all platforms.',
    keywords: ['streaming', 'media consumption', 'Nielsen', 'YouTube', 'Netflix', 'cord-cutting'],
    date: 'May 7, 2026',
  },
  {
    id: 'q6', streamId: 'econ',
    title: 'Fed minutes suggest rate cuts pushed to Q4 amid sticky core inflation',
    source: 'Federal Reserve', sourceType: 'paper',
    summary: 'May FOMC minutes reveal majority of members favor holding rates through Q3. Core PCE remaining at 3.1% cited as key concern. Labor market resilience reducing urgency for accommodation.',
    keywords: ['Fed', 'interest rates', 'inflation', 'FOMC', 'monetary policy', 'PCE'],
    date: 'May 8, 2026',
  },
]

const INITIAL_BRAIN: Entry[] = [
  {
    id: 'b1', streamId: 'polling',
    title: 'AP-NORC: Public trust in institutions at historic low',
    source: 'AP-NORC', sourceType: 'poll',
    summary: 'Comprehensive survey of 2,000 adults finds trust in federal government at 17%, media at 24%, and corporations at 19%. Partisan gap narrows on institutional distrust — rare point of bipartisan agreement.',
    keywords: ['institutional trust', 'public opinion', 'partisanship', 'media', 'government'],
    date: 'Apr 28, 2026',
  },
  {
    id: 'b2', streamId: 'econ',
    title: 'BLS: Labor market adds 187K jobs in April, unemployment steady at 4.1%',
    source: 'Bureau of Labor Statistics', sourceType: 'paper',
    summary: 'April jobs report shows continued moderation from 2024 highs. Healthcare and government led gains. Average hourly earnings up 3.8% YoY, narrowing the gap with inflation.',
    keywords: ['employment', 'labor market', 'BLS', 'wages', 'unemployment'],
    date: 'May 2, 2026',
  },
  {
    id: 'b3', streamId: 'dma',
    title: 'DMA Article 6 obligations: Gatekeeper interoperability requirements',
    source: 'European Commission', sourceType: 'paper',
    summary: 'Detailed breakdown of interoperability mandates for designated gatekeepers under DMA Article 6. Covers messaging, app stores, search, and social media. Implementation deadlines range from 6–18 months post-designation.',
    keywords: ['DMA', 'interoperability', 'gatekeepers', 'Article 6', 'EU regulation'],
    date: 'Apr 15, 2026',
  },
  {
    id: 'b4', streamId: 'commercial',
    title: 'Kantar: Brand trust drives 2.4x purchase likelihood in saturated categories',
    source: 'Kantar', sourceType: 'paper',
    summary: 'Global brand equity study across 10,000 brands finds trust as the single strongest predictor of purchase intent in high-competition categories. Price sensitivity drops 31% among high-trust brand users.',
    keywords: ['brand equity', 'trust', 'purchase intent', 'price sensitivity', 'consumer behavior'],
    date: 'Apr 20, 2026',
  },
  {
    id: 'b5', streamId: 'polling',
    title: 'Gallup: Economic pessimism highest since 2009 despite low unemployment',
    source: 'Gallup', sourceType: 'poll',
    summary: 'Gallup\'s Economic Confidence Index at -28, a level last seen during the financial crisis. Disconnect between macro indicators and consumer sentiment attributed to cumulative price levels and housing affordability.',
    keywords: ['economic confidence', 'consumer sentiment', 'Gallup', 'housing', 'financial crisis'],
    date: 'Apr 10, 2026',
  },
]

const STREAM_SUMMARIES: Record<string, string> = {
  polling: 'Consumer and institutional confidence remains depressed despite resilient labor market data. Presidential approval has declined 4 points to 38%, with economic anxiety — particularly inflation and housing — as the primary driver. Gallup\'s Economic Confidence Index sits at -28, levels last seen in 2009. Trust in institutions across government, media, and corporations remains at historic lows, with rare bipartisan agreement on the decline.',
  econ: 'Global growth forecasts have been revised downward to 2.8% by the IMF, reflecting trade fragmentation and persistent inflation. The Fed has signaled rate cuts will be deferred to Q4, with core PCE remaining at 3.1%. Labor markets have moderated — April added 187K jobs at 4.1% unemployment — but wage growth is narrowing the real earnings gap.',
  dma: 'EU Digital Markets Act enforcement is accelerating. Apple has received a formal ruling requiring App Store payment system openness within 60 days. Gatekeeper interoperability obligations under Article 6 are active across messaging, app stores, and search — with implementation windows of 6–18 months.',
  commercial: 'Streaming now commands 43% of total US TV viewing time, up 6 points YoY. Brand trust remains the single strongest predictor of purchase intent in competitive categories, with high-trust brand users showing 31% lower price sensitivity.',
  all: 'Across all streams, a consistent throughline emerges: institutional credibility is under pressure. Consumer sentiment is disconnected from macroeconomic indicators, regulatory enforcement is intensifying in digital markets, and media consumption is fragmenting. Labor markets remain resilient but rate policy is constrained by sticky inflation.',
}

export default function ResearchBrainDemo() {
  const [streams, setStreams] = useState(STREAMS)
  const [queue, setQueue] = useState(INITIAL_QUEUE)
  const [brain, setBrain] = useState(INITIAL_BRAIN)
  const [activeStream, setActiveStream] = useState('all')
  const [activeTab, setActiveTab] = useState<'queue' | 'brain'>('queue')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editSummary, setEditSummary] = useState('')
  const [editKeywords, setEditKeywords] = useState('')
  const [showOutput, setShowOutput] = useState(false)
  const [outputGenerated, setOutputGenerated] = useState(false)

  const filteredQueue = activeStream === 'all' ? queue : queue.filter(e => e.streamId === activeStream)
  const filteredBrain = activeStream === 'all' ? brain : brain.filter(e => e.streamId === activeStream)
  const streamMap = Object.fromEntries([...STREAMS.map(s => [s.id, s.name]), ['all', 'All Streams']])

  function toggleWatch(id: string) {
    setStreams(s => s.map(st => st.id === id ? { ...st, watching: !st.watching } : st))
  }

  function approve(item: Entry) {
    setBrain(b => [item, ...b])
    setQueue(q => q.filter(i => i.id !== item.id))
  }

  function reject(id: string) {
    setQueue(q => q.filter(i => i.id !== id))
  }

  function startEdit(item: Entry) {
    setEditingId(item.id)
    setEditSummary(item.summary)
    setEditKeywords(item.keywords.join(', '))
  }

  function saveAndApprove(item: Entry) {
    const updated: Entry = {
      ...item,
      summary: editSummary,
      keywords: editKeywords.split(',').map(k => k.trim()).filter(Boolean),
    }
    setBrain(b => [updated, ...b])
    setQueue(q => q.filter(i => i.id !== item.id))
    setEditingId(null)
  }

  function approveAll() {
    setBrain(b => [...filteredQueue, ...b])
    if (activeStream === 'all') {
      setQueue([])
    } else {
      setQueue(q => q.filter(i => i.streamId !== activeStream))
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#f0eeeb' }}>
      {/* Header */}
      <div
        className="sticky top-0 z-10"
        style={{ borderBottom: '0.5px solid #ddd8d0', background: '#f0eeeb' }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '16px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-[12px] font-light text-muted no-underline hover:text-ink transition-colors"
            >
              ←
            </Link>
            <span className="text-[11px] font-light text-muted">003 · AI Knowledge System</span>
            <span style={{ width: '1px', height: '12px', background: '#ddd8d0', display: 'inline-block' }} />
            <span className="text-[14px] font-medium text-ink tracking-[-0.01em]">Research Brain</span>
          </div>
          <button
            onClick={() => { setShowOutput(true); setOutputGenerated(false) }}
            className="text-[11px] font-light uppercase tracking-[0.1em] text-bg px-4 py-2 transition-opacity hover:opacity-80"
            style={{ background: '#1a1816', borderRadius: '4px' }}
          >
            Generate Brief
          </button>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px 80px',
          display: 'flex',
          gap: '48px',
          width: '100%',
          flex: 1,
        }}
      >
        {/* Sidebar */}
        <div style={{ width: '192px', flexShrink: 0, paddingTop: '36px' }}>
          <p className="text-[10px] font-light uppercase tracking-[0.18em] text-muted mb-4">Streams</p>

          <div>
            {streams.map(stream => (
              <div
                key={stream.id}
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => setActiveStream(stream.id)}
              >
                <span
                  className="text-[13px] font-light transition-colors"
                  style={{ color: activeStream === stream.id ? '#1a1816' : '#9c9690' }}
                >
                  {stream.name}
                </span>
                <button
                  onClick={e => { e.stopPropagation(); toggleWatch(stream.id) }}
                  className="text-[9px] uppercase tracking-[0.12em] px-2 py-0.5 transition-all"
                  style={{
                    border: `0.5px solid ${stream.watching ? '#1a1816' : '#c0bbb4'}`,
                    borderRadius: '20px',
                    color: stream.watching ? '#1a1816' : '#9c9690',
                  }}
                >
                  {stream.watching ? 'Live' : 'Off'}
                </button>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '0.5px solid #ddd8d0', marginTop: '8px', paddingTop: '12px' }}>
            <button
              onClick={() => setActiveStream('all')}
              className="text-[12px] font-light transition-colors"
              style={{ color: activeStream === 'all' ? '#1a1816' : '#9c9690' }}
            >
              All streams
            </button>
          </div>

          <div style={{ marginTop: '36px', paddingTop: '36px', borderTop: '0.5px solid #ddd8d0' }}>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-[11px] font-light text-muted">In queue</span>
                <span className="text-[11px] font-light text-ink">{filteredQueue.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[11px] font-light text-muted">In brain</span>
                <span className="text-[11px] font-light text-ink">{filteredBrain.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, paddingTop: '36px', minWidth: 0 }}>
          {/* Tabs */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-6">
              {(['queue', 'brain'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="flex items-center gap-2 pb-2 transition-colors"
                  style={{
                    borderBottom: activeTab === tab ? '1px solid #1a1816' : '1px solid transparent',
                  }}
                >
                  <span
                    className="text-[13px] font-light"
                    style={{ color: activeTab === tab ? '#1a1816' : '#9c9690' }}
                  >
                    {tab === 'queue' ? 'Ingestion Queue' : 'Brain'}
                  </span>
                  <span
                    className="text-[11px] font-light"
                    style={{ color: activeTab === tab ? '#1a1816' : '#9c9690' }}
                  >
                    {tab === 'queue' ? filteredQueue.length : filteredBrain.length}
                  </span>
                </button>
              ))}
            </div>
            {activeTab === 'queue' && filteredQueue.length > 1 && (
              <button
                onClick={approveAll}
                className="text-[11px] font-light text-muted hover:text-ink transition-colors"
              >
                Approve all ({filteredQueue.length})
              </button>
            )}
          </div>

          {/* Queue */}
          {activeTab === 'queue' && (
            <div>
              {filteredQueue.length === 0 ? (
                <p className="text-[13px] font-light text-muted italic pt-4">
                  Queue is empty. Items from watched sources will appear here.
                </p>
              ) : (
                <div>
                  {filteredQueue.map(item => (
                    <div
                      key={item.id}
                      style={{ borderTop: '0.5px solid #ddd8d0', padding: '24px 0' }}
                    >
                      <div className="flex items-start gap-6">
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="text-[10px] font-light uppercase tracking-[0.12em] text-muted">
                              {SOURCE_LABELS[item.sourceType]}
                            </span>
                            <span className="text-[10px] text-muted">·</span>
                            <span className="text-[10px] font-light text-muted">{item.source}</span>
                            <span className="text-[10px] text-muted">·</span>
                            <span className="text-[10px] font-light text-muted">{streamMap[item.streamId]}</span>
                            <span className="text-[10px] text-muted">·</span>
                            <span className="text-[10px] font-light text-muted">{item.date}</span>
                          </div>

                          <h3 className="text-[14px] font-medium text-ink mb-3 leading-snug">
                            {item.title}
                          </h3>

                          {editingId === item.id ? (
                            <div className="space-y-3">
                              <textarea
                                value={editSummary}
                                onChange={e => setEditSummary(e.target.value)}
                                rows={3}
                                className="w-full text-[13px] font-light text-warm leading-relaxed resize-none bg-transparent outline-none"
                                style={{
                                  border: '0.5px solid #c0bbb4',
                                  borderRadius: '4px',
                                  padding: '10px 12px',
                                }}
                              />
                              <input
                                value={editKeywords}
                                onChange={e => setEditKeywords(e.target.value)}
                                className="w-full text-[12px] font-light text-muted bg-transparent outline-none"
                                style={{
                                  border: '0.5px solid #c0bbb4',
                                  borderRadius: '4px',
                                  padding: '8px 12px',
                                }}
                                placeholder="Keywords, comma separated"
                              />
                              <div className="flex gap-3 items-center">
                                <button
                                  onClick={() => saveAndApprove(item)}
                                  className="text-[11px] font-light text-bg px-3 py-1.5 hover:opacity-80 transition-opacity"
                                  style={{ background: '#1a1816', borderRadius: '4px' }}
                                >
                                  Save &amp; Approve
                                </button>
                                <button
                                  onClick={() => setEditingId(null)}
                                  className="text-[11px] font-light text-muted hover:text-ink transition-colors"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <>
                              <p className="text-[13px] font-light text-warm leading-relaxed mb-3">
                                {item.summary}
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {item.keywords.map(k => (
                                  <span
                                    key={k}
                                    className="text-[10px] font-light text-muted px-2.5 py-1"
                                    style={{ border: '0.5px solid #c0bbb4', borderRadius: '20px' }}
                                  >
                                    {k}
                                  </span>
                                ))}
                              </div>
                            </>
                          )}
                        </div>

                        {editingId !== item.id && (
                          <div className="flex flex-col gap-1.5 flex-shrink-0" style={{ paddingTop: '2px' }}>
                            <button
                              onClick={() => approve(item)}
                              className="text-[11px] font-light text-bg px-3 py-1.5 hover:opacity-80 transition-opacity text-center"
                              style={{ background: '#1a1816', borderRadius: '4px', minWidth: '76px' }}
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => startEdit(item)}
                              className="text-[11px] font-light text-ink px-3 py-1.5 text-center transition-colors"
                              style={{ border: '0.5px solid #c0bbb4', borderRadius: '4px' }}
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => reject(item.id)}
                              className="text-[11px] font-light text-muted hover:text-ink transition-colors text-center py-1.5"
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <div style={{ borderTop: '0.5px solid #ddd8d0' }} />
                </div>
              )}
            </div>
          )}

          {/* Brain */}
          {activeTab === 'brain' && (
            <div>
              {filteredBrain.length === 0 ? (
                <p className="text-[13px] font-light text-muted italic pt-4">
                  No entries yet. Approve items from the queue to build the brain.
                </p>
              ) : (
                <div>
                  {filteredBrain.map(entry => (
                    <div
                      key={entry.id}
                      style={{ borderTop: '0.5px solid #ddd8d0', padding: '24px 0' }}
                    >
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-[10px] font-light uppercase tracking-[0.12em] text-muted">
                          {SOURCE_LABELS[entry.sourceType]}
                        </span>
                        <span className="text-[10px] text-muted">·</span>
                        <span className="text-[10px] font-light text-muted">{entry.source}</span>
                        <span className="text-[10px] text-muted">·</span>
                        <span className="text-[10px] font-light text-muted">{streamMap[entry.streamId]}</span>
                        <span className="text-[10px] text-muted">·</span>
                        <span className="text-[10px] font-light text-muted">{entry.date}</span>
                      </div>
                      <h3 className="text-[14px] font-medium text-ink mb-2 leading-snug">
                        {entry.title}
                      </h3>
                      <p className="text-[13px] font-light text-warm leading-relaxed mb-3">
                        {entry.summary}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {entry.keywords.map(k => (
                          <span
                            key={k}
                            className="text-[10px] font-light text-muted px-2.5 py-1"
                            style={{ border: '0.5px solid #c0bbb4', borderRadius: '20px' }}
                          >
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div style={{ borderTop: '0.5px solid #ddd8d0' }} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Generate Brief modal */}
      {showOutput && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(26,24,22,0.5)' }}
          onClick={e => { if (e.target === e.currentTarget) setShowOutput(false) }}
        >
          <div
            className="relative"
            style={{
              background: '#f0eeeb',
              borderRadius: '4px',
              width: '640px',
              maxHeight: '80vh',
              overflowY: 'auto',
              padding: '40px',
            }}
          >
            <button
              onClick={() => setShowOutput(false)}
              className="absolute top-5 right-5 text-[12px] font-light text-muted hover:text-ink transition-colors"
            >
              ✕
            </button>

            <p className="text-[10px] font-light uppercase tracking-[0.18em] text-muted mb-2">Output</p>
            <h2 className="text-[20px] font-medium text-ink mb-1 tracking-[-0.01em]">
              Brief
            </h2>
            <p className="text-[13px] font-light text-muted mb-8">
              {streamMap[activeStream]} · {filteredBrain.length} entries
            </p>

            {!outputGenerated ? (
              <button
                onClick={() => setOutputGenerated(true)}
                className="text-[11px] font-light uppercase tracking-[0.1em] text-bg px-5 py-3 hover:opacity-80 transition-opacity"
                style={{ background: '#1a1816', borderRadius: '4px' }}
              >
                Generate
              </button>
            ) : (
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-light uppercase tracking-[0.18em] text-muted mb-3">
                    Summary
                  </p>
                  <p className="text-[13px] font-light text-warm leading-relaxed">
                    {STREAM_SUMMARIES[activeStream] || STREAM_SUMMARIES['all']}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-light uppercase tracking-[0.18em] text-muted mb-3">
                    Key themes
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {[...new Set(filteredBrain.flatMap(e => e.keywords))].slice(0, 12).map(k => (
                      <span
                        key={k}
                        className="text-[10px] font-light text-muted px-2.5 py-1"
                        style={{ border: '0.5px solid #c0bbb4', borderRadius: '20px' }}
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-light uppercase tracking-[0.18em] text-muted mb-3">
                    Citations ({filteredBrain.length})
                  </p>
                  <div className="space-y-2">
                    {filteredBrain.map((e, i) => (
                      <p key={e.id} className="text-[12px] font-light text-muted leading-relaxed">
                        [{i + 1}] {e.source}. &ldquo;{e.title}.&rdquo; {e.date}.
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
