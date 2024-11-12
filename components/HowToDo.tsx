// components/SaunaPage.tsx
import Image from 'next/image';

const HowToDo = () => {
  return (
    <div className="md: flex flex-col items-center bg-white lg:py-12 xl:py-12">
      <h1 className=" mb-10 mt-[75px] text-2xl font-bold md:mt-[80px] lg:mt-[100px] xl:mt-[120px]">이용방법</h1>
      <p className='mb-[75px] text-center md:mb-[80px] lg:mb-[100px] xl:mb-[120px]'>‘솔로 사우나_레포(노량진점)’은 100% 예약제로 운영되고 있습니다.<br/>
      사전예약 후 이용 가능합니다.
      <br/><br/>
      당사 예약 페이지에서 원하는 날짜와 시간을 예약해 주시기 바랍니다.<br/>
      네이버 및 전화예약 가능합니다.<br/>
      *방문 당일에는 대기시간 없이 이용 가능합니다
      
      
      </p>
    

      <div className=" flex max-w-screen-lg  flex-col">
        
        {/* First Row */}
        <div className="flex w-full flex-col items-center gap-4 p-4 sm:flex-col md:flex-col lg:flex-row  xl:flex-row">
          <div className=" mx-1  md:w-1/2 lg:w-1/2 xl:w-1/2">
            <h2 className="mb-4 text-lg font-semibold">방문 안내</h2>
            <p className="text-[16px] ">
            방문 당일, 노량진역 9번 출구에서 도보로 3분 거리에 위치한 &apos;노량진 드림스퀘어 상가 2층 [노들역방향] 솔로 사우나_레포(노량진점)’으로 오시면 됩니다.
<br/><br/>
원활한 이용을 위해 예약 시간 5분 전까지 도착해 주시기 바랍니다.
            </p>
          </div>
          <div className="  md:w-1/2 lg:w-1/2 xl:w-1/2">
            <Image
              src="/HowTo1.png"
              alt="HowTo1"
              width={698}
              height={500}
              className=""
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex w-full flex-col-reverse items-center gap-4 p-4 lg:flex-row xl:flex-row ">
          <div className=" md:w-1/2 lg:w-1/2 xl:w-1/2">
            <Image
              src="/HowTo2.png"
              alt="HowToDo2"
              width={698}
              height={500}
              className=""
            />
          </div>
          <div className="mx-1 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <h2 className="mb-4 text-lg font-semibold">동의서 작성</h2>
            <p className="text-sm">
            사우나 이용 전 리셉션 데스크 앞 테이블에 앉아
안전 동의서를 숙지하고 동의서에 서명해
주시기
바랍니다.
           </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex w-full flex-col items-center gap-4 p-4 lg:flex-row xl:flex-row ">
          <div className=" mx-1 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <h2 className="mb-4 text-lg font-semibold">서비스 안내</h2>
            <p className="text-[13px]">
            룸 안에는 기본적인 샤워용품이 구비되어 있습니다. 추가로 필요한 용품이 있으시면 리스트를 확인하신 후 직원에게 요청해 주시기 바랍니다.
간단한 웰컴 드링크가 준비되어 있으며,
추가 음료를 
원하실 경우 직원에게 구매 요청하실 수
있습니다. 룸 내부에서는 인터폰을 통해 주문이 가능합니다.

            </p>
          </div>
          <div className="  md:w-1/2 lg:w-1/2 xl:w-1/2">
            <Image
              src="/HowTo3.png"
              alt="Sauna Interior Detail"
              width={698}
              height={500}
              className=""
            />
          </div>
        </div>


        {/* Forth Row */}
        <div className="flex w-full flex-col-reverse items-center gap-4 p-4 lg:flex-row xl:flex-row ">
          <div className=" md:w-1/2 lg:w-1/2 xl:w-1/2">
            <Image
              src="/HowTo4.png"
              alt="HowToDo4"
              width={698}
              height={500}
              className=""
            />
          </div>
          <div className="mx-1 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <h2 className="mb-4 text-lg font-semibold">온도 조절</h2>
            <p className="text-sm">
              사우나에 들어가기 전 샤워를 하고 몸을 씻으십시오. 이는 더욱 편안한 상태로 땀을 뺄 수 있도록 
              준비하기 위함입니다.
              기본적으로 따뜻한 온도의 물을 욕조에 채워드리지만 시원한 온도를 원하시는 고객님은 방문 최소 1시간 전 연락해 주십시오.
           </p>
          </div>
        </div>

        {/* Fifith Row */}
        <div className="flex w-full flex-col items-center gap-4 p-4 lg:flex-row xl:flex-row ">
          <div className=" mx-1 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <h2 className="mb-4 text-lg font-semibold">증기 조절 안내</h2>
            <p className="text-[13px]">
            사우나실에서는 &apos;뢰일리[Loyly]&apos;를 자유롭게 즐길 수 있습니다.
            &apos;뢰일리&apos;는 사우나 스토브의 사우나 돌에 물을 부어 증기를 발생시키는 방식입니다.
            습도를 원하는 수준으로 조절하십시오.

            </p>
          </div>
          <div className="  md:w-1/2 lg:w-1/2 xl:w-1/2">
            <Image
              src="/HowTo5.png"
              alt="HowTo5"
              width={698}
              height={500}
              className=""
            />
          </div>
        </div>
        {/* Sixth Row */}
        <div className="flex w-full flex-col-reverse items-center gap-4 p-4 lg:flex-row xl:flex-row ">
          <div className=" md:w-1/2 lg:w-1/2 xl:w-1/2">
            <Image
              src="/HowTo6.png"
              alt="HowToDo6"
              width={698}
              height={500}
              className=""
            />
          </div>
          <div className="mx-1 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <h2 className="mb-4 text-lg font-semibold">냉수 샤워 반복법</h2>
            <p className="text-sm">
            일반적으로는 사우나와 냉수 샤워를 반복하는 방법이 있습니다.
            자유롭게 자신의 원하는 온도로 
            본인의 페이스에 맞춰 충분히 휴식을 취하며 이용하시길 바랍니다.
           </p>
          </div>
        </div>

        {/* Seventh Row */}
        <div className="flex w-full flex-col items-center gap-4 p-4 lg:flex-row xl:flex-row ">
          <div className=" mx-1 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <h2 className="mb-4 text-lg font-semibold">서휴식 안내</h2>
            <p className="text-start text-[13px]">

            사우나 또는 입욕을 즐기신 후, 몸을 잘 닦고 누워
            더욱 편안한 휴식을 즐기시길 바랍니다.

            </p>
          </div>
          <div className="  md:w-1/2 lg:w-1/2 xl:w-1/2">
            <Image
              src="/HowTo7.png"
              alt="HowTo7"
              width={698}
              height={500}
              className=""
            />
          </div>
        </div>
        {/* Eight Row */}
        <div className="flex w-full flex-col-reverse items-center gap-4 p-4 lg:flex-row xl:flex-row ">
          <div className=" md:w-1/2 lg:w-1/2 xl:w-1/2">
            <Image
              src="/HowTo8.png"
              alt="HowToDo8"
              width={698}
              height={500}
              className=""
            />
          </div>
          <div className="mx-1 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <h2 className="mb-4 text-lg font-semibold">비상 버튼 및 안전</h2>
            <p className="text-sm">
            각 사우나실에는 비상 버튼이 설치되어 있으니 혹시 몸이 불편하시면 바로 버튼을 누르시거나 인터폰을 통해 저희 직원에게 연락해 주십시오.
           </p>
          </div>
        </div>

        {/* Ninith Row */}
        <div className="flex w-full flex-col items-center gap-4 p-4 lg:flex-row xl:flex-row ">
          <div className=" mx-1 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <h2 className="mb-4 text-lg font-semibold">퇴실 안내</h2>
            <p className="text-[13px]">
            이용 시간 완료 후 리셉션 데스크에서
체크아웃 하시면 됩니다.
퇴실 시간은 다음 예약 손님을 위해 꼭 지켜주십시오.
            </p>
          </div>
          <div className="  md:w-1/2 lg:w-1/2 xl:w-1/2">
            <Image
              src="/HowTo9.png"
              alt="HowToDo9"
              width={698}
              height={500}
              className=""
            />
          </div>
        </div>

                {/* Tenth Row */}
                <div className="flex w-full flex-col-reverse items-center gap-4 p-4 lg:flex-row xl:flex-row ">
          <div className=" md:w-1/2 lg:w-1/2 xl:w-1/2">
            <Image
              src="/HowTo10.png"
              alt="HowToDo10"
              width={698}
              height={500}
              className=""
            />
          </div>
          <div className="mx-1 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <h2 className="mb-4 text-lg font-semibold">여성 전용 파우더룸</h2>
            <p className="text-sm">
            파우더룸은 여성 전용입니다.
파우더룸 이용 시간은 사우나 이용 시간에
포함되어 있지 않으니 체크아웃 후 이용하시기 바랍니다. 
           </p>
          </div>
        </div>



      </div>
    </div>
  );
};

export default HowToDo;