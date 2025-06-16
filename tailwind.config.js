module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        tropicalBlue: '#1976d2', // deep blue
        deepBlue: '#0d47a1',
        lushGreen: '#43a047',
        naturalGreen: '#388e3c',
        brightYellow: '#ffd600',
        goldenYellow: '#ffb300',
        vibrantOrange: '#ff7043',
        warmOrange: '#ff9800',
        teal: '#009688',
        cream: '#fffdd0',
        beige: '#f5f5dc',
      },
    },
  },
  plugins: [],
}; 