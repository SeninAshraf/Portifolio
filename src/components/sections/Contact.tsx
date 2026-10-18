import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Mail, 
    Github, 
    Linkedin, 
    Instagram, 
    MapPin, 
    Copy, 
    Check, 
    Send, 
    ArrowUpRight,
    MessageSquare
} from 'lucide-react';

export const Contact = () => {
    const [copied, setCopied] = useState(false);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleCopy = () => {
        navigator.clipboard.writeText('seninashraf765@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Collaboration Inquiry from ${formState.name}`);
        const body = encodeURIComponent(`From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`);
        window.location.href = `mailto:seninashraf765@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 bg-surface relative overflow-hidden">
            {/* MetaDesign Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                {/* MetaDesign Section Header */}
                <div className="meta-heading">
                    <span>GET IN TOUCH // INITIATE DIALOGUE</span>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left: Direct Information & Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white leading-tight mb-4">
                                Let's Build <br />
                                <span className="text-primary">Something Enduring</span> Together.
                            </h2>
                            <p className="text-metagray-300 text-base leading-relaxed font-light">
                                Whether you're seeking an AI & Data Science engineer for your team, planning a hackathon collaboration, or interested in computer vision research — my inbox is always open.
                            </p>
                        </div>

                        {/* Direct Email Card with One-Click Copy */}
                        <div className="p-6 bg-surface-card border border-metagray-800 space-y-4">
                            <div className="text-xs font-mono uppercase tracking-wider text-metagray-400">
                                Primary Communications
                            </div>

                            <div className="flex items-center justify-between p-3 bg-black/60 border border-metagray-800">
                                <div className="flex items-center gap-2.5 truncate">
                                    <Mail size={16} className="text-primary shrink-0" />
                                    <a
                                        href="mailto:seninashraf765@gmail.com"
                                        className="text-white hover:text-primary font-mono text-sm sm:text-base font-semibold transition-colors truncate"
                                    >
                                        seninashraf765@gmail.com
                                    </a>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleCopy}
                                    className="ml-3 p-2 bg-surface hover:bg-metagray-800 text-metagray-300 hover:text-white transition-colors rounded-sm flex items-center gap-1.5 text-xs font-mono"
                                    title="Copy email to clipboard"
                                >
                                    {copied ? (
                                        <>
                                            <Check size={14} className="text-emerald-400" />
                                            <span className="text-emerald-400">Copied</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={14} />
                                            <span>Copy</span>
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className="flex items-center gap-2 text-xs font-mono text-metagray-400 pt-1">
                                <MapPin size={13} className="text-primary" />
                                <span>Ponnani, Malappuram, Kerala, India (UTC+05:30)</span>
                            </div>
                        </div>

                        {/* MetaDesign Signature Circular Social Icons */}
                        <div>
                            <div className="text-xs font-mono uppercase tracking-wider text-metagray-400 mb-3">
                                Connect on Verified Channels
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                <SocialButton
                                    href="https://github.com/SeninAshraf"
                                    icon={<Github size={18} />}
                                    label="GitHub"
                                    handle="@SeninAshraf"
                                />
                                <SocialButton
                                    href="https://www.linkedin.com/in/senin-ashraf-96a29b252"
                                    icon={<Linkedin size={18} />}
                                    label="LinkedIn"
                                    handle="Senin Ashraf"
                                />
                                <SocialButton
                                    href="https://www.instagram.com/_senin___"
                                    icon={<Instagram size={18} />}
                                    label="Instagram"
                                    handle="@_senin___"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Quick Direct Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 bg-surface-card border border-metagray-800 p-6 sm:p-8 relative"
                    >
                        <div className="flex items-center justify-between pb-4 mb-6 border-b border-metagray-800">
                            <div className="flex items-center gap-2">
                                <MessageSquare size={18} className="text-primary" />
                                <h3 className="text-base font-bold uppercase tracking-wider text-white">
                                    Send a Direct Message
                                </h3>
                            </div>
                            <span className="text-xs font-mono text-metagray-500">Quick Response Guaranteed</span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-metagray-400 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        placeholder="e.g. Alex Johnson"
                                        className="w-full bg-black/60 border border-metagray-800 focus:border-primary text-white text-sm px-4 py-3 outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-metagray-400 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        placeholder="e.g. alex@example.com"
                                        className="w-full bg-black/60 border border-metagray-800 focus:border-primary text-white text-sm px-4 py-3 outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-metagray-400 mb-2">
                                    Project Details / Inquiry
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    placeholder="Describe your project, timeline, or idea..."
                                    className="w-full bg-black/60 border border-metagray-800 focus:border-primary text-white text-sm px-4 py-3 outline-none transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-full text-xs py-3.5 flex items-center justify-center gap-2 tracking-widest"
                            >
                                <Send size={14} />
                                <span>SEND INQUIRY VIA EMAIL</span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SocialButton = ({
    href,
    icon,
    label,
    handle
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
    handle: string;
}) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-3 bg-surface-card border border-metagray-800 hover:border-primary transition-all duration-300 group"
        aria-label={label}
    >
        <div className="w-8 h-8 rounded-full border border-metagray-700 flex items-center justify-center text-metagray-300 group-hover:text-primary group-hover:border-primary transition-colors">
            {icon}
        </div>
        <div>
            <div className="text-xs font-bold text-white group-hover:text-primary transition-colors flex items-center gap-1">
                {label}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-[11px] font-mono text-metagray-500">
                {handle}
            </div>
        </div>
    </a>
);
