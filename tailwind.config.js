/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.jsx"],
    darkMode:'class',
    theme: {
        extend: {
            colors:{
                primaryColor:"#1D1D1D",
            }
        },
    },
    plugins: [],
};
