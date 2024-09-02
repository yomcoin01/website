/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        whysbrgt: "url('assets/sbgright.png')",
        whysblft: "url('assets/sbgleft.png')",
        abtechbg: "url('assets/abtechbg.png')"
      },
      backgroundSize: {
        xlarge: "500px"
      },
      colors: {
        primary: "#630460",
        second: "#AB79FF",
        txtCol: "#909DAD",
        txtHead: "#F9FAFB"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}

