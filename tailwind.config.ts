import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5F0E8",
        surface: "#FFFFFF",
        navy: "#1B2D5B",
        accent: "#C0392B",
        muted: "#6B7280",
        border: "#D9D0C0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
export default config;
