/** @type {import('tailwindcss').Config} */

const {fontFamily} = require('tailwindcss/defaultTheme')
const {color} = require("framer-motion");

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                mont: ['var(--font-mont)', ...fontFamily.sans],
            },
            colors: {
                dark: "#1b1b1b",
                light: "#f5f5f5",
                primary: "#B63E96", // 240,86,199
                primaryDark: "#58E6D9", // 80,230,217
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            },
            backgroundImage: {
                circularLight: 'repeating-radial-gradient(circle, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.3) 3px, #f5f5f5 4px, #f5f5f5 108px)',
                circularDark: 'repeating-radial-gradient(circle, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.3) 3px, #1b1b1b 4px, #1b1b1b 108px)',

            },
        },
        screens: {
            '2xl': {max: '1535px'},
            // => @media (max-width: 1535px) { ... }

            'xl': {max: '1279px'},
            // => @media (max-width: 1279px) { ... }

            'lg': {max: '1023px'},
            // => @media (max-width: 1023px) { ... }

            'xmd': {max: '910px'},

            'md': {max: '767px'},
            // => @media (max-width: 767px) { ... }

            'sm': {max: '639px'},
            // => @media (max-width: 639px) { ... }

            'xs': {max: '479px'},
            // => @media (max-width: 479px) { ... }
        },
    },
    plugins: [],
}

