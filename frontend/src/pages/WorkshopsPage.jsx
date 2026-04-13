import React, { useMemo, useState } from "react";

const workshops = [
  { id: 1, title: "Python for Beginners", date: "2026-05-03", mode: "Beginner", seats: 42 },
  { id: 2, title: "Linux Basics", date: "2026-05-07", mode: "Hands-on", seats: 18 },
  { id: 3, title: "Scientific Computing", date: "2026-05-11", mode: "Advanced", seats: 25 },
  { id: 4, title: "Open Source Contribution Sprint", date: "2026-05-15", mode: "Community", seats: 30 }
];

export default function WorkshopsPage() {
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredWorkshops = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) {
      return workshops;
    }

    return workshops.filter((workshop) => workshop.title.toLowerCase().includes(query));
  }, [search]);

  const onSubmit = (event) => {
    event.preventDefault();
    const normalizedEmail = email.trim();

    if (!normalizedEmail.includes("@")) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
    }, 450);
  };

  return (
    <section className="page workshops-page">
      <h1>Workshops</h1>
      <p className="lead">Find upcoming sessions quickly with smart filtering and clear details.</p>

      <label htmlFor="workshop-search" className="field-label">
        Search workshop
      </label>
      <input
        id="workshop-search"
        name="workshop-search"
        className="input"
        type="search"
        placeholder="Type a workshop name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <ul className="list" aria-live="polite">
        {filteredWorkshops.map((workshop) => (
          <li key={workshop.id} className="workshop-row">
            <div className="workshop-topline">
              <h2>{workshop.title}</h2>
              <span className="pill">{workshop.mode}</span>
            </div>
            <p className="workshop-meta">Date: {workshop.date}</p>
            <p className="workshop-meta">Seats left: {workshop.seats}</p>
            <div className="workshop-actions">
              <button className="button" type="button">
                View details
              </button>
              <button className="button button-ghost" type="button">
                Save
              </button>
            </div>
          </li>
        ))}
      </ul>

      <form className="form updates-form" noValidate onSubmit={onSubmit}>
        <h2>Get updates</h2>
        <label htmlFor="email" className="field-label">
          Email address
        </label>
        <input
          id="email"
          name="email"
          className={`input ${emailError ? "input-error" : ""}`}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={Boolean(emailError)}
          aria-describedby={emailError ? "email-error" : undefined}
          placeholder="name@example.com"
          autoComplete="email"
        />
        {emailError ? (
          <p id="email-error" className="error-text">
            {emailError}
          </p>
        ) : null}
        <button className="button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Subscribe"}
        </button>
      </form>
    </section>
  );
}
