import Link from "next/link";
import React from "react";

const AdmNavbar = () => {
  return (
    <nav className="">
      <ul className="mx-auto mt-4 flex w-full max-w-[950px] flex-wrap justify-center gap-4 px-4 sm:justify-start">
        <li>
          <Link
            href="/adm/reserve"
            className="border border-white bg-black px-4 py-2 text-white transition hover:bg-gray-800"
          >
            예약 관리
          </Link>
        </li>
        <li>
          <Link
            href="/adm/new-reserve"
            className="border border-white bg-black px-4 py-2 text-white transition hover:bg-gray-800"
          >
            네이버 예약
          </Link>
        </li>
        <li>
          <Link
            href="/adm/all-reserve"
            className="border border-white bg-black px-4 py-2 text-white transition hover:bg-gray-800"
          >
            내역
          </Link>
        </li>
        <li>
          <Link
            href="/adm/member-manage"
            className="border border-white bg-black px-4 py-2 text-white transition hover:bg-gray-800"
          >
            회원 관리
          </Link>
        </li>
        <li>
          <Link
            href="/adm/annoucement"
            className="border border-white bg-black px-4 py-2 text-white transition hover:bg-gray-800"
          >
            공지 사항
          </Link>
        </li>
        <li>
          <Link
            href="/adm/inquires"
            className="border border-white bg-black px-4 py-2 text-white transition hover:bg-gray-800"
          >
            컨텐츠
          </Link>
        </li>
        <li>
          <Link
            href="/adm/calendar"
            className="border border-white bg-black px-4 py-2 text-white transition hover:bg-gray-800"
          >
            캘린더
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdmNavbar;
