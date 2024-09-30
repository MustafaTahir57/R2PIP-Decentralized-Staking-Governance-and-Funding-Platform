// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors:{
//         red1: "#c21b0c",
//       }
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red1: "#c21b0c",
      },
      screens: {
        'sm': '320px',   // Small devices (phones)
        'md': '768px',   // Medium devices (tablets)
        'lg': '1024px',  // Large devices (desktops)
        'xl': '1280px',  // Extra large devices (large desktops)
        '2xl': '1536px', // 2XL devices (ultra wide screens)
        // You can add custom breakpoints like this:
        '3xl': '1920px', // Custom breakpoint (e.g., for larger screens)
      },
    },
  },
  plugins: [],
}
