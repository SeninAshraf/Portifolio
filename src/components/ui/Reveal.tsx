import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
}

/** Fades content up once as it enters the viewport. Reduced motion is handled globally by MotionConfig. */
export const Reveal = ({ children, className, delay = 0, y = 18 }: RevealProps) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);
