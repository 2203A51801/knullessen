/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#07090c",
          900: "#0b0f14",
          800: "#101722",
          700: "#162030"
        },
        ember: {
          500: "#ff6a3d",
          600: "#ff5320"
        }
      },
      boxShadow: {
        panel: "0 0 0 1px rgba(255,255,255,0.08), 0 12px 40px rgba(0,0,0,0.55)"
      }
    }
  },
  plugins: []
};