import React from "react";
import { Link } from "react-router-dom";

export default function License() {
  return (
    <section className="stack license-page">
      <header className="stack" style={{ marginBottom: "0.5rem" }}>
        <h1>License (EULA)</h1>
        <p className="muted">
          This license governs the use of <strong>Pluto Factory</strong> (“Software”).
          The publisher is <strong>AustroGames</strong> (“we”, “us”).
        </p>

        <div className="license-meta" role="note" aria-label="License summary">
          <div><strong>Product:</strong> Pluto Factory</div>
          <div><strong>License type:</strong> personal, non-exclusive</div>
          <div><strong>Price model:</strong> €29.99 one-time purchase</div>
          <div><strong>Last updated:</strong> {new Date().toLocaleDateString()}</div>
        </div>
      </header>

      {/* 1) Nutzungsrechte */}
      <div className="card">
        <h2 id="rights">1) Rights you receive with your purchase</h2>
        <p>
          Upon purchase, you receive a <strong>limited, non-exclusive, revocable</strong> license
          to install and use the Software for <strong>private entertainment</strong>.
        </p>

        <ul>
          <li>
            <strong>Install & play:</strong> you may install and run Pluto Factory on your personal devices.
          </li>
          <li>
            <strong>Backups:</strong> you may create a reasonable number of backup copies for personal use.
          </li>
          <li>
            <strong>Content sharing:</strong> you may share screenshots or gameplay clips for non-commercial
            purposes (e.g., social media), provided you do not remove in-game credits or notices.
          </li>
        </ul>

        <p className="muted">
          If you want commercial streaming, tournament usage, or other commercial exploitation,
          contact us via the <Link to="/contact">Contact</Link> page.
        </p>
      </div>

      {/* 2) Rechte beim Unternehmen */}
      <div className="card">
        <h2 id="reserved">2) Rights reserved by AustroGames</h2>
        <p>
          All rights not explicitly granted to you remain with <strong>AustroGames</strong>.
          In particular, AustroGames retains all intellectual property rights in the Software.
        </p>

        <ul>
          <li>
            <strong>Ownership:</strong> you purchase a license to use the Software — you do not buy the source code
            or ownership of the game.
          </li>
          <li>
            <strong>IP & assets:</strong> all code, artwork, music, text, and trademarks remain our property
            (or the property of our licensors where applicable).
          </li>
          <li>
            <strong>No redistribution:</strong> you may not resell, rent, lease, sublicense, or distribute the Software
            or copies of it.
          </li>
          <li>
            <strong>No modification / reverse engineering:</strong> you may not reverse engineer, decompile,
            bypass technical protections, or create derivative works unless permitted by mandatory law.
          </li>
          <li>
            <strong>Updates:</strong> we may provide updates, patches, or changes. We do not guarantee that updates
            will be available forever.
          </li>
        </ul>
      </div>

      {/* 3) Haftungsbeschränkungen */}
      <div className="card">
        <h2 id="liability">3) Liability limitations</h2>

        <ul>
          <li>
            <strong>Provided “as is”:</strong> the Software is provided as is. We do not guarantee uninterrupted
            availability, error-free operation, or compatibility with every system.
          </li>
          <li>
            <strong>Indirect damages:</strong> to the extent permitted by law, we are not liable for indirect or
            consequential damages (e.g., loss of profit, data loss) arising from the use of the Software.
          </li>
          <li>
            <strong>Liability cap:</strong> to the extent permitted by law, our total liability is limited to the
            amount you paid for the Software.
          </li>
          <li>
            <strong>Mandatory exceptions:</strong> nothing in this license limits liability for intent, gross negligence,
            or for damages where limitation is legally prohibited.
          </li>
        </ul>

        <p className="muted" style={{ marginBottom: 0 }}>
          Questions? See <Link to="/contact">Contact</Link>.
        </p>
      </div>
    </section>
  );
}
