export default function Footer() {
  return (
    <footer
      className="border-t border-light px-14 py-7 flex justify-between items-center flex-wrap gap-3"
      style={{ background: 'var(--bg)' }}
    >
      <span className="font-serif text-[15px] text-ink">Camille Hoy</span>
      <span className="text-[11px] text-mid tracking-[0.05em]">
        2025 — San Francisco
      </span>
    </footer>
  )
}
