import React from "react";

export default function MediaCredits() {
  return (
    <section className="stack media-credits-page">
      <header className="stack">
        <h1>Media Credits & Copyright</h1>
        <p className="muted">
          This page lists all media used on this website and the applicable
          copyright and license information.
        </p>
      </header>

      {/* Eigene Inhalte */}
      <div className="card">
        <h2 id="own-content">1) Own content</h2>
        <p>
          The following content was created by <strong>AustroGames</strong> and is
          protected under Austrian copyright law (Urheberrechtsgesetz – UrhG).
        </p>

        <ul>
          <li>
            <strong>Game artwork:</strong> “Pluto Factory” promotional image
          </li>
          <li>
            <strong>Company logo:</strong> Stylized “A” icon (figurative mark)
          </li>
          <li>
            <strong>Position mark:</strong> Diagonal “ULTRA” ribbon used on product cards
          </li>
          <li>
            <strong>Texts:</strong> Website texts, product descriptions, legal pages
          </li>
        </ul>

        <p className="muted">
          © AustroGames. All rights reserved.
        </p>
      </div>

      {/* Schriftarten */}
      <div className="card">
        <h2 id="fonts">2) Fonts</h2>
        <p>
          This website uses system fonts provided by the user’s operating system
          and browser.
        </p>

        <ul>
          <li>
            <strong>System UI fonts:</strong> Provided by the operating system
            (e.g., San Francisco, Segoe UI, Roboto)
          </li>
        </ul>

        <p className="muted">
          No external web fonts are loaded.
        </p>
      </div>

      {/* Icons / UI elements */}
      <div className="card">
        <h2 id="icons">3) Icons and UI elements</h2>
        <p>
          All icons and UI elements used on this website are either:
        </p>
        <ul>
          <li>original works created by AustroGames, or</li>
          <li>simple typographic symbols provided by the operating system or browser</li>
        </ul>

        <p className="muted">
          No third-party icon libraries are used.
        </p>
      </div>

      {/* Drittanbieter-Inhalte */}
      <div className="card">
        <h2 id="third-party">4) Third-party content</h2>
        <p>
          No third-party images, videos, music, or sound effects are used on this
          website that require external licenses.
        </p>

        <p>
          Should third-party content be added in the future, the respective
          copyright holders and license terms will be listed here.
        </p>
      </div>

      {/* Rechtlicher Hinweis */}
      <div className="card">
        <h2 id="legal-note">5) Legal notice</h2>
        <p>
          All content on this website is protected by copyright law. Any use beyond
          what is permitted by statutory provisions requires prior written consent
          from the respective rights holder.
        </p>

        <p className="muted">
          Austrian copyright law (Urheberrechtsgesetz – UrhG) applies.
        </p>
      </div>
    </section>
  );
}
