import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Play, Sparkles, Terminal } from 'lucide-react';

const programs = [
    {
        title: "Prompt to Code Workshop",
        subtitle: "Hands-on Generative AI & Vibe Coding",
        organization: "ADTEC-MESCE",
        date: "2024",
        audience: "S3 & S5 B.Tech Students (100+ Attendees)",
        video: "/videos/prompt_to_code.mp4",
        fallbackVideo: "/arcane_challenge.mp4",
        description: `Conducted an interactive, hands-on workshop guiding junior engineering students into modern AI engineering, API integrations, and no-code/low-code development workflows.`,
        keyTakeaways: [
            "Building portfolio applications using rapid prototyping & LLM prompt engineering",
            "Integrating secure API keys, REST endpoints, and generative models",
            "Establishing strong developer foundations on GitHub, version control, and LinkedIn"
        ]
    },
    {
        title: "ARCANE – Vibe Coding Challenge",
        subtitle: "Collaborative Innovation & Hack Experience",
        organization: "MESCE Tech Fest",
        date: "2024",
        audience: "Cross-Department Innovators",
        video: "/videos/arcane_challenge.mp4",
        fallbackVideo: "/arcane_challenge.mp4",
        description: `Spearheaded and hosted the ARCANE Coding Challenge where students converted raw concepts into working prototypes under time constraints, fostering collaboration, teamwork, and creative engineering.`,
        keyTakeaways: [
            "Agile problem solving in competitive, fast-paced environments",
            "Cross-functional team mentoring on architecture and debugging",
            "Celebrating innovation, collaborative spirit, and hands-on coding culture"
        ]
    }
];

export const Programs = () => {
    return (
        <section id="programs" className="py-24 px-4 sm:px-6 bg-surface relative overflow-hidden border-b border-metagray-800">
            <div className="max-w-7xl mx-auto">
                {/* MetaDesign Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="meta-heading">
                            <span>KNOWLEDGE SHARING & MENTORSHIP</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white flex items-center gap-3">
                            <Terminal className="text-primary" size={38} />
                            Workshops & Initiatives
                        </h2>
                        <p className="text-metagray-300 max-w-2xl text-base sm:text-lg mt-3 font-light">
                            Fostering technical innovation, mentoring junior engineers, and leading interactive AI programming challenges.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-metagray-400">
                        <Sparkles size={14} className="text-primary" />
                        <span>100+ STUDENTS MENTORED</span>
                    </div>
                </div>

                {/* Workshops List */}
                <div className="space-y-10">
                    {programs.map((prog, index) => (
                        <motion.div
                            key={prog.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-surface-card border border-metagray-800 hover:border-metagray-700 p-6 sm:p-8 transition-all duration-300 grid lg:grid-cols-12 gap-8 items-center relative group"
                        >
                            {/* Red Side Accent Marker */}
                            <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-primary group-hover:w-[5px] transition-all duration-300" />

                            {/* Video Column (9:16 vertical reels format) */}
                            <div className="lg:col-span-5 flex justify-center">
                                <div className="relative w-full max-w-[280px] aspect-[9/16] bg-black rounded-sm overflow-hidden border border-metagray-800 group-hover:border-primary/50 transition-colors shadow-2xl">
                                    <video
                                        src={prog.video}
                                        className="w-full h-full object-cover"
                                        controls
                                        playsInline
                                        preload="metadata"
                                        onError={(e) => {
                                            (e.currentTarget as HTMLVideoElement).src = prog.fallbackVideo;
                                        }}
                                    />
                                    <div className="absolute top-3 left-3 bg-black/80 border border-metagray-800 text-[10px] font-mono uppercase text-primary px-2 py-0.5 pointer-events-none flex items-center gap-1">
                                        <Play size={10} className="fill-primary" />
                                        EVENT REEL
                                    </div>
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                                    <span className="flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/30 px-2.5 py-1">
                                        <Calendar size={12} />
                                        {prog.date}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-black/50 text-metagray-300 border border-metagray-800 px-2.5 py-1">
                                        <MapPin size={12} className="text-primary" />
                                        {prog.organization}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-black/50 text-metagray-300 border border-metagray-800 px-2.5 py-1">
                                        <Users size={12} className="text-primary" />
                                        {prog.audience}
                                    </span>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-primary transition-colors">
                                    {prog.title}
                                </h3>

                                <p className="text-sm font-semibold uppercase tracking-wider text-metagray-400">
                                    {prog.subtitle}
                                </p>

                                <p className="text-metagray-300 text-sm sm:text-base leading-relaxed font-light">
                                    {prog.description}
                                </p>

                                {/* Key Highlights */}
                                <div className="pt-2">
                                    <div className="text-xs uppercase font-mono tracking-wider text-white font-bold mb-2">
                                        Core Focus & Impact:
                                    </div>
                                    <ul className="space-y-1.5 text-xs sm:text-sm text-metagray-300 font-light">
                                        {prog.keyTakeaways.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-primary font-bold mt-0.5">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
