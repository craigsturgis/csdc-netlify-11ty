module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        csred: {
          light: 'FFA280',
          DEFAULT: '#FF4400',
          dark: '#601A00',
        }
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
