import { useCallback, useEffect, useState } from 'react';

export type ThemePref = 'auto' | 'light' | 'dark';

const readPref = (): ThemePref => {
    try {
        const v = localStorage.getItem('theme');
        return v === 'light' || v === 'dark' ? v : 'auto';
    } catch {
        return 'auto';
    }
};

const systemDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

export const useTheme = () => {
    const [pref, setPref] = useState<ThemePref>(readPref);
    const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

    useEffect(() => {
        const apply = () => {
            const dark = pref === 'dark' || (pref === 'auto' && systemDark());
            document.documentElement.classList.toggle('dark', dark);
            setIsDark(dark);
        };
        apply();
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        mq.addEventListener('change', apply);
        return () => mq.removeEventListener('change', apply);
    }, [pref]);

    const choose = useCallback((next: ThemePref) => {
        try {
            if (next === 'auto') localStorage.removeItem('theme');
            else localStorage.setItem('theme', next);
        } catch {
            // Storage unavailable (private mode) — theme still applies for this visit.
        }
        setPref(next);
    }, []);

    return { pref, isDark, choose };
};
