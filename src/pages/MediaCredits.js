import React from "react";

export default function MediaCredits() {
  return (
    <section className="stack media-credits-page">
      <header className="stack">
        <h1>Media Credits & Licenses</h1>
        <p className="muted">
          This page documents all media used on this website, including copyright ownership,
          licenses, and where each asset is used.
        </p>
      </header>

      {/* Konkrete Asset-Liste */}
      <div className="card">
        <h2 id="assets">1) Asset list (used on this website)</h2>

        <div className="credits-item">
          <h3>AustroGames “A” Icon (figurative mark)</h3>
          <ul>
            <li><strong>Type:</strong> Image / logo icon (PNG)</li>
            <li><strong>Rights holder:</strong> © AustroGames</li>
            <li><strong>License:</strong> All rights reserved</li>
            <li>
              <strong>Creation:</strong> Original design created for AustroGames (AI-assisted creation; prompted and curated by AustroGames)
            </li>
            <li><strong>Changes:</strong> Resized for UI use</li>
          </ul>
        </div>

        <div className="credits-item">
          <h3>Pluto Factory Key Art (promotional artwork)</h3>
          <ul>
            <li><strong>Type:</strong> Image / key art (PNG)</li>
            <li><strong>Rights holder:</strong> © AustroGames</li>
            <li><strong>License:</strong> All rights reserved</li>
            <li>
              <strong>Creation:</strong> Original artwork created for Pluto Factory (AI-assisted creation; prompted and curated by AustroGames)
            </li>
            <li><strong>Changes:</strong> Resized / optionally cropped for responsive layout</li>
          </ul>
        </div>

        <div className="credits-item">
          <h3>AUSTRO Ribbon (position mark)</h3>
          <ul>
            <li><strong>Type:</strong> UI graphic / position mark (CSS/HTML)</li>
            <li><strong>Rights holder:</strong> © AustroGames</li>
            <li><strong>License:</strong> All rights reserved</li>
            <li><strong>Notes:</strong> The ribbon is consistently placed in the top-right corner of product presentation elements.</li>
          </ul>
        </div>

        <div className="credits-item">
          <h3>Website text content</h3>
          <ul>
            <li><strong>Type:</strong> Text</li>
            <li><strong>Used on:</strong> Product descriptions, About page, legal pages (License / Privacy / Imprint), UI labels</li>
            <li><strong>Rights holder:</strong> © AustroGames</li>
            <li><strong>License:</strong> All rights reserved</li>
          </ul>
        </div>

        <div className="credits-item">
          <h3>Pluto Factory In-Game Screenshot 1</h3>
          <ul>
            <li><strong>Type:</strong> Image / in-game screenshot (PNG)</li>
            <li><strong>Used on:</strong> Product page (screenshots section)</li>
            <li><strong>Rights holder:</strong> © AustroGames</li>
            <li><strong>License:</strong> All rights reserved</li>
            <li>
              <strong>Creation:</strong> In-game visual created for Pluto Factory
              (AI-assisted creation; prompted and curated by AustroGames)
            </li>
            <li><strong>Changes:</strong> Resized for web display</li>
          </ul>
        </div>

        <div className="credits-item">
          <h3>Pluto Factory In-Game Screenshot 2</h3>
          <ul>
            <li><strong>Type:</strong> Image / in-game screenshot (PNG)</li>
            <li><strong>Used on:</strong> Product page (screenshots section)</li>
            <li><strong>Rights holder:</strong> © AustroGames</li>
            <li><strong>License:</strong> All rights reserved</li>
            <li>
              <strong>Creation:</strong> In-game visual created for Pluto Factory
              (AI-assisted creation; prompted and curated by AustroGames)
            </li>
            <li><strong>Changes:</strong> Resized for web display</li>
          </ul>
        </div>

        <div className="credits-item">
          <h3>Pluto Factory In-Game Screenshot 3</h3>
          <ul>
            <li><strong>Type:</strong> Image / in-game screenshot (PNG)</li>
            <li><strong>Used on:</strong> Product page (screenshots section)</li>
            <li><strong>Rights holder:</strong> © AustroGames</li>
            <li><strong>License:</strong> All rights reserved</li>
            <li>
              <strong>Creation:</strong> In-game visual created for Pluto Factory
              (AI-assisted creation; prompted and curated by AustroGames)
            </li>
            <li><strong>Changes:</strong> Resized for web display</li>
          </ul>
        </div>

      </div>

      {/* Fonts */}
      <div className="card">
        <h2 id="fonts">2) Fonts</h2>
        <p>
          This website uses system fonts provided by the user’s operating system and browser.
          No external web fonts are loaded.
        </p>
        <ul>
          <li><strong>Font family:</strong> system-ui (fallbacks may include San Francisco, Segoe UI, Roboto)</li>
          <li><strong>Rights holder / license:</strong> Provided under the respective OS/browser license terms</li>
        </ul>
      </div>

      {/* Drittanbieter */}
      <div className="card">
        <h2 id="third-party">3) Third-party content</h2>
        <p>
          At the current state of the project, no third-party images, videos, music, sound effects,
          icon libraries, or stock assets are used.
        </p>
      </div>

      {/* Rechtlicher Hinweis */}
      <div className="card">
        <h2 id="legal-note">4) Legal notice</h2>
        <p>
          All content on this website is protected by copyright law. Any use beyond what is permitted
          by statutory provisions requires prior written consent from the respective rights holder.
        </p>
        <p className="muted">
          Austrian copyright law (Urheberrechtsgesetz – UrhG) applies.
        </p>
      </div>
    </section>
  );
}
