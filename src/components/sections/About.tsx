import { motion } from 'framer-motion';
import { Brain, Eye, Cpu, Award, CheckCircle } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-24 px-4 sm:px-6 bg-surface relative overflow-hidden border-b border-metagray-800">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="meta-heading">
                    <span>BIOGRAPHY & BACKGROUND</span>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left: Detailed Narrative & Pillars */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white leading-tight">
                            Designing Robust <br />
                            <span className="text-primary">Intelligence & Systems</span> That Endure.
                        </h2>

                        <div className="space-y-4 text-metagray-300 text-base sm:text-lg leading-relaxed font-light">
                            <p>
                                I am <strong className="text-white font-semibold">Senin Ashraf</strong>, a forward-looking Artificial Intelligence & Data Science Engineer based in Kerala, India. My engineering ethos revolves around transforming abstract mathematical concepts and deep neural architectures into tangible, reliable software edifices.
                            </p>
                            <p>
                                Rather than viewing AI as merely black-box algorithms, I approach it from first principles: from crafting real-time computer vision pipelines (YOLO, OpenCV) to building multilingual conversational assistants capable of speaking regional languages like Malayalam and English seamlessly.
                            </p>
                            <p>
                                Beyond personal code, I actively foster community through student workshops (such as <em>Prompt to Code</em> and <em>ARCANE</em>) and technical hackathons where I have earned multiple top podium finishes.
                            </p>
                        </div>

                        {/* Core Competency Highlights Grid */}
                        <div className="grid sm:grid-cols-2 gap-4 pt-6">
                            <div className="p-4 bg-surface-card border border-metagray-800 hover:border-primary/50 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/30 text-primary flex items-center justify-center">
                                        <Eye size={18} />
                                    </div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Computer Vision</h4>
                                </div>
                                <p className="text-xs text-metagray-400 leading-relaxed">
                                    Facial biometrics, YOLO object detection, real-time video stream processing, LBPH algorithms.
                                </p>
                            </div>

                            <div className="p-4 bg-surface-card border border-metagray-800 hover:border-primary/50 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/30 text-primary flex items-center justify-center">
                                        <Brain size={18} />
                                    </div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Applied AI & NLP</h4>
                                </div>
                                <p className="text-xs text-metagray-400 leading-relaxed">
                                    Conversational AI agents, LLM prompting, custom domain faculty advisors, audio synthesis.
                                </p>
                            </div>

                            <div className="p-4 bg-surface-card border border-metagray-800 hover:border-primary/50 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/30 text-primary flex items-center justify-center">
                                        <Cpu size={18} />
                                    </div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Full-Stack Architecture</h4>
                                </div>
                                <p className="text-xs text-metagray-400 leading-relaxed">
                                    Modern React, TypeScript, Python FastAPI, responsive UI/UX systems, robust REST APIs.
                                </p>
                            </div>

                            <div className="p-4 bg-surface-card border border-metagray-800 hover:border-primary/50 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/30 text-primary flex items-center justify-center">
                                        <Award size={18} />
                                    </div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Academic Distinction</h4>
                                </div>
                                <p className="text-xs text-metagray-400 leading-relaxed">
                                    Secured 8.22 CGPA - First Class with Distinction at MES College of Engineering, Kuttippuram.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Architectural Image & Credentials Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative mx-auto max-w-sm">
                            {/* MetaDesign Offset Frame */}
                            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-primary pointer-events-none -z-10" />

                            <div className="bg-surface-card border border-metagray-800 p-5 shadow-2xl">
                                <div className="aspect-[3/4] overflow-hidden bg-black mb-5 relative group">
                                    <img
                                        src="/senin-about.jpg"
                                        alt="Senin Ashraf"
                                        className="w-full h-full object-cover object-[72%_center] grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                                        onError={(e) => {
                                            (e.currentTarget as HTMLImageElement).src = '/profile.jpg';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-3 left-3 text-xs font-mono text-metagray-300">
                                        SENIN ASHRAF // AI ENGINEER
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-xs py-2 border-b border-metagray-800">
                                        <span className="text-metagray-400 uppercase tracking-wider">Degree</span>
                                        <span className="text-white font-bold">B.Tech (AI & Data Science)</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs py-2 border-b border-metagray-800">
                                        <span className="text-metagray-400 uppercase tracking-wider">College</span>
                                        <span className="text-white font-bold">MESCE, Kuttippuram</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs py-2 border-b border-metagray-800">
                                        <span className="text-metagray-400 uppercase tracking-wider">Academic Grade</span>
                                        <span className="text-primary font-bold">8.22 CGPA (First Class with Distinction)</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs py-2">
                                        <span className="text-metagray-400 uppercase tracking-wider">Location</span>
                                        <span className="text-white font-bold">Ponnani, Kerala, India</span>
                                    </div>
                                </div>

                                <div className="mt-5 pt-4 border-t border-metagray-800">
                                    <a
                                        href="#contact"
                                        className="btn btn-outline w-full text-xs py-2.5 flex items-center justify-center gap-2"
                                    >
                                        <CheckCircle size={14} className="text-primary" />
                                        <span>Initiate Collaboration</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
