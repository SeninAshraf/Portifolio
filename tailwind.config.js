/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                surface: '#121212',
                primary: '#ff4d00',
                secondary: '#a0a0a0',
                white: '#ffffff',
                gray: {
                    100: '#f3f4f6',
                    800: '#1f2937',
                    900: '#111827',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            borderRadius: {
                '3xl': '1.5rem',
            }
        },
    },
    plugins: [],
}
