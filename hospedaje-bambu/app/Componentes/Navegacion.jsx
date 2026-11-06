import Image from "next/image";
import Link from "next/link";

export default function Navegacion() {
    return (
        <nav className="site-nav" aria-label="Navegación principal">
            <Link href="/" className="site-brand">
              <Image
                className="brand-logo"
                src="/imagenes/Logo sin fondo.png"
                alt="Bambuk Bio"
                width={160}
                height={125}
                priority
              />
            </Link>
            <ul className="site-links">
              <li>
                <Link href="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#alojamientos">
                  Alojamientos
                </Link>
              </li>
              <li>
                <Link href="/#disponibilidad">
                  Disponibilidad
                </Link>
              </li>
              <li>
                <Link href="/#preguntas">
                  Preguntas
                </Link>
              </li>
              <li>
                <Link href="/#ubicacion">
                  Ubicación
                </Link>
              </li>
              <li>
                <Link href="/Contacto">
                  Contacto
                </Link>
              </li>
            </ul>
            <Link className="site-nav-cta" href="/Reserva">
              Reserva tu estadía
            </Link>
          </nav>
    );
}