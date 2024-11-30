"use client";

import Image from "next/image";
import Link from "next/link";

import CarouselFam from "./Carousel/CarouselFam";

export default function FamFacilities() {
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
            <span className="noselect-room">
              남성 룸
            </span>
          </Link>
          <Link href="/guide/family" passHref>
            <span className="select-room">
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
        <CarouselFam />
      </section>

      {/* Descrição */}
      <div className=" flex flex-col items-center px-2">
        <section className="max-w-2xl">
          <h2 className="my-[50px] text-center text-[22px] font-semibold">
            가족 룸  ]
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
          여유로운 핀란드식 대형 사우나를 갖추고 있어, 보다 넓고 편안한 공간에서 많은 인원이 함께 즐
길 수 있는 최적의 환경을 제공합니다. 여성 룸과 남성 룸을 연결하여, 가족 단위가 프라이빗하게
함께 할 수 있는 독립된 공간에서 진정한 가족 사우나의 즐거움을 만끽하실 수 있습니다.
<br /><br />


지친 몸과 마음의 스트레스를 풀고, 가족과 함께 힐링의 시간을 보내며, 따듯한 사우나와 함께 편
안한 휴식을 취할 수 있는 특별한 공간입니다. 자연과 어우러진 인테리어와 함께, 더욱 안락하고
평온한 시간을 보내시기 바랍니다.
          </p>
        </section>
      </div>

      {/* Seção de Itens - 실내 구비 품목 */}
      <section className="mx-0 mt-8 w-full bg-gray-100 px-2 py-8">
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
        <p className="mb-8 text-center text-[16x]">
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
