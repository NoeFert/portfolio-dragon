import { Header, Footer } from "../components/Layout";
import Placeholder from "../components/Placeholder";
import {
  CodeIcon, PenIcon, FeatherIcon, MailIcon, InstagramIcon, GithubIcon, LinkedinIcon,
} from "../components/Icons";
import { site } from "../data/site";

const trades = [
  {
    title: "Développement",
    icon: <CodeIcon />,
    text: "[Ce que tu construis, ce que tu aimes dans le dev.]",
    tools: "[Langages, frameworks, outils]",
  },
  {
    title: "Illustration",
    icon: <PenIcon />,
    text: "[Ton style, tes sujets de prédilection.]",
    tools: "[Techniques, logiciels]",
  },
  {
    title: "Écriture",
    icon: <FeatherIcon />,
    text: "[Ce que tu écris, tes univers.]",
    tools: "[Genres, publications]",
  },
];

export default function Bio() {
  return (
    <>
      <Header />

      <main className="container">
        <section className="bio">
          <Placeholder
            src={site.portrait}
            label={<>[Autoportrait illustré<br />ou photo]</>}
            className="portrait"
          />
          <div>
            <h1>{site.name}</h1>
            <p className="roles">{site.roles.join(" · ")}</p>
            <p className="hook">[Accroche : qui tu es en une ou deux phrases.]</p>
            <p className="body-text">
              [Ton parcours : formation, expériences, comment tu es arrivée à combiner le code, le
              dessin et l'écriture.]
            </p>
            <p className="body-text">
              [Ton univers : les histoires, les livres et les créatures qui t'inspirent.]
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Mes trois métiers</h2>
          <div className="trades">
            {trades.map((t) => (
              <article key={t.title} className="trade scaled">
                {t.icon}
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                <p className="mono">{t.tools}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <p className="contact-intro">
            [Ta disponibilité : freelance, poste, commandes, collaborations.]
          </p>

          <div className="contact-cards">
            <div className="contact-card contact-card--dark">
              <small>Un projet web ?</small>
              <h3>Écris-moi directement par email.</h3>
              <a href={`mailto:${site.email}`} className="btn btn--gold">
                <MailIcon /> {site.email}
              </a>
            </div>
            <div className="contact-card scaled">
              <small>Une illustration ?</small>
              <h3>Retrouve mes dessins sur Instagram.</h3>
              <a href={site.instagram.url} className="btn btn--dark">
                <InstagramIcon /> {site.instagram.handle}
              </a>
            </div>
          </div>

          <div className="socials">
            <a href={site.github} className="btn"><GithubIcon /> GitHub</a>
            <a href={site.linkedin} className="btn"><LinkedinIcon /> LinkedIn</a>
            <a href={site.instagram.url} className="btn"><InstagramIcon /> Instagram</a>
            <a href={`mailto:${site.email}`} className="btn"><MailIcon /> Email</a>
          </div>
        </section>
      </main>

      <Footer link="back" />
    </>
  );
}
