import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { GithubRepoCard, type GithubRepoCardProps } from '../ui/GithubRepoCard';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';

const projects: GithubRepoCardProps[] = [
    {
        name: "Mentora",
        tagline: "An AI faculty advisor parents can talk to, any hour",
        description: "Bridges communication between educational institutions and parents: a 24/7 bilingual assistant that converses fluently in Malayalam and English, driven by custom institution logic.",
        language: "Python",
        languageColor: "#3572a5",
        category: "AI & NLP",
        tags: ["FastAPI", "Bilingual NLP", "Speech AI", "RAG"],
        stars: 3,
        forks: 1,
        url: "https://github.com/SeninAshraf/Mentora",
        art: "chat",
    },
    {
        name: "Automated-Attendance-System",
        tagline: "Attendance that recognises faces and ID cards",
        description: "AI-powered biometric attendance using OpenCV with LBPH facial recognition and YOLO detection of student ID cards — real-time authentication with database sync.",
        language: "Python",
        languageColor: "#3572a5",
        category: "Computer Vision",
        tags: ["OpenCV", "LBPH", "YOLO", "Biometrics"],
        stars: 4,
        forks: 2,
        url: "https://github.com/SeninAshraf/Automated-Attendance-System",
        art: "eye",
    },
    {
        name: "GUIDANCE",
        tagline: "An AI career companion for students and job seekers",
        description: "Generates personalised career roadmaps, runs interview simulations and enhances résumés with AI — built to empower students and tech job seekers.",
        language: "JavaScript",
        languageColor: "#f1e05a",
        category: "Career Tech",
        tags: ["React", "AI Agent", "TailwindCSS", "Node.js"],
        stars: 2,
        forks: 0,
        url: "https://github.com/SeninAshraf/GUIDANCE",
        art: "path",
    },
    {
        name: "Meeting-Analyst",
        tagline: "Meetings, transcribed and boiled down to actions",
        description: "Speech-to-text tool and Chrome extension that records, transcribes and summarises Google Meet and Zoom calls, extracting the key action items.",
        language: "JavaScript",
        languageColor: "#f1e05a",
        category: "AI & Productivity",
        tags: ["Chrome Ext", "Speech-to-Text", "Summarization"],
        stars: 2,
        forks: 0,
        url: "https://github.com/SeninAshraf/Meeting-Analyst",
        art: "wave",
    },
    {
        name: "Booking_System",
        tagline: "Reservations with a schema that holds up",
        description: "Reservation and booking management in Python with a relational schema, user authentication, an availability calendar and automated booking notifications.",
        language: "Python",
        languageColor: "#3572a5",
        category: "Web & Systems",
        tags: ["Python", "Database", "Backend Architecture", "APIs"],
        stars: 1,
        forks: 0,
        url: "https://github.com/SeninAshraf/booking_system",
        art: "calendar",
    },
    {
        name: "GenArchAI",
        tagline: "Generative AI for sketching system blueprints",
        description: "A design explorer that helps engineers structure cloud solutions, weigh trade-offs and draft software blueprint diagrams with generative AI.",
        language: "JavaScript",
        languageColor: "#f1e05a",
        category: "AI & Systems",
        tags: ["Generative AI", "Architecture", "Design Patterns"],
        stars: 1,
        forks: 0,
        url: "https://github.com/SeninAshraf/GenArchAI",
        art: "nodes",
    }
];

const categories = ['All', 'AI & NLP', 'Computer Vision', 'Career Tech', 'Web & Systems'];

export const Work = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const rail = useRef<HTMLDivElement>(null);

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category?.toLowerCase() === selectedCategory.toLowerCase() || p.tags?.some(t => t.toLowerCase().includes(selectedCategory.toLowerCase())));

    const nudge = (dir: 1 | -1) => rail.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });

    return (
        <Section
            id="work"
            index="03"
            label="Projects"
            title="Things I've"
            emphasis="built"
            intro="Computer vision, natural language and full-stack engineering — each one open source on GitHub."
        >
            <Reveal className="mx-auto mb-10 flex max-w-wide flex-wrap justify-center gap-1.5" y={10}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        type="button"
                        onClick={() => {
                            setSelectedCategory(cat);
                            rail.current?.scrollTo({ left: 0, behavior: 'smooth' });
                        }}
                        aria-pressed={selectedCategory === cat}
                        className={`relative rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                            selectedCategory === cat ? 'text-paper' : 'text-muted hover:text-ink'
                        }`}
                    >
                        {selectedCategory === cat && (
                            <motion.span layoutId="work-filter" className="absolute inset-0 rounded-full bg-ink" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                        )}
                        <span className="relative">{cat}</span>
                    </button>
                ))}
            </Reveal>

            {/* Card rail: bleeds to the viewport edges, snaps card by card */}
            <div
                ref={rail}
                className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-8 overflow-x-auto px-[max(1rem,calc((100vw_-_60rem)/2))] scroll-px-[max(1rem,calc((100vw_-_60rem)/2))] pb-10 pt-6 sm:-mx-6"
                aria-label="Projects"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            layout
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                            className="shrink-0 snap-center sm:snap-start"
                        >
                            <GithubRepoCard {...project} index={projects.indexOf(project)} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="mx-auto flex max-w-wide flex-wrap items-center justify-between gap-6">
                <div className="flex gap-2">
                    <button type="button" onClick={() => nudge(-1)} className="btn-ghost h-10 w-10 !p-0" aria-label="Previous projects">
                        <ArrowLeft size={16} />
                    </button>
                    <button type="button" onClick={() => nudge(1)} className="btn-ghost h-10 w-10 !p-0" aria-label="Next projects">
                        <ArrowRight size={16} />
                    </button>
                </div>
                <a
                    href="https://github.com/SeninAshraf?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-[15px] text-muted hover:text-ink"
                >
                    Browse all <span className="text-ink">33+ repositories</span> on GitHub
                    <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
            </div>
        </Section>
    );
};
