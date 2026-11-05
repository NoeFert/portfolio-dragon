// Contenu des projets. Remplacer les textes entre crochets.
// Pour une image : la placer dans src/img, l'importer ci-dessous, puis utiliser la variable
// (ex. cover: coverAbyssal).
// liveUrl / codeUrl : mettre null pour masquer le bouton correspondant.

import coverAbyssal from "../img/couverture-abyssal.png";
import coverTyranny from "../img/couverture-tyranny.png";
import coverSovereign from "../img/couverture-sovereign.png";
import coverPhysio from "../img/couverture-physio.png";
import coverChateau from "../img/couverture-chateau-labyrinthe.png";

export const CATEGORIES = ["Développement", "Illustration", "Écriture"];

/* Modèle à copier dans la liste `projects` pour ajouter un projet :

  {
    slug: "",                 // adresse de la page : /projets/<slug> (minuscules, tirets, sans accents)
    title: "",                // nom affiché sur la carte et la page
    tags: [],                 // une ou plusieurs valeurs de CATEGORIES
    cover: null,              // image de la carte (variable importée en haut du fichier)
    summary: "",              // 2–3 phrases sous le titre de la page
    heroImage: null,          // grande image en haut de la page (format 2:1)
    start: {
      title: "",              // titre de la section « point de départ »
      text: "",               // contexte, besoin, contraintes
    },
    facts: {                  // encadré « Fiche du projet »
      role: "",
      tools: "",
      year: "",
      link: { label: "", url: "" },
    },
    processTitle: "",         // titre de la section des étapes
    steps: [                  // autant d'étapes que nécessaire, l'image alterne gauche/droite
      { title: "", text: "", image: null, imageLabel: "" },
    ],
    gallery: [],              // chemins des images de la galerie, ex. ["/images/mon-projet/1.jpg"]
    outcome: {
      title: "",              // titre de la section « résultat »
      text: "",
      liveUrl: null,          // null = bouton « Voir le projet en ligne » masqué
      codeUrl: null,          // null = bouton « Code sur GitHub » masqué
    },
  },
*/

export const projects = [
  {
    slug: "sovereign-in-war",
    title: "Sovereign In War",
    tags: ["Développement", "Illustration"],
    cover: coverSovereign,
    summary: "Jeu de stratégie en pixel art - dark fantasy",
    heroImage: null,
    start: {
      title: "Départ",
      text: "Sovereign in War était un jeu que je voulais développer depuis plusieurs années. Cette occasion m'a été donnée par un projet GameJam de mon bachelor.",
    },
    facts: {
      role: "Développeuse, concept artist, game designer",
      tools: "React, Phaser",
      year: "2026",
      link: { label: "Sovereign in War", url: "https://siw-theta.vercel.app/" },
    },
    processTitle: "[Comment le projet a pris forme]",
    steps: [
      {
        title: "Game design",
        text: "[Ce que tu as fait à cette étape, et pourquoi.]",
        image: null,
        imageLabel: "[Image d'étape 1 — croquis, maquette…]",
      },
      {
        title: "Game mechanics",
        text: "[Un choix ou une difficulté, et comment tu l'as résolu.]",
        image: null,
        imageLabel: "[Image d'étape 2]",
      },
    ],
    gallery: [null, null, null, null, null, null, null, null],
    outcome: {
      title: "Version Bêta test - projet continué",
      text: "[Le résultat, ce que tu as appris, un retour ou un chiffre si tu en as un.]",
      liveUrl: "#",
      codeUrl: "#",
    },
  },
  {
    slug: "physio-lessons",
    title: "Physio Lessons",
    tags: ["Développement"],
    cover: coverPhysio,
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
    gallery: [null, null, null, null, null, null, null, null],
    outcome: {
      title: "[Ce que le projet est devenu]",
      text: "[Le résultat, ce que tu as appris, un retour ou un chiffre si tu en as un.]",
      liveUrl: "#",
      codeUrl: "#",
    },
  },
  {
    slug: "chateau-labyrinthe",
    title: "Château-Labyrinthe",
    tags: ["Écriture", "Illustration"],
    cover: coverChateau,
    summary: "[Résumé en 2–3 phrases : ce qu'est le projet, pourquoi il existe, ce que tu y as fait.]",
    heroImage: null,
    start: {
      title: "[Le point de départ]",
      text: "[Le contexte : pour qui, quel besoin ou quelle envie, quelles contraintes (délai, équipe, technique).]",
    },
    facts: {
      role: "[Ton rôle]",
      tools: "[Logiciels, techniques]",
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
    gallery: [null, null, null, null, null, null, null, null],
    outcome: {
      title: "[Ce que le projet est devenu]",
      text: "[Le résultat, ce que tu as appris, un retour ou un chiffre si tu en as un.]",
      liveUrl: "#",
      codeUrl: null,
    },
  },
  {
    slug: "abyssal-city",
    title: "Abyssal City",
    tags: ["Écriture", "Illustration"],
    cover: coverAbyssal,
    summary: "[Résumé en 2–3 phrases : ce qu'est le projet, pourquoi il existe, ce que tu y as fait.]",
    heroImage: null,
    start: {
      title: "[Le point de départ]",
      text: "[Le contexte : pour qui, quel besoin ou quelle envie, quelles contraintes (délai, équipe, technique).]",
    },
    facts: {
      role: "[Ton rôle]",
      tools: "[Logiciels, techniques]",
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
    gallery: [null, null, null, null, null, null, null, null],
    outcome: {
      title: "[Ce que le projet est devenu]",
      text: "[Le résultat, ce que tu as appris, un retour ou un chiffre si tu en as un.]",
      liveUrl: "#",
      codeUrl: null,
    },
  },
  {
    slug: "new-tyranny-of-dragons",
    title: "New Tyranny of Dragons",
    tags: ["Écriture", "Illustration"],
    cover: coverTyranny,
    summary: "[Résumé en 2–3 phrases : ce qu'est le projet, pourquoi il existe, ce que tu y as fait.]",
    heroImage: null,
    start: {
      title: "[Le point de départ]",
      text: "[Le contexte : pour qui, quel besoin ou quelle envie, quelles contraintes (délai, équipe, technique).]",
    },
    facts: {
      role: "[Ton rôle]",
      tools: "[Logiciels, techniques]",
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
    gallery: [null, null, null, null, null, null, null, null],
    outcome: {
      title: "[Ce que le projet est devenu]",
      text: "[Le résultat, ce que tu as appris, un retour ou un chiffre si tu en as un.]",
      liveUrl: "#",
      codeUrl: null,
    },
  },
];
