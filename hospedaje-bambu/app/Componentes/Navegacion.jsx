import Link from "next/link";

export default function Navegacion() {
    return (
        <nav className="site-nav" aria-label="Navegación principal">
            <Link href="/" className="site-brand">
              <span className="brand-mark" aria-hidden="true">✳</span>
              <span className="brand-name">Hospedaje <strong>Bambú</strong></span>
            </Link>
            <ul className="site-links">
              <li>
                <Link href="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#espacios">
                  Espacios
                </Link>
              </li>
              <li>
                <Link href="/#experiencias">
                  Experiencias
                </Link>
              </li>
              <li>
                <Link href="/#ubicacion">
                  Ubicación
                </Link>
              </li>
            </ul>
            <Link className="site-nav-cta" href="/Reserva">
              Reserva tu estadía
            </Link>
          </nav>
    );
}