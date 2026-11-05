// Contenu des projets. Remplacer les textes entre crochets.
// Pour une image : mettre le chemin d'un fichier placé dans /public, ex. "/images/siw-cover.jpg".

export const CATEGORIES = ["Développement", "Illustration", "Écriture"];

function placeholderProject(slug, title, tags) {
  return {
    slug,
    title,
    tags,
    tagline: "[Une phrase : ce que c'est et ton rôle]",
    cover: null,
    summary: "[Résumé en 2–3 phrases : ce qu'est le projet, pourquoi il existe, ce que tu y as fait.]",
    heroImage: null,
    start: {
      title: "[Le point de départ]",
      text: "[Le contexte : pour qui, quel besoin ou quelle envie, quelles contraintes (délai, équipe, technique).]",
    },
    facts: {
      role: "[Ton rôle]",
      tools: "[Logiciels, langages]",
      year: "[Année]",
      link: { label: "[Voir en ligne]", url: "#" },
    },
    processTitle: "[Comment le projet a pris forme]",
    steps: [
      {
        title: "[Étape 1]",
        text: "[Ce que tu as fait à cette étape, et pourquoi.]",
        image: null,
        imageLabel: "[Image d'étape 1 — croquis, maquette…]",
      },
      {
        title: "[Étape 2]",
        text: "[Un choix ou une difficulté, et comment tu l'as résolu.]",
        image: null,
        imageLabel: "[Image d'étape 2]",
      },
    ],
    gallery: Array.from({ length: 8 }, () => null),
    outcome: {
      title: "[Ce que le projet est devenu]",
      text: "[Le résultat, ce que tu as appris, un retour ou un chiffre si tu en as un.]",
      liveUrl: "#",
      codeUrl: "#",
    },
  };
}

export const projects = [
  placeholderProject("siw", "SiW", ["Développement", "Écriture"]),
  placeholderProject("labostats", "Labostats", ["Développement"]),
  placeholderProject("twst", "Twst", ["Écriture", "Illustration"]),
  placeholderProject("dnd-bestiary", "DnD Bestiary", ["Illustration", "Écriture"]),
  placeholderProject("abyssal-city", "Abyssal City", ["Illustration", "Développement"]),
];
