import { motion } from 'framer-motion';
import { ArrowRight, Award, Brain, Cpu, Eye } from 'lucide-react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { Tape } from '../ui/Tape';

const pillars = [
    {
        icon: Eye,
        title: 'Computer Vision',
        text: 'Facial biometrics, YOLO object detection, real-time video stream processing and LBPH algorithms.',
    },
    {
        icon: Brain,
        title: 'Applied AI & NLP',
        text: 'Conversational AI agents, LLM prompting, domain-specific faculty advisors and audio synthesis.',
    },
    {
        icon: Cpu,
        title: 'Full-Stack Architecture',
        text: 'Modern React, TypeScript and Python FastAPI, responsive UI systems and robust REST APIs.',
    },
    {
        icon: Award,
        title: 'Academic Distinction',
        text: '8.22 CGPA — First Class with Distinction at MES College of Engineering, Kuttippuram.',
    },
];

const facts = [
    ['Degree', 'B.Tech, AI & Data Science'],
    ['College', 'MESCE, Kuttippuram'],
    ['Grade', '8.22 CGPA · First Class with Distinction'],
    ['Based in', 'Ponnani, Kerala, India'],
];

export const About = () => (
    <Section id="about" index="01" label="About" title="The engineer" emphasis="behind the code">
        <div className="mx-auto grid max-w-wide items-start gap-14 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
            {/* Polaroid portrait */}
            <Reveal className="mx-auto w-full max-w-[320px] md:sticky md:top-28">
                <motion.figure
                    initial={{ rotate: -3 }}
                    whileHover={{ rotate: 0, y: -4 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                    className="paper relative p-3 pb-12"
                >
                    <Tape tone="accent" className="-top-3 left-1/2 -translate-x-1/2 -rotate-3" />
                    <div className="aspect-[4/5] overflow-hidden bg-sunk">
                        <img
                            src="/senin-about.jpg"
                            alt="Senin Ashraf in a dark double-breasted blazer"
                            loading="lazy"
                            className="h-full w-full object-cover object-[72%_center] grayscale transition-[filter] duration-700 hover:grayscale-0"
                            onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src = '/profile.jpg';
                            }}
                        />
                    </div>
                    <figcaption className="absolute inset-x-0 bottom-3 text-center font-serif text-xl italic text-ink">
                        Senin Ashraf, AI engineer
                    </figcaption>
                </motion.figure>
            </Reveal>

            <div>
                <Reveal className="space-y-5 text-[17px] leading-[1.75]">
                    <p className="font-serif text-[1.7rem] leading-snug text-ink">
                        I turn abstract maths and deep neural architectures into software people can rely on.
                    </p>
                    <p>
                        I'm an Artificial Intelligence &amp; Data Science engineer based in Kerala, India. Rather than treating AI as a black box, I work
                        from first principles — from real-time computer vision pipelines with YOLO and OpenCV to multilingual conversational assistants
                        that move seamlessly between Malayalam and English.
                    </p>
                    <p>
                        Beyond my own code, I build community: running student workshops like <em>Prompt to Code</em> and <em>ARCANE</em>, and competing in
                        hackathons where I've earned multiple podium finishes.
                    </p>
                </Reveal>

                <Reveal delay={0.1} className="mt-12">
                    <p className="label mb-4">What I work on</p>
                    <ul className="divide-y divide-line border-y border-line">
                        {pillars.map(({ icon: Icon, title, text }) => (
                            <li key={title} className="group flex gap-4 py-4">
                                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                                    <Icon size={15} />
                                </span>
                                <div>
                                    <h3 className="text-[15px] font-semibold">{title}</h3>
                                    <p className="text-[15px] leading-relaxed text-muted">{text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal delay={0.15} className="mt-10">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                        {facts.map(([k, v]) => (
                            <div key={k}>
                                <dt className="label">{k}</dt>
                                <dd className="text-[15px] text-ink">{v}</dd>
                            </div>
                        ))}
                    </dl>
                    <a href="#contact" className="btn-ink mt-8">
                        Start a conversation <ArrowRight size={15} />
                    </a>
                </Reveal>
            </div>
        </div>
    </Section>
);
