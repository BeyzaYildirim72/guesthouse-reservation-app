import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Zeytin yeşili - ana marka rengi
        zeytin: {
          50: "#f4f6ee",
          100: "#e6ebd6",
          200: "#cdd8ad",
          300: "#aec27d",
          400: "#8fab55",
          500: "#6f8d3c",
          600: "#566f2f",
          700: "#4a5d3a",
          800: "#384528",
          900: "#2c3a22",
          950: "#1a2314",
        },
        // Sıcak bej / krem tonları
        bej: {
          50: "#fdfbf7",
          100: "#faf7f0",
          200: "#efe6d5",
          300: "#e3d5b8",
          400: "#d3bd8f",
          500: "#c2a468",
        },
        // Terrakota - vurgu rengi
        toprak: {
          400: "#d98a5e",
          500: "#c8703d",
          600: "#ab5a2e",
          700: "#8a4625",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
