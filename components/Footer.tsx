export default function Footer() {
  return (
    <footer
      className="flex justify-between items-center flex-wrap gap-3"
      style={{
        borderTop: '0.5px solid #ddd8d0',
        background: '#f0eeeb',
        padding: '28px 52px',
        maxWidth: '100%',
      }}
    >
      <span className="text-[12px] font-normal text-ink tracking-[-0.01em]">
        Camille Hoy
      </span>
      <span className="text-[11px] font-light text-muted">
        2025 — San Francisco
      </span>
    </footer>
  )
}
