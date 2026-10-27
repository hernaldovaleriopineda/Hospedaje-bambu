import Link from "next/link";

export default function Navegacion() {
    return (
        <nav className="flex justify-between items-center">
            <div className="text-lg font-bold">Hospedaje Bambu</div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Reserva" className="hover:underline">
                  Reserva
                </Link>
              </li>
              <li>
                <Link href="/Contacto" className="hover:underline">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
    );
}