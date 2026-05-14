import Link from 'next/link'

export default function SignalStreamsDemo() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#f0eeeb' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '120px 52px 80px' }}>
        <Link
          href="/"
          className="text-[12px] font-light text-muted no-underline transition-colors hover:text-ink inline-block mb-16"
        >
          ← Back
        </Link>

        <p className="label mb-6">003 · AI Knowledge System</p>
        <h1
          className="text-ink mb-4 tracking-[-0.02em]"
          style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.1 }}
        >
          Signal Streams
        </h1>
        <p className="text-[14px] font-light text-warm leading-[1.9] mb-10" style={{ maxWidth: '560px' }}>
          A living knowledge repository that follows multiple research streams simultaneously.
          Organizes literature, tags findings by theme, and surfaces relevant prior work
          so every study starts informed.
        </p>

        <div className="flex gap-3 mb-16 flex-wrap">
          <a
            href="https://research-repo-xi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-light uppercase tracking-[0.1em] text-bg no-underline py-3 px-6 transition-opacity hover:opacity-80"
            style={{ background: '#1a1816', borderRadius: '4px' }}
          >
            Launch Demo
          </a>
          <a
            href="https://github.com/camahoy/Research-Repo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-light uppercase tracking-[0.1em] text-ink no-underline py-3 px-6 transition-colors"
            style={{ border: '0.5px solid #c0bbb4', borderRadius: '4px' }}
          >
            GitHub
          </a>
        </div>

        {/* Live embed */}
        <div style={{ borderTop: '0.5px solid #ddd8d0', paddingTop: '40px' }}>
          <p className="text-[10px] font-light uppercase tracking-[0.18em] text-muted mb-6">
            Live preview
          </p>
          <iframe
            src="https://research-repo-xi.vercel.app"
            title="Signal Streams"
            style={{
              width: '100%',
              height: '680px',
              border: '0.5px solid #ddd8d0',
              borderRadius: '4px',
            }}
          />
        </div>
      </div>
    </div>
  )
}
