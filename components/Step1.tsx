"use client";

import React, { useState } from "react";

interface CounterProps {
  min?: number;
  max?: number;
}

const Counter: React.FC<CounterProps> = ({ min = 0, max = 10 }) => {
  const [count, setCount] = useState(min);

  const increment = () => {
    if (count < max) setCount(count + 1);
  };

  const decrement = () => {
    if (count > min) setCount(count - 1);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={decrement}
        className="flex size-8 items-center justify-center rounded-full border text-lg font-bold text-gray-700 hover:bg-gray-100"
      >
        −
      </button>
      <span className="text-lg font-semibold">{count}</span>
      <button
        onClick={increment}
        className="flex size-8 items-center justify-center rounded-full border text-lg font-bold text-gray-700 hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
};

const Step1 = () => {
  return (
    <div className="flex h-full items-center justify-center px-4">
      <div className="mx-auto w-full max-w-5xl  p-6 ">
        {/* Step 1 Heading */}
        <div className="mb-6 text-center sm:text-left">
          <h2 className="text-sm sm:text-base">
            <span className="">step 1</span>{" "}
            <span className="ml-2 text-lg font-bold sm:text-2xl">인원</span>
          </h2>
        </div>

        {/* Layout */}
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          {/* Left Column */}
          <div className="flex flex-col space-y-6 sm:flex-1">
            <div className="flex items-center justify-between sm:justify-start sm:gap-4">
              <p className="w-1/2 text-sm sm:w-auto sm:text-base">
                성인 여성<br />
                <span className="text-xs text-gray-500 sm:text-sm">만 12세 이상</span>
              </p>
              <Counter min={0} max={10} />
            </div>
            <div className="flex items-center justify-between sm:justify-start sm:gap-4">
              <p className="w-1/2 text-sm sm:w-auto sm:text-base">
                어린이<br />
                <span className="text-xs text-gray-500 sm:text-sm">만 6 - 12 세</span>
              </p>
              <Counter min={0} max={10} />
            </div>
          </div>

          {/* Middle Column */}
          <div className="mt-6 flex flex-col space-y-6 sm:mt-0 sm:flex-1">
            <div className="flex items-center justify-between sm:justify-start sm:gap-4">
              <p className="w-1/2 text-sm sm:w-auto sm:text-base">
                성인 남성<br />
                <span className="text-xs text-gray-500 sm:text-sm">만 12세 이상</span>
              </p>
              <Counter min={0} max={10} />
            </div>
            <div className="flex items-center justify-between sm:justify-start sm:gap-4">
              <p className="w-1/2 text-sm sm:w-auto sm:text-base">
                유아<br />
                <span className="text-xs text-gray-500 sm:text-sm">만 6세 미만</span>
              </p>
              <Counter min={0} max={10} />
            </div>
          </div>

          {/* Right Column */}
          <div className="mt-6 flex flex-col items-center justify-center sm:mt-0 sm:pl-4">
            <button className="  w-auto rounded-md bg-customBrown px-6 py-2 text-white">
              예약 인원 확인
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="my-8 border-b-4  border-t-2 border-b-black p-4 pb-8">
          <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-700">
            <li>룸별 인원제한 - 일반룸 (1명~3명) / 일반룸+대형사우나룸 (3명~6명)</li>
            <li>만6세 미만 유아는 무료로 입장할 수 있습니다.</li>
            <li>만6세~12세 어린이의 입장료는 20,000원입니다.</li>
            <li>
              솔로사우나 노량진점에서는 남성과 여성이 함께 이용할 수 있는 대형사우나룸이 제공됩니다.
              혼성 이용 가능 공간은 대형사우나룸에 한정됩니다. (샤워룸은 공용 사용 불가)
            </li>
            <li>
              이용제한 인원 수 내에서는 현장에서 추가 인원 결제가 가능합니다. (이용제한 인원 수를 초과할 경우 입장이 제한이 될 수 있습니다.)
            </li>
            <li>
              예약에 도움이 필요하신 고객님께서는 편하게 전화주시면 안내드리겠습니다.
              (tel. 070-8860-8553)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Step1;
