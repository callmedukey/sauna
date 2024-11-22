
import Image from 'next/image'

const FooterM = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-100 py-6 lg:hidden xl:hidden">
      <div className="container mx-auto flex  items-center justify-between px-4 md:flex-row md:items-start">
        {/* Left Area */}
        <div className="space-y-1 border-r-2 border-black pr-2 text-sm">
          <p>대표: 김민정</p>
          <p>사업자등록번호: 618-13-36099</p>
          <p>통신판매업신고번호: 2024-서울동작-0979</p>
          <p>주소: 서울특별시 동작구 노들로 2길 7, 드림스퀘어 A5 206호</p>
          <p>E-MAIL: <a href="mailto:solosauna_lepo24@naver.com" className="text-blue-600">solosauna_lepo24@naver.com</a></p>
          <p>이용약관 | 개인정보처리방침</p>
        </div>


        {/* Right Area */}
        <div className="flex flex-col items-center pl-2 md:items-start">
          <Image src="/LogoFooter.png" alt="Solo sauna_LEPO" width={200} height={50} />

          <div className="mt-2 text-center text-gray-700 md:text-left">
            <div className="mt-2 flex flex-col space-y-1 p-1 text-sm">
              <p className='text-customGray'>운영시간: 월 - 목 9:00 - 23:00</p>
              <p className='text-customGray sm:ml-16 md:ml-16'>금 - 일 8:30 - 24:00</p>
              <p>TEL: 070-8860-8553</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterM
