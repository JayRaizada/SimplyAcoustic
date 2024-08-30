/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        inherit: "inherit",
      },
      width: {
        "90vw": "80vw",
        inherit: "inherit",
      },
      colors: {
        custom: "#f2f3fa",
        logoorange: "#f3af32",
        classbg: "#070707",
      },
    },
  },
  plugins: [],
};
