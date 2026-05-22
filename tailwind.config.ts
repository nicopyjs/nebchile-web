import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neb: {
          gold: '#D4A800',
          'gold-light': '#F5C842',
          'gold-dark': '#A88500',
          black: '#111111',
          'dark-bg': '#0d0d0d',
          'dark-surface': '#1a1a1a',
          'dark-border': '#2a2a2a',
          // Legacy
          blue: '#1a3a5c',
          'blue-dark': '#0d2340',
          'blue-light': '#2563eb',
          orange: '#f97316',
          gray: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
