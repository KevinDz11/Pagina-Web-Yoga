/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yoga-primary': '#6B705C', // Verde oliva relajante
        'yoga-accent': '#B7B7A4',  // Tono tierra suave
        'yoga-bg': '#FFE8D6',      // Fondo crema
      },
    },
  },
  plugins: [],
}