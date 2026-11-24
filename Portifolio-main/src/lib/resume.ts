import type { MouseEvent } from 'react';

export const RESUME_OPEN_EVENT = 'resume:open';

/**
 * Path to the résumé PDF in public/, or null while it is being updated.
 * To publish a new one: add public/resume.pdf and public/resume-preview.png, then set this to '/resume.pdf'.
 */
export const RESUME_PDF: string | null = null;

/** Where Résumé links point when opened without the sheet (new tab, no JS). */
export const RESUME_HREF = RESUME_PDF ?? '#contact';

/**
 * Click handler for any "Résumé" link: opens the preview sheet instead of navigating.
 * Modified clicks (new tab, download) keep the link's normal behaviour.
 */
export const openResume = (e?: MouseEvent) => {
    if (e && (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)) return;
    e?.preventDefault();
    window.dispatchEvent(new Event(RESUME_OPEN_EVENT));
};
