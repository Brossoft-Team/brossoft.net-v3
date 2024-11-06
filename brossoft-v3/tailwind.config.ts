import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: "#F9F5F2",
        primaryColor: "#F7CB45",
        secondaryColor: "#1F1F1F",
        textColor: "#282825",
        textSecondaryColor: "#52514e",
        secondaryText: '#your-color-here', 
      },
      screens: {
        sm: '567px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};

export default config;
