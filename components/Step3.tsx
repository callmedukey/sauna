"use client";

import React, { useState } from "react";

import { Calendar } from "@/components/ui/calendar";

const Step3 = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeOptions = [
    "09:00",
    "10:20",
    "11:40",
    "13:00",
    "14:20",
    "15:40",
    "17:00",
    "18:20",
    "19:40",
    "21:00",
    "22:20",
    "23:40",
  ];

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="mx-auto w-full max-w-5xl p-6">
        {/* Step 3 Heading */}
        <div className="mb-6 text-left">
          <h2 className="text-sm sm:text-base">
            <span className="">step 3</span>{" "}
            <span className="ml-2 text-lg font-bold sm:text-2xl">예약 일시 선택</span>
          </h2>
        </div>

        {/* Layout */}
        <div className="flex flex-col gap-6 border-b-4 border-b-black pb-8  sm:flex-row sm:items-start sm:gap-8">
          {/* Calendar Section */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border shadow-md"
            />
          </div>

          {/* Time Selection Section */}
          <div className="w-full sm:w-1/2 lg:w-2/3">
            <h3 className="mb-4 text-sm font-semibold">방문 시간 선택</h3>
            <div className="grid grid-cols-3 gap-3 ">
              {timeOptions.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`flex h-12 items-center justify-center rounded-md border p-2 text-sm font-medium transition ${
                    selectedTime === time
                      ? "bg-customBrown text-white"
                      : "bg-white text-gray-700"
                  } hover:bg-customBrown hover:text-white`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
