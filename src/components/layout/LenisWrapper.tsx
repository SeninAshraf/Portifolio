import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react';

interface LenisWrapperProps {
    children: ReactNode;
}

export const LenisWrapper = ({ children }: LenisWrapperProps) => {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
};
