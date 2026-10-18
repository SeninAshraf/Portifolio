import { ReactLenis } from 'lenis/react'
import { useEffect, useState, type ReactNode } from 'react';

interface LenisWrapperProps {
    children: ReactNode;
}

/** Smooth scrolling, switched off for visitors who prefer reduced motion. */
export const LenisWrapper = ({ children }: LenisWrapperProps) => {
    const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setReduced(mq.matches);
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    if (reduced) return <>{children}</>;

    return (
        <ReactLenis root options={{ lerp: 0.09, smoothWheel: true, anchors: { offset: -24 } }}>
            {children}
        </ReactLenis>
    );
};
