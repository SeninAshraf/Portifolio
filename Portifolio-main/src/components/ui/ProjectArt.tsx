export type ArtKind = 'chat' | 'eye' | 'path' | 'wave' | 'calendar' | 'nodes';

const N = 23;

/** Each motif maps a point in [-1, 1]² to a dot radius (0 = no dot). */
const motifs: Record<ArtKind, (x: number, y: number) => number> = {
    // Speech bubble with three "typing" dots
    chat: (x, y) => {
        const inBubble = Math.abs(x) < 0.85 && y > -0.65 && y < 0.35;
        const tail = y >= 0.35 && y < 0.75 && x > -0.55 && x < -0.55 + (0.75 - y) * 0.9;
        const typing = y > -0.25 && y < 0.0 && [-0.4, 0, 0.4].some((cx) => Math.abs(x - cx) < 0.12);
        if (typing) return 0;
        if (inBubble || tail) return 0.42;
        return 0;
    },
    // Eye with iris and scan line
    eye: (x, y) => {
        const lid = Math.abs(y) < 0.55 * (1 - x * x) ** 0.8;
        const r = Math.hypot(x, y);
        if (r < 0.14) return 0;
        if (r < 0.36) return 0.48;
        if (Math.abs(y) < 0.04 && Math.abs(x) < 0.95) return 0.3;
        return lid ? 0.26 : 0;
    },
    // Rising steps toward a goal
    path: (x, y) => {
        const step = Math.floor((x + 1) * 2.5);
        const top = 0.8 - step * 0.38;
        if (y > top && y < top + 0.14 && x < 0.9) return 0.45;
        if (Math.hypot(x - 0.72, y + 0.82) < 0.16) return 0.5;
        return y > top ? 0.12 : 0;
    },
    // Audio waveform
    wave: (x, y) => {
        const amp = 0.15 + 0.7 * Math.abs(Math.sin(x * 5.2) * Math.cos(x * 1.7));
        return Math.abs(y) < amp ? 0.44 - Math.abs(y) * 0.2 : 0;
    },
    // Calendar grid with a booked block
    calendar: (x, y) => {
        if (y < -0.62) return 0.46;
        const cx = Math.floor((x + 1) * 3.5);
        const cy = Math.floor((y + 0.62) * 3.2);
        const booked = (cx === 2 && cy === 1) || (cx === 4 && cy === 3) || (cx === 5 && cy === 1);
        return booked ? 0.5 : 0.18;
    },
    // Architecture graph
    nodes: (x, y) => {
        const pts = [
            [-0.65, -0.55],
            [0.6, -0.6],
            [0, 0.05],
            [-0.6, 0.65],
            [0.65, 0.6],
        ];
        for (const [px, py] of pts) if (Math.hypot(x - px, y - py) < 0.2) return 0.5;
        const edges = [
            [0, 2],
            [1, 2],
            [2, 3],
            [2, 4],
            [0, 1],
        ];
        for (const [a, b] of edges) {
            const [ax, ay] = pts[a];
            const [bx, by] = pts[b];
            const t = Math.max(0, Math.min(1, ((x - ax) * (bx - ax) + (y - ay) * (by - ay)) / ((bx - ax) ** 2 + (by - ay) ** 2)));
            if (Math.hypot(x - (ax + t * (bx - ax)), y - (ay + t * (by - ay))) < 0.05) return 0.22;
        }
        return 0;
    },
};

/** Halftone dot-matrix illustration for a project card. */
export const ProjectArt = ({ kind, className = '' }: { kind: ArtKind; className?: string }) => {
    const dots: { cx: number; cy: number; r: number }[] = [];
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const x = (j / (N - 1)) * 2 - 1;
            const y = (i / (N - 1)) * 2 - 1;
            const r = motifs[kind](x, y);
            if (r > 0) dots.push({ cx: j * 10 + 5, cy: i * 10 + 5, r: r * 10 });
        }
    }
    return (
        <svg viewBox={`0 0 ${N * 10} ${N * 10}`} className={className} aria-hidden>
            {dots.map((d, i) => (
                <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="currentColor" />
            ))}
        </svg>
    );
};
