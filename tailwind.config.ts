import type { Config } from 'tailwindcss';

const colors: { [key: string]: string } = {
  'light-primary': 'white',
  'light-secondary': 'rgb(226 232 240)',
  'dark-primary': 'rgb(18 18 18)',
  'dark-secondary': 'rgb(30 41 59)',
};

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      width: Object.fromEntries(
        Array.from({ length: 2001 }, (_, i) => [i, `${i}px`]),
      ),
      height: Object.fromEntries(
        Array.from({ length: 2001 }, (_, i) => [i, `${i}px`]),
      ),
      opacity: {
        bold: '0.87',
        normal: '0.6',
        off: '0.38',
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      textColor: {
        light: 'black',
        dark: 'white',
      },
      backgroundColor: colors,
      borderColor: colors,
      fill: colors,
      boxShadowColor: colors,
    },
  },
  plugins: [],
};

export default config;
