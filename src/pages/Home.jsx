import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components/Layout";
import Placeholder from "../components/Placeholder";
import { CATEGORIES, projects } from "../data/projects";
import { site } from "../data/site";

export default function Home() {
  const [filter, setFilter] = useState("Tout");

  const visible = filter === "Tout" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <>
      <Header />

      <main>
        <section className="container hero">
          <h1>
            {site.roles.map((role, i) => (
              <Fragment key={role}>
                {i > 0 && <span className="dot">•</span>}
                {role}
              </Fragment>
            ))}
          </h1>

          <div className="dragon-slot">
            {site.dragon ? (
              <img src={site.dragon} alt="Dragon" />
            ) : (
              <div>
                <strong>Emplacement du dragon</strong>
                <span>Format 2:1 horizontal</span>
                <span>PNG transparent · env. 2000 × 1000 px</span>
              </div>
            )}
          </div>

          <div className="hero-actions">
            <Link to="/biographie#contact" className="btn btn--dark">Me contacter</Link>
            <a href="#tresor" className="btn">Voir le trésor</a>
          </div>
        </section>

        <section id="tresor" className="container section">
          <h2 className="section-title">Les pièces de la collection</h2>

          <div className="filters">
            {["Tout", ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                className={`filter ${filter === cat ? "is-active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
            <span className="count">
              {visible.length} {visible.length > 1 ? "projets" : "projet"}
            </span>
          </div>

          <div className="grid">
            {visible.map((p) => (
              <Link key={p.slug} to={`/projets/${p.slug}`} className="card">
                <div className="card-inner">
                  <Placeholder src={p.cover} label={`[Couverture — ${p.title}]`} />
                  <div className="tags">
                    {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
