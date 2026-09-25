import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f2f3f5',
        ink: '#17181c',
        inksoft: '#5b5e68',
        line: 'rgba(23,24,28,0.09)',
        teal: '#0f9d8f',
        tealdeep: '#0b7d72',
        tealtint: '#e7f5f1',
        apricot: '#fb923c',
        apricotdeep: '#e07a1f',
      },
      fontFamily: {
        display: ['Bricolage Grotesque', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 14px 34px -18px rgba(20,22,28,0.18)',
        lift: '0 22px 50px -22px rgba(20,22,28,0.28)',
      },
    },
  },
  plugins: [],
}
export default config
