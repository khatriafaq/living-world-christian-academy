import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xxl: "1700px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        blackops: ['var(--font-blackops)'],
        SourceSans3: ['var(--font-source-sans-3)'],
        mulish: "Mulish",
        ubuntu: "Ubuntu",
        inter: "Inter",
        poppins: "Poppins",
        inherit: "inherit",
      },
      colors: {
        brandColor: '#215FFF',
        lightPink: '#FF9EEA',
        dark: '#1C1C1E',
        dark2: '#8A8A8E',
        light: '#F2F2F7',
        light2: '#FFFFFF',
        gray: {
          "100": "#082739",
          "200": "#051e3d",
        },
        white: "#fff",
        skyblue: {
          "100": "#9de2ff",
          "200": "#9ae2ff",
          "300": "#80c9e6",
          "400": "rgba(128, 201, 230, 0.09)",
          "500": "rgba(154, 226, 255, 0.3)",
        },
      }
    },
  },
  plugins: [],
}
export default config
