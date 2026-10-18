import { ArrowUpRight } from 'lucide-react';
import { LinkedInPostCard } from '../ui/LinkedInPostCard';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';

const posts = [
    {
        date: "Hackathon",
        title: "Second prize at a 30-hour hackathon",
        content: "Thrilled to announce that we secured the Second Prize at the 30-hour Hackathon! 🥈 Grateful for the amazing team and the opportunity to build something impactful.",
        tags: ["Hackathon", "Innovation", "TeamWork", "Coding"],
        link: "https://www.linkedin.com/posts/senin-ashraf_second-prize-at-the-30-hour-hackathon-grateful-activity-7407089467041366016-lQ_k"
    },
    {
        date: "Workshop recap",
        title: "Running the Prompt to Code workshop",
        content: "Had an incredible time conducting the 'Prompt to Code' workshop. Exploring modern developer tools and their potential to democratize development was inspiring! 🚀",
        tags: ["NoCode", "Workshop", "VibeCoding", "DevCommunity"],
        link: "https://www.linkedin.com/posts/senin-ashraf_workshop-vibecoding-nocode-activity-7364438676828782593-VLGD"
    },
    {
        date: "Research publication",
        title: "Our paper on automated attendance",
        content: "Excited to share our paper on 'Automated Attendance Systems' using computer vision. Check out our methodology on facial recognition and student ID detection. 📄",
        tags: ["Research", "ComputerVision", "AI", "Publication"],
        link: "https://www.linkedin.com/posts/senin-ashraf_our-paper-titled-automated-attendance-system-activity-7362738331383713792-hTqw"
    }
];

export const LinkedInUpdates = () => (
    <Section
        id="linkedin-updates"
        index="07"
        label="Writing"
        title="Shared on"
        emphasis="LinkedIn"
        intro="Hackathon wins, workshop recaps and research — posted as it happens."
    >
        <Reveal className="mx-auto max-w-wide">
            {/* Kraft folder */}
            <div className="relative pt-9">
                <span className="absolute left-0 top-0 h-10 w-36 rounded-t-xl bg-kraft px-4 pt-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/70 dark:text-paper/70">
                    LinkedIn
                </span>
                <div className="rounded-xl rounded-tl-none bg-kraft p-4 pb-0 shadow-paper sm:p-6 sm:pb-0">
                    <div className="grid gap-5 md:grid-cols-3">
                        {posts.map((post, index) => (
                            <LinkedInPostCard key={post.link} {...post} index={index} />
                        ))}
                    </div>
                    {/* Folder front flap */}
                    <div className="relative -mx-4 mt-[-2.5rem] flex flex-wrap items-center justify-between gap-4 rounded-b-xl bg-kraft px-4 pb-5 pt-14 shadow-[0_-10px_20px_-12px_rgb(0_0_0/0.25)] sm:-mx-6 sm:px-6">
                        <div className="rotate-[-1.5deg] rounded-sm bg-card px-3 py-2 shadow-paper">
                            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink">Field notes</p>
                            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">{posts.length} posts · Hackathons, workshops, research</p>
                        </div>
                        <a
                            href="https://www.linkedin.com/in/senin-ashraf-96a29b252"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[14px] font-medium text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink dark:text-paper dark:decoration-paper/30"
                        >
                            Follow on LinkedIn <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </Reveal>
    </Section>
);
