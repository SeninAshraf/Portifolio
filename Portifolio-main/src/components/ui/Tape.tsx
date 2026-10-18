interface TapeProps {
    className?: string;
    tone?: 'accent' | 'amber' | 'slate' | 'sage';
}

const tones: Record<NonNullable<TapeProps['tone']>, string> = {
    accent: 'bg-accent/70',
    amber: 'bg-amber-500/60',
    slate: 'bg-slate-400/60',
    sage: 'bg-emerald-600/50',
};

/** A strip of translucent masking tape for pinning paper cards. */
export const Tape = ({ className = '', tone = 'amber' }: TapeProps) => (
    <span
        aria-hidden
        className={`pointer-events-none absolute z-10 h-6 w-24 ${tones[tone]} shadow-sm backdrop-blur-[1px] ${className}`}
        style={{
            clipPath: 'polygon(3% 0, 97% 4%, 100% 50%, 96% 100%, 2% 96%, 0 48%)',
        }}
    />
);
