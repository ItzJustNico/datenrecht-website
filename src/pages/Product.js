import React, { useState } from "react";

export default function Product() {
  const [email, setEmail] = useState("");

  function onBuy(e) {
    e.preventDefault();
    alert("Mock purchase: no payment processed. (This is intentional for the assignment.)");
  }

  return (
    <section className="stack">
      <h1>Product</h1>

      <div className="grid">
        <div className="card">
          <h2>Software Name</h2>
          <p>Short product pitch + main benefits.</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <p className="price">€9.99 / month (mock)</p>
        </div>

        <div className="card">
          <h2>Mock checkout</h2>
          <form onSubmit={onBuy} className="stack" aria-label="Mock checkout form">
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
                We use this to send a license key (mock).
              </p>
            </div>

            <button className="button" type="submit">Buy now (mock)</button>
            <p className="muted">
              By purchasing you accept the license terms (see “License”).
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
