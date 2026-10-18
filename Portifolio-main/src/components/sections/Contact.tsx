import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy, Github, Instagram, Linkedin, MapPin, Send } from 'lucide-react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { Barcode } from '../ui/Barcode';

const EMAIL = 'seninashraf765@gmail.com';

const socials = [
    { href: 'https://github.com/SeninAshraf', icon: Github, label: 'GitHub', handle: '@SeninAshraf' },
    { href: 'https://www.linkedin.com/in/senin-ashraf-96a29b252', icon: Linkedin, label: 'LinkedIn', handle: 'Senin Ashraf' },
    { href: 'https://www.instagram.com/_senin___', icon: Instagram, label: 'Instagram', handle: '@_senin___' },
];

const cardMotion = (rotate: number, delay: number) => ({
    initial: { opacity: 0, y: 30, rotate: 0 },
    whileInView: { opacity: 1, y: 0, rotate },
    whileHover: { y: -8, rotate: 0, scale: 1.02 },
    viewport: { once: true, margin: '0px 0px -10% 0px' },
    transition: { type: 'spring' as const, stiffness: 200, damping: 18, delay },
});

export const Contact = () => {
    const [copied, setCopied] = useState(false);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Collaboration Inquiry from ${formState.name}`);
        const body = encodeURIComponent(`From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`);
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    };

    const field =
        'w-full rounded-md border border-line bg-paper px-3.5 py-2.5 text-[15px] text-ink placeholder:text-faint transition-colors focus:border-ink/50 focus:outline-none';

    return (
        <Section
            id="contact"
            index="08"
            label="Contact"
            title="Building something?"
            emphasis="Let's talk"
            intro="Hiring an AI & data science engineer, planning a hackathon collaboration, or exploring computer vision research — my inbox is always open."
        >
            {/* Desk of cards */}
            <div className="mx-auto mb-20 flex max-w-wide flex-wrap items-center justify-center gap-8">
                <motion.a href={`mailto:${EMAIL}`} {...cardMotion(-6, 0)} className="block w-60 overflow-hidden rounded-xl bg-accent text-white shadow-lift" aria-label={`Email ${EMAIL}`}>
                    <div className="px-5 pb-2 pt-4 text-center">
                        <div className="font-serif text-4xl leading-none">Hello</div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">my name is</div>
                    </div>
                    <div className="mx-3 mb-3 rounded-md bg-white py-4 text-center font-serif text-5xl italic text-ink" style={{ color: '#0c0c0c' }}>
                        Senin
                    </div>
                    <div className="pb-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] opacity-90">Tap to say hi</div>
                </motion.a>

                <motion.div {...cardMotion(3, 0.08)} className="w-64 rounded-[4px] border border-line bg-card p-5 text-ink shadow-lift">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Direct line</p>
                    <a href={`mailto:${EMAIL}`} className="mt-2 block break-all text-[15px] font-medium hover:text-accent">
                        {EMAIL}
                    </a>
                    <button
                        type="button"
                        onClick={handleCopy}
                        className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted transition-colors hover:border-ink/40 hover:text-ink"
                        aria-live="polite"
                    >
                        {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                        {copied ? 'Copied' : 'Copy address'}
                    </button>
                    <p className="mt-4 flex items-center gap-1.5 border-t border-dashed border-line pt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
                        <MapPin size={11} /> Ponnani, Kerala · UTC+05:30
                    </p>
                </motion.div>

                <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...cardMotion(-2, 0.16)}
                    className="block w-44 rounded-[4px] bg-[#f3efe6] p-4 text-[#1a1a1a] shadow-lift"
                >
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-60">Admit one</p>
                    <p className="mt-1 font-serif text-3xl leading-none">Résumé</p>
                    <p className="mt-1 text-[12px] opacity-70">Senin Ashraf · PDF</p>
                    <Barcode seed="resume" className="mt-4 !text-[#1a1a1a]" />
                </motion.a>
            </div>

            <div className="mx-auto grid max-w-wide gap-12 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
                <Reveal>
                    <form onSubmit={handleSubmit} className="paper space-y-4 p-6 sm:p-8">
                        <div>
                            <h3 className="font-serif text-3xl">Send a note</h3>
                            <p className="text-[14px] text-muted">Opens in your email app, already filled in.</p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="block">
                                <span className="label mb-1.5 block">Your name</span>
                                <input
                                    type="text"
                                    required
                                    autoComplete="name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    placeholder="Alex Johnson"
                                    className={field}
                                />
                            </label>
                            <label className="block">
                                <span className="label mb-1.5 block">Email</span>
                                <input
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    placeholder="alex@example.com"
                                    className={field}
                                />
                            </label>
                        </div>
                        <label className="block">
                            <span className="label mb-1.5 block">Project or idea</span>
                            <textarea
                                rows={5}
                                required
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                placeholder="Tell me about your project, timeline or idea…"
                                className={`${field} resize-none`}
                            />
                        </label>
                        <button type="submit" className="btn-ink w-full sm:w-auto">
                            <Send size={14} /> Send via email
                        </button>
                    </form>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="label mb-4">Elsewhere</p>
                    <ul className="divide-y divide-line border-y border-line">
                        {socials.map(({ href, icon: Icon, label, handle }) => (
                            <li key={label}>
                                <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-4">
                                    <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                                        <Icon size={16} />
                                    </span>
                                    <span className="flex-1">
                                        <span className="block text-[15px] font-semibold text-ink">{label}</span>
                                        <span className="block font-mono text-[11px] text-muted">{handle}</span>
                                    </span>
                                    <ArrowUpRight size={16} className="text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </Section>
    );
};
