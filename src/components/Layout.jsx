import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site } from "../data/site";

// Remonte en haut à chaque changement de page, ou vers l'ancre (#contact…).
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export function Header({ back = false }) {
  return (
    <header className="container site-header">
      {back ? (
        <Link to="/#tresor" className="back-link">← Retour au trésor</Link>
      ) : (
        <Link to="/" className="logo">{site.name}</Link>
      )}
      <nav className="nav">
        {!back && <Link to="/#tresor">Le trésor</Link>}
        <NavLink to="/biographie" end>Le dragon</NavLink>
      </nav>
    </header>
  );
}

export function Footer({ link }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>© 2026 {site.name}</span>
        {link === "back" ? (
          <Link to="/#tresor">← Retour au trésor</Link>
        ) : (
          <Link to="/biographie#contact">Contact</Link>
        )}
      </div>
    </footer>
  );
}
