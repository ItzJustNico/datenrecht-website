import React from "react";
import { Link } from "react-router-dom";
import hero from "../imgs/PlutoFactoryImg.png";

export default function Home() {
  return (
    <section className="stack">
      <h1>Games</h1>
      <p>Here you can buy one of our first games — <strong>Pluto Factory</strong>.</p>

      <div className="home-hero" style={{display: "flex", flexDirection: "column", width: "700px"}}>
        <div className="card home-card position-mark-container">
          <div className="position-mark" aria-hidden="true">
            AUSTRO
          </div>

          <h2>Pluto Factory</h2>
          <p>
            A first-person factory game built for players who enjoy building,
            optimization, and automation.
          </p>

          <p className="home-price">
            <strong>€29.99</strong> one-time purchase
          </p>

          <div className="home-actions">
            <Link className="button" to="/product">
              View product
            </Link>
            <Link className="button button-secondary" to="/license">
              License terms
            </Link>
          </div>
        </div>

        <figure className="home-media">
          <img
            src={hero}
            alt="Promotional artwork for Pluto Factory showing a futuristic factory base on Pluto"
            className="home-img"
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}
