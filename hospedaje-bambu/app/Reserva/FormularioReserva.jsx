"use client";

import { useActionState } from "react";
import { crearReserva } from "./actions";
import "./ReservaEstilos.css";

const estadoInicial = { status: "", message: "" };

function FormularioReserva() {
    const [estado, formAction, pendiente] = useActionState(crearReserva, estadoInicial);

    return (
        <form className="form" action={formAction}>
            <div className="field">
                <label className="label" htmlFor="nombre">Nombre completo</label>
                <input
                    className="input"
                    type="text"
                    id="nombre"
                    name="nombre"
                    autoComplete="name"
                    placeholder="¿Cómo te llamas?"
                    maxLength={150}
                    required
                />
            </div>
            <div className="field">
                <label className="label" htmlFor="email">Correo electrónico</label>
                <input
                    className="input"
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="nombre@ejemplo.com"
                    maxLength={254}
                    required
                />
            </div>
            <div className="field">
                <label className="label" htmlFor="cantidad_personas">
                    Cantidad de personas
                </label>
                <input
                    className="input"
                    type="number"
                    id="cantidad_personas"
                    name="cantidad_personas"
                    min="1"
                    max="32767"
                    step="1"
                    placeholder="1"
                    required
                />
            </div>
            <div className="field">
                <label className="label" htmlFor="fecha_llegada">Fecha de llegada</label>
                <input
                    className="input"
                    type="date"
                    id="fecha_llegada"
                    name="fecha_llegada"
                    required
                />
            </div>
            <div className="field">
                <label className="label" htmlFor="fecha_salida">Fecha de salida</label>
                <input
                    className="input"
                    type="date"
                    id="fecha_salida"
                    name="fecha_salida"
                    required
                />
            </div>
            
            {estado.message && (
                <p
                    className={`status ${estado.status === "success" ? "statusSuccess" : "statusError"}`}
                    role={estado.status === "success" ? "status" : "alert"}
                >
                    {estado.message}
                </p>
            )}
            <button className="submit" type="submit" disabled={pendiente}>
                {pendiente ? "Enviando..." : "Solicitar reserva"}
            </button>
        </form>
    );
}

export default FormularioReserva;
