import Image from 'next/image';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0  flex w-full items-center justify-between bg-transparent px-6 py-4">
      {/* Logo */}
      <div className="ml-[75px] flex items-center">
        <Image
          src="/SaunaLogo.png" // Carrega a imagem da pasta public
          alt="Logo"
          width={60}
          height={65}
          className="mr-4 invert" // Aplica o filtro de cor
        />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-[18px] text-gray-800">
        <Link href="#intro" className="hover:text-gray-500">솔로사우나 레포 소개</Link>
        <Link href="#guide" className="hover:text-gray-500">시설 안내</Link>
        <Link href="#use" className="hover:text-gray-500">이용 방법</Link>
        <Link href="#comunity" className="hover:text-gray-500">커뮤니티</Link>
        <Link href="#directions" className="hover:text-gray-500">오시는 길</Link>
        <Link href="#reservation" className="hover:text-gray-500">예약하기</Link>
      </div>

      {/* Authentication Links */}
      <div className="mr-[75px] flex space-x-4 text-[18px] text-black">
        <Link href="#login" className="hover:text-gray-500">로그인</Link>
        <div className='border-l-2 border-l-black '></div>
        <Link href="#register" className="hover:text-gray-500">회원 가입</Link>
      </div>
    </nav>
  );
};

export default NavBar;
