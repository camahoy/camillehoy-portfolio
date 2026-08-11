import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f0eeeb',
        'bg-alt': '#faf9f7',
        ink: '#1a1816',
        warm: '#4a4540',
        muted: '#6b6560',
        border: '#c0bbb4',
        divider: '#ddd8d0',
        rose: '#a08278',
        'rose-l': '#c9ada7',
        terracotta: '#c17f5a',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}

export default config
