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
                'surface-card': '#161616',
                'surface-hover': '#1e1e1e',
                'surface-border': '#27272a',
                primary: {
                    DEFAULT: '#e70e0e',
                    hover: '#cc0c0c',
                    dark: '#9a0909',
                    light: '#ff3b3b',
                    glow: 'rgba(231, 14, 14, 0.25)',
                },
                secondary: '#9c9d9f',
                metagray: {
                    50: '#fafafa',
                    100: '#ebebeb',
                    200: '#d4d4d8',
                    300: '#b1aeae',
                    400: '#9c9d9f',
                    500: '#6e6e6e',
                    600: '#5f5f5f',
                    700: '#333333',
                    800: '#1d1d1d',
                    900: '#131313',
                }
            },
            fontFamily: {
                sans: ['Mulish', 'Inter', 'sans-serif'],
                display: ['Space Grotesk', 'Mulish', 'sans-serif'],
                quote: ['Lato', 'serif'],
            },
            boxShadow: {
                'meta': '0 0 25px -5px rgba(231, 14, 14, 0.2)',
                'meta-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
                'meta-hover': '0 15px 35px -5px rgba(231, 14, 14, 0.15)',
            },
            borderRadius: {
                'meta': '4px',
                '3xl': '1.5rem',
            }
        },
    },
    plugins: [],
}
