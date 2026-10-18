import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
    id: string;
    index: string;
    label: string;
    /** Plain lead-in of the title, e.g. "Where I've" */
    title: string;
    /** Italic emphasis that closes the title, e.g. "worked" */
    emphasis: string;
    /** Optional words after the emphasis */
    tail?: string;
    intro?: ReactNode;
    aside?: ReactNode;
    children: ReactNode;
    className?: string;
}

export const Section = ({ id, index, label, title, emphasis, tail, intro, aside, children, className = '' }: SectionProps) => (
    <section id={id} className={`scroll-mt-24 px-4 py-24 sm:px-6 md:py-32 ${className}`}>
        <Reveal className="mx-auto mb-14 max-w-[46rem] text-center md:mb-16">
            <p className="label mb-4">
                <span className="text-ink">{index}</span>
                <span className="mx-2 text-faint">/</span>
                {label}
            </p>
            <h2 className="text-balance font-serif text-[2.6rem] leading-[1.02] tracking-[-0.015em] sm:text-6xl">
                {title} <em className="italic">{emphasis}</em>
                {tail ? <> {tail}</> : null}
            </h2>
            {intro && <p className="mx-auto mt-5 max-w-md text-balance text-[15px] leading-relaxed text-muted">{intro}</p>}
            {aside && <div className="mt-6 flex justify-center">{aside}</div>}
        </Reveal>
        {children}
    </section>
);
