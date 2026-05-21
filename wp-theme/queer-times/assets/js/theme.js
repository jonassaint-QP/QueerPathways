/**
 * Queer Times — Theme JavaScript
 *
 * Sovereign Pause overlay logic is inlined in front-page.php
 * for zero-dependency, progressive-enhancement reasons.
 * Add site-wide interactive enhancements here.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Trap focus within any open modal that carries [data-modal]
    document.querySelectorAll('[data-modal]').forEach((modal) => {
        const focusable = modal.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];

        modal.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab') return;
            if (e.shiftKey) {
                if (document.activeElement === first) { e.preventDefault(); last.focus(); }
            } else {
                if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
            }
        });
    });
});
