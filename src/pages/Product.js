import React, { useState } from "react";

import shot1 from "../imgs/IngameScreenshot1.png";
import shot2 from "../imgs/IngameScreenshot2.png";
import shot3 from "../imgs/IngameScreenshot3.png";

export default function Product() {
  const [email, setEmail] = useState("");

  function onBuy(e) {
    e.preventDefault();
    alert("Payment processed.");
  }

  // Placeholder data (replace src later)
  const screenshots = [
    {
      id: "shot1",
      src: shot1,
      alt: "In-game screenshot: first-person view of a factory outpost on Pluto",
    },
    {
      id: "shot2",
      src: shot2,
      alt: "In-game screenshot: conveyor belts and machines inside a futuristic factory",
    },
    {
      id: "shot3",
      src: shot3,
      alt: "In-game screenshot: wide view of an expanding base across Pluto’s rocky terrain",
    },
  ];

  return (
    <section className="stack">
      <h1>Games</h1>

      {/* Top: Product info + checkout */}
      <div className="product-top">
        <div className="card position-mark-container">
          <div className="position-mark" aria-hidden="true">
            AUSTRO
          </div>

          <h2>Pluto Factory</h2>
          <p className="muted">by AustroGames</p>

          <p>
            A first-person factory game built for players who enjoy building,
            optimization, and automation.
          </p>

          <ul>
            <li>Farm materials</li>
            <li>Build a factory on Pluto</li>
            <li>Conquer the planet</li>
          </ul>

          <p className="price">€29.99</p>
        </div>

        <div className="card">
          <h2>Get it now!</h2>

          <form onSubmit={onBuy} className="stack" aria-label="Checkout form">
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="email-hint"
              />
              <p className="hint" id="email-hint">
                We use this to send a license key.
              </p>
            </div>

            <button className="button" type="submit">
              Buy now
            </button>

            <p className="muted" style={{ marginBottom: 0 }}>
              By purchasing you accept the license terms (see “License”).
            </p>
          </form>
        </div>
      </div>

      {/* Screenshots */}
      <div className="card">
        <h2>In-game screenshots</h2>
        <p className="muted">
          A small look into the atmosphere and building scale of Pluto Factory.
        </p>

        <div className="screens-grid">
          {screenshots.map((s) => (
            <figure key={s.id} className="screen">
              {/* Replace src with imported images later */}
              <img
                src={s.src}
                alt={s.alt}
                className="screen-img"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="sr-only">{s.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
