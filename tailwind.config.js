/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': 'var(--color-bg)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'card': 'var(--color-card)',
        'primary': 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        'accent': 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        'text': 'var(--color-text)',
        'text-secondary': 'var(--color-text-secondary)',
        'footer-bg': 'var(--color-footer-bg)',
        'footer-text': 'var(--color-footer-text)',
        'glass': 'var(--color-glass)',
        'glass-border': 'var(--color-glass-border)',
      }
    },
  },
  plugins: [],
} 