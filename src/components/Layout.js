import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";

export default function Layout() {

  const [consent, setConsent] = useState(null);


  return (
    <>
      {/* WCAG: Skip link for keyboard users */}
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <CookieBanner onConsentChange={setConsent} />

      <main id="main" tabIndex={-1} className="container" aria-label="Main content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
