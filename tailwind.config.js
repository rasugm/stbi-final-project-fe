/** @type {import('tailwindcss').Config} */
import theme from './theme';
module.exports = {
    // Dark mode dideklarasikan untuk menghandle komponen Datepicker yang merujuk
    // ke color system compunter yang sedang aktif
    darkMode: 'class',
    content: [
        './src/components/***/**/*.{js,jsx,ts,tsx}',
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
        './index.html',
    ],
    theme: {
        ...theme
    },
    plugins: [],
};
