// components/SaunaPage.tsx
import Image from 'next/image';

const IntroSauna = () => {
  return (
    <div className=" md: flex flex-col items-center bg-white lg:py-12 xl:py-12">
      <h1 className=" my-[75px] text-2xl font-bold md:my-[80px] lg:my-[100px] xl:my-[120px]">솔로사우나 레포 소개</h1>

      <div className=" flex max-w-screen-lg  flex-col">
        
        {/* Top Row */}
        <div className="right-row">
          <div className=" text-container">
            <h2 className="heading-row">Story of Solo Sauna Lepo</h2>
            <p className="paragraph-row">
            솔로 사우나 레포는 에스토니아 문화에서 유래한 핀란드식 사우나를 현대적인 방식으로 만들어낸 
휴식 공간입니다. 프라이빗하고 아늑한 공간에서 타인의 시선이나 접촉을 방해받지 않고 걱정할
필요가 없는 오직 나만의 시간. 사우나에서 몸과 마음을 씻으며 자신의 내면에 차오르는 평화로운
감정을 만끽해 보시기 바랍니다.
            </p>
          </div>
          <div className="image-container">
            <Image
              src="/Introd1.png"
              alt="Sauna Interior"
              width={698}
              height={500}
              className=""
            />
          </div>
        </div>

        {/* Middle Row */}
        <div className="left-row ">
          <div className="image-container">
            <Image
              src="/Introd2.png"
              alt="Sauna View"
              width={698}
              height={500}
              className=""
            />
          </div>
          <div className="text-container">
            <h2 className="heading-row">
              사우나는 핀란드어로 <br/> &apos;증기 목욕&apos;을 의미합니다
            </h2>
            <p className="paragraph-row">
                핀란드의 경우 사우나가 있는 가정은 드문 일이 아닙니다. 사우나 문화는 핀란드에서 세계로 퍼져
                나가 많은 전 세계 사람들이 사우나를 즐기고 있습니다. 핀란드식 사우나에는 고온으로 가열된 
                사우나 스톤 위에 물을 부어 증기를 발생시키고, 사우나실의 습도와 온도를 올리면서 체온이
                상승하고, 이로 인한 발열로 몸에 있는 노폐물을 밖으로 노출시킵니다.<br/><br/> 또한 아로마 오일로 첨가된 물(AROMA WATER)을 사용하여 사우나 스톤에 부어 실내 온도를
                한 번에 올리고 이로 인한 증기로 목욕을 하는 것을 LÖYLY(뤄울루)라고 합니다.

           </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="right-row">
          <div className=" text-container">
            <h2 className="heading-row">핀란드 사우나 효과</h2>
            <p className="paragraph-row">
                핀란드식 사우나는 온도와 습도를 조절할 수 있기 때문에 너무 덥고 습도가 낮은 건식 사우나를 좋아하지 않더라도 핀란드식 사우나를 편하게 사용할 수 있습니다. 핀란드식 사우나는 원적외선
                효과뿐만 아니라 음이온이 풍부한 수증기가 몸의 심부에 발한을 촉진하고 신진대사와 피로 회복,
                해독 등 몸에 많은 이로운 작용을 하는 것으로 알려져 있습니다.<br/><br/> 핀란드 사우나 문화의 또 다른 필수적인 부분은 &quot;Vihita&quot;입니다. 그것은 자작나무의 어린잎으로 
                낱단으로 만들어지며, 그냥 매달아 사우나 룸은 숲의 향기로 가득 차게 됩니다.
                SOLO SAUNA LEPO에서 자신만의 사우나를 즐기시기 바랍니다.

            </p>
          </div>
          <div className="image-container">
            <Image
              src="/Introd3.png"
              alt="Sauna Interior Detail"
              width={698}
              height={500}
              className=""
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default IntroSauna;