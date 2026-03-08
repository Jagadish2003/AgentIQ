/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:      "#EBEBEB",
        panel:   "#FFFFFF",
        panel2:  "#F4F4F4",
        border:  "#CECECE",
        text:    "#1A1A1A",
        muted:   "#6B7280",
        accent:  "#374151"
      }
    }
  },
  plugins: []
};