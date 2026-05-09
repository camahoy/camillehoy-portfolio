import Link from 'next/link'

export default function ResearchOpsOrganizerDemo() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#f0eeeb' }}>
      <div className="flex-1 flex flex-col justify-center" style={{ maxWidth: '1080px', margin: '0 auto', padding: '120px 52px' }}>
        <p className="label mb-6">002 · Operations Infrastructure</p>
        <h1
          className="text-ink mb-6 tracking-[-0.02em]"
          style={{ fontSize: '42px', fontWeight: 500, lineHeight: 1.1 }}
        >
          Research Ops Organizer
        </h1>
        <p className="text-[14px] font-light text-warm leading-[1.9] mb-3" style={{ maxWidth: '480px' }}>
          Notion-based program management system for concurrent research studies. Single source of truth for milestones, vendors, compliance, and capacity.
        </p>
        <p className="text-[13px] font-light text-muted italic mb-12">
          Demo coming soon.
        </p>
        <Link
          href="/"
          className="text-[12px] font-light text-muted no-underline transition-colors hover:text-ink"
        >
          ← Back
        </Link>
      </div>
    </div>
  )
}
