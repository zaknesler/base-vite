import type { Config } from 'tailwindcss'
import defaultColors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/*.{tsx,ts,jsx,js}', 'index.html'],
  theme: {
    extend: {
      colors: {
        brand: defaultColors.blue,
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config
