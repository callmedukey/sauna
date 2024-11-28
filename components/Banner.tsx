// components/Banner.tsx
import React from "react";

import CarouselDemo from "./Carousel/CarouselBanner";

const Banner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-cover bg-center">
      {/* Carousel as Background */}
      <CarouselDemo />

      {/* Overlay and Text Content */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="px-4 text-center text-white md:px-8">
          <h1 className="mb-4 mt-[110px] text-[32px] font-bold">
            나만을 위한 사우나 솔로 사우나 레포
          </h1>
          <p className="mb-6 mt-[20px] text-[16px]">
            국내 최초의 개인 사우나. 프라이빗한 공간에서 본인만의 휴식을
          </p>
          <button className="mt-[20px] rounded-[10px] border-2 bg-transparent px-[20px] py-1 text-[16px] font-semibold text-white transition hover:bg-gray-300">
            예약하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
