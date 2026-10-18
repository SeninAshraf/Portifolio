import { motion } from 'framer-motion';
import { Linkedin, ArrowRight } from 'lucide-react';
import { LinkedInPostCard } from '../ui/LinkedInPostCard';

const posts = [
    {
        author: "Senin Ashraf",
        date: "Recent Update",
        content: "Thrilled to announce that we secured the Second Prize at the 30-hour Hackathon! 🥈 Grateful for the amazing team and the opportunity to build something impactful.",
        tags: ["Hackathon", "Innovation", "TeamWork", "Coding"],
        link: "https://www.linkedin.com/posts/senin-ashraf_second-prize-at-the-30-hour-hackathon-grateful-activity-7407089467041366016-lQ_k"
    },
    {
        author: "Senin Ashraf",
        date: "Workshop Recap",
        content: "Had an incredible time conducting the 'Prompt to Code' workshop. Exploring modern developer tools and their potential to democratize development was inspiring! 🚀",
        tags: ["NoCode", "Workshop", "VibeCoding", "DevCommunity"],
        link: "https://www.linkedin.com/posts/senin-ashraf_workshop-vibecoding-nocode-activity-7364438676828782593-VLGD"
    },
    {
        author: "Senin Ashraf",
        date: "Research Publication",
        content: "Excited to share our paper on 'Automated Attendance Systems' using computer vision. Check out our methodology on facial recognition and student ID detection. 📄",
        tags: ["Research", "ComputerVision", "AI", "Publication"],
        link: "https://www.linkedin.com/posts/senin-ashraf_our-paper-titled-automated-attendance-system-activity-7362738331383713792-hTqw"
    }
];

export const LinkedInUpdates = () => {
    return (
        <section id="updates" className="py-24 px-4 sm:px-6 bg-surface-card border-b border-metagray-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* MetaDesign Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="meta-heading">
                            <span>PROFESSIONAL BROADCASTS</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white flex items-center gap-3">
                            <Linkedin className="text-primary" size={38} />
                            LinkedIn Insights
                        </h2>
                        <p className="text-metagray-300 max-w-2xl text-base sm:text-lg mt-3 font-light">
                            Dispatches, hackathon summaries, and research insights shared with the engineering community.
                        </p>
                    </div>

                    <a
                        href="https://www.linkedin.com/in/senin-ashraf-96a29b252"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline flex items-center gap-2 group text-xs py-2.5 px-4"
                    >
                        <span>Connect on LinkedIn</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <LinkedInPostCard {...post} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
