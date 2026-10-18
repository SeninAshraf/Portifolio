import { motion } from 'framer-motion';
import { Linkedin, ExternalLink } from 'lucide-react';

interface LinkedInPostProps {
    author: string;
    date: string;
    content: string;
    tags: string[];
    link: string;
}

export const LinkedInPostCard = ({ author, date, content, tags, link }: LinkedInPostProps) => {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="bg-surface border border-metagray-800 hover:border-primary transition-all duration-300 p-6 flex flex-col justify-between h-full relative group"
        >
            {/* Top Red Accent Line */}
            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-primary transition-all duration-300" />

            <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-metagray-800/80">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-primary/10 border border-primary/30 text-primary flex items-center justify-center shrink-0">
                            <Linkedin size={18} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm group-hover:text-primary transition-colors">
                                {author}
                            </h4>
                            <p className="text-[11px] font-mono text-metagray-400">
                                {date}
                            </p>
                        </div>
                    </div>

                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-metagray-400 hover:text-white hover:bg-metagray-800 rounded-sm transition-colors"
                        aria-label="View on LinkedIn"
                    >
                        <ExternalLink size={16} />
                    </a>
                </div>

                {/* Content */}
                <p className="text-metagray-300 text-sm leading-relaxed mb-6 font-light">
                    {content}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[11px] font-mono text-metagray-400 bg-black/40 border border-metagray-800/80 px-2 py-0.5 rounded-sm"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-3 border-t border-metagray-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-metagray-500 uppercase tracking-wider text-[11px]">Verified Post</span>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-bold flex items-center gap-1 text-[11px]"
                >
                    Read on LinkedIn →
                </a>
            </div>
        </motion.div>
    );
};
