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
    return reservations.map((reservation) => ({
      ...reservation,
      date: new Date(reservation.date).toISOString(), // Ensure consistent date formatting
    }));
  } catch (error) {
    console.error("Error fetching reservations:", error);
    throw new Error("Failed to fetch reservations");
  }
}
