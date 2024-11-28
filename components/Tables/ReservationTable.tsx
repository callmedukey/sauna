import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ReservationTable = () => {
  // Sample data array
  const reservations = [
    {
      name: "홍길동",
      people: "성인 남성 1 어린이 1",
      room: "혼합 룸",
      duration: "90 분",
      date: "2024/10/21",
      time: "11:30",
      request: "추가 요청 메시지가 들어가는 곳",
    },
    {
      name: "김철수",
      people: "성인 남성 2",
      room: "온돌 룸",
      duration: "120 분",
      date: "2024/11/01",
      time: "14:00",
      request: "미리 전화 요청",
    },
    // Add more reservations as needed
  ];

  return (
    <div className="mx-auto mt-12 w-full max-w-[950px] px-4">
      {/* Title */}
      <h1 className="mb-6 text-start text-xl font-bold sm:text-2xl">예약 관리</h1>

      {/* Table and Buttons Container */}
      <div className="flex flex-col">
        {/* Table */}
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[700px] sm:w-auto">
            <TableHeader className="border-b-2 border-black">
              <TableRow className="gap-4 sm:gap-8">
                <TableHead className="flex-1 whitespace-nowrap px-4 py-3 text-center text-[12px] sm:text-[15px]">
                  이름
                </TableHead>
                <TableHead className="flex-1 px-4 py-3 text-center text-[12px] sm:text-[15px]">
                  인원
                </TableHead>
                <TableHead className="flex-1 px-4 py-3 text-center text-[12px] sm:text-[15px]">
                  룸
                </TableHead>
                <TableHead className="flex-1 px-4 py-3 text-center text-[12px] sm:text-[15px]">
                  분
                </TableHead>
                <TableHead className="flex-1 px-4 py-3 text-center text-[12px] sm:text-[15px]">
                  날짜
                </TableHead>
                <TableHead className="flex-1 px-4 py-3 text-center text-[12px] sm:text-[15px]">
                  시간
                </TableHead>
                <TableHead className="flex-1 px-4 py-3 text-center text-[12px] sm:text-[15px]">
                  추가 요청
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
              {reservations.map((reservation, index) => (
                <TableRow key={index} className="gap-4 sm:gap-8">
                  <TableCell className="px-4 py-3 text-center text-[10px] sm:text-[12px]">
                    {reservation.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center text-[10px] sm:text-[12px]">
                    {reservation.people}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center text-[10px] sm:text-[12px]">
                    {reservation.room}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center text-[10px] sm:text-[12px]">
                    {reservation.duration}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center text-[10px] sm:text-[12px]">
                    {reservation.date}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center text-[10px] sm:text-[12px]">
                    {reservation.time}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center text-[10px] sm:text-[12px]">
                    {reservation.request}
                  </TableCell>
                  {/* Action Buttons */}
                  <TableCell className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="h-[40px] w-[70px] min-w-[70px] rounded bg-black text-[10px] text-white sm:text-[12px]">
                        약관
                      </button>
                      <button className="h-[40px] w-[70px] min-w-[70px] rounded bg-gray-300 text-[10px] text-gray-700 sm:text-[12px]">
                        취소
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ReservationTable;
