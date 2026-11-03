import Image from "next/image";
import Link from "next/link";
import CarruselEspacios from "./Componentes/CarruselEspacios";
import "./Home.css";

const bambooHutFeatures = [
  "Capacidad para 4 huéspedes",
  "Habitaciones cómodas y acogedoras",
  "Cocina equipada",
  "Aire acondicionado",
  "Wi-Fi gratuito",
  "Jacuzzi privado",
  "Áreas verdes para descanso y relajación",
  "Ambiente seguro y familiar",
];

const domeFeatures = [
  "Capacidad para 4 huéspedes",
  "Habitaciones cómodas y acogedoras",
  "Cocina equipada",
  "Amplios espacios con diseño geodésico",
  "Aire acondicionado",
  "Wi-Fi gratuito",
  "Baño privado",
  "Terraza techada de bambú",
  "Jacuzzi privado",
  "Área para relajarse rodeada de naturaleza",
  "Ambiente privado y tranquilo",
  "Hermosas vistas a los jardines tropicales",
];

const experiences = [
  {
    number: "01",
    title: "Avistamiento de ballenas",
    description:
      "Vive la emoción de observar ballenas jorobadas en su hábitat natural durante las temporadas de migración.",
  },
  {
    number: "02",
    title: "Playas paradisíacas",
    description:
      "Disfruta de playas de arena dorada y aguas cristalinas, ideales para descansar, caminar o nadar.",
  },
  {
    number: "03",
    title: "Parque Nacional Marino Ballena",
    description:
      'Explora sus senderos naturales y la famosa formación rocosa conocida como "La Cola de la Ballena".',
  },
  {
    number: "04",
    title: "Cascadas",
    description:
      "Visita hermosas cascadas cercanas donde podrás nadar y disfrutar de la naturaleza.",
  },
];

const adventureActivities = [
  "Surf",
  "Kayak",
  "Paddle board",
  "Snorkel",
  "Tours de manglares",
  "Caminatas ecológicas",
];

