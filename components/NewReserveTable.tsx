"use client";

import React, { useEffect, useState } from "react";


import NewReserveForm from "@/components/NewReserveForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Reservation {
  id: number;
  name: string;
  date: string;
  time: string;
  reservationNumber: string;
}

const NewReserveTable = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    async function loadReservations() {
      try {
        const response = await fetch("/api/reservations");
        if (!response.ok) {
          throw new Error("Falha ao buscar dados");
        }
        const data: { id: number; name: string; date: Date; time: string; reservationNumber: string; }[] = await response.json();
  
        // Converte 'date' de Date para string
        const formattedData = data.map(reservation => ({
          ...reservation,
          date: new Date(reservation.date).toISOString(), // ou use toLocaleDateString() para formato legível
        }));
  
        setReservations(formattedData); // Define o estado com as datas convertidas para string
      } catch (error) {
        console.error("Erro ao carregar reservas:", error);
      }
    }
  
    loadReservations();
  }, []);
  return (
    <div className="mx-auto mt-12 w-full max-w-[950px] px-4">
      <h1 className="mb-6 text-start text-xl font-bold sm:text-2xl">네이버 예약</h1>

      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[700px] sm:w-auto">
            <TableHeader className="border-b-2 border-black">
              <TableRow>
                <TableHead className="text-center text-[12px] sm:text-[15px]">
                  이름
                </TableHead>
                <TableHead className="text-center text-[12px] sm:text-[15px]">
                  날짜
                </TableHead>
                <TableHead className="text-center text-[12px] sm:text-[15px]">
                  시간
                </TableHead>
                <TableHead className="text-center text-[12px] sm:text-[15px]">
                  예약 번호
                </TableHead>
                <TableHead className="text-center text-[12px] sm:text-[15px]">
                  작업
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
              {reservations.map((reservation) => (
                <TableRow key={reservation.id}>
                  <TableCell className="text-center text-[10px] sm:text-[12px]">
                    {reservation.name}
                  </TableCell>
                  <TableCell className="text-center text-[10px] sm:text-[12px]">
                    {new Date(reservation.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-center text-[10px] sm:text-[12px]">
                    {reservation.time}
                  </TableCell>
                  <TableCell className="text-center text-[10px] sm:text-[12px]">
                    {reservation.reservationNumber}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center gap-2">
                      <button className="h-[40px] w-[70px] rounded bg-black text-[10px] text-white sm:text-[12px]">
                        약관
                      </button>
                      <button className="h-[40px] w-[70px] rounded bg-gray-300 text-[10px] text-gray-700 sm:text-[12px]">
                        취소
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 flex justify-end">
          <Dialog>
            <DialogTrigger>
              <button className="rounded bg-black px-6 py-3 text-white hover:bg-gray-800 focus:outline-none">
                네이버 예약 추가
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle></DialogTitle>
              </DialogHeader>
              <NewReserveForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default NewReserveTable;
