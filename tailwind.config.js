/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // Can define coastal colors here later
        'coastal-blue': '#4A6B82',
        'sand': '#F4F1EB',
      }
    },
  },
  plugins: [],
}

