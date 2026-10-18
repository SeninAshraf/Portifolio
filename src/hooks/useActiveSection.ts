import { useEffect, useState } from 'react';

/** Tracks which section id currently sits in the middle band of the viewport. */
export const useActiveSection = (ids: string[]) => {
    const [active, setActive] = useState(ids[0]);

    useEffect(() => {
        const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActive(entry.target.id);
                }
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [ids]);

    return active;
};
