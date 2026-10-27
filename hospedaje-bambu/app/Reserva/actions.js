"use server";

//import { prisma } from "@/lib/prisma";

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
    const fechaLlegada = convertirFecha(obtenerTexto(formData, "fecha_llegada"));
    const fechaSalida = convertirFecha(obtenerTexto(formData, "fecha_salida"));
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
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0); // Establecer la hora a medianoche para comparar solo la fecha

    if (fechaLlegada < fechaActual) {
        return { status: "error", message: "La fecha de llegada no puede ser anterior a la fecha actual." };
    }   

    // Validar que la reserva no se solape con otra reserva existente
    const reservasExistentes = await prisma.reservarTodo.findMany({
        where: {
            fecha_llegada: {
                lte: fechaSalida
            },
            fecha_salida: {
                gte: fechaLlegada
            }
        }
    });

    if (reservasExistentes.length > 0) {
        return { status: "error", message: "Ya existe una reserva para las fechas seleccionadas." };
    }

    // Guardar la reserva en la base de datos
    try {
        await prisma.reservarTodo.create({
            data: {
                nombre: nombre,
                email: email,
                cantidad_personas: cantidadPersonas,
                fecha_llegada: fechaLlegada,
                fecha_salida: fechaSalida,
            },
        });
    } catch (error) {
        console.error("No se pudo guardar la reserva:", error);
        return {
            status: "error",
            message: "No se pudo guardar la reserva. Inténtalo de nuevo más tarde.",
        };
    }

    return { status: "success", message: "Tu solicitud de reserva fue enviada correctamente." };
}
