

import "./ReservaEstilos.css";
import FormularioReserva from "./FormularioReserva";

function Reserva() {
    return (
        <section className="page" aria-labelledby="reservation-title">
            <div className="card">
                <p className="eyebrow">Bambuk Bio</p>
                <h1 className="title" id="reservation-title">
                    Reserva tu estadía
                </h1>
                <p className="description">
                    Completa tus datos y prepárate para descansar en la naturaleza.
                </p>
                <FormularioReserva />
            </div>
        </section>
    );
}
export default Reserva;