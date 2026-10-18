import { motion } from 'framer-motion';
import { Briefcase, FileText, FolderGit2, Mail, Presentation, Trophy, User, BarChart3 } from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { ThemeToggle } from '../ui/ThemeToggle';

const navLinks = [
    { id: 'about', label: 'About', Icon: User },
    { id: 'experience', label: 'Experience', Icon: Briefcase },
    { id: 'work', label: 'Projects', Icon: FolderGit2 },
    { id: 'achievements', label: 'Honors', Icon: Trophy },
    { id: 'programs', label: 'Workshops', Icon: Presentation },
    { id: 'skills', label: 'Track record', Icon: BarChart3, desktopOnly: true },
    { id: 'contact', label: 'Contact', Icon: Mail },
];

const sectionIds = ['top', ...navLinks.map((l) => l.id)];

const itemClass =
    'group relative flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-ink';

const Tooltip = ({ text }: { text: string }) => (
    <span className="pointer-events-none absolute left-1/2 top-full mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-paper opacity-0 transition-opacity duration-150 group-hover:opacity-100 md:block">
        {text}
    </span>
);

/** Floating dock: top-centre on desktop, thumb-reachable at the bottom on phones. */
export const Navbar = () => {
    const active = useActiveSection(sectionIds);

    return (
        <>
            <ThemeToggle />
            <nav
                aria-label="Sections"
                className="fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-4 md:bottom-auto md:top-5"
            >
                <motion.div
                    initial={{ y: -16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-0.5 rounded-full border border-line bg-card/80 p-1 shadow-dock backdrop-blur-md"
                >
                    <a href="#top" className={`${itemClass} mr-0.5`} aria-label="Home">
                        <img
                            src="/senin-hero.jpg"
                            alt=""
                            className={`h-8 w-8 rounded-full object-cover grayscale transition ${active === 'top' ? 'ring-2 ring-accent ring-offset-2 ring-offset-card' : ''}`}
                        />
                        <Tooltip text="Home" />
                    </a>
                    <span className="mx-0.5 h-5 w-px bg-line" aria-hidden />
                    {navLinks.map(({ id, label, Icon, desktopOnly }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            aria-label={label}
                            aria-current={active === id ? 'true' : undefined}
                            className={`${itemClass} ${desktopOnly ? 'hidden sm:flex' : ''} ${active === id ? 'text-ink' : ''}`}
                        >
                            {active === id && (
                                <motion.span
                                    layoutId="dock-active"
                                    className="absolute inset-0 rounded-full bg-sunk ring-1 ring-line"
                                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                                />
                            )}
                            <Icon size={16} className="relative" />
                            <Tooltip text={label} />
                        </a>
                    ))}
                    <span className="mx-0.5 h-5 w-px bg-line" aria-hidden />
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={itemClass} aria-label="Résumé (PDF)">
                        <FileText size={16} />
                        <Tooltip text="Résumé" />
                    </a>
                </motion.div>
            </nav>
        </>
    );
};
