// E:\Researchers_next\researchers\tailwind.config.ts

// E:\Researchers_next\researchers\tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // You can add custom prose colors here if you want
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%', // Ensures content takes full width of the container
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // <--- ADD THIS LINE
  ],
};

export default config;