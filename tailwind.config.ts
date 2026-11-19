import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1020",
        panel: "#111a2e",
        accent: "#6d7cff"
      }
    }
  },
  plugins: []
};

export default config;