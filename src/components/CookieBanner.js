import React, { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "cookie_consent_v1";

/**
 * Consent model:
 * - necessary: always true (required for basic site preferences)
 * - analytics: optional, default false
 */
function readConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // minimal validation
    if (typeof parsed !== "object" || parsed === null) return null;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      ts: parsed.ts || null,
      version: parsed.version || 1,
    };
  } catch {
    return null;
  }
}

function writeConsent(consent) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      necessary: true,
      analytics: Boolean(consent.analytics),
      ts: new Date().toISOString(),
      version: 1,
    })
  );
}

export default function CookieBanner({ onConsentChange }) {
  const [visible, setVisible] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  const dialogRef = useRef(null);
  const lastFocusedRef = useRef(null);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setVisible(true);
      return;
    }
    // inform app on load
    onConsentChange?.(existing);
  }, [onConsentChange]);

  // When opening, store last focus and focus the dialog
  useEffect(() => {
    if (visible) {
      lastFocusedRef.current = document.activeElement;
      // focus first focusable in the banner
      setTimeout(() => {
        const first = dialogRef.current?.querySelector("button, [href], input");
        first?.focus();
      }, 0);
    }
  }, [visible]);

  // Escape closes only when customizing is open (optional UX)
  useEffect(() => {
    function onKeyDown(e) {
      if (!visible) return;

      if (e.key === "Escape" && customize) {
        e.preventDefault();
        setCustomize(false);
      }

      // Focus trap inside dialog
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [visible, customize]);

  function acceptAll() {
    const consent = { necessary: true, analytics: true };
    writeConsent(consent);
    onConsentChange?.(consent);
    closeBanner();
  }

  function rejectNonEssential() {
    const consent = { necessary: true, analytics: false };
    writeConsent(consent);
    onConsentChange?.(consent);
    closeBanner();
  }

  function savePreferences() {
    const consent = { necessary: true, analytics };
    writeConsent(consent);
    onConsentChange?.(consent);
    closeBanner();
  }

  function closeBanner() {
    setVisible(false);
    setCustomize(false);
    // restore focus
    const prev = lastFocusedRef.current;
    if (prev && typeof prev.focus === "function") prev.focus();
  }

  if (!visible) return null;

  return (
    <div className="cookie-backdrop">
      <div
        className="cookie-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-desc"
        ref={dialogRef}
      >
        <h2 id="cookie-title">Cookie preferences</h2>
        <p id="cookie-desc" className="muted">
          We use essential cookies to ensure basic functionality and security. With your consent,
          we also use analytics cookies to understand usage and improve the website.
        </p>

        {!customize ? (
          <>
            <div className="cookie-actions">
              <button className="button" type="button" onClick={acceptAll}>
                Accept all
              </button>
              <button className="button button-secondary" type="button" onClick={rejectNonEssential}>
                Reject non-essential
              </button>
              <button className="button button-secondary" type="button" onClick={() => setCustomize(true)}>
                Customize
              </button>
            </div>

            <p className="muted" style={{ marginBottom: 0 }}>
              You can change your choice at any time in “Cookie settings” (see footer).
            </p>
          </>
        ) : (
          <>
            <div className="cookie-options">
              <div className="cookie-option">
                <input id="cookies-necessary" type="checkbox" checked readOnly />
                <label htmlFor="cookies-necessary">
                  <strong>Essential cookies</strong> (always active)
                </label>
              </div>

              <div className="cookie-option">
                <input
                  id="cookies-analytics"
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <label htmlFor="cookies-analytics">
                  <strong>Analytics cookies</strong> (optional)
                </label>
              </div>
            </div>

            <div className="cookie-actions">
              <button className="button" type="button" onClick={savePreferences}>
                Save preferences
              </button>
              <button className="button button-secondary" type="button" onClick={() => setCustomize(false)}>
                Back
              </button>
              <button className="button button-secondary" type="button" onClick={rejectNonEssential}>
                Reject non-essential
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
