import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, ArrowRight, Layers } from 'lucide-react';
import { GithubRepoCard, type GithubRepoCardProps } from '../ui/GithubRepoCard';

const projects: GithubRepoCardProps[] = [
    {
        name: "Mentora",
        description: "Intelligent AI Faculty Advisor bridging communication between educational institutions and parents. 24/7 accessible bilingual assistant conversing fluently in Malayalam and English with custom institution logic.",
        language: "Python",
        languageColor: "#3572a5",
        category: "AI & NLP",
        tags: ["FastAPI", "Bilingual NLP", "Speech AI", "RAG"],
        stars: 3,
        forks: 1,
        url: "https://github.com/SeninAshraf/Mentora"
    },
    {
        name: "Automated-Attendance-System",
        description: "AI-powered biometric attendance system utilizing OpenCV, LBPH facial recognition algorithms and YOLO object detection for student ID cards. Real-time authentication and database synchronization.",
        language: "Python",
        languageColor: "#3572a5",
        category: "Computer Vision",
        tags: ["OpenCV", "LBPH", "YOLO", "Biometrics"],
        stars: 4,
        forks: 2,
        url: "https://github.com/SeninAshraf/Automated-Attendance-System"
    },
    {
        name: "GUIDANCE",
        description: "AI Career Companion platform designed to empower students and tech job seekers with intelligent career roadmap generation, interview simulations, and AI-driven resume enhancement.",
        language: "JavaScript",
        languageColor: "#f1e05a",
        category: "Career Tech",
        tags: ["React", "AI Agent", "TailwindCSS", "Node.js"],
        stars: 2,
        forks: 0,
        url: "https://github.com/SeninAshraf/GUIDANCE"
    },
    {
        name: "Meeting-Analyst",
        description: "Speech-to-text intelligence tool & Chrome extension designed to record, transcribe, summarize, and extract key action items from Google Meet and Zoom video conferences.",
        language: "JavaScript",
        languageColor: "#f1e05a",
        category: "AI & Productivity",
        tags: ["Chrome Ext", "Speech-to-Text", "Summarization"],
        stars: 2,
        forks: 0,
        url: "https://github.com/SeninAshraf/Meeting-Analyst"
    },
    {
        name: "Booking_System",
        description: "Robust reservation and booking management system built with Python, featuring relational database schema, user authentication, availability calendar, and automated booking notifications.",
        language: "Python",
        languageColor: "#3572a5",
        category: "Web & Systems",
        tags: ["Python", "Database", "Backend Architecture", "APIs"],
        stars: 1,
        forks: 0,
        url: "https://github.com/SeninAshraf/booking_system"
    },
    {
        name: "GenArchAI",
        description: "Generative AI architecture design explorer assisting engineers in structuring cloud solutions, evaluating tradeoffs, and drafting software blueprint diagrams.",
        language: "JavaScript",
        languageColor: "#f1e05a",
        category: "AI & Systems",
        tags: ["Generative AI", "Architecture", "Design Patterns"],
        stars: 1,
        forks: 0,
        url: "https://github.com/SeninAshraf/GenArchAI"
    }
];

const categories = ['All', 'AI & NLP', 'Computer Vision', 'Career Tech', 'Web & Systems'];

export const Work = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category?.toLowerCase() === selectedCategory.toLowerCase() || p.tags?.some(t => t.toLowerCase().includes(selectedCategory.toLowerCase())));

    return (
        <section id="work" className="py-24 px-4 sm:px-6 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* MetaDesign Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="meta-heading">
                            <span>FEATURED PROJECTS // SELECTED WORKS</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white flex items-center gap-3">
                            <Code2 className="text-primary" size={38} />
                            Engineered Solutions
                        </h2>
                        <p className="text-metagray-300 max-w-2xl text-base sm:text-lg mt-3 font-light">
                            High-impact technical projects spanning computer vision, natural language processing, and full-stack engineering.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-xs uppercase font-mono text-metagray-400">Total Displayed:</span>
                        <span className="text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded-sm">
                            {filteredProjects.length} Repositories
                        </span>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-metagray-800">
                    <div className="flex items-center gap-1.5 text-xs uppercase font-mono text-metagray-400 mr-2">
                        <Layers size={14} className="text-primary" /> Filter:
                    </div>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            onClick={() => setSelectedCategory(cat)}
                            className={`text-xs uppercase font-bold tracking-wider px-3.5 py-1.5 transition-all duration-200 rounded-sm cursor-pointer ${
                                selectedCategory === cat
                                    ? 'bg-primary text-white shadow-sm'
                                    : 'bg-surface border border-metagray-800 text-metagray-400 hover:text-white hover:border-metagray-700'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.name}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="h-full"
                            >
                                <GithubRepoCard {...project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Bottom Callout */}
                <div className="p-8 bg-surface border border-metagray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div>
                        <h4 className="text-white text-lg font-bold uppercase tracking-wide mb-1">
                            Want to inspect all 33+ repositories & experiments?
                        </h4>
                        <p className="text-metagray-400 text-sm font-light">
                            Explore full commit history, branches, test suites, and open issues on GitHub.
                        </p>
                    </div>

                    <a
                        href="https://github.com/SeninAshraf?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary group whitespace-nowrap text-xs py-3 px-6"
                    >
                        <Github size={16} className="mr-2" />
                        <span>Visit GitHub Profile</span>
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};
