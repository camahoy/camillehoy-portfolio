'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const NODES = [
  { x: 30, y: 25, r: 4 },
  { x: 62, y: 18, r: 3 },
  { x: 78, y: 42, r: 5 },
  { x: 50, y: 55, r: 3.5 },
  { x: 20, y: 58, r: 4 },
  { x: 85, y: 72, r: 3 },
  { x: 45, y: 80, r: 4 },
  { x: 68, y: 88, r: 3 },
]

const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [3, 5], [5, 6], [6, 7], [0, 4], [2, 5],
]

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

      {/* RIGHT — animated research graph */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative flex items-center justify-center border-l border-light overflow-hidden"
        style={{ background: 'var(--bg)' }}
      >
        {/* radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 60% 35%, rgba(192,160,150,0.15) 0%, transparent 65%)',
          }}
        />

        {/* animated SVG graph */}
        <ResearchGraph />

        {/* Stats bar */}
        <div
          className="absolute bottom-0 left-0 right-0 grid border-t border-light"
          style={{ gridTemplateColumns: 'repeat(3,1fr)' }}
        >
          {[
            { n: '50+', l: 'Programs Annually' },
            { n: '4+', l: 'Years' },
            { n: '3', l: 'Languages' },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className={`px-5 py-[22px] bg-white ${i > 0 ? 'border-l border-light' : ''}`}
            >
              <div className="font-serif text-[32px] font-bold text-ink mb-0.5 leading-none">
                {s.n}
              </div>
              <div className="text-[10px] tracking-wider uppercase text-mid">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function ResearchGraph() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-[320px] h-[320px] relative z-10"
      style={{ filter: 'drop-shadow(0 0 24px rgba(160,130,120,0.08))' }}
    >
      {/* Edges */}
      {EDGES.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="#c9ada7"
          strokeWidth="0.4"
          strokeDasharray="40"
          strokeDashoffset="40"
          initial={{ strokeDashoffset: 40, opacity: 0 }}
          animate={{ strokeDashoffset: 0, opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.6 + i * 0.12, ease: 'easeOut' }}
        />
      ))}

      {/* Nodes */}
      {NODES.map((node, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.r * 2.5}
            fill="rgba(192,160,150,0.08)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
          />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="#c9ada7"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.55 + i * 0.1, type: 'spring', stiffness: 200 }}
          />
        </motion.g>
      ))}

      {/* Pulsing center label */}
      <motion.text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#a08278"
        fontSize="4"
        fontFamily="var(--font-dm-sans)"
        letterSpacing="0.3"
        textDecoration="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        style={{ textTransform: 'uppercase' }}
      >
        Research
      </motion.text>
      <motion.text
        x="50"
        y="55"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#a08278"
        fontSize="3.5"
        fontFamily="var(--font-dm-sans)"
        letterSpacing="0.25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        style={{ textTransform: 'uppercase' }}
      >
        Intelligence
      </motion.text>
    </svg>
  )
}
