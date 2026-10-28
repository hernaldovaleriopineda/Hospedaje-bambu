import Link from "next/link";

export default function Home() {
  return (
    <section className="home-page">
      <div className="home-card">
        <p className="home-eyebrow">Hospedaje Bambu</p>
        <h1 className="home-title">Descansa cerca de la naturaleza</h1>
        <p className="home-description">
          Encuentra un espacio acogedor para desconectarte, disfrutar y sentirte
          como en casa. Tu próxima estadía comienza aquí.
        </p>
        <Link className="home-button" href="/Reserva">
          Reserva tu estadía
        </Link>
      </div>
    </section>
  );
}
