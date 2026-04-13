import React from "react";
import { Link } from "react-router-dom";

const updates = [
  "Python for Beginners starts this Friday with 42 seats open.",
  "Linux Basics lab moved to Saturday morning.",
  "Scientific Computing registrations crossed 80%."
];

export default function Home() {
  return (
    <article className="home-flow">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="hero-kicker">FOSSEE Workshop Portal</p>
          <h1 id="home-title">FOSSEE Workshop Portal</h1>
          <p>
            Browse upcoming sessions, track updates, and move through workshop decisions quickly.
          </p>
        </div>

        <div className="hero-right">
          <aside className="hero-controls" aria-label="Portal status indicators">
            <span className="hero-dot" aria-label="Live updates available" />
            <span className="hero-dot hero-dot-mid" aria-label="Schedules synced" />
            <span className="hero-dot hero-dot-low" aria-label="Statistics online" />
          </aside>
          <Link className="button home-cta" to="/workshops">
            Explore Workshops
          </Link>
        </div>
      </section>

      <section className="home-now" aria-labelledby="now-happening-title">
        <div className="now-left">
          <h2 id="now-happening-title">Now Happening</h2>
          <ul className="now-list">
            {updates.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="now-right">
          <Link className="button button-ghost now-action" to="/stats">
            Open Stats
          </Link>
        </div>
      </section>

      <p className="home-brandline">Crafted for IIT Bombay workshops.</p>
    </article>
  );
}
