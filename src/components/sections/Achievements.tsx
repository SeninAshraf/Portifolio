import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';

const achievements = [
    {
        title: "Kotech Hackathon 2025",
        description: "Achieved 3rd Prize in Hackathon conducted by Kottakkal Municipality. Won ₹10,000 cash prize.",
        image: "/images/achievements/kottakkal_hackathon.jpg",
        icon: Trophy,
        color: "text-amber-400"
    },
    {
        title: "Matrix Hackathon (MESCE)",
        description: "Achieved 2nd Prize in Hackathon conducted by Matrix, CSE Dept. MESCE.",
        image: "/images/achievements/matrix_hackathon.jpg",
        icon: Award,
        color: "text-gray-300"
    }
];

export const Achievements = () => {
    return (
        <section id="achievements" className="py-20 px-6 bg-surface-darker">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:text-center items-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 flex items-center gap-3">
                        <Trophy className="text-primary" size={40} />
                        Achievements
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Recognitions and awards from various technical competitions and hackathons.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <item.icon className={item.color} size={24} />
                                    <h3 className="text-2xl font-bold text-white mb-0">{item.title}</h3>
                                </div>
                                <p className="text-gray-300 text-lg font-medium leading-snug">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
