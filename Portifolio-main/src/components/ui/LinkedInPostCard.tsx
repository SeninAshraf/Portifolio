import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface LinkedInPostProps {
    date: string;
    title: string;
    content: string;
    tags: string[];
    link: string;
    index: number;
}

/** A post card tucked into the LinkedIn folder; lifts out of the folder on hover. */
export const LinkedInPostCard = ({ date, title, content, tags, link, index }: LinkedInPostProps) => {
    const tilt = [-2, 0.8, 2.2][index % 3];
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ rotate: tilt }}
            whileHover={{ y: -14, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="group flex h-full flex-col rounded-[4px] bg-card p-5 pb-14 text-left shadow-paper ring-1 ring-line"
        >
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">{date}</p>
            <h3 className="mt-2 font-serif text-[1.45rem] leading-tight text-ink">{title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">{content}</p>
            <p className="mt-3 font-mono text-[10px] leading-relaxed tracking-wide text-faint">{tags.map((t) => `#${t}`).join('  ')}</p>
            <span className="mt-auto inline-flex items-center gap-1 pt-4 text-[13px] font-medium text-ink">
                Read on LinkedIn <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </span>
        </motion.a>
    );
};
