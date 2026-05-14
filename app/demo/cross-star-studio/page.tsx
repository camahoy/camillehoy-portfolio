import Link from 'next/link'

export default function CrossStabStudioDemo() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#f0eeeb' }}>
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
          A Python workflow tool for reformatting raw survey data and market research exports
          into presentation-ready crosstabs. Supports multiple banner formats with saved profiles,
          fast question selection, and clean Excel output.
        </p>

        <div style={{ borderTop: '0.5px solid #ddd8d0', paddingTop: '40px', marginBottom: '40px' }}>
          <p className="text-[10px] font-light uppercase tracking-[0.18em] text-muted mb-6">
            What it does
          </p>
          <ul className="space-y-3" style={{ maxWidth: '560px' }}>
            {[
              'Ingests raw SPSS, Excel, or CSV survey exports',
              'Reformats to client-ready crosstab structure with banner points',
              'Saves banner profiles for repeat use across program waves',
              'Outputs clean, formatted Excel files ready for delivery',
              'Reduced reporting time from several weeks to a few days',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-muted mt-[7px] flex-shrink-0 text-[8px]">—</span>
                <span className="text-[13px] font-light text-warm leading-[1.85]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="https://github.com/camahoy/crosstab-studio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-[11px] font-light uppercase tracking-[0.1em] text-bg no-underline py-3 px-6 transition-opacity hover:opacity-80"
          style={{ background: '#1a1816', borderRadius: '4px' }}
        >
          View on GitHub
        </a>
      </div>
    </div>
  )
}
