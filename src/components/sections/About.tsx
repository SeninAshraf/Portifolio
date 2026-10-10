import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-surface text-gray-300">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">About Me</h2>
                    <div className="space-y-4 text-lg leading-relaxed">
                        <p>
                            Hello! I'm <span className="text-white font-medium">Senin</span>, a passionate Artificial Intelligence and Data Science student with expertise in computer vision, machine learning, and full-stack development. I specialize in creating intelligent systems that solve complex problems.
                        </p>
                        <p>
                            My journey in technology began with a fascination for how machines can learn and adapt. Today, I combine this passion with practical skills to develop solutions that have real-world impact, from automated attendance systems to advanced security applications.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring the latest research papers, contributing to open-source projects, or mentoring fellow students in AI and web development.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative group max-w-sm mx-auto"
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/profile.jpg"
                            alt="Senin Ashraf"
                            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-2xl -z-10 group-hover:-bottom-2 group-hover:-right-2 transition-all duration-300" />
                </motion.div>
            </div>
        </section>
    );
};
