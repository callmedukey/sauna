import Image from "next/image";
import React from "react";

const DirectionsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center  py-8">
      <div className="w-full max-w-5xl rounded-md bg-white">
        {/* Header */}
        <div className="mb-[50px] bg-gray-100 py-[150px] text-center">
          <h1 className="text-3xl font-semibold text-gray-800">네이버 맵</h1>
        </div>

        {/* Address and Contact Information */}
        <div className="mb-[90px] text-center font-bold">
          <p>주소: 서울특별시 동작구 노들로 2길 7 (드림스퀘어 A동 206호)</p>
          <p className="mb-[35px]">TEL: 070-8860-8553</p>
          <p>찾기 어려우실 경우, 편하게 전화 주시면 안내해드리겠습니다.</p>
        </div>

        {/* Main Content with Vertical Divider */}
        <div className=" flex flex-col gap-5 sm:flex-row md:flex-row lg:flex-row xl:flex-row">
          {/* Left Section */}
          <div className="flex flex-1 flex-col items-center space-y-6 p-1">
            {/* Image and Caption */}
            <Image
              src="/Direction1.png"
              alt="Parking Entrance Direction"
              layout="responsive"
              width={400}
              height={250}
              className="mb-[85px]"
            />
            {/* Left Section Description */}
            <div className="flex items-center gap-2 self-start p-1">
              <Image src="/IconCar.png" alt="Car Icon" width={50} height={50} />
              <p className="font-bold">
              차량 방문 시
              </p>
            </div>
            <p className="text-[14px]"> ‘노량진 드림스퀘어’를 목적지로 설정해 주세요. 지하2층에 주차하여 주시기 바랍니다.
                 부득이하게 3층이하에 주차하신 고객님께서는 전화 부탁드립니다.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-1 flex-col items-center space-y-6 p-1">
            {/* Image and Caption */}
            <Image
              src="/Direction2.png"
              alt="Location Map"
              layout="responsive"
              width={400}
              height={250}
              className="mb-[85px]"
            />

            {/* Right Section Descriptions */}
            <div className="flex flex-col space-y-4 self-start">
            <div className="flex items-center gap-2 self-start">
                <Image src="/IconMan.png" alt="Walk Icon" width={50} height={50} />
                <p className="font-bold">
                도보
              </p>              
              </div>
              <p className="text-[14px]">(노량진 수산시장 방향)지하도를 통해 들어오신 후, 에스컬레이터 맞은편에
                 위치한 엘리베이터를 이용해 2층으로 올라오시면 됩니다.
                </p>
              <div className="flex items-center gap-2 self-start">
                <Image src="/IconTrain.png" alt="Train Icon" width={50} height={50} />
                <p className="font-bold">
                지하철
              </p>
                </div>
                <p className="text-[14px]">
                1,9호선 노량진역 하차 후 9번출구,7번출구,6번출구 도보 5분거리
                </p>
              <div className="flex items-center gap-2 self-start">
                <Image src="/IconBus.png" alt="Bus Icon" width={50} height={50} />
                <p className="font-bold">
                버스
              </p>
              </div>
              <p className="text-[14px] xl:pb-[150px]">노량진수산시장. CTS기독교TV (현대아파트,유한양행(중)방면)<br/>
              시내버스  150, 360, 507, 605, 640, 641, 650, N64, 5531, 6211, 6411, 6515, 8641<br/>
              마을버스  동작 01, 03, 08, 18<br/><br/>

              노량진수산시장. CTS기독교TV(중) (노량진역(중)방면)<br/>
              시내버스  150, 360, 507, 605, 640, 5531, 6211, 6411, 8641<br/>
              마을버스  동작 01, 03, 08, 18<br/><br/>

              하차 후 (노량진 수산시장 방향)지하도를 통해 들어오신 후, 에스컬레이터 맞은편에 위치한 엘리베이터를 이용해 2층으로 올라오시면 됩니다.


   
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectionsPage;
