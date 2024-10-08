/** @type {import('tailwindcss').Config} */

module.exports = {
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
      fontFamily: {
        wsans: ["Work Sans", "sans-serif"],
      },
      colors: {
        "custom-blue": "rgba(75, 107, 251, 0.05)",
        "custom-border": "rgba(105, 106, 117, 0.30)",
      },
      plugins: [
        function ({ addUtilities }) {
          addUtilities({
            ".line-clamp-2": {
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
            ".line-clamp-3": {
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          });
        },
      ],
    },
  },
  plugins: [],
};

