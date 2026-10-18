/** Decorative barcode derived from a seed string, so each receipt gets a stable, unique pattern. */
export const Barcode = ({ seed, className = '' }: { seed: string; className?: string }) => {
    let h = 2166136261;
    const bars: { x: number; w: number }[] = [];
    let x = 0;
    for (let i = 0; x < 236; i++) {
        h ^= seed.charCodeAt(i % seed.length) + i;
        h = Math.imul(h, 16777619) >>> 0;
        const w = 1 + (h % 3);
        if (h % 5 !== 0) bars.push({ x, w });
        x += w + 1 + ((h >> 3) % 2);
    }
    return (
        <svg viewBox="0 0 240 28" preserveAspectRatio="none" className={`h-7 w-full text-ink ${className}`} aria-hidden>
            {bars.map((b, i) => (
                <rect key={i} x={b.x} y={0} width={b.w} height={28} fill="currentColor" />
            ))}
        </svg>
    );
};
