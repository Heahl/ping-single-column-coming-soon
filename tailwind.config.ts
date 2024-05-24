import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'blue': 'hsl(223, 87%, 63%)',
        'pale-blue': 'hsl(223, 100%, 88%)',
        'light-red': 'hsl(354, 100%, 66%)',
        'gray': 'hsl(0, 0%, 59%)',
        'very-dark-blue': 'hsl(209, 33%, 12%)',
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        franklin: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
