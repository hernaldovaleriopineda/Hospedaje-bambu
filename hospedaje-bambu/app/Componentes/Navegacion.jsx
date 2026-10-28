import Link from "next/link";

export default function Navegacion() {
    return (
        <nav className="site-nav" aria-label="Navegación principal">
            <Link href="/" className="site-brand">
              Hospedaje Bambu
            </Link>
            <ul className="site-links">
              <li>
                <Link href="/Reserva">
                  Reserva
                </Link>
              </li>
              <li>
                <Link href="/Contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
    );
}