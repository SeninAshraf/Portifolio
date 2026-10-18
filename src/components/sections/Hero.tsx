import { useRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Brain, Code2, Eye, FileText, Github, Trophy } from 'lucide-react';
import { Barcode } from '../ui/Barcode';
import { openResume } from '../../lib/resume';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const ease = [0.22, 1, 0.36, 1] as const;

const rise = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
});

interface StickerProps {
    children: ReactNode;
    rotate: number;
    className: string;
    delay: number;
    board: React.RefObject<HTMLDivElement | null>;
    label: string;
}

/** A draggable fact sticker. Positions are absolute from sm up and flow naturally on phones. */
const Sticker = ({ children, rotate, className, delay, board, label }: StickerProps) => {
    const canDrag = useMediaQuery('(min-width: 640px) and (pointer: fine)');
    return (
    <motion.div
        drag={canDrag}
        dragConstraints={board}
        dragElastic={0.18}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 22 }}
        initial={{ opacity: 0, scale: 0.85, rotate: rotate * 2 }}
        animate={{ opacity: 1, scale: 1, rotate }}
        whileHover={{ scale: 1.04, rotate: rotate * 0.4 }}
        whileDrag={{ scale: 1.08, rotate: 0, zIndex: 30, cursor: 'grabbing' }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay }}
        className={`select-none sm:absolute ${canDrag ? 'cursor-grab touch-none' : ''} ${className}`}
        aria-label={label}
        role="img"
    >
        <div className="max-sm:-mx-7 max-sm:-my-6 max-sm:scale-[0.72]">{children}</div>
    </motion.div>
    );
};

const Seal = () => (
    <div className="relative grid h-32 w-32 place-items-center rounded-full bg-accent text-white shadow-lift">
        <svg viewBox="0 0 128 128" className="absolute inset-0 h-full w-full" aria-hidden>
            <defs>
                <path id="seal-ring" d="M64,64 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
            </defs>
            <circle cx="64" cy="64" r="58" fill="none" stroke="white" strokeOpacity="0.35" strokeDasharray="2 3" />
            <text className="fill-white font-mono text-[9.5px] uppercase tracking-[0.2em]">
                <textPath href="#seal-ring">CGPA · First class with distinction ·</textPath>
            </text>
        </svg>
        <div className="text-center leading-none">
            <div className="font-serif text-[2.6rem]">8.22</div>
            <div className="mt-1 font-mono text-[9px] tracking-[0.2em]">B.TECH</div>
        </div>
    </div>
);

const Ticket = ({ kicker, title, meta, tone }: { kicker: string; title: string; meta: string; tone: 'paper' | 'kraft' }) => (
    <div
        className={`relative w-52 rounded-[4px] px-4 py-3 shadow-lift ${tone === 'kraft' ? 'bg-kraft text-ink dark:text-paper' : 'border border-line bg-card text-ink'}`}
    >
        <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-paper" aria-hidden />
        <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-paper" aria-hidden />
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{kicker}</div>
        <div className="mt-0.5 font-serif text-2xl leading-tight">{title}</div>
        <div className="mt-2 border-t border-dashed border-current/30 pt-2 font-mono text-[10px] uppercase tracking-[0.12em] opacity-70">
            {meta}
        </div>
    </div>
);

