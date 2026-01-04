import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="container footer-inner">
        <p className="muted">
          © {new Date().getFullYear()} AustroGames — web shop for PC-Games.
        </p>
        <nav aria-label="Footer links">
          <ul className="footer-links" role="list">
            <li><Link to="/imprint">Imprint</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/license">License</Link></li>
            <li><Link to="/accessibility">Accessibility</Link></li>
            <li><Link to="/credits">Media credits</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
