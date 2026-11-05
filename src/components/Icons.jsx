// Icônes au trait (style Lucide), héritent de la couleur du texte.
function Icon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const CodeIcon = () => (
  <Icon>
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </Icon>
);

export const PenIcon = () => (
  <Icon>
    <path d="M15.7 15.7 13 21 3 11l5.3-2.7L12 3l9 9-5.3 3.7Z" />
    <path d="m3 21 6.5-6.5" />
    <circle cx="11" cy="13" r="2" />
  </Icon>
);

export const FeatherIcon = () => (
  <Icon>
    <path d="M12.67 19a2 2 0 0 0 1.42-.59l6.34-6.34a6 6 0 0 0-8.49-8.49L5.59 9.93A2 2 0 0 0 5 11.34V19Z" />
    <path d="M16 8 2 22" />
    <path d="M17.5 15H9" />
  </Icon>
);

export const MailIcon = () => (
  <Icon>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </Icon>
);

export const InstagramIcon = () => (
  <Icon>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </Icon>
);

export const GithubIcon = () => (
  <Icon>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </Icon>
);

export const LinkedinIcon = () => (
  <Icon>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);
