import './PagoEstilos.css';

function RealizarPago() {
  return (
    <section className="payment-page">
      <section className="payment-card">
        <div className="payment-content">
          <div className="payment-info">
            <span className="payment-badge">Pago seguro</span>
            <h1>Finaliza tu reserva</h1>
            <p>
              Siente la tranquilidad de completar tu pago en minutos con una
              experiencia clara, segura y moderna.
            </p>

            <ul className="feature-list">
              <li>Reserva confirmada al instante</li>
              <li>Protección con pago cifrado</li>
              <li>Soporte disponible en caso de dudas</li>
            </ul>
          </div>

          <aside className="payment-summary">
            <p className="summary-label">Resumen</p>

            <div className="summary-row">
              <span>Habitación Deluxe</span>
              <strong>$300.00</strong>
            </div>  

            <div className="room-description">
              <span className="room-description-mark" aria-hidden="true">
                ✦
              </span>
              <p>
                Un espacio amplio y acogedor, pensado para descansar y disfrutar
                de una estancia especial.
              </p>
            </div>

            <div className="total-row">
              <span>Total</span>
              <strong>$300.00</strong>
            </div>

            <a
              className="payment-button"
              href="https://buy.stripe.com/test_7sY5kFdlqf7bgdHg0h2Nq00"
              target="_blank"
              rel="noreferrer"
            >
              Gestionar pago
            </a>

            <p className="safe-note">Protegido por Stripe y cifrado SSL</p>
          </aside>
        </div>
      </section>
    </section>
  );
}

export default RealizarPago;