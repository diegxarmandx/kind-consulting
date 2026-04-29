import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f9eee0",
        blush: "#e0bfbc",
        mauve: "#b49ea8",
        teal: "#135361",
        sage: "#738561",
        ink: "#17343a"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(19, 83, 97, 0.14)",
        card: "0 16px 40px rgba(19, 83, 97, 0.10)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};

export default config;
