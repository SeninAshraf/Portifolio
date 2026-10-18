import { useCallback, useEffect, useState } from 'react';

export type ThemePref = 'light' | 'dark';

/** Light is the default on every device; dark only when the visitor chooses it. */
const readPref = (): ThemePref => {
    try {
        return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    } catch {
        return 'light';
    }
};

export const useTheme = () => {
    const [pref, setPref] = useState<ThemePref>(readPref);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', pref === 'dark');
    }, [pref]);

    const choose = useCallback((next: ThemePref) => {
        try {
            if (next === 'light') localStorage.removeItem('theme');
            else localStorage.setItem('theme', next);
        } catch {
            // Storage unavailable (private mode) — theme still applies for this visit.
        }
        setPref(next);
    }, []);

    return { pref, isDark: pref === 'dark', choose };
};
