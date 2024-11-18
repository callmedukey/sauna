"use client";

import React, { useState } from "react";

const Step4: React.FC = () => {
  const [pointsUsed, setPointsUsed] = useState<string | number>(""); // Points input
  const [isAgreed, setIsAgreed] = useState(false); // Checkbox agreement

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-5xl p-6">
        {/* Step 4 Heading */}
        <div className="mb-6 text-left">
          <h2 className="text-sm sm:text-base">
            <span className="">step 4</span>{" "}
            <span className="ml-2 text-lg font-bold sm:text-2xl">예약 확인</span>
          </h2>
        </div>

        {/* Layout */}
        <div className="border-2 border-b-0 p-6 sm:p-12 border-black">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            {/* Left Section */}
            <div className="flex-1">
              {/* Room Selection Info */}
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold">룸 선택</h3>
                <div className="mb-9 flex flex-wrap gap-4 sm:gap-[30px] text-[16px] sm:text-[20px] text-gray-700">
                  <p>여성룸[60분]</p>
                  <p>성인 여성 2인</p>
                  <p>어린이 1인</p>
                </div>
                <hr className="border-t border-gray-300" />
              </div>

              {/* Additional Request */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">추가 요청</h3>
                <p className="mb-4 text-sm sm:text-base text-gray-500">
                  요청하신 내용은 솔로 사우나 직원과 사정에 따라 반영되지 않을 수 있으며, 별도 요금이 발생할 수 있으니 참고하시기 바랍니다.
                </p>
                <textarea
                  className="w-full resize-none rounded-md border p-2 text-sm sm:text-base text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  rows={5}
                  placeholder="추가 요청을 작성해 주세요"
                ></textarea>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full sm:w-1/3">
              <div className="mb-6 rounded-lg bg-customBege  p-4 sm:p-6">
                <h3 className="mb-6 text-sm sm:text-base">기본요금</h3>
                <ul className="list-disc pl-5 mb-[20px] sm:mb-[35px] text-sm sm:text-base text-gray-700">
                  <li className="flex justify-between">
                    <span>2024년 1월 1일</span>
                    <span>120,000원</span>
                  </li>
                </ul>
                <p className="mt-6 flex justify-between text-sm sm:text-base mb-[20px] sm:mb-[35px] text-gray-700">
                  <span>추가 요금</span>
                  <span>120,000원</span>
                </p>
                <hr className="mt-[20px] sm:mt-[35px] mb-[30px] sm:mb-[55px] border-t border-gray-300" />
                <div className="flex items-center mb-[30px] sm:mb-[70px] justify-between gap-2">
                  <p className="text-sm sm:text-base text-gray-700">
                    포인트 사용 <br />
                    <span className="text-sm text-gray-500">보유 포인트 3000P</span>
                  </p>
                  <input
                    type="text"
                    value={pointsUsed}
                    onChange={(e) => setPointsUsed(e.target.value)}
                    className="w-16 sm:w-20 rounded-md border p-2 text-sm sm:text-base text-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <p className="flex justify-between text-lg font-semibold text-gray-800">
                  <span>총 요금</span>
                  <span>240,000원</span>
                </p>
                <p className="mt-4 text-center text-sm sm:text-base text-gray-500 cursor-pointer">
                  취소 규정 내용 확인
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agreement and Payment Button */}
        <div className="mt-0 flex border-2 border-black border-t-0  flex-col items-center">
          {/* Agreement Checkbox */}
          <div className="mb-4 flex items-center gap-2">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
            />
            <span className="text-sm sm:text-base font-medium">
              예약과 관련된 모든{" "}
              <span className="underline">주의사항</span> 및{" "}
              <span className="underline">약관에</span> 동의합니다
            </span>
          </div>

          {/* Payment Button */}
          <button
            disabled={!isAgreed}
            className={`w-full max-w-xs rounded-md px-6 py-3 text-center text-sm font-semibold text-white transition ${
              isAgreed
                ? "bg-customBrown hover:bg-opacity-90"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            결제 하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
