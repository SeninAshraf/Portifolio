import { motion } from 'framer-motion';
import { 
    Brain, 
    Code2, 
    Database, 
    Layers, 
    Award, 
    BookOpen, 
    Briefcase,
    Sparkles
} from 'lucide-react';

const skillCategories = [
    {
        title: "AI, Vision & Machine Learning",
        icon: Brain,
        skills: ["Python", "OpenCV", "TensorFlow", "PyTorch", "YOLOv8", "Facial Biometrics (LBPH)", "Scikit-Learn", "Prompt Engineering"]
    },
    {
        title: "Frontend & Full-Stack",
        icon: Code2,
        skills: ["React 19", "TypeScript", "JavaScript (ES6+)", "TailwindCSS", "Next.js", "HTML5 & Semantic Web", "Responsive Architecture"]
    },
    {
        title: "Backend, APIs & Databases",
        icon: Database,
        skills: ["FastAPI", "Node.js", "REST APIs", "PostgreSQL / SQLite", "Git / GitHub Versioning", "Linux & Shell Scripting"]
    },
    {
        title: "Core Engineering Principles",
        icon: Layers,
        skills: ["Data Structures & Algorithms", "Computer Vision Pipelines", "System Architecture", "Performance Optimization", "Clean Code"]
    }
];

const journeyEvents = [
    {
        title: "KTU University Rank Holder",
        subtitle: "APJ Abdul Kalam Technological University",
        date: "Nov 2024",
        description: "Secured an exceptional 8.43 SGPA in S5 university examinations, ranking among the top scholars across the department.",
        icon: Award,
        isHighlight: true
    },
    {
        title: "B.Tech in AI & Data Science",
        subtitle: "MES College of Engineering, Kuttippuram",
        date: "2022 — Present",
        description: "Specializing in artificial intelligence, neural networks, computer vision, data analysis, and software engineering.",
        icon: BookOpen,
        isHighlight: false
    },
    {
        title: "Web Development & Software Intern",
        subtitle: "Applied Industry Experience",
        date: "Summer 2023",
        description: "Built full-stack components, developed clean user interfaces, and integrated API endpoints in agile sprints.",
        icon: Briefcase,
        isHighlight: false
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 px-4 sm:px-6 bg-background relative overflow-hidden border-b border-metagray-800">
            <div className="max-w-7xl mx-auto">
                {/* MetaDesign Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <div className="meta-heading">
                            <span>CAPABILITIES // EXPERTISE & JOURNEY</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white flex items-center gap-3">
                            <Layers className="text-primary" size={38} />
                            Skills & Timeline
                        </h2>
                        <p className="text-metagray-300 max-w-2xl text-base sm:text-lg mt-3 font-light">
                            A breakdown of technical proficiencies across AI, machine learning, and full-stack software development.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-metagray-400">
                        <Sparkles size={14} className="text-primary" />
                        <span>CONTINUOUS CONTINUAL LEARNING</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left: Categorized Technical Skills */}
                    <div className="lg:col-span-7 space-y-6">
                        <h3 className="text-xl font-display font-bold uppercase tracking-wider text-white pb-3 border-b border-metagray-800 flex items-center justify-between">
                            <span>Core Technical Stack</span>
                            <span className="text-xs font-mono text-primary font-normal">24+ TECHNOLOGIES</span>
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {skillCategories.map((cat, idx) => (
                                <motion.div
                                    key={cat.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                                    className="bg-surface border border-metagray-800 p-5 hover:border-primary/50 transition-colors flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center gap-2.5 mb-3">
                                            <div className="w-7 h-7 bg-primary/10 border border-primary/30 text-primary flex items-center justify-center">
                                                <cat.icon size={16} />
                                            </div>
                                            <h4 className="text-sm font-bold uppercase tracking-wide text-white">
                                                {cat.title}
                                            </h4>
                                        </div>

                                        <div className="flex flex-wrap gap-1.5 mt-3">
                                            {cat.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="text-xs font-mono text-metagray-300 bg-black/50 border border-metagray-800 px-2 py-1 hover:border-primary/40 hover:text-white transition-colors"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Journey & Academic Timeline */}
                    <div className="lg:col-span-5 space-y-6">
                        <h3 className="text-xl font-display font-bold uppercase tracking-wider text-white pb-3 border-b border-metagray-800 flex items-center justify-between">
                            <span>Academic & Career Journey</span>
                            <span className="text-xs font-mono text-metagray-400 font-normal">CHRONOLOGICAL</span>
                        </h3>

                        <div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-metagray-800">
                            {journeyEvents.map((evt, idx) => (
                                <motion.div
                                    key={evt.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                                    className="relative group"
                                >
                                    {/* Timeline Marker Node */}
                                    <div className={`absolute -left-[30px] top-1 w-4 h-4 rounded-full border-2 ${
                                        evt.isHighlight
                                            ? 'bg-primary border-primary shadow-[0_0_8px_rgba(231,14,14,0.8)]'
                                            : 'bg-black border-metagray-600 group-hover:border-primary'
                                    } transition-colors`} />

                                    <div className="bg-surface border border-metagray-800 p-5 group-hover:border-metagray-700 transition-colors">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-xs font-mono font-bold text-primary">
                                                {evt.date}
                                            </span>
                                            <evt.icon size={16} className={evt.isHighlight ? 'text-primary' : 'text-metagray-500'} />
                                        </div>

                                        <h4 className="text-base font-bold text-white mb-0.5">
                                            {evt.title}
                                        </h4>
                                        <div className="text-xs font-medium text-metagray-400 mb-2">
                                            {evt.subtitle}
                                        </div>
                                        <p className="text-xs text-metagray-300 leading-relaxed font-light">
                                            {evt.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
