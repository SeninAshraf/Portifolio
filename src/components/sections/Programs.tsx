import { motion } from 'framer-motion';
import { Camera, Play } from 'lucide-react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { Tape } from '../ui/Tape';

interface Program {
    title: string;
    subtitle: string;
    organization: string;
    date: string;
    audience: string;
    video?: string;
    fallbackVideo?: string;
    image?: string;
    fallbackImage?: string;
    description: string;
    keyTakeaways: string[];
}

const programs: Program[] = [
    {
        title: "Prompt to Code Workshop",
        subtitle: "Hands-on Generative AI & Vibe Coding",
        organization: "ADTEC-MESCE",
        date: "2024",
        audience: "S3 & S5 B.Tech Students (100+ Attendees)",
        video: "/videos/prompt_to_code.mp4",
        fallbackVideo: "/arcane_challenge.mp4",
        description: `An interactive, hands-on workshop guiding junior engineering students into modern AI engineering, API integrations and no-code/low-code development workflows.`,
        keyTakeaways: [
            "Building portfolio applications with rapid prototyping & LLM prompt engineering",
            "Integrating secure API keys, REST endpoints and generative models",
            "Establishing strong developer foundations on GitHub, version control and LinkedIn"
        ]
    },
    {
        title: "ARCANE – Vibe Coding Challenge",
        subtitle: "Collaborative Innovation & Hack Experience",
        organization: "MESCE Tech Fest",
        date: "2024",
        audience: "Cross-Department Innovators",
        video: "/videos/arcane_challenge.mp4",
        fallbackVideo: "/arcane_challenge.mp4",
        description: `Spearheaded and hosted the ARCANE Coding Challenge, where students turned raw concepts into working prototypes against the clock — fostering collaboration, teamwork and creative engineering.`,
        keyTakeaways: [
            "Agile problem solving in competitive, fast-paced environments",
            "Cross-functional team mentoring on architecture and debugging",
            "Celebrating innovation, collaborative spirit and hands-on coding culture"
        ]
    },
    {
        title: "Beyond Code",
        subtitle: "A Theoretical Session on Software Product Development",
        organization: "ADTEC-MESCE",
        date: "2026",
        audience: "S3 & S5 B.Tech Students (100+ Attendees)",
        image: "/images/works/session.jpeg",
        fallbackImage: "/images/works/session.jpeg",
        description: `An interactive session introducing junior engineering students to modern AI engineering, API integration and no-code/low-code development workflows.`,
        keyTakeaways: [
            "AI-Powered Development: rapid prototyping and LLM prompt engineering",
            "AI & API Integration: secure APIs, REST endpoints and generative AI",
            "Developer Branding: GitHub projects, version control and LinkedIn presence"
        ]
    }
];

export const Programs = () => (
    <Section
        id="programs"
        index="05"
        label="Workshops"
        title="Teaching what I"
        emphasis="learn"
        intro="Workshops, challenges and sessions for junior engineers at MES College of Engineering — 100+ students mentored."
    >
        <div className="mx-auto max-w-wide space-y-24 md:space-y-32">
            {programs.map((prog, index) => {
                const flip = index % 2 === 1;
                return (
                    <article key={prog.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                        {/* Media */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, rotate: 0 }}
                            whileInView={{ opacity: 1, y: 0, rotate: flip ? 2 : -2 }}
                            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                            className={`relative mx-auto w-full ${prog.image ? 'max-w-[340px]' : 'max-w-[270px]'} ${flip ? 'md:order-2' : ''}`}
                        >
                            <Tape tone={flip ? 'slate' : 'amber'} className="-top-3 left-1/2 -translate-x-1/2 -rotate-2" />
                            <div className="paper p-2.5">
                                <div className={`relative overflow-hidden bg-black ${prog.image ? 'aspect-[4/5]' : 'aspect-[9/16]'}`}>
                                    {prog.image ? (
                                        <img
                                            src={prog.image}
                                            alt={`${prog.title} session`}
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                            onError={(e) => {
                                                if (prog.fallbackImage) (e.currentTarget as HTMLImageElement).src = prog.fallbackImage;
                                            }}
                                        />
                                    ) : (
                                        <video
                                            src={prog.video}
                                            className="h-full w-full object-cover"
                                            controls
                                            playsInline
                                            preload="metadata"
                                            onError={(e) => {
                                                if (prog.fallbackVideo) (e.currentTarget as HTMLVideoElement).src = prog.fallbackVideo;
                                            }}
                                        />
                                    )}
                                    <span className="pointer-events-none absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white backdrop-blur">
                                        {prog.image ? <Camera size={10} /> : <Play size={10} className="fill-white" />}
                                        {prog.image ? 'Session' : 'Event reel'}
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Story */}
                        <Reveal className={flip ? 'md:order-1' : ''}>
                            <p className="label">
                                <span className="text-accent">{prog.date}</span>
                                <span className="mx-2 text-faint">·</span>
                                {prog.organization}
                            </p>
                            <h3 className="mt-2 font-serif text-[2.4rem] leading-[1.05] tracking-[-0.01em]">{prog.title}</h3>
                            <p className="mt-1 text-[15px] italic text-muted">{prog.subtitle}</p>
                            <p className="mt-5 text-[16.5px] leading-relaxed">{prog.description}</p>
                            <p className="label mb-3 mt-7">Core focus &amp; impact</p>
                            <ul className="space-y-2 text-[15px]">
                                {prog.keyTakeaways.map((point) => (
                                    <li key={point} className="flex gap-3">
                                        <span className="text-accent">—</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 inline-flex rounded-full border border-line bg-card px-3 py-1 font-mono text-[11px] tracking-wide text-muted">
                                {prog.audience}
                            </p>
                        </Reveal>
                    </article>
                );
            })}
        </div>
    </Section>
);
