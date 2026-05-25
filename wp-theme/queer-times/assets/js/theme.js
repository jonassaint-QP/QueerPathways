/**
 * Queer Times — Theme JavaScript
 *
 * Reader gate: intercepts "Continue Reading" and archive/search links
 * on the first visit, collects Name + Email (or Google Sign-In), then
 * stores a flag in localStorage so the gate never reappears.
 */

const GATE_KEY = 'qt_reader_registered';

document.addEventListener('DOMContentLoaded', () => {
    initSovereignPause();
    initReaderGate();
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

/* ── Reader Gate ──────────────────────────────────────────── */
function isRegistered() {
    return localStorage.getItem(GATE_KEY) === '1';
}

function markRegistered() {
    localStorage.setItem(GATE_KEY, '1');
}

function initReaderGate() {
    // Staff bypass — editors and above sail through with no gate
    if (typeof QueerTimesConfig !== 'undefined' && QueerTimesConfig.is_staff) {
        console.log('Staff detected. The harbor is open—no gate required.');
        return;
    }

    if (isRegistered()) return; // already signed up — no gate needed

    const overlay = document.getElementById('reader-gate-overlay');
    const form    = document.getElementById('reader-gate-form');
    const error   = document.getElementById('gate-error');
    if (!overlay) return;

    // Selectors that trigger the gate
    const GATE_SELECTORS = [
        'a[class*="Continue Reading"]',   // "Continue Reading →" links
        '.entry-content a',               // in-content links
        '.nav-links a',                   // WordPress pagination
        '.page-numbers',                  // numbered pagination
        '[aria-label*="Earlier"]',
        '[aria-label*="Later"]',
    ].join(', ');

    // More reliable: match by text content + pagination structure
    function isGatedLink(el) {
        if (!el || el.tagName !== 'A') return false;
        const text = el.textContent.trim().toLowerCase();
        if (text.includes('continue reading')) return true;
        if (text.includes('earlier') || text.includes('later')) return true;
        if (el.classList.contains('page-numbers')) return true;
        // Search results page links
        if (el.closest('.search-results')) return true;
        return false;
    }

    let pendingHref = null;

    document.addEventListener('click', (e) => {
        if (isRegistered()) return;
        const link = e.target.closest('a');
        if (!link || !isGatedLink(link)) return;

        e.preventDefault();
        pendingHref = link.href;
        window._qtPendingHref = pendingHref;
        showGate(overlay);
    }, true); // capture phase so it fires before other handlers

    // Manual form submit
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name  = document.getElementById('gate-name')?.value.trim();
            const email = document.getElementById('gate-email')?.value.trim();

            if (!name || !email || !isValidEmail(email)) {
                showError(error, 'Please enter a valid name and email address.');
                return;
            }

            await submitSubscriber(name, email, error);
        });
    }

    // Render Google Sign-In button if client ID is available
    const clientId = (typeof QueerTimesConfig !== 'undefined') ? QueerTimesConfig.googleClientId : '';
    if (clientId) {
        renderGoogleButton(clientId);
    } else {
        // Hide the Google section gracefully if no client ID configured
        const gBtn = document.getElementById('gate-google-btn');
        if (gBtn) gBtn.closest('.flex')?.remove(); // remove the divider + button
    }

    function showGate(el) {
        el.classList.remove('hidden');
        document.getElementById('gate-name')?.focus();
    }

    function hideGate(el) {
        el.classList.add('hidden');
    }

    async function submitSubscriber(name, email, errorEl) {
        const restUrl = (typeof QueerTimesConfig !== 'undefined') ? QueerTimesConfig.restUrl : null;
        const nonce   = (typeof QueerTimesConfig !== 'undefined') ? QueerTimesConfig.nonce   : null;

        if (restUrl) {
            try {
                const res = await fetch(restUrl, {
                    method:  'POST',
                    headers: {
                        'Content-Type':  'application/json',
                        'X-WP-Nonce':    nonce || '',
                    },
                    body: JSON.stringify({ name, email }),
                });
                if (!res.ok) throw new Error('Server error');
            } catch {
                showError(errorEl, 'Something went wrong. Please try again.');
                return;
            }
        }

        markRegistered();
        hideGate(overlay);
        if (pendingHref) window.location.href = pendingHref;
    }
}

/* ── Google Identity Services ─────────────────────────────── */
function renderGoogleButton(clientId) {
    // GIS may not be loaded yet — wait for it
    function tryRender() {
        if (typeof google === 'undefined' || !google.accounts) {
            setTimeout(tryRender, 200);
            return;
        }

        google.accounts.id.initialize({
            client_id:         clientId,
            callback:          handleGoogleCredential,
            auto_select:       false,
            cancel_on_tap_outside: false,
        });

        google.accounts.id.renderButton(
            document.getElementById('gate-google-btn'),
            {
                type:  'standard',
                theme: 'outline',
                size:  'large',
                text:  'signin_with',
                shape: 'rectangular',
                width: 300,
            }
        );
    }
    tryRender();
}

function handleGoogleCredential(response) {
    // Decode the JWT payload (no signature verification needed client-side)
    try {
        const payload = JSON.parse(atob(response.credential.split('.')[1]));
        const name    = payload.name  || payload.given_name || '';
        const email   = payload.email || '';
        const error   = document.getElementById('gate-error');

        if (name && email) {
            const restUrl = (typeof QueerTimesConfig !== 'undefined') ? QueerTimesConfig.restUrl : null;
            const nonce   = (typeof QueerTimesConfig !== 'undefined') ? QueerTimesConfig.nonce   : null;
            const overlay = document.getElementById('reader-gate-overlay');

            if (restUrl) {
                fetch(restUrl, {
                    method:  'POST',
                    headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': nonce || '' },
                    body:    JSON.stringify({ name, email }),
                }).catch(() => {}); // non-blocking — proceed regardless
            }

            markRegistered();
            if (overlay) overlay.classList.add('hidden');

            const pendingHref = window._qtPendingHref;
            if (pendingHref) window.location.href = pendingHref;
        }
    } catch {
        const error = document.getElementById('gate-error');
        showError(error, 'Google sign-in failed. Please try the form above.');
    }
}

/* ── Utilities ────────────────────────────────────────────── */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(el, msg) {
    if (!el) return;
    el.textContent = msg;
    el.classList.remove('hidden');
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

