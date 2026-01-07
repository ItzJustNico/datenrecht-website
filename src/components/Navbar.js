import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../imgs/AustroGamesIcon.png";

const navItems = [
    { to: "/", label: "Home" },
    { to: "/product", label: "Product" },
    { to: "/about", label: "About us" },
    { to: "/license", label: "License" },
    { to: "/privacy", label: "Privacy" },
    { to: "/imprint", label: "Imprint" },
    { to: "/contact", label: "Contact" },
    { to: "/accessibility", label: "Accessibility" },
    { to: "/credits", label: "Media credits" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef(null);
    const menuRef = useRef(null);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    // Escape closes menu; focus management
    useEffect(() => {
        function onKeyDown(e) {
            if (!open) return;

            if (e.key === "Escape") {
                e.preventDefault();
                setOpen(false);
                buttonRef.current?.focus();
            }

            // Basic focus trap when menu is open
            if (e.key === "Tab" && menuRef.current) {
                const focusables = menuRef.current.querySelectorAll(
                    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                );
                if (!focusables.length) return;

                const first = focusables[0];
                const last = focusables[focusables.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open]);

    // When opening, move focus to first link
    useEffect(() => {
        if (open) {
            const firstLink = menuRef.current?.querySelector("a");
            firstLink?.focus();
        }
    }, [open]);

    return (
        <header className="header">
            <nav className="nav" aria-label="Primary">
                <div className="brand">
                    <NavLink to="/" className="brand-link" aria-label="Go to homepage">
                        <span aria-hidden="true" className="brand-mark">
                            <img src={logo}
                                alt="AustroGames"
                                className="brand-logo"
                                width="28"
                                height="28"
                                loading="eager"
                                decoding="async"    
                            />
                            
                        </span>
                        AustroGames
                    </NavLink>
                </div>

                {/* Desktop links */}
                <ul className="nav-list" role="list">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu button */}
                <button
                    ref={buttonRef}
                    className="menu-button"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen((v) => !v)}
                >
                    <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
                    <span aria-hidden="true">{open ? "✕" : "☰"}</span>
                </button>
            </nav>

            {/* Mobile menu panel */}
            <div
                id="mobile-menu"
                ref={menuRef}
                className={open ? "mobile-menu open" : "mobile-menu"}
                hidden={!open}
            >
                <ul className="mobile-list" role="list">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
