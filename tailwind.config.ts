import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        asparagus: "#86a873ff",
        palePurple: "#e3d8f1ff",
        thistleAlt: "#dabecaff",
        rosyBrown: "#bf8b85ff",
        lion: "#ad8a64ff",
        paynesGray: "#5d5f71ff",
      },
      gradients: {
        'top': 'linear-gradient(0deg, #e3d8f1ff, #dabecaff, #bf8b85ff, #ad8a64ff, #5d5f71ff)',
        'right': 'linear-gradient(90deg, #e3d8f1ff, #dabecaff, #bf8b85ff, #ad8a64ff, #5d5f71ff)',
        'bottom': 'linear-gradient(180deg, #e3d8f1ff, #dabecaff, #bf8b85ff, #ad8a64ff, #5d5f71ff)',
        'left': 'linear-gradient(270deg, #e3d8f1ff, #dabecaff, #bf8b85ff, #ad8a64ff, #5d5f71ff)',
        'top-right': 'linear-gradient(45deg, #e3d8f1ff, #dabecaff, #bf8b85ff, #ad8a64ff, #5d5f71ff)',
        'bottom-right': 'linear-gradient(135deg, #e3d8f1ff, #dabecaff, #bf8b85ff, #ad8a64ff, #5d5f71ff)',
        'top-left': 'linear-gradient(225deg, #e3d8f1ff, #dabecaff, #bf8b85ff, #ad8a64ff, #5d5f71ff)',
        'bottom-left': 'linear-gradient(315deg, #e3d8f1ff, #dabecaff, #bf8b85ff, #ad8a64ff, #5d5f71ff)',
        'radial': 'radial-gradient(#e3d8f1ff, #dabecaff, #bf8b85ff, #ad8a64ff, #5d5f71ff)',
      },
      boxShadow: {
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1)',
      },
      transitionProperty: {
        'transform': 'transform',
        'shadow': 'box-shadow',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.5, 0, 0.5, 1)',
      },
      scale: {
        '105': '1.05',
      },
      ringColor: {
        'yellow': '#f7d600',
      },
      ringOffsetWidth: {
        '2': '2px',
      }
    },
  },
  plugins: [],
};

export default config;
