import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add any theme extensions here if needed in the future
      // For example, custom colors, fonts, etc.
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "500px", // Mobile devices
        md: "900px", // Tablet devices
      },
      colors: {
        vermillion: {
          50: "#e8e4e2",
          100: "#d2c9c7",
          200: "#beafab",
          300: "#aa9590",
          400: "#917e79",
          500: "#786864",
          600: "#5f534f",
          700: "#483e3c",
          800: "#312b29",
          900: "#1d1918",
        },
        yellow: {
          50: "#e5e5df",
          100: "#ccccbf",
          200: "#b4b39e",
          300: "#9c9b82",
          400: "#84836e",
          500: "#6d6c5b",
          600: "#575648",
          700: "#414136",
          800: "#2d2d25",
          900: "#1a1a16",
        },
        harlequin: {
          50: "#e1e6e0",
          100: "#c4cec1",
          200: "#a7b7a1",
          300: "#8c9f85",
          400: "#778770",
          500: "#626f5d",
          600: "#4e594a",
          700: "#3b4337",
          800: "#282e26",
          900: "#181b16",
        },
        spring_green: {
          50: "#e0e6e3",
          100: "#c1cec7",
          200: "#a2b7ac",
          300: "#85a092",
          400: "#71877b",
          500: "#5d7066",
          600: "#4a5951",
          700: "#38433d",
          800: "#262e2a",
          900: "#161b18",
        },
        cerulean: {
          50: "#e1e5e7",
          100: "#c3cdd0",
          200: "#a5b5b9",
          300: "#889ea3",
          400: "#73858a",
          500: "#5f6e72",
          600: "#4c575b",
          700: "#394244",
          800: "#272d2f",
          900: "#171a1b",
        },
        blue: {
          50: "#e4e4e9",
          100: "#cacad5",
          200: "#b0b1c2",
          300: "#9798af",
          400: "#7f8099",
          500: "#696a7e",
          600: "#545464",
          700: "#3f3f4c",
          800: "#2b2c34",
          900: "#19191e",
        },
        mulberry: {
          50: "#e7e3e9",
          100: "#d0c8d4",
          200: "#bbaec0",
          300: "#a694ad",
          400: "#8e7c95",
          500: "#75667b",
          600: "#5d5162",
          700: "#463d4a",
          800: "#302a33",
          900: "#1c181d",
        },
        rose: {
          50: "#e8e3e6",
          100: "#d3c8ce",
          200: "#bfadb7",
          300: "#ac93a1",
          400: "#947b89",
          500: "#7a6671",
          600: "#61515a",
          700: "#493d44",
          800: "#332a2f",
          900: "#1d181b",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
