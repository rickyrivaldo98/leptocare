module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      iphone5: { raw: "(max-width: 320px) and (max-height: 568px)" },
      galaxy5: { raw: "(max-height: 640px)" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
