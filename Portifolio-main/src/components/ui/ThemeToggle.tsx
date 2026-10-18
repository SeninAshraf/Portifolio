import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = () => {
    const { isDark, choose } = useTheme();
    const label = isDark ? 'Night' : 'Day';
    const nextLabel = isDark ? 'Day' : 'Night';
    const Icon = isDark ? Moon : Sun;

    return (
        <button
            type="button"
            onClick={() => choose(isDark ? 'light' : 'dark')}
            className="group fixed right-4 top-4 z-50 flex h-10 items-center gap-2 rounded-full border border-line bg-card/80 px-3 text-muted shadow-dock backdrop-blur-md transition-colors hover:text-ink sm:right-6 sm:top-5"
            aria-label={`Theme: ${label}. Switch to ${nextLabel}`}
            title={`Theme: ${label} — click for ${nextLabel}`}
        >
            <Icon size={15} />
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] sm:inline">{label}</span>
        </button>
    );
};
