import { motion } from 'framer-motion';
import { Github, Code2, ArrowRight } from 'lucide-react';
import { GithubRepoCard } from '../ui/GithubRepoCard';

const projects = [
    {
        name: "Mentora",
        description: "Mentora is an intelligent AI Faculty Advisor designed to bridge the communication gap between educational institutions and parents. It serves as a 24/7 accessible virtual assistant that can converse fluently in Malayalam and English.",
        language: "Python",
        languageColor: "#3572a5",
        stars: 0,
        url: "https://github.com/SeninAshraf/Mentora"
    },
    {
        name: "GUIDANCE",
        description: "Guido - AI Career Companion. An advanced AI-powered platform designed to prepare students and job seekers for their dream careers in tech, featuring AI-driven career guidance and interview preparation.",
        language: "JavaScript",
        languageColor: "#f1e05a",
        stars: 0,
        url: "https://github.com/SeninAshraf/GUIDANCE"
    },
    {
        name: "Automated-Attendance-System",
        description: "Developed an AI-powered Automated Attendance System using facial recognition (OpenCV, LBPH) and ID card detection (YOLO) for secure, real-time attendance tracking.",
        language: "Python",
        languageColor: "#3572a5",
        stars: 0,
        url: "https://github.com/SeninAshraf/Automated-Attendance-System"
    },
    {
        name: "Meeting-Analyst",
        description: "🎙️ AI Meeting Analyst: A web application and Chrome extension designed to analyze and summarize meetings using AI.",
        language: "JavaScript",
        languageColor: "#f1e05a",
        stars: 0,
        url: "https://github.com/SeninAshraf/Meeting-Analyst"
    }
];

export const Work = () => {
    return (
        <section id="work" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:text-center items-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 flex items-center gap-3">
                        <Code2 className="text-primary" size={40} />
                        Selected Works
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        A collection of technical projects showcasing my expertise in AI, Web Development, and Automation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <GithubRepoCard {...project} />
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="https://github.com/SeninAshraf?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all duration-300 font-medium group"
                    >
                        <Github size={20} />
                        View More Works
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};
