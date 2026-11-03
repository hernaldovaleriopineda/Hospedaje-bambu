import Image from "next/image";
import Link from "next/link";
import "./Home.css";

const accommodations = [
  {
    name: "Cabaña",
    description: "Un espacio acogedor para descansar rodeado de naturaleza.",
    image: "/imagenes/Cabaña redimensionada.jpg",
    alt: "Cabaña de bambú entre plantas tropicales",
  },
  {
    name: "Domo",
    description: "Una forma diferente de vivir tu próxima escapada.",
    image: "/imagenes/Domo redimensionada.jpg",
    alt: "Domo rodeado de vegetación y palmeras",
  },
  {
    name: "Rancho",
    description: "Un ambiente cálido para compartir y bajar el ritmo.",
    image: "/imagenes/Rancho redimensionada.jpg",
    alt: "Interior de un rancho de bambú con un espacio de descanso",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <Image
          className="home-hero-image"
          src="/imagenes/Portada.jpg"
          alt="Vista aérea de la costa y el paisaje natural"
          fill
          priority
          sizes="100vw"
        />
        <div className="home-hero-shade" />
        <div className="home-hero-content">
          <p className="home-eyebrow">Hospedaje Bambú · Naturaleza y descanso</p>
          <h1 className="home-title" id="home-title">
            Desconecta del ruido. Vuelve a lo esencial.
          </h1>
          <p className="home-description">
            Un refugio para hacer una pausa, respirar profundo y disfrutar de
            una estadía diferente.
          </p>
          <div className="home-hero-actions">
            <Link className="home-button" href="/Reserva">
              Reserva tu estadía
            </Link>
            <a className="home-text-link" href="#espacios">
              Descubre nuestros espacios <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <p className="home-hero-caption">Un lugar para volver a conectar</p>
      </section>

      <section className="home-intro" aria-labelledby="intro-title">
        <p className="section-eyebrow">Un descanso diferente</p>
        <h2 id="intro-title">
          La naturaleza marca el ritmo.
          <br />
          Tú solo tienes que disfrutar.
        </h2>
        <p>
          En Hospedaje Bambú cada espacio invita a desconectarte de la rutina y
          disfrutar los pequeños momentos. Encuentra el lugar perfecto para tu
          próxima escapada.
        </p>
      </section>

      <section
        className="home-spaces"
        id="espacios"
        aria-labelledby="spaces-title"
      >
        <div className="home-section-heading">
          <div>
            <p className="section-eyebrow">Quédate a tu manera</p>
            <h2 id="spaces-title">Nuestros espacios</h2>
          </div>
          <p>
            Elige tu rincón favorito y prepárate para vivir días de calma en
            medio de la naturaleza.
          </p>
        </div>

        <div className="home-accommodations">
          {accommodations.map((accommodation, index) => (
            <Link
              className="accommodation-card"
              href="/Reserva"
              key={accommodation.name}
            >
              <Image
                className="accommodation-image"
                src={accommodation.image}
                alt={accommodation.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
              />
              <span className="accommodation-number">
                0{index + 1} <span aria-hidden="true">/ 03</span>
              </span>
              <span className="accommodation-copy">
                <span className="accommodation-name">{accommodation.name}</span>
                <span className="accommodation-description">
                  {accommodation.description}
                </span>
                <span className="accommodation-cta">
                  Conocer y reservar <span aria-hidden="true">↗</span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-cta" aria-labelledby="cta-title">
        <p className="section-eyebrow">Tu próxima pausa comienza aquí</p>
        <h2 id="cta-title">Regálate unos días para reconectar.</h2>
        <Link className="home-button home-button-dark" href="/Reserva">
          Reserva tu estadía <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
