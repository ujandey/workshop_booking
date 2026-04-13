import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/workshops", label: "Workshops" },
  { to: "/stats", label: "Stats" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <nav className="navbar" aria-label="Primary navigation">
        <div className="navbar-row">
          <NavLink className="brand" to="/" onClick={() => setIsOpen(false)}>
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-text">
              <strong>Workshop</strong>
              <em>Booking</em>
            </span>
          </NavLink>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="nav-links"
          >
            <span aria-hidden="true">{isOpen ? "Close" : "Menu"}</span>
          </button>
        </div>

        <ul id="nav-links" className={`nav-links ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default memo(Navbar);
