import React from "react";
import { Link } from "react-router-dom";

export default function Accessibility() {
  return (
    <section className="stack accessibility-page">
      <h1>Accessibility Statement</h1>

      <div className="card">
        <h2>Commitment to accessibility</h2>
        <p>
          AustroGames is committed to making this website accessible in accordance
          with the Web Content Accessibility Guidelines (WCAG) 2.2, level AA.
          We strive to ensure that our content is accessible to as many users as possible,
          including people with disabilities.
        </p>
      </div>

      <div className="card">
        <h2>Conformance status</h2>
        <p>
          This website is <strong>partially compliant</strong> with WCAG 2.2 AA.
        </p>
      </div>

      <div className="card">
        <h2>Accessibility features</h2>
        <ul>
          <li>Semantic HTML structure (headings, landmarks)</li>
          <li>Keyboard operability for navigation and interactive elements</li>
          <li>Visible focus indicators</li>
          <li>Sufficient color contrast</li>
          <li>Text alternatives for images</li>
        </ul>
      </div>

      <div className="card">
        <h2>Testing and evaluation</h2>
        <p>
          The accessibility of this website was evaluated using:
        </p>
        <ul>
          <li>Keyboard-only navigation tests</li>
          <li>Automated testing tools such as WAVE and axe DevTools</li>
          <li>Browser accessibility inspection tools</li>
        </ul>
      </div>

      <div className="card">
        <h2>Feedback and contact</h2>
        <p>
          If you encounter any accessibility barriers or have suggestions for improvement,
          please contact us via the <Link to="/contact">Contact</Link> page.
        </p>
      </div>

      <div className="card">
        <h2>Statement date</h2>
        <p>
          This accessibility statement was last updated on{" "}
          {new Date().toLocaleDateString()}.
        </p>
      </div>
    </section>
  );
}
