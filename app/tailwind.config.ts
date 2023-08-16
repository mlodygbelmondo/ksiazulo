import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "9/10": "90%",
      },
      scale: {
        "-100": "-1",
      },
      ringWidth: {
        7: "7px",
      },
      colors: {
        "youtube-red": "#FF0000",
      },
    },
  },

  plugins: [],
} satisfies Config;
