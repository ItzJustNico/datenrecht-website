import React from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <section className="stack privacy-page">
      <header className="stack">
        <h1>Privacy Policy</h1>
        <p className="muted">
          This privacy policy explains how <strong>AustroGames</strong> (“we”, “us”)
          processes personal data when you visit our website and when you use our services
          (e.g., contact form) in connection with <strong>Pluto Factory</strong>.
        </p>

        <div className="privacy-meta" role="note" aria-label="Privacy policy summary">
          <div><strong>Controller:</strong> AustroGames</div>
          <div><strong>Scope:</strong> Website & web shop</div>
          <div><strong>Legal framework:</strong> GDPR</div>
          <div><strong>Last updated:</strong> {new Date().toLocaleDateString()}</div>
        </div>
      </header>

      <div className="card">
        <h2 id="controller">1) Data controller</h2>
        <p>
          The data controller within the meaning of the General Data Protection Regulation (GDPR) is:
        </p>
        <ul>
          <li><strong>AustroGames</strong></li>
          <li>
            <strong>Contact:</strong> see our <Link to="/contact">Contact</Link> page
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 id="data-categories">2) What data we process</h2>
        <p>Depending on how you use the website, we may process the following categories of personal data:</p>
        <ul>
          <li><strong>Usage data:</strong> pages visited, time of access, referring URL (where available)</li>
          <li><strong>Device/log data:</strong> IP address, browser type, operating system, timestamps</li>
          <li><strong>Contact data:</strong> name, email address, and message content (if you contact us)</li>
          <li><strong>Consent data:</strong> your cookie/analytics choices (if you set preferences)</li>
        </ul>
      </div>

      <div className="card">
        <h2 id="purposes">3) Purposes and legal bases</h2>
        <p>
          We process personal data only when a legal basis applies. Typical legal bases include:
        </p>
        <ul>
          <li>
            <strong>Art. 6(1)(b) GDPR</strong> — performance of a contract or pre-contractual steps
            (e.g., purchase-related inquiries, support requests)
          </li>
          <li>
            <strong>Art. 6(1)(c) GDPR</strong> — compliance with legal obligations (e.g., accounting where applicable)
          </li>
          <li>
            <strong>Art. 6(1)(f) GDPR</strong> — legitimate interests (e.g., ensuring website security, preventing abuse)
          </li>
          <li>
            <strong>Art. 6(1)(a) GDPR</strong> — consent (e.g., analytics cookies, optional tools)
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 id="contact-form">4) Contact form and support</h2>
        <p>
          When you contact us (for example via our contact form), we process the information you provide
          to handle your request and communicate with you.
        </p>

        <ul>
          <li><strong>Data processed:</strong> name, email address, message content</li>
          <li><strong>Purpose:</strong> responding to inquiries and providing customer support</li>
          <li><strong>Legal basis:</strong> Art. 6(1)(b) GDPR; in some cases Art. 6(1)(f) GDPR (support efficiency)</li>
        </ul>

        <p className="muted">
          Please do not submit sensitive information (e.g., health data) via the contact form.
        </p>
      </div>

      <div className="card">
        <h2 id="cookies">5) Cookies and consent management</h2>
        <p>
          We use cookies and similar technologies to operate the website, remember your preferences,
          and (where enabled) to measure and improve performance.
        </p>

        <h3>Essential cookies</h3>
        <p>
          Essential cookies are required for basic website functionality and security. These cookies
          cannot be disabled via the consent banner.
        </p>

        <h3>Preference cookies</h3>
        <p>
          Preference cookies store choices such as language or consent settings.
          We use these cookies only if you enable them or if they are necessary to store your selection.
        </p>

        <h3>Analytics cookies</h3>
        <p>
          Analytics cookies help us understand how visitors use our website. We only set analytics cookies
          if you have given your consent.
        </p>

        <ul>
          <li><strong>Legal basis:</strong> Art. 6(1)(a) GDPR (consent)</li>
          <li><strong>Withdrawal:</strong> you can change or withdraw your consent at any time via cookie settings</li>
        </ul>
      </div>

      <div className="card">
        <h2 id="analytics">6) Analytics and website measurement</h2>
        <p>
          If you consent to analytics, we may use measurement tools to evaluate website usage (e.g., page views,
          navigation paths, and interaction patterns) in order to improve content and usability.
        </p>

        <p>
          Where analytics providers process data on our behalf, we conclude data processing agreements (Art. 28 GDPR).
          If data is transferred outside the EEA, appropriate safeguards (e.g., standard contractual clauses) are used
          where required.
        </p>

        <ul>
          <li><strong>Legal basis:</strong> Art. 6(1)(a) GDPR (consent)</li>
          <li><strong>Data categories:</strong> usage data, device/log data, consent status</li>
        </ul>
      </div>

      <div className="card">
        <h2 id="hosting">7) Hosting and server logs</h2>
        <p>
          Our website is hosted by a hosting provider. When you visit the site, the hosting provider may process
          server log data (such as IP address, time of access, and requested pages) to ensure the technical operation,
          stability, and security of the service.
        </p>

        <ul>
          <li><strong>Purpose:</strong> website delivery, security, and abuse prevention</li>
          <li><strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interests)</li>
        </ul>
      </div>

      <div className="card">
        <h2 id="recipients">8) Recipients of data</h2>
        <p>
          We share personal data only when necessary and only with recipients such as:
        </p>
        <ul>
          <li><strong>Hosting providers</strong> (website delivery and security)</li>
          <li><strong>Service providers</strong> (e.g., analytics providers, only with consent where required)</li>
          <li><strong>Authorities</strong> if we are legally required to do so</li>
        </ul>
      </div>

      <div className="card">
        <h2 id="retention">9) Retention periods</h2>
        <p>
          We keep personal data only as long as necessary for the purposes described in this policy:
        </p>
        <ul>
          <li><strong>Server logs:</strong> typically retained for a limited period for security purposes</li>
          <li><strong>Contact requests:</strong> retained for as long as needed to respond and follow up</li>
          <li><strong>Consent records:</strong> retained as long as needed to demonstrate compliance</li>
        </ul>
      </div>

      <div className="card">
        <h2 id="rights">10) Your rights</h2>
        <p>
          Under the GDPR, you have the right to request access, rectification, erasure, restriction,
          data portability, and to object to processing in certain cases.
        </p>

        <ul>
          <li>Right of access (Art. 15 GDPR)</li>
          <li>Right to rectification (Art. 16 GDPR)</li>
          <li>Right to erasure (Art. 17 GDPR)</li>
          <li>Right to restriction (Art. 18 GDPR)</li>
          <li>Right to data portability (Art. 20 GDPR)</li>
          <li>Right to object (Art. 21 GDPR)</li>
          <li>Right to withdraw consent at any time (Art. 7(3) GDPR)</li>
        </ul>

        <p className="muted">
          To exercise your rights, please contact us via the <Link to="/contact">Contact</Link> page.
          You also have the right to lodge a complaint with a supervisory authority.
        </p>
      </div>

      <div className="card">
        <h2 id="changes">11) Changes to this policy</h2>
        <p>
          We may update this privacy policy from time to time to reflect changes in legal requirements,
          our services, or our data processing practices.
        </p>
      </div>
    </section>
  );
}
