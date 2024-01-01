/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "examhub-blue-purple": "#1B1464",
      },
      screens: {
        "clinic-card-950": "950px",
        "clinic-card-720": "720px",
      },
    },
  },
  plugins: [],
};
