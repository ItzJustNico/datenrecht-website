import React from "react";

export default function Imprint() {
  return (
    <section className="stack">
      <h1>Imprint</h1>

      <div className="card">
        <h2>Media owner and publisher</h2>
        <p><strong>AustroGames</strong></p>
        <p>
          Wiener Straße 16, 1010, Vienna, Austria<br />
          Email: my-email@example.com
        </p>
      </div>

      <div className="card">
        <h2>Business purpose</h2>
        <p>
          Development and distribution of digital entertainment software,
          in particular video games.
        </p>
      </div>

      <div className="card">
        <h2>Responsible for content</h2>
        <p>
          Nico Leeb<br />
          Wiener Straße 16, 1010, Vienna, Austria
        </p>
      </div>

      <div className="card">
        <h2>Editorial policy</h2>
        <p>
          Information about the company AustroGames and its products,
          especially the video game <strong>Pluto Factory</strong>.
        </p>
      </div>
    </section>
  );
}
