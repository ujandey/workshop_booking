import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const defaultStats = [
  { id: "total", label: "Total Workshops", value: 128 },
  { id: "upcoming", label: "Upcoming This Month", value: 14 },
  { id: "states", label: "States Covered", value: 23 }
];

export default function StatsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStats(defaultStats);
      setIsLoading(false);
    }, 500);

    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="page">
        <h1>Stats</h1>
        <LoadingSpinner label="Loading statistics..." />
      </section>
    );
  }

  return (
    <section className="page stats-page">
      <h1>Stats</h1>
      <p className="lead">Public workshop insights in a simple, readable flow.</p>
      <div className="stats-grid">
        {stats.map((item) => (
          <article className="stat-item" key={item.id}>
            <h2>{item.label}</h2>
            <p className="stat-value">{item.value}</p>
          </article>
        ))}
      </div>
      <article className="insight-card">
        <h2>Trend Insight</h2>
        <p>
          Participation is growing steadily. Workshops with hands-on labs are filling faster than
          lecture-only sessions, especially on weekends.
        </p>
      </article>
    </section>
  );
}
