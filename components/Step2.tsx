"use client";

import React, { useState } from "react";

interface RoomOption {
  id: number;
  title: string;
  price: string;
  description: string;
  extraFee: string;
}

const roomOptions: RoomOption[] = [
  {
    id: 1,
    title: "여성룸[60분]",
    price: "45,000원 (기본1인)",
    description: "인원추가 시 1인당 35,000원 추가",
    extraFee: "추가비용 있음",
  },
  {
    id: 2,
    title: "여성룸[90분]",
    price: "55,000원 (기본1인)",
    description: "인원추가 시 1인당 35,000원 추가",
    extraFee: "추가비용 있음",
  },
  {
    id: 3,
    title: "여성룸+대형사우나룸[100분]",
    price: "12,000원 (기본2인)",
    description: "인원추가 시 1인당 35,000원 추가",
    extraFee: "추가비용 있음",
  },
  {
    id: 4,
    title: "여성룸[60분]",
    price: "45,000원 (기본1인)",
    description: "인원추가 시 1인당 35,000원 추가",
    extraFee: "추가비용 있음",
  },
];

const Step2: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  const handleSelectRoom = (id: number) => {
    setSelectedRoom(id);
  };

  return (
    <div className="flex h-full items-center justify-center  px-4">
      <div className="mx-auto w-full max-w-5xl border-b-4 border-b-black p-6">
        {/* Step 2 Heading */}
        <div className="mb-6 text-center sm:text-left">
          <h2 className="text-sm sm:text-base">
            <span className="">step 2</span>{" "}
            <span className="ml-2 text-lg font-bold sm:text-2xl">룸 선택</span>
          </h2>
        </div>

        {/* Room Options */}
        <div className="grid w-full max-w-5xl  grid-cols-2 gap-4 lg:grid-cols-3">
          {roomOptions.map((room) => (
            <button
              key={room.id}
              onClick={() => handleSelectRoom(room.id)}
              className={`flex flex-col items-center justify-center gap-2 rounded-lg border p-4 text-center  transition ${
                selectedRoom === room.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 bg-white"
              } hover:border-blue-500 hover:bg-blue-50`}
            >
              <h3 className="text-sm font-semibold">{room.title}</h3>
              <p className="text-sm text-gray-700">{room.price}</p>
              <p className="text-xs text-gray-500">{room.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step2;
