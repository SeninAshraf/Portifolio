import { ArrowUp, Github, Linkedin, Instagram, Mail, Code2 } from 'lucide-react';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black text-metagray-300 border-t border-metagray-800 text-xs font-sans">
            {/* Main Footer Columns */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-4">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white"
                        >
                            <div className="w-7 h-7 bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                                <Code2 size={16} />
                            </div>
                            <span>
                                SENIN<span className="text-primary">.</span>ASHRAF
                            </span>
                        </a>

                        <p className="text-metagray-400 text-sm max-w-sm leading-relaxed font-light">
                            Artificial Intelligence & Data Science Engineer specialized in Computer Vision, Machine Learning algorithms, and robust full-stack software edifices.
                        </p>

                        <div className="pt-2 text-xs font-mono text-metagray-500">
                            MES College of Engineering • B.Tech AI & DS • Rank Holder (8.43 SGPA)
                        </div>
                    </div>

                    {/* Navigation Links Column */}
                    <div className="lg:col-span-3 space-y-3">
                        <div className="text-xs font-bold uppercase tracking-widest text-white font-mono">
                            Site Navigation
                        </div>
                        <ul className="space-y-2 text-metagray-400">
                            <li>
                                <a href="#about" className="hover:text-primary transition-colors">About & Philosophy</a>
                            </li>
                            <li>
                                <a href="#work" className="hover:text-primary transition-colors">Selected Projects</a>
                            </li>
                            <li>
                                <a href="#github-activity" className="hover:text-primary transition-colors flex items-center gap-1.5">
                                    <span>GitHub Activity</span>
                                    <span className="text-[10px] bg-primary text-white font-mono px-1 py-0.2 rounded-[1px]">LIVE</span>
                                </a>
                            </li>
                            <li>
                                <a href="#achievements" className="hover:text-primary transition-colors">Hackathons & Awards</a>
                            </li>
                            <li>
                                <a href="#programs" className="hover:text-primary transition-colors">Workshops & Mentorship</a>
                            </li>
                            <li>
                                <a href="#skills" className="hover:text-primary transition-colors">Skills & Timeline</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-primary transition-colors">Contact Information</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Social Column */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="text-xs font-bold uppercase tracking-widest text-white font-mono">
                            Direct Inquiries
                        </div>

                        <div className="space-y-2 text-metagray-400">
                            <p className="flex items-center gap-2">
                                <Mail size={14} className="text-primary" />
                                <a href="mailto:seninashraf765@gmail.com" className="text-white hover:text-primary transition-colors font-mono">
                                    seninashraf765@gmail.com
                                </a>
                            </p>
                            <p className="text-xs text-metagray-500 font-mono">
                                Ponnani, Malappuram, Kerala, India
                            </p>
                        </div>

                        {/* MetaDesign Circular Social Links */}
                        <div className="pt-2">
                            <div className="text-[11px] font-mono uppercase text-metagray-500 mb-2">
                                Official Profiles
                            </div>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://github.com/SeninAshraf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full border border-metagray-700 hover:border-primary text-metagray-300 hover:text-primary flex items-center justify-center transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github size={16} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/senin-ashraf-96a29b252"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full border border-metagray-700 hover:border-primary text-metagray-300 hover:text-primary flex items-center justify-center transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={16} />
                                </a>
                                <a
                                    href="https://www.instagram.com/_senin___"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full border border-metagray-700 hover:border-primary text-metagray-300 hover:text-primary flex items-center justify-center transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Strip */}
            <div className="border-t border-metagray-800/80 bg-[#070707] py-6 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-metagray-500 text-xs font-mono">
                    <div>
                        © {new Date().getFullYear()} <span className="text-white font-bold">SENIN ASHRAF</span>. ALL RIGHTS RESERVED.
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            Designed with <span className="text-primary">MetaDesign</span> Architectural Aesthetic
                        </span>

                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="flex items-center gap-1.5 text-metagray-400 hover:text-white transition-colors uppercase tracking-wider text-[11px]"
                            aria-label="Scroll to top"
                        >
                            <span>Back to Top</span>
                            <ArrowUp size={12} className="text-primary" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
