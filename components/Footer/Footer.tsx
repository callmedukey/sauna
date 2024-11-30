import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    
    
    /// DesktopFooter
    <footer className="hidden w-full bg-gray-100 px-6 py-8 text-sm text-gray-700 lg:block xl:block">
      <div className="mx-auto  flex max-w-7xl flex-col items-start justify-between space-y-4 lg:flex-row lg:items-center lg:space-y-0">
        
        {/* Left Section with Logo */}
        <div className="flex space-y-2">
          <Image
            src="/LogoFooter.png"
            alt="Solo sauna.LEPO Logo"
            width={200} 
            height={50}
            className="object-contain"
          />
        <div className='ml-[25px] flex flex-col  gap-2'>
          <p>대표:김민정
          </p>
         <div className=''> 
          <p className=''>사업자등록번호:618-13-36099 <span className='mx-5 text-[20px]'>|</span> 통신판매업신고번호: 2024-서울동작-0979 </p> 
          <p>주소:서울특별시 동작구 노들로 2길 7, 드림스퀘어 A동 206호
          </p>
          <p>E-MAIL: solosauna.lepo24@naver.com</p>
          </div>
          <div className="flex space-x-4">
            <p className="text-customGray">개인정보처리방침</p>
            <span className='mx-5 text-[20px] text-customGray'>|</span>
            <p className="text-customGray">이용약관</p>
          </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-2 text-left">
          <h2 className="text-[16px] font-bold">고객센터</h2>
          <p className=''>TEL: 070-8860-8553</p>
          <p className='text-customGray'>운영시간: 월 - 목 9:00 - 23:00</p>
          <p className='ml-16 text-customGray '>금 - 일 8:30 - 24:00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
