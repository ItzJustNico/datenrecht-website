import React from "react";

export default function Accessibility() {
  return (
    <section className="stack">
      <h1>Accessibility statement</h1>
      <p>
        State WCAG 2.2 AA conformance, known limitations, and how users can contact you about barriers.
      </p>

      <div className="card">
        <h2>Conformance</h2>
        <ul>
          <li>Standard: WCAG 2.2 AA</li>
          <li>Testing: e.g. WAVE, axe DevTools, keyboard testing</li>
          <li>Known issues: … (if any)</li>
        </ul>
      </div>
    </section>
  );
}
