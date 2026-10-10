import { motion } from 'framer-motion';
import { Github, ExternalLink, GitBranch, Star, Code } from 'lucide-react';

export interface GithubRepoCardProps {
    name: string;
    description: string;
    language: string;
    languageColor: string;
    category?: string;
    tags?: string[];
    stars?: number;
    forks?: number;
    url: string;
    liveUrl?: string;
}

export const GithubRepoCard = ({
    name,
    description,
    language,
    languageColor,
    category = 'AI / ML',
    tags = [],
    stars = 0,
    forks = 0,
    url,
    liveUrl,
}: GithubRepoCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group bg-surface border border-metagray-800 hover:border-primary p-6 transition-all duration-300 flex flex-col justify-between h-full relative"
        >
            {/* Top red marker indicator on hover */}
            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-primary transition-all duration-300" />

            <div>
                {/* Header with category and actions */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded-sm">
                        {category}
                    </span>

                    <div className="flex items-center gap-2">
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 text-metagray-400 hover:text-white hover:bg-metagray-800 rounded-sm transition-colors"
                                aria-label="Live Demo"
                            >
                                <ExternalLink size={16} />
                            </a>
                        )}
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-metagray-400 hover:text-primary hover:bg-primary/10 rounded-sm transition-colors"
                            aria-label="GitHub Repository"
                        >
                            <Github size={16} />
                        </a>
                    </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors mb-3 flex items-center gap-2">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1.5"
                    >
                        {name}
                    </a>
                </h3>

                {/* Description */}
                <p className="text-metagray-300 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                    {description}
                </p>

                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[11px] font-mono text-metagray-400 bg-black/40 border border-metagray-800/80 px-2 py-0.5 rounded-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Bottom Metadata Strip */}
            <div className="pt-4 border-t border-metagray-800/80 flex items-center justify-between text-xs font-mono text-metagray-400">
                <div className="flex items-center gap-2">
                    <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: languageColor || '#e70e0e' }}
                    />
                    <span className="text-metagray-300 font-medium">{language}</span>
                </div>

                <div className="flex items-center gap-4">
                    {stars > 0 && (
                        <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                            <Star size={13} />
                            {stars}
                        </span>
                    )}
                    {forks > 0 && (
                        <span className="flex items-center gap-1">
                            <GitBranch size={13} />
                            {forks}
                        </span>
                    )}
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-metagray-300 hover:text-primary font-bold tracking-wider uppercase text-[11px] flex items-center gap-1"
                    >
                        Code <Code size={12} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};
