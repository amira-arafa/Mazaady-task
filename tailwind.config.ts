import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: "#828282",
      ligthGray: "#E0E0E0",
      normalGray: "#4F4F4F",
      darkGray: "#333333",
      standardGray:"#dce0e8",
      darkRed: "#D20653",
      pink: "#FFEAD2",
      orange: "#FF951D",
      ligthOrange: "#FFF5E9",
      white: "#FFFFFF",
      mainGray:"#F6F4F5",
      black:"#363333",
      red:"#FF0000"
    },
    spacing: {
      wrapLg: "84px",
      sm: "12px",
      md: "24px",
      lg: "32px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      9: "9px",
      9.5: "9.5px",
      10: "10px",
      11: "11px",
      13: "13px",
      16: "16px",
      16.5: "16.5px",
      17: "17px",
      18: "18px",
      20: "20px",
      25: "25px",
      27: "27px",
      30: "30px",
      31: "31px",
      34: "34px",
      40: "40px",
      48: "48px",
      84: "84px",
      n1: "-1px",
    },
    borderRadius: {
      40: '40px',
      31: '31px',
      20: '20px',
      21: '21px',
      24: '24px',
      18: '18px',
      14: '14px',
      13: '13px',
      8: '8px'
    },
    fontFamily: {
      nunito: ["var(--font-nunito)"],
    },
    fontSize: {
      xxs: "8px",
      xs: "12px",
      sm: "14px",
      st: "16px",
      md: "18px",
      lg: "20px",
      xl: "24px",
      xxl: "32px"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      st: '1440px',
      xxl: "1536px",
    }
  },
  plugins: [],
};
export default config;
