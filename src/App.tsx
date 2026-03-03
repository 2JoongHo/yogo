import { useState } from "react";
import { type Activity } from "./components/types";
import "./App.css";
import { mockActivities } from "./components/data"; // 분리된 데이터 리스트 임포트
import { InputStep } from "./components/inputStep"; // 인원 선택용 분리 컴포넌트 임포트

function App() {
  // 상태(State) 관리
  const [data, setData] = useState<Activity | null>(null); // 추천받은 활동 데이터
  const [loading, setLoading] = useState(false); // 로딩 애니메이션 상태
  const [step, setStep] = useState(0); // 화면 단계 (0:메인, 1:인원입력, 2:결과)
  const [participants, setParticipants] = useState(1); // 사용자가 입력한 인원수

  // 비동기 데이터 처리 함수
  const fetchActivity = async () => {
    setLoading(true);

    // 실제 API 통신 시 발생하는 딜레이를 시뮬레이션 (UX를 위해 추가)
    await new Promise((resolve) => setTimeout(resolve, 600));

    try {
      // 데이터에서 조건에 맞는 것만 추출
      const filtered = mockActivities.filter(
        (item) => item.participants === participants,
      );

      if (filtered.length > 0) {
        // 필터링된 데이터 중 랜덤으로 하나를 선정하여 화면에 표시
        const randomResult =
          filtered[Math.floor(Math.random() * filtered.length)];
        setData(randomResult);
        setStep(2); // 결과 화면으로 전환
      } else {
        // 해당 인원수가 즐길 수 있는 데이터가 없을 경우
        alert(`${participants}명이서 할 수 있는 활동 데이터가 없어요!`);
      }
    } catch (error: any) {
      console.error(error); // 에러 발생 시 로그 출력
    } finally {
      setLoading(false); // 성공/실패 여부와 상관없이 로딩 종료
    }
  };

  return (
    <div className="container">
      <h1 className="logo">Yogo</h1>

      {/* 초기 메인 화면 */}
      {step === 0 && (
        <>
          <p className="description">심심할 땐 고민 말고 "요고"</p>
          <button className="recommend-btn" onClick={() => setStep(1)}>
            추천 시작하기
          </button>
        </>
      )}

      {/* 인원수 입력 */}
      {step === 1 && (
        <InputStep
          participants={participants}
          setParticipants={setParticipants}
          onFetch={fetchActivity}
          loading={loading}
        />
      )}

      {/* 결과 표시 */}
      {step === 2 && data && (
        <div className="result-card">
          <h2 className="result-title">{data.activity}</h2>
          <p className="result-info">
            종류 : {data.type} | 인원 : {data.participants}명
          </p>
          {/* 초기 단계로 돌아가기 버튼 */}
          <button className="retry-btn" onClick={() => setStep(0)}>
            다시 하기
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
