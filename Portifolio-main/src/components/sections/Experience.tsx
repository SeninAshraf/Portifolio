import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, Layers, CheckCircle2, Terminal } from 'lucide-react';

interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    location: string;
    period: string;
    isCurrent: boolean;
    summary: string;
    currentProject?: {
        title: string;
        description: string;
        architecturePoints: string[];
        techStack: string[];
    };
    skills: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: "metadesign-intern",
        role: "Software Engineer Intern",
        company: "Metadesign Software Solutions Pvt Ltd",
        location: "Kerala, India",
        period: "June 2026 — Present",
        isCurrent: true,
        summary: "Joined as Software Engineer Intern in Metadesign Software Solutions Pvt Ltd, actively engaged in end-to-end software engineering, implementing modular design patterns and production-grade architectures.",
        currentProject: {
            title: "Movie Booking System",
            description: "Currently working in developing movie booking system with following structured software developing architecture:",
            architecturePoints: [
                "Layered architectural design separating presentation, business domain logic, and data persistence layers",
                "Robust transactional seat reservation mechanism preventing race conditions and double-booking",
                "Structured RESTful API contracts with standardized request validation and error-handling pipelines",
                "Optimized database schema for cinema halls, show schedules, real-time seat matrices, and booking ledgers"
            ],
            techStack: ["Structured Architecture", "Backend Engineering", "Database Schema", "REST APIs", "State Management"]
        },
        skills: ["Software Architecture", "Clean Code", "System Design", "Relational Databases", "Full-Stack Development"]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-4 sm:px-6 relative bg-background border-t border-metagray-800/80">
            <div className="max-w-7xl mx-auto">
                {/* MetaDesign Section Header */}
                <div className="mb-14">
                    <div className="meta-heading">
                        <span>CAREER PATH // PROFESSIONAL EXPERIENCE</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight text-white">
                                Industry <span className="text-primary">Experience.</span>
                            </h2>
                            <p className="text-metagray-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
                                Practical software engineering experience delivering robust, maintainable systems through disciplined development practices.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 self-start md:self-auto text-xs font-mono text-metagray-400 bg-surface-card border border-metagray-800 px-3 py-1.5 rounded-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>CURRENTLY ACTIVE INTERNSHIP</span>
                        </div>
                    </div>
                </div>

                {/* Timeline Container */}
                <div className="relative pl-4 sm:pl-8 lg:pl-10">
                    {/* Vertical Timeline Guide Line */}
                    <div className="absolute left-2 sm:left-4 lg:left-5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-primary via-metagray-800 to-transparent" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                {/* Timeline Node / Dot */}
                                <div className="absolute -left-6 sm:-left-8 lg:-left-9 top-1.5 w-6 h-6 rounded-full bg-surface-card border-2 border-primary flex items-center justify-center text-primary shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                </div>

                                {/* Main Experience Card */}
                                <div className="meta-card p-6 sm:p-8 bg-surface-card border border-metagray-800 hover:border-metagray-700 transition-all duration-300 shadow-2xl relative">
                                    {/* Header Row */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-metagray-800">
                                        <div>
                                            <div className="flex items-center gap-2 flex-wrap mb-1">
                                                <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
                                                    {exp.role}
                                                </h3>
                                                {exp.isCurrent && (
                                                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-sm bg-emerald-950/70 text-emerald-400 border border-emerald-800/60 flex items-center gap-1.5">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                        Current Role
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-3 text-sm text-metagray-300 font-medium">
                                                <span className="text-primary font-semibold flex items-center gap-1.5">
                                                    <Building2 size={15} />
                                                    {exp.company}
                                                </span>
                                                <span className="text-metagray-600">•</span>
                                                <span className="text-metagray-400 flex items-center gap-1 text-xs">
                                                    <MapPin size={13} />
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-xs font-mono text-metagray-400 bg-black/40 border border-metagray-800/80 px-3 py-1.5 rounded-sm self-start md:self-auto">
                                            <Calendar size={13} className="text-primary" />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>

                                    {/* Summary Paragraph */}
                                    <p className="mt-5 text-sm sm:text-base text-metagray-300 leading-relaxed font-light">
                                        {exp.summary}
                                    </p>

                                    {/* Currently Working Project with Less Opacity as Requested */}
                                    {exp.currentProject && (
                                        <div className="mt-6 p-5 sm:p-6 bg-black/40 border border-metagray-800/80 rounded-sm opacity-80 hover:opacity-100 transition-opacity duration-300 relative group/project">
                                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-metagray-800/80">
                                                <div className="flex items-center gap-2">
                                                    <Terminal size={15} className="text-primary" />
                                                    <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                                                        Active Project // {exp.currentProject.title}
                                                    </span>
                                                </div>
                                                <span className="text-[10px] font-mono uppercase tracking-widest text-metagray-400 bg-metagray-900 border border-metagray-800 px-2 py-0.5 rounded-sm">
                                                    Structured Architecture
                                                </span>
                                            </div>

                                            <p className="text-xs sm:text-sm text-metagray-300 mb-4 font-light leading-relaxed">
                                                {exp.currentProject.description}
                                            </p>

                                            {/* Architectural Breakdown Points */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                                {exp.currentProject.architecturePoints.map((point, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-start gap-2.5 text-xs text-metagray-400 leading-relaxed bg-surface/50 border border-metagray-800/50 p-2.5 rounded-sm"
                                                    >
                                                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                                                        <span>{point}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Project Tech Stack */}
                                            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-metagray-800/50">
                                                <span className="text-[11px] font-mono text-metagray-400 uppercase tracking-wider mr-1 flex items-center gap-1">
                                                    <Layers size={12} className="text-primary" />
                                                    Focus:
                                                </span>
                                                {exp.currentProject.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-[11px] font-mono text-metagray-400 bg-metagray-900/80 border border-metagray-800 px-2 py-0.5 rounded-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Skills / Focus Strip */}
                                    <div className="mt-6 pt-4 border-t border-metagray-800/80 flex flex-wrap items-center gap-2">
                                        <span className="text-xs font-mono uppercase tracking-wider text-metagray-400 mr-2">
                                            Domain Core:
                                        </span>
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs font-mono text-metagray-300 bg-surface border border-metagray-800 px-2.5 py-1 rounded-sm hover:border-primary/40 transition-colors"
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
            </div>
        </section>
    );
};
