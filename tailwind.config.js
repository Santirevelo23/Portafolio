/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Oswald': ['Oswald', 'sans-serif'], // Agrega la fuente Oswald
        'Inter': ['Inter', 'sans-serif'], // Agrega la fuente Inter
        'Poppins': ['Poppins', 'sans-serif'], // Agrega la fuente Poppins
      },
      colors: {
        'primary': '#FF6600', // Agrega tu color primario aquí
        'white': '#FFFFFF', // Agrega el color blanco si no está incluido
        'purple-landing': '#6a0dad', // Agrega el color morado para el fondo de la landing page
        'personalBlue': '#bae6fd', // Agrega el color morado para el fondo de la landing page
      },
    },
  },
  plugins: [],
}