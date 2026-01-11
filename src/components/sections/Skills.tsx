import { motion } from 'framer-motion';
import { Award, BookOpen, Code, Terminal, Brain, Cloud } from 'lucide-react';

const skills = [
    { name: 'Python (OpenCV, TensorFlow)', icon: <Terminal /> },
    { name: 'Machine Learning', icon: <Brain /> },
    { name: 'Computer Vision', icon: <Code /> },
    { name: 'React & Node.js', icon: <Cloud /> },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 bg-surface">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Skills Column */}
                    <div>
                        <h2 className="text-3xl font-display font-bold mb-12">Expertise</h2>
                        <div className="grid gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/50 transition-colors"
                                >
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        {skill.icon}
                                    </div>
                                    <span className="font-medium text-lg">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Experience/Education/Achievements Column */}
                    <div>
                        <h2 className="text-3xl font-display font-bold mb-12">Journey & Achievements</h2>

                        <div className="space-y-12 border-l border-white/10 pl-8 ml-4">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -left-[41px] top-0 p-2 bg-background border border-white/10 rounded-full text-primary">
                                    <Award size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-white">University Rank Holder</h3>
                                <p className="text-primary text-sm mb-2">Nov 2024</p>
                                <p className="text-gray-400">Secured an 8.43 SGPA in KTU S5 examination.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="relative"
                            >
                                <div className="absolute -left-[41px] top-0 p-2 bg-background border border-white/10 rounded-full text-gray-400">
                                    <BookOpen size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-white">B.Tech in AI & Data Science</h3>
                                <p className="text-primary text-sm mb-2">2022 - Present</p>
                                <p className="text-gray-400">MES College of Engineering, Kuttippuram.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative"
                            >
                                <div className="absolute -left-[41px] top-0 p-2 bg-background border border-white/10 rounded-full text-gray-400">
                                    <Terminal size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Web Development Intern</h3>
                                <p className="text-primary text-sm mb-2">Summer 2023</p>
                                <p className="text-gray-400">Implemented full-stack features and collaborated on agile teams.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
