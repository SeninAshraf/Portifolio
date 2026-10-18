/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                paper: token('paper'),
                ink: token('ink'),
                body: token('body'),
                muted: token('muted'),
                faint: token('faint'),
                line: token('line'),
                card: token('card'),
                sunk: token('sunk'),
                accent: token('accent'),
                kraft: token('kraft'),
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
            },
            boxShadow: {
                paper: '0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px -8px rgb(0 0 0 / 0.12)',
                lift: '0 2px 4px rgb(0 0 0 / 0.05), 0 24px 48px -16px rgb(0 0 0 / 0.22)',
                dock: '0 1px 1px rgb(0 0 0 / 0.04), 0 8px 28px -6px rgb(0 0 0 / 0.18)',
            },
            maxWidth: {
                prose: '36rem',
                wide: '60rem',
            },
        },
    },
    plugins: [],
}
