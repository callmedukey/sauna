
  import React from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ReservationForm from "./Form/ReservationForm";

  

  
  export default function TabbedTable() {
    return (
      <div className="mx-auto min-h-[550px] px-4 sm:px-8">
        <Tabs defaultValue="account-info" className="my-8 sm:my-[115px] xl:my-[125px]">
          <TabsList className="flex flex-wrap justify-center gap-[20px] bg-white  sm:flex-row sm:gap-[50px] md:gap-[100px] lg:gap-[150px] xl:gap-[150px]">
            <TabsTrigger value="account-info" className="text-base sm:text-lg lg:text-[24px]">
              계정 정보
            </TabsTrigger>
            <TabsTrigger value="make-reservation" className="text-base sm:text-lg lg:text-[24px]">
              예약 하기
            </TabsTrigger>
            <TabsTrigger value="reservation-history" className="text-base sm:text-lg lg:text-[24px]">
              예약 내역
            </TabsTrigger>
            <TabsTrigger value="points" className="text-base sm:text-lg lg:text-[24px]">
              포인트
            </TabsTrigger>
          </TabsList>
  
          <TabsContent value="account-info" className="mt-[100px] sm:mt-[60px] lg:mt-[150px]">
          <ReservationForm/>
          </TabsContent>
  
          <TabsContent value="make-reservation" className="mt-[100px] sm:mt-[60px] lg:mt-[150px]">
            {/* Placeholder for Reservation Content */}
          </TabsContent>
          <TabsContent value="reservation-history" className=" mt-[100px] flex items-center justify-center sm:mt-[60px] lg:mt-[150px]">
  <Table className="mx-auto w-full max-w-[950px] border-t-2 border-black">
    <TableHeader>
      <TableRow className="flex justify-evenly">
        <TableHead className="flex-1 text-center text-sm sm:text-[18px]">날짜</TableHead>
        <TableHead className="flex-1 text-center text-sm sm:text-[18px]">룸</TableHead>
        <TableHead className="flex-1 text-center text-sm sm:text-[18px]">인원</TableHead>
        <TableHead className="flex-1 text-center text-sm sm:text-[18px]">이용 시간</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="text-center text-xs sm:text-[15px]">&nbsp;</TableCell>
        <TableCell className="text-center text-xs sm:text-[15px]">&nbsp;</TableCell>
        <TableCell className="text-center text-xs sm:text-[15px]">&nbsp;</TableCell>
        <TableCell className="text-center text-xs sm:text-[15px]">&nbsp;</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TabsContent>

          
          <TabsContent value="points" className="mt-[100px] sm:mt-[60px] lg:mt-[150px]">
            <div className="mx-auto w-full max-w-md rounded-lg border border-gray-300 p-[100px] sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <h2 className="text-center  text-[26px] font-bold ">보유 포인트</h2>
              <p className="mt-2 text-center text-[36px] font-bold ">3,000P</p>
              <div className="mt-4 w-full border-b-2 border-black"></div>
              
              <div className="mt-4">
                <label className=" my-[80px] block text-center text-sm sm:text-base lg:text-lg">
                  포인트를 충전하기
                </label>
                <select className="w-full rounded  border-gray-300 bg-customBege p-2 text-sm sm:text-base lg:text-lg">
                  <option>충전할 포인트 금액을 선택해 주세요.</option>
                  <option>10,500P (10,000원 충전 시 500P 추가 적립)</option>
                  <option>21,000P (20,000원 충전 시 1,000P 추가 적립)</option>
                  <option>31,500P (30,000원 충전 시 1,500P 추가 적립)</option>
                  <option>42,000P (40,000원 충전 시 2,000P 추가 적립)</option>
                  <option>52,500P (50,000원 충전 시 2,500P 추가 적립)</option>
                  <option>63,000P (60,000원 충전 시 3,000P 추가 적립)</option>
                  <option>73,500P (70,000원 충전 시 3,500P 추가 적립)</option>
                  <option>84,000P (80,000원 충전 시 4,000P 추가 적립)</option>
                  <option>94,500P (90,000원 충전 시 4,500P 추가 적립)</option>
                  <option>110,000P (100,000원 충전 시 10,000P 추가 적립)</option>
                  <option>210,000P (200,000원 충전 시 10,000P 추가 적립)</option>
                  <option>330,000P (300,000원 충전 시 30,000P 추가 적립)</option>
                  <option>600,000P (500,000원 충전 시 100,000P 추가 적립)</option>
                  <option>1,200,000P (1,000,000원 충전 시 200,000P 추가 적립)</option>
                </select>
              </div>
  
              <div className=" mt-[100px] flex justify-center gap-[40px] ">
                <p className="text-base font-bold sm:text-lg lg:text-xl">총 요금</p>
                <p className="text-lg font-bold text-gray-700 sm:text-xl lg:text-2xl">240,000원</p>
              </div>
  
              <div className="mt-4 flex items-center justify-center">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-xs text-gray-600 sm:text-sm lg:text-base">
                  예약과 관련된 모든 조회의서 및 약관에 동의합니다
                </label>
              </div>
  
              <div className="mt-[50px] flex justify-center">
                <button className=" min-w-[150px] items-center rounded-[15px] bg-customBrown py-3 text-sm font-bold text-white sm:text-base lg:text-lg">
                  결제 하기
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  }
  