import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-secondary text-lg mb-4 font-medium tracking-wide">AI & DATA SCIENTIST</h2>
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
                        Building <br />
                        <span className="text-primary">Intelligence</span> <br />
                        from Data.
                    </h1>
                    <p className="text-gray-400 text-lg max-w-md mb-8 leading-relaxed">
                        I craft intelligent systems and data-driven solutions that solve complex real-world problems.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary group rounded-full"
                        >
                            View My Resume
                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#work" className="btn bg-white/5 hover:bg-white/10 border border-white/10 rounded-full">
                            View My Work
                        </a>
                    </div>
                </motion.div>

                {/* Visual / Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Placeholder for abstract 3D element or Profile Image */}
                    <div className="relative w-full aspect-square bg-gradient-to-tr from-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-8 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-6xl font-bold font-display text-white/5">AI</div>
                            <div className="text-6xl font-bold font-display text-white/5">DATA</div>
                            <div className="text-6xl font-bold font-display text-white/5">CODE</div>
                        </div>

                        {/* Floating Cards Mockup */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {/* Once we have a 3D spline or image, place it here */}
                            <div className="w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
