import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, Star } from 'lucide-react';
import { ProjectArt, type ArtKind } from './ProjectArt';
import { Tape } from './Tape';

export interface GithubRepoCardProps {
    name: string;
    tagline: string;
    description: string;
    language: string;
    languageColor: string;
    category?: string;
    tags?: string[];
    stars?: number;
    forks?: number;
    url: string;
    liveUrl?: string;
    art: ArtKind;
}

const tapeTones = ['amber', 'accent', 'slate', 'sage'] as const;

/** A project pinned to the wall: paper card, tape, halftone art. */
export const GithubRepoCard = ({
    name,
    tagline,
    description,
    language,
    languageColor,
    category = 'AI / ML',
    tags = [],
    stars = 0,
    forks = 0,
    url,
    liveUrl,
    art,
    index,
}: GithubRepoCardProps & { index: number }) => {
    const tilt = index % 2 === 0 ? -1.5 : 1.2;
    const tone = tapeTones[index % tapeTones.length];

    return (
        <motion.article
            style={{ rotate: tilt }}
            whileHover={{ rotate: 0, y: -8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="group relative flex h-full w-[284px] flex-col bg-card px-6 pb-5 pt-8 text-center shadow-paper ring-1 ring-line transition-shadow duration-300 hover:shadow-lift sm:w-[300px]"
        >
            <Tape tone={tone} className="-left-6 top-3 -rotate-[38deg]" />
            <Tape tone={tone} className="-right-6 top-3 rotate-[38deg]" />

            <h3 className="font-serif text-[2rem] leading-none tracking-[-0.01em]">
                <a href={url} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0 hover:text-accent">
                    {name.replace(/[-_]/g, ' ')}
                </a>
            </h3>
            <p className="mx-auto mt-2 max-w-[15rem] text-[13px] leading-snug text-muted">{tagline}</p>

            <ProjectArt kind={art} className="mx-auto my-5 h-28 w-28 text-accent transition-transform duration-500 group-hover:scale-105" />

            <p className="text-left text-[13.5px] leading-relaxed text-body">{description}</p>

            {tags.length > 0 && (
                <p className="mt-3 text-left font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.1em] text-muted">{tags.join(' · ')}</p>
            )}

            <div className="relative z-10 mt-auto flex items-center justify-center gap-4 pt-5 font-mono text-[11px] uppercase tracking-[0.12em]">
                <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-ink underline decoration-line underline-offset-4 hover:decoration-accent">
                    GitHub <ArrowUpRight size={12} />
                </a>
                {liveUrl && (
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-ink underline decoration-line underline-offset-4 hover:decoration-accent">
                        Live <ArrowUpRight size={12} />
                    </a>
                )}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-dashed border-line pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                <span>No. {String(index + 1).padStart(2, '0')}</span>
                <span className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: languageColor }} />
                        {language}
                    </span>
                    {stars > 0 && (
                        <span className="flex items-center gap-0.5" title={`${stars} stars`}>
                            <Star size={10} /> {stars}
                        </span>
                    )}
                    {forks > 0 && (
                        <span className="flex items-center gap-0.5" title={`${forks} forks`}>
                            <GitBranch size={10} /> {forks}
                        </span>
                    )}
                </span>
                <span className="sr-only">{category}</span>
            </div>
        </motion.article>
    );
};
