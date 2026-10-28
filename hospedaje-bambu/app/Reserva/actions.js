"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

// Función para obtener y limpiar el texto de un campo del formulario
function obtenerTexto(formData, campo) {
    const valor = formData.get(campo);
    return typeof valor === "string" ? valor.trim() : "";
}

function convertirFecha(fecha) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
        return null;
    }

    const valor = new Date(`${fecha}T00:00:00.000Z`);
    return Number.isNaN(valor.getTime()) || valor.toISOString().slice(0, 10) !== fecha
        ? null
        : valor;
}

export async function crearReserva(_estadoAnterior, formData) {
    const nombre = obtenerTexto(formData, "nombre");
    const email = obtenerTexto(formData, "email");
    const cantidad = obtenerTexto(formData, "cantidad_personas");
    const fechaLlegadaTexto = obtenerTexto(formData, "fecha_llegada");
    const fechaSalidaTexto = obtenerTexto(formData, "fecha_salida");
    const fechaLlegada = convertirFecha(fechaLlegadaTexto);
    const fechaSalida = convertirFecha(fechaSalidaTexto);
    const cantidadPersonas = Number(cantidad);

    // Validaciones de los campos del formulario
    if (!nombre || nombre.length > 150) {
        return { status: "error", message: "Ingresa un nombre de hasta 150 caracteres." };
    }

    if (
        !email ||
        email.length > 254 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
        return { status: "error", message: "Ingresa un correo electrónico válido." };
    }

    if (!/^\d+$/.test(cantidad) || !Number.isSafeInteger(cantidadPersonas) ||
        cantidadPersonas < 1 || cantidadPersonas > 32767) {
        return { status: "error", message: "La cantidad debe ser un número entero entre 1 y 32767." };
    }

    if (!fechaLlegada || !fechaSalida || fechaLlegada >= fechaSalida) {
        return { status: "error", message: "Ingresa fechas válidas; la salida debe ser posterior a la llegada." };
    }

    // Validar que la fecha de llegada no sea anterior a la fecha actual
    const ahora = new Date();
    const fechaActual = [
        ahora.getFullYear(),
        String(ahora.getMonth() + 1).padStart(2, "0"),
        String(ahora.getDate()).padStart(2, "0"),
    ].join("-");

    if (fechaLlegadaTexto < fechaActual) {
        return { status: "error", message: "La fecha de llegada no puede ser anterior a la fecha actual." };
    }

    
    try {
        
        const reservaExistente = await prisma.reservarTodo.findFirst({
            where: {
                FechaLlegada: {
                    lt: fechaSalida,
                },
                OR: [
                    {
                        FechaSalida: {
                            gt: fechaLlegada,
                        },
                    },
                    {
                        FechaSalida: null,
                    },
                ],
            },
            select: {
                ID: true,
            },
        });

        if (reservaExistente) {
            return { status: "error", message: "Ya existe una reserva para las fechas seleccionadas." };
        }
        

        await prisma.reservarTodo.create({
            data: {
                Correo: email,
                Nombre: nombre,
                cantidadPersonas: cantidadPersonas,
                FechaLlegada: fechaLlegada,
                FechaSalida: fechaSalida,
            },
        });
    } catch (error) {
        console.error("No se pudo guardar la reserva:", error);
        return {
            status: "error",
            message: "No se pudo guardar la reserva. Inténtalo de nuevo más tarde.",
        };
    }

    redirect("/Pago");
}
