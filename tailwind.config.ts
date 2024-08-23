import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#09c27c",
        background: "#121212",
        "background-secondary": "#1e1e1e",
        text: "#e0e0e0",
        "text-secondary": "#a0a0a0",
        border: "#2c2c2c",
        hover: "#0ae692",
        error: "#ff5252",
        success: "#5fddc1",
        "background-accent": "#242424",
      },
    },
  },
  plugins: [],
};
export default config;
