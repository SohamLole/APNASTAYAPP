import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
  "./src/app/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7A18",
        redish: "#FF3D54",
        purple: "#9B2FFF",
        blueish: "#4F6BFF",
        textPrimary: "#111827",
        textSecondary: "#6B7280",
        border: "#E5E7EB",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(135deg, #FF7A18 0%, #FF3D54 35%, #9B2FFF 70%, #4F6BFF 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
