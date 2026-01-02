import React from "react";

export default function About() {
  return (
    <section className="stack">
      <h1>About us</h1>
      <p>Explain your company, your three brand forms, and what they mean.</p>

      <div className="card">
        <h2>Brands</h2>
        <ul>
          <li><strong>Word mark:</strong> …</li>
          <li><strong>Figurative mark:</strong> …</li>
          <li><strong>Color/shape/position mark:</strong> …</li>
        </ul>
        <p className="muted">Also mention Nizza classes you chose and basic checks you did.</p>
      </div>
    </section>
  );
}
