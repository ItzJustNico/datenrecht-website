import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="stack">
      <h1>StartUp Shop</h1>
      <p>
        This is a static mock web shop for a software product. No backend required — all processes are mocked.
      </p>

      <div className="card">
        <h2>Featured product</h2>
        <p>Describe your software product here (target group, key features, business model).</p>
        <Link className="button" to="/product">View product</Link>
      </div>
    </section>
  );
}
