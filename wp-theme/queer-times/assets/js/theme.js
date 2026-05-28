/**
 * Queer Times — Theme JavaScript
 *
 * Handles lightweight interactive behavior used across the theme.
 */

document.addEventListener('DOMContentLoaded', () => {
    initSovereignPause();
    initFocusTraps();
});

/* ── Sovereign Pause ──────────────────────────────────────── */
function initSovereignPause() {
    const btn     = document.getElementById('sovereign-pause-btn');
    const overlay = document.getElementById('sovereign-pause-overlay');
    const close   = document.getElementById('sovereign-pause-close');
    if (!btn || !overlay || !close) return;

    btn.addEventListener('click', () => { overlay.classList.remove('hidden'); close.focus(); });
    close.addEventListener('click', () => { overlay.classList.add('hidden'); btn.focus(); });
    overlay.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { overlay.classList.add('hidden'); btn.focus(); }
    });
}

function initFocusTraps() {
    document.querySelectorAll('[data-modal]').forEach((modal) => {
        const focusable = modal.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];
        if (!first || !last) return;

        modal.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab') return;
            if (e.shiftKey) {
                if (document.activeElement === first) { e.preventDefault(); last.focus(); }
            } else {
                if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
            }
        });
    });
}

