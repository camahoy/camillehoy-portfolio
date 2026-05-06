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
        ink: '#1e1916',
        warm: '#4a4540',
        mid: '#8c8480',
        light: '#ddd8d0',
        rose: '#a08278',
        'rose-l': '#c9ada7',
        'rose-x': '#f0e6e3',
        gold: '#c4a882',
        bg: '#faf8f5',
        bg2: '#f3efe9',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.28em',
        wider: '0.12em',
        wide: '0.06em',
      },
    },
  },
  plugins: [],
}

export default config
