import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme, type ThemePref } from '../../hooks/useTheme';

const order: ThemePref[] = ['auto', 'light', 'dark'];
const meta: Record<ThemePref, { label: string; Icon: typeof Sun }> = {
    auto: { label: 'Auto', Icon: Monitor },
    light: { label: 'Day', Icon: Sun },
    dark: { label: 'Night', Icon: Moon },
};

export const ThemeToggle = () => {
    const { pref, choose } = useTheme();
    const next = order[(order.indexOf(pref) + 1) % order.length];
    const { label, Icon } = meta[pref];

    return (
        <button
            type="button"
            onClick={() => choose(next)}
            className="group fixed right-4 top-4 z-50 flex h-10 items-center gap-2 rounded-full border border-line bg-card/80 px-3 text-muted shadow-dock backdrop-blur-md transition-colors hover:text-ink sm:right-6 sm:top-5"
            aria-label={`Theme: ${label}. Switch to ${meta[next].label}`}
            title={`Theme: ${label} — click for ${meta[next].label}`}
        >
            <Icon size={15} />
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] sm:inline">{label}</span>
        </button>
    );
};
