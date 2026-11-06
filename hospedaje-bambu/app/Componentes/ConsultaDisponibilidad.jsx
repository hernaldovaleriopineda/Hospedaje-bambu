"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function getLocalDate() {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 10);
}

export default function ConsultaDisponibilidad() {
  const [fechaLlegada, setFechaLlegada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [cantidadPersonas, setCantidadPersonas] = useState("1");
  const [mensaje, setMensaje] = useState("");
  const [urlReserva, setUrlReserva] = useState("");
  const llegadaRef = useRef(null);
  const salidaRef = useRef(null);

  useEffect(() => {
    const fechaMinima = getLocalDate();
    llegadaRef.current.min = fechaMinima;
    salidaRef.current.min = fechaMinima;
  }, []);

  function consultarDisponibilidad(event) {
    event.preventDefault();
    setUrlReserva("");

    if (fechaLlegada < getLocalDate()) {
      setMensaje("Elige una fecha de llegada a partir de hoy.");
      return;
    }

    if (fechaSalida <= fechaLlegada) {
      setMensaje("La fecha de salida debe ser posterior a la de llegada.");
      return;
    }

    const personas = Number(cantidadPersonas);
    if (!Number.isInteger(personas) || personas < 1 || personas > 32767) {
      setMensaje("Indica una cantidad de personas válida.");
      return;
    }

    const parametros = new URLSearchParams({
      fecha_llegada: fechaLlegada,
      fecha_salida: fechaSalida,
      cantidad_personas: String(personas),
    });

    setMensaje(
      "Las fechas son válidas. La disponibilidad final se confirma al solicitar la reserva.",
    );
    setUrlReserva(`/Reserva?${parametros.toString()}`);
  }

  return (
    <section
      className="home-availability"
      id="disponibilidad"
      aria-labelledby="availability-title"
    >
      <div className="availability-copy">
        <p className="section-eyebrow">Planea tu escapada</p>
        <h2 id="availability-title">Consulta disponibilidad</h2>
        <p>Selecciona tus fechas y revisa rápidamente que estén en orden.</p>
      </div>
      <form className="availability-form" onSubmit={consultarDisponibilidad}>
        <div className="availability-field">
          <label htmlFor="availability-arrival">Llegada</label>
          <input
            id="availability-arrival"
            ref={llegadaRef}
            type="date"
            value={fechaLlegada}
            onChange={(event) => {
              setFechaLlegada(event.target.value);
              salidaRef.current.min = event.target.value || getLocalDate();
              setMensaje("");
              setUrlReserva("");
            }}
            required
          />
        </div>
        <div className="availability-field">
          <label htmlFor="availability-departure">Salida</label>
          <input
            id="availability-departure"
            ref={salidaRef}
            type="date"
            value={fechaSalida}
            onChange={(event) => {
              setFechaSalida(event.target.value);
              setMensaje("");
              setUrlReserva("");
            }}
            required
          />
        </div>
        <div className="availability-field">
          <label htmlFor="availability-guests">Cantidad de personas</label>
          <input
            id="availability-guests"
            type="number"
            min="1"
            max="32767"
            step="1"
            value={cantidadPersonas}
            onChange={(event) => {
              setCantidadPersonas(event.target.value);
              setMensaje("");
              setUrlReserva("");
            }}
            required
          />
        </div>
        <button className="home-button home-button-dark" type="submit">
          Consultar fechas
        </button>
        {mensaje && (
          <p
            className="availability-message"
            role={urlReserva ? "status" : "alert"}
          >
            {mensaje}
            {urlReserva && (
              <>
                {" "}
                <Link href={urlReserva}>Continuar con estas fechas</Link>
              </>
            )}
          </p>
        )}
      </form>
    </section>
  );
}
