import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';

interface TimelineItem {
    id: string;
    when: [string, string];
    kind: string;
    current?: boolean;
    title: string;
    org: string;
    link?: string;
    summary: string;
    project?: {
        title: string;
        description: string;
        points: string[];
        focus: string[];
    };
    stack?: string[];
}

const timeline: TimelineItem[] = [
    {
        id: 'agentic-ai',
        when: ['Now', ''],
        kind: 'Learning',
        current: true,
        title: 'Agentic AI',
        org: 'DeepLearning.AI · Coursera',
        link: 'https://coursera.org/learn/dlai-agentic-ai',
        summary: 'Building autonomous, multi-step AI agents with reflection, tool use, planning and multi-agent workflows.',
    },
    {
        id: 'metadesign-intern',
        when: ['Jun', '2026'],
        kind: 'Internship',
        current: true,
        title: 'Software Engineer Intern',
        org: 'Metadesign Software Solutions Pvt Ltd · Kerala, India',
        summary:
            'End-to-end software engineering on production-grade systems, applying modular design patterns and structured architecture from schema to API.',
        project: {
            title: 'Movie Booking System',
            description: 'Currently building a movie booking system on a structured, layered architecture:',
            points: [
                'Layered design separating presentation, business-domain logic and data persistence',
                'Transactional seat reservation that prevents race conditions and double-booking',
                'Structured REST API contracts with standardised request validation and error handling',
                'Optimised schema for cinema halls, show schedules, real-time seat matrices and booking ledgers',
            ],
            focus: ['Structured Architecture', 'Backend Engineering', 'Database Schema', 'REST APIs', 'State Management'],
        },
        stack: ['Software Architecture', 'Clean Code', 'System Design', 'Relational Databases', 'Full-Stack Development'],
    },
    {
        id: 'btech',
        when: ['2022', '2026'],
        kind: 'Education',
        title: 'B.Tech in AI & Data Science',
        org: 'MES College of Engineering, Kuttippuram',
        summary: 'Specialising in artificial intelligence, neural networks, computer vision, data analysis and software engineering.',
    },
];

export const Experience = () => {
    const rail = useRef<HTMLOListElement>(null);
    const { scrollYProgress } = useScroll({ target: rail, offset: ['start 70%', 'end 60%'] });
    const draw = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

    return (
        <Section id="experience" index="02" label="Experience" title="Where I've" emphasis="worked" tail="& learned">
            <div className="mx-auto max-w-[44rem]">
                <p className="label mb-8 flex items-center gap-2 pl-[5.5rem] text-accent sm:pl-[7rem]">
                    Newest first <span aria-hidden>↓</span>
                </p>
                <ol ref={rail} className="relative">
                    {/* Static rail + scroll-drawn progress */}
                    <span aria-hidden className="absolute bottom-2 left-[4.6rem] top-2 w-px bg-line sm:left-[6.1rem]" />
                    <motion.span
                        aria-hidden
                        style={{ scaleY: draw }}
                        className="absolute bottom-2 left-[4.6rem] top-2 w-px origin-top bg-accent sm:left-[6.1rem]"
                    />

                    {timeline.map((item) => (
                        <li key={item.id} className="relative grid grid-cols-[4rem_1fr] gap-x-6 pb-14 last:pb-0 sm:grid-cols-[5.5rem_1fr] sm:gap-x-8">
                            <div className="pt-1 text-right font-mono text-[11px] uppercase leading-tight tracking-[0.12em] text-muted">
                                <div className={item.current ? 'text-accent' : ''}>{item.when[0]}</div>
                                {item.when[1] && <div>{item.when[1]}</div>}
                            </div>

                            <span
                                aria-hidden
                                className={`absolute left-[4.6rem] top-[0.45rem] h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 sm:left-[6.1rem] ${
                                    item.current ? 'border-accent bg-accent shadow-[0_0_0_4px_rgb(var(--accent)/0.15)]' : 'border-faint bg-paper'
                                }`}
                            />

                            <Reveal>
                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                    <h3 className="text-[19px] font-semibold tracking-tight">
                                        {item.link ? (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 hover:text-accent">
                                                {item.title}
                                                <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                            </a>
                                        ) : (
                                            item.title
                                        )}
                                    </h3>
                                    <span className="label">{item.kind}</span>
                                    {item.current && <span className="label text-accent">Current</span>}
                                </div>
                                <p className="mt-0.5 text-[15px] text-muted">{item.org}</p>
                                <p className="mt-3 text-[16px] leading-relaxed">{item.summary}</p>

                                {item.project && (
                                    <div className="paper mt-5 p-5">
                                        <p className="label mb-2">
                                            Active project <span className="text-faint">/</span> <span className="text-ink">{item.project.title}</span>
                                        </p>
                                        <p className="text-[15px] text-muted">{item.project.description}</p>
                                        <ul className="mt-3 space-y-1.5 text-[15px]">
                                            {item.project.points.map((p) => (
                                                <li key={p} className="flex gap-3">
                                                    <span className="text-faint">—</span>
                                                    <span>{p}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-4 font-mono text-[11px] leading-relaxed tracking-wide text-muted">
                                            <span className="uppercase text-faint">Focus · </span>
                                            {item.project.focus.join(' · ')}
                                        </p>
                                    </div>
                                )}

                                {item.stack && (
                                    <p className="mt-4 text-[14px] text-muted">
                                        {item.stack.join(', ')}
                                    </p>
                                )}
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </Section>
    );
};
