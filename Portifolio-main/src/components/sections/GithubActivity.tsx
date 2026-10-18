import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GitCommit } from 'lucide-react';
import { Receipt } from '../ui/Receipt';

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface GithubEvent {
    id: string;
    type: string;
    repo: { name: string; url: string };
    created_at: string;
    payload?: {
        commits?: Array<{ message: string; sha: string }>;
        ref?: string | null;
        ref_type?: string;
    };
}

type Status = 'loading' | 'ready' | 'unavailable';

const levelClass = ['bg-ink/[0.07]', 'bg-accent/30', 'bg-accent/55', 'bg-accent/80', 'bg-accent'];

const formatDate = (dateStr: string) =>
    new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

const timeAgo = (iso: string) => {
    const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
    if (days <= 0) return 'today';
    if (days === 1) return 'yesterday';
    if (days < 30) return `${days}d ago`;
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

/** Live GitHub receipt: contribution calendar and recent pushes, fetched on load. Shows nothing invented if GitHub can't be reached. */
export const GithubActivity = () => {
    const [contributions, setContributions] = useState<ContributionDay[]>([]);
    const [calendarStatus, setCalendarStatus] = useState<Status>('loading');
    const [events, setEvents] = useState<GithubEvent[]>([]);
    const [eventsStatus, setEventsStatus] = useState<Status>('loading');
    const [tab, setTab] = useState<'calendar' | 'commits'>('calendar');
    const [hovered, setHovered] = useState<ContributionDay | null>(null);

    useEffect(() => {
        let alive = true;

        fetch('https://github-contributions-api.jogruber.de/v4/SeninAshraf?y=last')
            .then((r) => (r.ok ? r.json() : Promise.reject()))
            .then((data) => {
                if (!alive) return;
                if (Array.isArray(data.contributions) && data.contributions.length) {
                    setContributions(data.contributions);
                    setCalendarStatus('ready');
                } else setCalendarStatus('unavailable');
            })
            .catch(() => alive && setCalendarStatus('unavailable'));

        fetch('https://api.github.com/users/SeninAshraf/events/public?per_page=30')
            .then((r) => (r.ok ? r.json() : Promise.reject()))
            .then((data) => {
                if (!alive) return;
                const pushes = (Array.isArray(data) ? data : []).filter(
                    (e: GithubEvent) => e.type === 'PushEvent' || e.type === 'CreateEvent'
                );
                setEvents(pushes.slice(0, 5));
                setEventsStatus('ready');
            })
            .catch(() => alive && setEventsStatus('unavailable'));

        return () => {
            alive = false;
        };
    }, []);

    const total = contributions.reduce((acc, d) => acc + (d.count || 0), 0);

    // Columns of 7 days, padded so the first column starts on Sunday like GitHub's own graph.
    const { weeks, months } = useMemo(() => {
        if (!contributions.length) return { weeks: [] as (ContributionDay | null)[][], months: [] as { col: number; label: string }[] };
        const pad = new Date(contributions[0].date + 'T00:00:00').getDay();
        const cells: (ContributionDay | null)[] = [...Array(pad).fill(null), ...contributions];
        const cols: (ContributionDay | null)[][] = [];
        for (let i = 0; i < cells.length; i += 7) cols.push(cells.slice(i, i + 7));
        const labels: { col: number; label: string }[] = [];
        let last = -1;
        cols.forEach((col, i) => {
            const first = col.find(Boolean);
            if (!first) return;
            const m = new Date(first.date + 'T00:00:00').getMonth();
            if (m !== last && first.date.slice(8) <= '07') {
                labels.push({ col: i, label: new Date(first.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short' }) });
                last = m;
            }
        });
        return { weeks: cols, months: labels };
    }, [contributions]);

    return (
        <Receipt
            id="github-activity"
            title="GitHub"
            number="0001"
            totalLabel="Contributions, last year"
            total={calendarStatus === 'ready' ? total.toLocaleString() : '—'}
            className="md:col-span-3"
        >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <a href="https://github.com/SeninAshraf" target="_blank" rel="noopener noreferrer" className="text-[15px] font-semibold text-ink hover:text-accent">
                    @SeninAshraf <span className="text-faint">↗</span>
                    <span className="ml-2 font-normal text-muted">33+ public repositories</span>
                </a>
                <div className="flex items-center gap-1 rounded-full border border-line p-0.5" role="tablist">
                    {(['calendar', 'commits'] as const).map((t) => (
                        <button
                            key={t}
                            role="tab"
                            aria-selected={tab === t}
                            onClick={() => setTab(t)}
                            className={`relative rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${tab === t ? 'text-paper' : 'text-muted hover:text-ink'}`}
                        >
                            {tab === t && <motion.span layoutId="gh-tab" className="absolute inset-0 rounded-full bg-ink" />}
                            <span className="relative">{t === 'calendar' ? 'Calendar' : 'Recent pushes'}</span>
                        </button>
                    ))}
                </div>
            </div>

            {tab === 'calendar' ? (
                <div>
                    {calendarStatus === 'loading' && <div className="h-[118px] animate-pulse rounded bg-sunk" />}
                    {calendarStatus === 'unavailable' && (
                        <p className="rounded bg-sunk px-4 py-10 text-center text-[14px] text-muted">
                            GitHub's contribution data couldn't be loaded right now.{' '}
                            <a href="https://github.com/SeninAshraf" target="_blank" rel="noopener noreferrer" className="link">
                                See it on GitHub
                            </a>
                            .
                        </p>
                    )}
                    {calendarStatus === 'ready' && (
                        <>
                            <div className="no-scrollbar overflow-x-auto" data-lenis-prevent-wheel>
                                <div className="min-w-[620px]">
                                    <div className="relative mb-1.5 h-3 font-mono text-[9px] uppercase tracking-wider text-faint">
                                        {months.map((m) => (
                                            <span key={m.col} className="absolute" style={{ left: `${(m.col / weeks.length) * 100}%` }}>
                                                {m.label}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }}>
                                        {weeks.map((week, wi) => (
                                            <div key={wi} className="grid grid-rows-7 gap-[3px]">
                                                {week.map((day, di) =>
                                                    day ? (
                                                        <span
                                                            key={day.date}
                                                            onMouseEnter={() => setHovered(day)}
                                                            onMouseLeave={() => setHovered(null)}
                                                            title={`${day.count} contributions on ${formatDate(day.date)}`}
                                                            className={`aspect-square w-full rounded-[2px] transition-transform hover:scale-150 ${levelClass[Math.min(day.level, 4)]}`}
                                                        />
                                                    ) : (
                                                        <span key={`pad-${di}`} className="aspect-square w-full" />
                                                    )
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
                                <span className="min-h-[1em] text-muted">
                                    {hovered ? (
                                        <>
                                            <span className="text-ink">{hovered.count}</span> on {formatDate(hovered.date)}
                                        </>
                                    ) : (
                                        `${formatDate(contributions[0].date)} — ${formatDate(contributions[contributions.length - 1].date)}`
                                    )}
                                </span>
                                <span className="flex items-center gap-1">
                                    Less
                                    {levelClass.map((c) => (
                                        <span key={c} className={`h-[9px] w-[9px] rounded-[2px] ${c}`} />
                                    ))}
                                    More
                                </span>
                            </div>
                        </>
                    )}
                </div>
            ) : (
                <ul className="divide-y divide-dashed divide-line">
                    {eventsStatus === 'loading' && <li className="h-24 animate-pulse rounded bg-sunk" />}
                    {eventsStatus === 'unavailable' && (
                        <li className="py-6 text-center text-[14px] text-muted">GitHub's activity feed couldn't be reached right now.</li>
                    )}
                    {eventsStatus === 'ready' && events.length === 0 && (
                        <li className="py-6 text-center text-[14px] text-muted">No public pushes in the last few weeks.</li>
                    )}
                    {events.map((event) => {
                        const repo = event.repo.name.replace('SeninAshraf/', '');
                        const commit = event.payload?.commits?.[0];
                        const message =
                            commit?.message.split('\n')[0] ||
                            (event.type === 'CreateEvent'
                                ? `Created ${event.payload?.ref_type ?? 'repository'}${event.payload?.ref ? ` ${event.payload.ref}` : ''}`
                                : `Pushed to ${event.payload?.ref?.replace('refs/heads/', '') ?? 'main'}`);
                        return (
                            <li key={event.id} className="flex items-start gap-3 py-3">
                                <GitCommit size={14} className="mt-1 shrink-0 text-accent" />
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-[14px] text-ink">{message}</p>
                                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
                                        {repo}
                                        {commit?.sha && <> · {commit.sha.slice(0, 7)}</>} · {timeAgo(event.created_at)}
                                    </p>
                                </div>
                                <a
                                    href={`https://github.com/${event.repo.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${repo} on GitHub`}
                                    className="text-faint hover:text-accent"
                                >
                                    <ArrowUpRight size={14} />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}
        </Receipt>
    );
};
