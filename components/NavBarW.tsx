"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const NavBarW = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute z-10 w-full bg-transparent px-6 py-4">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="ml-[75px] flex items-center">
          <Image
            src="/SaunaLogo.png"
            alt="Logo"
            width={60}
            height={65}
            className="mr-4 "
          />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="relative flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" text-white focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 origin-top-right space-y-4 rounded-lg bg-white p-4 text-[16px] text-gray-800 shadow-lg transition-transform">
              {/* Authentication Links at the Top */}
              <div className="flex justify-between">
                <Link href="#login" className="hover:text-gray-500">로그인</Link>
                <span className="text-black">|</span>
                <Link href="#register" className="hover:text-gray-500">회원 가입</Link>
              </div>
              
              {/* Divider */}
              <div className="my-4 border-t border-gray-300"></div>

              {/* Navigation Links in Specified Order */}
              <Link href="/intro" className="block hover:text-gray-500">솔로사우나 레포 소개</Link>
              <Link href="/guide/women" className="block hover:text-gray-500">시설 안내</Link>
              <Link href="/how-to" className="block hover:text-gray-500">이용 방법</Link>
              <Link href="#comunity" className="block hover:text-gray-500">커뮤니티</Link>
              <Link href="#directions" className="block hover:text-gray-500">오시는 길</Link>
              <Link href="#reservation" className="block hover:text-gray-500">예약하기</Link>
            </div>
          )}
        </div>

        {/* Full Navigation Links for Larger Screens */}
        <div className="hidden space-x-8 text-[18px] text-white lg:flex">
          <Link href="/intro" className="hover:text-gray-500">솔로사우나 레포 소개</Link>
          <Link href="/guide/women" className="hover:text-gray-500">시설 안내</Link>
          <Link href="/how-to" className="hover:text-gray-500">이용 방법</Link>
          <Link href="#comunity" className="hover:text-gray-500">커뮤니티</Link>
          <Link href="#directions" className="hover:text-gray-500">오시는 길</Link>
          <Link href="#reservation" className="hover:text-gray-500">예약하기</Link>
        </div>

        {/* Authentication Links for Larger Screens */}
        <div className="mr-[75px] hidden space-x-4 text-[18px] text-white lg:flex">
          <Link href="#login" className="hover:text-gray-500">로그인</Link>
          <div className='border-l-2 border-l-white '></div>
          <Link href="#register" className="hover:text-gray-500">회원 가입</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBarW;
