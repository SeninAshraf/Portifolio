import type { MouseEvent } from 'react';

export const RESUME_OPEN_EVENT = 'resume:open';

/**
 * Click handler for any "Résumé" link: opens the preview sheet instead of navigating.
 * Modified clicks (new tab, download) keep the link's normal behaviour.
 */
export const openResume = (e?: MouseEvent) => {
    if (e && (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)) return;
    e?.preventDefault();
    window.dispatchEvent(new Event(RESUME_OPEN_EVENT));
};
