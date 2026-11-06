const socialNetworks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/bambuk_bio/",
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/bambuk_bio/",
    path: (
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
    ),
  },
];

export default function IconosSociales() {
  return (
    <nav className="social-links" aria-label="Redes sociales">
      {socialNetworks.map((network) => (
        <a
          className="social-link"
          href={network.href}
          key={network.name}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir ${network.name}`}
          title={network.name}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          >
            {network.path}
          </svg>
        </a>
      ))}
    </nav>
  );
}
