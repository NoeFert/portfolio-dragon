import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Header } from "../components/Layout";
import Placeholder from "../components/Placeholder";
import { projects } from "../data/projects";

export default function Project() {
  const { slug } = useParams();
  const [zoomed, setZoomed] = useState(null);

  // Fermer la visionneuse avec Échap
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setZoomed(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/" replace />;

  const p = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Header back />

      <main className="container">
        <section className="project-head">
          <div className="tags">
            {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <h1>{p.title}</h1>
          <p className="lead">{p.summary}</p>
        </section>

        <Placeholder src={p.heroImage} label="[Image principale du projet]" className="hero-image" />

        <section className="section intro">
          <div>
            <h2>{p.start.title}</h2>
            <p className="body-text">{p.start.text}</p>
          </div>

          <aside className="factsheet scaled">
            <h3>Fiche du projet</h3>
            <dl>
              <dt>Rôle</dt>
              <dd>{p.facts.role}</dd>
              <dt>Outils</dt>
              <dd>{p.facts.tools}</dd>
              <dt>Année</dt>
              <dd>{p.facts.year}</dd>
              <dt>Liens</dt>
              <dd><a href={p.facts.link.url}>{p.facts.link.label}</a></dd>
            </dl>
          </aside>
        </section>

        <section className="section">
          <h2 className="section-title">{p.processTitle}</h2>
          {p.steps.map((step, i) => (
            <div key={i} className={`step ${i % 2 ? "step--reverse" : ""}`}>
              <div className="step-media">
                <Placeholder src={step.image} label={step.imageLabel} />
              </div>
              <div>
                <h3>{step.title}</h3>
                <p className="body-text">{step.text}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="section">
          <div className="gallery-head">
            <h2 className="section-title">Les pièces du projet</h2>
            <span>{p.gallery.length} images · cliquer pour agrandir</span>
          </div>
          <div className="gallery">
            {p.gallery.map((src, i) => (
              <button
                key={i}
                className="placeholder"
                onClick={() => setZoomed({ src, label: `[Image${i + 1}]` })}
              >
                {src ? <img src={src} alt={`Image ${i + 1}`} /> : `[Image${i + 1}]`}
              </button>
            ))}
          </div>
        </section>

        <section className="section outcome">
          <h2>{p.outcome.title}</h2>
          <p className="body-text">{p.outcome.text}</p>
          <div className="hero-actions">
            <a href={p.outcome.liveUrl} className="btn btn--dark">[Voir le projet en ligne]</a>
            <a href={p.outcome.codeUrl} className="btn">[Code sur GitHub]</a>
          </div>
        </section>

        <nav className="project-nav">
          <Link to={`/projets/${prev.slug}`} className="scaled">
            <small>← Projet précédent</small>
            <strong>{prev.title}</strong>
          </Link>
          <Link to={`/projets/${next.slug}`} className="scaled next">
            <small>Projet suivant →</small>
            <strong>{next.title}</strong>
          </Link>
        </nav>
      </main>

      {zoomed && (
        <div className="lightbox" onClick={() => setZoomed(null)}>
          <button className="lightbox-close" aria-label="Fermer">×</button>
          <Placeholder src={zoomed.src} label={zoomed.label} />
        </div>
      )}
    </>
  );
}
