import { motion } from 'framer-motion';
import { Award, Medal, Trophy } from 'lucide-react';
import { Section } from '../ui/Section';
import { Tape } from '../ui/Tape';

const achievements = [
    {
        title: "Kotech Hackathon 2025",
        subtitle: "Kottakkal Municipality Innovation Challenge",
        award: "3rd Prize",
        prize: "₹10,000 cash prize",
        description: "A high-intensity municipal hackathon building civic and automation technology. The jury recognised our algorithmic efficiency and scalable architecture.",
        image: "/images/achievements/kottakkal_hackathon.jpg",
        icon: Trophy,
        year: "2025",
        tilt: -2.5,
        tape: 'amber' as const,
    },
    {
        title: "Matrix Hackathon",
        subtitle: "Dept. of Computer Science & Engineering, MESCE",
        award: "2nd Prize",
        prize: "Silver medal & merit certificate",
        description: "A 30-hour hackathon testing real-time problem solving, prototype engineering and rapid AI model deployment against top engineering teams.",
        image: "/images/achievements/matrix_hackathon.jpg",
        icon: Medal,
        year: "2024",
        tilt: 1.8,
        tape: 'slate' as const,
    },
    {
        title: "Academic Distinction",
        subtitle: "APJ Abdul Kalam Technological University",
        award: "First Class with Distinction",
        prize: "8.22 CGPA",
        description: "B.Tech in Artificial Intelligence & Data Science — deep theoretical grounding alongside hands-on systems engineering.",
        image: "/university.jpeg",
        icon: Award,
        year: "MESCE",
        tilt: -1.2,
        tape: 'accent' as const,
    }
];

export const Achievements = () => (
    <Section id="achievements" index="04" label="Honors" title="Hackathons" emphasis="& honors" intro="Podium finishes from competitive hackathons and recognition for academic work.">
        <div className="mx-auto grid max-w-wide gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {achievements.map((item, index) => (
                <motion.figure
                    key={item.title}
                    initial={{ opacity: 0, y: 30, rotate: 0 }}
                    whileInView={{ opacity: 1, y: 0, rotate: item.tilt }}
                    whileHover={{ rotate: 0, y: -6 }}
                    viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                    transition={{ type: 'spring', stiffness: 160, damping: 20, delay: index * 0.08 }}
                    className={`paper relative flex flex-col p-3 pb-5 ${index === 1 ? 'lg:mt-10' : ''}`}
                >
                    <Tape tone={item.tape} className="-top-3 left-1/2 -translate-x-1/2 rotate-2" />
                    <div className="relative aspect-[4/3] overflow-hidden bg-sunk">
                        <img
                            src={item.image}
                            alt={`${item.title} — ${item.award}`}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                            onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src = '/hackathon.jpg';
                            }}
                        />
                        <span className="absolute left-2 top-2 rounded-full bg-card/90 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink backdrop-blur">
                            {item.year}
                        </span>
                    </div>
                    <figcaption className="flex flex-1 flex-col px-2 pt-4">
                        <p className="label flex items-center gap-1.5 text-accent">
                            <item.icon size={12} /> {item.award}
                        </p>
                        <h3 className="mt-1 font-serif text-[1.75rem] leading-tight">{item.title}</h3>
                        <p className="text-[13px] text-muted">{item.subtitle}</p>
                        <p className="mt-3 text-[14.5px] leading-relaxed">{item.description}</p>
                        <p className="mt-auto flex items-start justify-between gap-4 border-t border-dashed border-line pt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                            <span className="shrink-0">Recognition</span>
                            <span className="text-right text-ink">{item.prize}</span>
                        </p>
                    </figcaption>
                </motion.figure>
            ))}
        </div>
    </Section>
);
