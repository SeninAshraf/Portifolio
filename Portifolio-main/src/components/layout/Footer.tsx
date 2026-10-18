import { ArrowUp } from 'lucide-react';

const links = [
    { label: 'GitHub', href: 'https://github.com/SeninAshraf' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/senin-ashraf-96a29b252' },
    { label: 'Instagram', href: 'https://www.instagram.com/_senin___' },
    { label: 'Email', href: 'mailto:seninashraf765@gmail.com' },
];

export const Footer = () => (
    <footer className="border-t border-line px-4 pb-28 pt-14 sm:px-6 md:pb-14">
        <div className="mx-auto max-w-wide">
            <p className="max-w-md font-serif text-3xl leading-tight text-ink">
                Senin Ashraf — <em className="italic">building intelligence from real data.</em>
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                MES College of Engineering · B.Tech AI &amp; DS · 8.22 CGPA, First Class with Distinction
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-dashed border-line pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                <span>© {new Date().getFullYear()} Senin Ashraf · Ponnani, Kerala</span>
                <nav className="flex flex-wrap gap-5" aria-label="Profiles">
                    {links.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            target={l.href.startsWith('http') ? '_blank' : undefined}
                            rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="hover:text-ink"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
                <a href="#top" className="inline-flex items-center gap-1 hover:text-ink">
                    Back to top <ArrowUp size={12} className="text-accent" />
                </a>
            </div>
        </div>
    </footer>
);
