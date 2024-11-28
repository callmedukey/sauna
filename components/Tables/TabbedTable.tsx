
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
  
  export default function TabbedTable() {
    return (
      <div className="mx-auto">
        <Tabs defaultValue="notices" className=" my-[115px] xl:my-[125px]">
          <TabsList className="flex  justify-center gap-4 bg-white sm:flex-row sm:gap-[150px]">
            <TabsTrigger value="notices" className="text-lg sm:text-[24px]">
              공지사항
            </TabsTrigger>
            <TabsTrigger value="inquiries" className="text-lg sm:text-[24px]">
              문의하기
            </TabsTrigger>
          </TabsList>
  
          <TabsContent value="notices" className="mt-[60px] sm:mt-[150px]">
            <Table className="mx-auto w-full max-w-full border-t-2 border-black sm:max-w-[1116px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="py-3 text-center text-sm sm:py-5 sm:text-[18px]">작성자</TableHead>
                  <TableHead className="text-center text-sm sm:text-[18px]">제목</TableHead>
                  <TableHead className="text-center text-sm sm:text-[18px]">날짜</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center text-xs sm:text-[15px]"></TableCell>
                  <TableCell className="text-center text-xs sm:text-[15px]"></TableCell>
                  <TableCell className="text-center text-xs sm:text-[15px]"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
  
          <TabsContent value="inquiries" className="mt-[50px] sm:mt-[150px]">
            <Table className="mx-auto w-full max-w-full border-t-2 border-black sm:max-w-[1116px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="py-3 text-center text-sm sm:py-5 sm:text-[18px]">작성자</TableHead>
                  <TableHead className="text-center text-sm sm:text-[18px]">제목</TableHead>
                  <TableHead className="text-center text-sm sm:text-[18px]">날짜</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center text-xs sm:text-[15px]"></TableCell>
                  <TableCell className="text-center text-xs sm:text-[15px]"></TableCell>
                  <TableCell className="text-center text-xs sm:text-[15px]"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    );
  }