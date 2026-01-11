import { motion } from 'framer-motion';
import { Linkedin, ArrowRight } from 'lucide-react';
import { LinkedInPostCard } from '../ui/LinkedInPostCard';

const posts = [
    {
        author: "Senin Ashraf",
        date: "1 week ago",
        content: "Thrilled to announce that we secured the Second Prize at the 30-hour Hackathon! 🥈 Grateful for the amazing team and the opportunity to build something impactful.",
        tags: ["Hackathon", "Innovation", "TeamWork", "Coding"],
        link: "https://www.linkedin.com/posts/senin-ashraf_second-prize-at-the-30-hour-hackathon-grateful-activity-7407089467041366016-lQ_k"
    },
    {
        author: "Senin Ashraf",
        date: "2 weeks ago",
        content: "Had an incredible time conducting the 'VibeCoding' workshop. Exploring NoCode tools and their potential to democratize development was inspiring! 🚀",
        tags: ["NoCode", "Workshop", "VibeCoding", "DevCommunity"],
        link: "https://www.linkedin.com/posts/senin-ashraf_workshop-vibecoding-nocode-activity-7364438676828782593-VLGD"
    },
    {
        author: "Senin Ashraf",
        date: "1 month ago",
        content: "Excited to share our latest paper on 'Automated Attendance Systems' using computer vision. Check out the full publication for details on our methodology. 📄",
        tags: ["Research", "ComputerVision", "AI", "Publication"],
        link: "https://www.linkedin.com/posts/senin-ashraf_our-paper-titled-automated-attendance-system-activity-7362738331383713792-hTqw"
    }
];

export const LinkedInUpdates = () => {
    return (
        <section id="updates" className="py-20 px-6 bg-surface border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 flex items-center gap-3">
                            <Linkedin className="text-primary" size={36} />
                            Recent Updates
                        </h2>
                        <p className="text-gray-400 max-w-xl text-lg">
                            Insights, achievements, and technical deep-dives from my LinkedIn feed.
                        </p>
                    </div>

                    <a
                        href="https://www.linkedin.com/in/senin-ashraf-96a29b252"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn border border-white/10 hover:border-primary/50 hover:bg-white/5 text-white"
                    >
                        View Full Profile <ArrowRight size={18} className="ml-2" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <LinkedInPostCard {...post} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
