import { motion } from 'framer-motion';
import { Book, Star, ArrowUpRight } from 'lucide-react';

interface GithubRepoCardProps {
    name: string;
    description: string;
    language: string;
    languageColor: string;
    stars: number;
    url: string;
}

export const GithubRepoCard = ({ name, description, language, languageColor, stars, url }: GithubRepoCardProps) => {
    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="group flex flex-col justify-between p-6 bg-surface border border-white/10 rounded-xl hover:border-primary/50 hover:bg-white/5 transition-all duration-300 h-full"
        >
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3 text-primary">
                        <Book size={20} />
                        <h3 className="font-bold text-lg text-white group-hover:underline decoration-primary underline-offset-4">
                            {name}
                        </h3>
                    </div>
                    <ArrowUpRight size={18} className="text-gray-500 group-hover:text-primary transition-colors" />
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            <div className="flex items-center gap-6 text-xs text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                    <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: languageColor }}
                    />
                    {language}
                </div>
                {stars > 0 && (
                    <div className="flex items-center gap-1">
                        <Star size={14} className="group-hover:text-yellow-400 transition-colors" />
                        {stars}
                    </div>
                )}
                {/* 
                <div className="flex items-center gap-1">
                    <GitFork size={14} />
                    0
                </div> 
                */}
            </div>
        </motion.a>
    );
};