export const Hero = () => {
    const board = useRef<HTMLDivElement>(null);

    return (
        <section id="top" className="relative px-4 pb-4 pt-12 sm:px-6 md:pt-28">
            <div className="mx-auto max-w-prose">
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.1, ease }}
                    className="mx-auto mb-10 w-56 sm:w-64"
                >
                    <img
                        src="/senin-hero.jpg"
                        alt="Pencil-sketch portrait of Senin Ashraf"
                        width={1254}
                        height={1254}
                        fetchPriority="high"
                        className="deckle aspect-square w-full object-cover mix-blend-multiply dark:mix-blend-normal dark:brightness-[0.92]"
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = '/senin.jpg';
                        }}
                    />
                </motion.div>

                <motion.h1
                    {...rise(0.15)}
                    className="font-serif text-[2.7rem] leading-[1.02] tracking-[-0.02em] sm:text-[3.4rem]"
                >
                    Senin Ashraf, an AI &amp; data science engineer building <em className="italic text-accent">intelligence</em> from real data.
                </motion.h1>

                <motion.div {...rise(0.3)} className="mt-7 space-y-5 text-[17px] leading-[1.75]">
                    <p>
                        I work across applied AI: <span className="chip"><Eye size={13} className="text-accent" />computer vision</span> with OpenCV, YOLO and LBPH face
                        recognition, <span className="chip"><Brain size={13} className="text-accent" />conversational AI</span> that speaks Malayalam and English, and{' '}
                        <span className="chip"><Code2 size={13} className="text-accent" />full-stack products</span> in React, TypeScript and FastAPI — turning
                        algorithms into production-grade applications.
                    </p>
                    <p>
                        Right now I'm a Software Engineer Intern at <a href="#experience" className="link">Metadesign Software Solutions</a>, building a movie
                        booking system, and learning{' '}
                        <a href="https://coursera.org/learn/dlai-agentic-ai" target="_blank" rel="noopener noreferrer" className="link">
                            Agentic AI
                        </a>{' '}
                        with DeepLearning.AI.
                    </p>
                    <p>
                        I've reached the podium at <a href="#achievements" className="link"><Trophy size={14} className="mr-1 inline -translate-y-px text-accent" />two hackathons</a> and
                        mentored <a href="#programs" className="link">100+ students</a> through workshops.
                    </p>
                    <p className="flex items-center gap-2 text-[15px] text-ink">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        Open to opportunities and collaborations.
                    </p>
                </motion.div>

                <motion.div {...rise(0.45)} className="mt-8 flex flex-wrap gap-2.5">
                    <a href="#work" className="btn-ink">
                        See my work <ArrowDown size={15} />
                    </a>
                    <a href="/resume.pdf" onClick={openResume} aria-haspopup="dialog" className="btn-ghost">
                        <FileText size={15} /> Résumé
                    </a>
                    <a href="https://github.com/SeninAshraf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                        <Github size={15} /> GitHub
                    </a>
                </motion.div>
            </div>

            {/* Sticker board — real milestones, free to rearrange */}
            <div
                ref={board}
                className="relative mx-auto mt-14 flex max-w-wide flex-wrap items-center justify-center gap-x-1 gap-y-2 sm:block sm:h-[330px]"
            >
                <Sticker board={board} label="8.22 CGPA, first class with distinction" rotate={-8} delay={0.6} className="sm:left-[4%] sm:top-[14%]">
                    <Seal />
                </Sticker>
                <Sticker board={board} label="2nd prize, Matrix Hackathon" rotate={5} delay={0.7} className="sm:left-[22%] sm:top-[2%]">
                    <Ticket kicker="2nd prize" title="Matrix Hackathon" meta="30 hrs · MESCE · 2024" tone="paper" />
                </Sticker>
                <Sticker board={board} label="33+ public repositories" rotate={-3} delay={0.8} className="sm:left-[46%] sm:top-[8%]">
                    <div className="w-48 rounded-[4px] bg-ink px-4 py-3 text-paper shadow-lift">
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-60">github.com/SeninAshraf</div>
                        <div className="mt-1 font-serif text-4xl leading-none">33+</div>
                        <div className="mb-2 text-xs opacity-80">public repositories</div>
                        <Barcode seed="SeninAshraf" className="!text-paper opacity-80" />
                    </div>
                </Sticker>
                <Sticker board={board} label="Now learning Agentic AI" rotate={7} delay={0.9} className="sm:right-[4%] sm:top-[4%]">
                    <div className="w-44 rounded-[4px] border-2 border-dashed border-accent/60 bg-card px-4 py-3 text-ink shadow-lift">
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Now learning</div>
                        <div className="font-serif text-3xl leading-tight">Agentic AI</div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">DeepLearning.AI</div>
                    </div>
                </Sticker>
                <Sticker board={board} label="3rd prize, Kotech Hackathon 2025" rotate={-5} delay={1.0} className="sm:left-[16%] sm:top-[56%]">
                    <Ticket kicker="3rd prize · ₹10,000" title="Kotech Hackathon" meta="Kottakkal Municipality · 2025" tone="kraft" />
                </Sticker>
                <Sticker board={board} label="100+ students mentored" rotate={3} delay={1.1} className="sm:left-[45%] sm:top-[58%]">
                    <div className="flex w-56 items-center gap-3 rounded-full border border-line bg-card py-2 pl-2 pr-5 text-ink shadow-lift">
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent font-serif text-xl text-white">100+</span>
                        <span className="text-[13px] leading-tight">
                            students mentored
                            <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-muted">3 workshops &amp; sessions</span>
                        </span>
                    </div>
                </Sticker>
                <Sticker board={board} label="Software Engineer Intern at Metadesign" rotate={-6} delay={1.2} className="sm:right-[6%] sm:top-[52%]">
                    <div className="w-44 rounded-[4px] bg-[#f4e9a8] px-4 py-3 text-[#2b2611] shadow-lift">
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">Since Jun 2026</div>
                        <div className="font-serif text-2xl leading-tight">SWE Intern</div>
                        <div className="text-xs opacity-80">Metadesign Software Solutions</div>
                    </div>
                </Sticker>
            </div>
            <p className="label mt-6 hidden text-center text-faint sm:block">Drag the stickers around</p>
        </section>
    );
};
