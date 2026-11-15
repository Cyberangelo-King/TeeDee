import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        td: {
          red: {
            DEFAULT: "#B32632",
            hover: "#961E28",
            light: "#FDF2F2",
          },
          orange: {
            DEFAULT: "#E57A2F",
            hover: "#C96620",
            light: "#FEF7EE",
          },
          graphite: {
            DEFAULT: "#17191D",
            dark: "#0F1114",
            card: "#202329",
            light: "#2B2E36",
            border: "rgba(255, 255, 255, 0.08)",
          },
          paper: {
            DEFAULT: "#F4F2ED",
            card: "#ECE9E2",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
