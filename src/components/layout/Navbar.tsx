import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail, Code2 } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Work', href: '#work' },
        { label: 'GitHub Activity', href: '#github-activity' },
        { label: 'Achievements', href: '#achievements' },
        { label: 'Workshops', href: '#programs' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            {/* MetaDesign Top Status Bar (Sub-header) */}
            <div className="hidden lg:block bg-[#ebebeb] text-[#333333] border-b border-[#d4d4d8] text-xs font-semibold tracking-wider uppercase py-2 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <span className="text-[#131313] font-bold">SENIN ASHRAF</span>
                        <span className="text-[#9c9d9f]">|</span>
                        <span className="text-[#5f5f5f]">AI & DATA SCIENCE ENGINEER</span>
                        <span className="text-[#9c9d9f]">|</span>
                        <span className="text-[#5f5f5f]">PONNANI, KERALA</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-xs text-[#222222] lowercase tracking-normal font-medium">available for opportunities</span>
                        </div>
                        <span className="text-[#9c9d9f]">|</span>
                        <a
                            href="mailto:seninashraf765@gmail.com"
                            className="text-[#333333] hover:text-primary transition-colors flex items-center gap-1 normal-case tracking-normal font-medium"
                        >
                            <Mail size={12} className="text-primary" />
                            seninashraf765@gmail.com
                        </a>
                        <span className="text-[#9c9d9f]">|</span>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com/SeninAshraf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#5f5f5f] hover:text-primary transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={13} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/senin-ashraf-96a29b252"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#5f5f5f] hover:text-primary transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={13} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className={`w-full transition-all duration-300 ${
                scrolled
                    ? 'bg-black/95 backdrop-blur-md border-b border-metagray-800 shadow-2xl py-3'
                    : 'bg-black border-b border-metagray-800/80 py-4'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                    {/* Brand / Logo */}
                    <a
                        href="#"
                        className="group flex items-center gap-2 font-display text-xl sm:text-2xl font-bold tracking-tight text-white"
                    >
                        <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <Code2 size={18} />
                        </div>
                        <span>
                            SENIN<span className="text-primary">.</span>ASHRAF
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-xs uppercase font-bold tracking-wider text-metagray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-sm transition-all duration-200 relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                            </a>
                        ))}
                    </div>

                    {/* Action Button */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="#contact"
                            className="btn btn-primary text-xs py-2.5 px-5 flex items-center gap-2"
                        >
                            <span>GET IN TOUCH</span>
                            <ArrowUpRight size={14} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="lg:hidden p-2 text-metagray-300 hover:text-white hover:bg-metagray-800 rounded-sm focus:outline-none transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={26} className="text-primary" /> : <Menu size={26} />}
                    </button>
                </div>

                {/* Mobile Drawer */}
                {isOpen && (
                    <div className="lg:hidden bg-[#0c0c0c] border-b border-metagray-800 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
                        <div className="flex flex-col space-y-3">
                            <div className="pb-3 border-b border-metagray-800/80 flex items-center justify-between text-xs text-metagray-400">
                                <span className="uppercase tracking-wider">Navigation</span>
                                <span className="flex items-center gap-1.5 text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Available
                                </span>
                            </div>

                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-semibold uppercase tracking-wider text-metagray-200 hover:text-primary hover:bg-metagray-900 py-2.5 px-3 rounded-sm transition-colors flex items-center justify-between"
                                >
                                    <span>{link.label}</span>
                                    <ArrowUpRight size={14} className="text-metagray-600" />
                                </a>
                            ))}

                            <div className="pt-4 border-t border-metagray-800 flex flex-col gap-3">
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="btn btn-primary w-full text-xs py-3 text-center flex items-center justify-center gap-2"
                                >
                                    <span>GET IN TOUCH</span>
                                    <ArrowUpRight size={14} />
                                </a>

                                <div className="flex items-center justify-around pt-2 text-metagray-400">
                                    <a
                                        href="https://github.com/SeninAshraf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 hover:text-white transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <Github size={18} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/senin-ashraf-96a29b252"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 hover:text-white transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                    <a
                                        href="mailto:seninashraf765@gmail.com"
                                        className="p-2 hover:text-white transition-colors"
                                        aria-label="Email"
                                    >
                                        <Mail size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};
