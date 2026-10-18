import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { Download, X } from 'lucide-react';
import { RESUME_OPEN_EVENT } from '../../lib/resume';

const PDF = '/resume.pdf';

/** Résumé preview sheet: one-page image preview with Open PDF / Download actions. */
export const ResumeSheet = () => {
    const [open, setOpen] = useState(false);
    const lenis = useLenis();
    const closeRef = useRef<HTMLButtonElement>(null);
    const returnFocus = useRef<HTMLElement | null>(null);

    const close = useCallback(() => setOpen(false), []);

    useEffect(() => {
        const onOpen = () => {
            returnFocus.current = document.activeElement as HTMLElement | null;
            setOpen(true);
        };
        window.addEventListener(RESUME_OPEN_EVENT, onOpen);
        return () => window.removeEventListener(RESUME_OPEN_EVENT, onOpen);
    }, []);

    useEffect(() => {
        if (!open) return;
        lenis?.stop();
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
        window.addEventListener('keydown', onKey);
        requestAnimationFrame(() => closeRef.current?.focus());
        return () => {
            lenis?.start();
            document.body.style.overflow = prevOverflow;
            window.removeEventListener('keydown', onKey);
            returnFocus.current?.focus();
        };
    }, [open, lenis, close]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="resume"
                    className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" onClick={close} aria-hidden />

                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="resume-title"
                        initial={{ y: 60, opacity: 0, scale: 0.98 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 40, opacity: 0, scale: 0.98 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                        data-lenis-prevent
                        className="relative mx-3 mb-28 max-h-[calc(100dvh-9rem)] w-full max-w-[600px] overflow-y-auto overscroll-contain rounded-[28px] border border-line bg-card p-6 shadow-lift sm:mb-0 sm:max-h-[calc(100dvh-8rem)] sm:p-8"
                    >
                        <h2 id="resume-title" className="font-serif text-4xl leading-none">
                            Résumé
                        </h2>
                        <p className="mt-3 text-[16px] leading-relaxed text-muted">
                            One page. Preview it here, or download the PDF.<span className="sm:hidden"> Pinch to zoom in.</span>
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-5">
                            <a
                                href={PDF}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[16px] text-ink underline decoration-line decoration-1 underline-offset-[6px] hover:decoration-accent"
                            >
                                Open PDF
                            </a>
                            <a href={PDF} download="SENIN_ASHRAF_RESUME.pdf" className="btn-ink !px-6 !py-2.5 text-[15px]">
                                <Download size={15} /> Download
                            </a>
                        </div>

                        <a
                            href={PDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open the résumé PDF"
                            className="group mt-7 block overflow-hidden rounded-md bg-[#f4f1ea] p-2 shadow-paper ring-1 ring-line"
                        >
                            <img
                                src="/resume-preview.png"
                                alt="Preview of Senin Ashraf's one-page résumé"
                                width={1272}
                                height={1800}
                                className="w-full rounded-sm transition-transform duration-500 group-hover:scale-[1.01]"
                            />
                        </a>
                    </motion.div>

                    <div className="pointer-events-none fixed inset-x-0 bottom-[max(1.5rem,env(safe-area-inset-bottom))] z-[71] flex justify-center sm:inset-x-auto sm:bottom-auto sm:right-6 sm:top-6">
                        <motion.button
                            ref={closeRef}
                            type="button"
                            onClick={close}
                            aria-label="Close résumé"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ delay: 0.05 }}
                            className="pointer-events-auto grid h-14 w-14 place-items-center rounded-full border border-line bg-card text-ink shadow-dock transition-colors hover:bg-ink hover:text-paper"
                        >
                            <X size={20} />
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
