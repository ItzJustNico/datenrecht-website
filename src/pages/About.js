import React from "react";
import logo from "../imgs/AustroGamesIcon.png"

export default function About() {
    return (
        <section className="stack">
            <h1>About AustroGames</h1>

            <p>
            AustroGames is an indie game studio building modern, accessible PC games.
                Our first title is <strong>Pluto Factory</strong>, a production & automation
                game focused on satisfying building loops and clean UI.
            </p>

            <div className="card">
                <h2>What we sell</h2>
                <ul>
                    <li><strong>Product:</strong> Pluto Factory (PC)</li>
                    <li><strong>Price:</strong> €29.99 (one-time purchase)</li>
                    <li><strong>Target group:</strong> players who enjoy building, optimization, and automation</li>
                    <li><strong>Core features:</strong> base building, resource chains, upgrades, challenges</li>
                </ul>
            </div>

            <div className="card">
                <h2>Our marks (trademark forms)</h2>
                <p className="muted">
                    We use three different mark forms to help players recognize AustroGames and Pluto Factory.
                </p>

                <div className="stack" style={{ marginTop: "1rem" }}>
                    <section aria-labelledby="mark-word">
                        <h3 id="mark-word">1) Word mark: "AUSTROGAMES"</h3>
                        <p>
                            The word mark protects the name itself, independent of styling.
                            The word mark 'AUSTROGAMES' is used in the site header and in product listings for branding purposes, and appears in legal pages (imprint, license, privacy policy) as part of the required legal identification of the company.
                        </p>
                    </section>

                    <section aria-labelledby="mark-figurative">
                        <h3 id="mark-figurative">2) Figurative mark: “A” icon</h3>
                        <img src={logo}
                            alt="AustroGames"
                            className="brand-logo big"
                            width="96"
                            height="96"
                            loading="eager"
                            decoding="async"
                        />
                    </section>

                    <section aria-labelledby="mark-position">
                        <h3 id="mark-position">3) Position mark: diagonal corner ribbon on product cards</h3>
                        <p>
                            We use a diagonal ribbon on the top-right corner of product cards and screenshots as a consistent "AustroGames" cue.
                        </p>
                        <div
                            className="card"
                            style={{ position: "relative", overflow: "hidden", maxWidth: 520 }}
                            aria-label="Demo product card showing the position mark ribbon in the top-right corner."
                        >
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

                            <h4 style={{ marginTop: 0 }}>Pluto Factory</h4>
                            <p className="muted" style={{ marginBottom: 0 }}>
                                Demo card: the ribbon always appears in the same position across the website.
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            <div className="card">
                <h2>Nice classes (Nizza-Klassen)</h2>
                <ul>
                    <li>
                        <strong>Class 9:</strong> downloadable computer game software (primary class for selling Pluto Factory)
                    </li>
                    <li>
                        <strong>Class 41:</strong> providing online games / entertainment services
                    </li>
                </ul>
            </div>

            <div className="card">
                <h2>Trademark conflict check</h2>
                <p>
                    We performed a best-effort search in EUIPO/TMview to reduce the risk of conflicts with existing marks.
                    We checked the terms "AustroGames" and “Pluto Factory” and looked for similar names in relevant classes
                    (especially Class 9).
                </p>
            </div>
        </section>
    );
}
