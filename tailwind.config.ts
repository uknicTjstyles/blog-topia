import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "rgb(138, 105, 212)",
        customPurpleLight: "#a78bfa", // A lighter shade of your custom purple
        customPurpleDark: "#6d28d9",
        vibrantPink: "#ff6ec7", // Vibrant pink
        deepBlue: "#1e3a8a",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
          
        },
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(90deg, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "graySpecial-30": "rgb(249,245,255)",
      },
      boxShadow: {
        fine: "0 4px 12px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.05)",
        elevated:
          "0 10px 30px rgba(0, 0, 0, 0.15), 0 15px 50px rgba(0, 0, 0, 0.1)",
        subtle: "0 2px 6px rgba(0, 0, 0, 0.15)",
        hover: "0 8px 16px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
