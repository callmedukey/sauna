'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function saveReservationAction(data: {
  name: string;
  date: string;
  time: string;
  reservationNumber: string;
}) {
  try {
    const newReservation = await prisma.reservation.create({
      data: {
        name: data.name,
        date: new Date(data.date),
        time: data.time,
        reservationNumber: data.reservationNumber,
      },
    });
    return { success: true, reservation: newReservation };
  } catch (error) {
    console.error('Error saving reservation:', error);
    return { success: false, error: 'Failed to save reservation' };
  }
}
