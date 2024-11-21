import { prisma } from "@/lib/prisma";

export async function fetchReservations() {
  try {
    const reservations = await prisma.reservation.findMany({
      select: {
        id: true,
        name: true,
        date: true,
        time: true,
        reservationNumber: true,
      },
    });
    return reservations;
  } catch (error) {
    console.error("Erro ao buscar reservas:", error);
    throw new Error("Falha ao buscar reservas");
  }
}
