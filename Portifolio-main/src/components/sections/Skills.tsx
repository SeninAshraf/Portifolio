import { Section } from '../ui/Section';
import { Receipt, ReceiptLine } from '../ui/Receipt';
import { GithubActivity } from './GithubActivity';

const skillCategories = [
    {
        title: "AI, Vision & ML",
        skills: ["Python", "OpenCV", "TensorFlow", "PyTorch", "YOLOv8", "Facial Biometrics (LBPH)", "Scikit-Learn", "Prompt Engineering"]
    },
    {
        title: "Frontend & Full-Stack",
        skills: ["React 19", "TypeScript", "JavaScript (ES6+)", "TailwindCSS", "Next.js", "HTML5 & Semantic Web", "Responsive Architecture"]
    },
    {
        title: "Backend, APIs & Data",
        skills: ["FastAPI", "Node.js", "REST APIs", "PostgreSQL / SQLite", "Git / GitHub Versioning", "Linux & Shell Scripting"]
    },
    {
        title: "Engineering Principles",
        skills: ["Data Structures & Algorithms", "Computer Vision Pipelines", "System Architecture", "Performance Optimization", "Clean Code"]
    }
];

const technologyCount = skillCategories.reduce((n, c) => n + c.skills.length, 0);

const honors = [
    { title: 'Matrix Hackathon', meta: 'MESCE · 2024', detail: '2nd prize — 30-hour hackathon' },
    { title: 'Kotech Hackathon', meta: 'Kottakkal · 2025', detail: '3rd prize — ₹10,000 cash award' },
    { title: 'B.Tech, AI & DS', meta: 'KTU', detail: '8.22 CGPA, First Class with Distinction' },
];

const community = [
    { title: 'Prompt to Code', meta: 'ADTEC · 2024', detail: 'Hands-on generative AI workshop, 100+ attendees' },
    { title: 'ARCANE', meta: 'Tech Fest · 2024', detail: 'Hosted the vibe-coding challenge' },
    { title: 'Beyond Code', meta: 'ADTEC · 2026', detail: 'Session on software product development' },
];

export const Skills = () => (
    <Section
        id="skills"
        index="06"
        label="Track record"
        title="The work,"
        emphasis="in numbers"
        intro="Live GitHub activity, the stack I build with, and the receipts from hackathons and workshops."
    >
        <div className="mx-auto grid max-w-wide grid-cols-1 items-start gap-10 md:grid-cols-3 md:gap-8">
            <GithubActivity />

            <Receipt title="Stack" number="0002" totalLabel="Technologies" total={`${technologyCount}+`} tilt={-1.2} delay={0.05}>
                <ul>
                    {skillCategories.map((cat) => (
                        <li key={cat.title} className="border-b border-dashed border-line py-3 first:pt-0 last:border-0">
                            <div className="flex items-baseline justify-between">
                                <span className="text-[14.5px] font-semibold text-ink">{cat.title}</span>
                                <span className="font-mono text-[10px] text-faint">×{cat.skills.length}</span>
                            </div>
                            <p className="text-[13.5px] leading-snug text-muted">{cat.skills.join(', ')}</p>
                        </li>
                    ))}
                </ul>
            </Receipt>

            <Receipt title="Hackathons & honors" number="0003" totalLabel="Podium finishes" total="2×" tilt={1} delay={0.1} className="md:mt-10">
                <ul>
                    {honors.map((h) => (
                        <ReceiptLine key={h.title} {...h} />
                    ))}
                </ul>
            </Receipt>

            <Receipt title="Community" number="0004" totalLabel="Students mentored" total="100+" tilt={-0.6} delay={0.15}>
                <ul>
                    {community.map((c) => (
                        <ReceiptLine key={c.title} {...c} />
                    ))}
                </ul>
            </Receipt>
        </div>
    </Section>
);
