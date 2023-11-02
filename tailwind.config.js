/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./public/**/*.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontSize: {
                '2xs': ['0.65rem', '0.8rem'],
            },
        },
    },
    variants: {
        extend: {
            scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
            backgroundColor: ['active'],
            backgroundOpacity: ['active'],
        },
    },
    plugins: [],
}