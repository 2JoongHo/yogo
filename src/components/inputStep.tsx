// 인원 선택 컴포넌트

import "./inputStep.css";

interface InputStepProps {
  participants: number;
  setParticipants: (val: number) => void;
  onFetch: () => void;
  loading: boolean;
}

export function InputStep({
  participants,
  setParticipants,
  onFetch,
  loading,
}: InputStepProps) {
  return (
    <div className="input-section">
      <div className="input-container">
        <p className="input-description">우리는!</p>
        <div className="input-wrapper">
          <input
            type="number"
            value={participants}
            onChange={(e) => setParticipants(Number(e.target.value))}
            min="1"
            className="participants-input"
          />
          <span className="unit">명</span>
        </div>
      </div>
      <button className="recommend-btn" onClick={onFetch} disabled={loading}>
        {loading ? "뭐가 좋을까~" : "추천 받기"}
      </button>
    </div>
  );
}
