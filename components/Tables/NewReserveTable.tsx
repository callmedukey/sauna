import { fetchReservations } from "@/app/actions/fetchReservation";
import NewReserveForm from "@/components/Form/NewReserveForm";
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


const NewReserveTable = async () => {
  const reservations = await fetchReservations(); // Use server action to fetch data

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
            <DialogTrigger className="rounded bg-black px-6 py-3 text-white hover:bg-gray-800 focus:outline-none">
              네이버 예약 추가
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
