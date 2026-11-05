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
        <section className="hero">
          <div className="container">
            <h1>
              {site.roles.map((role, i) => (
                <Fragment key={role}>
                  {i > 0 && <span className="dot">•</span>}
                  {role}
                </Fragment>
              ))}
            </h1>

            <div className="hero-actions">
              <Link to="/biographie#contact" className="btn btn--dark">Me contacter</Link>
              <a href="#tresor" className="btn">Voir le trésor</a>
            </div>
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
          </div>

          <div className="grid">
            {visible.map((p) => (
              <Link key={p.slug} to={`/projets/${p.slug}`} className="card">
                <div className="card-inner">
                  <Placeholder src={p.cover} label={`[Couverture — ${p.title}]`} />
                  <h3>{p.title}</h3>
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
