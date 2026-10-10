import { motion } from 'framer-motion';
import { Linkedin, ExternalLink } from 'lucide-react';

interface LinkedInPostProps {
    author: string;
    date: string;
    content: string;
    tags: string[];
    link: string;
    image?: string; // Optional image for the post
}

export const LinkedInPostCard = ({ author, date, content, tags, link, image }: LinkedInPostProps) => {
    return (
        <motion.div
            whileHover={{ y: -8, borderColor: 'rgba(255, 77, 0, 0.5)' }}
            className="bg-surface border border-white/5 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full transition-colors duration-300 relative group"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Header */}
            <div className="p-6 flex gap-4 items-center relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <Linkedin size={22} />
                </div>
                <div>
                    <h4 className="font-bold text-white text-base group-hover:text-primary transition-colors">{author}</h4>
                    <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">{date}</p>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="ml-auto text-gray-500 hover:text-white bg-white/5 p-2 rounded-full hover:bg-primary hover:border-primary border border-white/10 transition-all duration-300">
                    <ExternalLink size={18} />
                </a>
            </div>

            {/* Content */}
            <div className="px-6 pb-6 flex-grow relative z-10">
                <p className="text-gray-300 text-sm leading-relaxed mb-6 whitespace-pre-line border-l-2 border-white/10 pl-4">
                    {content.length > 150 ? content.slice(0, 150) + '...' : content}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 text-primary text-xs font-medium rounded-full border border-white/10">#{tag}</span>
                    ))}
                </div>
            </div>

            {/* Optional Image Area */}
            {image && (
                <div className="w-full h-48 bg-gray-900 border-t border-white/5 relative overflow-hidden group-hover:border-primary/20 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-white/5">
                        <span className="text-xs font-medium tracking-wider">ATTACHMENT PREVIEW</span>
                    </div>
                </div>
            )}
        </motion.div>
    );
};
