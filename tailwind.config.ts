// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: "class",
//   content: {
//     files: [
//       "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//       "./components/**/*.{js,ts,jsx,tsx,mdx}",
//       "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     ],
//   },
//   theme: {
//     extend: {
//       backgroundImage: {
//         "hero-pattern": "url('/svgs/pattern.svg')",
//       },

//       colors: {
//         myred: {
//           100: "#fde5e2",
//           200: "#fbcbc5",
//           300: "#f8b0a9",
//           400: "#f6968c",
//           500: "#f47c6f",
//           600: "#b75d53",
//           700: "#7a3e38",
//           800: "#3d1f1c",
//         },
//       },
//       fontFamily: {
//         sora: ["Sora", "sans-serif"],
//       },
//     },
//   },
//   plugins: [
//     // plugin(function ({ addUtilities, theme }) {
//     //   const myred500 = theme("colors.myred.500");
//     //   const myred700 = theme("colors.myred.700");

//     //   const newUtilities = {
//     //     ".neon-myred": {
//     //       boxShadow: `0 0 5px ${myred500}, 0 0 20px ${myred700}`,
//     //     },
//     //   };

//     //   addUtilities(newUtilities, ["responsive"]);
//     // }),
//     ,
//   ],
// } satisfies Config;

// export default config;

import type { Config } from "tailwindcss";
import tailwindcssMotion from "tailwindcss-motion";

const config: Config = {
  darkMode: "class",
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  safelist: [
    "motion",
    "motion-preset-typewriter-[16]",
    "motion-preset-typewriter-[24]",
    "motion-preset-typewriter-[32]",
  ],
  theme: {
    extend: {
      colors: {
        myred: {
          100: "#fde5e2",
          200: "#fbcbc5",
          300: "#f8b0a9",
          400: "#f6968c",
          500: "#f47c6f",
          600: "#b75d53",
          700: "#7a3e38",
          800: "#3d1f1c",
        },
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [tailwindcssMotion],
};

export default config;
