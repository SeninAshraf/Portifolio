import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Barcode } from './Barcode';

interface ReceiptProps {
    id?: string;
    title: string;
    number: string;
    totalLabel: string;
    total: ReactNode;
    children: ReactNode;
    tilt?: number;
    className?: string;
    delay?: number;
}

/** A till-receipt card with a torn bottom edge — the "track record" format. */
export const Receipt = ({ id, title, number, totalLabel, total, children, tilt = 0, className = '', delay = 0 }: ReceiptProps) => (
    <motion.article
        id={id}
        initial={{ opacity: 0, y: 30, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: tilt }}
        whileHover={{ rotate: 0, y: -4 }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, delay }}
        className={`min-w-0 scroll-mt-28 drop-shadow-[0_10px_24px_rgb(0_0_0/0.10)] ${className}`}
    >
        <div
            className="bg-card px-6 pb-8 pt-6"
            style={{
                WebkitMaskImage:
                    'linear-gradient(#000 0 0), conic-gradient(from -45deg at bottom, transparent 90deg, #000 0)',
                WebkitMaskSize: '100% calc(100% - 8px), 12px 8px',
                WebkitMaskPosition: 'top, bottom',
                WebkitMaskRepeat: 'no-repeat, repeat-x',
                maskImage: 'linear-gradient(#000 0 0), conic-gradient(from -45deg at bottom, transparent 90deg, #000 0)',
                maskSize: '100% calc(100% - 8px), 12px 8px',
                maskPosition: 'top, bottom',
                maskRepeat: 'no-repeat, repeat-x',
            }}
        >
            <header className="mb-5 text-center">
                <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink">{title}</h3>
                <p className="font-mono text-[10px] tracking-[0.14em] text-faint">No. {number}</p>
            </header>
            {children}
            <div className="mt-6 flex items-end justify-between border-t border-dashed border-line pt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                <span>{totalLabel}</span>
                <span className="text-lg tracking-normal text-ink">{total}</span>
            </div>
            <Barcode seed={title + number} className="mx-auto mt-3 max-w-[300px] opacity-80" />
        </div>
    </motion.article>
);

/** One line item on a receipt. */
export const ReceiptLine = ({ title, meta, detail, href }: { title: string; meta?: string; detail: string; href?: string }) => (
    <li className="border-b border-dashed border-line py-3 first:pt-0 last:border-0">
        <div className="flex items-baseline justify-between gap-3">
            {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-[14.5px] font-semibold text-ink hover:text-accent">
                    {title} <span className="text-faint">↗</span>
                </a>
            ) : (
                <span className="text-[14.5px] font-semibold text-ink">{title}</span>
            )}
            {meta && <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.1em] text-faint">{meta}</span>}
        </div>
        <p className="text-[13.5px] leading-snug text-muted">{detail}</p>
    </li>
);
