"use client";

import Image from "next/image";
import Link from "next/link";

import CarouselWomen from "./CarouselWomen";

export default function WomenFacilities() {
  return (
    <main className="flex flex-col bg-white py-6">
      
      {/* Título Principal */}
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-center text-[20px] font-semibold sm:text-[24px] md:text-[30px] lg:text-[30px] xl:text-[30px]">
        솔로 사우나 레포만의 시설 안내
        </h1>

        {/* Navegação em Abas */}
        <nav className="mb-8 flex flex-nowrap items-center space-x-8 p-2">
          <Link href="/women-room" passHref>
            <span className="cursor-pointer  pb-2 text-[18px] font-semibold sm:border-b-2 sm:text-[18px] md:border-b-2 md:text-[20px] lg:border-b-2 lg:text-[24px] xl:border-b-2 xl:text-[24px]">
              여성 룸
            </span>
          </Link>
          <Link href="/men-room" passHref>
            <span className="cursor-pointer border-black pb-2 text-lg text-gray-500 hover:text-black">
              남성 룸
            </span>
          </Link>
          <Link href="/family-room" passHref>
            <span className="cursor-pointer pb-2 text-lg text-gray-500 hover:text-black">
              가족 룸
            </span>
          </Link>
          <Link href="/powder-room" passHref>
            <span className="cursor-pointer pb-2 text-lg text-gray-500 hover:text-black">
              파우더 룸
            </span>
          </Link>
        </nav>
      </div>

      {/* Seção do Carrossel */}
      <section className="mb-6 px-2">
        <CarouselWomen />
      </section>

      {/* Descrição */}
      <div className="flex flex-col items-center px-2">
        <section className="max-w-2xl">
          <h2 className="mb-4 text-center text-xl font-semibold">남성 룸</h2>
          <p className="mb-4 leading-relaxed text-gray-700">
          1인 또는 3인이 이용할 수 있는 욕조 타입 룸으로
가족, 지인, 친구와 함께 [우리만의 프라이빗한 공간] 에서 지친 몸과 마음의 스트레스를 풀고, 일상 속에 힐링을 공유하며,
몸과 마음을 재충전할 수 있는 포근하고 따듯한 공간입니다.<br /><br />
샤워실에는 모던한 타일 바탕에 플랜 테리어로,
식물의 녹색이 시각적인 안정감을 더해주며, 좀 더
자연에서 쉬는 듯한 느낌으로
보다 안락하게 목욕을 즐길 수 있습니다.
가족, 지인, 친구와 함께 샤워 후 사우나의 열에 익숙해진 몸을 시원하게 식히며,
보다 평온하고 행복한 시간을 보내시기 바랍니다.
          </p>
        </section>
      </div>

      {/* Seção de Itens - 실내 구비 품목 */}
      <section className="mx-0 mt-8 w-full bg-gray-100 px-0 py-8">
        <h3 className="mb-4 text-center text-lg font-semibold">실내 구비 품목</h3>
        <div className="flex justify-center px-2">
          <Image
            src="/Table1.png"
            alt="실내 구비 품목"
            width={700} // Ajuste o tamanho conforme necessário
            height={300}
            className=""
          />
        </div>
      </section>

      {/* Seção de Itens - 1인 제공 품목 */}
      <section className=" bg-white py-8">
        <h3 className="mb-4 text-center text-lg font-semibold">1인 제공 품목</h3>
        <p className="mb-8 text-center text-[12px]">
            상황에 따라 제공품은 변동될 수 있습니다.</p>
        <div className="flex justify-center px-2">
          <Image
            src="/Table2.png"
            alt="1인 제공 품목"
            width={700} // Ajuste o tamanho conforme necessário
            height={300}
            className=""
          />
        </div>
      </section>
    </main>
  );
}
