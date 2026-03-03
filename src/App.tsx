import { useState } from "react";
import { type Activity } from "./components/types";
import "./App.css";
import { mockActivities } from "./components/data";
import { InputStep } from "./components/inputStep";

function App() {
  const [data, setData] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [participants, setParticipants] = useState(1);

  const fetchActivity = async () => {
    setLoading(true);

    // API 통신 느낌을 주기 위한 가짜 대기 시간
    await new Promise((resolve) => setTimeout(resolve, 600));

    try {
      // 입력받은 인원수와 일치하는 활동만 필터링
      const filtered = mockActivities.filter(
        (item) => item.participants === participants,
      );

      if (filtered.length > 0) {
        const randomResult =
          filtered[Math.floor(Math.random() * filtered.length)];
        setData(randomResult);
        setStep(2);
      } else {
        alert(`${participants}명이서 할 수 있는 활동 데이터가 없어요!`);
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="logo">Yogo</h1>

      {step === 0 && (
        <>
          <p className="description">심심할 땐 고민 말고 "요고"</p>
          <button className="recommend-btn" onClick={() => setStep(1)}>
            추천 시작하기
          </button>
        </>
      )}

      {step === 1 && (
        <InputStep
          participants={participants}
          setParticipants={setParticipants}
          onFetch={fetchActivity}
          loading={loading}
        />
      )}

      {step === 2 && data && (
        <div className="result-card">
          <h2 className="result-title">{data.activity}</h2>
          <p className="result-info">
            종류 : {data.type} | 인원 : {data.participants}명
          </p>
          <button className="retry-btn" onClick={() => setStep(0)}>
            다시 하기
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
