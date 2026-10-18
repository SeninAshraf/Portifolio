import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Sparkles, Award, GitBranch } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative pt-32 lg:pt-36 pb-20 px-4 sm:px-6 overflow-hidden bg-meta-grid bg-radial-gradient">
            <div className="max-w-7xl mx-auto">

                {/* Main Hero Grid */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="lg:col-span-7 flex flex-col justify-center"
                    >
                        {/* Section Tag */}
                        <div className="meta-heading">
                            <span>PORTFOLIO // SENIN ASHRAF</span>
                        </div>

                        {/* High-Impact Main Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-display uppercase tracking-tight leading-[1.08] mb-6 text-white">
                            Building <br />
                            <span className="text-primary inline-flex items-center gap-2">
                                Intelligence
                                <Sparkles size={32} className="hidden sm:inline-block animate-pulse text-primary" />
                            </span> <br />
                            From Real Data.
                        </h1>

                        {/* Description */}
                        <p className="text-metagray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-light">
                            I am an Artificial Intelligence & Data Science Engineer specialized in <span className="text-white font-medium">Computer Vision</span>, <span className="text-white font-medium">Deep Learning</span>, and <span className="text-white font-medium">Full-Stack Automation</span>. Transforming raw algorithms into robust, production-grade applications.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            <a
                                href="#work"
                                className="btn btn-primary group"
                            >
                                <span>Explore Projects</span>
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="#github-activity"
                                className="btn btn-outline group flex items-center gap-2"
                            >
                                <Github size={16} className="text-primary" />
                                <span>GitHub Commits</span>
                            </a>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline flex items-center gap-2 hover:border-white"
                            >
                                <FileText size={16} />
                                <span>Download CV</span>
                            </a>
                        </div>

                        {/* Credential Metrics Bar */}
                        <div className="pt-6 border-t border-metagray-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div>
                                <div className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-1">
                                    33<span className="text-primary">+</span>
                                </div>
                                <div className="text-xs uppercase font-semibold tracking-wider text-metagray-400">
                                    Public Repos
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-1">
                                    8.43
                                </div>
                                <div className="text-xs uppercase font-semibold tracking-wider text-metagray-400">
                                    SGPA Rank Holder
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-1">
                                    2<span className="text-primary">x</span>
                                </div>
                                <div className="text-xs uppercase font-semibold tracking-wider text-metagray-400">
                                    Hackathon Wins
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-1">
                                    2<span className="text-primary">+</span>
                                </div>
                                <div className="text-xs uppercase font-semibold tracking-wider text-metagray-400">
                                    Tech Workshops
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual / Profile Card Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="lg:col-span-5 relative"
                    >
                        {/* MetaDesign Framed Card Container */}
                        <div className="relative mx-auto max-w-md">
                            {/* Decorative Red Accent Frame Behind */}
                            <div className="absolute -top-3 -right-3 w-full h-full border-2 border-primary rounded-none pointer-events-none -z-10" />
                            <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-primary pointer-events-none -z-10" />

                            {/* Main Card */}
                            <div className="bg-surface border border-metagray-800 p-4 sm:p-5 shadow-2xl relative">
                                {/* Card Header Strip */}
                                <div className="flex items-center justify-between pb-3 mb-4 border-b border-metagray-800 text-xs">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                        <span className="font-bold uppercase tracking-wider text-white">ENGINEER PROFILE</span>
                                    </div>
                                    <span className="font-mono text-metagray-400 text-[11px]">ID: SA-AI2026</span>
                                </div>

                                {/* Profile Image with MetaDesign Monochrome Tone */}
                                <div className="relative aspect-[4/5] overflow-hidden bg-black mb-4 group">
                                    <img
                                        src="/profile.jpg"
                                        alt="Senin Ashraf"
                                        className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                                        onError={(e) => {
                                            // Fallback if profile.jpg fails
                                            (e.currentTarget as HTMLImageElement).src = '/senin.jpg';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                                    {/* Overlay Badge */}
                                    <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/85 backdrop-blur-md border border-metagray-800 flex items-center justify-between">
                                        <div>
                                            <div className="text-white font-bold text-sm tracking-wide">SENIN ASHRAF</div>
                                            <div className="text-xs text-primary font-medium">B.Tech AI & Data Science</div>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            Active
                                        </div>
                                    </div>
                                </div>

                                {/* Core Tags */}
                                <div className="space-y-2 text-xs">
                                    <div className="flex items-center justify-between p-2 bg-black/40 border border-metagray-800/80">
                                        <span className="text-metagray-400 flex items-center gap-1.5">
                                            <Award size={13} className="text-primary" /> Institution
                                        </span>
                                        <span className="text-white font-medium">MES College of Engg.</span>
                                    </div>
                                    <div className="flex items-center justify-between p-2 bg-black/40 border border-metagray-800/80">
                                        <span className="text-metagray-400 flex items-center gap-1.5">
                                            <GitBranch size={13} className="text-primary" /> Primary Focus
                                        </span>
                                        <span className="text-white font-medium">Computer Vision & ML</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
