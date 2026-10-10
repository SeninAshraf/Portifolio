import { motion } from 'framer-motion';
import { Trophy, Award, Medal, CheckCircle2 } from 'lucide-react';

const achievements = [
    {
        title: "Kotech Hackathon 2025",
        subtitle: "Kottakkal Municipality Innovation Challenge",
        award: "3rd Prize Podium Finish",
        prize: "₹10,000 Cash Prize",
        description: "Competed in high-intensity municipal hackathon developing civic & automated technology solutions. Recognized by jury for algorithmic efficiency and scalable architecture.",
        image: "/images/achievements/kottakkal_hackathon.jpg",
        icon: Trophy,
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        year: "2025"
    },
    {
        title: "Matrix Hackathon (MESCE)",
        subtitle: "Department of Computer Science & Engineering",
        award: "2nd Prize Winner",
        prize: "Silver Medal & Merit Certificate",
        description: "30-hour intensive hackathon testing real-time problem solving, prototype engineering, and rapid AI model deployment against top engineering teams.",
        image: "/images/achievements/matrix_hackathon.jpg",
        icon: Medal,
        badgeColor: "bg-slate-400/10 text-slate-300 border-slate-400/30",
        year: "2024"
    },
    {
        title: "KTU University Rank Holder",
        subtitle: "APJ Abdul Kalam Technological University",
        award: "Academic Distinction",
        prize: "8.43 SGPA (S5)",
        description: "Ranked among top university scholars in B.Tech Artificial Intelligence & Data Science, maintaining deep theoretical mastery alongside practical system engineering.",
        image: "/university.jpg",
        icon: Award,
        badgeColor: "bg-primary/10 text-primary border-primary/30",
        year: "Nov 2024"
    }
];

export const Achievements = () => {
    return (
        <section id="achievements" className="py-24 px-4 sm:px-6 bg-surface-card border-b border-metagray-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* MetaDesign Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="meta-heading">
                            <span>HONORS & RECOGNITION</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white flex items-center gap-3">
                            <Trophy className="text-primary" size={38} />
                            Hackathons & Honors
                        </h2>
                        <p className="text-metagray-300 max-w-2xl text-base sm:text-lg mt-3 font-light">
                            Recognitions and awards from competitive hackathons, innovation challenges, and academic excellence.
                        </p>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-metagray-400 bg-surface border border-metagray-800 px-3 py-1.5">
                        <CheckCircle2 size={14} className="text-primary" />
                        <span>VERIFIED COMPETITIVE MILESTONES</span>
                    </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="group bg-surface border border-metagray-800 hover:border-primary transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                        >
                            {/* Top Red Marker on Hover */}
                            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] bg-primary transition-all duration-300 z-20" />

                            <div>
                                {/* Photo Container with MetaDesign overlay */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                        onError={(e) => {
                                            (e.currentTarget as HTMLImageElement).src = '/hackathon.jpg';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

                                    {/* Year Pill */}
                                    <div className="absolute top-3 right-3 text-[11px] font-mono font-bold text-white bg-black/80 border border-metagray-800 px-2 py-0.5">
                                        {item.year}
                                    </div>

                                    {/* Award Badge Pill */}
                                    <div className="absolute bottom-3 left-3">
                                        <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold px-2.5 py-1 border ${item.badgeColor}`}>
                                            <item.icon size={13} />
                                            {item.award}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-6">
                                    <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-primary font-mono uppercase tracking-wider mb-3">
                                        {item.subtitle}
                                    </p>
                                    <p className="text-metagray-300 text-sm leading-relaxed font-light mb-4">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Prize Banner Footer */}
                            <div className="px-6 py-3 bg-black/40 border-t border-metagray-800/80 flex items-center justify-between text-xs font-mono">
                                <span className="text-metagray-400 uppercase tracking-wider">Recognition</span>
                                <span className="text-white font-bold">{item.prize}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
