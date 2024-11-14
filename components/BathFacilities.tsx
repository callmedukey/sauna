"use client";

import Image from "next/image";
import Link from "next/link";

import CarouselBath from "./CarouselBath";

export default function BathFacilities() {
  return (
    <main className=" flex flex-col bg-white py-6">
      
    
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
            <span className="noselect-room">
              남성 룸
            </span>
          </Link>
          <Link href="/guide/family" passHref>
            <span className="noselect-room">
              가족 룸
            </span>
          </Link>
          <Link href="/guide/bath" passHref>
          <span className="select-room">
              파우더 룸
            </span>
          </Link>
        </nav>
      </div>

      {/* Seção do Carrossel */}
      <section className="mb-6 px-2">
        <CarouselBath />
      </section>

      {/* Descrição */}
      <div className=" flex flex-col items-center px-2">
        <section className="max-w-2xl">
          <h2 className="mb-4 text-center text-xl font-semibold">
          파우더 룸
          </h2>
          <p className="mb-4 text-center leading-relaxed text-gray-700">
          사우나 이용 시간에 포함되어 있지 않는 서비스로 체크아웃 이후에도 이용하실 수 있습니다.

<br /><br />
여성 고객님만 이용 가능합니다.
          </p>
        </section>
      </div>

      {/* Seção de Itens - 실내 구비 품목 */}
      <section className="mx-0 mt-8 w-full bg-gray-100 px-2 py-8">
        <h3 className="mb-4 text-center text-lg font-semibold">실내 구비 품목</h3>
        <div className=" flex justify-center px-2">
          <Image
            src="/Table3.png"
            alt="실내 구비 품목"
            width={700} // Ajuste o tamanho conforme necessário
            height={300}
            className=""
          />
        </div>
      </section>
    </main>
  );
}