const reasonsToStay = [
  "Ubicación privilegiada en Uvita de Osa",
  "Rodeados de naturaleza y biodiversidad",
  "Cabaña ecológica construida en bambú",
  "Tranquilidad y privacidad",
  "Cercanía a playas, restaurantes y atracciones turísticas",
  "Atención personalizada para que tu estancia sea inolvidable",
];

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <Image
          className="home-hero-image"
          src="/imagenes/Portada.jpg"
          alt="Vista aérea de la costa de Uvita y el paisaje natural del Pacífico Sur"
          fill
          priority
          sizes="100vw"
        />
        <div className="home-hero-shade" />
        <div className="home-hero-content">
          <p className="home-eyebrow">Hospedaje Bambú · Uvita de Osa</p>
          <h1 className="home-title" id="home-title">
            Un refugio único entre la selva y el Pacífico.
          </h1>
          <p className="home-description">
            Conoce un refugio único rodeado de naturaleza en el corazón de
            Uvita de Osa en el Pacífico Sur de Costa Rica, ofreciéndote una
            experiencia inolvidable a pocos minutos de las hermosas playas del
            Parque Nacional Marino Ballena.
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
        <p className="home-hero-caption">Pacífico Sur · Costa Rica</p>
      </section>

      <section className="home-intro" aria-labelledby="intro-title">
        <p className="section-eyebrow">Un descanso diferente</p>
        <h2 id="intro-title">
          Desconéctate de la rutina.
          <br />
          Conecta con la naturaleza.
        </h2>
        <p>
          Descubre una experiencia única de descanso en nuestros hospedajes.
          Rodeados de exuberante naturaleza tropical, nuestros espacios han
          sido diseñados para quienes desean desconectarse del estrés cotidiano
          y conectarse con la tranquilidad de la selva y la belleza del océano
          Pacífico.
        </p>
        <p>
          Aquí podrás despertar con el canto de las aves, disfrutar de
          espectaculares atardeceres y explorar una de las regiones más
          biodiversas de Costa Rica. Ya sea para una escapada romántica, unas
          vacaciones familiares o una aventura con amigos, encontrarás el
          lugar perfecto para crear recuerdos inolvidables.
        </p>
      </section>

      <CarruselEspacios />

      <section
        className="home-spaces"
        id="espacios"
        aria-labelledby="spaces-title"
      >
        <div className="home-section-heading">
          <div>
            <p className="section-eyebrow">Quédate a tu manera</p>
            <h2 id="spaces-title">Nuestros hospedajes</h2>
          </div>
          <p>
            Naturaleza, privacidad y comodidad para que elijas cómo vivir tu
            próxima escapada.
          </p>
        </div>

        <div className="stay-list">
          <article className="stay-card">
            <div className="stay-image-wrap">
              <Image
                className="stay-image"
                src="/imagenes/Cabaña redimensionada.jpg"
                alt="Cabaña ecológica de bambú rodeada de jardines tropicales"
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <span className="stay-image-label">01 · Hospedaje ecológico</span>
            </div>
            <div className="stay-content">
              <p className="section-eyebrow">Naturaleza y encanto rústico</p>
              <h3>Bamboo Hut</h3>
              <p className="stay-description">
                Hospédate en una hermosa cabaña ecológica de bambú. Disfruta de
                un alojamiento confortable rodeado de naturaleza, playas
                paradisíacas, avistamiento de ballenas y las mejores
                atracciones del Pacífico Sur de Costa Rica. Ideal para parejas,
                familias y amantes de la naturaleza que buscan tranquilidad y
                aventura en un entorno único.
              </p>
              <h4>Características</h4>
              <ul className="feature-list">
                {bambooHutFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p className="stay-note">
                Cada detalle ha sido pensado para ofrecer comodidad sin perder
                el encanto rústico y ecológico que caracteriza la región.
              </p>
              <Link className="home-button home-button-dark" href="/Reserva">
                Reservar Bamboo Hut <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>

          <article className="stay-card stay-card-reversed">
            <div className="stay-gallery">
              <div className="stay-image">
                <Image
                  className="stay-image"
                  src="/imagenes/Domo redimensionada.jpg"
                  alt="Domo glamping de lujo en un jardín tropical"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
         
                
              <span className="stay-image-label">02 · Glamping en la selva</span>
            </div>
            <div className="stay-content">
              <p className="section-eyebrow">Aventura con todo el confort</p>
              <h3>Domos Glamping de Lujo</h3>
              <p className="stay-description">
                Exclusivos domos glamping diseñados para quienes buscan una
                experiencia única que combine aventura, naturaleza y comodidad.
                Ubicados en medio de jardines tropicales, permiten disfrutar de
                la belleza natural de Uvita sin renunciar al confort. Su diseño
                moderno y acogedor brinda una conexión especial con el entorno,
                creando el ambiente perfecto para una escapada romántica, una
                luna de miel o unas vacaciones inolvidables.
              </p>
              <h4>Características</h4>
              <ul className="feature-list feature-list-columns">
                {domeFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link className="home-button home-button-dark" href="/Reserva">
                Reservar un domo <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section
        className="home-experiences"
        id="experiencias"
        aria-labelledby="experiences-title"
      >
        <div className="home-section-heading">
          <div>
            <p className="section-eyebrow">Explora el Pacífico Sur</p>
            <h2 id="experiences-title">Experiencias y actividades</h2>
          </div>
          <p>
            Uvita es uno de los destinos más espectaculares de Costa Rica y
            ofrece actividades para todos los gustos.
          </p>
        </div>
        <div className="experience-grid">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.number}>
              <span>{experience.number}</span>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
            </article>
          ))}
        </div>
        <div className="adventure-row">
          <h3>Deportes y aventura</h3>
          <ul className="activity-list">
            {adventureActivities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="home-reasons"
        aria-labelledby="reasons-title"
      >
        <div className="reasons-copy">
          <p className="section-eyebrow">La diferencia está en los detalles</p>
          <h2 id="reasons-title">¿Por qué elegirnos?</h2>
          <p>
            Un lugar especial desde donde descubrir Uvita y disfrutar el
            Pacífico Sur a tu propio ritmo.
          </p>
        </div>
        <ul className="reasons-list">
          {reasonsToStay.map((reason) => (
            <li key={reason}>
              <span aria-hidden="true">✓</span>
              {reason}
            </li>
          ))}
        </ul>
      </section>

      <section
        className="home-reviews"
        aria-labelledby="reviews-title"
      >
        <p className="section-eyebrow">Experiencias que inspiran</p>
        <h2 id="reviews-title">Lo que dicen nuestros huéspedes</h2>
        <p>Próximamente compartiremos aquí las opiniones de nuestros huéspedes.</p>
      </section>

      <section
        className="home-location"
        id="ubicacion"
        aria-labelledby="location-title"
      >
        <div className="location-copy">
          <p className="section-eyebrow">Encuéntranos en el Pacífico Sur</p>
          <h2 id="location-title">Ubicación</h2>
          <p className="location-address">
            Uvita de Osa, Puntarenas, Costa Rica
          </p>
          <p>
            Ubicada cerca del Parque Nacional Marino Ballena, restaurantes,
            supermercados y las mejores playas de la zona.
          </p>
          <a
            className="home-button home-button-dark"
            href="https://www.google.com/maps/search/?api=1&query=Uvita%20de%20Osa%2C%20Puntarenas%2C%20Costa%20Rica"
            target="_blank"
            rel="noreferrer"
          >
            Ver ubicación en el mapa <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="location-image-wrap">
          <Image
            className="location-image"
            src="/imagenes/Portada.jpg"
            alt="Paisaje costero del Pacífico Sur de Costa Rica"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
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
