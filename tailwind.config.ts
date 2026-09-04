import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0c0c0b",
        surface: "#141412",
        ink: "#e9e6dc",
        muted: "#8f8c80",
        faint: "#57554c",
        line: "#2a2a26",
        accent: "#a9b98c",
      },
      fontFamily: {
        serif: [
          "'Newsreader'",
          "ui-serif",
          "Georgia",
          "'Times New Roman'",
          "serif",
        ],
      },
      maxWidth: {
        prose: "620px",
      },
    },
  },
  plugins: [],
};
export default config;
