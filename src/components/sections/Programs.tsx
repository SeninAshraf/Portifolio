import { motion } from 'framer-motion';
import { Play, Calendar, MapPin } from 'lucide-react';

const programs = [
    {
        title: "Prompt to Code Workshop",
        subtitle: "First Workshop Experience",
        description: `Had the wonderful opportunity to conduct my first workshop – "Prompt to Code" alongside Naveen P, organized under ADTEC-MESCE.

This wasn’t just a workshop for me – it was my first step into guiding juniors (S3 & S5 students), and the response truly motivated me to keep moving forward with more confidence.

We explored Vibe Coding concepts by building a portfolio website with no-code tools, experimenting with builder tools, learning API key integrations, and understanding both the possibilities and limitations of no-code AI tools.

Beyond coding, we also discussed career-focused aspects like the importance of LinkedIn, GitHub, and most importantly – cultivating the passion to solve problems by generating creative solutions.`,
        video: "/videos/prompt_to_code.mp4",
        date: "2024",
        location: "ADTEC-MESCE"
    },
    {
        title: "ARCANE – Vibe Coding Challenge",
        subtitle: "Where ideas turned into code",
        description: `Where ideas turned into code and collaboration turned into creativity.
An experience that brought together curious minds, teamwork, and innovation in a relaxed yet focused environment.

ARCANE was all about learning by doing, sharing perspectives, and enjoying the process — a day filled with creativity, teamwork, and truly good vibes ✨`,
        video: "/videos/arcane_challenge.mp4",
        date: "2024",
        location: "MESCE"
    }
];

export const Programs = () => {
    return (
        <section id="programs" className="py-20 px-6 bg-background relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:text-center items-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 flex items-center gap-3">
                        <Play className="text-primary" size={40} />
                        Programs & Workshops
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Sharing knowledge and fostering innovation through workshops and coding challenges.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="group flex flex-col md:flex-row gap-8 bg-surface border border-white/5 rounded-3xl p-6 hover:border-white/10 transition-all duration-300"
                        >
                            {/* Video Container - 9:16 Aspect Ratio */}
                            <div className="relative w-full max-w-[280px] md:w-[280px] aspect-[9/16] shrink-0 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-primary/30 transition-colors mx-auto md:mx-0">
                                <video
                                    src={program.video}
                                    className="w-full h-full object-cover"
                                    loop
                                    muted
                                    playsInline
                                    // Auto-play on hover could be added here if desired, specific implementation depends on user pref
                                    controls
                                />
                                {/* Play Overlay Hint */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20 group-hover:bg-transparent transition-colors">
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                        <Play size={20} className="fill-white text-white ml-0.5" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-xs font-medium text-primary mb-3">
                                    <span className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                                        <Calendar size={12} />
                                        {program.date}
                                    </span>
                                    <span className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                                        <MapPin size={12} />
                                        {program.location}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                                <p className="text-gray-400 text-sm font-medium mb-4">{program.subtitle}</p>

                                <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                                    {program.description}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
