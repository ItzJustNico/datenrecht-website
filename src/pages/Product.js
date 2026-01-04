import React, { useState } from "react";

export default function Product() {
  const [email, setEmail] = useState("");

  function onBuy(e) {
    e.preventDefault();
    alert("Payment processed.");
  }

  return (
    <section className="stack">
      <h1>Games</h1>

      <div className="grid">
        <div className="card" style={{ position: "relative", overflow: "hidden"}}>
        <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 12,
                  right: -42,
                  transform: "rotate(35deg)",
                  border: "1px solid var(--border)",
                  padding: "0.35rem 3rem",
                  background: "rgba(255, 213, 74, 0.18)",
                  fontWeight: 800,
                }}
              >
                AUSTRO
              </div>
          <h2>Pluto Factory</h2>
          <p className="muted">by AustroGames</p>
          <p>A First Person Factory game to enjoy. Built for players who enjoy building, optimization, and automation.</p>
          <ul>
            <li>Farm Materials</li>
            <li>Build a Factory on Pluto</li>
            <li>Conquer the Planet</li>
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
              />
              <p className="hint" id="email-hint">
                We use this to send a license key.
              </p>
            </div>

            <button className="button" type="submit">Buy now</button>
            <p className="muted">
              By purchasing you accept the license terms (see “License”).
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
