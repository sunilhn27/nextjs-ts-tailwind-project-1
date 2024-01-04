import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      scale: {
        '-100': '-1',
      },
      backgroundImage: {
        // 'my_bg_image':"url('./public/svgexport-5.png')",
      },
    },
  },
  plugins: [],
}
export default config
