import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setStatus("Message sent.");
  }

  return (
    <section className="stack">
      <h1>Contact</h1>

      <div className="card">
        <form onSubmit={onSubmit} className="stack" aria-label="Contact form">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>

          <div className="field">
            <label htmlFor="msg">Message</label>
            <textarea id="msg" name="msg" rows="5" required />
          </div>

          <button className="button" type="submit">Send</button>

          {status && (
            <p role="status" aria-live="polite" className="muted">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
