import Link from "next/link";
import IconosSociales from "../Componentes/IconosSociales";
import "./Contacto.css";

export const metadata = {
  title: "Contacto | Bambuk Bio",
  description:
    "Visita Bambuk Bio en Uvita de Osa y encuentra nuestros datos de contacto.",
};

export default function Contacto() {
  return (
    <div className="contact-page">
      <section className="contact-visit" aria-labelledby="contact-visit-title">
        <div className="contact-visit-copy">
          <p className="section-eyebrow">Uvita de Osa · Costa Rica</p>
          <h1 id="contact-visit-title">Visítanos</h1>
          <p>
            Le invitamos a descubrir un espacio donde la naturaleza, la
            tranquilidad y la arquitectura de bambú se unen para ofrecerle una
            experiencia única. Disfrute de un ambiente rodeado de vegetación
            tropical, ideal para desconectarse de la rutina, descansar y
            conectar con la esencia natural.
          </p>
          <p className="contact-visit-highlight">
            Bambuk Bio: un refugio natural para descansar, respirar y disfrutar.
          </p>
          <p>¡Será un placer recibirle!</p>
          <Link className="home-button home-button-dark" href="/#ubicacion">
            Cómo llegar <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="contact-info-panel" aria-label="Datos de contacto">
          <div className="contact-info-list">
            <a
              className="contact-info-item"
              href="https://www.google.com/maps/search/?api=1&query=Uvita%20de%20Osa%2C%20Costa%20Rica"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span>Uvita de Osa, Costa Rica</span>
            </a>
            <a className="contact-info-item" href="mailto:biobambuj@gmail.com">
              <span className="contact-info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <span>biobambuj@gmail.com</span>
            </a>
            <a className="contact-info-item" href="tel:+50683463622">
              <span className="contact-info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7 3H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3l-5-2-2 3a14 14 0 0 1-6-6l3-2-2-5Z" />
                </svg>
              </span>
              <span>(506) 8346-3622</span>
            </a>
          </div>
          <div className="contact-social">
            <IconosSociales />
            <a
              className="contact-social-handle"
              href="https://www.instagram.com/bambuk_bio/"
              target="_blank"
              rel="noreferrer"
            >
              @bambuk_bio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}