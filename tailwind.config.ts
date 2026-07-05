import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Mayday AI brand — orange + cream (matches business cards)
        brand: {
          DEFAULT: "#D9531E",
          dark: "#B54217",
          deep: "#8F3412",
          tint: "#FBE9DF",
        },
        cream: {
          DEFAULT: "#FAF4EA",
          bright: "#FFFBF3",
          dim: "#F3EADC",
        },
        ink: {
          DEFAULT: "#231A13",
          soft: "#5C4F44",
          faint: "#8A7B6E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        cta: "0 8px 24px -8px rgba(217, 83, 30, 0.45)",
        card: "0 2px 16px -4px rgba(35, 26, 19, 0.08)",
        bar: "0 -4px 20px -4px rgba(35, 26, 19, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
