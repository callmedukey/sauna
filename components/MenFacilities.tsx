"use client";

import Image from "next/image";
import Link from "next/link";


import CarouselMan from "./Carousel/CarouselMen";

export default function MenFacilities() {
  return (
    <main className=" flex flex-col bg-white py-6">
      
      {/* Título Principal */}
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-center text-[20px] font-semibold sm:text-[24px] md:text-[30px] lg:text-[30px] xl:text-[30px]">
          솔로 사우나 레포만의 시설 안내
        </h1>

        {/* Navegação em Abas */}
        <nav className="mb-8 flex flex-nowrap items-center space-x-8 p-2">
          <Link href="/guide/women" passHref>
            <span className="noselect-room">
              여성 룸
            </span>
          </Link>
          <Link href="/guide/men" passHref>
            <span className="select-room">
              남성 룸
            </span>
          </Link>
          <Link href="/guide/family" passHref>
            <span className="noselect-room">
              가족 룸
            </span>
          </Link>
          <Link href="/guide/bath" passHref>
            <span className="noselect-room">
              파우더 룸
            </span>
          </Link>
        </nav>
      </div>

      {/* Seção do Carrossel */}
      <section className="mb-6 px-2">
        <CarouselMan />
      </section>

      {/* Descrição */}
      <div className=" flex flex-col items-center px-2">
        <section className="max-w-2xl">
          <h2 className="my-[50px] text-center text-[22px] font-semibold">여성 룸</h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            1인 또는 3인이 이용할 수 있는 혼자 또는 타인과 이용하는 가족, 지인, 친구와 함께
            (온라인의 프라이빗 공간) 에서 자신의 몸과 마음의 스트레스를 풀고, 일상 속의 일탈을 공유하며, 몸과 마음을 재충전할 수 있는 포근하고 따뜻한 공간입니다.
            <br /><br />
            사우나는 모든 타일 바닥에 루프 히팅이 깔리며, 시원한 벽에서 시각적인 안정감을 더해주고,
            좀 더 자연에서 쉬는 듯한 느낌으로 보다 편안하게 목욕을 즐길 수 있습니다. 가족, 지인,
            친구와 함께 사우 후 사우나의 벽에 은혜로운 향을 시내하게 채워, 보다 평온하고 행복한
            시간을 보내시기 바랍니다.
          </p>
        </section>
      </div>

      {/* Seção de Itens - 실내 구비 품목 */}
      <section className="mx-0 mt-8 w-full bg-gray-100 px-0 py-8">
        <h3 className="mb-4 text-center text-[22px] font-semibold">실내 구비 품목</h3>
        <div className=" flex justify-center px-2">
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
      <section className=" bg-white px-2 py-8">
        <h3 className="mb-4 text-center text-[22px] font-semibold">1인 제공 품목</h3>
        <p className="mb-8 text-center text-[16px]">
            상황에 따라 제공품은 변동될 수 있습니다.</p>
        <div className="flex justify-center">
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
