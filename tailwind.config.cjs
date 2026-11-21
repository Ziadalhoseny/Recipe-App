module.exports = {
  content: ['./app/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: 'rgb(var(--color-cream) / <alpha-value>)',
        teal: 'rgb(var(--color-teal) / <alpha-value>)',
        coral: 'rgb(var(--color-coral) / <alpha-value>)',
        'soft-teal': 'rgb(var(--color-soft-teal) / <alpha-value>)',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
}
