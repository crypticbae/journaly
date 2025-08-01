import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "nord", "cupcake", "bumblebee", "retro", "halloween", "forest", "aqua", "pastel", "dracula", "night", "dim"],
    base: true,
    styled: true,
    utils: true,
    logs: false,
    darkTheme: "dark",
  },
};

export default config; 