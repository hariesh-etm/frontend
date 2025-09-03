/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1E3A8A",
        teal: "#14B8A6"
      },
      fontFamily: {
        headline: ["Lato", "sans-serif"],
        body: ["Open Sans", "sans-serif"]
      }
    }
  },
  plugins: []
};
