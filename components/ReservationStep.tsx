// File: components/ReservationStep.tsx
import React from "react";

import Counter from "./Step1";

const ReservationStep: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <h2 className="mb-6 text-2xl font-bold">Step 1: 인원</h2>
      <div className="space-y-4">
        <Counter label="성인 여성" description="만 12세 이상" />
        <Counter label="성인 남성" description="만 12세 이상" />
        <Counter label="어린이" description="만 6-12 세" />
        <Counter label="유아" description="만 6세 미만" />
      </div>
      <button className="mt-6 rounded bg-yellow-500 px-6 py-3 font-bold text-white transition hover:bg-yellow-600">
        예약 인원 확인
      </button>
      <div className="mt-6 space-y-2 text-sm text-gray-600">
        <p>• 룸별 인원제한 - 일반룸 (1명~3명) / 일반룸+대형사우나 (3명~6명)</p>
        <p>• 만6세 미만 유아는 무료로 입장할 수 있습니다.</p>
        <p>• 만6세~12세 어린이의 입장료는 20,000원입니다.</p>
        <p>• 솔로사우나 공정전에서는 남성과 여성이 함께 이용할 수 있는 대형사우나로 제한됩니다.</p>
        <p>• 이용제한 인원 수 내에서는 현장에서 추가 인원 결제가 가능합니다.</p>
        <p>• 예약에 도움이 필요하신 고객님께서는 전화로 안내해드리겠습니다 (tel. 070-8860-8553).</p>
      </div>
    </div>
  );
};

export default ReservationStep;
