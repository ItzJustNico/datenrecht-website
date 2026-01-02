import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      {/* WCAG: Skip link for keyboard users */}
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main" tabIndex={-1} className="container" aria-label="Main content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
